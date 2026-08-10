import React, { useState } from 'react';
import { X, Send, User, MapPin, Phone, Link as LinkIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEPARTAMENTOS_LIST, TERRITORIO_DANE, GENEROS_LIST, INSTRUMENTOS_LIST } from '../data/territorioData';
import { DepartamentoRegion, TipoMusico } from '../types';
import { createMusico } from '../lib/musicosService';

interface FormularioRegistroColectivoProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const FormularioRegistroColectivo: React.FC<FormularioRegistroColectivoProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    nombreArtistico: '',
    tipo: 'Solista' as TipoMusico,
    generos: [GENEROS_LIST[0]],
    instrumentos: [INSTRUMENTOS_LIST[0]],
    departamento: 'Risaralda' as DepartamentoRegion,
    municipio: 'Pereira',
    corregimiento: 'Pereira (Cabecera)',
    bio: '',
    whatsapp: '',
    email: '',
    linkDemo: '',
    instagram: '',
    spotify: '',
    disponiblePara: ['Presentaciones en vivo', 'Grabación de sesión'],
    fotoUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Municipios based on selected department
  const municipiosList = Object.keys(TERRITORIO_DANE[formData.departamento] || {}).sort();

  // Corregimientos DANE based on selected municipality
  const corregimientosList = (TERRITORIO_DANE[formData.departamento]?.[formData.municipio] || []);

  const handleChange = (field: string, val: any) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleDeptChange = (dept: DepartamentoRegion) => {
    const firstMun = Object.keys(TERRITORIO_DANE[dept] || {})[0] || '';
    const firstLoc = TERRITORIO_DANE[dept]?.[firstMun]?.[0] || `${firstMun} (Cabecera)`;
    setFormData((prev) => ({
      ...prev,
      departamento: dept,
      municipio: firstMun,
      corregimiento: firstLoc,
    }));
  };

  const handleMunChange = (mun: string) => {
    const firstLoc = TERRITORIO_DANE[formData.departamento]?.[mun]?.[0] || `${mun} (Cabecera)`;
    setFormData((prev) => ({
      ...prev,
      municipio: mun,
      corregimiento: firstLoc,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      createMusico({
        nombreArtistico: formData.nombreArtistico,
        tipo: formData.tipo,
        generos: formData.generos,
        instrumentos: formData.instrumentos,
        departamento: formData.departamento,
        municipio: formData.municipio,
        corregimiento: formData.corregimiento,
        bio: formData.bio,
        whatsapp: formData.whatsapp,
        email: formData.email,
        linkDemo: formData.linkDemo,
        redes: {
          instagram: formData.instagram,
          spotify: formData.spotify,
        },
        disponiblePara: formData.disponiblePara,
        fotoUrl: formData.fotoUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80',
        verificado: true,
        estadoPerfil: 'activo',
      });

      setLoading(false);
      setSubmitted(true);
      onSuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07080C]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#0D1117] border-2 border-emerald-900/60 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#141A24] text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-amber-400 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10 text-black" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white uppercase">
                ¡BIENVENIDO AL COLECTIVO! 🎸🎉
              </h3>
              <p className="text-emerald-300 font-semibold">
                El perfil de <strong className="text-white font-bold">{formData.nombreArtistico}</strong> ya está publicado en la red pública de músicos.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 text-black font-extrabold text-xs uppercase"
            >
              Ver Directorio de Músicos
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="border-b border-gray-800 pb-4">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                INSCRIPCIÓN PÚBLICA GRATUITA
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
                SUMA TU PERFIL AL COLECTIVO
              </h2>
            </div>

            {/* Step 1: Datos Artísticos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  Nombre Artístico / Banda *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.nombreArtistico}
                    onChange={(e) => handleChange('nombreArtistico', e.target.value)}
                    placeholder="Ej. Mateo & La Sombra"
                    className="w-full bg-[#141A24] border border-gray-800 rounded-xl pl-10 pr-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  Modalidad Artística *
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => handleChange('tipo', e.target.value)}
                  className="w-full bg-[#141A24] border border-gray-800 rounded-xl px-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  {['Solista', 'Banda / Agrupación', 'Músico de Sesión', 'Compositor', 'Productor / Arreglista'].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Desplegables Territorial DANE Chained */}
            <div className="p-4 rounded-2xl bg-[#121822] border border-emerald-900/40 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Ubicación Territorial Oficial (División DANE)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Departamento */}
                <div>
                  <label className="text-gray-400 text-[11px] font-bold uppercase block mb-1">
                    Departamento *
                  </label>
                  <select
                    value={formData.departamento}
                    onChange={(e) => handleDeptChange(e.target.value as DepartamentoRegion)}
                    className="w-full bg-[#18202C] border border-gray-800 rounded-xl px-3 py-2.5 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    {DEPARTAMENTOS_LIST.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Municipio */}
                <div>
                  <label className="text-gray-400 text-[11px] font-bold uppercase block mb-1">
                    Municipio *
                  </label>
                  <select
                    value={formData.municipio}
                    onChange={(e) => handleMunChange(e.target.value)}
                    className="w-full bg-[#18202C] border border-gray-800 rounded-xl px-3 py-2.5 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    {municipiosList.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Corregimiento / Centro Poblado */}
                <div>
                  <label className="text-gray-400 text-[11px] font-bold uppercase block mb-1">
                    Corregimiento / Centro Poblado
                  </label>
                  <select
                    value={formData.corregimiento}
                    onChange={(e) => handleChange('corregimiento', e.target.value)}
                    className="w-full bg-[#18202C] border border-gray-800 rounded-xl px-3 py-2.5 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value={`${formData.municipio} (Cabecera)`}>
                      {formData.municipio} (Cabecera)
                    </option>
                    {corregimientosList.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Géneros e Instrumentos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  Instrumento Principal *
                </label>
                <select
                  value={formData.instrumentos[0]}
                  onChange={(e) => handleChange('instrumentos', [e.target.value])}
                  className="w-full bg-[#141A24] border border-gray-800 rounded-xl px-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  {INSTRUMENTOS_LIST.map((inst) => (
                    <option key={inst} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  Género Musical Principal *
                </label>
                <select
                  value={formData.generos[0]}
                  onChange={(e) => handleChange('generos', [e.target.value])}
                  className="w-full bg-[#141A24] border border-gray-800 rounded-xl px-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none cursor-pointer"
                >
                  {GENEROS_LIST.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Contact & Bio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  WhatsApp de Contacto / Contratación *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    placeholder="Ej. 573001234567"
                    className="w-full bg-[#141A24] border border-gray-800 rounded-xl pl-10 pr-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                  Enlace a Canción / Demo / Video
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="url"
                    value={formData.linkDemo}
                    onChange={(e) => handleChange('linkDemo', e.target.value)}
                    placeholder="https://youtube.com/..."
                    className="w-full bg-[#141A24] border border-gray-800 rounded-xl pl-10 pr-3 py-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-xs font-bold uppercase block mb-1">
                Breve Reseña / Bio *
              </label>
              <textarea
                required
                rows={3}
                value={formData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                placeholder="Cuenta brevemente sobre tu trayectoria musical, experiencia y estilo..."
                className="w-full bg-[#141A24] border border-gray-800 rounded-xl p-3 text-white text-xs font-medium focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>REGISTRAR PERFIL EN EL COLECTIVO</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
