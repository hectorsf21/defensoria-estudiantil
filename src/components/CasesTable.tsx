'use client';

import { useState } from 'react';
import { approveExpediente, getExpedientesPaginated } from '@/app/dashboard/actions';
import { FaCheck, FaTimes, FaSpinner, FaEye } from 'react-icons/fa';

export interface Expediente {
    id: number;
    numeroExpediente: string;
    nombres: string;
    apellidos: string;
    fechaRegistro: Date | string;
    estatus: string;
    abogadoAsignado?: string | null;
    cedula?: string;
    sexo?: string | null;
    telefono?: string | null;
    correo?: string | null;
    carrera?: string | null;
    tipoCaso?: string | null;
    direccion?: string | null;
}

export default function CasesTable({ initialCases, userRole, totalPages: initialTotalPages }: { initialCases: any[], userRole: string, totalPages: number }) {
    const [cases, setCases] = useState<any[]>(initialCases);
    const [loadingId, setLoadingId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(initialTotalPages);
    const [loadingPage, setLoadingPage] = useState(false);
    const [selectedCase, setSelectedCase] = useState<any | null>(null);

    const handleApprove = async (id: number) => {
        setLoadingId(id);
        try {
            await approveExpediente(id);
            setCases(cases.map(c => c.id === id ? { ...c, estatus: 'APROBADO' } : c));
        } catch (error) {
            console.error('Error approving case:', error);
            alert('Error al aprobar el caso');
        } finally {
            setLoadingId(null);
        }
    };

    const loadPage = async (page: number) => {
        setLoadingPage(true);
        try {
            const { expedientes, totalPages: newTotalPages } = await getExpedientesPaginated(page, 10);
            const serialized = expedientes.map((c: any) => ({
                ...c,
                fechaRegistro: c.fechaRegistro.toISOString(),
                updatedAt: c.updatedAt.toISOString(),
            }));
            setCases(serialized);
            setCurrentPage(page);
            setTotalPages(newTotalPages);
        } catch (error) {
            console.error('Error loading page:', error);
        } finally {
            setLoadingPage(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
            {loadingPage && (
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10">
                    <FaSpinner className="animate-spin text-4xl text-blue-600" />
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500">
                        <tr>
                            <th className="px-6 py-4">N° Expediente</th>
                            <th className="px-6 py-4">Estudiante</th>
                            <th className="px-6 py-4">Fecha</th>
                            <th className="px-6 py-4">Abogado Asignado</th>
                            <th className="px-6 py-4">Estatus</th>
                            <th className="px-6 py-4 text-center">Detalle</th>
                            {userRole === 'SUPER_ADMIN' && <th className="px-6 py-4 text-right">Acciones</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {cases.length === 0 ? (
                            <tr>
                                <td colSpan={userRole === 'SUPER_ADMIN' ? 7 : 6} className="px-6 py-8 text-center text-slate-400">
                                    No hay expedientes registrados.
                                </td>
                            </tr>
                        ) : (
                            cases.map((c) => (
                                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-slate-800 font-medium">
                                        {c.numeroExpediente}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-slate-700 block">{c.nombres} {c.apellidos}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(c.fechaRegistro).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.abogadoAsignado || 'No asignado'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${c.estatus === 'APROBADO' ? 'bg-green-100 text-green-800' :
                                                c.estatus === 'NO APROBADO' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'}`}>
                                            {c.estatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button onClick={() => setSelectedCase(c)} className="text-blue-600 hover:text-blue-800" title="Ver Detalle">
                                            <FaEye size={18} className="mx-auto" />
                                        </button>
                                    </td>
                                    {userRole === 'SUPER_ADMIN' && (
                                        <td className="px-6 py-4 text-right">
                                            {(c.estatus === 'PENDIENTE' || c.estatus === 'EN PROCESO') && (
                                                <button
                                                    onClick={() => handleApprove(c.id)}
                                                    disabled={loadingId === c.id}
                                                    className="text-blue-600 hover:text-blue-900 font-bold text-xs flex items-center gap-1 justify-end ml-auto"
                                                >
                                                    {loadingId === c.id ? <FaSpinner className="animate-spin" /> : <FaCheck />}
                                                    APROBAR
                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between px-6 py-3 border-t border-slate-200 bg-slate-50">
                    <button
                        onClick={() => loadPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-white border border-slate-300 rounded text-sm text-slate-600 disabled:opacity-50"
                    >
                        Anterior
                    </button>
                    <span className="text-sm text-slate-600">Página {currentPage} de {totalPages}</span>
                    <button
                        onClick={() => loadPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-white border border-slate-300 rounded text-sm text-slate-600 disabled:opacity-50"
                    >
                        Siguiente
                    </button>
                </div>
            )}

            {/* Modal de Detalles */}
            {selectedCase && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-800">Detalles del Expediente</h3>
                            <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-slate-600">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-2 gap-4 text-sm text-slate-600">
                            <div><strong className="block text-slate-800">N° Expediente</strong> {selectedCase.numeroExpediente}</div>
                            <div><strong className="block text-slate-800">Fecha Registro</strong> {new Date(selectedCase.fechaRegistro).toLocaleString()}</div>
                            <div><strong className="block text-slate-800">Estudiante</strong> {selectedCase.nombres} {selectedCase.apellidos}</div>
                            <div><strong className="block text-slate-800">Cédula</strong> {selectedCase.cedula || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Sexo</strong> {selectedCase.sexo || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Teléfono</strong> {selectedCase.telefono || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Correo</strong> {selectedCase.correo || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Carrera</strong> {selectedCase.carrera || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Tipo de Caso</strong> {selectedCase.tipoCaso || 'N/A'}</div>
                            <div><strong className="block text-slate-800">Estatus</strong> {selectedCase.estatus}</div>
                            <div className="col-span-2"><strong className="block text-slate-800">Dirección</strong> {selectedCase.direccion || 'N/A'}</div>
                            <div className="col-span-2"><strong className="block text-slate-800">Abogado Asignado</strong> {selectedCase.abogadoAsignado || 'N/A'}</div>
                        </div>
                        <div className="p-6 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={() => setSelectedCase(null)}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
