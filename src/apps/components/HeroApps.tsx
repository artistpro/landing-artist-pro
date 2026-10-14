import React from 'react';
import { Smartphone, ShieldCheck, Sparkles, Zap, Download } from 'lucide-react';

interface HeroAppsProps {
  onExploreClick: () => void;
  onOpenGuide: () => void;
}

export const HeroApps: React.FC<HeroAppsProps> = ({ onExploreClick, onOpenGuide }) => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712]">
      {/* Background Neon Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyberpunk grid mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E1524] border border-accent/40 text-accent text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>SUITE MÓVIL · HERRAMIENTAS Y UTILIDADES APK</span>
        </div>

        {/* Monumental Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]">
            APPS &amp; UTILIDADES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
              ARTIST PRO
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Aplicaciones Android diseñadas para resolver necesidades reales de músicos, oradores y creadores de contenido.
          </p>
        </div>

        {/* Value Props Pill Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          {[
            { label: 'Descarga Directa', sub: 'Sin intermediarios', icon: Download, color: 'border-accent/40 text-accent' },
            { label: 'Cero Publicidad', sub: 'Experiencia limpia', icon: Zap, color: 'border-secondary/40 text-secondary' },
            { label: '100% Gratuitas', sub: 'De libre uso', icon: ShieldCheck, color: 'border-emerald-500/40 text-emerald-400' },
            { label: 'Android 8.0+', sub: 'Alta compatibilidad', icon: Smartphone, color: 'border-primary/40 text-primary' },
          ].map((item) => (
            <div
              key={item.label}
              className={`p-3.5 rounded-2xl bg-[#090D16]/80 backdrop-blur-md border text-center space-y-0.5 ${item.color}`}
            >
              <item.icon className="w-4 h-4 mx-auto mb-1 opacity-90" />
              <div className="font-black text-xs sm:text-sm text-white uppercase tracking-tight">{item.label}</div>
              <div className="text-[10px] text-gray-400 font-medium">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>EXPLORAR CATÁLOGO DE APKS</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-gray-800 bg-[#0E1218] text-gray-300 font-bold text-xs uppercase hover:text-white hover:border-accent/50 transition-all text-center flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Guía de Instalación Segura</span>
          </button>
        </div>

      </div>
    </section>
  );
};
