import React from 'react';
import { Users, MapPin, Sparkles, Music, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroColectivoProps {
  onRegistroClick: () => void;
}

export const HeroColectivo: React.FC<HeroColectivoProps> = ({ onRegistroClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#07080C]">
      {/* Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e1a14_1px,transparent_1px),linear-gradient(to_bottom,#0e1a14_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E1511] border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Directorio &amp; Red Cultural del Paisaje Cafetero</span>
        </div>

        {/* Monumental Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.98]">
            COLECTIVO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              ARTIST PRO
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-amber-200 font-semibold max-w-3xl mx-auto leading-snug">
            La red pública de músicos, solistas, bandas y compositores de Risaralda, Caldas, Quindío y Norte del Valle.
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
          Conectamos el talento de la región para impulsar contrataciones, grabaciones de sesión, colaboraciones artísticas y la circulación de proyectos musicales.
        </p>

        {/* Live Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
          {[
            { label: '76 Municipios', sub: 'Eje Cafetero & Valle', icon: MapPin, color: 'border-emerald-500/40 text-emerald-400' },
            { label: '613 Locaciones', sub: 'Centros Poblados DANE', icon: Music, color: 'border-amber-500/40 text-amber-400' },
            { label: '100% Público', sub: 'Networking Abierto', icon: Users, color: 'border-teal-500/40 text-teal-400' },
            { label: 'Gratuito', sub: 'Directorio Libre', icon: ShieldCheck, color: 'border-emerald-500/40 text-emerald-300' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-2xl bg-[#0C120E]/80 backdrop-blur-md border text-center space-y-1 ${stat.color}`}
            >
              <stat.icon className="w-5 h-5 mx-auto mb-1 opacity-90" />
              <div className="font-black text-base sm:text-lg text-white uppercase tracking-tight">{stat.label}</div>
              <div className="text-[11px] text-gray-400 font-medium">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onRegistroClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/20 hover:scale-105 transition-transform flex items-center justify-center gap-3"
          >
            <Users className="w-5 h-5" />
            <span>REGISTRAR MI PERFIL EN LA RED</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#directorio"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-gray-800 bg-[#0E1218] text-gray-300 font-bold text-xs uppercase hover:text-white hover:border-emerald-500/50 transition-all text-center"
          >
            Explorar Directorio de Músicos
          </a>
        </div>

      </div>
    </section>
  );
};
