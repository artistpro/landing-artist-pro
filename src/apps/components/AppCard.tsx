import React from 'react';
import { AppItem } from '../types';
import { Download, CheckCircle2, AlertTriangle, Layers, HelpCircle, HardDrive, Smartphone } from 'lucide-react';

interface AppCardProps {
  app: AppItem;
  onOpenSpecialGuide: (app: AppItem) => void;
  onOpenGeneralGuide: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  onOpenSpecialGuide,
  onOpenGeneralGuide,
}) => {
  return (
    <div className="relative group bg-[#090D16]/90 border border-gray-800/90 hover:border-accent/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl hover:shadow-accent/10">
      
      {/* Top Section */}
      <div className="space-y-6">
        {/* Header with Icon and Badges */}
        <div className="flex items-start gap-5">
          <div className="relative shrink-0">
            <img
              src={app.iconUrl}
              alt={app.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-accent/40 shadow-xl group-hover:scale-105 group-hover:border-accent transition-all duration-300"
            />
            {app.badge && (
              <span className="absolute -top-2.5 -right-2 bg-gradient-to-r from-amber-500 to-accent text-black text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                {app.badge}
              </span>
            )}
          </div>

          <div className="space-y-1.5 flex-1 min-w-0">
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 border border-accent/30 px-2.5 py-0.5 rounded-md inline-block">
              {app.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-accent transition-colors leading-tight truncate">
              {app.name}
            </h3>
            <p className="text-xs text-gray-400 font-medium line-clamp-2">
              {app.tagline}
            </p>
          </div>
        </div>

        {/* Specs Badges (Size, Version, Android) */}
        <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-2xl bg-[#0E1524] border border-gray-800/80 text-[11px]">
          <div className="text-center">
            <span className="text-gray-500 block text-[9px] uppercase font-bold">Tamaño</span>
            <span className="font-bold text-gray-200 flex items-center justify-center gap-1">
              <HardDrive className="w-3 h-3 text-accent" />
              {app.size}
            </span>
          </div>
          <div className="text-center border-x border-gray-800">
            <span className="text-gray-500 block text-[9px] uppercase font-bold">Versión</span>
            <span className="font-bold text-gray-200">{app.version}</span>
          </div>
          <div className="text-center">
            <span className="text-gray-500 block text-[9px] uppercase font-bold">Requisitos</span>
            <span className="font-bold text-gray-200 flex items-center justify-center gap-1">
              <Smartphone className="w-3 h-3 text-emerald-400" />
              {app.minAndroid}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
          {app.description}
        </p>

        {/* Features list */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Características destacadas:
          </span>
          <ul className="space-y-1.5">
            {app.features.map((feat) => (
              <li key={feat} className="text-xs text-gray-300 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notice for special permissions if applicable (e.g. Teleprompter) */}
        {app.specialInstructions && (
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 flex-1">
              <span className="text-xs font-bold text-amber-300 block">
                Requiere Permiso de Superposición
              </span>
              <p className="text-[11px] text-gray-300 leading-snug">
                Para flotar sobre la cámara y redes, debe habilitarse el permiso "Aparecer encima".
              </p>
              <button
                type="button"
                onClick={() => onOpenSpecialGuide(app)}
                className="text-[11px] font-bold text-accent hover:underline flex items-center gap-1 pt-1"
              >
                <Layers className="w-3 h-3" />
                <span>Ver paso a paso para activarlo &rarr;</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA Actions */}
      <div className="space-y-3 pt-6 border-t border-gray-800/80 mt-6">
        <a
          href={app.downloadUrl}
          className="w-full py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-center"
        >
          <Download className="w-4 h-4" />
          <span>DESCARGAR APK ({app.size})</span>
        </a>

        <div className="flex items-center justify-between text-[11px] px-1">
          <button
            type="button"
            onClick={onOpenGeneralGuide}
            className="text-gray-400 hover:text-accent font-semibold transition-colors flex items-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>¿Avisos al instalar? Ver solución</span>
          </button>
          <span className="text-gray-500 font-mono">Actualizado: {app.updatedAt}</span>
        </div>
      </div>

    </div>
  );
};
