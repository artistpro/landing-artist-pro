import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RadioSection from './components/RadioSection';
import Gallery from './components/Gallery';
import Courses from './src/pages/Courses';
import CourseDetail from './src/pages/CourseDetail';
import Blog from './src/pages/Blog';
import BlogPost from './src/pages/BlogPost';
import AdminLogin from './src/pages/admin/Login';
import AdminDashboard from './src/pages/admin/Dashboard';
import ArticleEditor from './src/pages/admin/ArticleEditor';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <RadioSection />
      <Gallery />

      {/* About / Value Prop Snippet */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#030712] to-gray-900 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Por qué elegir Artist Pro</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Somos músicos, emprendedores y tenemos soluciones que van desde la grabación, la producción audiovisual y multimedia.
            Creamos soluciones para nuestros clientes con pasión por el arte, la empresa y la tecnología.
            Garantizamos calidad y una experiencia memorable.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#030712] text-white selection:bg-primary selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/cursos/:id" element={<CourseDetail />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/nuevo"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/editar/:id"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;