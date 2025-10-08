import { createContext, useContext, useState, ReactNode, useEffect, useMemo, useCallback } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Cache for translations to avoid repeated API calls
const translationCache: { [key: string]: string } = {};

// Function to translate text using Google Translate (via MyMemory API - free alternative)
async function translateText(text: string, targetLang: string): Promise<string> {
  const cacheKey = `${text}_${targetLang}`;
  
  // Return from cache if available
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    );
    const data = await response.json();
    
    if (data.responseData && data.responseData.translatedText) {
      const translated = data.responseData.translatedText;
      translationCache[cacheKey] = translated;
      return translated;
    }
    
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.resume': 'Resume',
    'nav.contact': "Let's Talk",

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.description': "I'm a passionate software engineer specializing in full-stack development, DevOps, and cloud technologies. I love building innovative solutions that make a difference.",
    'hero.cta': 'Get In Touch',
    'hero.connect': 'Connect with me',

    // About
    'about.title': 'About',
    'about.me': 'Me',
    'about.description': "I'm a dedicated Software Engineering student at ESPRIT, passionate about creating innovative solutions through code. With expertise in full-stack development, DevOps practices, and cloud technologies, I thrive on turning complex problems into elegant, scalable applications.",
    'about.tagline': 'Turning ideas into reality through code',
    'about.tab.education': 'Education',
    'about.tab.skills': 'Skills',
    'about.tab.interests': 'Interests',

    // Services
    'services.title': 'Services',
    'services.offer': 'I Offer',
    'services.description': 'Comprehensive solutions for your digital needs',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Building responsive and dynamic web applications using modern frameworks',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.desc': 'Creating native and cross-platform mobile applications',
    'services.devops.title': 'DevOps & Cloud',
    'services.devops.desc': 'Implementing CI/CD pipelines and cloud infrastructure',
    'services.cta': 'Get in touch',

    // Skills
    'skills.title': 'My',
    'skills.subtitle': 'Skills',
    'skills.description': 'Technologies I work with',

    // Experience
    'experience.title': 'Work',
    'experience.subtitle': 'Experience',
    'experience.description': 'My professional journey and accomplishments',
    'experience.showMore': 'Show More',
    'experience.showLess': 'Show Less',

    // Projects
    'projects.title': 'My Creative',
    'projects.subtitle': 'Portfolio',
    'projects.description': "Here are some of the projects I've worked on",
    'projects.technologies': 'Technologies:',
    'projects.github': 'GitHub',
    'projects.demo': 'Demo',

    // Certifications
    'certifications.title': 'My',
    'certifications.subtitle': 'Certifications',
    'certifications.description': 'Professional certifications and achievements',

    // Resume
    'resume.title': 'My',
    'resume.subtitle': 'Resume',
    'resume.description': 'Download my resume to learn more about my experience',
    'resume.download': 'Download Resume',
    'resume.view': 'View Resume',
    'resume.fallback': 'Click here to download the resume',

    // Contact
    'contact.title': 'Get In',
    'contact.subtitle': 'Touch',
    'contact.description': "Have a project in mind? Let's work together!",
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.or': 'Or reach out via',

    // Footer
    'footer.about.title': 'About',
    'footer.about.desc': 'A passionate software engineer dedicated to creating innovative solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.by': 'by',

    // GitHub
    'github.title': 'GitHub',
    'github.activity': 'Activity',
    'github.description': 'Check out my open source contributions',
    'github.repos': 'Repositories',
    'github.prs': 'Pull Requests',
    'github.contributor': 'Active Contributor',
    'github.contributions': 'contributions in the last year',

    // Common
    'common.all': 'All',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.certifications': 'Certifications',
    'nav.resume': 'CV',
    'nav.contact': 'Contactez-moi',

    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.description': "Je suis un ingénieur logiciel passionné, spécialisé dans le développement full-stack, DevOps et les technologies cloud. J'aime créer des solutions innovantes qui font la différence.",
    'hero.cta': 'Me Contacter',
    'hero.connect': 'Connectez-vous avec moi',

    // About
    'about.title': 'À',
    'about.me': 'Propos',
    'about.description': "Je suis un étudiant en génie logiciel à l'ESPRIT, passionné par la création de solutions innovantes à travers le code. Avec une expertise en développement full-stack, pratiques DevOps et technologies cloud, je m'épanouis en transformant des problèmes complexes en applications élégantes et évolutives.",
    'about.tagline': 'Transformer les idées en réalité par le code',
    'about.tab.education': 'Formation',
    'about.tab.skills': 'Compétences',
    'about.tab.interests': 'Intérêts',

    // Services
    'services.title': 'Services',
    'services.offer': 'Que Je Propose',
    'services.description': 'Des solutions complètes pour vos besoins numériques',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Création d\'applications web réactives et dynamiques avec des frameworks modernes',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.desc': 'Création d\'applications mobiles natives et multiplateformes',
    'services.devops.title': 'DevOps & Cloud',
    'services.devops.desc': 'Mise en place de pipelines CI/CD et d\'infrastructures cloud',
    'services.cta': 'Contactez-moi',

    // Skills
    'skills.title': 'Mes',
    'skills.subtitle': 'Compétences',
    'skills.description': 'Technologies que je maîtrise',

    // Experience
    'experience.title': 'Expérience',
    'experience.subtitle': 'Professionnelle',
    'experience.description': 'Mon parcours professionnel et mes réalisations',
    'experience.showMore': 'Voir Plus',
    'experience.showLess': 'Voir Moins',

    // Projects
    'projects.title': 'Mon',
    'projects.subtitle': 'Portfolio',
    'projects.description': 'Voici quelques projets sur lesquels j\'ai travaillé',
    'projects.technologies': 'Technologies :',
    'projects.github': 'GitHub',
    'projects.demo': 'Démo',

    // Certifications
    'certifications.title': 'Mes',
    'certifications.subtitle': 'Certifications',
    'certifications.description': 'Certifications professionnelles et réalisations',

    // Resume
    'resume.title': 'Mon',
    'resume.subtitle': 'CV',
    'resume.description': 'Téléchargez mon CV pour en savoir plus sur mon expérience',
    'resume.download': 'Télécharger le CV',
    'resume.view': 'Voir le CV',
    'resume.fallback': 'Cliquez ici pour télécharger le CV',

    // Contact
    'contact.title': 'Me',
    'contact.subtitle': 'Contacter',
    'contact.description': 'Vous avez un projet en tête ? Travaillons ensemble !',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer',
    'contact.or': 'Ou contactez-moi via',

    // Footer
    'footer.about.title': 'À Propos',
    'footer.about.desc': 'Un ingénieur logiciel passionné dédié à la création de solutions innovantes.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Connecter',
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec',
    'footer.by': 'par',

    // GitHub
    'github.title': 'Activité',
    'github.activity': 'GitHub',
    'github.description': 'Découvrez mes contributions open source',
    'github.repos': 'Dépôts',
    'github.prs': 'Pull Requests',
    'github.contributor': 'Contributeur Actif',
    'github.contributions': 'contributions au cours de la dernière année',

    // Common
    'common.all': 'Tous',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<{ [key: string]: string }>({});

  // Auto-translate when language changes
  useEffect(() => {
    if (language === 'fr') {
      setIsTranslating(true);
      // Translation will happen on-demand in the t() function
      setTimeout(() => setIsTranslating(false), 500);
    }
  }, [language]);

  const t = (text: string): string => {
    // If English, return original text
    if (language === 'en') {
      return text;
    }

    // For French, check if we have a manual translation first
    const key = Object.keys(translations.en).find(
      k => translations.en[k as keyof typeof translations.en] === text
    );
    
    if (key && translations.fr[key as keyof typeof translations.fr]) {
      return translations.fr[key as keyof typeof translations.fr];
    }

    // If no manual translation, check cache
    const cacheKey = `${text}_fr`;
    if (translatedContent[cacheKey]) {
      return translatedContent[cacheKey];
    }

    // Trigger async translation (will update on next render)
    translateText(text, 'fr').then((translated) => {
      setTranslatedContent(prev => ({ ...prev, [cacheKey]: translated }));
    });

    // Return original text while translating
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
