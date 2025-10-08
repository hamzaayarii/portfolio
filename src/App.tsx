import { lazy, Suspense, memo } from 'react';
import Starfield from './components/Starfield';
import Header from './components/Header';
import Hero from './components/Hero';
import LanguageSwitcher from './components/LanguageSwitcher';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Skills = lazy(() => import('./components/Skills'));
const GitHub = lazy(() => import('./components/GitHub'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Lightweight loading fallback
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden scroll-smooth">
      {/* Optimized Static Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0d1425] to-[#0a1628] -z-10 pointer-events-none"></div>
      
      {/* Simplified Animated Gradient Orbs - Reduced from 5 to 3 */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-purple-500/15 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Starfield />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <GitHub />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Resume />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </main>
        
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default memo(App);
