import { useState } from 'react';
import { Home, User, Briefcase, FolderGit2, Award, FileText, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
    { icon: FileText, label: 'Resume', href: '#resume' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="text-xl sm:text-2xl font-bold text-white">H</span>
            </div>
            <div className="text-lg sm:text-xl font-bold gradient-text glow-effect">
              Hamza Ayari
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-2 py-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <item.icon size={18} className="nav-icon" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-6 py-2.5 rounded-xl transition-all duration-300 btn-glow font-semibold"
            >
              <Mail size={18} />
              <span className="text-sm">Let's Talk</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-500/20 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-6 py-3 rounded-xl transition-all duration-300 btn-glow font-semibold"
              >
                <Mail size={20} />
                <span>Let's Talk</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
