import React, { useState, useEffect } from 'react';
import { HeaderColectivo } from './components/HeaderColectivo';
import { HeroColectivo } from './components/HeroColectivo';
import { FiltrosBuscador } from './components/FiltrosBuscador';
import { DirectorioMusicos } from './components/DirectorioMusicos';
import { FormularioRegistroColectivo } from './components/FormularioRegistroColectivo';
import { MapaTerritorial } from './components/MapaTerritorial';
import { AdminProfileSection } from './components/AdminProfileSection';
import { getMusicos } from './lib/musicosService';
import { MusicoProfile } from './types';
import { MusicTrailEffect } from '../concurso/components/MusicTrailEffect';
import { Users, Heart } from 'lucide-react';

const ColectivoLanding: React.FC = () => {
  const [musicos, setMusicos] = useState<MusicoProfile[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('Todos');
  const [munFilter, setMunFilter] = useState('');
  const [generoFilter, setGeneroFilter] = useState('');
  const [instrumentoFilter, setInstrumentoFilter] = useState('');

  const loadData = () => {
    setMusicos(getMusicos());
  };

  useEffect(() => {
    document.title = 'Colectivo Artist Pro — Red & Directorio Público de Músicos';
    loadData();
  }, []);

  const handleResetFilters = () => {
    setSearchQuery('');
    setDeptFilter('Todos');
    setMunFilter('');
    setGeneroFilter('');
    setInstrumentoFilter('');
  };

  // Filter logic
  const filteredMusicos = musicos.filter((m) => {
    // 1. Text Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = m.nombreArtistico.toLowerCase().includes(q);
      const matchBio = m.bio.toLowerCase().includes(q);
      const matchMun = m.municipio.toLowerCase().includes(q);
      const matchInst = m.instrumentos.some((i) => i.toLowerCase().includes(q));
      const matchGen = m.generos.some((g) => g.toLowerCase().includes(q));
      if (!matchName && !matchBio && !matchMun && !matchInst && !matchGen) return false;
    }

    // 2. Department
    if (deptFilter && deptFilter !== 'Todos' && m.departamento !== deptFilter) return false;

    // 3. Municipality
    if (munFilter && m.municipio !== munFilter) return false;

    // 4. Genre
    if (generoFilter && !m.generos.includes(generoFilter)) return false;

    // 5. Instrument
    if (instrumentoFilter && !m.instrumentos.includes(instrumentoFilter)) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-[#07080C] text-white selection:bg-emerald-500 selection:text-black relative">
      <MusicTrailEffect />

      {/* Dedicated Header */}
      <HeaderColectivo onRegistroClick={() => setModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <HeroColectivo onRegistroClick={() => setModalOpen(true)} />

        {/* Directory & Search Section */}
        <section className="py-16 bg-[#07080C] border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Search Filters Bar */}
            <FiltrosBuscador
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              deptFilter={deptFilter}
              setDeptFilter={setDeptFilter}
              munFilter={munFilter}
              setMunFilter={setMunFilter}
              generoFilter={generoFilter}
              setGeneroFilter={setGeneroFilter}
              instrumentoFilter={instrumentoFilter}
              setInstrumentoFilter={setInstrumentoFilter}
              onReset={handleResetFilters}
            />

            {/* Results Count & Directory Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Mostrando <strong className="text-emerald-400">{filteredMusicos.length}</strong> {filteredMusicos.length === 1 ? 'músico registrado' : 'músicos registrados'}
                </span>
                <span className="text-[11px] text-amber-300 font-semibold hidden sm:inline">
                  ✨ Ordenados por relevancia y recomendaciones comunitarias
                </span>
              </div>

              <DirectorioMusicos musicos={filteredMusicos} onMusicoUpdated={loadData} />
            </div>

          </div>
        </section>

        {/* Regional Territory Coverage Section */}
        <MapaTerritorial />

        {/* Admin & Institutional Leadership Section */}
        <AdminProfileSection />

        {/* CTA Banner Section */}
        <section id="registro" className="py-20 bg-gradient-to-b from-[#07080C] to-[#0A0F15] border-t border-gray-900 relative">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <Users className="w-7 h-7 text-black" />
            </div>

            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              ¿ERES MÚSICO DE LA REGIÓN? <br />
              <span className="text-emerald-400">¡SÚMATE AL COLECTIVO!</span>
            </h3>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              Crea tu perfil gratuito en menos de 2 minutos. Comparte tu talento, recibe contrataciones y fortalece la red del Paisaje Cultural Cafetero.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 text-black font-black text-sm uppercase tracking-wider shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-transform"
            >
              REGISTRAR MI PERFIL GRATIS AHORA
            </button>
          </div>
        </section>

      </main>

      {/* Footer Colectivo */}
      <footer className="py-12 bg-[#050608] border-t border-gray-900 text-center text-xs text-gray-400 space-y-2">
        <p className="font-bold uppercase tracking-wider text-gray-300 flex items-center justify-center gap-2">
          <img src="/logo-artistpro.png" alt="Artist Pro" className="h-4 w-auto inline" />
          <span>COLECTIVO ARTIST PRO · PAISAJE CULTURAL CAFETERO &amp; NORTE DEL VALLE</span>
        </p>
        <p className="flex items-center justify-center gap-1 text-gray-400">
          <span>Un proyecto ideado, liderado e impulsado por Artist Pro con</span>
          <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
        </p>
      </footer>

      {/* Modal Formulario de Auto-Registro */}
      <FormularioRegistroColectivo
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={loadData}
      />
    </div>
  );
};

export default ColectivoLanding;
