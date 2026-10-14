import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Menu, X, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderAppsProps {
  onOpenGuide: () => void;
}

export const HeaderApps: React.FC<HeaderAppsProps> = ({ onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img
                src="/logo-artistpro.png"
                alt="Artist Pro Logo"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="border-l border-gray-800 pl-3">
                <span className="font-black text-white text-sm tracking-tight block uppercase leading-none">
                  ARTIST PRO <span className="text-[#06b6d4]">APPS</span>
                </span>
                <span className="text-[10px] text-amber-300 font-bold tracking-wider uppercase block mt-1 flex items-center gap-1">
                  <Smartphone className="w-2.5 h-2.5" />
                  UTILIDADES ANDROID OFICIALES
                </span>
              </div>
            </a>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-[#0E1218] text-gray-300 text-xs font-bold hover:text-white hover:border-[#06b6d4]/50 transition-all"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>¿Cómo instalar APKs?</span>
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-[#0E1218] text-gray-300 text-xs font-bold hover:text-white hover:border-gray-700 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-gray-400" />
                <span>Volver a ArtistPro.co</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onOpenGuide}
                className="p-2.5 rounded-xl border border-gray-800 bg-[#0E1218] text-[#06b6d4]"
                title="Guía de Instalación"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-gray-800 bg-[#0E1218] text-gray-300"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28">
          <div className="space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-black text-xs uppercase"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ver Guía de Instalación APK</span>
            </button>
          </div>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-gray-800 bg-[#0E1218] text-gray-300 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-gray-400" />
            <span>Volver al Sitio Principal (ArtistPro.co)</span>
          </Link>
        </div>
      )}
    </>
  );
};
