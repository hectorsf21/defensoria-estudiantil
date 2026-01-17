'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPlusCircle, FaSearch, FaSignOutAlt, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { logout } from '@/app/login/actions';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const menuItems = [
        { name: 'Inicio', href: '/dashboard', icon: <FaHome /> },
        { name: 'Registrar Caso', href: '/dashboard/registro', icon: <FaPlusCircle /> },
        { name: 'Buscar Casos', href: '/dashboard/busqueda', icon: <FaSearch /> },
    ];

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">

            {/* 1. OVERLAY OSCURO (Solo visible en móvil cuando el menú está abierto) */}
            {isSidebarOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-20 bg-black/50 md:hidden transition-opacity"
                />
            )}

            {/* 2. SIDEBAR (Navegación) */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 flex flex-col shadow-lg transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:shadow-none
        `}
            >
                {/* Header del Sidebar */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                    {/* Botón cerrar solo visible en móvil */}
                    <button onClick={closeSidebar} className="md:hidden text-slate-500 hover:text-red-500">
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Enlaces de Navegación */}
                <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeSidebar} // Cierra el menú al hacer click en un enlace
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

                {/* Footer del Sidebar (Cerrar Sesión) */}
                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={() => logout()}
                        className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium w-full text-left"
                    >
                        <FaSignOutAlt />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* 3. CONTENIDO PRINCIPAL */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">

                {/* Barra superior Móvil (Solo visible en pantallas pequeñas) */}
                <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image src="/img/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span className="font-bold text-slate-800">Defensoría</span>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-slate-600 focus:outline-none bg-slate-50 p-2 rounded-lg"
                    >
                        <FaBars size={24} />
                    </button>
                </header>

                {/* Contenido de la página (Scrollable) */}
                <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto pb-20 md:pb-0">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}