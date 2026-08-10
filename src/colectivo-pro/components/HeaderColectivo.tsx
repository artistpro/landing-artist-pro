import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderColectivoProps {
  onRegistroClick: () => void;
}

export const HeaderColectivo: React.FC<HeaderColectivoProps> = ({ onRegistroClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Directorio de Músicos', href: '#directorio' },
    { name: 'Cobertura DANE', href: '#cobertura' },
    { name: 'Suma tu Perfil', href: '#registro' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07080C]/90 backdrop-blur-xl border-b border-emerald-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo & Tag */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="font-black text-white text-base tracking-tight block uppercase leading-none">
                  COLECTIVO <span className="text-emerald-400">ARTIST PRO</span>
                </span>
                <span className="text-[10px] text-amber-300 font-bold tracking-widest uppercase block">
                  RED DE MÚSICOS · EJE CAFETERO &amp; VALLE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-900/60 bg-[#0E1218] text-gray-300 text-xs font-bold hover:text-white hover:border-emerald-500/50 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
                <span>Volver a ArtistPro.co</span>
              </Link>

              <button
                onClick={onRegistroClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Registrar Músico</span>
              </button>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#0E1218] border border-gray-800 text-gray-300"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#07080C]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold text-gray-300 hover:text-emerald-400 uppercase py-2 border-b border-gray-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-800 bg-[#0E1218] text-gray-300 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" />
            <span>Volver al Sitio Principal (ArtistPro.co)</span>
          </Link>
        </div>
      )}
    </>
  );
};
