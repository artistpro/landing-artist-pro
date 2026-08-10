import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, Clock, ShieldCheck, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { FAQS_CONCURSO, CATEGORIAS_CONCURSO, CRONOGRAMA_EVENTO } from '../data';

export const BasesConcurso: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const PDF_DOCS = [
    {
      id: 'bases',
      titulo: 'Bases, Términos y Condiciones',
      desc: 'Reglamento oficial del concurso, requisitos y jurados.',
    },
    {
      id: 'datos',
      titulo: 'Aviso de Tratamiento de Datos',
      desc: 'Política de privacidad y protección de datos (Ley 1581 de 2012).',
    },
    {
      id: 'cronograma',
      titulo: 'Plan Operativo y Cronograma',
      desc: 'Fases, fechas clave y desarrollo del evento.',
    },
  ];

  const handlePdfClick = (titulo: string) => {
    setActiveAlert(`El documento "${titulo}" estará disponible públicamente muy pronto. ¡Próximamente!`);
  };

  return (
    <section id="bases" className="py-24 bg-[#0A0A0E] relative border-t border-gray-900 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4D2E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. Categorías del Concurso */}
        <div id="categorias" className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161620] border border-[#FF4D2E]/30 text-[#FF4D2E] text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              6 CATEGORÍAS EN COMPETENCIA
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              CATEGORÍAS DEL <span className="text-[#F4E8C1]">CONCURSO</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Selecciona la categoría que mejor represente tu estilo y talento musical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIAS_CONCURSO.map((cat, i) => (
              <div
                key={cat.id}
                className="bg-[#121218] border border-gray-800 rounded-2xl p-6 hover:border-[#FF4D2E]/50 transition-all group"
              >
                <span className="text-[#FF4D2E] font-black text-xs uppercase tracking-widest block mb-2">
                  Categoría 0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4E8C1] transition-colors">
                  {cat.nombre}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Cronograma */}
        <div className="space-y-10 border-t border-gray-800/80 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161620] border border-gray-800 text-[#F4E8C1] text-xs font-black uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-[#FFB800]" />
              FECHAS Y CALENDARIO OFICIAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              CRONOGRAMA DE <span className="text-[#FF4D2E]">ACTIVIDADES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRONOGRAMA_EVENTO.map((item, idx) => (
              <div
                key={item.titulo}
                className="bg-[#121218] border border-gray-800/80 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF4D2E]/20 text-[#FF4D2E] font-black text-xs flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <span className="text-[#FFB800] text-xs font-bold block mb-1">
                  {item.fecha}
                </span>
                <h4 className="text-base font-black text-white uppercase mb-2">
                  {item.titulo}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Documentos PDF (Próximamente) */}
        <div className="space-y-8 border-t border-gray-800/80 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-white uppercase">
              DOCUMENTOS &amp; REGLAMENTOS OFICIALES (PDF)
            </h3>
            <p className="text-gray-400 text-xs">
              Los documentos oficiales estarán disponibles para descarga pública muy pronto.
            </p>
          </div>

          {/* Active Alert Toast Notification */}
          {activeAlert && (
            <div className="max-w-xl mx-auto bg-[#1A1A26] border border-[#FFB800] rounded-2xl p-4 text-center flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-[#F4E8C1] animate-in fade-in duration-300">
              <AlertCircle className="w-5 h-5 text-[#FFB800] flex-shrink-0" />
              <span>{activeAlert}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PDF_DOCS.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#14141C] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFB800]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <FileText className="w-8 h-8 text-[#FF4D2E]" />
                    <span className="bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Próximamente
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold text-white mb-1">
                    {doc.titulo}
                  </h4>
                  <p className="text-gray-400 text-xs mb-4">
                    {doc.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handlePdfClick(doc.titulo)}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1C1C28] hover:bg-[#1A1A24] text-gray-400 hover:text-[#FFB800] rounded-xl text-xs font-bold transition-colors border border-gray-800 hover:border-[#FFB800]/50"
                >
                  <Clock className="w-4 h-4 text-[#FFB800]" />
                  <span>Próximamente (Descargar PDF)</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Preguntas Frecuentes */}
        <div className="space-y-8 border-t border-gray-800/80 pt-16">
          <div className="text-center mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161620] border border-gray-800 text-[#F4E8C1] text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5 text-[#FFB800]" />
              RESOLVEMOS TUS DUDAS
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase">
              PREGUNTAS FRECUENTES
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {FAQS_CONCURSO.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={faq.pregunta}
                  className="bg-[#121218] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-white text-base sm:text-lg flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#FF4D2E] flex-shrink-0" />
                      {faq.pregunta}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#FF4D2E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-gray-800/60 font-medium">
                      {faq.respuesta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal Footer Note */}
        <div className="p-6 rounded-2xl bg-[#12121A] border border-gray-800 text-center space-y-2 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#F4E8C1] font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#FF4D2E]" />
            ORGANIZA ARTIST PRO®
          </div>
          <p className="text-gray-500 text-xs">
            ARTIST PRO® · Marca registrada ante la Superintendencia de Industria y Comercio en Colombia. Cumplimiento Ley 1581 de 2012 de datos personales.
          </p>
        </div>

      </div>
    </section>
  );
};
