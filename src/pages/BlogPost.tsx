import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, MessageCircle, Copy, Check } from 'lucide-react';
import { getPostBySlug, Post } from '../../lib/posts';
import { CONTACT_INFO } from '../../constants';

const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;
const EMAIL = 'contacto@artistpro.co';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug)
      .then((p) => {
        if (!p) setNotFound(true);
        else setPost(p);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center pt-20">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center pt-20 text-center px-4">
        <p className="text-6xl mb-4">🎸</p>
        <h1 className="text-white text-2xl font-bold mb-2">Artículo no encontrado</h1>
        <p className="text-gray-400 mb-6">Este artículo no existe o fue eliminado.</p>
        <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-20 pb-24">
      {/* Hero image */}
      {post.imageUrl && (
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712]" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mt-8 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <Tag className="w-3 h-3" /> {post.category}
          </span>
          {post.publishedAt && (
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              {(() => {
                try {
                  const d = typeof post.publishedAt?.toDate === 'function'
                    ? post.publishedAt.toDate()
                    : new Date(post.publishedAt?.seconds ? post.publishedAt.seconds * 1000 : post.publishedAt);
                  return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
                } catch {
                  return 'Reciente';
                }
              })()}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-primary pl-4 mb-10 italic">
          {post.excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-primary/40 via-gray-700 to-transparent mb-10" />

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:marker:text-primary
            prose-blockquote:border-primary prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gray-900/60 border border-gray-800 rounded-2xl text-center">
          <h3 className="text-white text-2xl font-bold mb-2">¿Te interesa trabajar con nosotros?</h3>
          <p className="text-gray-400 mb-6">Hablemos sobre tu proyecto.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-6 py-3 rounded-full font-bold transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full border font-semibold text-sm transition-all
                ${copied ? 'border-green-500/60 bg-green-500/10 text-green-400' : 'border-gray-700 bg-white/5 text-gray-300 hover:border-gray-500 hover:text-white'}`}
            >
              {copied ? <><Check className="w-4 h-4" /> ¡Copiado!</> : <><Copy className="w-4 h-4" /> Copiar correo</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
