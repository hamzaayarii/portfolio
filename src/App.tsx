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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large cyan orb - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
        
        {/* Teal orb - top right */}
        <div className="absolute -top-20 right-20 w-80 h-80 bg-teal-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Emerald orb - middle left */}
        <div className="absolute top-1/3 -left-32 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Cyan orb - middle right */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Purple-blue orb - bottom left */}
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Teal orb - bottom right */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
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
