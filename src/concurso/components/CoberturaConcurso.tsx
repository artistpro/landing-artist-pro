import React, { useState } from 'react';
import { MapPin, Compass, Heart } from 'lucide-react';
import { MUNICIPIOS } from '../data';

export const CoberturaConcurso: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('Todos');

  const DEPARTAMENTOS = ['Todos', 'Risaralda', 'Caldas', 'Quindío', 'Norte del Valle'];

  const filteredMunicipios = selectedDept === 'Todos'
    ? MUNICIPIOS
    : MUNICIPIOS.filter((m) => m.departamento === selectedDept);

  return (
    <section className="py-24 bg-[#08080A] relative overflow-hidden border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A24] border border-[#FF4D2E]/30 text-[#F4E8C1] text-xs font-black uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#FF4D2E]" />
            COBERTURA REGIONAL CONVOCATORIA
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            EJE CAFETERO <span className="text-[#FF4D2E]">&amp;</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#F4E8C1]">NORTE DEL VALLE</span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg">
            El concurso está abierto para músicos solistas y agrupaciones residentes en el Paisaje Cultural Cafetero y el Norte del Valle hasta Tuluá.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {DEPARTAMENTOS.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                selectedDept === dept
                  ? 'bg-gradient-to-r from-[#FF4D2E] to-[#E6391A] text-white shadow-lg shadow-[#FF4D2E]/30 scale-105'
                  : 'bg-[#14141C] text-gray-400 border border-gray-800 hover:text-white hover:bg-[#1C1C28]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Municipalities Badge Cloud Grid */}
        <div className="bg-[#101015]/80 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-3">
            {filteredMunicipios.map((m) => (
              <div
                key={m.nombre}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  m.destacado
                    ? 'bg-gradient-to-r from-[#FF4D2E]/20 to-[#FFB800]/10 border border-[#FF4D2E]/50 text-white shadow-md'
                    : 'bg-[#181822] border border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${m.destacado ? 'text-[#FF4D2E]' : 'text-[#FFB800]'}`} />
                <span>{m.nombre}</span>
                <span className="text-[10px] text-gray-500 font-semibold bg-[#0D0D12] px-2 py-0.5 rounded-full border border-gray-800">
                  {m.departamento}
                </span>
              </div>
            ))}
          </div>

          {/* Regional Pride Footer Note */}
          <div className="mt-10 pt-6 border-t border-gray-800/80 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-400">
            <Heart className="w-4 h-4 text-[#FF4D2E]" />
            <span>Unidos por el arte, la música y la identidad cultural del Paisaje Cultural Cafetero.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
