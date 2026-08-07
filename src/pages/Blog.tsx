import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { getPublishedPosts, Post } from '../../lib/posts';
import Section from '../../components/ui/Section';

const CATEGORIES = ['Todos', 'Producción', 'Streaming', 'Grabación', 'Consejos', 'Industria'];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    getPublishedPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'Todos'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Section className="text-center">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Contenido</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Blog Artist Pro</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Producción musical, streaming, tendencias y todo lo que necesitas saber del mundo del audio.
          </p>
        </Section>
      </div>

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <BookOpen className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No hay artículos en esta categoría aún.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <Section key={post.id} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-800">
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-primary/40" />
                        </div>
                      )}
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <h3 className="text-white font-bold text-xl mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {(() => {
                            try {
                              if (!post.publishedAt) return 'Reciente';
                              const d = typeof post.publishedAt?.toDate === 'function'
                                ? post.publishedAt.toDate()
                                : new Date(post.publishedAt?.seconds ? post.publishedAt.seconds * 1000 : post.publishedAt);
                              return d.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
                            } catch {
                              return 'Reciente';
                            }
                          })()}
                        </div>
                        <span className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                          Leer <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
