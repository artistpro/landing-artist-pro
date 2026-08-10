import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RadioSection from './components/RadioSection';
import Gallery from './components/Gallery';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import ConcursoLanding from './src/concurso/ConcursoLanding';
import { ContestBanner } from './components/ContestBanner';

// Lazy loaded page components for optimal performance & fast initial load
const Courses = lazy(() => import('./src/pages/Courses'));
const CourseDetail = lazy(() => import('./src/pages/CourseDetail'));
const Blog = lazy(() => import('./src/pages/Blog'));
const BlogPost = lazy(() => import('./src/pages/BlogPost'));
const AdminLogin = lazy(() => import('./src/pages/admin/Login'));
const AdminDashboard = lazy(() => import('./src/pages/admin/Dashboard'));
const ArticleEditor = lazy(() => import('./src/pages/admin/ArticleEditor'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#08080A] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#FF4D2E] border-t-transparent rounded-full animate-spin" />
  </div>
);

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

function MainLayoutContent() {
  const location = useLocation();
  const isConcursoPage = location.pathname === '/concurso';

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-primary selection:text-white">
      {!isConcursoPage && (
        <>
          <ContestBanner />
          <Navbar />
        </>
      )}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concurso" element={<ConcursoLanding />} />
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
      </Suspense>

      {!isConcursoPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayoutContent />
      </Router>
    </AuthProvider>
  );
}

export default App;