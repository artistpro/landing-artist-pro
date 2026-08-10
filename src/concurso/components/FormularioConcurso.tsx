import React, { useState } from 'react';
import { ExternalLink, Sparkles, Trophy, FileText, CheckCircle2, Zap } from 'lucide-react';

export const FormularioConcurso: React.FC = () => {
  const FORM_PRINCIPAL_URL = 'https://docs.google.com/forms/d/17Ichoen3QouyWjCVDhAuQYBmoyejWV_7Poc4U-RWnF0/viewform';

  const [embedForm, setEmbedForm] = useState(false);

  return (
    <section id="inscripcion" className="py-24 bg-[#08080A] relative overflow-hidden border-t border-gray-900">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#FF4D2E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A24] border border-[#FF4D2E]/40 text-[#FF4D2E] text-xs font-black uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-[#FFB800]" />
            PROCESO DE INSCRIPCIÓN OFICIAL
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ¡INSCRÍBETE <span className="text-[#F4E8C1]">AHORA</span> AL CONCURSO!
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg">
            Selecciona la modalidad de participación que prefieras. Las inscripciones se gestionan de forma segura a través de Google Forms.
          </p>
        </div>

        {/* Dual Options Grid: Libre vs Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Option 1: Libre / Gratuita */}
          <div className="bg-[#121218]/90 border border-gray-800 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FF4D2E]/50 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="bg-[#1A1A24] text-[#F4E8C1] border border-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  MODALIDAD 1
                </span>
                <span className="text-[#FF4D2E] font-black text-xl uppercase">100% GRATUITO</span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase mb-3">
                Inscripción Libre
              </h3>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Participación sin costo alguno. Tu material será revisado por el jurado oficial para la selección de finalistas.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Participación en las 6 categorías del concurso</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Evaluación técnica por jurados expertos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Acceso a los grandes premios del evento</span>
                </li>
              </ul>
            </div>

            <a
              href={FORM_PRINCIPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-[#FF4D2E] to-[#FF8C33] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-[#FF4D2E]/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 text-center"
            >
              <Sparkles className="w-4 h-4" />
              <span>DILIGENCIAR FORMULARIO GRATIS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Option 2: Premium ($50.000 COP) */}
          <div className="bg-gradient-to-b from-[#1A1A26] to-[#12121A] border-2 border-[#FFB800]/60 rounded-3xl p-8 flex flex-col justify-between hover:border-[#FFB800] transition-all duration-300 shadow-2xl relative">
            <div className="absolute -top-3.5 right-6 bg-[#FFB800] text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              👑 Beneficios Exclusivos
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  MODALIDAD 2 · PREMIUM
                </span>
                <span className="text-[#FFB800] font-black text-xl">$50.000 COP</span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase mb-3">
                Inscripción Premium
              </h3>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Obtén retroalimentación profesional de tu canción y beneficios exclusivos de formación musical.
              </p>

              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB800]" />
                  <strong className="text-white font-semibold">Análisis PDF detallado</strong> de tu propuesta por el equipo de Artist Pro
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB800]" />
                  <span>Certificado oficial de participación</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB800]" />
                  <span>15% Dcto. en servicios de estudio + 20% Dcto. en Cursos</span>
                </li>
              </ul>
            </div>

            <a
              href={FORM_PRINCIPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C33] text-black font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-[#FFB800]/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 text-center"
            >
              <Trophy className="w-4 h-4" />
              <span>INSCRIPCIÓN PREMIUM (GOOGLE FORMS)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Option to Toggle Embedded Google Form */}
        <div className="text-center pt-4">
          <button
            onClick={() => setEmbedForm(!embedForm)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#14141E] border border-gray-800 text-gray-300 text-xs font-bold hover:text-white hover:border-[#FF4D2E]/40 transition-all"
          >
            <FileText className="w-4 h-4 text-[#FF4D2E]" />
            <span>{embedForm ? 'Ocultar Formulario Integrado' : 'Ver Formulario Directamente en la Página'}</span>
          </button>
        </div>

        {/* Embedded Google Form Container */}
        {embedForm && (
          <div className="mt-8 rounded-3xl overflow-hidden border-2 border-gray-800 bg-white shadow-2xl animate-in fade-in duration-500">
            <div className="bg-[#121218] p-4 text-white text-xs font-bold flex items-center justify-between">
              <span>Formulario Oficial de Inscripción (Google Forms)</span>
              <a
                href={FORM_PRINCIPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFB800] hover:underline flex items-center gap-1"
              >
                <span>Abrir en ventana completa</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <iframe
              src="https://docs.google.com/forms/d/17Ichoen3QouyWjCVDhAuQYBmoyejWV_7Poc4U-RWnF0/viewform?embedded=true"
              title="Formulario de Inscripción al Concurso"
              className="w-full h-[750px] border-0"
            >
              Cargando formulario de Google Forms...
            </iframe>
          </div>
        )}

      </div>
    </section>
  );
};
