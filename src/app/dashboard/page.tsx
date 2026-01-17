import { getSession } from "@/lib/auth";
import { getExpedientes } from './actions';
import CasesTable from '@/components/CasesTable';

export default async function DashboardHome() {
    const cases = await getExpedientes();
    const session = await getSession();
    const userRole = session?.role || 'BASIC_USER';

    // Serialize dates for Client Component
    const serializedCases = cases.map(c => ({
        ...c,
        fechaRegistro: c.fechaRegistro.toISOString(),
        updatedAt: c.updatedAt.toISOString(),
    }));

    // Calculate simple stats from real data
    const totalCasos = cases.length;
    const resueltos = cases.filter(c => c.estatus === 'CERRADO' || c.estatus === 'APROBADO').length;

    return (
        <div className="flex flex-col gap-8 animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Tarjetas de Estadísticas (Manteniendo estilo anterior pero con datos reales/simulados) */}
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Total Casos</span>
                    <span className="block text-4xl font-extrabold text-blue-700 mt-2">{totalCasos}</span>
                    <span className="text-xs text-blue-400">Registrados</span>
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                    <span className="text-sm font-bold text-green-500 uppercase tracking-wider">Aprobados/Cerrados</span>
                    <span className="block text-4xl font-extrabold text-green-700 mt-2">{resueltos}</span>
                    <span className="text-xs text-green-400">Gestionados</span>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-800">Listado de Expedientes</h2>
                <CasesTable initialCases={serializedCases} userRole={userRole} />
            </div>
        </div>
    );
}