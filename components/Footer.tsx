import React from 'react';
import { SOCIAL_LINKS, COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tighter mb-2">{COMPANY_NAME}</h2>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Artist Pro. Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"
              aria-label={link.platform}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;