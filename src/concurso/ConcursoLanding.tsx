import React, { useEffect } from 'react';
import { HeaderConcurso } from './components/HeaderConcurso';
import { HeroConcurso } from './components/HeroConcurso';
import { PremiosConcurso } from './components/PremiosConcurso';
import { CoberturaConcurso } from './components/CoberturaConcurso';
import { FormularioConcurso } from './components/FormularioConcurso';
import { MenoresEdadSection } from './components/MenoresEdadSection';
import { BasesConcurso } from './components/BasesConcurso';
import { MusicTrailEffect } from './components/MusicTrailEffect';

const ConcursoLanding: React.FC = () => {
  useEffect(() => {
    document.title = 'Artistas & Talentos 2026 — Concurso por Artist Pro';
    
    // Set Open Graph meta tags dynamically for sharing the contest link
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      }
    };

    setMeta('og:title', 'Artistas & Talentos 2026 — Concurso por Artist Pro');
    setMeta('og:description', 'Buscamos artistas solistas y bandas del Eje Cafetero y Norte del Valle. ¡Gana grabación profesional, video lyric y promoción!');
    setMeta('og:image', 'https://www.artistpro.co/concurso/conoce%20los%20t%C3%A9rminos%20y%20condiciones%20en%20(1).jpg');
    setMeta('og:url', 'https://www.artistpro.co/concurso');
  }, []);

  const scrollToInscripcion = () => {
    const el = document.getElementById('inscripcion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-white selection:bg-[#FF4D2E] selection:text-white relative">
      <MusicTrailEffect />
      <HeaderConcurso />
      <main>
        <HeroConcurso onInscribirseClick={scrollToInscripcion} />
        <PremiosConcurso />
        <CoberturaConcurso />
        <FormularioConcurso />
        <MenoresEdadSection />
        <BasesConcurso />
      </main>
    </div>
  );
};

export default ConcursoLanding;
