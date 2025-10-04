import { Hand, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Engineer',
  'DevOps Engineer',
  'Software Engineering Student'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500); // Half second for fade out
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-6xl md:text-7xl font-bold text-white">Hello</h1>
                <Hand size={50} className="text-yellow-400 animate-wave" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                I'm <span className="gradient-text glow-effect">Hamza Ayari</span>
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 min-h-[3rem]">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded flex-shrink-0"></div>
                <h3 
                  className={`text-2xl md:text-3xl font-bold text-cyan-400 transition-all duration-500 ${
                    isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  {roles[currentRoleIndex]}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-8 py-4 rounded-xl transition-all duration-300 btn-glow font-semibold text-lg"
              >
                <span>Get In Touch</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-500/30 hover:border-cyan-500/60 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg"
              >
                View Work
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <span className="text-gray-400 text-sm">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/hamzaayarii" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-300 hover:text-cyan-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hamza-ayari-9003aa23b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-gray-300 hover:text-cyan-400" />
                </a>
                <a href="mailto:hamzaayari2026@gmail.com" className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Mail size={20} className="text-gray-300 hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="w-full max-w-lg aspect-square rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/50 transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl blur-md opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl blur-md opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
}
