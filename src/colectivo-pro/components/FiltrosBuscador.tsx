import React from 'react';
import { Search, MapPin, Music, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { DEPARTAMENTOS_LIST, TERRITORIO_DANE, GENEROS_LIST, INSTRUMENTOS_LIST } from '../data/territorioData';
import { DepartamentoRegion } from '../types';

interface FiltrosBuscadorProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  deptFilter: string;
  setDeptFilter: (v: string) => void;
  munFilter: string;
  setMunFilter: (v: string) => void;
  generoFilter: string;
  setGeneroFilter: (v: string) => void;
  instrumentoFilter: string;
  setInstrumentoFilter: (v: string) => void;
  onReset: () => void;
}

export const FiltrosBuscador: React.FC<FiltrosBuscadorProps> = ({
  searchQuery,
  setSearchQuery,
  deptFilter,
  setDeptFilter,
  munFilter,
  setMunFilter,
  generoFilter,
  setGeneroFilter,
  instrumentoFilter,
  setInstrumentoFilter,
  onReset,
}) => {
  // Get municipalities based on selected department
  const availableMunicipios = deptFilter && deptFilter !== 'Todos'
    ? Object.keys(TERRITORIO_DANE[deptFilter as DepartamentoRegion] || {}).sort()
    : [];

  return (
    <div id="directorio" className="bg-[#0C1016]/90 backdrop-blur-xl border border-emerald-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
        <div className="flex items-center gap-3">
          <SlidersHorizontal className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-black text-white uppercase tracking-tight">
            DIRECTORIO DE MÚSICOS &amp; BÚSQUEDA REGIONAL
          </h3>
        </div>

        {(searchQuery || (deptFilter && deptFilter !== 'Todos') || munFilter || generoFilter || instrumentoFilter) && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-white font-bold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar Filtros</span>
          </button>
        )}
      </div>

      {/* Main Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por nombre artístico, instrumento o género (ej. Mateo, Guitarra, Salsa)..."
          className="w-full bg-[#121820] border border-gray-800 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
        />
      </div>

      {/* Filter Dropdowns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Departamento */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">
            Departamento
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select
              value={deptFilter}
              onChange={(e) => {
                setDeptFilter(e.target.value);
                setMunFilter(''); // Reset mun filter when dept changes
              }}
              className="w-full bg-[#121820] border border-gray-800 rounded-xl pl-10 pr-3 py-3 text-white text-xs font-medium focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="Todos">Todos los Departamentos</option>
              {DEPARTAMENTOS_LIST.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Municipio (Chained) */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">
            Municipio
          </label>
          <select
            value={munFilter}
            disabled={!deptFilter || deptFilter === 'Todos'}
            onChange={(e) => setMunFilter(e.target.value)}
            className="w-full bg-[#121820] border border-gray-800 rounded-xl px-3 py-3 text-white text-xs font-medium focus:outline-none focus:border-emerald-500 cursor-pointer disabled:opacity-50"
          >
            <option value="">
              {deptFilter && deptFilter !== 'Todos' ? 'Todos los municipios' : 'Selecciona Dept. primero'}
            </option>
            {availableMunicipios.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Instrumento */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">
            Instrumento / Rol
          </label>
          <div className="relative">
            <Music className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select
              value={instrumentoFilter}
              onChange={(e) => setInstrumentoFilter(e.target.value)}
              className="w-full bg-[#121820] border border-gray-800 rounded-xl pl-10 pr-3 py-3 text-white text-xs font-medium focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="">Todos los instrumentos</option>
              {INSTRUMENTOS_LIST.map((inst) => (
                <option key={inst} value={inst}>
                  {inst}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Género Musical */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase block mb-1.5">
            Género Musical
          </label>
          <select
            value={generoFilter}
            onChange={(e) => setGeneroFilter(e.target.value)}
            className="w-full bg-[#121820] border border-gray-800 rounded-xl px-3 py-3 text-white text-xs font-medium focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="">Todos los géneros</option>
            {GENEROS_LIST.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
};
