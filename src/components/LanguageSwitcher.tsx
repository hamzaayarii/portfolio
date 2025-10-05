import { Languages, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<'en' | 'fr'>('en');
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
      setIsLoaded(true);
    };

    addScript();

    // Check for language changes from cookies
    const checkCookie = setInterval(() => {
      const cookie = document.cookie.split(';').find(c => c.trim().startsWith('googtrans='));
      if (cookie) {
        const lang = cookie.split('/')[2];
        if (lang === 'fr') {
          setCurrentLang('fr');
        } else {
          setCurrentLang('en');
        }
      }
    }, 500);

    return () => clearInterval(checkCookie);
  }, []);

  const switchLanguage = (targetLang: 'en' | 'fr') => {
    if (!isLoaded) {
      console.log('Google Translate not loaded yet');
      return;
    }

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = targetLang;
      selectElement.dispatchEvent(new Event('change'));
      setCurrentLang(targetLang);
      
      // Force reload to apply translation
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      console.log('Google Translate dropdown not found');
      // Try alternative method
      setCookie('googtrans', `/en/${targetLang}`, 1);
      setCookie('googtrans', `/en/${targetLang}`, 1, '.hamzaayarii.github.io');
      window.location.reload();
    }
  };

  const setCookie = (name: string, value: string, days: number, domain?: string) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    let cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    if (domain) {
      cookie += `;domain=${domain}`;
    }
    document.cookie = cookie;
  };

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}></div>
      
      {/* Creative Floating Language Switcher */}
      <div 
        className="fixed bottom-8 right-8 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Main Globe Button */}
          <button
            onClick={() => switchLanguage(currentLang === 'en' ? 'fr' : 'en')}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 btn-glow group relative overflow-hidden"
            aria-label="Switch language"
            title={`Switch to ${currentLang === 'en' ? 'French' : 'English'}`}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            <div className="relative">
              <Globe size={24} className="text-white animate-pulse" />
            </div>
          </button>

          {/* Language Options - Show on Hover */}
          {isHovered && (
            <div className="absolute bottom-full right-0 mb-3 flex flex-col gap-2 animate-slide-in">
              <button
                onClick={() => switchLanguage('en')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
                  currentLang === 'en'
                    ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/70 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40'
                }`}
                title="Switch to English"
              >
                <Languages size={18} />
                <span className="font-medium text-sm">English</span>
              </button>
              
              <button
                onClick={() => switchLanguage('fr')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
                  currentLang === 'fr'
                    ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/70 border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40'
                }`}
                title="Switch to French"
              >
                <Languages size={18} />
                <span className="font-medium text-sm">Français</span>
              </button>
            </div>
          )}

          {/* Current Language Indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900">
            <span className="text-xs font-bold text-slate-900">{currentLang.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </>
  );
}
