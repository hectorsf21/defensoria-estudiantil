'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { searchExpedientes, getUserRole } from '../actions';
import CasesTable from '@/components/CasesTable';

export default function BusquedaPage() {
    const [query, setQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userRole, setUserRole] = useState('BASIC_USER');

    // Generate a new key after every search so CasesTable remounts 
    // and picks up the new initialCases since it uses useState internally
    const [tableKey, setTableKey] = useState(Date.now().toString());

    useEffect(() => {
        const fetchRole = async () => {
            const role = await getUserRole();
            if (role) setUserRole(role);
        };
        fetchRole();
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setHasSearched(true);
        setIsLoading(true);

        try {
            const data = await searchExpedientes(query);
            const serialized = data.map((c: any) => ({
                ...c,
                fechaRegistro: c.fechaRegistro.toISOString(),
                updatedAt: c.updatedAt.toISOString(),
            }));
            setResults(serialized);
            setTableKey(Date.now().toString());
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Búsqueda de Casos</h1>
                <p className="text-slate-500">Ingrese el número de expediente o la cédula del estudiante</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 mb-8 max-w-4xl mx-auto">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <span className="absolute left-4 top-3.5 text-slate-400">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Ej. EXP-2026-XXXX o Cédula"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isLoading ? <FaSpinner className="animate-spin" /> : 'BUSCAR'}
                    </button>
                </form>
            </div>

            {hasSearched && !isLoading && (
                <div className="animate-fade-in-up space-y-4">
                    <h3 className="text-lg font-bold text-slate-700 mb-4 ml-1">Resultados de la búsqueda: {results.length} encontrado(s)</h3>
                    <CasesTable key={tableKey} initialCases={results} userRole={userRole} totalPages={1} />
                </div>
            )}
        </div>
    );
}