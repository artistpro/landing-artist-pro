import React, { useState, useEffect } from 'react';
import { HeaderApps } from './components/HeaderApps';
import { HeroApps } from './components/HeroApps';
import { AppCard } from './components/AppCard';
import { InstallationModal } from './components/InstallationModal';
import { APPS_LIST } from './data/appsData';
import { AppItem } from './types';
import { MusicTrailEffect } from '../concurso/components/MusicTrailEffect';
import { Smartphone, HelpCircle, ShieldCheck, Heart } from 'lucide-react';

const AppsLanding: React.FC = () => {
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [guideModalTab, setGuideModalTab] = useState<'general' | 'special'>('general');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

  useEffect(() => {
    document.title = 'Artist Pro Apps — Utilidades Android & Descarga de APKs';

    // Set Open Graph meta tags dynamically
    const setMeta = (property: string, content: string) => {
      let tag =
        document.querySelector(`meta[property="${property}"]`) ||
        document.querySelector(`meta[name="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    };

    setMeta('og:title', 'Artist Pro Apps — Utilidades Android & Descarga de APKs');
    setMeta(
      'og:description',
      'Descarga directa de APKs oficiales de Artist Pro: Teleprompter flotante, Scanner PDF de documentos y más herramientas para creadores.'
    );
    setMeta('og:image', 'https://www.artistpro.co/apps/teleprompter-artistpro.jpg');
    setMeta('og:url', 'https://www.artistpro.co/apps');
  }, []);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralGuide = () => {
    setSelectedApp(null);
    setGuideModalTab('general');
    setGuideModalOpen(true);
  };

  const handleOpenSpecialGuide = (app: AppItem) => {
    setSelectedApp(app);
    setGuideModalTab('special');
    setGuideModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-accent selection:text-black relative">
      <MusicTrailEffect />

      {/* Dedicated Header */}
      <HeaderApps onOpenGuide={handleOpenGeneralGuide} />

      <main>
        {/* Hero Section */}
        <HeroApps
          onExploreClick={scrollToCatalog}
          onOpenGuide={handleOpenGeneralGuide}
        />

        {/* Apps Catalog Section */}
        <section id="catalogo" className="py-20 bg-[#060911] border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Catalog Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1524] border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                CATÁLOGO DE UTILIDADES ANDROID
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                APLICACIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">DISPONIBLES</span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base">
                Selecciona la aplicación que necesitas y descárgala directamente en tu dispositivo sin costos ni registros.
              </p>
            </div>

            {/* Apps Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {APPS_LIST.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  onOpenGeneralGuide={handleOpenGeneralGuide}
                  onOpenSpecialGuide={handleOpenSpecialGuide}
                />
              ))}
            </div>

            {/* Support / Quick Help Banner */}
            <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B101C] border border-gray-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white uppercase">
                ¿Problemas con la instalación o advertencias de seguridad?
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
                Android protege tu teléfono advirtiendo sobre archivos fuera de Play Store. Nuestras apps no recopilan datos personales ni tienen anuncios.
              </p>
              <button
                type="button"
                onClick={handleOpenGeneralGuide}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-xs uppercase hover:scale-105 transition-transform"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ver Solución Paso a Paso</span>
              </button>
            </div>

          </div>
        </section>
      </main>

      {/* Footer Apps */}
      <footer className="py-12 bg-[#02050B] border-t border-gray-900 text-center text-xs text-gray-400 space-y-2">
        <p className="font-bold uppercase tracking-wider text-gray-300 flex items-center justify-center gap-2">
          <img src="/logo-artistpro.png" alt="Artist Pro" className="h-4 w-auto inline" />
          <span>ARTIST PRO APPS · UTILIDADES MÓVILES PARA CREADORES</span>
        </p>
        <p className="flex items-center justify-center gap-1 text-gray-500">
          <span>Desarrollado con pasión e impulsado por Artist Pro</span>
          <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
        </p>
      </footer>

      {/* Installation & Permissions Modal */}
      <InstallationModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
        initialTab={guideModalTab}
        selectedApp={selectedApp}
      />
    </div>
  );
};

export default AppsLanding;
