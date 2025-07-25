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

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    theme,
    language,
    toggleTheme,
    setLanguage,
    t
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': "Let's Talk",

    // Hero Section
    'hero.subtitle': 'Creative Professional',
    'hero.greeting': 'Hello, I am Theo Blondel',
    'hero.mainTitle.line1': 'Versatile',
    'hero.mainTitle.line2': 'creative',
    'hero.mainTitle.line3': 'solutions',
    'hero.description': 'Mediamatician based in Switzerland, I combine artistic creativity and technical expertise to create authentic visual experiences.',
    'hero.contactMe': 'Contact Me',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.clientSatisfaction': 'Client Satisfaction',
    'hero.clientsWorldwide': 'Clients Worldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Unique visual identities that tell your story',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Intuitive interfaces for optimal user experience',
    'hero.service3.title': 'Web Development',
    'hero.service3.desc': 'Modern and responsive websites',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Captivating animations and visual effects',

    // About Section
    'about.subtitle': 'About Me',
    'about.title1': 'Creative Solutions',
    'about.title2': 'with Swiss Precision',
    'about.description1': 'Passionate mediamatician based in Switzerland, I combine artistic creativity and technical expertise to create authentic visual experiences. My holistic approach to design allows me to develop creative solutions that tell your story uniquely.',
    'about.description2': 'Specialized in brand identity and interface design, I support my clients in creating memorable experiences that leave a mark and generate concrete results.',
    'about.skill1.title': 'Creative Design',
    'about.skill1.desc': 'Adobe Creative Suite, Figma, Sketch',
    'about.skill2.title': 'Interface Design',
    'about.skill2.desc': 'UI/UX, Prototyping, User Research',
    'about.skill4.title': 'Strategic Thinking',
    'about.skill4.desc': 'Brand Strategy, Creative Direction',

    // Portfolio Section
    'portfolio.subtitle': 'Selected Work',
    'portfolio.title1': 'Creative',
    'portfolio.title2': 'Portfolio',
    'portfolio.description': 'Discover a selection of my recent projects, each telling a unique story through thoughtful design and strategic thinking.',
    'portfolio.viewAllBehance': 'View All on Behance',

    // Process Section
    'process.subtitle': 'My Process',
    'process.title': 'How I Work',
    'process.description1': 'A structured and collaborative approach',
    'process.description2': 'Every project follows a proven methodology to ensure exceptional results.',
    'process.step1.title': 'Discovery & Brief',
    'process.step1.desc': 'Understanding your vision, goals, and target audience through detailed discussions.',
    'process.step2.title': 'Research & Analysis',
    'process.step2.desc': 'Market research, competitor analysis, and trend identification.',
    'process.step3.title': 'Concept Development',
    'process.step3.desc': 'Creating initial concepts and exploring creative directions.',
    'process.step4.title': 'Design & Creation',
    'process.step4.desc': 'Developing the final design with attention to every detail.',
    'process.step5.title': 'Feedback & Refinement',
    'process.step5.desc': 'Collaborative refinement based on your feedback.',
    'process.step6.title': 'Delivery & Support',
    'process.step6.desc': 'Final delivery with all necessary files and ongoing support.',
    'process.example.title': 'Real Project Example',
    'process.example.description': 'See how this process works in practice with a real client project from start to finish.',
    'process.ctaTitle': 'Ready to start your project?',
    'process.ctaDescription': "Let's talk about your vision and see how we can bring it to life together with the same attention to detail.",

    // Services Section
    'services.subtitle': 'What I Do',
    'services.title': 'Services',
    'services.description': 'Comprehensive creative solutions tailored to your unique needs and goals.',
    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Complete visual identity systems that capture your brand essence.',
    'services.brandIdentity.feature1': 'Logo Design',
    'services.brandIdentity.feature2': 'Brand Guidelines',
    'services.brandIdentity.feature3': 'Visual Identity',
    'services.brandIdentity.feature4': 'Brand Strategy',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'User-centered design for digital products and experiences.',
    'services.uiux.feature1': 'User Research',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototyping',
    'services.uiux.feature4': 'User Testing',
    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Modern, responsive websites built with the latest technologies.',
    'services.webDev.feature1': 'Responsive Design',
    'services.webDev.feature2': 'Performance Optimization',
    'services.webDev.feature3': 'SEO Integration',
    'services.webDev.feature4': 'CMS Integration',
    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native and cross-platform mobile application design.',
    'services.mobile.feature1': 'iOS Design',
    'services.mobile.feature2': 'Android Design',
    'services.mobile.feature3': 'App Prototyping',
    'services.mobile.feature4': 'User Flow Design',
    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'Strategic creative leadership for your brand and campaigns.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Campaign Strategy',
    'services.creative.feature3': 'Visual Storytelling',
    'services.creative.feature4': 'Brand Positioning',
    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Engaging animations and motion design for digital media.',
    'services.motion.feature1': 'Logo Animation',
    'services.motion.feature2': 'Explainer Videos',
    'services.motion.feature3': 'UI Animations',
    'services.motion.feature4': 'Social Media Content',
    'services.startProject': 'Start a Project',

    // Testimonials Section
    'testimonials.subtitle': 'Client Reviews',
    'testimonials.title': 'What Clients Say',
    'testimonials.description': 'Discover what my clients think about working with me and the results we achieved together.',
    'testimonials.trustedBy': 'Trusted By',
    'testimonials.trustedByDesc': 'Companies and entrepreneurs who trust my expertise',
    'testimonials.ctaTitle': 'Have you worked with me?',
    'testimonials.ctaDescription': 'Your opinion matters enormously! Share your experience on Google Reviews and help other clients discover the quality of my creative services.',

    // Contact Section
    'contact.subtitle': 'Get In Touch',
    'contact.title1': "Let's Create",
    'contact.title2': 'Something Amazing',
    'contact.description': 'Ready to bring your vision to life? Let\'s discuss your project and create something extraordinary together.',
    'contact.getInTouch': 'Get In Touch',
    'contact.getInTouchDesc': 'I\'m always excited to work on new projects and meet creative minds.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Send me a message anytime',
    'contact.location': 'Location',
    'contact.locationValue': 'Vevey, Switzerland',
    'contact.locationDesc': 'Based in the Lake Geneva region',
    'contact.followMe': 'Follow Me',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Project subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.sendBtn': 'Send Message',

    // Footer Section
    'footer.description': 'Creative solutions with Swiss precision. Specialized in brand identity and digital experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web Development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.',

    // Fake Chat Messages
    'fakeChat.message1': 'Hi Theo! I need a logo for my brand "NOIRBRUME". A streetwear style, sober and poetic.',
    'fakeChat.message2': 'Such a cool name! I can already see a minimal typographic logo with a misty atmosphere. I\'ll send you a first idea tonight!',
    'fakeChat.message3': 'I can\'t wait to see it',
    'fakeChat.message4': 'Here\'s a first concept with sketches and graphic direction.',
    'fakeChat.message5': 'WOW. This is exactly what I wanted! Let\'s go with this',
    'fakeChat.message6': 'Perfect! Here\'s the final design in color and black & white.',
    'fakeChat.message7': 'Incredible! Thank you for your style and responsiveness',
    'fakeChat.message8': 'And here\'s the complete folder with all formats:<br/>Vector logo (AI, SVG, PDF)<br/>High resolution PNG versions<br/>Usage guide',

    // Project Names
    'project.noirbrume.name': 'NOIRBRUME',

    // Testimonials Content
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.role': 'CEO, TechStart',
    'testimonial1.content': 'Theo completely transformed our brand identity. His attention to detail and creative vision exceeded our expectations. The new design significantly improved our market presence.',
    'testimonial1.company': 'TechStart Inc.',
    'testimonial1.project': 'Complete brand identity redesign',
    'testimonial1.date': 'December 2023',

    'testimonial2.name': 'Michael Chen',
    'testimonial2.role': 'Founder, DesignCo',
    'testimonial2.content': 'Working with Theo was an absolute pleasure. He delivered a stunning website that not only looks amazing but also functions exceptionally well. The user experience is seamless.',
    'testimonial2.company': 'DesignCo Studio',
    'testimonial2.project': 'Website development & UX',
    'testimonial2.date': 'November 2023',

    'testimonial3.name': 'Emily Rodriguez',
    'testimonial3.role': 'Marketing Director, InnovateLab',
    'testimonial3.content': 'Theo\'s creative approach and technical expertise helped us launch a successful digital campaign. The results speak for themselves - 300% increase in engagement!',
    'testimonial3.company': 'InnovateLab',
    'testimonial3.project': 'Digital campaign & Motion Graphics',
    'testimonial3.date': 'October 2023',

    'testimonial4.name': 'David Martinez',
    'testimonial4.role': 'Product Manager, StartupX',
    'testimonial4.content': 'Theo has a unique ability to understand our needs and translate them into exceptional visual solutions. His professionalism and creativity are remarkable.',
    'testimonial4.company': 'StartupX',
    'testimonial4.project': 'Mobile interface & Prototyping',
    'testimonial4.date': 'September 2023',

    'testimonial5.name': 'Lisa Thompson',
    'testimonial5.role': 'Creative Director, BrandForge',
    'testimonial5.content': 'Collaborating with Theo was exceptional. He brings a fresh and innovative perspective to every project. His design and strategy skills are impressive.',
    'testimonial5.company': 'BrandForge',
    'testimonial5.project': 'Brand strategy & Guidelines',
    'testimonial5.date': 'August 2023',

    'testimonial6.name': 'Alex Kumar',
    'testimonial6.role': 'CEO, DigitalFlow',
    'testimonial6.content': 'Theo delivered beyond our expectations. His strategic thinking combined with exceptional design skills resulted in a brand identity that truly represents our values.',
    'testimonial6.company': 'DigitalFlow',
    'testimonial6.project': 'Complete rebranding',
    'testimonial6.date': 'July 2023',

    'testimonial7.name': 'Maria Santos',
    'testimonial7.role': 'Founder, CreativeSpace',
    'testimonial7.content': 'Working with Theo was transformative for our business. His ability to capture our essence and translate it into compelling visuals is unmatched.',
    'testimonial7.company': 'CreativeSpace',
    'testimonial7.project': 'Brand identity & Website',
    'testimonial7.date': 'June 2023',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Travaux',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Parlons-en',

    // Hero Section
    'hero.subtitle': 'Professionnel Créatif',
    'hero.greeting': 'Bonjour, je suis Theo Blondel',
    'hero.mainTitle.line1': 'Solutions',
    'hero.mainTitle.line2': 'créatives',
    'hero.mainTitle.line3': 'polyvalente',
    'hero.description': 'Médiamaticien basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques.',
    'hero.contactMe': 'Me contacter',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': "Années d'expérience",
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Identité de marque',
    'hero.service1.desc': 'Identités visuelles uniques qui racontent votre histoire',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': "Interfaces intuitives pour une expérience utilisateur optimale",
    'hero.service3.title': 'Développement web',
    'hero.service3.desc': 'Sites web modernes et responsives',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animations captivantes et effets visuels',

    // About Section
    'about.subtitle': 'À propos de moi',
    'about.title1': 'Solutions Créatives',
    'about.title2': 'avec Précision Suisse',
    'about.description1': 'Médiamaticien passionné basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques. Mon approche holistique du design me permet de développer des solutions créatives qui racontent votre histoire de manière unique.',
    'about.description2': 'Spécialisé en identité de marque et design d\'interface, j\'accompagne mes clients dans la création d\'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.',
    'about.skill1.title': 'Design Créatif',
    'about.skill1.desc': 'Adobe Creative Suite, Figma, Sketch',
    'about.skill2.title': "Design d'Interface",
    'about.skill2.desc': 'UI/UX, Prototypage, Recherche utilisateur',
    'about.skill4.title': 'Pensée Stratégique',
    'about.skill4.desc': 'Stratégie de marque, Direction créative',

    // Portfolio Section
    'portfolio.subtitle': 'Travaux Sélectionnés',
    'portfolio.title1': 'Portfolio',
    'portfolio.title2': 'Créatif',
    'portfolio.description': 'Découvrez une sélection de mes projets récents, chacun racontant une histoire unique à travers un design réfléchi et une pensée stratégique.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Process Section
    'process.subtitle': 'Mon Processus',
    'process.title': 'Comment je travaille',
    'process.description1': 'Une approche structurée et collaborative',
    'process.description2': 'Chaque projet suit une méthodologie éprouvée pour garantir des résultats exceptionnels.',
    'process.step1.title': 'Découverte & Brief',
    'process.step1.desc': 'Comprendre votre vision, vos objectifs et votre public cible à travers des discussions détaillées.',
    'process.step2.title': 'Recherche & Analyse',
    'process.step2.desc': 'Étude de marché, analyse concurrentielle et identification des tendances.',
    'process.step3.title': 'Développement de Concept',
    'process.step3.desc': 'Création de concepts initiaux et exploration des directions créatives.',
    'process.step4.title': 'Design & Création',
    'process.step4.desc': 'Développement du design final avec attention à chaque détail.',
    'process.step5.title': 'Feedback & Raffinement',
    'process.step5.desc': 'Raffinement collaboratif basé sur vos retours.',
    'process.step6.title': 'Livraison & Support',
    'process.step6.desc': 'Livraison finale avec tous les fichiers nécessaires et support continu.',
    'process.example.title': 'Exemple de Projet Réel',
    'process.example.description': 'Voyez comment ce processus fonctionne en pratique avec un vrai projet client du début à la fin.',
    'process.ctaTitle': 'Prêt à démarrer ton projet ?',
    'process.ctaDescription': 'Parlons de ta vision et voyons comment nous pouvons la concrétiser ensemble avec la même attention aux détails.',

    // Services Section
    'services.subtitle': 'Ce que je fais',
    'services.title': 'Services',
    'services.description': 'Solutions créatives complètes adaptées à vos besoins et objectifs uniques.',
    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Systèmes d\'identité visuelle complets qui capturent l\'essence de votre marque.',
    'services.brandIdentity.feature1': 'Design de Logo',
    'services.brandIdentity.feature2': 'Guidelines de Marque',
    'services.brandIdentity.feature3': 'Identité Visuelle',
    'services.brandIdentity.feature4': 'Stratégie de Marque',
    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Design centré utilisateur pour produits et expériences digitales.',
    'services.uiux.feature1': 'Recherche Utilisateur',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototypage',
    'services.uiux.feature4': 'Tests Utilisateur',
    'services.webDev.title': 'Développement Web',
    'services.webDev.desc': 'Sites web modernes et responsives construits avec les dernières technologies.',
    'services.webDev.feature1': 'Design Responsive',
    'services.webDev.feature2': 'Optimisation Performance',
    'services.webDev.feature3': 'Intégration SEO',
    'services.webDev.feature4': 'Intégration CMS',
    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Design d\'applications mobiles natives et cross-platform.',
    'services.mobile.feature1': 'Design iOS',
    'services.mobile.feature2': 'Design Android',
    'services.mobile.feature3': 'Prototypage App',
    'services.mobile.feature4': 'Design User Flow',
    'services.creative.title': 'Direction Créative',
    'services.creative.desc': 'Leadership créatif stratégique pour votre marque et campagnes.',
    'services.creative.feature1': 'Direction Artistique',
    'services.creative.feature2': 'Stratégie de Campagne',
    'services.creative.feature3': 'Storytelling Visuel',
    'services.creative.feature4': 'Positionnement de Marque',
    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animations engageantes et motion design pour médias digitaux.',
    'services.motion.feature1': 'Animation de Logo',
    'services.motion.feature2': 'Vidéos Explicatives',
    'services.motion.feature3': 'Animations UI',
    'services.motion.feature4': 'Contenu Réseaux Sociaux',
    'services.startProject': 'Démarrer un Projet',

    // Testimonials Section
    'testimonials.subtitle': 'Avis Clients',
    'testimonials.title': 'Ce que disent les clients',
    'testimonials.description': 'Découvrez ce que mes clients pensent de travailler avec moi et les résultats que nous avons obtenus ensemble.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Entreprises et entrepreneurs qui font confiance à mon expertise',
    'testimonials.ctaTitle': 'Tu as travaillé avec moi ?',
    'testimonials.ctaDescription': 'Ton avis compte énormément ! Partage ton expérience sur Google Reviews et aide d\'autres clients à découvrir la qualité de mes services créatifs.',

    // Contact Section
    'contact.subtitle': 'Prenons Contact',
    'contact.title1': 'Créons Ensemble',
    'contact.title2': 'Quelque Chose d\'Extraordinaire',
    'contact.description': 'Prêt à donner vie à votre vision ? Discutons de votre projet et créons quelque chose d\'extraordinaire ensemble.',
    'contact.getInTouch': 'Prenons Contact',
    'contact.getInTouchDesc': 'Je suis toujours ravi de travailler sur de nouveaux projets et de rencontrer des esprits créatifs.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoyez-moi un message à tout moment',
    'contact.location': 'Localisation',
    'contact.locationValue': 'Vevey, Suisse',
    'contact.locationDesc': 'Basé dans la région lémanique',
    'contact.followMe': 'Suivez-moi',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet du projet',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet...',
    'contact.sendBtn': 'Envoyer le Message',

    // Footer Section
    'footer.description': 'Solutions créatives avec précision suisse. Spécialisé en identité de marque et expériences digitales.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Développement Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',

    // Fake Chat Messages
    'fakeChat.message1': 'Salut Théo ! J\'ai besoin d\'un logo pour ma marque "NOIRBRUME". Un style streetwear, sobre et poétique.',
    'fakeChat.message2': 'Trop stylé comme nom ! Je vois déjà un logo typographique minimal avec une ambiance brumeuse. Je t\'envoie une première idée ce soir !',
    'fakeChat.message3': 'J\'ai trop hâte de voir ça',
    'fakeChat.message4': 'Voilà un premier concept avec croquis et direction graphique.',
    'fakeChat.message5': 'WAW. C\'est exactement ce que je voulais ! On part sur ça',
    'fakeChat.message6': 'Parfait ! Voici le design final en couleur et en noir & blanc.',
    'fakeChat.message7': 'Incroyable ! Merci pour ton style et ta réactivité',
    'fakeChat.message8': 'Et voilà le dossier complet avec tous les formats :<br/>Logo vectoriel (AI, SVG, PDF)<br/>Versions PNG haute résolution<br/>Guide d\'utilisation',

    // Project Names
    'project.noirbrume.name': 'NOIRBRUME',

    // Testimonials Content
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.role': 'CEO, TechStart',
    'testimonial1.content': 'Theo a transformé complètement notre identité de marque. Son attention aux détails et sa vision créative ont dépassé nos attentes. Le nouveau design a considérablement amélioré notre présence sur le marché.',
    'testimonial1.company': 'TechStart Inc.',
    'testimonial1.project': 'Refonte complète de l\'identité de marque',
    'testimonial1.date': 'Décembre 2023',

    'testimonial2.name': 'Michael Chen',
    'testimonial2.role': 'Founder, DesignCo',
    'testimonial2.content': 'Travailler avec Theo a été un plaisir absolu. Il a livré un site web époustouflant qui non seulement a l\'air incroyable, mais fonctionne aussi exceptionnellement bien. L\'expérience utilisateur est fluide.',
    'testimonial2.company': 'DesignCo Studio',
    'testimonial2.project': 'Développement site web & UX',
    'testimonial2.date': 'Novembre 2023',

    'testimonial3.name': 'Emily Rodriguez',
    'testimonial3.role': 'Marketing Director, InnovateLab',
    'testimonial3.content': 'L\'approche créative et l\'expertise technique de Theo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d\'eux-mêmes - 300% d\'augmentation de l\'engagement !',
    'testimonial3.company': 'InnovateLab',
    'testimonial3.project': 'Campagne digitale & Motion Graphics',
    'testimonial3.date': 'Octobre 2023',

    'testimonial4.name': 'David Martinez',
    'testimonial4.role': 'Product Manager, StartupX',
    'testimonial4.content': 'Theo a une capacité unique à comprendre nos besoins et à les traduire en solutions visuelles exceptionnelles. Son professionnalisme et sa créativité sont remarquables.',
    'testimonial4.company': 'StartupX',
    'testimonial4.project': 'Interface mobile & Prototypage',
    'testimonial4.date': 'Septembre 2023',

    'testimonial5.name': 'Lisa Thompson',
    'testimonial5.role': 'Creative Director, BrandForge',
    'testimonial5.content': 'La collaboration avec Theo a été exceptionnelle. Il apporte une perspective fraîche et innovante à chaque projet. Ses compétences en design et en stratégie sont impressionnantes.',
    'testimonial5.company': 'BrandForge',
    'testimonial5.project': 'Stratégie de marque & Guidelines',
    'testimonial5.date': 'Août 2023',

    'testimonial6.name': 'Alex Kumar',
    'testimonial6.role': 'CEO, DigitalFlow',
    'testimonial6.content': 'Theo a livré au-delà de nos attentes. Sa pensée stratégique combinée à des compétences de design exceptionnelles a abouti à une identité de marque qui représente vraiment nos valeurs.',
    'testimonial6.company': 'DigitalFlow',
    'testimonial6.project': 'Rebranding complet',
    'testimonial6.date': 'Juillet 2023',

    'testimonial7.name': 'Maria Santos',
    'testimonial7.role': 'Founder, CreativeSpace',
    'testimonial7.content': 'Travailler avec Theo a été transformateur pour notre entreprise. Sa capacité à capturer notre essence et à la traduire en visuels convaincants est inégalée.',
    'testimonial7.company': 'CreativeSpace',
    'testimonial7.project': 'Identité de marque & Site web',
    'testimonial7.date': 'Juin 2023',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.work': 'Trabajo',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.letsTalk': 'Hablemos',

    // Hero Section
    'hero.subtitle': 'Profesional Creativo',
    'hero.greeting': 'Hola, soy Theo Blondel',
    'hero.mainTitle.line1': 'Soluciones',
    'hero.mainTitle.line2': 'creativas',
    'hero.mainTitle.line3': 'versátiles',
    'hero.description': 'Mediamático con base en Suiza, combino creatividad artística y experiencia técnica para crear experiencias visuales auténticas.',
    'hero.contactMe': 'Contáctame',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsDelivered': 'Proyectos Entregados',
    'hero.clientSatisfaction': 'Satisfacción del Cliente',
    'hero.clientsWorldwide': 'Clientes en el Mundo',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Identidades visuales únicas que cuentan tu historia',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces intuitivas para experiencia de usuario óptima',
    'hero.service3.title': 'Desarrollo Web',
    'hero.service3.desc': 'Sitios web modernos y responsivos',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animaciones cautivadoras y efectos visuales',

    // About Section
    'about.subtitle': 'Acerca de Mí',
    'about.title1': 'Soluciones Creativas',
    'about.title2': 'con Precisión Suiza',
    'about.description1': 'Mediamático apasionado con base en Suiza, combino creatividad artística y experiencia técnica para crear experiencias visuales auténticas. Mi enfoque holístico del diseño me permite desarrollar soluciones creativas que cuentan tu historia de manera única.',
    'about.description2': 'Especializado en identidad de marca y diseño de interfaz, apoyo a mis clientes en la creación de experiencias memorables que dejan huella y generan resultados concretos.',
    'about.skill1.title': 'Diseño Creativo',
    'about.skill1.desc': 'Adobe Creative Suite, Figma, Sketch',
    'about.skill2.title': 'Diseño de Interfaz',
    'about.skill2.desc': 'UI/UX, Prototipado, Investigación de usuario',
    'about.skill4.title': 'Pensamiento Estratégico',
    'about.skill4.desc': 'Estrategia de marca, Dirección creativa',

    // Portfolio Section
    'portfolio.subtitle': 'Trabajo Seleccionado',
    'portfolio.title1': 'Portafolio',
    'portfolio.title2': 'Creativo',
    'portfolio.description': 'Descubre una selección de mis proyectos recientes, cada uno contando una historia única a través de diseño reflexivo y pensamiento estratégico.',
    'portfolio.viewAllBehance': 'Ver Todo en Behance',

    // Process Section
    'process.subtitle': 'Mi Proceso',
    'process.title': 'Cómo Trabajo',
    'process.description1': 'Un enfoque estructurado y colaborativo',
    'process.description2': 'Cada proyecto sigue una metodología probada para garantizar resultados excepcionales.',
    'process.step1.title': 'Descubrimiento y Brief',
    'process.step1.desc': 'Entender tu visión, objetivos y audiencia objetivo a través de discusiones detalladas.',
    'process.step2.title': 'Investigación y Análisis',
    'process.step2.desc': 'Investigación de mercado, análisis de competencia e identificación de tendencias.',
    'process.step3.title': 'Desarrollo de Concepto',
    'process.step3.desc': 'Crear conceptos iniciales y explorar direcciones creativas.',
    'process.step4.title': 'Diseño y Creación',
    'process.step4.desc': 'Desarrollar el diseño final con atención a cada detalle.',
    'process.step5.title': 'Feedback y Refinamiento',
    'process.step5.desc': 'Refinamiento colaborativo basado en tu retroalimentación.',
    'process.step6.title': 'Entrega y Soporte',
    'process.step6.desc': 'Entrega final con todos los archivos necesarios y soporte continuo.',
    'process.example.title': 'Ejemplo de Proyecto Real',
    'process.example.description': 'Ve cómo funciona este proceso en la práctica con un proyecto real de cliente de principio a fin.',
    'process.ctaTitle': '¿Listo para comenzar tu proyecto?',
    'process.ctaDescription': 'Hablemos de tu visión y veamos cómo podemos darle vida juntos con la misma atención al detalle.',

    // Services Section
    'services.subtitle': 'Lo Que Hago',
    'services.title': 'Servicios',
    'services.description': 'Soluciones creativas integrales adaptadas a tus necesidades y objetivos únicos.',
    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': 'Sistemas de identidad visual completos que capturan la esencia de tu marca.',
    'services.brandIdentity.feature1': 'Diseño de Logo',
    'services.brandIdentity.feature2': 'Guías de Marca',
    'services.brandIdentity.feature3': 'Identidad Visual',
    'services.brandIdentity.feature4': 'Estrategia de Marca',
    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Diseño centrado en el usuario para productos y experiencias digitales.',
    'services.uiux.feature1': 'Investigación de Usuario',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototipado',
    'services.uiux.feature4': 'Pruebas de Usuario',
    'services.webDev.title': 'Desarrollo Web',
    'services.webDev.desc': 'Sitios web modernos y responsivos construidos con las últimas tecnologías.',
    'services.webDev.feature1': 'Diseño Responsivo',
    'services.webDev.feature2': 'Optimización de Rendimiento',
    'services.webDev.feature3': 'Integración SEO',
    'services.webDev.feature4': 'Integración CMS',
    'services.mobile.title': 'Diseño Móvil',
    'services.mobile.desc': 'Diseño de aplicaciones móviles nativas y multiplataforma.',
    'services.mobile.feature1': 'Diseño iOS',
    'services.mobile.feature2': 'Diseño Android',
    'services.mobile.feature3': 'Prototipado de App',
    'services.mobile.feature4': 'Diseño de Flujo de Usuario',
    'services.creative.title': 'Dirección Creativa',
    'services.creative.desc': 'Liderazgo creativo estratégico para tu marca y campañas.',
    'services.creative.feature1': 'Dirección Artística',
    'services.creative.feature2': 'Estrategia de Campaña',
    'services.creative.feature3': 'Narrativa Visual',
    'services.creative.feature4': 'Posicionamiento de Marca',
    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animaciones atractivas y motion design para medios digitales.',
    'services.motion.feature1': 'Animación de Logo',
    'services.motion.feature2': 'Videos Explicativos',
    'services.motion.feature3': 'Animaciones UI',
    'services.motion.feature4': 'Contenido para Redes Sociales',
    'services.startProject': 'Iniciar un Proyecto',

    // Testimonials Section
    'testimonials.subtitle': 'Reseñas de Clientes',
    'testimonials.title': 'Lo Que Dicen los Clientes',
    'testimonials.description': 'Descubre lo que mis clientes piensan sobre trabajar conmigo y los resultados que logramos juntos.',
    'testimonials.trustedBy': 'Confían en Mí',
    'testimonials.trustedByDesc': 'Empresas y emprendedores que confían en mi experiencia',
    'testimonials.ctaTitle': '¿Has trabajado conmigo?',
    'testimonials.ctaDescription': '¡Tu opinión importa enormemente! Comparte tu experiencia en Google Reviews y ayuda a otros clientes a descubrir la calidad de mis servicios creativos.',

    // Contact Section
    'contact.subtitle': 'Ponte en Contacto',
    'contact.title1': 'Creemos Juntos',
    'contact.title2': 'Algo Extraordinario',
    'contact.description': '¿Listo para dar vida a tu visión? Hablemos de tu proyecto y creemos algo extraordinario juntos.',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.getInTouchDesc': 'Siempre estoy emocionado de trabajar en nuevos proyectos y conocer mentes creativas.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envíame un mensaje en cualquier momento',
    'contact.location': 'Ubicación',
    'contact.locationValue': 'Vevey, Suiza',
    'contact.locationDesc': 'Con base en la región del Lago Ginebra',
    'contact.followMe': 'Sígueme',
    'contact.sendMessage': 'Enviar un Mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': 'Asunto del proyecto',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.sendBtn': 'Enviar Mensaje',

    // Footer Section
    'footer.description': 'Soluciones creativas con precisión suiza. Especializado en identidad de marca y experiencias digitales.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de Marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.',

    // Fake Chat Messages
    'fakeChat.message1': '¡Hola Theo! Necesito un logo para mi marca "NOIRBRUME". Un estilo streetwear, sobrio y poético.',
    'fakeChat.message2': '¡Qué nombre tan genial! Ya puedo ver un logo tipográfico minimalista con una atmósfera brumosa. ¡Te envío una primera idea esta noche!',
    'fakeChat.message3': 'No puedo esperar a verlo',
    'fakeChat.message4': 'Aquí tienes un primer concepto con bocetos y dirección gráfica.',
    'fakeChat.message5': 'WOW. ¡Esto es exactamente lo que quería! Vamos con esto',
    'fakeChat.message6': 'Perfecto! Aquí está el diseño final en color y blanco y negro.',
    'fakeChat.message7': '¡Increíble! Gracias por tu estilo y capacidad de respuesta',
    'fakeChat.message8': 'Y aquí está la carpeta completa con todos los formatos:<br/>Logo vectorial (AI, SVG, PDF)<br/>Versiones PNG de alta resolución<br/>Guía de uso',

    // Project Names
    'project.noirbrume.name': 'NOIRBRUME',

    // Testimonials Content
    'testimonial1.name': 'Sarah Johnson',
    'testimonial1.role': 'CEO, TechStart',
    'testimonial1.content': 'Theo transformó completamente nuestra identidad de marca. Su atención al detalle y visión creativa superaron nuestras expectativas. El nuevo diseño mejoró significativamente nuestra presencia en el mercado.',
    'testimonial1.company': 'TechStart Inc.',
    'testimonial1.project': 'Rediseño completo de identidad de marca',
    'testimonial1.date': 'Diciembre 2023',

    'testimonial2.name': 'Michael Chen',
    'testimonial2.role': 'Fundador, DesignCo',
    'testimonial2.content': 'Trabajar con Theo fue un placer absoluto. Entregó un sitio web impresionante que no solo se ve increíble, sino que también funciona excepcionalmente bien. La experiencia del usuario es perfecta.',
    'testimonial2.company': 'DesignCo Studio',
    'testimonial2.project': 'Desarrollo de sitio web y UX',
    'testimonial2.date': 'Noviembre 2023',

    'testimonial3.name': 'Emily Rodriguez',
    'testimonial3.role': 'Directora de Marketing, InnovateLab',
    'testimonial3.content': 'El enfoque creativo y la experiencia técnica de Theo nos ayudaron a lanzar una campaña digital exitosa. Los resultados hablan por sí mismos: ¡300% de aumento en el engagement!',
    'testimonial3.company': 'InnovateLab',
    'testimonial3.project': 'Campaña digital y Motion Graphics',
    'testimonial3.date': 'Octubre 2023',

    'testimonial4.name': 'David Martinez',
    'testimonial4.role': 'Gerente de Producto, StartupX',
    'testimonial4.content': 'Theo tiene una habilidad única para entender nuestras necesidades y traducirlas en soluciones visuales excepcionales. Su profesionalismo y creatividad son notables.',
  }
}