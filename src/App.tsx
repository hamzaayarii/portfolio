import Starfield from './components/Starfield';
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
      {/* Animated Mesh Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0d1425] to-[#0a1628] -z-10"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Primary cyan orb */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
        
        {/* Secondary teal orb */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
        
        {/* Tertiary purple orb */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
        
        {/* Emerald accent */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-3000"></div>
        
        {/* Pink accent */}
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-500/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-5000"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent)] animate-grid -z-10"></div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: i % 3 === 0 ? 'rgba(6,182,212,0.6)' : i % 3 === 1 ? 'rgba(20,184,166,0.6)' : 'rgba(16,185,129,0.6)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              boxShadow: '0 0 10px currentColor',
            }}
          ></div>
        ))}
      </div>

      {/* Scanning Lines Effect */}
      <div className="fixed inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[200px] animate-scan"></div>
      </div>

      <Starfield />

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
