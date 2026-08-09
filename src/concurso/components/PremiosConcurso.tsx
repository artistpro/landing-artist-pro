import React from 'react';
import { Music, Tv, Radio, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { PREMIOS } from '../data';

const ICON_MAP: Record<string, React.ElementType> = {
  Mic: Music,
  Video: Tv,
  Radio: Radio,
  GraduationCap: Award,
};

export const PremiosConcurso: React.FC = () => {
  return (
    <section id="premios" className="py-24 bg-[#0A0A0E] relative overflow-hidden border-t border-gray-900">
      {/* Background Accent Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF4D2E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A24] border border-[#FF4D2E]/30 text-[#FF4D2E] text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            ¡LO QUE PUEDES GANAR!
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PREMIOS <span className="text-[#F4E8C1]">&amp;</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D2E] to-[#FFB800]">BENEFICIOS</span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            Impulsamos tu carrera musical con producción profesional de audio, desarrollo audiovisual y estrategia de medios.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PREMIOS.map((premio, idx) => {
            const IconComponent = ICON_MAP[premio.icon] || Music;

            return (
              <div
                key={premio.titulo}
                className={`relative group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  premio.destacado
                    ? 'bg-gradient-to-b from-[#181822] to-[#121218] border-2 border-[#FF4D2E]/60 shadow-2xl shadow-[#FF4D2E]/20'
                    : 'bg-[#121218]/90 border border-gray-800/80 hover:border-[#F4E8C1]/40'
                }`}
              >
                {/* Outstanding Badge */}
                {premio.destacado && (
                  <div className="absolute -top-3.5 right-6 bg-[#FF4D2E] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                    🔥 Premio Principal
                  </div>
                )}

                {/* Card Icon & Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 ${
                    premio.destacado
                      ? 'bg-gradient-to-br from-[#FF4D2E] to-[#E6391A] text-white shadow-lg shadow-[#FF4D2E]/30'
                      : 'bg-[#1D1D28] text-[#F4E8C1] border border-gray-800'
                  }`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <span className="text-[#FF4D2E] text-xs font-bold uppercase tracking-wider block mb-0.5">
                      0{idx + 1} · {premio.subtitulo}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {premio.titulo}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                  {premio.descripcion}
                </p>

                {/* Details Checklist */}
                <ul className="space-y-3 border-t border-gray-800/80 pt-6">
                  {premio.detalles.map((detalle) => (
                    <li key={detalle} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB800] flex-shrink-0 mt-0.5" />
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
