import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PenSquare, Trash2, Eye, EyeOff, LogOut, Music, Plus, FileText, Globe } from 'lucide-react';
import { getAllPosts, deletePost, Post } from '../../../lib/posts';
import { useAuth } from '../../../context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPosts = () => {
    setLoading(true);
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`¿Eliminar el artículo "${title}"? Esta acción no se puede deshacer.`)) return;
    setDeleting(id);
    await deletePost(id);
    fetchPosts();
    setDeleting(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const published = posts.filter(p => p.status === 'published').length;
  const drafts = posts.filter(p => p.status === 'draft').length;

  return (
    <div className="min-h-screen bg-[#030712] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Artist Pro</p>
              <p className="text-gray-500 text-xs mt-0.5">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="p-4 flex-1">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold mb-3 px-2">Blog</p>
          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 text-primary font-medium text-sm mb-1"
          >
            <FileText className="w-4 h-4" /> Artículos
          </Link>
          <Link
            to="/admin/nuevo"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 font-medium text-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> Nuevo artículo
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 font-medium text-sm transition-colors"
            >
              <Globe className="w-4 h-4" /> Ver sitio
            </Link>
          </div>
        </nav>

        {/* User */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user?.email?.[0].toUpperCase()}
            </div>
            <p className="text-gray-400 text-xs truncate">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/10 text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Artículos del Blog</h1>
            <p className="text-gray-500 text-sm mt-1">{published} publicados · {drafts} borradores</p>
          </div>
          <Link
            to="/admin/nuevo"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" /> Nuevo artículo
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total', value: posts.length, color: 'text-white' },
            { label: 'Publicados', value: published, color: 'text-green-400' },
            { label: 'Borradores', value: drafts, color: 'text-yellow-400' },
          ].map(stat => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-gray-900/40 rounded-2xl border border-gray-800 border-dashed">
            <FileText className="w-10 h-10 text-gray-700 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">No hay artículos todavía</p>
            <p className="text-gray-600 text-sm mt-1">Crea tu primer artículo</p>
            <Link
              to="/admin/nuevo"
              className="inline-flex items-center gap-2 mt-4 bg-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/30 transition-colors"
            >
              <Plus className="w-4 h-4" /> Crear artículo
            </Link>
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wide px-6 py-4">Artículo</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wide px-4 py-4 hidden md:table-cell">Categoría</th>
                  <th className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wide px-4 py-4">Estado</th>
                  <th className="text-right text-gray-500 text-xs font-semibold uppercase tracking-wide px-6 py-4">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {post.imageUrl && (
                          <img src={post.imageUrl} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-800" />
                        )}
                        <div>
                          <p className="text-white font-medium text-sm line-clamp-1">{post.title}</p>
                          <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-primary text-xs font-medium bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`flex items-center gap-1.5 text-xs font-semibold w-fit px-2.5 py-1 rounded-full ${
                        post.status === 'published'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {post.status === 'published' ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {post.status === 'published' ? 'Publicado' : 'Borrador'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/editar/${post.id}`}
                          className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <PenSquare className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id!, post.title)}
                          disabled={deleting === post.id}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                          title="Eliminar"
                        >
                          {deleting === post.id
                            ? <div className="w-4 h-4 border border-red-400 border-t-transparent rounded-full animate-spin" />
                            : <Trash2 className="w-4 h-4" />
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
