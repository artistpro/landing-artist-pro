import React from 'react';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContestBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF4D2E] via-[#FF8C33] to-[#FFB800] text-black font-extrabold px-4 py-2.5 shadow-lg relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
        
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <Trophy className="w-4 h-4 text-black" />
          <span>¡GRAN CONCURSO REGIONAL "ARTISTAS &amp; TALENTOS 2026"! (Eje Cafetero &amp; Norte del Valle)</span>
          <Sparkles className="w-4 h-4 text-black hidden md:inline" />
        </div>

        <Link
          to="/concurso"
          className="mx-auto sm:mx-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-white text-xs font-black uppercase hover:bg-gray-900 transition-colors shadow-md"
        >
          <span>Conocer e Inscribirse</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFB800]" />
        </Link>

      </div>
    </div>
  );
};
