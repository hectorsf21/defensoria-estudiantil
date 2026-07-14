'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Helper function to save uploaded file
async function saveUploadedFile(file: File, prefix: string): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Make sure public/uploads folder exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    // Clean up filename and make it unique
    const cleanFileName = `${Date.now()}-${prefix}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = path.join(uploadDir, cleanFileName);
    await writeFile(filePath, buffer);

    return `/uploads/${cleanFileName}`;
}

export async function getUserRole() {
    const session = await getSession();
    return session?.role;
}

export async function createExpediente(data: FormData) {
    const session = await getSession();
    const userRole = session?.role;

    const nombres = data.get('nombres') as string;
    const apellidos = data.get('apellidos') as string;
    const cedula = data.get('cedula') as string;
    // ... other fields

    // Generate Expediente Number: EXP-YYYY-XXXX (Random 4 chars for now to avoid collision/concurrency complexity in simple MVP)
    const year = new Date().getFullYear();
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const numeroExpediente = `EXP-${year}-${randomSuffix}`;

    // Determine status: If SUPER_ADMIN, use provided status or default to EN PROCESO. Otherwise, force EN PROCESO.
    let estatus = 'EN PROCESO';
    if (userRole === 'SUPER_ADMIN') {
        estatus = (data.get('estatus') as string) || 'EN PROCESO';
    }

    // Process uploaded student support file
    let soporteEstudiantePath: string | null = null;
    const soporteFile = data.get('soporte') as File | null;
    if (soporteFile && soporteFile instanceof File && soporteFile.size > 0) {
        try {
            soporteEstudiantePath = await saveUploadedFile(soporteFile, 'soporte');
        } catch (error) {
            console.error('Error saving student support file:', error);
        }
    }

    const newExpediente = await prisma.expediente.create({
        data: {
            numeroExpediente,
            nombres,
            apellidos,
            cedula,
            sexo: data.get('sexo') as string,
            discapacidad: data.get('discapacidad') as string,
            telefono: data.get('telefono') as string,
            correo: data.get('correo') as string,
            carrera: data.get('carrera') as string,
            semestre: data.get('semestre') as string,
            seccion: data.get('seccion') as string,
            periodo: data.get('periodo') as string,
            estado: data.get('estado') as string,
            municipio: data.get('municipio') as string,
            parroquia: data.get('parroquia') as string,
            direccion: data.get('direccion') as string,
            tipoCaso: data.get('tipo_caso') as string,
            unidadCurricular: data.get('unidad_curricular') as string,
            nombreProfesor: data.get('nombre_profesor') as string,
            telefonoProfesor: data.get('telefono_profesor') as string,
            abogadoAsignado: data.get('abogado') as string,
            estatus: estatus,
            soporteEstudiante: soporteEstudiantePath,
        },
    });

    revalidatePath('/dashboard');
    return { success: true, numeroExpediente: newExpediente.numeroExpediente };
}

export async function getExpedientesPaginated(page: number, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [expedientes, total] = await Promise.all([
        prisma.expediente.findMany({
            skip,
            take: limit,
            orderBy: { fechaRegistro: 'desc' },
        }),
        prisma.expediente.count()
    ]);
    return { expedientes, total, totalPages: Math.ceil(total / limit) };
}

export async function getDashboardStats() {
    const totalCasos = await prisma.expediente.count();
    const resueltos = await prisma.expediente.count({
        where: { estatus: { in: ['CERRADO', 'APROBADO'] } }
    });
    return { totalCasos, resueltos };
}

export async function getExpedientes() {
    const expedientes = await prisma.expediente.findMany({
        orderBy: { fechaRegistro: 'desc' },
    });
    return expedientes;
}

export async function getExpedienteByNumber(numero: string) {
    const expediente = await prisma.expediente.findUnique({
        where: { numeroExpediente: numero },
    });
    return expediente;
}

export async function searchExpedientes(query: string) {
    const expedientes = await prisma.expediente.findMany({
        where: {
            OR: [
                { numeroExpediente: { contains: query } },
                { cedula: { contains: query } },
                { abogadoAsignado: { contains: query } },
                { nombres: { contains: query } },
                { apellidos: { contains: query } }
            ]
        },
        orderBy: { fechaRegistro: 'desc' },
    });
    return expedientes;
}

import { getSession } from '@/lib/auth';

export async function approveExpediente(id: number) {
    const session = await getSession();
    if (session?.role !== 'SUPER_ADMIN') {
        throw new Error('Unauthorized');
    }

    await prisma.expediente.update({
        where: { id },
        data: { estatus: 'APROBADO' },
    });
    revalidatePath('/dashboard');
}

export async function uploadRespuestaSolicitud(expedienteId: number, data: FormData) {
    const session = await getSession();
    if (session?.role !== 'SUPER_ADMIN') {
        throw new Error('Unauthorized');
    }

    const respuestaFile = data.get('respuesta') as File | null;
    if (!respuestaFile || !(respuestaFile instanceof File) || respuestaFile.size === 0) {
        return { error: 'No se ha proporcionado un archivo válido' };
    }

    try {
        const respuestaPath = await saveUploadedFile(respuestaFile, 'respuesta');

        const updated = await prisma.expediente.update({
            where: { id: expedienteId },
            data: { 
                respuestaSolicitud: respuestaPath,
                estatus: 'APROBADO'
            },
        });

        revalidatePath('/dashboard');
        return { success: true, respuestaSolicitud: updated.respuestaSolicitud };
    } catch (error) {
        console.error('Error uploading response:', error);
        return { error: 'Error al procesar el archivo de respuesta' };
    }
}

export async function getEstadisticas() {
    const session = await getSession();
    if (session?.role !== 'SUPER_ADMIN') {
        throw new Error('Unauthorized');
    }

    const [porSexo, porDiscapacidad, porCarrera, porTipoCaso, porEstatus] = await Promise.all([
        prisma.expediente.groupBy({
            by: ['sexo'],
            _count: { sexo: true }
        }),
        prisma.expediente.groupBy({
            by: ['discapacidad'],
            _count: { discapacidad: true }
        }),
        prisma.expediente.groupBy({
            by: ['carrera'],
            _count: { carrera: true }
        }),
        prisma.expediente.groupBy({
            by: ['tipoCaso'],
            _count: { tipoCaso: true }
        }),
        prisma.expediente.groupBy({
            by: ['estatus'],
            _count: { estatus: true }
        })
    ]);

    return {
        porSexo: porSexo.map(s => ({ name: s.sexo || 'No especificado', value: s._count.sexo })),
        porDiscapacidad: porDiscapacidad.map(s => ({ name: s.discapacidad || 'No especificado', value: s._count.discapacidad })),
        porCarrera: porCarrera.map(s => ({ name: s.carrera || 'No especificado', value: s._count.carrera })),
        porTipoCaso: porTipoCaso.map(s => ({ name: s.tipoCaso || 'No especificado', value: s._count.tipoCaso })),
        porEstatus: porEstatus.map(s => ({ name: s.estatus || 'No especificado', value: s._count.estatus }))
    };
}
