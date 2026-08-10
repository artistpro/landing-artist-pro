import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants';

export const AdminProfileSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    'Hola Artist Pro, me comunico sobre la red Colectivo Artist Pro para una consulta / alianzas.'
  )}`;

  return (
    <section id="direccion" className="py-20 bg-[#0A0D12] border-t border-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121922] border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            LIDERAZGO Y GESTIÓN INSTITUCIONAL
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            UN PROYECTO DE <span className="text-emerald-400">ARTIST PRO</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base">
            Colectivo Artist Pro es una iniciativa concebida y coordinada por el equipo de Artist Pro para visibilizar y conectar a los artistas de la región.
          </p>
        </div>

        {/* Founder & Organization Glassmorphic Card */}
        <div className="max-w-4xl mx-auto bg-[#0E131A] border-2 border-emerald-900/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle logo background watermark */}
          <img
            src="/logo-artistpro.png"
            alt="Watermark Logo"
            className="absolute -bottom-10 -right-10 w-80 h-auto opacity-5 pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
            
            {/* Left: Official Brand & Admin Photo */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-[#141B24] border-2 border-emerald-500/40 p-2 overflow-hidden shadow-xl flex items-center justify-center">
                  <img
                    src="/logo-artistpro.png"
                    alt="Artist Pro Colectivo Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="absolute -bottom-2 bg-gradient-to-r from-emerald-500 to-amber-400 text-black text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                  ★ Director &amp; Fundador
                </div>
              </div>

              <div>
                <h4 className="text-xl font-black text-white uppercase">
                  Dirección Artist Pro
                </h4>
                <p className="text-xs text-emerald-400 font-bold uppercase">
                  Administrador &amp; Gestor Cultural
                </p>
              </div>
            </div>

            {/* Center & Right: Bio & Purpose */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Compromiso con el Desarrollo Musical Regional</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  "Creamos Colectivo Artist Pro como una herramienta gratuita, pública y transparente al servicio de todos los músicos, bandas y creadores del Paisaje Cultural Cafetero y Norte del Valle. Nuestro objetivo es dignificar la labor musical, articular proyectos y generar verdaderas oportunidades de contratación y circulación."
                </p>
              </div>

              {/* Direct Contact Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#141B24] border border-gray-800 text-gray-300 hover:text-white hover:border-emerald-500/50 transition-all flex items-center gap-3 text-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase">Contacto Directo</span>
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <div className="p-3 rounded-2xl bg-[#141B24] border border-gray-800 text-gray-300 flex items-center gap-3 text-xs font-bold">
                  <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase">Sede de Gestión</span>
                    <span>Eje Cafetero, Colombia</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
