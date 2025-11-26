import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RadioSection from './components/RadioSection';
import Courses from './src/pages/Courses';
import CourseDetail from './src/pages/CourseDetail';

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <RadioSection />

      {/* About / Value Prop Snippet */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#030712] to-gray-900 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Por qué elegir Artist Pro</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            No somos solo un estudio o una empresa de streaming. Somos un colectivo de ingenieros, productores y desarrolladores
            apasionados por la intersección entre el arte y la tecnología. Garantizamos estabilidad, calidad de audio superior
            y una estética visual que representa la grandeza de tu marca.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#030712] text-white selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;