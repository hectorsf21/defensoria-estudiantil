'use client';
import { useState } from 'react';
import { FaSave } from 'react-icons/fa';

export default function RegistroPage() {
    const [formData, setFormData] = useState({});

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos a enviar:', formData);
        alert('Caso registrado exitosamente (Simulación)');
    };

    // Componente interno para inputs reutilizable
    const InputGroup = ({ label, name, type = "text", placeholder, required = true }: any) => (
        <div className="flex flex-col">
            <label className="text-xs font-bold text-slate-500 uppercase mb-1">{label}</label>
            <input
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                onChange={handleChange}
                className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
            />
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Registro de Casos</h1>
                <p className="text-slate-500">Complete la información del estudiante y los detalles del caso.</p>
            </header>

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">

                {/* Sección 1: Datos del Estudiante */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Datos del Bachiller</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <InputGroup label="Nombres" name="nombres" placeholder="Ej. Juan Andrés" />
                    <InputGroup label="Apellidos" name="apellidos" placeholder="Ej. Pérez López" />
                    <InputGroup label="Cédula" name="cedula" type="number" placeholder="Ej. 12345678" />
                    <InputGroup label="Sexo" name="sexo" placeholder="F / M" />
                    <InputGroup label="Discapacidad" name="discapacidad" placeholder="Si / No" />
                    <InputGroup label="Teléfono" name="telefono" type="tel" placeholder="0412-0000000" />
                    <InputGroup label="Correo Electrónico" name="correo" type="email" placeholder="estudiante@correo.com" />
                </div>

                {/* Sección 2: Datos Académicos */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Información Académica</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <InputGroup label="Programa / Carrera" name="carrera" placeholder="Ej. Ingeniería" />
                    <InputGroup label="Año / Semestre" name="semestre" placeholder="Ej. 5to Semestre" />
                    <InputGroup label="Sección" name="seccion" placeholder="Ej. A-01" />
                    <InputGroup label="Periodo Académico" name="periodo" placeholder="Ej. 2024-I" />
                </div>

                {/* Sección 3: Ubicación */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Ubicación</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <InputGroup label="Estado" name="estado" placeholder="Estado de procedencia" />
                    <InputGroup label="Municipio" name="municipio" placeholder="Municipio" />
                    <InputGroup label="Parroquia" name="parroquia" placeholder="Parroquia" />
                    <div className="md:col-span-3">
                        <InputGroup label="Dirección Habitacional" name="direccion" placeholder="Dirección completa" />
                    </div>
                </div>

                {/* Sección 4: Detalles del Caso */}
                <h2 className="text-lg font-semibold text-blue-600 mb-4 border-b pb-2">Detalles del Caso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-1">Tipo de Caso</label>
                        <select name="tipo_caso" onChange={handleChange} className="border border-slate-300 rounded-lg px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none">
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
                    <InputGroup label="Unidad Curricular" name="unidad_curricular" placeholder="Materia afectada" />
                    <InputGroup label="Nombre del Profesor" name="nombre_profesor" placeholder="Si aplica" required={false} />
                    <InputGroup label="Teléfono del Profesor" name="telefono_profesor" placeholder="Si aplica" required={false} />
                    <InputGroup label="Abogado Asignado" name="abogado" placeholder="Nombre del abogado" />
                    <InputGroup label="Estatus del Caso" name="estatus" placeholder="Ej. En proceso, Cerrado" />
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30">
                        <FaSave />
                        Registrar Caso
                    </button>
                </div>
            </form>
        </div>
    );
}