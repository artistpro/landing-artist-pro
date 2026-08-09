import React, { useState } from 'react';
import { Send, CheckCircle2, User, Music, Phone, Mail, Link as LinkIcon, MapPin, Trophy } from 'lucide-react';
import { GENEROS_MUSICALES, MUNICIPIOS } from '../data';
import { InscripcionForm } from '../types';

export const FormularioConcurso: React.FC = () => {
  const [formData, setFormData] = useState<InscripcionForm>({
    nombreArtistico: '',
    tipoParticipante: 'solista',
    generoMusical: GENEROS_MUSICALES[0],
    departamento: 'Risaralda',
    municipio: 'Pereira',
    nombreContacto: '',
    whatsapp: '',
    email: '',
    linkDemo: '',
    integrantesCount: 1,
    comentarios: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof InscripcionForm, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save locally to local storage as fallback storage
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('artistpro_concurso_inscripciones') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('artistpro_concurso_inscripciones', JSON.stringify(existing));
      } catch (err) {
        console.error('Error saving inscription:', err);
      }
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="inscripcion" className="py-24 bg-[#0A0A0E] relative overflow-hidden border-t border-gray-900">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF4D2E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A24] border border-[#FF4D2E]/40 text-[#FF4D2E] text-xs font-black uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5 text-[#FFB800]" />
            FORMULARIO OFICIAL DE INSCRIPCIÓN
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ¡INSCRÍBETE <span className="text-[#F4E8C1]">AQUÍ</span> Y PARTICIPA!
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Completa el siguiente formulario con los datos de tu propuesta musical. La inscripción es 100% gratuita.
          </p>
        </div>

        {/* Success Modal Notification */}
        {submitted ? (
          <div className="bg-[#12121A] border-2 border-[#FF4D2E] rounded-3xl p-10 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF4D2E] to-[#FFB800] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-[#FF4D2E]/40 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase">
                ¡INSCRIPCIÓN EXITOSA! 🎸🎉
              </h3>
              <p className="text-[#F4E8C1] font-semibold text-base sm:text-lg">
                Hemos recibido la postulación de <strong className="text-white font-bold">{formData.nombreArtistico}</strong>.
              </p>
            </div>

            <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
              Nuestro equipo evaluará tu propuesta musical. Nos pondremos en contacto contigo a través de WhatsApp (<strong>{formData.whatsapp}</strong>) o por correo electrónico.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  nombreArtistico: '',
                  tipoParticipante: 'solista',
                  generoMusical: GENEROS_MUSICALES[0],
                  departamento: 'Risaralda',
                  municipio: 'Pereira',
                  nombreContacto: '',
                  whatsapp: '',
                  email: '',
                  linkDemo: '',
                  integrantesCount: 1,
                  comentarios: '',
                });
              }}
              className="inline-flex items-center gap-2 bg-[#1C1C26] text-gray-300 hover:text-white px-6 py-3 rounded-2xl text-sm font-bold border border-gray-700 hover:border-[#FF4D2E] transition-colors"
            >
              Realizar otra inscripción
            </button>
          </div>
        ) : (
          /* Main Form Card */
          <form
            onSubmit={handleSubmit}
            className="bg-[#121218]/90 backdrop-blur-2xl border border-gray-800/90 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8"
          >
            {/* Step 1: Artist info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#FF4D2E] text-xs font-black uppercase tracking-wider border-b border-gray-800 pb-3">
                <Music className="w-4 h-4" />
                <span>1. Información Artística</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Nombre del Artista o Banda *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.nombreArtistico}
                      onChange={(e) => handleChange('nombreArtistico', e.target.value)}
                      placeholder="Ej. Los Cafeteros Rock / Valentina Ríos"
                      className="w-full bg-[#181822] border border-gray-800 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF4D2E] focus:ring-1 focus:ring-[#FF4D2E] transition-colors"
                    />
                  </div>
                </div>

                {/* Tipo de participante */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Modalidad *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'solista', label: '🎤 Solista' },
                      { id: 'banda', label: '🎸 Agrupación / Banda' },
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() => handleChange('tipoParticipante', mode.id)}
                        className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase transition-all ${
                          formData.tipoParticipante === mode.id
                            ? 'bg-[#FF4D2E] text-white shadow-md'
                            : 'bg-[#181822] text-gray-400 border border-gray-800 hover:text-white'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Género musical */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Género Musical *
                  </label>
                  <select
                    value={formData.generoMusical}
                    onChange={(e) => handleChange('generoMusical', e.target.value)}
                    className="w-full bg-[#181822] border border-gray-800 rounded-2xl px-4 py-3.5 text-white text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors cursor-pointer"
                  >
                    {GENEROS_MUSICALES.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Integrantes */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Número de Integrantes
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={formData.integrantesCount}
                    onChange={(e) => handleChange('integrantesCount', parseInt(e.target.value) || 1)}
                    className="w-full bg-[#181822] border border-gray-800 rounded-2xl px-4 py-3.5 text-white text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Location & Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#FFB800] text-xs font-black uppercase tracking-wider border-b border-gray-800 pb-3">
                <MapPin className="w-4 h-4" />
                <span>2. Origen &amp; Contacto</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Departamento */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Departamento *
                  </label>
                  <select
                    value={formData.departamento}
                    onChange={(e) => handleChange('departamento', e.target.value)}
                    className="w-full bg-[#181822] border border-gray-800 rounded-2xl px-4 py-3.5 text-white text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors cursor-pointer"
                  >
                    {['Risaralda', 'Caldas', 'Quindío', 'Norte del Valle'].map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Municipio */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Municipio / Ciudad *
                  </label>
                  <select
                    value={formData.municipio}
                    onChange={(e) => handleChange('municipio', e.target.value)}
                    className="w-full bg-[#181822] border border-gray-800 rounded-2xl px-4 py-3.5 text-white text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors cursor-pointer"
                  >
                    {MUNICIPIOS.filter((m) => m.departamento === formData.departamento).map((m) => (
                      <option key={m.nombre} value={m.nombre}>
                        {m.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nombre de contacto */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Nombre del Representante o Lope *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.nombreContacto}
                      onChange={(e) => handleChange('nombreContacto', e.target.value)}
                      placeholder="Nombre del encargado de contacto"
                      className="w-full bg-[#181822] border border-gray-800 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleChange('whatsapp', e.target.value)}
                      placeholder="Ej. +57 300 123 4567"
                      className="w-full bg-[#181822] border border-gray-800 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="ejemplo@artista.com"
                      className="w-full bg-[#181822] border border-gray-800 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Music link */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#F4E8C1] text-xs font-black uppercase tracking-wider border-b border-gray-800 pb-3">
                <LinkIcon className="w-4 h-4" />
                <span>3. Enlace de la Canción o Propuesta</span>
              </div>

              <div>
                <label className="text-gray-300 text-xs font-bold uppercase tracking-wider block mb-2">
                  Enlace a Demo / Video / Canción (YouTube, Spotify, Drive, Instagram, etc.) *
                </label>
                <input
                  type="url"
                  required
                  value={formData.linkDemo}
                  onChange={(e) => handleChange('linkDemo', e.target.value)}
                  placeholder="https://youtube.com/watch?v=... o link de Drive/Spotify"
                  className="w-full bg-[#181822] border border-gray-800 rounded-2xl px-4 py-3.5 text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF4D2E] transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#FF4D2E] via-[#FF8C33] to-[#FFB800] text-white font-extrabold text-base tracking-wider uppercase rounded-2xl shadow-xl shadow-[#FF4D2E]/25 hover:shadow-[#FF4D2E]/40 hover:scale-[1.01] transition-all disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>COMPLETAR Y ENVIAR INSCRIPCIÓN</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
