import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Section from './ui/Section';

const Contact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;

  return (
    <div id="contact" className="py-24 relative overflow-hidden bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para empezar?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Hablemos sobre tu proyecto. Ya sea una sesión en vivo, una radio corporativa o una transmisión compleja, tenemos la solución.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-900/20"
              >
                <MessageCircle className="w-6 h-6" />
                Chat en WhatsApp
              </a>

              <div className="flex items-center gap-2 text-gray-500">
                <span className="hidden sm:block">o escríbenos a</span>
                <a href="mailto:contacto@artistpro.co" className="text-gray-300 hover:text-white underline decoration-gray-600 underline-offset-4">
                  contacto@artistpro.co
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-black/40 rounded-xl border border-gray-800 max-w-md mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="https://picsum.photos/id/64/100/100" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">Soporte y Ventas</p>
                  <p className="text-gray-400 text-sm">Respuesta rápida (Lun-Sáb)</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Contact;