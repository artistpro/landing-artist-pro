import React, { useState } from 'react';
import { MusicoProfile } from '../types';
import { MapPin, Music, Star, MessageCircle, ExternalLink, CheckCircle2, HeartHandshake } from 'lucide-react';
import { recomendarMusico } from '../lib/musicosService';

interface DirectorioMusicosProps {
  musicos: MusicoProfile[];
  onMusicoUpdated: () => void;
}

export const DirectorioMusicos: React.FC<DirectorioMusicosProps> = ({ musicos, onMusicoUpdated }) => {
  const [votedMap, setVotedMap] = useState<Record<string, boolean>>({});

  const handleRecommend = (id: string) => {
    if (votedMap[id]) return;
    recomendarMusico(id);
    setVotedMap((prev) => ({ ...prev, [id]: true }));
    onMusicoUpdated();
  };

  if (musicos.length === 0) {
    return (
      <div className="bg-[#0C1016]/80 border border-gray-800 rounded-3xl p-12 text-center space-y-4">
        <Music className="w-12 h-12 text-gray-600 mx-auto" />
        <h4 className="text-xl font-bold text-white uppercase">No se encontraron músicos con los filtros seleccionados</h4>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Prueba cambiando los criterios de búsqueda por municipio o instrumento, o sé el primero en registrarte.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {musicos.map((m) => {
        const isMemorial = m.estadoPerfil === 'in_memoriam';
        const hasVoted = votedMap[m.id];
        const whatsappUrl = `https://wa.me/${m.whatsapp}?text=${encodeURIComponent(
          `Hola ${m.nombreArtistico}, vi tu perfil en la red Colectivo Artist Pro (${m.municipio}) y me gustaría ponerme en contacto contigo para una propuesta musical.`
        )}`;

        return (
          <div
            key={m.id}
            className={`relative group rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
              isMemorial
                ? 'bg-gradient-to-b from-[#181824] to-[#101018] border-2 border-purple-500/40 shadow-xl'
                : 'bg-[#0E1218]/90 border border-gray-800 hover:border-emerald-500/50 shadow-xl hover:shadow-emerald-500/10'
            }`}
          >
            {/* Header badges */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                {/* Photo or Default Avatar */}
                <div className="relative">
                  <img
                    src={m.fotoUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80'}
                    alt={m.nombreArtistico}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/30 group-hover:scale-105 transition-transform"
                  />
                  {m.verificado && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black p-0.5 rounded-full shadow" title="Perfil Verificado por Artist Pro">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Type & Memorial Status Badge */}
                <div className="flex flex-col items-end gap-1.5">
                  {isMemorial ? (
                    <span className="bg-purple-950/80 text-purple-300 border border-purple-500/40 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                      🕊️ In Memóriam
                    </span>
                  ) : (
                    <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {m.tipo}
                    </span>
                  )}

                  <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1 bg-[#141A22] px-2 py-0.5 rounded-md">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {m.municipio}
                  </span>
                </div>
              </div>

              {/* Artist Name & Location Detail */}
              <div className="space-y-1 mb-3">
                <h4 className="text-xl font-black text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {m.nombreArtistico}
                </h4>
                {m.corregimiento && (
                  <p className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                    <span>📍 {m.corregimiento}</span>
                    <span className="text-gray-500">· {m.departamento}</span>
                  </p>
                )}
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-4 font-medium">
                {m.bio}
              </p>

              {/* Instruments & Genres Tags */}
              <div className="space-y-2 mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {m.instrumentos.slice(0, 3).map((inst) => (
                    <span key={inst} className="bg-[#141A24] text-emerald-300 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-emerald-900/40">
                      {inst}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {m.generos.slice(0, 2).map((g) => (
                    <span key={g} className="bg-[#12161F] text-gray-400 text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 border-t border-gray-800/80 pt-4">
              
              {/* Recommendation vote counter & social links */}
              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleRecommend(m.id)}
                  disabled={hasVoted}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    hasVoted
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-[#141A24] text-gray-300 hover:text-amber-400 hover:border-amber-500/30 border border-gray-800'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${hasVoted ? 'fill-amber-400 text-amber-400' : 'text-amber-400'}`} />
                  <span>{m.recomendacionesCount} Recomendar</span>
                </button>

                {/* Social media links */}
                <div className="flex items-center gap-2">
                  {m.linkDemo && (
                    <a
                      href={m.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#141A24] text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"
                      title="Ver Demo / Canción"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Contact or Memorial Badge Button */}
              {isMemorial ? (
                <div className="w-full py-3 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-bold text-center flex items-center justify-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-purple-300" />
                  <span>Homenaje a su Legado Musical</span>
                </div>
              ) : (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/15 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>CONTRATAR / CONTACTAR VÍA WHATSAPP</span>
                </a>
              )}

            </div>

          </div>
        );
      })}
    </div>
  );
};
