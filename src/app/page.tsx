'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaLock, FaUser } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de login
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200 animate-fade-in-up">

        {/* LOGO CENTRAL */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/img/logo.png"
              alt="Logo Defensoría"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 text-center">Defensoría Estudiantil</h1>
          <p className="text-slate-500 text-sm">Sistema de Gestión de Casos</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Usuario</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-slate-400"><FaUser /></span>
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="Ingrese su usuario"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Contraseña</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-slate-400"><FaLock /></span>
              <input
                type="password"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 flex justify-center items-center shadow-md hover:shadow-lg"
          >
            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}