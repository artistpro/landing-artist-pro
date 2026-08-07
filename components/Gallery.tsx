import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Section from './ui/Section';

const studioPhotos = [
  {
    src: '/studio/5163497992533773429.jpg',
    alt: 'Sala de grabación — batería Paiste y zona de ensayo',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/studio/5163497992533773428.jpg',
    alt: 'Marshalls y guitarra eléctrica — Artist Pro',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5163497992533773430.jpg',
    alt: 'Guitarra Gibson en el estudio con drums al fondo',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5163497992533773422.jpg',
    alt: 'Mesa de batería con púas Artist Pro',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5163497992533773426.jpg',
    alt: 'Cráneo mohicano sobre amplificador Marshall',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5165749792347458899.jpg',
    alt: 'Sala de estar del estudio — sofás de cuero y drum table',
    span: 'col-span-2 row-span-1',
  },
  {
    src: '/studio/5163497992533773424.jpg',
    alt: 'Lámpara colgante sobre el estudio',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5163497992533773425.jpg',
    alt: 'Lámpara vintage industrial en trípode',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5165749792347458901.jpg',
    alt: 'Reloj de péndulo vintage en pared de madera',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5163497992533773431.jpg',
    alt: 'Sala de control con monitores KRK y consola',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/studio/5165749792347458906.jpg',
    alt: 'Sala de control — Estación Records',
    span: 'col-span-2 row-span-1',
  },
];

const Gallery: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    document.body.style.overflow = '';
  }, []);

  const prev = useCallback(() => {
    if (lightboxIdx === null || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setLightboxIdx((i) => (i! - 1 + studioPhotos.length) % studioPhotos.length);
      setIsAnimating(false);
    }, 150);
  }, [lightboxIdx, isAnimating]);

  const next = useCallback(() => {
    if (lightboxIdx === null || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setLightboxIdx((i) => (i! + 1) % studioPhotos.length);
      setIsAnimating(false);
    }, 150);
  }, [lightboxIdx, isAnimating]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, prev, next, closeLightbox]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#030712] to-gray-950 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Nuestro Espacio</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">El Estudio</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un espacio diseñado para que tu arte fluya. Equipamiento de clase mundial, atmósfera única.
          </p>
        </Section>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {studioPhotos.map((photo, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${photo.span} bg-gray-900`}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div className="flex items-center gap-2 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">{photo.alt}</span>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/80 transition-all duration-300 rounded-tr-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
            {lightboxIdx + 1} / {studioPhotos.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-primary/40 transition-colors text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={studioPhotos[lightboxIdx].src}
              alt={studioPhotos[lightboxIdx].alt}
              className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <p className="text-white/70 text-sm text-center">{studioPhotos[lightboxIdx].alt}</p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-primary/40 transition-colors text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Thumbnails strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-full">
            {studioPhotos.map((photo, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setLightboxIdx(idx); }}
                className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${idx === lightboxIdx ? 'border-primary scale-110' : 'border-white/20 opacity-50 hover:opacity-100'}`}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
