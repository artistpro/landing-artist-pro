import React from 'react';
import { SERVICES } from '../constants';
import Section from './ui/Section';

const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Lo que hacemos</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Soluciones de Audio & Streaming</h3>
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
                    <span className="text-sm font-semibold text-white/50 group-hover:text-white flex items-center gap-2 transition-colors cursor-pointer">
                      Saber más <span className="text-xl leading-none">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;