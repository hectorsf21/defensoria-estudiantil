'use client';
import { useState } from 'react';
import { FaSearch, FaFileAlt, FaUserGraduate } from 'react-icons/fa';

export default function BusquedaPage() {
    const [query, setQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setHasSearched(true);
        // Aquí iría la lógica de conexión al backend
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Búsqueda de Casos</h1>
                <p className="text-slate-500">Ingrese la cédula del estudiante o nombre del docente</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 mb-8">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <span className="absolute left-4 top-3.5 text-slate-400">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Ej. 12345678 o Prof. José"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        BUSCAR
                    </button>
                </form>
            </div>

            {/* Resultados Simulados */}
            {hasSearched && (
                <div className="animate-fade-in-up">
                    <h3 className="text-lg font-bold text-slate-700 mb-4 ml-1">Resultados de la búsqueda</h3>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {/* Si no hay backend real, mostramos un ejemplo estático para visualizar el diseño */}
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <FaUserGraduate size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Juan Pérez</h4>
                                    <p className="text-sm text-slate-500">C.I: {query || '12345678'}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-1">
                                    EN PROCESO
                                </span>
                                <p className="text-xs text-slate-400">Caso: ACOSO</p>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <FaFileAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">María Rodríguez</h4>
                                    <p className="text-sm text-slate-500">Docente involucrado</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-1">
                                    CERRADO
                                </span>
                                <p className="text-xs text-slate-400">Caso: CARGA DE NOTAS</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}