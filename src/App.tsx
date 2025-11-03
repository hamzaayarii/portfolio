import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import GitHub from './components/GitHub';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simple Elegant Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:100px_100px] -z-10"></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent -z-10"></div>

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <GitHub />
          <Experience />
          <Projects />
          <Resume />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        
        {/* Floating Language Switcher */}
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default App;
