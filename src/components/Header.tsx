import { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderGit2, Award, FileText, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
    { icon: FileText, label: 'Resume', href: '#resume' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 ml-2">
              <div className="text-base sm:text-lg font-bold gradient-text glow-effect">
                Hamza Ayari
              </div>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 mr-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link flex items-center gap-2 text-gray-300 hover:text-cyan-400 px-2 py-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <item.icon size={16} className="nav-icon" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-5 py-2 rounded-xl transition-all duration-300 btn-glow font-semibold"
            >
              <Mail size={16} />
              <span className="text-xs">Let's Talk</span>
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
          <nav className={`md:hidden mt-4 pb-4 pt-4 ${isScrolled ? 'border-t border-cyan-500/20' : ''}`}>
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

    {/* Scroll Progress Bar - Below Header */}
    <div className="fixed top-[72px] left-0 right-0 z-40 h-1 bg-slate-800/50">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 transition-all duration-300 shadow-lg shadow-cyan-500/50" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  </>
  );
}
