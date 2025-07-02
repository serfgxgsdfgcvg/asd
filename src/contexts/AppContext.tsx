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

// Translations object
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
    'hero.greeting': 'Hello, I\'m Theo Blondel',
    'hero.title1': 'Creative',
    'hero.title2': 'Solutions',
    'hero.title3': 'Specialist',
    'hero.description': 'Mediamatician based in Switzerland. I create authentic visual identities, user interfaces and digital experiences that tell your story.',
    'hero.contactMe': 'Contact Me',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.clientSatisfaction': 'Client Satisfaction',
    'hero.clientsWorldwide': 'Clients Worldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Unique visual identities that reflect your values',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Intuitive interfaces for optimal user experience',
    'hero.service3.title': 'Web Development',
    'hero.service3.desc': 'Modern, responsive and high-performance websites',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Dynamic animations that bring your content to life',

    // About Section
    'about.subtitle': 'About Me',
    'about.title1': 'Passionate',
    'about.title2': 'Mediamatician',
    'about.description1': 'Passionate mediamatician based in Switzerland, I combine artistic creativity and technical expertise to create authentic visual experiences. My holistic approach to design allows me to develop creative solutions that tell your story uniquely.',
    'about.description2': 'Specialized in brand identity and interface design, I support my clients in creating memorable experiences that leave a mark and generate concrete results.',
    'about.skill1.title': 'Creative Design',
    'about.skill1.desc': 'Visual identity, branding, graphic design',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'User interfaces, user experience, prototyping',
    'about.skill3.title': 'Development',
    'about.skill3.desc': 'Frontend development, responsive design',
    'about.skill4.title': 'Strategy',
    'about.skill4.desc': 'Creative direction, brand strategy',

    // Portfolio Section
    'portfolio.subtitle': 'My Work',
    'portfolio.title1': 'Selected',
    'portfolio.title2': 'Projects',
    'portfolio.description': 'Discover some of my recent projects, from brand identity creation to complete digital experiences.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'What I Do',
    'services.description': 'Complete creative solutions to bring your projects to life and strengthen your visual identity.',
    'services.startProject': 'Start a Project',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Complete visual identity creation that reflects your values and stands out in the market.',
    'services.brandIdentity.feature1': 'Logo design and variations',
    'services.brandIdentity.feature2': 'Color palette and typography',
    'services.brandIdentity.feature3': 'Brand guidelines',
    'services.brandIdentity.feature4': 'Print and digital applications',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Intuitive and aesthetic user interfaces for optimal user experience.',
    'services.uiux.feature1': 'User research and personas',
    'services.uiux.feature2': 'Wireframes and prototypes',
    'services.uiux.feature3': 'Visual interface design',
    'services.uiux.feature4': 'Usability testing',

    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Modern, responsive and high-performance websites adapted to your needs.',
    'services.webDev.feature1': 'Responsive design',
    'services.webDev.feature2': 'Performance optimization',
    'services.webDev.feature3': 'SEO and accessibility',
    'services.webDev.feature4': 'CMS integration',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native and intuitive mobile applications for iOS and Android.',
    'services.mobile.feature1': 'Native app design',
    'services.mobile.feature2': 'Cross-platform compatibility',
    'services.mobile.feature3': 'Touch interactions',
    'services.mobile.feature4': 'App Store optimization',

    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'Global creative strategy and art direction for your communication campaigns.',
    'services.creative.feature1': 'Creative concept',
    'services.creative.feature2': 'Art direction',
    'services.creative.feature3': 'Campaign strategy',
    'services.creative.feature4': 'Content creation',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Dynamic animations and motion graphics that bring your content to life.',
    'services.motion.feature1': '2D/3D animations',
    'services.motion.feature2': 'Video editing',
    'services.motion.feature3': 'Visual effects',
    'services.motion.feature4': 'Interactive animations',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.description': 'Discover the experiences of clients who have trusted my creative expertise.',
    'testimonials.trustedBy': 'Trusted by',
    'testimonials.trustedByDesc': 'Innovative companies that have chosen my creative expertise',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Let\'s Work',
    'contact.title2': 'Together',
    'contact.description': 'Ready to bring your project to life? Let\'s discuss your vision and see how we can make it happen.',
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
    'footer.description': 'Creative solutions specialist based in Switzerland. I create authentic visual experiences that tell your story.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web Development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.'
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Discutons',

    // Hero Section
    'hero.subtitle': 'Solutions Créatives',
    'hero.greeting': 'Salut, je suis Theo Blondel',
    'hero.title1': 'Solutions Créatives',
    'hero.title2': 'polyvalente',
    'hero.title3': '',
    'hero.description': 'Médiamaticien basé en Suisse. Je crée des identités visuelles authentiques, des interfaces utilisateur et des expériences digitales qui racontent votre histoire.',
    'hero.contactMe': 'Me contacter',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Identité de marque',
    'hero.service1.desc': 'Identités visuelles uniques qui reflètent vos valeurs',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces intuitives pour une expérience utilisateur optimale',
    'hero.service3.title': 'Développement web',
    'hero.service3.desc': 'Sites web modernes, responsifs et performants',
    'hero.service4.title': 'Motion graphics',
    'hero.service4.desc': 'Animations dynamiques qui donnent vie à votre contenu',

    // About Section
    'about.subtitle': 'À propos',
    'about.title1': 'Médiamaticien',
    'about.title2': 'passionné',
    'about.description1': 'Médiamaticien passionné basé en Suisse, je combine créativité artistique et expertise technique pour créer des expériences visuelles authentiques. Mon approche holistique du design me permet de développer des solutions créatives qui racontent votre histoire de manière unique.',
    'about.description2': 'Spécialisé en identité de marque et design d\'interface, j\'accompagne mes clients dans la création d\'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.',
    'about.skill1.title': 'Design créatif',
    'about.skill1.desc': 'Identité visuelle, branding, design graphique',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfaces utilisateur, expérience utilisateur, prototypage',
    'about.skill3.title': 'Développement',
    'about.skill3.desc': 'Développement frontend, design responsive',
    'about.skill4.title': 'Stratégie',
    'about.skill4.desc': 'Direction créative, stratégie de marque',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Projets',
    'portfolio.title2': 'Sélectionnés',
    'portfolio.description': 'Découvrez quelques-uns de mes projets récents, de la création d\'identité de marque aux expériences digitales complètes.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'Ce que je fais',
    'services.description': 'Des solutions créatives complètes pour donner vie à vos projets et renforcer votre identité visuelle.',
    'services.startProject': 'Démarrer un projet',

    'services.brandIdentity.title': 'Identité de marque',
    'services.brandIdentity.desc': 'Création d\'identité visuelle complète qui reflète vos valeurs et se démarque sur le marché.',
    'services.brandIdentity.feature1': 'Conception de logo et déclinaisons',
    'services.brandIdentity.feature2': 'Palette de couleurs et typographie',
    'services.brandIdentity.feature3': 'Charte graphique',
    'services.brandIdentity.feature4': 'Applications print et digitales',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.',
    'services.uiux.feature1': 'Recherche utilisateur et personas',
    'services.uiux.feature2': 'Wireframes et prototypes',
    'services.uiux.feature3': 'Design d\'interface visuelle',
    'services.uiux.feature4': 'Tests d\'utilisabilité',

    'services.webDev.title': 'Développement web',
    'services.webDev.desc': 'Sites web modernes, responsifs et performants adaptés à vos besoins.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Optimisation des performances',
    'services.webDev.feature3': 'SEO et accessibilité',
    'services.webDev.feature4': 'Intégration CMS',

    'services.mobile.title': 'Design mobile',
    'services.mobile.desc': 'Applications mobiles natives et intuitives pour iOS et Android.',
    'services.mobile.feature1': 'Design d\'app native',
    'services.mobile.feature2': 'Compatibilité cross-platform',
    'services.mobile.feature3': 'Interactions tactiles',
    'services.mobile.feature4': 'Optimisation App Store',

    'services.creative.title': 'Direction créative',
    'services.creative.desc': 'Stratégie créative globale et direction artistique pour vos campagnes de communication.',
    'services.creative.feature1': 'Concept créatif',
    'services.creative.feature2': 'Direction artistique',
    'services.creative.feature3': 'Stratégie de campagne',
    'services.creative.feature4': 'Création de contenu',

    'services.motion.title': 'Motion graphics',
    'services.motion.desc': 'Animations dynamiques et motion graphics qui donnent vie à votre contenu.',
    'services.motion.feature1': 'Animations 2D/3D',
    'services.motion.feature2': 'Montage vidéo',
    'services.motion.feature3': 'Effets visuels',
    'services.motion.feature4': 'Animations interactives',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce que disent mes clients',
    'testimonials.description': 'Découvrez les expériences de clients qui ont fait confiance à mon expertise créative.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Des entreprises innovantes qui ont choisi mon expertise créative',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Travaillons',
    'contact.title2': 'Ensemble',
    'contact.description': 'Prêt à donner vie à votre projet ? Parlons de votre vision et voyons comment nous pouvons la concrétiser.',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'Je suis toujours ravi de discuter de nouveaux projets et d\'opportunités créatives.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoyez-moi un message à tout moment',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suivez-moi',
    'contact.sendMessage': 'Envoyer un message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet du projet',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parlez-moi de votre projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Spécialiste en solutions créatives basé en Suisse. Je crée des expériences visuelles authentiques qui racontent votre histoire.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Développement web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.'
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
    'hero.greeting': 'Hola, soy Theo Blondel',
    'hero.title1': 'Soluciones',
    'hero.title2': 'Creativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático con base en Suiza. Creo identidades visuales auténticas, interfaces de usuario y experiencias digitales que cuentan tu historia.',
    'hero.contactMe': 'Contáctame',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsDelivered': 'Proyectos Entregados',
    'hero.clientSatisfaction': 'Satisfacción del Cliente',
    'hero.clientsWorldwide': 'Clientes en el Mundo',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Identidades visuales únicas que reflejan tus valores',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces intuitivas para una experiencia de usuario óptima',
    'hero.service3.title': 'Desarrollo Web',
    'hero.service3.desc': 'Sitios web modernos, responsivos y de alto rendimiento',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animaciones dinámicas que dan vida a tu contenido',

    // About Section
    'about.subtitle': 'Acerca de Mí',
    'about.title1': 'Mediamático',
    'about.title2': 'Apasionado',
    'about.description1': 'Mediamático apasionado con base en Suiza, combino creatividad artística y experiencia técnica para crear experiencias visuales auténticas. Mi enfoque holístico del diseño me permite desarrollar soluciones creativas que cuentan tu historia de manera única.',
    'about.description2': 'Especializado en identidad de marca y diseño de interfaz, acompaño a mis clientes en la creación de experiencias memorables que dejan huella y generan resultados concretos.',
    'about.skill1.title': 'Diseño Creativo',
    'about.skill1.desc': 'Identidad visual, branding, diseño gráfico',
    'about.skill2.title': 'Diseño UI/UX',
    'about.skill2.desc': 'Interfaces de usuario, experiencia de usuario, prototipado',
    'about.skill3.title': 'Desarrollo',
    'about.skill3.desc': 'Desarrollo frontend, diseño responsivo',
    'about.skill4.title': 'Estrategia',
    'about.skill4.desc': 'Dirección creativa, estrategia de marca',

    // Portfolio Section
    'portfolio.subtitle': 'Mi Trabajo',
    'portfolio.title1': 'Proyectos',
    'portfolio.title2': 'Seleccionados',
    'portfolio.description': 'Descubre algunos de mis proyectos recientes, desde la creación de identidad de marca hasta experiencias digitales completas.',
    'portfolio.viewAllBehance': 'Ver todo en Behance',

    // Services Section
    'services.subtitle': 'Servicios',
    'services.title': 'Lo que Hago',
    'services.description': 'Soluciones creativas completas para dar vida a tus proyectos y fortalecer tu identidad visual.',
    'services.startProject': 'Iniciar un Proyecto',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': 'Creación de identidad visual completa que refleja tus valores y se destaca en el mercado.',
    'services.brandIdentity.feature1': 'Diseño de logo y variaciones',
    'services.brandIdentity.feature2': 'Paleta de colores y tipografía',
    'services.brandIdentity.feature3': 'Manual de marca',
    'services.brandIdentity.feature4': 'Aplicaciones impresas y digitales',

    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Interfaces de usuario intuitivas y estéticas para una experiencia de usuario óptima.',
    'services.uiux.feature1': 'Investigación de usuario y personas',
    'services.uiux.feature2': 'Wireframes y prototipos',
    'services.uiux.feature3': 'Diseño de interfaz visual',
    'services.uiux.feature4': 'Pruebas de usabilidad',

    'services.webDev.title': 'Desarrollo Web',
    'services.webDev.desc': 'Sitios web modernos, responsivos y de alto rendimiento adaptados a tus necesidades.',
    'services.webDev.feature1': 'Diseño responsivo',
    'services.webDev.feature2': 'Optimización de rendimiento',
    'services.webDev.feature3': 'SEO y accesibilidad',
    'services.webDev.feature4': 'Integración CMS',

    'services.mobile.title': 'Diseño Móvil',
    'services.mobile.desc': 'Aplicaciones móviles nativas e intuitivas para iOS y Android.',
    'services.mobile.feature1': 'Diseño de app nativa',
    'services.mobile.feature2': 'Compatibilidad multiplataforma',
    'services.mobile.feature3': 'Interacciones táctiles',
    'services.mobile.feature4': 'Optimización App Store',

    'services.creative.title': 'Dirección Creativa',
    'services.creative.desc': 'Estrategia creativa global y dirección artística para tus campañas de comunicación.',
    'services.creative.feature1': 'Concepto creativo',
    'services.creative.feature2': 'Dirección artística',
    'services.creative.feature3': 'Estrategia de campaña',
    'services.creative.feature4': 'Creación de contenido',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animaciones dinámicas y motion graphics que dan vida a tu contenido.',
    'services.motion.feature1': 'Animaciones 2D/3D',
    'services.motion.feature2': 'Edición de video',
    'services.motion.feature3': 'Efectos visuales',
    'services.motion.feature4': 'Animaciones interactivas',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo que Dicen los Clientes',
    'testimonials.description': 'Descubre las experiencias de clientes que han confiado en mi experiencia creativa.',
    'testimonials.trustedBy': 'Confían en mí',
    'testimonials.trustedByDesc': 'Empresas innovadoras que han elegido mi experiencia creativa',

    // Contact Section
    'contact.subtitle': 'Contacto',
    'contact.title1': 'Trabajemos',
    'contact.title2': 'Juntos',
    'contact.description': '¿Listo para dar vida a tu proyecto? Hablemos de tu visión y veamos cómo podemos hacerla realidad.',
    'contact.getInTouch': 'Mantengámonos en Contacto',
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
    'footer.description': 'Especialista en soluciones creativas con base en Suiza. Creo experiencias visuales auténticas que cuentan tu historia.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de Marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.'
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
    'hero.greeting': 'Привет, я Тео Блондель',
    'hero.title1': 'Креативные',
    'hero.title2': 'Решения',
    'hero.title3': 'Специалист',
    'hero.description': 'Медиаматик из Швейцарии. Создаю аутентичные визуальные идентичности, пользовательские интерфейсы и цифровые впечатления, которые рассказывают вашу историю.',
    'hero.contactMe': 'Связаться со мной',
    'hero.watchDemo': 'Посмотреть демо',
    'hero.yearsExperience': 'Лет опыта',
    'hero.projectsDelivered': 'Проектов выполнено',
    'hero.clientSatisfaction': 'Удовлетворенность клиентов',
    'hero.clientsWorldwide': 'Клиентов по всему миру',
    'hero.service1.title': 'Брендинг',
    'hero.service1.desc': 'Уникальные визуальные идентичности, отражающие ваши ценности',
    'hero.service2.title': 'UI/UX Дизайн',
    'hero.service2.desc': 'Интуитивные интерфейсы для оптимального пользовательского опыта',
    'hero.service3.title': 'Веб-разработка',
    'hero.service3.desc': 'Современные, адаптивные и высокопроизводительные веб-сайты',
    'hero.service4.title': 'Моушн-графика',
    'hero.service4.desc': 'Динамичные анимации, которые оживляют ваш контент',

    // About Section
    'about.subtitle': 'Обо мне',
    'about.title1': 'Увлеченный',
    'about.title2': 'Медиаматик',
    'about.description1': 'Увлеченный медиаматик из Швейцарии, я сочетаю художественное творчество и техническую экспертизу для создания аутентичных визуальных впечатлений. Мой целостный подход к дизайну позволяет мне разрабатывать креативные решения, которые уникально рассказывают вашу историю.',
    'about.description2': 'Специализируясь на брендинге и дизайне интерфейсов, я помогаю своим клиентам создавать запоминающиеся впечатления, которые оставляют след и приносят конкретные результаты.',
    'about.skill1.title': 'Креативный дизайн',
    'about.skill1.desc': 'Визуальная идентичность, брендинг, графический дизайн',
    'about.skill2.title': 'UI/UX Дизайн',
    'about.skill2.desc': 'Пользовательские интерфейсы, пользовательский опыт, прототипирование',
    'about.skill3.title': 'Разработка',
    'about.skill3.desc': 'Frontend разработка, адаптивный дизайн',
    'about.skill4.title': 'Стратегия',
    'about.skill4.desc': 'Креативное направление, стратегия бренда',

    // Portfolio Section
    'portfolio.subtitle': 'Мои работы',
    'portfolio.title1': 'Избранные',
    'portfolio.title2': 'Проекты',
    'portfolio.description': 'Откройте для себя некоторые из моих недавних проектов, от создания брендинга до полных цифровых впечатлений.',
    'portfolio.viewAllBehance': 'Посмотреть все на Behance',

    // Services Section
    'services.subtitle': 'Услуги',
    'services.title': 'Что я делаю',
    'services.description': 'Полные креативные решения для воплощения ваших проектов в жизнь и укрепления вашей визуальной идентичности.',
    'services.startProject': 'Начать проект',

    'services.brandIdentity.title': 'Брендинг',
    'services.brandIdentity.desc': 'Создание полной визуальной идентичности, которая отражает ваши ценности и выделяется на рынке.',
    'services.brandIdentity.feature1': 'Дизайн логотипа и вариации',
    'services.brandIdentity.feature2': 'Цветовая палитра и типографика',
    'services.brandIdentity.feature3': 'Руководство по бренду',
    'services.brandIdentity.feature4': 'Печатные и цифровые применения',

    'services.uiux.title': 'UI/UX Дизайн',
    'services.uiux.desc': 'Интуитивные и эстетичные пользовательские интерфейсы для оптимального пользовательского опыта.',
    'services.uiux.feature1': 'Исследование пользователей и персоны',
    'services.uiux.feature2': 'Каркасы и прототипы',
    'services.uiux.feature3': 'Дизайн визуального интерфейса',
    'services.uiux.feature4': 'Тестирование юзабилити',

    'services.webDev.title': 'Веб-разработка',
    'services.webDev.desc': 'Современные, адаптивные и высокопроизводительные веб-сайты, адаптированные под ваши потребности.',
    'services.webDev.feature1': 'Адаптивный дизайн',
    'services.webDev.feature2': 'Оптимизация производительности',
    'services.webDev.feature3': 'SEO и доступность',
    'services.webDev.feature4': 'Интеграция CMS',

    'services.mobile.title': 'Мобильный дизайн',
    'services.mobile.desc': 'Нативные и интуитивные мобильные приложения для iOS и Android.',
    'services.mobile.feature1': 'Дизайн нативного приложения',
    'services.mobile.feature2': 'Кроссплатформенная совместимость',
    'services.mobile.feature3': 'Сенсорные взаимодействия',
    'services.mobile.feature4': 'Оптимизация App Store',

    'services.creative.title': 'Креативное направление',
    'services.creative.desc': 'Глобальная креативная стратегия и арт-направление для ваших коммуникационных кампаний.',
    'services.creative.feature1': 'Креативная концепция',
    'services.creative.feature2': 'Арт-направление',
    'services.creative.feature3': 'Стратегия кампании',
    'services.creative.feature4': 'Создание контента',

    'services.motion.title': 'Моушн-графика',
    'services.motion.desc': 'Динамичные анимации и моушн-графика, которые оживляют ваш контент.',
    'services.motion.feature1': '2D/3D анимации',
    'services.motion.feature2': 'Видеомонтаж',
    'services.motion.feature3': 'Визуальные эффекты',
    'services.motion.feature4': 'Интерактивные анимации',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что говорят клиенты',
    'testimonials.description': 'Откройте для себя опыт клиентов, которые доверили мою креативную экспертизу.',
    'testimonials.trustedBy': 'Мне доверяют',
    'testimonials.trustedByDesc': 'Инновационные компании, которые выбрали мою креативную экспертизу',

    // Contact Section
    'contact.subtitle': 'Контакты',
    'contact.title1': 'Давайте работать',
    'contact.title2': 'Вместе',
    'contact.description': 'Готовы воплотить ваш проект в жизнь? Давайте обсудим ваше видение и посмотрим, как мы можем его реализовать.',
    'contact.getInTouch': 'Свяжитесь со мной',
    'contact.getInTouchDesc': 'Я всегда рад обсуждать новые проекты и креативные возможности.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Отправьте мне сообщение в любое время',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайтесь',
    'contact.sendMessage': 'Отправить сообщение',
    'contact.name': 'Имя',
    'contact.namePlaceholder': 'Ваше имя',
    'contact.emailPlaceholder': 'ваш.email@пример.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'Тема проекта',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажите мне о вашем проекте...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer
    'footer.description': 'Специалист по креативным решениям из Швейцарии. Создаю аутентичные визуальные впечатления, которые рассказывают вашу историю.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Брендинг',
    'footer.uiuxDesign': 'UI/UX Дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн-графика',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель. Все права защищены.'
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
    'hero.greeting': '你好，我是Theo Blondel',
    'hero.title1': '创意',
    'hero.title2': '解决方案',
    'hero.title3': '专家',
    'hero.description': '瑞士媒体技术专家。我创造真实的视觉身份、用户界面和数字体验，讲述您的故事。',
    'hero.contactMe': '联系我',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年经验',
    'hero.projectsDelivered': '项目交付',
    'hero.clientSatisfaction': '客户满意度',
    'hero.clientsWorldwide': '全球客户',
    'hero.service1.title': '品牌识别',
    'hero.service1.desc': '反映您价值观的独特视觉身份',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '直观的界面，提供最佳用户体验',
    'hero.service3.title': '网页开发',
    'hero.service3.desc': '现代、响应式和高性能的网站',
    'hero.service4.title': '动态图形',
    'hero.service4.desc': '为您的内容注入活力的动态动画',

    // About Section
    'about.subtitle': '关于我',
    'about.title1': '充满激情的',
    'about.title2': '媒体技术专家',
    'about.description1': '我是一名充满激情的瑞士媒体技术专家，结合艺术创造力和技术专长，创造真实的视觉体验。我的整体设计方法让我能够开发独特讲述您故事的创意解决方案。',
    'about.description2': '专注于品牌识别和界面设计，我帮助客户创造令人难忘的体验，留下深刻印象并产生具体结果。',
    'about.skill1.title': '创意设计',
    'about.skill1.desc': '视觉识别、品牌、平面设计',
    'about.skill2.title': 'UI/UX设计',
    'about.skill2.desc': '用户界面、用户体验、原型设计',
    'about.skill3.title': '开发',
    'about.skill3.desc': '前端开发、响应式设计',
    'about.skill4.title': '策略',
    'about.skill4.desc': '创意指导、品牌策略',

    // Portfolio Section
    'portfolio.subtitle': '我的作品',
    'portfolio.title1': '精选',
    'portfolio.title2': '项目',
    'portfolio.description': '发现我最近的一些项目，从品牌识别创建到完整的数字体验。',
    'portfolio.viewAllBehance': '在Behance上查看全部',

    // Services Section
    'services.subtitle': '服务',
    'services.title': '我做什么',
    'services.description': '完整的创意解决方案，为您的项目注入活力并加强您的视觉身份。',
    'services.startProject': '开始项目',

    'services.brandIdentity.title': '品牌识别',
    'services.brandIdentity.desc': '创建反映您价值观并在市场中脱颖而出的完整视觉身份。',
    'services.brandIdentity.feature1': '标志设计和变体',
    'services.brandIdentity.feature2': '色彩调色板和字体',
    'services.brandIdentity.feature3': '品牌指南',
    'services.brandIdentity.feature4': '印刷和数字应用',

    'services.uiux.title': 'UI/UX设计',
    'services.uiux.desc': '直观和美观的用户界面，提供最佳用户体验。',
    'services.uiux.feature1': '用户研究和角色',
    'services.uiux.feature2': '线框图和原型',
    'services.uiux.feature3': '视觉界面设计',
    'services.uiux.feature4': '可用性测试',

    'services.webDev.title': '网页开发',
    'services.webDev.desc': '适应您需求的现代、响应式和高性能网站。',
    'services.webDev.feature1': '响应式设计',
    'services.webDev.feature2': '性能优化',
    'services.webDev.feature3': 'SEO和可访问性',
    'services.webDev.feature4': 'CMS集成',

    'services.mobile.title': '移动设计',
    'services.mobile.desc': 'iOS和Android的原生直观移动应用程序。',
    'services.mobile.feature1': '原生应用设计',
    'services.mobile.feature2': '跨平台兼容性',
    'services.mobile.feature3': '触摸交互',
    'services.mobile.feature4': 'App Store优化',

    'services.creative.title': '创意指导',
    'services.creative.desc': '为您的传播活动提供全球创意策略和艺术指导。',
    'services.creative.feature1': '创意概念',
    'services.creative.feature2': '艺术指导',
    'services.creative.feature3': '活动策略',
    'services.creative.feature4': '内容创作',

    'services.motion.title': '动态图形',
    'services.motion.desc': '为您的内容注入活力的动态动画和动态图形。',
    'services.motion.feature1': '2D/3D动画',
    'services.motion.feature2': '视频编辑',
    'services.motion.feature3': '视觉效果',
    'services.motion.feature4': '交互动画',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '客户评价',
    'testimonials.description': '发现信任我创意专长的客户体验。',
    'testimonials.trustedBy': '信任我的',
    'testimonials.trustedByDesc': '选择我创意专长的创新公司',

    // Contact Section
    'contact.subtitle': '联系',
    'contact.title1': '让我们',
    'contact.title2': '合作',
    'contact.description': '准备让您的项目变为现实？让我们讨论您的愿景，看看我们如何实现它。',
    'contact.getInTouch': '保持联系',
    'contact.getInTouchDesc': '我总是很兴奋讨论新项目和创意机会。',
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
    'footer.description': '瑞士创意解决方案专家。我创造讲述您故事的真实视觉体验。',
    'footer.quickLinks': '快速链接',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌识别',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': '动态图形',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 版权所有。'
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
    'hero.greeting': 'こんにちは、テオ・ブロンデルです',
    'hero.title1': 'クリエイティブ',
    'hero.title2': 'ソリューション',
    'hero.title3': 'スペシャリスト',
    'hero.description': 'スイスを拠点とするメディアマティシャン。あなたのストーリーを語る本物のビジュアルアイデンティティ、ユーザーインターフェース、デジタル体験を創造します。',
    'hero.contactMe': 'お問い合わせ',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の経験',
    'hero.projectsDelivered': 'プロジェクト完了',
    'hero.clientSatisfaction': 'クライアント満足度',
    'hero.clientsWorldwide': '世界中のクライアント',
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': 'あなたの価値観を反映するユニークなビジュアルアイデンティティ',
    'hero.service2.title': 'UI/UXデザイン',
    'hero.service2.desc': '最適なユーザー体験のための直感的なインターフェース',
    'hero.service3.title': 'ウェブ開発',
    'hero.service3.desc': 'モダンでレスポンシブな高性能ウェブサイト',
    'hero.service4.title': 'モーショングラフィックス',
    'hero.service4.desc': 'コンテンツに命を吹き込むダイナミックなアニメーション',

    // About Section
    'about.subtitle': '私について',
    'about.title1': '情熱的な',
    'about.title2': 'メディアマティシャン',
    'about.description1': 'スイスを拠点とする情熱的なメディアマティシャンとして、芸術的創造性と技術的専門知識を組み合わせて、本物のビジュアル体験を創造します。デザインへの包括的なアプローチにより、あなたのストーリーをユニークに語るクリエイティブソリューションを開発できます。',
    'about.description2': 'ブランドアイデンティティとインターフェースデザインを専門とし、印象に残り具体的な結果を生み出す記憶に残る体験の創造をクライアントと共に行います。',
    'about.skill1.title': 'クリエイティブデザイン',
    'about.skill1.desc': 'ビジュアルアイデンティティ、ブランディング、グラフィックデザイン',
    'about.skill2.title': 'UI/UXデザイン',
    'about.skill2.desc': 'ユーザーインターフェース、ユーザー体験、プロトタイピング',
    'about.skill3.title': '開発',
    'about.skill3.desc': 'フロントエンド開発、レスポンシブデザイン',
    'about.skill4.title': '戦略',
    'about.skill4.desc': 'クリエイティブディレクション、ブランド戦略',

    // Portfolio Section
    'portfolio.subtitle': '私の作品',
    'portfolio.title1': '選ばれた',
    'portfolio.title2': 'プロジェクト',
    'portfolio.description': 'ブランドアイデンティティの創造から完全なデジタル体験まで、私の最近のプロジェクトをご覧ください。',
    'portfolio.viewAllBehance': 'Behanceで全て見る',

    // Services Section
    'services.subtitle': 'サービス',
    'services.title': '私がすること',
    'services.description': 'プロジェクトに命を吹き込み、ビジュアルアイデンティティを強化する完全なクリエイティブソリューション。',
    'services.startProject': 'プロジェクトを開始',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': 'あなたの価値観を反映し、市場で際立つ完全なビジュアルアイデンティティの創造。',
    'services.brandIdentity.feature1': 'ロゴデザインとバリエーション',
    'services.brandIdentity.feature2': 'カラーパレットとタイポグラフィ',
    'services.brandIdentity.feature3': 'ブランドガイドライン',
    'services.brandIdentity.feature4': '印刷物とデジタルアプリケーション',

    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': '最適なユーザー体験のための直感的で美的なユーザーインターフェース。',
    'services.uiux.feature1': 'ユーザーリサーチとペルソナ',
    'services.uiux.feature2': 'ワイヤーフレームとプロトタイプ',
    'services.uiux.feature3': 'ビジュアルインターフェースデザイン',
    'services.uiux.feature4': 'ユーザビリティテスト',

    'services.webDev.title': 'ウェブ開発',
    'services.webDev.desc': 'あなのニーズに適応したモダンでレスポンシブな高性能ウェブサイト。',
    'services.webDev.feature1': 'レスポンシブデザイン',
    'services.webDev.feature2': 'パフォーマンス最適化',
    'services.webDev.feature3': 'SEOとアクセシビリティ',
    'services.webDev.feature4': 'CMS統合',

    'services.mobile.title': 'モバイルデザイン',
    'services.mobile.desc': 'iOSとAndroid向けのネイティブで直感的なモバイルアプリケーション。',
    'services.mobile.feature1': 'ネイティブアプリデザイン',
    'services.mobile.feature2': 'クロスプラットフォーム互換性',
    'services.mobile.feature3': 'タッチインタラクション',
    'services.mobile.feature4': 'App Store最適化',

    'services.creative.title': 'クリエイティブディレクション',
    'services.creative.desc': 'コミュニケーションキャンペーンのためのグローバルクリエイティブ戦略とアートディレクション。',
    'services.creative.feature1': 'クリエイティブコンセプト',
    'services.creative.feature2': 'アートディレクション',
    'services.creative.feature3': 'キャンペーン戦略',
    'services.creative.feature4': 'コンテンツ制作',

    'services.motion.title': 'モーショングラフィックス',
    'services.motion.desc': 'コンテンツに命を吹き込むダイナミックなアニメーションとモーショングラフィックス。',
    'services.motion.feature1': '2D/3Dアニメーション',
    'services.motion.feature2': 'ビデオ編集',
    'services.motion.feature3': 'ビジュアルエフェクト',
    'services.motion.feature4': 'インタラクティブアニメーション',

    // Testimonials Section
    'testimonials.subtitle': 'お客様の声',
    'testimonials.title': 'クライアントの声',
    'testimonials.description': '私のクリエイティブな専門知識を信頼してくださったクライアントの体験をご覧ください。',
    'testimonials.trustedBy': '信頼されています',
    'testimonials.trustedByDesc': '私のクリエイティブな専門知識を選んだ革新的な企業',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '一緒に',
    'contact.title2': '働きましょう',
    'contact.description': 'プロジェクトを実現する準備はできていますか？あなたのビジョンについて話し合い、それを実現する方法を見つけましょう。',
    'contact.getInTouch': '連絡を取り合いましょう',
    'contact.getInTouchDesc': '新しいプロジェクトやクリエイティブな機会について話し合うことを常に楽しみにしています。',
    'contact.email': 'メール',
    'contact.emailDesc': 'いつでもメッセージをお送りください',
    'contact.location': '場所',
    'contact.followMe': 'フォローしてください',
    'contact.sendMessage': 'メッセージを送る',
    'contact.name': '名前',
    'contact.namePlaceholder': 'お名前',
    'contact.emailPlaceholder': 'あなたのメール@例.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': 'プロジェクトの件名',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'プロジェクトについて教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer
    'footer.description': 'スイスを拠点とするクリエイティブソリューションスペシャリスト。あなたのストーリーを語る本物のビジュアル体験を創造します。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作られました',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 テオ・ブロンデル. 全著作権所有。'
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
    'hero.greeting': 'Hallo, ich bin Theo Blondel',
    'hero.title1': 'Kreative',
    'hero.title2': 'Lösungen',
    'hero.title3': 'Spezialist',
    'hero.description': 'Mediamatikspezialist aus der Schweiz. Ich schaffe authentische visuelle Identitäten, Benutzeroberflächen und digitale Erfahrungen, die Ihre Geschichte erzählen.',
    'hero.contactMe': 'Kontaktieren Sie mich',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsDelivered': 'Projekte geliefert',
    'hero.clientSatisfaction': 'Kundenzufriedenheit',
    'hero.clientsWorldwide': 'Kunden weltweit',
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Einzigartige visuelle Identitäten, die Ihre Werte widerspiegeln',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Intuitive Schnittstellen für optimale Benutzererfahrung',
    'hero.service3.title': 'Webentwicklung',
    'hero.service3.desc': 'Moderne, responsive und leistungsstarke Websites',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Dynamische Animationen, die Ihren Inhalten Leben einhauchen',

    // About Section
    'about.subtitle': 'Über mich',
    'about.title1': 'Leidenschaftlicher',
    'about.title2': 'Mediamatikspezialist',
    'about.description1': 'Als leidenschaftlicher Mediamatikspezialist aus der Schweiz kombiniere ich künstlerische Kreativität mit technischer Expertise, um authentische visuelle Erfahrungen zu schaffen. Mein ganzheitlicher Designansatz ermöglicht es mir, kreative Lösungen zu entwickeln, die Ihre Geschichte einzigartig erzählen.',
    'about.description2': 'Spezialisiert auf Markenidentität und Interface-Design begleite ich meine Kunden bei der Schaffung unvergesslicher Erfahrungen, die Eindruck hinterlassen und konkrete Ergebnisse erzielen.',
    'about.skill1.title': 'Kreatives Design',
    'about.skill1.desc': 'Visuelle Identität, Branding, Grafikdesign',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'Benutzeroberflächen, Benutzererfahrung, Prototyping',
    'about.skill3.title': 'Entwicklung',
    'about.skill3.desc': 'Frontend-Entwicklung, responsives Design',
    'about.skill4.title': 'Strategie',
    'about.skill4.desc': 'Kreative Leitung, Markenstrategie',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Arbeiten',
    'portfolio.title1': 'Ausgewählte',
    'portfolio.title2': 'Projekte',
    'portfolio.description': 'Entdecken Sie einige meiner neuesten Projekte, von der Markenidentitätserstellung bis hin zu vollständigen digitalen Erfahrungen.',
    'portfolio.viewAllBehance': 'Alle auf Behance ansehen',

    // Services Section
    'services.subtitle': 'Dienstleistungen',
    'services.title': 'Was ich mache',
    'services.description': 'Vollständige kreative Lösungen, um Ihre Projekte zum Leben zu erwecken und Ihre visuelle Identität zu stärken.',
    'services.startProject': 'Projekt starten',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Schaffung einer vollständigen visuellen Identität, die Ihre Werte widerspiegelt und sich am Markt abhebt.',
    'services.brandIdentity.feature1': 'Logo-Design und Variationen',
    'services.brandIdentity.feature2': 'Farbpalette und Typografie',
    'services.brandIdentity.feature3': 'Markenrichtlinien',
    'services.brandIdentity.feature4': 'Print- und digitale Anwendungen',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Intuitive und ästhetische Benutzeroberflächen für optimale Benutzererfahrung.',
    'services.uiux.feature1': 'Benutzerforschung und Personas',
    'services.uiux.feature2': 'Wireframes und Prototypen',
    'services.uiux.feature3': 'Visuelles Interface-Design',
    'services.uiux.feature4': 'Usability-Tests',

    'services.webDev.title': 'Webentwicklung',
    'services.webDev.desc': 'Moderne, responsive und leistungsstarke Websites, angepasst an Ihre Bedürfnisse.',
    'services.webDev.feature1': 'Responsives Design',
    'services.webDev.feature2': 'Leistungsoptimierung',
    'services.webDev.feature3': 'SEO und Barrierefreiheit',
    'services.webDev.feature4': 'CMS-Integration',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native und intuitive mobile Anwendungen für iOS und Android.',
    'services.mobile.feature1': 'Native App-Design',
    'services.mobile.feature2': 'Cross-Platform-Kompatibilität',
    'services.mobile.feature3': 'Touch-Interaktionen',
    'services.mobile.feature4': 'App Store-Optimierung',

    'services.creative.title': 'Kreative Leitung',
    'services.creative.desc': 'Globale Kreativstrategie und Kunstleitung für Ihre Kommunikationskampagnen.',
    'services.creative.feature1': 'Kreatives Konzept',
    'services.creative.feature2': 'Kunstleitung',
    'services.creative.feature3': 'Kampagnenstrategie',
    'services.creative.feature4': 'Content-Erstellung',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Dynamische Animationen und Motion Graphics, die Ihren Inhalten Leben einhauchen.',
    'services.motion.feature1': '2D/3D-Animationen',
    'services.motion.feature2': 'Videobearbeitung',
    'services.motion.feature3': 'Visuelle Effekte',
    'services.motion.feature4': 'Interaktive Animationen',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was Kunden sagen',
    'testimonials.description': 'Entdecken Sie die Erfahrungen von Kunden, die meiner kreativen Expertise vertraut haben.',
    'testimonials.trustedBy': 'Vertrauen mir',
    'testimonials.trustedByDesc': 'Innovative Unternehmen, die meine kreative Expertise gewählt haben',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Lassen Sie uns',
    'contact.title2': 'zusammenarbeiten',
    'contact.description': 'Bereit, Ihr Projekt zum Leben zu erwecken? Lassen Sie uns über Ihre Vision sprechen und sehen, wie wir sie verwirklichen können.',
    'contact.getInTouch': 'In Kontakt bleiben',
    'contact.getInTouchDesc': 'Ich freue mich immer darauf, neue Projekte und kreative Möglichkeiten zu besprechen.',
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
    'footer.description': 'Spezialist für kreative Lösungen aus der Schweiz. Ich schaffe authentische visuelle Erfahrungen, die Ihre Geschichte erzählen.',
    'footer.quickLinks': 'Schnelle Links',
    'footer.services': 'Dienstleistungen',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel. Alle Rechte vorbehalten.'
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
    'hero.greeting': 'Ciao, sono Theo Blondel',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'Creative',
    'hero.title3': 'Specialista',
    'hero.description': 'Mediamatico con base in Svizzera. Creo identità visive autentiche, interfacce utente ed esperienze digitali che raccontano la tua storia.',
    'hero.contactMe': 'Contattami',
    'hero.watchDemo': 'Guarda Demo',
    'hero.yearsExperience': 'Anni di Esperienza',
    'hero.projectsDelivered': 'Progetti Consegnati',
    'hero.clientSatisfaction': 'Soddisfazione Cliente',
    'hero.clientsWorldwide': 'Clienti nel Mondo',
    'hero.service1.title': 'Identità di Brand',
    'hero.service1.desc': 'Identità visive uniche che riflettono i tuoi valori',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfacce intuitive per un\'esperienza utente ottimale',
    'hero.service3.title': 'Sviluppo Web',
    'hero.service3.desc': 'Siti web moderni, responsive e ad alte prestazioni',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animazioni dinamiche che danno vita ai tuoi contenuti',

    // About Section
    'about.subtitle': 'Chi sono',
    'about.title1': 'Mediamatico',
    'about.title2': 'Appassionato',
    'about.description1': 'Mediamatico appassionato con base in Svizzera, combino creatività artistica ed esperienza tecnica per creare esperienze visive autentiche. Il mio approccio olistico al design mi permette di sviluppare soluzioni creative che raccontano la tua storia in modo unico.',
    'about.description2': 'Specializzato in identità di brand e design di interfacce, accompagno i miei clienti nella creazione di esperienze memorabili che lasciano il segno e generano risultati concreti.',
    'about.skill1.title': 'Design Creativo',
    'about.skill1.desc': 'Identità visiva, branding, design grafico',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfacce utente, esperienza utente, prototipazione',
    'about.skill3.title': 'Sviluppo',
    'about.skill3.desc': 'Sviluppo frontend, design responsive',
    'about.skill4.title': 'Strategia',
    'about.skill4.desc': 'Direzione creativa, strategia di brand',

    // Portfolio Section
    'portfolio.subtitle': 'I miei Lavori',
    'portfolio.title1': 'Progetti',
    'portfolio.title2': 'Selezionati',
    'portfolio.description': 'Scopri alcuni dei miei progetti recenti, dalla creazione di identità di brand alle esperienze digitali complete.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Services Section
    'services.subtitle': 'Servizi',
    'services.title': 'Cosa Faccio',
    'services.description': 'Soluzioni creative complete per dare vita ai tuoi progetti e rafforzare la tua identità visiva.',
    'services.startProject': 'Inizia un Progetto',

    'services.brandIdentity.title': 'Identità di Brand',
    'services.brandIdentity.desc': 'Creazione di identità visiva completa che riflette i tuoi valori e si distingue nel mercato.',
    'services.brandIdentity.feature1': 'Design del logo e variazioni',
    'services.brandIdentity.feature2': 'Palette di colori e tipografia',
    'services.brandIdentity.feature3': 'Linee guida del brand',
    'services.brandIdentity.feature4': 'Applicazioni stampa e digitali',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfacce utente intuitive ed estetiche per un\'esperienza utente ottimale.',
    'services.uiux.feature1': 'Ricerca utente e personas',
    'services.uiux.feature2': 'Wireframe e prototipi',
    'services.uiux.feature3': 'Design dell\'interfaccia visiva',
    'services.uiux.feature4': 'Test di usabilità',

    'services.webDev.title': 'Sviluppo Web',
    'services.webDev.desc': 'Siti web moderni, responsive e ad alte prestazioni adattati alle tue esigenze.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Ottimizzazione delle prestazioni',
    'services.webDev.feature3': 'SEO e accessibilità',
    'services.webDev.feature4': 'Integrazione CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Applicazioni mobili native e intuitive per iOS e Android.',
    'services.mobile.feature1': 'Design di app native',
    'services.mobile.feature2': 'Compatibilità cross-platform',
    'services.mobile.feature3': 'Interazioni touch',
    'services.mobile.feature4': 'Ottimizzazione App Store',

    'services.creative.title': 'Direzione Creativa',
    'services.creative.desc': 'Strategia creativa globale e direzione artistica per le tue campagne di comunicazione.',
    'services.creative.feature1': 'Concetto creativo',
    'services.creative.feature2': 'Direzione artistica',
    'services.creative.feature3': 'Strategia di campagna',
    'services.creative.feature4': 'Creazione di contenuti',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animazioni dinamiche e motion graphics che danno vita ai tuoi contenuti.',
    'services.motion.feature1': 'Animazioni 2D/3D',
    'services.motion.feature2': 'Editing video',
    'services.motion.feature3': 'Effetti visivi',
    'services.motion.feature4': 'Animazioni interattive',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa Dicono i Clienti',
    'testimonials.description': 'Scopri le esperienze dei clienti che hanno riposto fiducia nella mia esperienza creativa.',
    'testimonials.trustedBy': 'Si fidano di me',
    'testimonials.trustedByDesc': 'Aziende innovative che hanno scelto la mia esperienza creativa',

    // Contact Section
    'contact.subtitle': 'Contatto',
    'contact.title1': 'Lavoriamo',
    'contact.title2': 'Insieme',
    'contact.description': 'Pronto a dare vita al tuo progetto? Parliamo della tua visione e vediamo come possiamo realizzarla.',
    'contact.getInTouch': 'Rimaniamo in Contatto',
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
    'footer.description': 'Specialista in soluzioni creative con base in Svizzera. Creo esperienze visive autentiche che raccontano la tua storia.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di Brand',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Sviluppo Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel. Tutti i diritti riservati.'
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
    'hero.greeting': 'Olá, eu sou Theo Blondel',
    'hero.title1': 'Soluções',
    'hero.title2': 'Criativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático baseado na Suíça. Crio identidades visuais autênticas, interfaces de usuário e experiências digitais que contam sua história.',
    'hero.contactMe': 'Entre em Contato',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Anos de Experiência',
    'hero.projectsDelivered': 'Projetos Entregues',
    'hero.clientSatisfaction': 'Satisfação do Cliente',
    'hero.clientsWorldwide': 'Clientes no Mundo',
    'hero.service1.title': 'Identidade de Marca',
    'hero.service1.desc': 'Identidades visuais únicas que refletem seus valores',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces intuitivas para experiência de usuário otimizada',
    'hero.service3.title': 'Desenvolvimento Web',
    'hero.service3.desc': 'Sites modernos, responsivos e de alta performance',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animações dinâmicas que dão vida ao seu conteúdo',

    // About Section
    'about.subtitle': 'Sobre Mim',
    'about.title1': 'Mediamático',
    'about.title2': 'Apaixonado',
    'about.description1': 'Mediamático apaixonado baseado na Suíça, combino criatividade artística e expertise técnica para criar experiências visuais autênticas. Minha abordagem holística do design me permite desenvolver soluções criativas que contam sua história de forma única.',
    'about.description2': 'Especializado em identidade de marca e design de interface, acompanho meus clientes na criação de experiências memoráveis que marcam e geram resultados concretos.',
    'about.skill1.title': 'Design Criativo',
    'about.skill1.desc': 'Identidade visual, branding, design gráfico',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfaces de usuário, experiência do usuário, prototipagem',
    'about.skill3.title': 'Desenvolvimento',
    'about.skill3.desc': 'Desenvolvimento frontend, design responsivo',
    'about.skill4.title': 'Estratégia',
    'about.skill4.desc': 'Direção criativa, estratégia de marca',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Trabalhos',
    'portfolio.title1': 'Projetos',
    'portfolio.title2': 'Selecionados',
    'portfolio.description': 'Descubra alguns dos meus projetos recentes, desde criação de identidade de marca até experiências digitais completas.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Services Section
    'services.subtitle': 'Serviços',
    'services.title': 'O que Faço',
    'services.description': 'Soluções criativas completas para dar vida aos seus projetos e fortalecer sua identidade visual.',
    'services.startProject': 'Iniciar um Projeto',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Criação de identidade visual completa que reflete seus valores e se destaca no mercado.',
    'services.brandIdentity.feature1': 'Design de logo e variações',
    'services.brandIdentity.feature2': 'Paleta de cores e tipografia',
    'services.brandIdentity.feature3': 'Manual da marca',
    'services.brandIdentity.feature4': 'Aplicações impressas e digitais',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfaces de usuário intuitivas e estéticas para experiência de usuário otimizada.',
    'services.uiux.feature1': 'Pesquisa de usuário e personas',
    'services.uiux.feature2': 'Wireframes e protótipos',
    'services.uiux.feature3': 'Design de interface visual',
    'services.uiux.feature4': 'Testes de usabilidade',

    'services.webDev.title': 'Desenvolvimento Web',
    'services.webDev.desc': 'Sites modernos, responsivos e de alta performance adaptados às suas necessidades.',
    'services.webDev.feature1': 'Design responsivo',
    'services.webDev.feature2': 'Otimização de performance',
    'services.webDev.feature3': 'SEO e acessibilidade',
    'services.webDev.feature4': 'Integração CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Aplicações móveis nativas e intuitivas para iOS e Android.',
    'services.mobile.feature1': 'Design de app nativo',
    'services.mobile.feature2': 'Compatibilidade cross-platform',
    'services.mobile.feature3': 'Interações touch',
    'services.mobile.feature4': 'Otimização App Store',

    'services.creative.title': 'Direção Criativa',
    'services.creative.desc': 'Estratégia criativa global e direção artística para suas campanhas de comunicação.',
    'services.creative.feature1': 'Conceito criativo',
    'services.creative.feature2': 'Direção artística',
    'services.creative.feature3': 'Estratégia de campanha',
    'services.creative.feature4': 'Criação de conteúdo',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animações dinâmicas e motion graphics que dão vida ao seu conteúdo.',
    'services.motion.feature1': 'Animações 2D/3D',
    'services.motion.feature2': 'Edição de vídeo',
    'services.motion.feature3': 'Efeitos visuais',
    'services.motion.feature4': 'Animações interativas',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que Dizem os Clientes',
    'testimonials.description': 'Descubra as experiências de clientes que confiaram na minha expertise criativa.',
    'testimonials.trustedBy': 'Confiam em mim',
    'testimonials.trustedByDesc': 'Empresas inovadoras que escolheram minha expertise criativa',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos Trabalhar',
    'contact.title2': 'Juntos',
    'contact.description': 'Pronto para dar vida ao seu projeto? Vamos conversar sobre sua visão e ver como podemos realizá-la.',
    'contact.getInTouch': 'Vamos Manter Contato',
    'contact.getInTouchDesc': 'Estou sempre animado para discutir novos projetos e oportunidades criativas.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Me envie uma mensagem a qualquer momento',
    'contact.location': 'Localização',
    'contact.followMe': 'Me Siga',
    'contact.sendMessage': 'Enviar uma Mensagem',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Assunto do projeto',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Me conte sobre seu projeto...',
    'contact.sendBtn': 'Enviar Mensagem',

    // Footer
    'footer.description': 'Especialista em soluções criativas baseado na Suíça. Crio experiências visuais autênticas que contam sua história.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de Marca',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Desenvolvimento Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel. Todos os direitos reservados.'
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
    'hero.greeting': 'Përshëndetje, unë jam Theo Blondel',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'Kreative',
    'hero.title3': 'Specialist',
    'hero.description': 'Mediamatiçien i bazuar në Zvicër. Krijoj identitete vizuale autentike, ndërfaqe përdoruesish dhe përvojë digjitale që tregojnë historinë tuaj.',
    'hero.contactMe': 'Më kontaktoni',
    'hero.watchDemo': 'Shiko Demo',
    'hero.yearsExperience': 'Vite Përvojë',
    'hero.projectsDelivered': 'Projekte të Dorëzuara',
    'hero.clientSatisfaction': 'Kënaqësia e Klientit',
    'hero.clientsWorldwide': 'Klientë në Botë',
    'hero.service1.title': 'Identiteti i Markës',
    'hero.service1.desc': 'Identitete vizuale unike që reflektojnë vlerat tuaja',
    'hero.service2.title': 'Dizajni UI/UX',
    'hero.service2.desc': 'Ndërfaqe intuitive për përvojë optimale të përdoruesit',
    'hero.service3.title': 'Zhvillimi Web',
    'hero.service3.desc': 'Faqe interneti moderne, responsive dhe me performancë të lartë',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animacione dinamike që i japin jetë përmbajtjes suaj',

    // About Section
    'about.subtitle': 'Rreth Meje',
    'about.title1': 'Mediamatiçien',
    'about.title2': 'i Pasionuar',
    'about.description1': 'Mediamatiçien i pasionuar i bazuar në Zvicër, kombinoj kreativitetin artistik dhe ekspertizën teknike për të krijuar përvojë vizuale autentike. Qasja ime holistike ndaj dizajnit më lejon të zhvilloj zgjidhje kreative që tregojnë historinë tuaj në mënyrë unike.',
    'about.description2': 'I specializuar në identitetin e markës dhe dizajnin e ndërfaqes, i shoqëroj klientët e mi në krijimin e përvojave të paharrueshme që lënë gjurmë dhe gjenerojnë rezultate konkrete.',
    'about.skill1.title': 'Dizajni Kreativ',
    'about.skill1.desc': 'Identiteti vizual, branding, dizajni grafik',
    'about.skill2.title': 'Dizajni UI/UX',
    'about.skill2.desc': 'Ndërfaqe përdoruesish, përvojë përdoruesi, prototipimi',
    'about.skill3.title': 'Zhvillimi',
    'about.skill3.desc': 'Zhvillimi frontend, dizajni responsive',
    'about.skill4.title': 'Strategjia',
    'about.skill4.desc': 'Drejtimi kreativ, strategjia e markës',

    // Portfolio Section
    'portfolio.subtitle': 'Punët e Mia',
    'portfolio.title1': 'Projekte',
    'portfolio.title2': 'të Përzgjedhura',
    'portfolio.description': 'Zbuloni disa nga projektet e mia të fundit, nga krijimi i identitetit të markës deri te përvojat e plota digjitale.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Services Section
    'services.subtitle': 'Shërbimet',
    'services.title': 'Çfarë Bëj',
    'services.description': 'Zgjidhje kreative të plota për t\'i dhënë jetë projekteve tuaja dhe për të forcuar identitetin tuaj vizual.',
    'services.startProject': 'Fillo një Projekt',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Krijimi i identitetit vizual të plotë që reflekton vlerat tuaja dhe dallon në treg.',
    'services.brandIdentity.feature1': 'Dizajni i logos dhe variacionet',
    'services.brandIdentity.feature2': 'Paleta e ngjyrave dhe tipografia',
    'services.brandIdentity.feature3': 'Udhëzimet e markës',
    'services.brandIdentity.feature4': 'Aplikime të shtypit dhe digjitale',

    'services.uiux.title': 'Dizajni UI/UX',
    'services.uiux.desc': 'Ndërfaqe përdoruesish intuitive dhe estetike për përvojë optimale të përdoruesit.',
    'services.uiux.feature1': 'Kërkimi i përdoruesit dhe personat',
    'services.uiux.feature2': 'Wireframes dhe prototipet',
    'services.uiux.feature3': 'Dizajni i ndërfaqes vizuale',
    'services.uiux.feature4': 'Testet e përdorshmërisë',

    'services.webDev.title': 'Zhvillimi Web',
    'services.webDev.desc': 'Faqe interneti moderne, responsive dhe me performancë të lartë të përshtatura për nevojat tuaja.',
    'services.webDev.feature1': 'Dizajni responsive',
    'services.webDev.feature2': 'Optimizimi i performancës',
    'services.webDev.feature3': 'SEO dhe aksesueshmëria',
    'services.webDev.feature4': 'Integrimi CMS',

    'services.mobile.title': 'Dizajni Mobile',
    'services.mobile.desc': 'Aplikacione mobile native dhe intuitive për iOS dhe Android.',
    'services.mobile.feature1': 'Dizajni i aplikacionit native',
    'services.mobile.feature2': 'Kompatibiliteti cross-platform',
    'services.mobile.feature3': 'Ndërveprimet touch',
    'services.mobile.feature4': 'Optimizimi i App Store',

    'services.creative.title': 'Drejtimi Kreativ',
    'services.creative.desc': 'Strategji kreative globale dhe drejtim artistik për fushatat tuaja të komunikimit.',
    'services.creative.feature1': 'Koncepti kreativ',
    'services.creative.feature2': 'Drejtimi artistik',
    'services.creative.feature3': 'Strategjia e fushatës',
    'services.creative.feature4': 'Krijimi i përmbajtjes',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animacione dinamike dhe motion graphics që i japin jetë përmbajtjes suaj.',
    'services.motion.feature1': 'Animacione 2D/3D',
    'services.motion.feature2': 'Editimi i videos',
    'services.motion.feature3': 'Efektet vizuale',
    'services.motion.feature4': 'Animacione interaktive',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmi',
    'testimonials.title': 'Çfarë Thonë Klientët',
    'testimonials.description': 'Zbuloni përvojat e klientëve që kanë besuar ekspertizën time kreative.',
    'testimonials.trustedBy': 'Më besojnë',
    'testimonials.trustedByDesc': 'Kompani inovative që kanë zgjedhur ekspertizën time kreative',

    // Contact Section
    'contact.subtitle': 'Kontakti',
    'contact.title1': 'Le të Punojmë',
    'contact.title2': 'Së Bashku',
    'contact.description': 'Gati t\'i jepni jetë projektit tuaj? Le të flasim për vizionin tuaj dhe të shohim si mund ta realizojmë.',
    'contact.getInTouch': 'Le të Qëndrojmë në Kontakt',
    'contact.getInTouchDesc': 'Jam gjithmonë i emocionuar të diskutoj projekte të reja dhe mundësi kreative.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Më dërgoni një mesazh në çdo kohë',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më Ndiqni',
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
    'footer.description': 'Specialist në zgjidhje kreative i bazuar në Zvicër. Krijoj përvojë vizuale autentike që tregojnë historinë tuaj.',
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i Markës',
    'footer.uiuxDesign': 'Dizajni UI/UX',
    'footer.webDevelopment': 'Zhvillimi Web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara.'
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('fr');

  // Initialize theme from localStorage or system preference
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
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save language to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
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