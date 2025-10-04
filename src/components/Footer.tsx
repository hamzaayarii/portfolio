import { Github, Linkedin, Youtube, Instagram, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/hamzaayarii', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-ayari-9003aa23b', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">H</span>
              </div>
              <h3 className="text-xl font-bold gradient-text">Hamza Ayari</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              DevOps Engineer crafting scalable solutions and automating the future of software delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Connect</h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} className="text-gray-400 hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Designed & Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by Hamza Ayari</span>
          </div>

          <div className="text-gray-400 text-sm">
            Copyright © {currentYear} - All rights reserved
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 btn-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
