'use client';
import { useState, useEffect } from 'react';
import { FaSave, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { createExpediente, getUserRole } from '../actions';

// --- EL COMPONENTE SE DEFINE AQUÍ AFUERA ---
// Esto evita que el input pierda el foco al escribir
const InputGroup = ({ label, name, type = "text", placeholder, required = true, value, onChange }: any) => (
    <div className="flex flex-col">
        <label className="text-xs font-bold text-slate-500 uppercase mb-1">{label}</label>
        <input
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
        />
    </div>
);

export default function RegistroPage() {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{ success: boolean; numeroExpediente?: string } | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const fetchRole = async () => {
            const role = await getUserRole();
            setUserRole(role);
        };
        fetchRole();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });

            const response = await createExpediente(data);
            if (response.success) {
                setResult(response);
                setFormData({}); // Limpiar formulario
                alert(`Caso registrado: ${response.numeroExpediente}`);
            }
        } catch (error) {
            console.error(error);
            alert('Error al registrar el caso');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Registro de Casos</h1>
                <p className="text-slate-500">Complete la información del estudiante y los detalles del caso.</p>
            </header>

            {result?.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 flex items-center gap-3 animate-fade-in-up">
                    <FaCheckCircle size={24} />
                    <div>
                        <strong className="font-bold">¡Caso Registrado Exitosamente!</strong>
                        <span className="block sm:inline"> Número de Expediente: </span>
                        <code className="bg-white/50 px-2 py-1 rounded font-bold">{result.numeroExpediente}</code>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">

                {/* Sección 1: Datos del Estudiante */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Datos del Bachiller</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <InputGroup label="Nombres" name="nombres" placeholder="Ej. Juan Andrés" value={formData['nombres'] || ''} onChange={handleChange} />
                    <InputGroup label="Apellidos" name="apellidos" placeholder="Ej. Pérez López" value={formData['apellidos'] || ''} onChange={handleChange} />
                    <InputGroup label="Cédula" name="cedula" type="number" placeholder="Ej. 12345678" value={formData['cedula'] || ''} onChange={handleChange} />
                    <InputGroup label="Sexo" name="sexo" placeholder="F / M" value={formData['sexo'] || ''} onChange={handleChange} />
                    <InputGroup label="Discapacidad" name="discapacidad" placeholder="Si / No" value={formData['discapacidad'] || ''} onChange={handleChange} />
                    <InputGroup label="Teléfono" name="telefono" type="tel" placeholder="0412-0000000" value={formData['telefono'] || ''} onChange={handleChange} />
                    <InputGroup label="Correo Electrónico" name="correo" type="email" placeholder="estudiante@correo.com" value={formData['correo'] || ''} onChange={handleChange} />
                </div>

                {/* Sección 2: Datos Académicos */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Información Académica</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <InputGroup label="Programa / Carrera" name="carrera" placeholder="Ej. Ingeniería" value={formData['carrera'] || ''} onChange={handleChange} />
                    <InputGroup label="Año / Semestre" name="semestre" placeholder="Ej. 5to Semestre" value={formData['semestre'] || ''} onChange={handleChange} />
                    <InputGroup label="Sección" name="seccion" placeholder="Ej. A-01" value={formData['seccion'] || ''} onChange={handleChange} />
                    <InputGroup label="Periodo Académico" name="periodo" placeholder="Ej. 2024-I" value={formData['periodo'] || ''} onChange={handleChange} />
                </div>

                {/* Sección 3: Ubicación */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Ubicación</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <InputGroup label="Estado" name="estado" placeholder="Estado de procedencia" value={formData['estado'] || ''} onChange={handleChange} />
                    <InputGroup label="Municipio" name="municipio" placeholder="Municipio" value={formData['municipio'] || ''} onChange={handleChange} />
                    <InputGroup label="Parroquia" name="parroquia" placeholder="Parroquia" value={formData['parroquia'] || ''} onChange={handleChange} />
                    <div className="md:col-span-3">
                        <InputGroup label="Dirección Habitacional" name="direccion" placeholder="Dirección completa" value={formData['direccion'] || ''} onChange={handleChange} />
                    </div>
                </div>

                {/* Sección 4: Detalles del Caso */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Detalles del Caso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-1">Tipo de Caso</label>
                        <select name="tipo_caso" value={formData['tipo_caso'] || ''} onChange={handleChange} className="border border-slate-300 rounded-lg px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                            <option value="">Seleccione...</option>
                            <option value="ACOSO">ACOSO</option>
                            <option value="ATROPELLO">ATROPELLO</option>
                            <option value="BULLYING">BULLYING</option>
                            <option value="CRH">CRH</option>
                            <option value="COBROS DE GUIAS">COBROS DE GUIAS</option>
                            <option value="MALTRATO">MALTRATO</option>
                            <option value="AMENAZAS">AMENAZAS</option>
                            <option value="CARGA DE NOTAS">CARGA DE NOTAS</option>
                            <option value="REPOSOS MEDICOS">REPOSOS MEDICOS</option>
                            <option value="CAMBIO DE SECCIÓN">CAMBIO DE SECCIÓN</option>
                            <option value="CAMBIO DE SEDE">CAMBIO DE SEDE</option>
                            <option value="PROBLEMAS ENTRE ESTUDIANTES">PROBLEMAS ENTRE ESTUDIANTES</option>
                            <option value="PROBLEMAS CON DOCENTES">PROBLEMAS CON DOCENTES</option>
                            <option value="SOLICITUD DE RECUPERATIVO">SOLICITUD DE RECUPERATIVO</option>
                            <option value="OTROS">OTROS</option>
                        </select>
                    </div>
                    <InputGroup label="Unidad Curricular" name="unidad_curricular" placeholder="Materia afectada" value={formData['unidad_curricular'] || ''} onChange={handleChange} />
                    <InputGroup label="Nombre del Profesor" name="nombre_profesor" placeholder="Si aplica" required={false} value={formData['nombre_profesor'] || ''} onChange={handleChange} />
                    <InputGroup label="Teléfono del Profesor" name="telefono_profesor" placeholder="Si aplica" required={false} value={formData['telefono_profesor'] || ''} onChange={handleChange} />
                    <InputGroup label="Abogado Asignado" name="abogado" placeholder="Nombre del abogado" value={formData['abogado'] || ''} onChange={handleChange} />
                    {userRole === 'SUPER_ADMIN' && (
                        <div className="flex flex-col">
                            <label className="text-xs font-bold text-slate-500 uppercase mb-1">Estatus del Caso</label>
                            <select
                                name="estatus"
                                value={formData['estatus'] || ''}
                                onChange={handleChange}
                                className="border border-slate-300 rounded-lg px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="">Seleccione...</option>
                                <option value="EN PROCESO">EN PROCESO</option>
                                <option value="APROBADO">APROBADO</option>
                            </select>
                        </div>
                    )}
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed">
                        {isLoading ? <FaSpinner className="animate-spin" /> : <FaSave />}
                        {isLoading ? 'Registrando...' : 'Registrar Caso'}
                    </button>
                </div>
            </form>
        </div>
    );
}