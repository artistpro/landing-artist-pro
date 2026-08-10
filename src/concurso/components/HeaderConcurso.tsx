import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeaderConcurso: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Premios & Beneficios', href: '#premios' },
    { name: 'Categorías en Competencia', href: '#categorias' },
    { name: 'Cobertura Regional', href: '#cobertura' },
    { name: 'Formulario de Inscripción', href: '#inscripcion' },
    { name: 'Autorización Menores de Edad', href: '#menores-edad' },
    { name: 'Bases, Términos & PDFs', href: '#bases' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080C]/90 backdrop-blur-xl border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Clean Logo Only (Artist Pro) */}
            <a href="#" className="flex items-center group">
              <img
                src="/logo-artistpro.png"
                alt="Artist Pro"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Right Side Actions: Clean & Spacious */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Back to ArtistPro.co Button */}
              <Link
                to="/"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-[#121218] text-gray-300 text-xs font-bold hover:text-white hover:border-[#FF4D2E]/50 hover:bg-[#1A1A24] transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#FF4D2E]" />
                <span>Volver a ArtistPro.co</span>
              </Link>

              {/* Direct CTA Button */}
              <a
                href="#inscripcion"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF4D2E] to-[#FF8C33] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#FF4D2E]/20 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Inscribirse</span>
              </a>

              {/* Hamburger Menu Trigger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir Menú de Navegación"
                className="p-2.5 rounded-xl bg-[#121218] border border-gray-800 text-gray-200 hover:text-white hover:border-[#FF4D2E]/50 transition-colors flex items-center gap-2"
              >
                {menuOpen ? <X className="w-6 h-6 text-[#FF4D2E]" /> : <Menu className="w-6 h-6 text-[#FFB800]" />}
                <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-gray-300">Menú</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Full Overlay Hamburger Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08080C]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 pt-28 animate-in fade-in duration-300 overflow-y-auto">
          
          <div className="max-w-3xl mx-auto w-full space-y-8">
            <div className="text-center space-y-2 border-b border-gray-800 pb-6">
              <span className="text-[#FF4D2E] text-xs font-black uppercase tracking-widest">
                MENÚ DE NAVEGACIÓN
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">
                ARTISTAS &amp; TALENTOS 2026
              </h2>
            </div>

            <nav className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg sm:text-2xl font-bold text-gray-300 hover:text-[#FF4D2E] uppercase py-2 transition-colors border-b border-gray-900/60"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="max-w-3xl mx-auto w-full pt-8 text-center border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF4D2E]" />
              <span>Ir al Sitio Principal (ArtistPro.co)</span>
            </Link>

            <span className="text-xs text-gray-500 font-medium">
              ARTIST PRO® · Concurso Regional de Talento
            </span>
          </div>

        </div>
      )}
    </>
  );
};
