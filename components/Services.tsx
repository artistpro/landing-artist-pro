import React, { useState, useEffect, useCallback } from 'react';
import { X, MessageCircle, Copy, Check } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { Service } from '../types';
import Section from './ui/Section';

const EMAIL = 'contacto@artistpro.co';
const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;

// ── Modal Component ──────────────────────────────────────────────────────────
const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
      >
        {/* Hero image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover brightness-50"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-gray-950" />

          {/* Icon + title over image */}
          <div className="absolute bottom-5 left-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">{service.title}</h3>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/70 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="bg-gray-950 border border-gray-800 border-t-0 rounded-b-2xl px-6 pt-5 pb-7">
          <div className="text-gray-300 leading-relaxed text-sm mb-7 space-y-1">
            {(service.details || service.description).split('\n').map((line, i) => {
              if (line.startsWith('•')) {
                return (
                  <div key={i} className="flex items-start gap-2 pl-1">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span>{line.replace('•', '').trim()}</span>
                  </div>
                );
              }
              if (line.trim() === '') return <div key={i} className="h-2" />;
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-6" />

          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">¿Te interesa? Contáctanos</p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* WhatsApp */}
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola, me interesa el servicio: ${service.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-5 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Copy email */}
            <button
              onClick={handleCopy}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border font-semibold text-sm transition-all duration-300
                ${copied
                  ? 'border-green-500/60 bg-green-500/10 text-green-400'
                  : 'border-gray-700 bg-white/5 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-white/10'
                }`}
            >
              {copied ? (
                <><Check className="w-4 h-4" /><span>¡Copiado!</span></>
              ) : (
                <><Copy className="w-4 h-4" /><span>Copiar correo</span></>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);     }
        }
      `}</style>
    </div>
  );
};

// ── Services Component ───────────────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleClose = useCallback(() => setActiveService(null), []);

  return (
    <>
      <div id="services" className="py-24 bg-[#030712] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Lo que hacemos</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Soluciones de Audio &amp; Streaming</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Infraestructura tecnológica y creativa para llevar tu contenido al siguiente nivel.
            </p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <Section key={service.id} delay={index * 100}>
                <div className="group relative h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Image Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                  </div>

                  <div className="relative p-8 flex flex-col h-full z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-rotate-6 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-gray-800/50">
                      <button
                        onClick={() => setActiveService(service)}
                        className="text-sm font-semibold text-white/50 group-hover:text-white flex items-center gap-2 transition-colors cursor-pointer hover:gap-3"
                      >
                        Saber más <span className="text-xl leading-none">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <ServiceModal service={activeService} onClose={handleClose} />
      )}
    </>
  );
};

export default Services;