import React from 'react';
import { Flame, Zap, Sparkles, Trophy, ArrowRight, Music, MapPin, Calendar } from 'lucide-react';

interface HeroConcursoProps {
  onInscribirseClick: () => void;
}

export const HeroConcurso: React.FC<HeroConcursoProps> = ({ onInscribirseClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#08080A]">
      {/* Dynamic Background Lights & Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4D2E]/20 via-[#FFB800]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF4D2E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#F4E8C1]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f28_1px,transparent_1px),linear-gradient(to_bottom,#1f1f28_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A22] border border-[#FF4D2E]/40 text-[#F4E8C1] text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#FF4D2E]/10 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-[#FF4D2E] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              Concurso de Talento Regional 2026
            </div>

            {/* Main Monumental Title */}
            <div>
              <p className="text-[#FF4D2E] font-black text-sm md:text-base uppercase tracking-[0.25em] mb-1 flex items-center justify-center lg:justify-start gap-2">
                <Flame className="w-5 h-5 text-[#FF4D2E] animate-pulse" />
                CONCURSO DE TALENTO POR ARTIST PRO
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] drop-shadow-2xl">
                ARTISTAS <span className="text-[#F4E8C1]">&amp;</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D2E] via-[#FF8C33] to-[#FFB800] drop-shadow-[0_4px_25px_rgba(255,77,46,0.5)]">
                  TALENTOS 2026
                </span>
              </h1>
            </div>

            {/* Slogan Triad Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2 max-w-lg mx-auto lg:mx-0">
              {[
                { word: 'TU TALENTO.', color: 'border-[#FF4D2E]/50 bg-[#FF4D2E]/10 text-[#FF4D2E]', icon: Flame },
                { word: 'TU ESCENA.', color: 'border-[#F4E8C1]/50 bg-[#F4E8C1]/10 text-[#F4E8C1]', icon: Music },
                { word: 'TU MOMENTO.', color: 'border-[#FFB800]/50 bg-[#FFB800]/10 text-[#FFB800]', icon: Zap },
              ].map((item) => (
                <div 
                  key={item.word} 
                  className={`p-3 rounded-xl border backdrop-blur-md text-center transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  <item.icon className="w-4 h-4 mx-auto mb-1 opacity-80" />
                  <span className="font-black text-xs sm:text-sm tracking-wider uppercase block">{item.word}</span>
                </div>
              ))}
            </div>

            {/* Subtitle Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Buscamos artistas solistas y bandas del <strong className="text-[#F4E8C1] font-bold">Eje Cafetero y Norte del Valle</strong> con voz propia, versatilidad y verdadera pasión por la música.
            </p>

            {/* Info Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-300 pt-1">
              <div className="flex items-center gap-2 bg-[#14141A] border border-gray-800 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-[#FF4D2E]" />
                <span>Eje Cafetero &amp; Norte del Valle (hasta Tuluá)</span>
              </div>
              <div className="flex items-center gap-2 bg-[#14141A] border border-gray-800 px-3.5 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-[#FFB800]" />
                <span>Inscripciones Abiertas</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onInscribirseClick}
                className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[2px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF4D2E] via-[#FF8C33] to-[#FFB800] rounded-2xl transition-all group-hover:opacity-100 group-hover:scale-105 animate-pulse" />
                <span className="relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0D0D11] rounded-[14px] text-white font-extrabold text-base tracking-wider uppercase group-hover:bg-transparent transition-colors">
                  <Trophy className="w-5 h-5 text-[#FFB800]" />
                  ¡INSCRIBIRSE AHORA!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="#premios"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-gray-800 bg-[#121216]/80 text-gray-300 font-bold text-sm hover:text-white hover:border-[#F4E8C1]/50 hover:bg-[#1A1A22] transition-all text-center"
              >
                Ver Premios y Beneficios
              </a>
            </div>

          </div>

          {/* Right Column: 3D Poster Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glow Aura behind poster */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4D2E]/30 to-[#FFB800]/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Poster Card */}
            <div className="relative group max-w-sm sm:max-w-md rounded-3xl overflow-hidden border-2 border-[#FF4D2E]/40 bg-[#121216] p-2 shadow-2xl shadow-[#FF4D2E]/20 transition-all duration-500 hover:scale-[1.02] hover:border-[#FF4D2E]">
              
              {/* Badge top corner */}
              <div className="absolute top-4 right-4 z-20 bg-[#FF4D2E] text-white font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-white" />
                PÓSTER OFICIAL
              </div>

              {/* Poster Image */}
              <img
                src="/concurso/conoce los términos y condiciones en (1).jpg"
                alt="Póster Artistas & Talentos 2026 Corregido"
                className="w-full h-auto rounded-2xl object-cover brightness-95 group-hover:brightness-105 transition-all duration-500"
              />

              {/* Bottom Caption Overlay */}
              <div className="p-4 text-center bg-gradient-to-t from-[#08080A] via-[#08080A]/90 to-transparent">
                <p className="text-[#F4E8C1] font-bold text-sm flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFB800]" />
                  Organiza Artist Pro®
                </p>
                <p className="text-gray-400 text-xs mt-0.5">Concurso de Talento Musical Eje Cafetero &amp; Norte del Valle</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
