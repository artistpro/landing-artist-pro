import React from 'react';
import { AlertTriangle, FileCheck, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const MenoresEdadSection: React.FC = () => {
  const FORM_MENORES_URL = 'https://docs.google.com/forms/d/1mXQwyJ2ZexVrJA66V1VaMZjVb3s0qUsmoIa6RKobaTo/viewform';

  return (
    <section id="menores-edad" className="py-20 bg-[#0A0A0E] relative overflow-hidden border-t border-gray-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#181822] to-[#121218] border-2 border-[#FFB800]/50 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          
          {/* Badge & Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/20 border border-[#FFB800]/50 flex items-center justify-center text-[#FFB800] flex-shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[#FFB800] text-xs font-black uppercase tracking-widest block mb-1">
                  REQUISITO OBLIGATORIO Y LEGAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase leading-snug">
                  ¿ERES MENOR DE 18 AÑOS?
                </h3>
              </div>
            </div>

            <div className="bg-[#1A1A24] border border-[#FFB800]/30 px-4 py-2 rounded-xl text-xs font-bold text-[#F4E8C1] uppercase">
              Autorización de Tutor Legal
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-medium">
            <p>
              Para participar en el concurso <strong className="text-white">"Artistas &amp; Talentos 2026"</strong>, si eres menor de edad (menos de 18 años), es <strong className="text-[#FFB800]">estrictamente obligatorio</strong> que tu padre, madre o tutor legal complete el formulario oficial de autorización.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-[#121218] p-4 rounded-2xl border border-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#FFB800] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Firma digital/autorización del tutor o representante legal responsable.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-[#121218] p-4 rounded-2xl border border-gray-800">
                <ShieldCheck className="w-5 h-5 text-[#FF4D2E] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Protección de datos personales conforme a la Ley 1581 de 2012 de Colombia.
                </span>
              </div>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800/80">
            <div className="text-xs text-gray-400 text-center sm:text-left">
              El formulario se abre en Google Forms y toma menos de 2 minutos completarlo.
            </div>

            <a
              href={FORM_MENORES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C33] text-black font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-[#FFB800]/20 hover:scale-105 transition-transform"
            >
              <FileCheck className="w-5 h-5" />
              <span>DILIGENCIAR AUTORIZACIÓN PARA MENORES DE EDAD</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
