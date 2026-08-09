import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, ShieldCheck } from 'lucide-react';
import { FAQS_CONCURSO } from '../data';

export const BasesConcurso: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#08080A] relative border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161620] border border-gray-800 text-[#F4E8C1] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#FFB800]" />
            INFORMACIÓN &amp; REQUISITOS
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            PREGUNTAS FRECUENTES <span className="text-[#FF4D2E]">&amp; BASES</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
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

        {/* Legal Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12121A] border border-gray-800 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#F4E8C1] font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#FF4D2E]" />
            ORGANIZA ARTIST PRO®
          </div>
          <p className="text-gray-500 text-xs">
            ARTIST PRO® es una marca registrada ante la Superintendencia de Industria y Comercio en Colombia. Reservados todos los derechos.
          </p>
        </div>

      </div>
    </section>
  );
};
