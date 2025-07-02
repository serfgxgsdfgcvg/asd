import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'fr' | 'es' | 'ru' | 'zh' | 'ja' | 'de' | 'it' | 'pt' | 'sq';

interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Parlons-en',

    // Hero Section
    'hero.subtitle': 'Créatif',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés. Si tu as besoin d\'un logo qui en jette, d\'un site qui fait pas fuir ou d\'une direction créative qui a du sens... tu es au bon endroit.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'hero.service2.title': 'Direction Créative',
    'hero.service2.desc': 'Tu as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser.',
    'hero.service4.title': 'Motion Design & Vidéo',
    'hero.service4.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'Créatif dans le fond,',
    'about.title2': 'efficace dans la forme',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 10 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens. Depuis, je bosse sur des projets concrets avec des gens motivés. Je fais en sorte que tout soit clair, fluide, pro — sans jamais oublier le petit truc en plus qui donne de la personnalité.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign — mes outils de tous les jours',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montage vidéo et étalonnage professionnel',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modélisation 3D et animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design d\'interface et prototypage collaboratif',

    // Portfolio Section
    'portfolio.subtitle': 'Mes projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent mon style et ma façon de bosser. Du logo à la direction artistique complète.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': 'Ce que je peux faire pour toi',
    'services.title': 'Mes Services',
    'services.description': 'Des solutions créatives adaptées à tes besoins, du concept à la réalisation finale.',
    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser.',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes propres',
    'services.uiux.feature3': 'Maquettes pixel-perfect',
    'services.uiux.feature4': 'Tests pour voir si tout tient',
    'services.webDev.title': 'Design Print',
    'services.webDev.desc': 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
    'services.webDev.feature1': 'Mise en page soignée',
    'services.webDev.feature2': 'Bon choix de typo (pas Comic Sans, t\'inquiète)',
    'services.webDev.feature3': 'Harmonies de couleurs au petit oignon',
    'services.webDev.feature4': 'Fichiers prêts pour l\'imprimeur',
    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.mobile.feature1': 'Design iOS & Android',
    'services.mobile.feature2': 'Parcours utilisateur bien pensé',
    'services.mobile.feature3': 'Onboarding fluide',
    'services.mobile.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',
    'services.creative.title': 'Direction Créative',
    'services.creative.desc': 'Tu as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.creative.feature1': 'Direction artistique',
    'services.creative.feature2': 'Stratégie visuelle',
    'services.creative.feature3': 'Conseils stylés mais utiles',
    'services.creative.feature4': 'Vision globale du projet',
    'services.motion.title': 'Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations et effets smooth',
    'services.startProject': 'Démarrer un projet',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce qu\'ils en pensent',
    'testimonials.description': 'Les retours de mes clients sur nos collaborations.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Des marques et entrepreneurs qui ont choisi de travailler avec moi',

    // Contact Section
    'contact.subtitle': 'On discute ?',
    'contact.title1': 'Prêt à donner vie',
    'contact.title2': 'à tes idées ?',
    'contact.description': 'Tu as une idée ? Tu as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ? Écris-moi, je réponds vite (et toujours avec plaisir).',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'N\'hésite pas à me contacter pour discuter de ton projet ou simplement pour échanger sur tes idées créatives.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Pour tous tes projets créatifs',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suis-moi',
    'contact.sendMessage': 'Envoie-moi un message',
    'contact.name': 'Ton nom',
    'contact.namePlaceholder': 'Comment tu t\'appelles ?',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'De quoi tu veux qu\'on parle ?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Raconte-moi ton projet, tes idées, tes besoins...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer Section
    'footer.description': 'Créateur visuel basé en Suisse, spécialisé dans l\'identité de marque et le design d\'interface.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Design Print',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'Creative',
    'hero.greeting': 'Hey, I\'m Theo Blondel.',
    'hero.title1': 'Versatile',
    'hero.title2': 'creative',
    'hero.title3': 'solutions',
    'hero.description': 'I\'m a mediamatician based in Switzerland, transforming your ideas into clean, impactful, and truly stylish visual projects. If you need a logo that stands out, a website that doesn\'t scare people away, or creative direction that makes sense... you\'re in the right place.',
    'hero.contactMe': 'Let\'s talk?',
    'hero.watchDemo': 'Watch demo',
    'hero.yearsExperience': 'Years of experience',
    'hero.projectsDelivered': 'Projects delivered',
    'hero.clientSatisfaction': 'Client satisfaction',
    'hero.clientsWorldwide': 'Clients worldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'hero.service2.title': 'Creative Direction',
    'hero.service2.desc': 'You have the ideas, but want everything aligned, clean and consistent? I take the wheel, you give me the direction.',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Good design isn\'t just pretty. It has to work. I create simple, smooth and pleasant interfaces to use.',
    'hero.service4.title': 'Motion Design & Video',
    'hero.service4.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',

    // About Section
    'about.subtitle': 'My Journey',
    'about.title1': 'Creative at heart,',
    'about.title2': 'efficient in form',
    'about.description1': 'I started like many: with YouTube montages at 10 years old, head in pixels and sound effects. Minecraft, Fortnite, Call of... I spent hours testing, tinkering, looking for what works.',
    'about.description2': 'Then drawing came. Then, mediamatique. And there, I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people. Since then, I work on concrete projects with motivated people. I make sure everything is clear, fluid, professional — never forgetting that little extra something that gives personality.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign — my everyday tools',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Professional video editing and color grading',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '3D modeling and animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Interface design and collaborative prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'My projects',
    'portfolio.title1': 'Some stuff',
    'portfolio.title2': 'I loved making',
    'portfolio.description': 'A selection of projects that show my style and way of working. From logo to complete artistic direction.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Services Section
    'services.subtitle': 'What I can do for you',
    'services.title': 'My Services',
    'services.description': 'Creative solutions adapted to your needs, from concept to final realization.',
    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'services.brandIdentity.feature1': 'Professional logo (not on Canva)',
    'services.brandIdentity.feature2': 'Clear brand guidelines',
    'services.brandIdentity.feature3': 'Consistent visual identity',
    'services.brandIdentity.feature4': 'Brand positioning that holds up',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Good design isn\'t just pretty. It has to work. I create simple, smooth and pleasant interfaces to use.',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Clean wireframes',
    'services.uiux.feature3': 'Pixel-perfect mockups',
    'services.uiux.feature4': 'Tests to see if everything holds',
    'services.webDev.title': 'Print Design',
    'services.webDev.desc': 'Stuff you can touch. Flyers, cards, posters — everything that\'s read with eyes and hands.',
    'services.webDev.feature1': 'Careful layout',
    'services.webDev.feature2': 'Good typography choice (not Comic Sans, don\'t worry)',
    'services.webDev.feature3': 'Perfect color harmonies',
    'services.webDev.feature4': 'Files ready for printer',
    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Your app deserves better than a default template. I make you a clear, intuitive interface, pleasant to use on the subway.',
    'services.mobile.feature1': 'iOS & Android design',
    'services.mobile.feature2': 'Well-thought user journey',
    'services.mobile.feature3': 'Smooth onboarding',
    'services.mobile.feature4': 'Icons, menus, and all the little details that make the difference',
    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'You have the ideas, but want everything aligned, clean and consistent? I take the wheel, you give me the direction.',
    'services.creative.feature1': 'Artistic direction',
    'services.creative.feature2': 'Visual strategy',
    'services.creative.feature3': 'Stylish but useful advice',
    'services.creative.feature4': 'Global project vision',
    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',
    'services.motion.feature1': 'Stylish logo animations',
    'services.motion.feature2': 'Dynamic video editing',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations and smooth effects',
    'services.startProject': 'Start a project',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What they think',
    'testimonials.description': 'Feedback from my clients on our collaborations.',
    'testimonials.trustedBy': 'They trust me',
    'testimonials.trustedByDesc': 'Brands and entrepreneurs who chose to work with me',

    // Contact Section
    'contact.subtitle': 'Let\'s discuss?',
    'contact.title1': 'Ready to bring',
    'contact.title2': 'your ideas to life?',
    'contact.description': 'You have an idea? Need visual help? Or just want to know if we could work together? Write to me, I respond quickly (and always with pleasure).',
    'contact.getInTouch': 'Get in touch',
    'contact.getInTouchDesc': 'Don\'t hesitate to contact me to discuss your project or simply to exchange creative ideas.',
    'contact.email': 'Email',
    'contact.emailDesc': 'For all your creative projects',
    'contact.location': 'Location',
    'contact.followMe': 'Follow me',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Your name',
    'contact.namePlaceholder': 'What\'s your name?',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What do you want to talk about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project, ideas, needs...',
    'contact.sendBtn': 'Send message',

    // Footer Section
    'footer.description': 'Visual creator based in Switzerland, specialized in brand identity and interface design.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Print Design',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.'
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (Object.keys(translations).includes(browserLang)) {
        setLanguage(browserLang);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    const langTranslations = translations[language] || translations.fr;
    return langTranslations[key] || key;
  };

  return (
    <AppContext.Provider value={{
      theme,
      language,
      toggleTheme,
      setLanguage,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}