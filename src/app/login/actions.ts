'use server';

import { prisma } from '@/lib/prisma';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    const cedula = formData.get('cedula') as string;
    const clave = formData.get('clave') as string;

    if (!cedula || !clave) {
        return { error: 'Por favor ingrese cédula y clave' };
    }

    const user = await prisma.user.findUnique({
        where: { cedula },
    });

    if (!user) {
        return { error: 'Credenciales inválidas' };
    }

    // Verify password
    const isValid = await bcrypt.compare(clave, user.clave);
    if (!isValid) {
        return { error: 'Credenciales inválidas' };
    }

    // Create session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const session = await encrypt({
        userId: user.id,
        cedula: user.cedula,
        role: user.role,
        nombre: user.nombre,
        expires,
    });

    (await cookies()).set('session', session, { expires, httpOnly: true });

    redirect('/dashboard');
}

export async function logout() {
    (await cookies()).delete('session');
    redirect('/');
}
