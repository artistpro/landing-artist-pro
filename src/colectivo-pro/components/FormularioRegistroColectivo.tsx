import React, { useState } from 'react';
import { X, Send, User, MapPin, Phone, Link as LinkIcon, Sparkles, CheckCircle2, Music, Tag } from 'lucide-react';
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
    instrumentos: [INSTRUMENTOS_LIST[0], INSTRUMENTOS_LIST[1]],
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

  const handleToggleInstrumento = (inst: string) => {
    setFormData((prev) => {
      const exists = prev.instrumentos.includes(inst);
      if (exists) {
        if (prev.instrumentos.length === 1) return prev; // Keep at least one
        return { ...prev, instrumentos: prev.instrumentos.filter((i) => i !== inst) };
      } else {
        return { ...prev, instrumentos: [...prev.instrumentos, inst] };
      }
    });
  };

  const handleToggleGenero = (g: string) => {
    setFormData((prev) => {
      const exists = prev.generos.includes(g);
      if (exists) {
        if (prev.generos.length === 1) return prev; // Keep at least one
        return { ...prev, generos: prev.generos.filter((item) => item !== g) };
      } else {
        return { ...prev, generos: [...prev.generos, g] };
      }
    });
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
                  Nombre Artístico / Solista / Banda *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.nombreArtistico}
                    onChange={(e) => handleChange('nombreArtistico', e.target.value)}
                    placeholder="Ej. Mateo & La Sombra, Orquesta La Cafetera, etc."
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

            {/* Step 2: Multi-Instrumentalist Selection Grid */}
            <div className="p-4 rounded-2xl bg-[#121822] border border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
                  <Music className="w-4 h-4 text-amber-400" />
                  <span>Instrumentos que ejecutas (Multi-Instrumentista) *</span>
                </div>
                <span className="text-[10px] text-gray-400">Puedes seleccionar varios</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                {INSTRUMENTOS_LIST.map((inst) => {
                  const isSelected = formData.instrumentos.includes(inst);
                  return (
                    <button
                      type="button"
                      key={inst}
                      onClick={() => handleToggleInstrumento(inst)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md'
                          : 'bg-[#18202C] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200'
                      }`}
                    >
                      <span className="truncate">{inst}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Multi-Genre Selection */}
            <div className="p-4 rounded-2xl bg-[#121822] border border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase">
                  <Tag className="w-4 h-4 text-emerald-400" />
                  <span>Géneros Musicales *</span>
                </div>
                <span className="text-[10px] text-gray-400">Selecciona los géneros que abordas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                {GENEROS_LIST.map((g) => {
                  const isSelected = formData.generos.includes(g);
                  return (
                    <button
                      type="button"
                      key={g}
                      onClick={() => handleToggleGenero(g)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md'
                          : 'bg-[#18202C] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200'
                      }`}
                    >
                      <span className="truncate">{g}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Desplegables Territorial DANE Chained */}
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

            {/* Step 5: Contact & Bio */}
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
                placeholder="Cuenta brevemente sobre tu trayectoria musical, los instrumentos que ejecutas y tu experiencia..."
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
