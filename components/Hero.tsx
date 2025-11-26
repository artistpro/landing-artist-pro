import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Section from './ui/Section';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#030712] z-10"></div>
        <img 
          src="https://picsum.photos/id/453/1920/1080" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
        <Section className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg shadow-primary/10 hover:border-primary/50 transition-colors cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-200">Agenda Abierta 2024-2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Creamos el Sonido <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent animate-gradient-x">
              Del Futuro
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Especialistas en <strong>Live Sessions</strong>, <strong>Radios Corporativas</strong> y Soluciones de <strong>Streaming</strong>. Elevamos tu proyecto con tecnología de punta y pasión artística.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center">
            <a 
              href="#contact" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Cotizar Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5" />
              Ver Servicios
            </a>
          </div>
        </Section>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-50 cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
         <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
         </div>
      </div>
    </div>
  );
};

export default Hero;