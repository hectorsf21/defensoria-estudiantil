'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaChartPie, FaSpinner, FaLock } from 'react-icons/fa';
import { getEstadisticas, getUserRole } from '../actions';
import { useRouter } from 'next/navigation';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold pointer-events-none">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    ) : null;
};

const ChartCard = ({ title, data }: { title: string, data: any[] }) => {
    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[350px]">
                <h3 className="text-lg font-bold text-slate-700 mb-4">{title}</h3>
                <p className="text-slate-400">No hay datos suficientes</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow min-h-[350px] flex flex-col">
            <h3 className="text-lg font-bold text-slate-700 mb-4 text-center border-b pb-2 border-slate-50">{title}</h3>
            <div className="flex-1 w-full relative min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                            isAnimationActive={true}
                            animationDuration={1000}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ fontWeight: 'bold' }}
                        />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default function EstadisticasPage() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuthAndFetch = async () => {
            try {
                const role = await getUserRole();
                if (role !== 'SUPER_ADMIN') {
                    setIsAuthorized(false);
                    return;
                }
                const stats = await getEstadisticas();
                setData(stats);
            } catch (error) {
                console.error("Error al cargar estadísticas:", error);
                setIsAuthorized(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuthAndFetch();
    }, []);

    if (!isAuthorized) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in">
                <FaLock className="text-red-400 text-6xl mb-4" />
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Acceso Denegado</h2>
                <p className="text-slate-500">No tienes permisos para ver las estadísticas del sistema.</p>
                <button onClick={() => router.push('/dashboard')} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Volver al Inicio
                </button>
            </div>
        );
    }

    if (isLoading || !data) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh]">
                <FaSpinner className="animate-spin text-blue-500 text-5xl mb-4" />
                <p className="text-slate-500 font-medium">Calculando estadísticas...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
            <header className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl text-white shadow-lg">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <FaChartPie className="text-4xl" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Estadísticas del Sistema</h1>
                    <p className="text-blue-100 mt-2 text-lg">Distribución demográfica y operativa de los casos registrados.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ChartCard title="Distribución por Sexo" data={data.porSexo} />
                <ChartCard title="Casos por Estatus" data={data.porEstatus} />
                <ChartCard title="Estudiantes con Discapacidad" data={data.porDiscapacidad} />
                
                <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ChartCard title="Tipos de Casos Frecuentes" data={data.porTipoCaso} />
                    <ChartCard title="Incidencia por Programa Académico" data={data.porCarrera} />
                </div>
            </div>
        </div>
    );
}
