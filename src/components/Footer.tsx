import { Github, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/hamzaayarii', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-ayari-9003aa23b', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Left - Designer Credit */}
          <div className="text-gray-400">
            Designed and Developed by <span className="text-cyan-400 font-semibold">Hamza Ayari</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-gray-400 text-xs">
            © {currentYear} All rights reserved
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 bg-slate-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <social.icon size={16} className="text-gray-400 hover:text-cyan-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
