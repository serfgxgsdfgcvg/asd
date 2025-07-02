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
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'Creative Solutions',
    'hero.greeting': 'Hello, I\'m Theo',
    'hero.title1': 'Creative',
    'hero.title2': 'Solutions',
    'hero.title3': 'Specialist',
    'hero.description': 'Mediamatician based in Switzerland. I create authentic visual experiences and brand identities that tell your story in a unique way.',
    'hero.contactMe': 'Contact Me',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years\nExperience',
    'hero.projectsDelivered': 'Projects\nDelivered',
    'hero.clientSatisfaction': 'Client\nSatisfaction',
    'hero.clientsWorldwide': 'Clients\nWorldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Complete visual identity creation',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Intuitive user interfaces',
    'hero.service3.title': 'Web Development',
    'hero.service3.desc': 'Modern responsive websites',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Engaging visual animations',

    // About Section
    'about.subtitle': 'About Me',
    'about.title1': 'Create, tinker, learn…',
    'about.title2': 'since 2016',
    'about.description1': 'My journey started with a simple passion: creating. What began as YouTube video editing at 10 years old has transformed into complete expertise in visual communication and digital experiences.',
    'about.description2': 'Today, I combine artistic creativity with technical expertise to develop authentic visual solutions that tell your story uniquely.',
    'about.skill1.title': 'Creative Design',
    'about.skill1.desc': 'Visual identity and graphic design',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'User interface and experience',
    'about.skill3.title': 'Development',
    'about.skill3.desc': 'Web and mobile development',
    'about.skill4.title': 'Strategy',
    'about.skill4.desc': 'Brand and digital strategy',

    // Portfolio Section
    'portfolio.subtitle': 'My Work',
    'portfolio.title1': 'Selected',
    'portfolio.title2': 'Projects',
    'portfolio.description': 'Discover some of my recent projects, each telling a unique story through design and innovation.',
    'portfolio.viewAllBehance': 'View All on Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'What I Do',
    'services.description': 'I offer comprehensive creative solutions to bring your vision to life.',
    'services.startProject': 'Start a Project',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Complete visual identity creation from concept to implementation.',
    'services.brandIdentity.feature1': 'Logo Design',
    'services.brandIdentity.feature2': 'Brand Guidelines',
    'services.brandIdentity.feature3': 'Visual Identity',
    'services.brandIdentity.feature4': 'Brand Strategy',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'User-centered design for optimal digital experiences.',
    'services.uiux.feature1': 'User Research',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototyping',
    'services.uiux.feature4': 'User Testing',

    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Modern, responsive websites built with latest technologies.',
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
    'services.creative.desc': 'Strategic creative direction for your brand and campaigns.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Creative Strategy',
    'services.creative.feature3': 'Campaign Design',
    'services.creative.feature4': 'Brand Positioning',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Engaging animations and motion design for digital media.',
    'services.motion.feature1': 'Logo Animation',
    'services.motion.feature2': 'Explainer Videos',
    'services.motion.feature3': 'UI Animations',
    'services.motion.feature4': 'Social Media Content',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.description': 'Discover what my clients think about our collaboration and the results achieved.',
    'testimonials.trustedBy': 'Trusted by Leading Companies',
    'testimonials.trustedByDesc': 'I\'ve had the privilege of working with amazing companies and startups.',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Let\'s Work',
    'contact.title2': 'Together',
    'contact.description': 'Ready to bring your project to life? Let\'s discuss your ideas and create something amazing together.',
    'contact.getInTouch': 'Get in Touch',
    'contact.getInTouchDesc': 'I\'m always excited to discuss new projects and creative opportunities.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Send me a message anytime',
    'contact.location': 'Location',
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

    // Footer
    'footer.description': 'Creative solutions specialist based in Switzerland. I create authentic visual experiences and brand identities.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web Development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Travaux',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Discutons',

    // Hero Section
    'hero.subtitle': 'Solutions Créatives',
    'hero.greeting': 'Salut, je suis Theo',
    'hero.title1': 'Solutions',
    'hero.title2': 'Créatives',
    'hero.title3': 'polyvalente',
    'hero.description': 'Médiamaticien basé en Suisse. Je crée des expériences visuelles authentiques et des identités de marque qui racontent votre histoire de manière unique.',
    'hero.contactMe': 'Me Contacter',
    'hero.watchDemo': 'Voir la Démo',
    'hero.yearsExperience': 'Années\nd\'Expérience',
    'hero.projectsDelivered': 'Projets\nRéalisés',
    'hero.clientSatisfaction': 'Satisfaction\nClient',
    'hero.clientsWorldwide': 'Clients\nMondiale',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Création d\'identité visuelle complète',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces utilisateur intuitives',
    'hero.service3.title': 'Développement Web',
    'hero.service3.desc': 'Sites web modernes et responsifs',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animations visuelles engageantes',

    // About Section
    'about.subtitle': 'À Propos',
    'about.title1': 'Créer, bidouiller, apprendre…',
    'about.title2': 'depuis 2016',
    'about.description1': 'Mon parcours a commencé par une passion simple : créer. Ce qui a débuté par du montage vidéo YouTube à 10 ans s\'est transformé en une expertise complète en communication visuelle et expériences digitales.',
    'about.description2': 'Aujourd\'hui, je combine créativité artistique et expertise technique pour développer des solutions visuelles authentiques qui racontent votre histoire de manière unique.',
    'about.skill1.title': 'Design Créatif',
    'about.skill1.desc': 'Identité visuelle et design graphique',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interface et expérience utilisateur',
    'about.skill3.title': 'Développement',
    'about.skill3.desc': 'Développement web et mobile',
    'about.skill4.title': 'Stratégie',
    'about.skill4.desc': 'Stratégie de marque et digitale',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Travaux',
    'portfolio.title1': 'Projets',
    'portfolio.title2': 'Sélectionnés',
    'portfolio.description': 'Découvrez quelques-uns de mes projets récents, chacun racontant une histoire unique à travers le design et l\'innovation.',
    'portfolio.viewAllBehance': 'Voir Tout sur Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'Ce Que Je Fais',
    'services.description': 'J\'offre des solutions créatives complètes pour donner vie à votre vision.',
    'services.startProject': 'Démarrer un Projet',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Création d\'identité visuelle complète du concept à la mise en œuvre.',
    'services.brandIdentity.feature1': 'Design de Logo',
    'services.brandIdentity.feature2': 'Charte Graphique',
    'services.brandIdentity.feature3': 'Identité Visuelle',
    'services.brandIdentity.feature4': 'Stratégie de Marque',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Design centré utilisateur pour des expériences digitales optimales.',
    'services.uiux.feature1': 'Recherche Utilisateur',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototypage',
    'services.uiux.feature4': 'Tests Utilisateur',

    'services.webDev.title': 'Développement Web',
    'services.webDev.desc': 'Sites web modernes et responsifs construits avec les dernières technologies.',
    'services.webDev.feature1': 'Design Responsif',
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
    'services.creative.desc': 'Direction créative stratégique pour votre marque et campagnes.',
    'services.creative.feature1': 'Direction Artistique',
    'services.creative.feature2': 'Stratégie Créative',
    'services.creative.feature3': 'Design de Campagne',
    'services.creative.feature4': 'Positionnement de Marque',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animations engageantes et motion design pour les médias digitaux.',
    'services.motion.feature1': 'Animation de Logo',
    'services.motion.feature2': 'Vidéos Explicatives',
    'services.motion.feature3': 'Animations UI',
    'services.motion.feature4': 'Contenu Réseaux Sociaux',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce Que Disent les Clients',
    'testimonials.description': 'Découvrez ce que pensent mes clients de notre collaboration et des résultats obtenus.',
    'testimonials.trustedBy': 'Fait Confiance par des Entreprises Leaders',
    'testimonials.trustedByDesc': 'J\'ai eu le privilège de travailler avec des entreprises et startups incroyables.',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Travaillons',
    'contact.title2': 'Ensemble',
    'contact.description': 'Prêt à donner vie à votre projet ? Discutons de vos idées et créons quelque chose d\'incroyable ensemble.',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.getInTouchDesc': 'Je suis toujours ravi de discuter de nouveaux projets et d\'opportunités créatives.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoyez-moi un message à tout moment',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-Moi',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet du projet',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet...',
    'contact.sendBtn': 'Envoyer le Message',

    // Footer
    'footer.description': 'Spécialiste en solutions créatives basé en Suisse. Je crée des expériences visuelles authentiques et des identités de marque.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Développement Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.work': 'Trabajo',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.letsTalk': 'Hablemos',

    // Hero Section
    'hero.subtitle': 'Soluciones Creativas',
    'hero.greeting': 'Hola, soy Theo',
    'hero.title1': 'Soluciones',
    'hero.title2': 'Creativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático con base en Suiza. Creo experiencias visuales auténticas e identidades de marca que cuentan tu historia de manera única.',
    'hero.contactMe': 'Contáctame',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de\nExperiencia',
    'hero.projectsDelivered': 'Proyectos\nEntregados',
    'hero.clientSatisfaction': 'Satisfacción\ndel Cliente',
    'hero.clientsWorldwide': 'Clientes\nMundiales',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Creación completa de identidad visual',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces de usuario intuitivas',
    'hero.service3.title': 'Desarrollo Web',
    'hero.service3.desc': 'Sitios web modernos y responsivos',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animaciones visuales atractivas',

    // About Section
    'about.subtitle': 'Acerca de Mí',
    'about.title1': 'Crear, experimentar, aprender…',
    'about.title2': 'desde 2016',
    'about.description1': 'Mi viaje comenzó con una pasión simple: crear. Lo que empezó como edición de videos de YouTube a los 10 años se ha transformado en una experiencia completa en comunicación visual y experiencias digitales.',
    'about.description2': 'Hoy, combino creatividad artística con experiencia técnica para desarrollar soluciones visuales auténticas que cuentan tu historia de manera única.',
    'about.skill1.title': 'Diseño Creativo',
    'about.skill1.desc': 'Identidad visual y diseño gráfico',
    'about.skill2.title': 'Diseño UI/UX',
    'about.skill2.desc': 'Interfaz y experiencia de usuario',
    'about.skill3.title': 'Desarrollo',
    'about.skill3.desc': 'Desarrollo web y móvil',
    'about.skill4.title': 'Estrategia',
    'about.skill4.desc': 'Estrategia de marca y digital',

    // Portfolio Section
    'portfolio.subtitle': 'Mi Trabajo',
    'portfolio.title1': 'Proyectos',
    'portfolio.title2': 'Seleccionados',
    'portfolio.description': 'Descubre algunos de mis proyectos recientes, cada uno contando una historia única a través del diseño y la innovación.',
    'portfolio.viewAllBehance': 'Ver Todo en Behance',

    // Services Section
    'services.subtitle': 'Servicios',
    'services.title': 'Lo Que Hago',
    'services.description': 'Ofrezco soluciones creativas integrales para dar vida a tu visión.',
    'services.startProject': 'Iniciar un Proyecto',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': 'Creación completa de identidad visual desde el concepto hasta la implementación.',
    'services.brandIdentity.feature1': 'Diseño de Logo',
    'services.brandIdentity.feature2': 'Guías de Marca',
    'services.brandIdentity.feature3': 'Identidad Visual',
    'services.brandIdentity.feature4': 'Estrategia de Marca',

    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Diseño centrado en el usuario para experiencias digitales óptimas.',
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
    'services.creative.desc': 'Dirección creativa estratégica para tu marca y campañas.',
    'services.creative.feature1': 'Dirección Artística',
    'services.creative.feature2': 'Estrategia Creativa',
    'services.creative.feature3': 'Diseño de Campaña',
    'services.creative.feature4': 'Posicionamiento de Marca',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animaciones atractivas y motion design para medios digitales.',
    'services.motion.feature1': 'Animación de Logo',
    'services.motion.feature2': 'Videos Explicativos',
    'services.motion.feature3': 'Animaciones UI',
    'services.motion.feature4': 'Contenido para Redes Sociales',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo Que Dicen los Clientes',
    'testimonials.description': 'Descubre lo que piensan mis clientes sobre nuestra colaboración y los resultados obtenidos.',
    'testimonials.trustedBy': 'Confiado por Empresas Líderes',
    'testimonials.trustedByDesc': 'He tenido el privilegio de trabajar con empresas y startups increíbles.',

    // Contact Section
    'contact.subtitle': 'Contacto',
    'contact.title1': 'Trabajemos',
    'contact.title2': 'Juntos',
    'contact.description': '¿Listo para dar vida a tu proyecto? Hablemos de tus ideas y creemos algo increíble juntos.',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.getInTouchDesc': 'Siempre estoy emocionado de discutir nuevos proyectos y oportunidades creativas.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envíame un mensaje en cualquier momento',
    'contact.location': 'Ubicación',
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

    // Footer
    'footer.description': 'Especialista en soluciones creativas con base en Suiza. Creo experiencias visuales auténticas e identidades de marca.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de Marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.',
  },
  ru: {
    // Navigation
    'nav.about': 'О нас',
    'nav.work': 'Работы',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.letsTalk': 'Поговорим',

    // Hero Section
    'hero.subtitle': 'Креативные Решения',
    'hero.greeting': 'Привет, я Тео',
    'hero.title1': 'Креативные',
    'hero.title2': 'Решения',
    'hero.title3': 'Специалист',
    'hero.description': 'Медиаматик из Швейцарии. Создаю аутентичные визуальные впечатления и фирменные стили, которые рассказывают вашу историю уникальным способом.',
    'hero.contactMe': 'Связаться',
    'hero.watchDemo': 'Смотреть Демо',
    'hero.yearsExperience': 'Лет\nОпыта',
    'hero.projectsDelivered': 'Проектов\nВыполнено',
    'hero.clientSatisfaction': 'Удовлетворенность\nКлиентов',
    'hero.clientsWorldwide': 'Клиентов\nПо Всему Миру',
    'hero.service1.title': 'Фирменный Стиль',
    'hero.service1.desc': 'Создание полной визуальной идентичности',
    'hero.service2.title': 'UI/UX Дизайн',
    'hero.service2.desc': 'Интуитивные пользовательские интерфейсы',
    'hero.service3.title': 'Веб-разработка',
    'hero.service3.desc': 'Современные адаптивные веб-сайты',
    'hero.service4.title': 'Моушн Графика',
    'hero.service4.desc': 'Увлекательные визуальные анимации',

    // About Section
    'about.subtitle': 'Обо Мне',
    'about.title1': 'Создавать, экспериментировать, учиться…',
    'about.title2': 'с 2016 года',
    'about.description1': 'Мой путь начался с простой страсти: создавать. То, что началось с монтажа видео на YouTube в 10 лет, превратилось в полную экспертизу в визуальной коммуникации и цифровых впечатлениях.',
    'about.description2': 'Сегодня я сочетаю художественное творчество с техническими знаниями для разработки аутентичных визуальных решений, которые рассказывают вашу историю уникальным способом.',
    'about.skill1.title': 'Креативный Дизайн',
    'about.skill1.desc': 'Визуальная идентичность и графический дизайн',
    'about.skill2.title': 'UI/UX Дизайн',
    'about.skill2.desc': 'Интерфейс и пользовательский опыт',
    'about.skill3.title': 'Разработка',
    'about.skill3.desc': 'Веб и мобильная разработка',
    'about.skill4.title': 'Стратегия',
    'about.skill4.desc': 'Брендинг и цифровая стратегия',

    // Portfolio Section
    'portfolio.subtitle': 'Мои Работы',
    'portfolio.title1': 'Избранные',
    'portfolio.title2': 'Проекты',
    'portfolio.description': 'Откройте для себя некоторые из моих недавних проектов, каждый из которых рассказывает уникальную историю через дизайн и инновации.',
    'portfolio.viewAllBehance': 'Посмотреть Все на Behance',

    // Services Section
    'services.subtitle': 'Услуги',
    'services.title': 'Что Я Делаю',
    'services.description': 'Предлагаю комплексные креативные решения для воплощения вашего видения в жизнь.',
    'services.startProject': 'Начать Проект',

    'services.brandIdentity.title': 'Фирменный Стиль',
    'services.brandIdentity.desc': 'Создание полной визуальной идентичности от концепции до реализации.',
    'services.brandIdentity.feature1': 'Дизайн Логотипа',
    'services.brandIdentity.feature2': 'Руководство по Бренду',
    'services.brandIdentity.feature3': 'Визуальная Идентичность',
    'services.brandIdentity.feature4': 'Стратегия Бренда',

    'services.uiux.title': 'UI/UX Дизайн',
    'services.uiux.desc': 'Дизайн, ориентированный на пользователя, для оптимального цифрового опыта.',
    'services.uiux.feature1': 'Исследование Пользователей',
    'services.uiux.feature2': 'Вайрфреймы',
    'services.uiux.feature3': 'Прототипирование',
    'services.uiux.feature4': 'Тестирование Пользователей',

    'services.webDev.title': 'Веб-разработка',
    'services.webDev.desc': 'Современные адаптивные веб-сайты, созданные с использованием новейших технологий.',
    'services.webDev.feature1': 'Адаптивный Дизайн',
    'services.webDev.feature2': 'Оптимизация Производительности',
    'services.webDev.feature3': 'SEO Интеграция',
    'services.webDev.feature4': 'CMS Интеграция',

    'services.mobile.title': 'Мобильный Дизайн',
    'services.mobile.desc': 'Дизайн нативных и кроссплатформенных мобильных приложений.',
    'services.mobile.feature1': 'iOS Дизайн',
    'services.mobile.feature2': 'Android Дизайн',
    'services.mobile.feature3': 'Прототипирование Приложений',
    'services.mobile.feature4': 'Дизайн Пользовательских Потоков',

    'services.creative.title': 'Креативное Направление',
    'services.creative.desc': 'Стратегическое креативное направление для вашего бренда и кампаний.',
    'services.creative.feature1': 'Арт-направление',
    'services.creative.feature2': 'Креативная Стратегия',
    'services.creative.feature3': 'Дизайн Кампании',
    'services.creative.feature4': 'Позиционирование Бренда',

    'services.motion.title': 'Моушн Графика',
    'services.motion.desc': 'Увлекательные анимации и моушн дизайн для цифровых медиа.',
    'services.motion.feature1': 'Анимация Логотипа',
    'services.motion.feature2': 'Объясняющие Видео',
    'services.motion.feature3': 'UI Анимации',
    'services.motion.feature4': 'Контент для Социальных Сетей',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что Говорят Клиенты',
    'testimonials.description': 'Узнайте, что думают мои клиенты о нашем сотрудничестве и достигнутых результатах.',
    'testimonials.trustedBy': 'Доверяют Ведущие Компании',
    'testimonials.trustedByDesc': 'У меня была привилегия работать с удивительными компаниями и стартапами.',

    // Contact Section
    'contact.subtitle': 'Контакты',
    'contact.title1': 'Давайте Работать',
    'contact.title2': 'Вместе',
    'contact.description': 'Готовы воплотить ваш проект в жизнь? Давайте обсудим ваши идеи и создадим что-то удивительное вместе.',
    'contact.getInTouch': 'Связаться',
    'contact.getInTouchDesc': 'Я всегда рад обсуждать новые проекты и креативные возможности.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Отправьте мне сообщение в любое время',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайтесь',
    'contact.sendMessage': 'Отправить Сообщение',
    'contact.name': 'Имя',
    'contact.namePlaceholder': 'Ваше имя',
    'contact.emailPlaceholder': 'ваш.email@пример.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'Тема проекта',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажите мне о вашем проекте...',
    'contact.sendBtn': 'Отправить Сообщение',

    // Footer
    'footer.description': 'Специалист по креативным решениям из Швейцарии. Создаю аутентичные визуальные впечатления и фирменные стили.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный Стиль',
    'footer.uiuxDesign': 'UI/UX Дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн Графика',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель. Все права защищены.',
  },
  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.work': '作品',
    'nav.services': '服务',
    'nav.contact': '联系',
    'nav.letsTalk': '让我们聊聊',

    // Hero Section
    'hero.subtitle': '创意解决方案',
    'hero.greeting': '你好，我是Theo',
    'hero.title1': '创意',
    'hero.title2': '解决方案',
    'hero.title3': '专家',
    'hero.description': '瑞士媒体技术专家。我创造真实的视觉体验和品牌标识，以独特的方式讲述您的故事。',
    'hero.contactMe': '联系我',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年\n经验',
    'hero.projectsDelivered': '项目\n交付',
    'hero.clientSatisfaction': '客户\n满意度',
    'hero.clientsWorldwide': '全球\n客户',
    'hero.service1.title': '品牌标识',
    'hero.service1.desc': '完整的视觉标识创建',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '直观的用户界面',
    'hero.service3.title': '网站开发',
    'hero.service3.desc': '现代响应式网站',
    'hero.service4.title': '动态图形',
    'hero.service4.desc': '引人入胜的视觉动画',

    // About Section
    'about.subtitle': '关于我',
    'about.title1': '创造、探索、学习…',
    'about.title2': '自2016年',
    'about.description1': '我的旅程始于一个简单的激情：创造。从10岁开始的YouTube视频编辑已经转变为视觉传达和数字体验的完整专业知识。',
    'about.description2': '今天，我将艺术创造力与技术专长相结合，开发真实的视觉解决方案，以独特的方式讲述您的故事。',
    'about.skill1.title': '创意设计',
    'about.skill1.desc': '视觉标识和平面设计',
    'about.skill2.title': 'UI/UX设计',
    'about.skill2.desc': '界面和用户体验',
    'about.skill3.title': '开发',
    'about.skill3.desc': '网站和移动开发',
    'about.skill4.title': '策略',
    'about.skill4.desc': '品牌和数字策略',

    // Portfolio Section
    'portfolio.subtitle': '我的作品',
    'portfolio.title1': '精选',
    'portfolio.title2': '项目',
    'portfolio.description': '发现我最近的一些项目，每个项目都通过设计和创新讲述独特的故事。',
    'portfolio.viewAllBehance': '在Behance查看全部',

    // Services Section
    'services.subtitle': '服务',
    'services.title': '我的工作',
    'services.description': '我提供全面的创意解决方案，将您的愿景变为现实。',
    'services.startProject': '开始项目',

    'services.brandIdentity.title': '品牌标识',
    'services.brandIdentity.desc': '从概念到实施的完整视觉标识创建。',
    'services.brandIdentity.feature1': '标志设计',
    'services.brandIdentity.feature2': '品牌指南',
    'services.brandIdentity.feature3': '视觉标识',
    'services.brandIdentity.feature4': '品牌策略',

    'services.uiux.title': 'UI/UX设计',
    'services.uiux.desc': '以用户为中心的设计，提供最佳数字体验。',
    'services.uiux.feature1': '用户研究',
    'services.uiux.feature2': '线框图',
    'services.uiux.feature3': '原型制作',
    'services.uiux.feature4': '用户测试',

    'services.webDev.title': '网站开发',
    'services.webDev.desc': '使用最新技术构建的现代响应式网站。',
    'services.webDev.feature1': '响应式设计',
    'services.webDev.feature2': '性能优化',
    'services.webDev.feature3': 'SEO集成',
    'services.webDev.feature4': 'CMS集成',

    'services.mobile.title': '移动设计',
    'services.mobile.desc': '原生和跨平台移动应用程序设计。',
    'services.mobile.feature1': 'iOS设计',
    'services.mobile.feature2': 'Android设计',
    'services.mobile.feature3': '应用原型',
    'services.mobile.feature4': '用户流程设计',

    'services.creative.title': '创意指导',
    'services.creative.desc': '为您的品牌和活动提供战略性创意指导。',
    'services.creative.feature1': '艺术指导',
    'services.creative.feature2': '创意策略',
    'services.creative.feature3': '活动设计',
    'services.creative.feature4': '品牌定位',

    'services.motion.title': '动态图形',
    'services.motion.desc': '为数字媒体提供引人入胜的动画和动态设计。',
    'services.motion.feature1': '标志动画',
    'services.motion.feature2': '解释视频',
    'services.motion.feature3': 'UI动画',
    'services.motion.feature4': '社交媒体内容',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '客户评价',
    'testimonials.description': '了解我的客户对我们合作和取得成果的看法。',
    'testimonials.trustedBy': '受到领先公司信赖',
    'testimonials.trustedByDesc': '我有幸与令人惊叹的公司和初创企业合作。',

    // Contact Section
    'contact.subtitle': '联系',
    'contact.title1': '让我们',
    'contact.title2': '合作',
    'contact.description': '准备让您的项目变为现实？让我们讨论您的想法，一起创造令人惊叹的作品。',
    'contact.getInTouch': '联系我',
    'contact.getInTouchDesc': '我总是很兴奋地讨论新项目和创意机会。',
    'contact.email': '邮箱',
    'contact.emailDesc': '随时给我发消息',
    'contact.location': '位置',
    'contact.followMe': '关注我',
    'contact.sendMessage': '发送消息',
    'contact.name': '姓名',
    'contact.namePlaceholder': '您的姓名',
    'contact.emailPlaceholder': '您的邮箱@例子.com',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '项目主题',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我您的项目...',
    'contact.sendBtn': '发送消息',

    // Footer
    'footer.description': '瑞士创意解决方案专家。我创造真实的视觉体验和品牌标识。',
    'footer.quickLinks': '快速链接',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌标识',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网站开发',
    'footer.motionGraphics': '动态图形',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 保留所有权利。',
  },
  ja: {
    // Navigation
    'nav.about': 'について',
    'nav.work': '作品',
    'nav.services': 'サービス',
    'nav.contact': 'お問い合わせ',
    'nav.letsTalk': 'お話しましょう',

    // Hero Section
    'hero.subtitle': 'クリエイティブソリューション',
    'hero.greeting': 'こんにちは、テオです',
    'hero.title1': 'クリエイティブ',
    'hero.title2': 'ソリューション',
    'hero.title3': 'スペシャリスト',
    'hero.description': 'スイスを拠点とするメディアマティシャン。あなたのストーリーをユニークな方法で伝える本格的なビジュアル体験とブランドアイデンティティを創造します。',
    'hero.contactMe': 'お問い合わせ',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の\n経験',
    'hero.projectsDelivered': 'プロジェクト\n完了',
    'hero.clientSatisfaction': 'クライアント\n満足度',
    'hero.clientsWorldwide': '世界中の\nクライアント',
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': '完全なビジュアルアイデンティティ作成',
    'hero.service2.title': 'UI/UXデザイン',
    'hero.service2.desc': '直感的なユーザーインターフェース',
    'hero.service3.title': 'ウェブ開発',
    'hero.service3.desc': 'モダンなレスポンシブウェブサイト',
    'hero.service4.title': 'モーショングラフィックス',
    'hero.service4.desc': '魅力的なビジュアルアニメーション',

    // About Section
    'about.subtitle': '私について',
    'about.title1': '創造、実験、学習…',
    'about.title2': '2016年から',
    'about.description1': '私の旅は単純な情熱から始まりました：創造すること。10歳でのYouTube動画編集から始まったことが、ビジュアルコミュニケーションとデジタル体験の完全な専門知識に変わりました。',
    'about.description2': '今日、私は芸術的創造性と技術的専門知識を組み合わせて、あなたのストーリーをユニークな方法で伝える本格的なビジュアルソリューションを開発しています。',
    'about.skill1.title': 'クリエイティブデザイン',
    'about.skill1.desc': 'ビジュアルアイデンティティとグラフィックデザイン',
    'about.skill2.title': 'UI/UXデザイン',
    'about.skill2.desc': 'インターフェースとユーザー体験',
    'about.skill3.title': '開発',
    'about.skill3.desc': 'ウェブとモバイル開発',
    'about.skill4.title': '戦略',
    'about.skill4.desc': 'ブランドとデジタル戦略',

    // Portfolio Section
    'portfolio.subtitle': '私の作品',
    'portfolio.title1': '選択された',
    'portfolio.title2': 'プロジェクト',
    'portfolio.description': '私の最近のプロジェクトをご覧ください。それぞれがデザインとイノベーションを通じてユニークなストーリーを語っています。',
    'portfolio.viewAllBehance': 'Behanceで全て見る',

    // Services Section
    'services.subtitle': 'サービス',
    'services.title': '私の仕事',
    'services.description': 'あなたのビジョンを実現するための包括的なクリエイティブソリューションを提供します。',
    'services.startProject': 'プロジェクトを開始',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': 'コンセプトから実装まで完全なビジュアルアイデンティティ作成。',
    'services.brandIdentity.feature1': 'ロゴデザイン',
    'services.brandIdentity.feature2': 'ブランドガイドライン',
    'services.brandIdentity.feature3': 'ビジュアルアイデンティティ',
    'services.brandIdentity.feature4': 'ブランド戦略',

    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': '最適なデジタル体験のためのユーザー中心設計。',
    'services.uiux.feature1': 'ユーザーリサーチ',
    'services.uiux.feature2': 'ワイヤーフレーム',
    'services.uiux.feature3': 'プロトタイピング',
    'services.uiux.feature4': 'ユーザーテスト',

    'services.webDev.title': 'ウェブ開発',
    'services.webDev.desc': '最新技術で構築されたモダンなレスポンシブウェブサイト。',
    'services.webDev.feature1': 'レスポンシブデザイン',
    'services.webDev.feature2': 'パフォーマンス最適化',
    'services.webDev.feature3': 'SEO統合',
    'services.webDev.feature4': 'CMS統合',

    'services.mobile.title': 'モバイルデザイン',
    'services.mobile.desc': 'ネイティブおよびクロスプラットフォームモバイルアプリケーションデザイン。',
    'services.mobile.feature1': 'iOSデザイン',
    'services.mobile.feature2': 'Androidデザイン',
    'services.mobile.feature3': 'アプリプロトタイピング',
    'services.mobile.feature4': 'ユーザーフローデザイン',

    'services.creative.title': 'クリエイティブディレクション',
    'services.creative.desc': 'あなたのブランドとキャンペーンのための戦略的クリエイティブディレクション。',
    'services.creative.feature1': 'アートディレクション',
    'services.creative.feature2': 'クリエイティブ戦略',
    'services.creative.feature3': 'キャンペーンデザイン',
    'services.creative.feature4': 'ブランドポジショニング',

    'services.motion.title': 'モーショングラフィックス',
    'services.motion.desc': 'デジタルメディアのための魅力的なアニメーションとモーションデザイン。',
    'services.motion.feature1': 'ロゴアニメーション',
    'services.motion.feature2': '説明動画',
    'services.motion.feature3': 'UIアニメーション',
    'services.motion.feature4': 'ソーシャルメディアコンテンツ',

    // Testimonials Section
    'testimonials.subtitle': '推薦',
    'testimonials.title': 'クライアントの声',
    'testimonials.description': '私のクライアントが私たちのコラボレーションと達成した結果についてどう思っているかをご覧ください。',
    'testimonials.trustedBy': '主要企業に信頼されています',
    'testimonials.trustedByDesc': '素晴らしい企業やスタートアップと働く特権を得ています。',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '一緒に',
    'contact.title2': '働きましょう',
    'contact.description': 'あなたのプロジェクトを実現する準備はできていますか？あなたのアイデアについて話し合い、一緒に素晴らしいものを作りましょう。',
    'contact.getInTouch': 'お問い合わせ',
    'contact.getInTouchDesc': '新しいプロジェクトとクリエイティブな機会について話し合うことにいつも興奮しています。',
    'contact.email': 'メール',
    'contact.emailDesc': 'いつでもメッセージを送ってください',
    'contact.location': '場所',
    'contact.followMe': 'フォローしてください',
    'contact.sendMessage': 'メッセージを送る',
    'contact.name': '名前',
    'contact.namePlaceholder': 'あなたの名前',
    'contact.emailPlaceholder': 'あなたのメール@例.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': 'プロジェクトの件名',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクトについて教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer
    'footer.description': 'スイスを拠点とするクリエイティブソリューションスペシャリスト。本格的なビジュアル体験とブランドアイデンティティを創造します。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作成',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel. 全著作権所有。',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.work': 'Arbeiten',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.letsTalk': 'Sprechen wir',

    // Hero Section
    'hero.subtitle': 'Kreative Lösungen',
    'hero.greeting': 'Hallo, ich bin Theo',
    'hero.title1': 'Kreative',
    'hero.title2': 'Lösungen',
    'hero.title3': 'Spezialist',
    'hero.description': 'Mediamatiker aus der Schweiz. Ich schaffe authentische visuelle Erlebnisse und Markenidentitäten, die Ihre Geschichte auf einzigartige Weise erzählen.',
    'hero.contactMe': 'Kontaktieren Sie mich',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre\nErfahrung',
    'hero.projectsDelivered': 'Projekte\nGeliefert',
    'hero.clientSatisfaction': 'Kunden-\nzufriedenheit',
    'hero.clientsWorldwide': 'Kunden\nWeltweit',
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Vollständige visuelle Identitätserstellung',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Intuitive Benutzeroberflächen',
    'hero.service3.title': 'Webentwicklung',
    'hero.service3.desc': 'Moderne responsive Websites',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Ansprechende visuelle Animationen',

    // About Section
    'about.subtitle': 'Über Mich',
    'about.title1': 'Schaffen, experimentieren, lernen…',
    'about.title2': 'seit 2016',
    'about.description1': 'Meine Reise begann mit einer einfachen Leidenschaft: schaffen. Was als YouTube-Videobearbeitung mit 10 Jahren begann, hat sich zu vollständiger Expertise in visueller Kommunikation und digitalen Erlebnissen entwickelt.',
    'about.description2': 'Heute kombiniere ich künstlerische Kreativität mit technischer Expertise, um authentische visuelle Lösungen zu entwickeln, die Ihre Geschichte auf einzigartige Weise erzählen.',
    'about.skill1.title': 'Kreatives Design',
    'about.skill1.desc': 'Visuelle Identität und Grafikdesign',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'Benutzeroberfläche und Benutzererfahrung',
    'about.skill3.title': 'Entwicklung',
    'about.skill3.desc': 'Web- und Mobile-Entwicklung',
    'about.skill4.title': 'Strategie',
    'about.skill4.desc': 'Marken- und Digitalstrategie',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Arbeiten',
    'portfolio.title1': 'Ausgewählte',
    'portfolio.title2': 'Projekte',
    'portfolio.description': 'Entdecken Sie einige meiner neuesten Projekte, die jeweils eine einzigartige Geschichte durch Design und Innovation erzählen.',
    'portfolio.viewAllBehance': 'Alle auf Behance ansehen',

    // Services Section
    'services.subtitle': 'Dienstleistungen',
    'services.title': 'Was Ich Mache',
    'services.description': 'Ich biete umfassende kreative Lösungen, um Ihre Vision zum Leben zu erwecken.',
    'services.startProject': 'Projekt Starten',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Vollständige visuelle Identitätserstellung vom Konzept bis zur Umsetzung.',
    'services.brandIdentity.feature1': 'Logo-Design',
    'services.brandIdentity.feature2': 'Markenrichtlinien',
    'services.brandIdentity.feature3': 'Visuelle Identität',
    'services.brandIdentity.feature4': 'Markenstrategie',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Benutzerzentriertes Design für optimale digitale Erlebnisse.',
    'services.uiux.feature1': 'Benutzerforschung',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototyping',
    'services.uiux.feature4': 'Benutzertests',

    'services.webDev.title': 'Webentwicklung',
    'services.webDev.desc': 'Moderne, responsive Websites mit neuesten Technologien erstellt.',
    'services.webDev.feature1': 'Responsive Design',
    'services.webDev.feature2': 'Performance-Optimierung',
    'services.webDev.feature3': 'SEO-Integration',
    'services.webDev.feature4': 'CMS-Integration',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native und plattformübergreifende mobile Anwendungsdesign.',
    'services.mobile.feature1': 'iOS Design',
    'services.mobile.feature2': 'Android Design',
    'services.mobile.feature3': 'App-Prototyping',
    'services.mobile.feature4': 'User Flow Design',

    'services.creative.title': 'Kreative Leitung',
    'services.creative.desc': 'Strategische kreative Leitung für Ihre Marke und Kampagnen.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Kreative Strategie',
    'services.creative.feature3': 'Kampagnen-Design',
    'services.creative.feature4': 'Markenpositionierung',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Ansprechende Animationen und Motion Design für digitale Medien.',
    'services.motion.feature1': 'Logo-Animation',
    'services.motion.feature2': 'Erklärvideos',
    'services.motion.feature3': 'UI-Animationen',
    'services.motion.feature4': 'Social Media Inhalte',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was Kunden Sagen',
    'testimonials.description': 'Entdecken Sie, was meine Kunden über unsere Zusammenarbeit und die erzielten Ergebnisse denken.',
    'testimonials.trustedBy': 'Vertraut von führenden Unternehmen',
    'testimonials.trustedByDesc': 'Ich hatte das Privileg, mit erstaunlichen Unternehmen und Startups zu arbeiten.',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Lassen Sie uns',
    'contact.title2': 'Zusammenarbeiten',
    'contact.description': 'Bereit, Ihr Projekt zum Leben zu erwecken? Lassen Sie uns über Ihre Ideen sprechen und gemeinsam etwas Erstaunliches schaffen.',
    'contact.getInTouch': 'Kontakt aufnehmen',
    'contact.getInTouchDesc': 'Ich bin immer begeistert, neue Projekte und kreative Möglichkeiten zu besprechen.',
    'contact.email': 'E-Mail',
    'contact.emailDesc': 'Senden Sie mir jederzeit eine Nachricht',
    'contact.location': 'Standort',
    'contact.followMe': 'Folgen Sie mir',
    'contact.sendMessage': 'Nachricht senden',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailPlaceholder': 'ihre.email@beispiel.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Projekt-Betreff',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzählen Sie mir von Ihrem Projekt...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer
    'footer.description': 'Spezialist für kreative Lösungen aus der Schweiz. Ich schaffe authentische visuelle Erlebnisse und Markenidentitäten.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.services': 'Dienstleistungen',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel. Alle Rechte vorbehalten.',
  },
  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.work': 'Lavori',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatto',
    'nav.letsTalk': 'Parliamo',

    // Hero Section
    'hero.subtitle': 'Soluzioni Creative',
    'hero.greeting': 'Ciao, sono Theo',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'Creative',
    'hero.title3': 'Specialista',
    'hero.description': 'Mediamatico con base in Svizzera. Creo esperienze visive autentiche e identità di marca che raccontano la tua storia in modo unico.',
    'hero.contactMe': 'Contattami',
    'hero.watchDemo': 'Guarda Demo',
    'hero.yearsExperience': 'Anni di\nEsperienza',
    'hero.projectsDelivered': 'Progetti\nConsegnati',
    'hero.clientSatisfaction': 'Soddisfazione\nCliente',
    'hero.clientsWorldwide': 'Clienti\nMondiali',
    'hero.service1.title': 'Identità di Marca',
    'hero.service1.desc': 'Creazione completa di identità visiva',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfacce utente intuitive',
    'hero.service3.title': 'Sviluppo Web',
    'hero.service3.desc': 'Siti web moderni e responsivi',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animazioni visive coinvolgenti',

    // About Section
    'about.subtitle': 'Chi Sono',
    'about.title1': 'Creare, sperimentare, imparare…',
    'about.title2': 'dal 2016',
    'about.description1': 'Il mio viaggio è iniziato con una passione semplice: creare. Quello che è iniziato come editing video di YouTube a 10 anni si è trasformato in una competenza completa nella comunicazione visiva e nelle esperienze digitali.',
    'about.description2': 'Oggi, combino creatività artistica con competenza tecnica per sviluppare soluzioni visive autentiche che raccontano la tua storia in modo unico.',
    'about.skill1.title': 'Design Creativo',
    'about.skill1.desc': 'Identità visiva e design grafico',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfaccia ed esperienza utente',
    'about.skill3.title': 'Sviluppo',
    'about.skill3.desc': 'Sviluppo web e mobile',
    'about.skill4.title': 'Strategia',
    'about.skill4.desc': 'Strategia di marca e digitale',

    // Portfolio Section
    'portfolio.subtitle': 'I Miei Lavori',
    'portfolio.title1': 'Progetti',
    'portfolio.title2': 'Selezionati',
    'portfolio.description': 'Scopri alcuni dei miei progetti recenti, ognuno racconta una storia unica attraverso design e innovazione.',
    'portfolio.viewAllBehance': 'Vedi Tutto su Behance',

    // Services Section
    'services.subtitle': 'Servizi',
    'services.title': 'Cosa Faccio',
    'services.description': 'Offro soluzioni creative complete per dare vita alla tua visione.',
    'services.startProject': 'Inizia un Progetto',

    'services.brandIdentity.title': 'Identità di Marca',
    'services.brandIdentity.desc': 'Creazione completa di identità visiva dal concetto all\'implementazione.',
    'services.brandIdentity.feature1': 'Design del Logo',
    'services.brandIdentity.feature2': 'Linee Guida del Brand',
    'services.brandIdentity.feature3': 'Identità Visiva',
    'services.brandIdentity.feature4': 'Strategia del Brand',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Design centrato sull\'utente per esperienze digitali ottimali.',
    'services.uiux.feature1': 'Ricerca Utente',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototipazione',
    'services.uiux.feature4': 'Test Utente',

    'services.webDev.title': 'Sviluppo Web',
    'services.webDev.desc': 'Siti web moderni e responsivi costruiti con le ultime tecnologie.',
    'services.webDev.feature1': 'Design Responsivo',
    'services.webDev.feature2': 'Ottimizzazione Performance',
    'services.webDev.feature3': 'Integrazione SEO',
    'services.webDev.feature4': 'Integrazione CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Design di applicazioni mobili native e cross-platform.',
    'services.mobile.feature1': 'Design iOS',
    'services.mobile.feature2': 'Design Android',
    'services.mobile.feature3': 'Prototipazione App',
    'services.mobile.feature4': 'Design User Flow',

    'services.creative.title': 'Direzione Creativa',
    'services.creative.desc': 'Direzione creativa strategica per il tuo brand e campagne.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Strategia Creativa',
    'services.creative.feature3': 'Design Campagna',
    'services.creative.feature4': 'Posizionamento Brand',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animazioni coinvolgenti e motion design per media digitali.',
    'services.motion.feature1': 'Animazione Logo',
    'services.motion.feature2': 'Video Esplicativi',
    'services.motion.feature3': 'Animazioni UI',
    'services.motion.feature4': 'Contenuti Social Media',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa Dicono i Clienti',
    'testimonials.description': 'Scopri cosa pensano i miei clienti della nostra collaborazione e dei risultati ottenuti.',
    'testimonials.trustedBy': 'Fidato da Aziende Leader',
    'testimonials.trustedByDesc': 'Ho avuto il privilegio di lavorare con aziende e startup incredibili.',

    // Contact Section
    'contact.subtitle': 'Contatto',
    'contact.title1': 'Lavoriamo',
    'contact.title2': 'Insieme',
    'contact.description': 'Pronto a dare vita al tuo progetto? Parliamo delle tue idee e creiamo qualcosa di incredibile insieme.',
    'contact.getInTouch': 'Mettiti in Contatto',
    'contact.getInTouchDesc': 'Sono sempre entusiasta di discutere nuovi progetti e opportunità creative.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Inviami un messaggio in qualsiasi momento',
    'contact.location': 'Posizione',
    'contact.followMe': 'Seguimi',
    'contact.sendMessage': 'Invia un Messaggio',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Il tuo nome',
    'contact.emailPlaceholder': 'tua.email@esempio.com',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Oggetto del progetto',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Parlami del tuo progetto...',
    'contact.sendBtn': 'Invia Messaggio',

    // Footer
    'footer.description': 'Specialista in soluzioni creative con base in Svizzera. Creo esperienze visive autentiche e identità di marca.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di Marca',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Sviluppo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel. Tutti i diritti riservati.',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.work': 'Trabalhos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.letsTalk': 'Vamos Conversar',

    // Hero Section
    'hero.subtitle': 'Soluções Criativas',
    'hero.greeting': 'Olá, eu sou Theo',
    'hero.title1': 'Soluções',
    'hero.title2': 'Criativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático baseado na Suíça. Crio experiências visuais autênticas e identidades de marca que contam sua história de forma única.',
    'hero.contactMe': 'Entre em Contato',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Anos de\nExperiência',
    'hero.projectsDelivered': 'Projetos\nEntregues',
    'hero.clientSatisfaction': 'Satisfação\ndo Cliente',
    'hero.clientsWorldwide': 'Clientes\nMundiais',
    'hero.service1.title': 'Identidade de Marca',
    'hero.service1.desc': 'Criação completa de identidade visual',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces de usuário intuitivas',
    'hero.service3.title': 'Desenvolvimento Web',
    'hero.service3.desc': 'Sites modernos e responsivos',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animações visuais envolventes',

    // About Section
    'about.subtitle': 'Sobre Mim',
    'about.title1': 'Criar, experimentar, aprender…',
    'about.title2': 'desde 2016',
    'about.description1': 'Minha jornada começou com uma paixão simples: criar. O que começou como edição de vídeos do YouTube aos 10 anos se transformou em expertise completa em comunicação visual e experiências digitais.',
    'about.description2': 'Hoje, combino criatividade artística com expertise técnica para desenvolver soluções visuais autênticas que contam sua história de forma única.',
    'about.skill1.title': 'Design Criativo',
    'about.skill1.desc': 'Identidade visual e design gráfico',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interface e experiência do usuário',
    'about.skill3.title': 'Desenvolvimento',
    'about.skill3.desc': 'Desenvolvimento web e mobile',
    'about.skill4.title': 'Estratégia',
    'about.skill4.desc': 'Estratégia de marca e digital',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Trabalhos',
    'portfolio.title1': 'Projetos',
    'portfolio.title2': 'Selecionados',
    'portfolio.description': 'Descubra alguns dos meus projetos recentes, cada um contando uma história única através de design e inovação.',
    'portfolio.viewAllBehance': 'Ver Tudo no Behance',

    // Services Section
    'services.subtitle': 'Serviços',
    'services.title': 'O Que Eu Faço',
    'services.description': 'Ofereço soluções criativas abrangentes para dar vida à sua visão.',
    'services.startProject': 'Iniciar um Projeto',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Criação completa de identidade visual do conceito à implementação.',
    'services.brandIdentity.feature1': 'Design de Logo',
    'services.brandIdentity.feature2': 'Diretrizes da Marca',
    'services.brandIdentity.feature3': 'Identidade Visual',
    'services.brandIdentity.feature4': 'Estratégia de Marca',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Design centrado no usuário para experiências digitais otimizadas.',
    'services.uiux.feature1': 'Pesquisa de Usuário',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototipagem',
    'services.uiux.feature4': 'Teste de Usuário',

    'services.webDev.title': 'Desenvolvimento Web',
    'services.webDev.desc': 'Sites modernos e responsivos construídos com as mais recentes tecnologias.',
    'services.webDev.feature1': 'Design Responsivo',
    'services.webDev.feature2': 'Otimização de Performance',
    'services.webDev.feature3': 'Integração SEO',
    'services.webDev.feature4': 'Integração CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Design de aplicações móveis nativas e cross-platform.',
    'services.mobile.feature1': 'Design iOS',
    'services.mobile.feature2': 'Design Android',
    'services.mobile.feature3': 'Prototipagem de App',
    'services.mobile.feature4': 'Design de Fluxo do Usuário',

    'services.creative.title': 'Direção Criativa',
    'services.creative.desc': 'Direção criativa estratégica para sua marca e campanhas.',
    'services.creative.feature1': 'Direção de Arte',
    'services.creative.feature2': 'Estratégia Criativa',
    'services.creative.feature3': 'Design de Campanha',
    'services.creative.feature4': 'Posicionamento de Marca',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animações envolventes e motion design para mídia digital.',
    'services.motion.feature1': 'Animação de Logo',
    'services.motion.feature2': 'Vídeos Explicativos',
    'services.motion.feature3': 'Animações UI',
    'services.motion.feature4': 'Conteúdo para Redes Sociais',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O Que Dizem os Clientes',
    'testimonials.description': 'Descubra o que meus clientes pensam sobre nossa colaboração e os resultados alcançados.',
    'testimonials.trustedBy': 'Confiado por Empresas Líderes',
    'testimonials.trustedByDesc': 'Tive o privilégio de trabalhar com empresas e startups incríveis.',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos Trabalhar',
    'contact.title2': 'Juntos',
    'contact.description': 'Pronto para dar vida ao seu projeto? Vamos discutir suas ideias e criar algo incrível juntos.',
    'contact.getInTouch': 'Entre em Contato',
    'contact.getInTouchDesc': 'Estou sempre animado para discutir novos projetos e oportunidades criativas.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envie-me uma mensagem a qualquer momento',
    'contact.location': 'Localização',
    'contact.followMe': 'Siga-me',
    'contact.sendMessage': 'Enviar uma Mensagem',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Assunto do projeto',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.sendBtn': 'Enviar Mensagem',

    // Footer
    'footer.description': 'Especialista em soluções criativas baseado na Suíça. Crio experiências visuais autênticas e identidades de marca.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de Marca',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Desenvolvimento Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel. Todos os direitos reservados.',
  },
  sq: {
    // Navigation
    'nav.about': 'Rreth meje',
    'nav.work': 'Punët',
    'nav.services': 'Shërbimet',
    'nav.contact': 'Kontakti',
    'nav.letsTalk': 'Le të flasim',

    // Hero Section
    'hero.subtitle': 'Zgjidhje Kreative',
    'hero.greeting': 'Përshëndetje, unë jam Theo',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'Kreative',
    'hero.title3': 'Specialist',
    'hero.description': 'Mediamatik me bazë në Zvicër. Krijoj përvojë vizuale autentike dhe identitete marke që tregojnë historinë tuaj në mënyrë unike.',
    'hero.contactMe': 'Më kontaktoni',
    'hero.watchDemo': 'Shiko Demo',
    'hero.yearsExperience': 'Vite\nPërvojë',
    'hero.projectsDelivered': 'Projekte\nDorëzuar',
    'hero.clientSatisfaction': 'Kënaqësia e\nKlientit',
    'hero.clientsWorldwide': 'Klientë\nBotërorë',
    'hero.service1.title': 'Identiteti i Markës',
    'hero.service1.desc': 'Krijimi i plotë i identitetit vizual',
    'hero.service2.title': 'Dizajni UI/UX',
    'hero.service2.desc': 'Ndërfaqe përdoruesi intuitive',
    'hero.service3.title': 'Zhvillimi Web',
    'hero.service3.desc': 'Faqe interneti moderne dhe responsive',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animacione vizuale tërheqëse',

    // About Section
    'about.subtitle': 'Rreth Meje',
    'about.title1': 'Krijoj, eksperimentoj, mësoj…',
    'about.title2': 'që nga 2016',
    'about.description1': 'Udhëtimi im filloi me një pasion të thjeshtë: krijimin. Ajo që filloi si editim videosh YouTube në moshën 10 vjeç u transformua në ekspertizë të plotë në komunikimin vizual dhe përvojat dixhitale.',
    'about.description2': 'Sot, kombinoj kreativitetin artistik me ekspertizën teknike për të zhvilluar zgjidhje vizuale autentike që tregojnë historinë tuaj në mënyrë unike.',
    'about.skill1.title': 'Dizajni Kreativ',
    'about.skill1.desc': 'Identiteti vizual dhe dizajni grafik',
    'about.skill2.title': 'Dizajni UI/UX',
    'about.skill2.desc': 'Ndërfaqja dhe përvoja e përdoruesit',
    'about.skill3.title': 'Zhvillimi',
    'about.skill3.desc': 'Zhvillimi web dhe mobile',
    'about.skill4.title': 'Strategjia',
    'about.skill4.desc': 'Strategjia e markës dhe dixhitale',

    // Portfolio Section
    'portfolio.subtitle': 'Punët e Mia',
    'portfolio.title1': 'Projekte',
    'portfolio.title2': 'të Zgjedhura',
    'portfolio.description': 'Zbuloni disa nga projektet e mia të fundit, secili tregon një histori unike përmes dizajnit dhe inovacionit.',
    'portfolio.viewAllBehance': 'Shiko të Gjitha në Behance',

    // Services Section
    'services.subtitle': 'Shërbimet',
    'services.title': 'Çfarë Bëj',
    'services.description': 'Ofroj zgjidhje kreative gjithëpërfshirëse për t\'i dhënë jetë vizionit tuaj.',
    'services.startProject': 'Fillo një Projekt',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Krijimi i plotë i identitetit vizual nga koncepti deri te implementimi.',
    'services.brandIdentity.feature1': 'Dizajni i Logos',
    'services.brandIdentity.feature2': 'Udhëzimet e Markës',
    'services.brandIdentity.feature3': 'Identiteti Vizual',
    'services.brandIdentity.feature4': 'Strategjia e Markës',

    'services.uiux.title': 'Dizajni UI/UX',
    'services.uiux.desc': 'Dizajn i fokusuar tek përdoruesi për përvojë dixhitale optimale.',
    'services.uiux.feature1': 'Kërkimi i Përdoruesit',
    'services.uiux.feature2': 'Wireframing',
    'services.uiux.feature3': 'Prototyping',
    'services.uiux.feature4': 'Testimi i Përdoruesit',

    'services.webDev.title': 'Zhvillimi Web',
    'services.webDev.desc': 'Faqe interneti moderne dhe responsive të ndërtuara me teknologjitë më të fundit.',
    'services.webDev.feature1': 'Dizajni Responsive',
    'services.webDev.feature2': 'Optimizimi i Performancës',
    'services.webDev.feature3': 'Integrimi SEO',
    'services.webDev.feature4': 'Integrimi CMS',

    'services.mobile.title': 'Dizajni Mobile',
    'services.mobile.desc': 'Dizajni i aplikacioneve mobile native dhe cross-platform.',
    'services.mobile.feature1': 'Dizajni iOS',
    'services.mobile.feature2': 'Dizajni Android',
    'services.mobile.feature3': 'Prototyping i App',
    'services.mobile.feature4': 'Dizajni i User Flow',

    'services.creative.title': 'Drejtimi Kreativ',
    'services.creative.desc': 'Drejtim kreativ strategjik për markën dhe fushatat tuaja.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Strategjia Kreative',
    'services.creative.feature3': 'Dizajni i Fushatës',
    'services.creative.feature4': 'Pozicionimi i Markës',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animacione tërheqëse dhe motion design për media dixhitale.',
    'services.motion.feature1': 'Animacioni i Logos',
    'services.motion.feature2': 'Video Shpjeguese',
    'services.motion.feature3': 'Animacionet UI',
    'services.motion.feature4': 'Përmbajtja e Rrjeteve Sociale',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmi',
    'testimonials.title': 'Çfarë Thonë Klientët',
    'testimonials.description': 'Zbuloni çfarë mendojnë klientët e mi për bashkëpunimin tonë dhe rezultatet e arritura.',
    'testimonials.trustedBy': 'I Besuar nga Kompani Lider',
    'testimonials.trustedByDesc': 'Kam pasur privilegjin të punoj me kompani dhe startup të mahnitshme.',

    // Contact Section
    'contact.subtitle': 'Kontakti',
    'contact.title1': 'Le të Punojmë',
    'contact.title2': 'Së Bashku',
    'contact.description': 'Gati t\'i jepni jetë projektit tuaj? Le të diskutojmë idetë tuaja dhe të krijojmë diçka të mahnitshme së bashku.',
    'contact.getInTouch': 'Kontaktoni',
    'contact.getInTouchDesc': 'Jam gjithmonë i emocionuar të diskutoj projekte të reja dhe mundësi kreative.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Më dërgoni një mesazh në çdo kohë',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më ndiqni',
    'contact.sendMessage': 'Dërgo një Mesazh',
    'contact.name': 'Emri',
    'contact.namePlaceholder': 'Emri juaj',
    'contact.emailPlaceholder': 'email.juaj@shembull.com',
    'contact.subject': 'Subjekti',
    'contact.subjectPlaceholder': 'Subjekti i projektit',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më tregoni për projektin tuaj...',
    'contact.sendBtn': 'Dërgo Mesazhin',

    // Footer
    'footer.description': 'Specialist në zgjidhje kreative me bazë në Zvicër. Krijoj përvojë vizuale autentike dhe identitete marke.',
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i Markës',
    'footer.uiuxDesign': 'Dizajni UI/UX',
    'footer.webDevelopment': 'Zhvillimi Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara.',
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as Theme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved) return saved as Language;
      
      const browserLang = navigator.language.split('-')[0] as Language;
      return Object.keys(translations).includes(browserLang) ? browserLang : 'fr';
    }
    return 'fr';
  });

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
    return translations[language][key] || key;
  };

  const value: AppContextType = {
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

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};