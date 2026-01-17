'use client';

import { useState } from 'react';
import { approveExpediente } from '@/app/dashboard/actions';
import { FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

export interface Expediente {
    id: number;
    numeroExpediente: string;
    nombres: string;
    apellidos: string;
    fechaRegistro: Date | string;
    estatus: string;
}

export default function CasesTable({ initialCases, userRole }: { initialCases: Expediente[], userRole: string }) {
    const [cases, setCases] = useState(initialCases);
    const [loadingId, setLoadingId] = useState<number | null>(null);

    const handleApprove = async (id: number) => {
        setLoadingId(id);
        try {
            await approveExpediente(id);
            // Optimistic update or wait for revalidate
            setCases(cases.map(c => c.id === id ? { ...c, estatus: 'APROBADO' } : c));
        } catch (error) {
            console.error('Error approving case:', error);
            alert('Error al aprobar el caso');
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500">
                        <tr>
                            <th className="px-6 py-4">N° Expediente</th>
                            <th className="px-6 py-4">Estudiante</th>
                            <th className="px-6 py-4">Fecha</th>
                            <th className="px-6 py-4">Estatus</th>
                            {userRole === 'SUPER_ADMIN' && <th className="px-6 py-4 text-right">Acciones</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {cases.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
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
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${c.estatus === 'APROBADO' ? 'bg-green-100 text-green-800' :
                                                c.estatus === 'NO APROBADO' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'}`}>
                                            {c.estatus}
                                        </span>
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
        </div>
    );
}
