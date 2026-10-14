import React, { useState } from 'react';
import { X, ShieldAlert, Layers, CheckCircle2, AlertCircle, Smartphone } from 'lucide-react';
import { GENERAL_INSTALLATION_STEPS } from '../data/appsData';
import { AppItem } from '../types';

interface InstallationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'general' | 'special';
  selectedApp?: AppItem | null;
}

export const InstallationModal: React.FC<InstallationModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'general',
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'special'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#030712]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#090D16] border-2 border-accent/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#0E1524] text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full inline-block">
            Soporte &amp; Guía Oficial de Instalación
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
            ¿CÓMO INSTALAR Y CONFIGURAR TU APK?
          </h2>
        </div>

        {/* Tabs Switcher */}
        <div className="flex rounded-2xl bg-[#0E1524] p-1 border border-gray-800">
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${
              activeTab === 'general'
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Instalación de APKs (Seguridad)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('special')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${
              activeTab === 'special'
                ? 'bg-gradient-to-r from-amber-500 to-accent text-black font-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Permiso Teleprompter (Flotante)</span>
          </button>
        </div>

        {/* Content Tab 1: General APK Security Warnings */}
        {activeTab === 'general' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#0E1524] border border-gray-800 text-xs text-gray-300 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p>
                Al instalar aplicaciones fuera de Google Play Store, Android muestra avisos preventivos para proteger tu dispositivo. Las apps de <strong>Artist Pro</strong> son 100% seguras, privadas y libres de publicidad. Sigue estos 4 pasos para instalar:
              </p>
            </div>

            <div className="space-y-3">
              {GENERAL_INSTALLATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-2xl bg-[#0c1322] border border-gray-800/80 space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-accent text-black font-black text-xs flex items-center justify-center">
                      {step.step}
                    </span>
                    <h4 className="font-bold text-white text-xs sm:text-sm">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pl-8">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Tab 2: Special Overlay Instructions (Teleprompter) */}
        {activeTab === 'special' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed flex items-start gap-3">
              <Smartphone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p>
                Para que <strong>Teleprompter Artist Pro</strong> pueda flotar y mostrar tus letras sobre la cámara o apps de redes sociales (Instagram, TikTok, etc.), Android requiere autorizar el permiso de <strong>superposición</strong>:
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  step: 1,
                  title: 'Abre Teleprompter Artist Pro',
                  desc: 'Al abrir la app por primera vez, verás una ventana que solicita el permiso "Aparecer encima / Mostrar sobre otras apps". Presiona "Configuración" o "Aceptar".',
                },
                {
                  step: 2,
                  title: 'Localiza la app en la lista',
                  desc: 'Android te llevará al menú del sistema con todas las aplicaciones instaladas. Busca y selecciona "Teleprompter Artist Pro".',
                },
                {
                  step: 3,
                  title: 'Activa el interruptor',
                  desc: 'Enciende el interruptor "Permitir mostrar sobre otras aplicaciones" (o "Aparecer encima").',
                },
                {
                  step: 4,
                  title: 'Atención especial para Xiaomi / Redmi / POCO',
                  desc: 'Si usas MIUI o HyperOS, ve a Ajustes > Aplicaciones > Administrar aplicaciones > Teleprompter Artist Pro > Otros permisos y activa "Mostrar ventanas emergentes mientras se ejecuta en segundo plano".',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-2xl bg-[#0c1322] border border-gray-800/80 space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-black font-black text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <h4 className="font-bold text-white text-xs sm:text-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-[#0E1524] border border-gray-800 text-[11px] text-gray-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>¡Listo! Ya podrás abrir cualquier app de cámara o video y controlar tu guión flotante en vivo.</span>
            </div>
          </div>
        )}

        {/* Footer Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 rounded-xl bg-[#0E1524] border border-gray-800 text-gray-300 font-bold text-xs uppercase hover:text-white hover:border-gray-700 transition-colors"
          >
            Entendido, volver a las descargas
          </button>
        </div>

      </div>
    </div>
  );
};
