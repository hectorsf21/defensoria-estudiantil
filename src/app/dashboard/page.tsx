export default function DashboardHome() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center animate-fade-in-up">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Bienvenido al Sistema</h2>
                <p className="text-slate-500 mb-8 text-lg">
                    Seleccione una opción del menú lateral para comenzar a gestionar los casos de la defensoría estudiantil.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Total Casos</span>
                        <span className="block text-4xl font-extrabold text-blue-700 mt-2">124</span>
                        <span className="text-xs text-blue-400">Registrados este año</span>
                    </div>
                    <div className="p-6 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-sm font-bold text-green-500 uppercase tracking-wider">Resueltos</span>
                        <span className="block text-4xl font-extrabold text-green-700 mt-2">86</span>
                        <span className="text-xs text-green-400">Casos cerrados exitosamente</span>
                    </div>
                </div>
            </div>
        </div>
    );
}