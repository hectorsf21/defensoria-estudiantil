'use client';

import { useState } from 'react';
import Image from 'next/image';
import { login } from '@/app/login/actions';
import { FaUser, FaLock, FaSpinner } from 'react-icons/fa';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
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

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm flex items-center justify-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Cédula</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400"><FaUser /></span>
              <input
                name="cedula"
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Ingrese su cédula"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Clave</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400"><FaLock /></span>
              <input
                name="clave"
                type="password"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : 'INGRESAR'}
          </button>
        </form>
      </div>
    </div>
  );
}