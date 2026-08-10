import React, { useState } from 'react';
import { DEPARTAMENTOS_LIST, TERRITORIO_DANE } from '../data/territorioData';
import { DepartamentoRegion } from '../types';
import { MapPin, Building2, Trees } from 'lucide-react';

export const MapaTerritorial: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartamentoRegion>('Risaralda');

  const municipiosObj = TERRITORIO_DANE[selectedDept] || {};
  const municipiosNames = Object.keys(municipiosObj).sort();

  let totalCentrosPoblados = 0;
  Object.values(municipiosObj).forEach((locs) => {
    totalCentrosPoblados += locs.length;
  });

  return (
    <section id="cobertura" className="py-20 bg-[#07080C] border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1511] border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            COBERTURA TERRITORIAL OFICIAL (DANE)
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NUESTRA REGIÓN <span className="text-emerald-400">EN DATOS</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base">
            Integración de los municipios y corregimientos del Paisaje Cultural Cafetero y Norte del Valle hasta Tuluá.
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {DEPARTAMENTOS_LIST.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all border ${
                selectedDept === dept
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-[#0E1218] text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Department Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#0E1218] border border-emerald-900/40 text-center space-y-1">
            <Building2 className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="text-2xl font-black text-white">{municipiosNames.length}</div>
            <div className="text-xs text-gray-400 font-semibold uppercase">Cabeceras Municipales en {selectedDept}</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1218] border border-amber-900/40 text-center space-y-1">
            <Trees className="w-6 h-6 text-amber-400 mx-auto" />
            <div className="text-2xl font-black text-white">{totalCentrosPoblados}</div>
            <div className="text-xs text-gray-400 font-semibold uppercase">Corregimientos &amp; Centros Poblados DANE</div>
          </div>
        </div>

        {/* Municipalities & Corregimientos Grid */}
        <div className="bg-[#0C1016] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
            Municipios e inspecciones de {selectedDept}:
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[350px] overflow-y-auto pr-2">
            {municipiosNames.map((mun) => {
              const corregimientosCount = municipiosObj[mun].length;
              return (
                <div
                  key={mun}
                  className="p-3 rounded-xl bg-[#121820] border border-gray-800/80 text-xs font-medium text-gray-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors flex flex-col justify-between"
                >
                  <span className="font-bold text-white uppercase">{mun}</span>
                  <span className="text-[10px] text-gray-500 mt-1">
                    {corregimientosCount > 0 ? `${corregimientosCount} corregimientos DANE` : 'Cabecera Municipal'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
