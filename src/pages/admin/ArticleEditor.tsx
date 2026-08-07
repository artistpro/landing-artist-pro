import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Upload, AlertCircle, CheckCircle, Tag, Eye } from 'lucide-react';
import { createPost, getPostById, updatePost, generateSlug } from '../../../lib/posts';

const CATEGORIES = ['Producción', 'Streaming', 'Grabación', 'Consejos', 'Industria'];

const ArticleEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [status, setStatus] = useState<'published' | 'draft'>('published');

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditing);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isEditing && id) {
      getPostById(id)
        .then((post) => {
          if (post) {
            setTitle(post.title);
            setSlug(post.slug);
            setExcerpt(post.excerpt);
            setContent(post.content);
            setImageUrl(post.imageUrl || '');
            setCategory(post.category || CATEGORIES[0]);
            setStatus(post.status || 'published');
          } else {
            setError('Artículo no encontrado');
          }
        })
        .catch(() => setError('Error al cargar el artículo'))
        .finally(() => setFetching(false));
    }
  }, [id, isEditing]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing) {
      setSlug(generateSlug(val));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      setError('Por favor completa todos los campos requeridos (Título, Resumen y Contenido).');
      return;
    }

    setLoading(true);

    try {
      const postData = {
        title,
        slug: slug.trim() || generateSlug(title),
        excerpt,
        content,
        imageUrl,
        category,
        status,
      };

      if (isEditing && id) {
        await updatePost(id, postData);
        setSuccess('¡Artículo actualizado correctamente!');
      } else {
        await createPost(postData);
        setSuccess('¡Artículo creado exitosamente!');
        setTimeout(() => navigate('/admin'), 1500);
      }
    } catch (err: any) {
      setError(err?.message || 'Ocurrió un error al guardar el artículo.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al panel
        </Link>
        <h1 className="text-white text-xl font-bold">
          {isEditing ? 'Editar Artículo' : 'Nuevo Artículo'}
        </h1>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </div>
      )}

      {success && (
        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl p-4 mb-6 text-sm">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="text-gray-300 text-sm font-semibold block mb-2">Título del Artículo *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ej. Cómo lograr un sonido profesional en tu Home Studio"
              required
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-lg font-medium transition-colors"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="text-gray-400 text-xs font-semibold block mb-1">URL (Slug)</label>
            <div className="flex items-center bg-gray-950 border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-400">
              <span className="text-gray-600 mr-1">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-transparent text-white focus:outline-none w-full"
                placeholder="como-lograr-un-sonido-profesional"
              />
            </div>
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 text-sm font-semibold block mb-2 flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" /> Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm font-medium transition-colors cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-sm font-semibold block mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" /> Estado de Publicación
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'published' | 'draft')}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary text-sm font-medium transition-colors cursor-pointer"
              >
                <option value="published">Publicado</option>
                <option value="draft">Borrador</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-gray-300 text-sm font-semibold block mb-2 flex items-center gap-2">
              <Upload className="w-4 h-4 text-primary" /> URL de Imagen de Portada
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://ejemplo.com/imagen.jpg o /studio/5163497992533773429.jpg"
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-sm transition-colors"
            />
            {imageUrl && (
              <div className="mt-3 relative h-40 rounded-xl overflow-hidden bg-gray-950 border border-gray-800 max-w-sm">
                <img src={imageUrl} alt="Vista previa" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-gray-300 text-sm font-semibold block mb-2">Resumen corto (Excerpt) *</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              placeholder="Un resumen breve de 1 o 2 oraciones para mostrar en las tarjetas del blog..."
              required
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary text-sm transition-colors resize-y"
            />
          </div>

          {/* Content */}
          <div>
            <label className="text-gray-300 text-sm font-semibold block mb-2">Contenido (HTML o Texto) *</label>
            <p className="text-gray-500 text-xs mb-2">
              Puedes usar etiquetas HTML como &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
            </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={14}
              placeholder="<p>Escribe aquí el contenido completo de tu artículo...</p>"
              required
              className="w-full bg-gray-950 border border-gray-800 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary font-mono text-sm transition-colors resize-y"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end gap-4">
          <Link
            to="/admin"
            className="px-6 py-3 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 font-semibold text-sm transition-colors"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-4 h-4" />
                {isEditing ? 'Guardar Cambios' : 'Publicar Artículo'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleEditor;
