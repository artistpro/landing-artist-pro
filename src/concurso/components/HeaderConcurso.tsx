import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Trophy, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeaderConcurso: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Premios', href: '#premios' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Inscripción', href: '#inscripcion' },
    { name: 'Menores de Edad', href: '#menores-edad' },
    { name: 'Bases & PDFs', href: '#bases' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080C]/90 backdrop-blur-xl border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Contest Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF4D2E] to-[#FFB800] flex items-center justify-center shadow-lg shadow-[#FF4D2E]/25 group-hover:scale-105 transition-transform">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-white text-base tracking-tight block uppercase leading-none">
                ARTISTAS <span className="text-[#FF4D2E]">&amp;</span> TALENTOS
              </span>
              <span className="text-[10px] text-[#F4E8C1] font-bold tracking-widest uppercase block">
                CONCURSO 2026 · ARTIST PRO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#FF4D2E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Return to Main Site Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-[#121218] text-gray-300 text-xs font-bold hover:text-white hover:border-[#FF4D2E]/50 hover:bg-[#1A1A24] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FF4D2E]" />
              <span>Volver a ArtistPro.co</span>
            </Link>

            <a
              href="#inscripcion"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF4D2E] to-[#FF8C33] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#FF4D2E]/20 hover:scale-105 transition-transform"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inscribirse</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#inscripcion"
              className="px-3 py-2 rounded-lg bg-[#FF4D2E] text-white text-xs font-bold uppercase"
            >
              Inscribirse
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#121218] border border-gray-800 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0E] border-b border-gray-800 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-gray-300 hover:text-[#FF4D2E] uppercase py-2 border-b border-gray-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-800 bg-[#14141C] text-gray-300 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF4D2E]" />
            <span>Volver a ArtistPro.co</span>
          </Link>
        </div>
      )}
    </header>
  );
};
