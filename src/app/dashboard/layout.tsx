'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPlusCircle, FaSearch, FaSignOutAlt, FaHome } from 'react-icons/fa';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Inicio', href: '/dashboard', icon: <FaHome /> },
        { name: 'Registrar Caso', href: '/dashboard/registro', icon: <FaPlusCircle /> },
        { name: 'Buscar Casos', href: '/dashboard/busqueda', icon: <FaSearch /> },
    ];

    return (
        <div className="flex h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col shadow-sm z-10">

                {/* LOGO SIDEBAR */}
                <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/img/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-lg text-slate-800 leading-tight">Defensoría<br /><span className="text-sm font-normal text-slate-500">Panel Admin</span></span>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${pathname === item.href
                                    ? 'bg-blue-50 text-blue-600 font-bold shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium">
                        <FaSignOutAlt />
                        <span>Cerrar Sesión</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-slate-50/50">
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}