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

// Comprehensive translations
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
    'hero.description': 'Mediamatician based in Switzerland. I create authentic visual identities, user interfaces and digital experiences that tell your story.',
    'hero.contactMe': 'Contact Me',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years\nExperience',
    'hero.projectsDelivered': 'Projects\nDelivered',
    'hero.clientSatisfaction': 'Client\nSatisfaction',
    'hero.clientsWorldwide': 'Clients\nWorldwide',
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
    'about.description1': 'Mediamatician passionate about creating authentic visual experiences. My holistic approach to design allows me to develop creative solutions that tell your story uniquely.',
    'about.description2': 'Specialized in brand identity and interface design, I support my clients in creating memorable experiences that leave a mark and generate concrete results.',
    'about.skill1.title': 'Creative Design',
    'about.skill1.desc': 'Visual identity, branding, print design',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'User interfaces, user experience, prototyping',
    'about.skill3.title': 'Development',
    'about.skill3.desc': 'Frontend, responsive design, optimization',
    'about.skill4.title': 'Strategy',
    'about.skill4.desc': 'Brand strategy, digital marketing, consulting',

    // Portfolio Section
    'portfolio.subtitle': 'My Work',
    'portfolio.title1': 'Selected',
    'portfolio.title2': 'Projects',
    'portfolio.description': 'Discover some of my recent projects, from brand identity to digital interfaces.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'What I Do',
    'services.description': 'Complete creative solutions to bring your projects to life with Swiss precision and attention to detail.',
    'services.startProject': 'Start a Project',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Complete visual identity creation that reflects your values and stands out in the market.',
    'services.brandIdentity.feature1': 'Logo design and variations',
    'services.brandIdentity.feature2': 'Color palette and typography',
    'services.brandIdentity.feature3': 'Brand guidelines',
    'services.brandIdentity.feature4': 'Print and digital applications',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Intuitive and aesthetic user interfaces that optimize user experience and conversions.',
    'services.uiux.feature1': 'User research and personas',
    'services.uiux.feature2': 'Wireframes and prototypes',
    'services.uiux.feature3': 'Interface design',
    'services.uiux.feature4': 'Usability testing',

    'services.webDev.title': 'Web Development',
    'services.webDev.desc': 'Modern, responsive and optimized websites for an exceptional user experience.',
    'services.webDev.feature1': 'Responsive development',
    'services.webDev.feature2': 'Performance optimization',
    'services.webDev.feature3': 'SEO and accessibility',
    'services.webDev.feature4': 'CMS integration',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native mobile applications designed for optimal user experience on all devices.',
    'services.mobile.feature1': 'iOS and Android design',
    'services.mobile.feature2': 'Interactive prototypes',
    'services.mobile.feature3': 'App Store optimization',
    'services.mobile.feature4': 'User testing',

    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'Global creative strategy to ensure visual consistency across all your communication channels.',
    'services.creative.feature1': 'Creative strategy',
    'services.creative.feature2': 'Art direction',
    'services.creative.feature3': 'Photo direction',
    'services.creative.feature4': 'Campaign creation',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Dynamic animations and motion graphics that bring your content to life and captivate your audience.',
    'services.motion.feature1': '2D/3D animations',
    'services.motion.feature2': 'Video editing',
    'services.motion.feature3': 'Visual effects',
    'services.motion.feature4': 'Interactive animations',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.description': 'Discover the experiences of clients who trusted me for their creative projects.',
    'testimonials.trustedBy': 'Trusted by',
    'testimonials.trustedByDesc': 'Companies that have trusted my expertise',

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
    'nav.work': 'Réalisations',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'Discutons',

    // Hero Section
    'hero.subtitle': 'Solutions Créatives',
    'hero.greeting': 'Salut, moi c\'est Theo',
    'hero.title1': 'Solutions',
    'hero.title2': 'Créatives',
    'hero.title3': 'polyvalente',
    'hero.description': 'Médiamaticien basé en Suisse. Je crée des identités visuelles authentiques, des interfaces utilisateur et des expériences digitales qui racontent ton histoire.',
    'hero.contactMe': 'Me contacter',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années\nd\'expérience',
    'hero.projectsDelivered': 'Projets\nréalisés',
    'hero.clientSatisfaction': 'Satisfaction\nclient',
    'hero.clientsWorldwide': 'Clients\ndans le monde',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Identités visuelles uniques qui reflètent tes valeurs',
    'hero.service2.title': 'Design UI/UX',
    'hero.service2.desc': 'Interfaces intuitives pour une expérience utilisateur optimale',
    'hero.service3.title': 'Développement Web',
    'hero.service3.desc': 'Sites web modernes, responsifs et performants',
    'hero.service4.title': 'Motion Graphics',
    'hero.service4.desc': 'Animations dynamiques qui donnent vie à ton contenu',

    // About Section
    'about.subtitle': 'À propos',
    'about.title1': 'Médiamaticien',
    'about.title2': 'Passionné',
    'about.description1': 'Médiamaticien passionné par la création d\'expériences visuelles authentiques. Mon approche holistique du design me permet de développer des solutions créatives qui racontent ton histoire de manière unique.',
    'about.description2': 'Spécialisé en identité de marque et design d\'interface, j\'accompagne mes clients dans la création d\'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.',
    'about.skill1.title': 'Design Créatif',
    'about.skill1.desc': 'Identité visuelle, branding, design print',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfaces utilisateur, expérience utilisateur, prototypage',
    'about.skill3.title': 'Développement',
    'about.skill3.desc': 'Frontend, design responsive, optimisation',
    'about.skill4.title': 'Stratégie',
    'about.skill4.desc': 'Stratégie de marque, marketing digital, conseil',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Réalisations',
    'portfolio.title1': 'Projets',
    'portfolio.title2': 'Sélectionnés',
    'portfolio.description': 'Découvre quelques-uns de mes projets récents, de l\'identité de marque aux interfaces digitales.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': 'Services',
    'services.title': 'Ce que je fais',
    'services.description': 'Solutions créatives complètes pour donner vie à tes projets avec la précision suisse et l\'attention aux détails.',
    'services.startProject': 'Démarrer un projet',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Création d\'identité visuelle complète qui reflète tes valeurs et se démarque sur le marché.',
    'services.brandIdentity.feature1': 'Conception de logo et déclinaisons',
    'services.brandIdentity.feature2': 'Palette de couleurs et typographie',
    'services.brandIdentity.feature3': 'Charte graphique',
    'services.brandIdentity.feature4': 'Applications print et digitales',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfaces utilisateur intuitives et esthétiques qui optimisent l\'expérience utilisateur et les conversions.',
    'services.uiux.feature1': 'Recherche utilisateur et personas',
    'services.uiux.feature2': 'Wireframes et prototypes',
    'services.uiux.feature3': 'Design d\'interface',
    'services.uiux.feature4': 'Tests d\'utilisabilité',

    'services.webDev.title': 'Développement Web',
    'services.webDev.desc': 'Sites web modernes, responsifs et optimisés pour une expérience utilisateur exceptionnelle.',
    'services.webDev.feature1': 'Développement responsive',
    'services.webDev.feature2': 'Optimisation des performances',
    'services.webDev.feature3': 'SEO et accessibilité',
    'services.webDev.feature4': 'Intégration CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Applications mobiles natives conçues pour une expérience utilisateur optimale sur tous les appareils.',
    'services.mobile.feature1': 'Design iOS et Android',
    'services.mobile.feature2': 'Prototypes interactifs',
    'services.mobile.feature3': 'Optimisation App Store',
    'services.mobile.feature4': 'Tests utilisateur',

    'services.creative.title': 'Direction Créative',
    'services.creative.desc': 'Stratégie créative globale pour assurer une cohérence visuelle sur tous tes canaux de communication.',
    'services.creative.feature1': 'Stratégie créative',
    'services.creative.feature2': 'Direction artistique',
    'services.creative.feature3': 'Direction photo',
    'services.creative.feature4': 'Création de campagnes',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animations dynamiques et motion graphics qui donnent vie à ton contenu et captivent ton audience.',
    'services.motion.feature1': 'Animations 2D/3D',
    'services.motion.feature2': 'Montage vidéo',
    'services.motion.feature3': 'Effets visuels',
    'services.motion.feature4': 'Animations interactives',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce que disent mes clients',
    'testimonials.description': 'Découvre les expériences de clients qui m\'ont fait confiance pour leurs projets créatifs.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Entreprises qui ont fait confiance à mon expertise',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'Travaillons',
    'contact.title2': 'Ensemble',
    'contact.description': 'Prêt à donner vie à ton projet ? Parlons de ta vision et voyons comment nous pouvons la concrétiser.',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'Je suis toujours ravi de discuter de nouveaux projets et d\'opportunités créatives.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Envoie-moi un message à tout moment',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suis-moi',
    'contact.sendMessage': 'Envoyer un message',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Ton nom',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet du projet',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parle-moi de ton projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Spécialiste en solutions créatives basé en Suisse. Je crée des expériences visuelles authentiques qui racontent ton histoire.',
    'footer.quickLinks': 'Liens rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'Design UI/UX',
    'footer.webDevelopment': 'Développement Web',
    'footer.motionGraphics': 'Motion Graphics',
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
    'hero.greeting': 'Hola, soy Theo',
    'hero.title1': 'Soluciones',
    'hero.title2': 'Creativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático con base en Suiza. Creo identidades visuales auténticas, interfaces de usuario y experiencias digitales que cuentan tu historia.',
    'hero.contactMe': 'Contáctame',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de\nExperiencia',
    'hero.projectsDelivered': 'Proyectos\nEntregados',
    'hero.clientSatisfaction': 'Satisfacción\ndel Cliente',
    'hero.clientsWorldwide': 'Clientes\nMundiales',
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
    'about.description1': 'Mediamático apasionado por crear experiencias visuales auténticas. Mi enfoque holístico del diseño me permite desarrollar soluciones creativas que cuentan tu historia de manera única.',
    'about.description2': 'Especializado en identidad de marca y diseño de interfaces, acompaño a mis clientes en la creación de experiencias memorables que dejan huella y generan resultados concretos.',
    'about.skill1.title': 'Diseño Creativo',
    'about.skill1.desc': 'Identidad visual, branding, diseño impreso',
    'about.skill2.title': 'Diseño UI/UX',
    'about.skill2.desc': 'Interfaces de usuario, experiencia de usuario, prototipado',
    'about.skill3.title': 'Desarrollo',
    'about.skill3.desc': 'Frontend, diseño responsivo, optimización',
    'about.skill4.title': 'Estrategia',
    'about.skill4.desc': 'Estrategia de marca, marketing digital, consultoría',

    // Portfolio Section
    'portfolio.subtitle': 'Mi Trabajo',
    'portfolio.title1': 'Proyectos',
    'portfolio.title2': 'Seleccionados',
    'portfolio.description': 'Descubre algunos de mis proyectos recientes, desde identidad de marca hasta interfaces digitales.',
    'portfolio.viewAllBehance': 'Ver todo en Behance',

    // Services Section
    'services.subtitle': 'Servicios',
    'services.title': 'Lo que Hago',
    'services.description': 'Soluciones creativas completas para dar vida a tus proyectos con precisión suiza y atención al detalle.',
    'services.startProject': 'Iniciar un Proyecto',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': 'Creación de identidad visual completa que refleja tus valores y se destaca en el mercado.',
    'services.brandIdentity.feature1': 'Diseño de logo y variaciones',
    'services.brandIdentity.feature2': 'Paleta de colores y tipografía',
    'services.brandIdentity.feature3': 'Manual de marca',
    'services.brandIdentity.feature4': 'Aplicaciones impresas y digitales',

    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Interfaces de usuario intuitivas y estéticas que optimizan la experiencia del usuario y las conversiones.',
    'services.uiux.feature1': 'Investigación de usuarios y personas',
    'services.uiux.feature2': 'Wireframes y prototipos',
    'services.uiux.feature3': 'Diseño de interfaz',
    'services.uiux.feature4': 'Pruebas de usabilidad',

    'services.webDev.title': 'Desarrollo Web',
    'services.webDev.desc': 'Sitios web modernos, responsivos y optimizados para una experiencia de usuario excepcional.',
    'services.webDev.feature1': 'Desarrollo responsivo',
    'services.webDev.feature2': 'Optimización de rendimiento',
    'services.webDev.feature3': 'SEO y accesibilidad',
    'services.webDev.feature4': 'Integración CMS',

    'services.mobile.title': 'Diseño Móvil',
    'services.mobile.desc': 'Aplicaciones móviles nativas diseñadas para una experiencia de usuario óptima en todos los dispositivos.',
    'services.mobile.feature1': 'Diseño iOS y Android',
    'services.mobile.feature2': 'Prototipos interactivos',
    'services.mobile.feature3': 'Optimización App Store',
    'services.mobile.feature4': 'Pruebas de usuario',

    'services.creative.title': 'Dirección Creativa',
    'services.creative.desc': 'Estrategia creativa global para asegurar consistencia visual en todos tus canales de comunicación.',
    'services.creative.feature1': 'Estrategia creativa',
    'services.creative.feature2': 'Dirección artística',
    'services.creative.feature3': 'Dirección fotográfica',
    'services.creative.feature4': 'Creación de campañas',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animaciones dinámicas y motion graphics que dan vida a tu contenido y cautivan a tu audiencia.',
    'services.motion.feature1': 'Animaciones 2D/3D',
    'services.motion.feature2': 'Edición de video',
    'services.motion.feature3': 'Efectos visuales',
    'services.motion.feature4': 'Animaciones interactivas',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo que Dicen los Clientes',
    'testimonials.description': 'Descubre las experiencias de clientes que confiaron en mí para sus proyectos creativos.',
    'testimonials.trustedBy': 'Confían en mí',
    'testimonials.trustedByDesc': 'Empresas que han confiado en mi experiencia',

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
    'hero.greeting': 'Привет, я Тео',
    'hero.title1': 'Креативные',
    'hero.title2': 'Решения',
    'hero.title3': 'Специалист',
    'hero.description': 'Медиаматик из Швейцарии. Создаю аутентичные визуальные идентичности, пользовательские интерфейсы и цифровые впечатления, которые рассказывают вашу историю.',
    'hero.contactMe': 'Связаться',
    'hero.watchDemo': 'Смотреть Демо',
    'hero.yearsExperience': 'Лет\nОпыта',
    'hero.projectsDelivered': 'Проектов\nВыполнено',
    'hero.clientSatisfaction': 'Удовлетворенность\nКлиентов',
    'hero.clientsWorldwide': 'Клиентов\nПо Всему Миру',
    'hero.service1.title': 'Брендинг',
    'hero.service1.desc': 'Уникальные визуальные идентичности, отражающие ваши ценности',
    'hero.service2.title': 'UI/UX Дизайн',
    'hero.service2.desc': 'Интуитивные интерфейсы для оптимального пользовательского опыта',
    'hero.service3.title': 'Веб-разработка',
    'hero.service3.desc': 'Современные, адаптивные и высокопроизводительные веб-сайты',
    'hero.service4.title': 'Моушн Графика',
    'hero.service4.desc': 'Динамичные анимации, оживляющие ваш контент',

    // About Section
    'about.subtitle': 'Обо Мне',
    'about.title1': 'Увлеченный',
    'about.title2': 'Медиаматик',
    'about.description1': 'Медиаматик, увлеченный созданием аутентичных визуальных впечатлений. Мой целостный подход к дизайну позволяет разрабатывать креативные решения, которые уникально рассказывают вашу историю.',
    'about.description2': 'Специализируюсь на брендинге и дизайне интерфейсов, помогаю клиентам создавать запоминающиеся впечатления, которые оставляют след и приносят конкретные результаты.',
    'about.skill1.title': 'Креативный Дизайн',
    'about.skill1.desc': 'Визуальная идентичность, брендинг, печатный дизайн',
    'about.skill2.title': 'UI/UX Дизайн',
    'about.skill2.desc': 'Пользовательские интерфейсы, пользовательский опыт, прототипирование',
    'about.skill3.title': 'Разработка',
    'about.skill3.desc': 'Frontend, адаптивный дизайн, оптимизация',
    'about.skill4.title': 'Стратегия',
    'about.skill4.desc': 'Стратегия бренда, цифровой маркетинг, консалтинг',

    // Portfolio Section
    'portfolio.subtitle': 'Мои Работы',
    'portfolio.title1': 'Избранные',
    'portfolio.title2': 'Проекты',
    'portfolio.description': 'Откройте для себя некоторые из моих недавних проектов, от брендинга до цифровых интерфейсов.',
    'portfolio.viewAllBehance': 'Смотреть все на Behance',

    // Services Section
    'services.subtitle': 'Услуги',
    'services.title': 'Что Я Делаю',
    'services.description': 'Комплексные креативные решения для воплощения ваших проектов в жизнь со швейцарской точностью и вниманием к деталям.',
    'services.startProject': 'Начать Проект',

    'services.brandIdentity.title': 'Брендинг',
    'services.brandIdentity.desc': 'Создание полной визуальной идентичности, отражающей ваши ценности и выделяющейся на рынке.',
    'services.brandIdentity.feature1': 'Дизайн логотипа и вариации',
    'services.brandIdentity.feature2': 'Цветовая палитра и типографика',
    'services.brandIdentity.feature3': 'Руководство по бренду',
    'services.brandIdentity.feature4': 'Печатные и цифровые применения',

    'services.uiux.title': 'UI/UX Дизайн',
    'services.uiux.desc': 'Интуитивные и эстетичные пользовательские интерфейсы, оптимизирующие пользовательский опыт и конверсии.',
    'services.uiux.feature1': 'Исследование пользователей и персоны',
    'services.uiux.feature2': 'Каркасы и прототипы',
    'services.uiux.feature3': 'Дизайн интерфейса',
    'services.uiux.feature4': 'Тестирование юзабилити',

    'services.webDev.title': 'Веб-разработка',
    'services.webDev.desc': 'Современные, адаптивные и оптимизированные веб-сайты для исключительного пользовательского опыта.',
    'services.webDev.feature1': 'Адаптивная разработка',
    'services.webDev.feature2': 'Оптимизация производительности',
    'services.webDev.feature3': 'SEO и доступность',
    'services.webDev.feature4': 'Интеграция CMS',

    'services.mobile.title': 'Мобильный Дизайн',
    'services.mobile.desc': 'Нативные мобильные приложения, разработанные для оптимального пользовательского опыта на всех устройствах.',
    'services.mobile.feature1': 'Дизайн для iOS и Android',
    'services.mobile.feature2': 'Интерактивные прототипы',
    'services.mobile.feature3': 'Оптимизация App Store',
    'services.mobile.feature4': 'Пользовательское тестирование',

    'services.creative.title': 'Креативное Направление',
    'services.creative.desc': 'Глобальная креативная стратегия для обеспечения визуальной согласованности во всех ваших каналах коммуникации.',
    'services.creative.feature1': 'Креативная стратегия',
    'services.creative.feature2': 'Арт-направление',
    'services.creative.feature3': 'Фото-направление',
    'services.creative.feature4': 'Создание кампаний',

    'services.motion.title': 'Моушн Графика',
    'services.motion.desc': 'Динамичные анимации и моушн графика, оживляющие ваш контент и захватывающие аудиторию.',
    'services.motion.feature1': '2D/3D анимации',
    'services.motion.feature2': 'Видеомонтаж',
    'services.motion.feature3': 'Визуальные эффекты',
    'services.motion.feature4': 'Интерактивные анимации',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что Говорят Клиенты',
    'testimonials.description': 'Откройте для себя опыт клиентов, которые доверили мне свои креативные проекты.',
    'testimonials.trustedBy': 'Мне доверяют',
    'testimonials.trustedByDesc': 'Компании, которые доверили мой опыт',

    // Contact Section
    'contact.subtitle': 'Контакты',
    'contact.title1': 'Давайте Работать',
    'contact.title2': 'Вместе',
    'contact.description': 'Готовы воплотить ваш проект в жизнь? Давайте обсудим ваше видение и посмотрим, как мы можем его реализовать.',
    'contact.getInTouch': 'Свяжитесь со Мной',
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
    'contact.messagePlaceholder': 'Расскажите о вашем проекте...',
    'contact.sendBtn': 'Отправить Сообщение',

    // Footer
    'footer.description': 'Специалист по креативным решениям из Швейцарии. Создаю аутентичные визуальные впечатления, которые рассказывают вашу историю.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Брендинг',
    'footer.uiuxDesign': 'UI/UX Дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн Графика',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Theo Blondel. Все права защищены.'
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
    'hero.description': '瑞士媒体技术专家。我创造真实的视觉身份、用户界面和数字体验，讲述您的故事。',
    'hero.contactMe': '联系我',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年\n经验',
    'hero.projectsDelivered': '项目\n交付',
    'hero.clientSatisfaction': '客户\n满意度',
    'hero.clientsWorldwide': '全球\n客户',
    'hero.service1.title': '品牌识别',
    'hero.service1.desc': '反映您价值观的独特视觉身份',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '直观的界面，优化用户体验',
    'hero.service3.title': '网页开发',
    'hero.service3.desc': '现代、响应式和高性能的网站',
    'hero.service4.title': '动态图形',
    'hero.service4.desc': '为您的内容注入活力的动态动画',

    // About Section
    'about.subtitle': '关于我',
    'about.title1': '充满激情的',
    'about.title2': '媒体技术专家',
    'about.description1': '热衷于创造真实视觉体验的媒体技术专家。我的整体设计方法让我能够开发独特讲述您故事的创意解决方案。',
    'about.description2': '专注于品牌识别和界面设计，我帮助客户创造令人难忘的体验，留下印象并产生具体结果。',
    'about.skill1.title': '创意设计',
    'about.skill1.desc': '视觉识别、品牌、印刷设计',
    'about.skill2.title': 'UI/UX设计',
    'about.skill2.desc': '用户界面、用户体验、原型设计',
    'about.skill3.title': '开发',
    'about.skill3.desc': '前端、响应式设计、优化',
    'about.skill4.title': '策略',
    'about.skill4.desc': '品牌策略、数字营销、咨询',

    // Portfolio Section
    'portfolio.subtitle': '我的作品',
    'portfolio.title1': '精选',
    'portfolio.title2': '项目',
    'portfolio.description': '发现我最近的一些项目，从品牌识别到数字界面。',
    'portfolio.viewAllBehance': '在Behance查看全部',

    // Services Section
    'services.subtitle': '服务',
    'services.title': '我做什么',
    'services.description': '完整的创意解决方案，以瑞士精度和对细节的关注为您的项目注入生命。',
    'services.startProject': '开始项目',

    'services.brandIdentity.title': '品牌识别',
    'services.brandIdentity.desc': '创建反映您价值观并在市场中脱颖而出的完整视觉识别。',
    'services.brandIdentity.feature1': '标志设计和变体',
    'services.brandIdentity.feature2': '色彩调色板和字体',
    'services.brandIdentity.feature3': '品牌指南',
    'services.brandIdentity.feature4': '印刷和数字应用',

    'services.uiux.title': 'UI/UX设计',
    'services.uiux.desc': '直观和美观的用户界面，优化用户体验和转化率。',
    'services.uiux.feature1': '用户研究和角色',
    'services.uiux.feature2': '线框图和原型',
    'services.uiux.feature3': '界面设计',
    'services.uiux.feature4': '可用性测试',

    'services.webDev.title': '网页开发',
    'services.webDev.desc': '现代、响应式和优化的网站，提供卓越的用户体验。',
    'services.webDev.feature1': '响应式开发',
    'services.webDev.feature2': '性能优化',
    'services.webDev.feature3': 'SEO和可访问性',
    'services.webDev.feature4': 'CMS集成',

    'services.mobile.title': '移动设计',
    'services.mobile.desc': '为所有设备优化用户体验而设计的原生移动应用程序。',
    'services.mobile.feature1': 'iOS和Android设计',
    'services.mobile.feature2': '交互式原型',
    'services.mobile.feature3': 'App Store优化',
    'services.mobile.feature4': '用户测试',

    'services.creative.title': '创意指导',
    'services.creative.desc': '全球创意策略，确保所有沟通渠道的视觉一致性。',
    'services.creative.feature1': '创意策略',
    'services.creative.feature2': '艺术指导',
    'services.creative.feature3': '摄影指导',
    'services.creative.feature4': '活动创建',

    'services.motion.title': '动态图形',
    'services.motion.desc': '动态动画和动态图形，为您的内容注入活力并吸引观众。',
    'services.motion.feature1': '2D/3D动画',
    'services.motion.feature2': '视频编辑',
    'services.motion.feature3': '视觉效果',
    'services.motion.feature4': '交互式动画',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '客户评价',
    'testimonials.description': '发现信任我进行创意项目的客户体验。',
    'testimonials.trustedBy': '信任我的',
    'testimonials.trustedByDesc': '信任我专业知识的公司',

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
    'footer.description': '瑞士创意解决方案专家。我创造真实的视觉体验，讲述您的故事。',
    'footer.quickLinks': '快速链接',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌识别',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': '动态图形',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 保留所有权利。'
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
    'hero.description': 'スイスを拠点とするメディアマティシャン。あなたのストーリーを語る本格的なビジュアルアイデンティティ、ユーザーインターフェース、デジタル体験を創造します。',
    'hero.contactMe': 'お問い合わせ',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の\n経験',
    'hero.projectsDelivered': 'プロジェクト\n完了',
    'hero.clientSatisfaction': 'クライアント\n満足度',
    'hero.clientsWorldwide': '世界中の\nクライアント',
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
    'about.description1': '本格的なビジュアル体験の創造に情熱を注ぐメディアマティシャン。デザインへの包括的なアプローチにより、あなたのストーリーをユニークに語るクリエイティブソリューションを開発できます。',
    'about.description2': 'ブランドアイデンティティとインターフェースデザインを専門とし、印象に残り具体的な結果を生み出す記憶に残る体験の創造をクライアントと共に行います。',
    'about.skill1.title': 'クリエイティブデザイン',
    'about.skill1.desc': 'ビジュアルアイデンティティ、ブランディング、印刷デザイン',
    'about.skill2.title': 'UI/UXデザイン',
    'about.skill2.desc': 'ユーザーインターフェース、ユーザー体験、プロトタイピング',
    'about.skill3.title': '開発',
    'about.skill3.desc': 'フロントエンド、レスポンシブデザイン、最適化',
    'about.skill4.title': '戦略',
    'about.skill4.desc': 'ブランド戦略、デジタルマーケティング、コンサルティング',

    // Portfolio Section
    'portfolio.subtitle': '私の作品',
    'portfolio.title1': '選ばれた',
    'portfolio.title2': 'プロジェクト',
    'portfolio.description': 'ブランドアイデンティティからデジタルインターフェースまで、私の最近のプロジェクトをご覧ください。',
    'portfolio.viewAllBehance': 'Behanceで全て見る',

    // Services Section
    'services.subtitle': 'サービス',
    'services.title': '私がすること',
    'services.description': 'スイスの精密さと細部への注意を持って、あなたのプロジェクトに命を吹き込む完全なクリエイティブソリューション。',
    'services.startProject': 'プロジェクトを開始',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': 'あなたの価値観を反映し、市場で際立つ完全なビジュアルアイデンティティの創造。',
    'services.brandIdentity.feature1': 'ロゴデザインとバリエーション',
    'services.brandIdentity.feature2': 'カラーパレットとタイポグラフィ',
    'services.brandIdentity.feature3': 'ブランドガイドライン',
    'services.brandIdentity.feature4': '印刷とデジタルアプリケーション',

    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': 'ユーザー体験とコンバージョンを最適化する直感的で美的なユーザーインターフェース。',
    'services.uiux.feature1': 'ユーザーリサーチとペルソナ',
    'services.uiux.feature2': 'ワイヤーフレームとプロトタイプ',
    'services.uiux.feature3': 'インターフェースデザイン',
    'services.uiux.feature4': 'ユーザビリティテスト',

    'services.webDev.title': 'ウェブ開発',
    'services.webDev.desc': '優れたユーザー体験のためのモダンでレスポンシブで最適化されたウェブサイト。',
    'services.webDev.feature1': 'レスポンシブ開発',
    'services.webDev.feature2': 'パフォーマンス最適化',
    'services.webDev.feature3': 'SEOとアクセシビリティ',
    'services.webDev.feature4': 'CMS統合',

    'services.mobile.title': 'モバイルデザイン',
    'services.mobile.desc': 'すべてのデバイスで最適なユーザー体験のために設計されたネイティブモバイルアプリケーション。',
    'services.mobile.feature1': 'iOSとAndroidデザイン',
    'services.mobile.feature2': 'インタラクティブプロトタイプ',
    'services.mobile.feature3': 'App Store最適化',
    'services.mobile.feature4': 'ユーザーテスト',

    'services.creative.title': 'クリエイティブディレクション',
    'services.creative.desc': 'すべてのコミュニケーションチャネルでビジュアルの一貫性を確保するグローバルクリエイティブ戦略。',
    'services.creative.feature1': 'クリエイティブ戦略',
    'services.creative.feature2': 'アートディレクション',
    'services.creative.feature3': 'フォトディレクション',
    'services.creative.feature4': 'キャンペーン作成',

    'services.motion.title': 'モーショングラフィックス',
    'services.motion.desc': 'コンテンツに命を吹き込み、オーディエンスを魅了するダイナミックなアニメーションとモーショングラフィックス。',
    'services.motion.feature1': '2D/3Dアニメーション',
    'services.motion.feature2': 'ビデオ編集',
    'services.motion.feature3': 'ビジュアルエフェクト',
    'services.motion.feature4': 'インタラクティブアニメーション',

    // Testimonials Section
    'testimonials.subtitle': 'お客様の声',
    'testimonials.title': 'クライアントの声',
    'testimonials.description': 'クリエイティブプロジェクトで私を信頼してくださったクライアントの体験をご覧ください。',
    'testimonials.trustedBy': '信頼されています',
    'testimonials.trustedByDesc': '私の専門知識を信頼してくださった企業',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '一緒に',
    'contact.title2': '働きましょう',
    'contact.description': 'プロジェクトを実現する準備はできていますか？あなたのビジョンについて話し合い、それを実現する方法を見つけましょう。',
    'contact.getInTouch': '連絡を取り合いましょう',
    'contact.getInTouchDesc': '新しいプロジェクトやクリエイティブな機会について話し合うことにいつも興奮しています。',
    'contact.email': 'メール',
    'contact.emailDesc': 'いつでもメッセージをお送りください',
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
    'footer.description': 'スイスを拠点とするクリエイティブソリューションスペシャリスト。あなたのストーリーを語る本格的なビジュアル体験を創造します。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作られました',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel. 全著作権所有。'
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
    'hero.description': 'Mediamatiker aus der Schweiz. Ich schaffe authentische visuelle Identitäten, Benutzeroberflächen und digitale Erfahrungen, die Ihre Geschichte erzählen.',
    'hero.contactMe': 'Kontaktieren Sie mich',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre\nErfahrung',
    'hero.projectsDelivered': 'Projekte\nAbgeschlossen',
    'hero.clientSatisfaction': 'Kunden-\nzufriedenheit',
    'hero.clientsWorldwide': 'Kunden\nWeltweit',
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
    'about.title2': 'Mediamatiker',
    'about.description1': 'Mediamatiker mit Leidenschaft für die Schaffung authentischer visueller Erfahrungen. Mein ganzheitlicher Ansatz zum Design ermöglicht es mir, kreative Lösungen zu entwickeln, die Ihre Geschichte einzigartig erzählen.',
    'about.description2': 'Spezialisiert auf Markenidentität und Interface-Design, unterstütze ich meine Kunden bei der Schaffung unvergesslicher Erfahrungen, die Eindruck hinterlassen und konkrete Ergebnisse erzielen.',
    'about.skill1.title': 'Kreatives Design',
    'about.skill1.desc': 'Visuelle Identität, Branding, Printdesign',
    'about.skill2.title': 'UI/UX Design',
    'about.skill2.desc': 'Benutzeroberflächen, Benutzererfahrung, Prototyping',
    'about.skill3.title': 'Entwicklung',
    'about.skill3.desc': 'Frontend, responsives Design, Optimierung',
    'about.skill4.title': 'Strategie',
    'about.skill4.desc': 'Markenstrategie, digitales Marketing, Beratung',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Arbeiten',
    'portfolio.title1': 'Ausgewählte',
    'portfolio.title2': 'Projekte',
    'portfolio.description': 'Entdecken Sie einige meiner neuesten Projekte, von Markenidentität bis zu digitalen Schnittstellen.',
    'portfolio.viewAllBehance': 'Alle auf Behance ansehen',

    // Services Section
    'services.subtitle': 'Dienstleistungen',
    'services.title': 'Was ich mache',
    'services.description': 'Vollständige kreative Lösungen, um Ihre Projekte mit Schweizer Präzision und Liebe zum Detail zum Leben zu erwecken.',
    'services.startProject': 'Projekt starten',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Schaffung einer vollständigen visuellen Identität, die Ihre Werte widerspiegelt und sich am Markt abhebt.',
    'services.brandIdentity.feature1': 'Logo-Design und Variationen',
    'services.brandIdentity.feature2': 'Farbpalette und Typografie',
    'services.brandIdentity.feature3': 'Markenrichtlinien',
    'services.brandIdentity.feature4': 'Print- und digitale Anwendungen',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Intuitive und ästhetische Benutzeroberflächen, die Benutzererfahrung und Konversionen optimieren.',
    'services.uiux.feature1': 'Benutzerforschung und Personas',
    'services.uiux.feature2': 'Wireframes und Prototypen',
    'services.uiux.feature3': 'Interface-Design',
    'services.uiux.feature4': 'Usability-Tests',

    'services.webDev.title': 'Webentwicklung',
    'services.webDev.desc': 'Moderne, responsive und optimierte Websites für eine außergewöhnliche Benutzererfahrung.',
    'services.webDev.feature1': 'Responsive Entwicklung',
    'services.webDev.feature2': 'Performance-Optimierung',
    'services.webDev.feature3': 'SEO und Barrierefreiheit',
    'services.webDev.feature4': 'CMS-Integration',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Native mobile Anwendungen, die für optimale Benutzererfahrung auf allen Geräten entwickelt wurden.',
    'services.mobile.feature1': 'iOS und Android Design',
    'services.mobile.feature2': 'Interaktive Prototypen',
    'services.mobile.feature3': 'App Store Optimierung',
    'services.mobile.feature4': 'Benutzertests',

    'services.creative.title': 'Kreative Leitung',
    'services.creative.desc': 'Globale kreative Strategie zur Gewährleistung visueller Konsistenz über alle Ihre Kommunikationskanäle.',
    'services.creative.feature1': 'Kreative Strategie',
    'services.creative.feature2': 'Art Direction',
    'services.creative.feature3': 'Foto-Regie',
    'services.creative.feature4': 'Kampagnenerstellung',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Dynamische Animationen und Motion Graphics, die Ihren Inhalten Leben einhauchen und Ihr Publikum fesseln.',
    'services.motion.feature1': '2D/3D Animationen',
    'services.motion.feature2': 'Videobearbeitung',
    'services.motion.feature3': 'Visuelle Effekte',
    'services.motion.feature4': 'Interaktive Animationen',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was Kunden sagen',
    'testimonials.description': 'Entdecken Sie die Erfahrungen von Kunden, die mir ihre kreativen Projekte anvertraut haben.',
    'testimonials.trustedBy': 'Vertrauen mir',
    'testimonials.trustedByDesc': 'Unternehmen, die meiner Expertise vertrauen',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Lassen Sie uns',
    'contact.title2': 'Zusammenarbeiten',
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
    'hero.greeting': 'Ciao, sono Theo',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'Creative',
    'hero.title3': 'Specialista',
    'hero.description': 'Mediamatico con base in Svizzera. Creo identità visive autentiche, interfacce utente ed esperienze digitali che raccontano la tua storia.',
    'hero.contactMe': 'Contattami',
    'hero.watchDemo': 'Guarda Demo',
    'hero.yearsExperience': 'Anni di\nEsperienza',
    'hero.projectsDelivered': 'Progetti\nConsegnati',
    'hero.clientSatisfaction': 'Soddisfazione\nClienti',
    'hero.clientsWorldwide': 'Clienti\nMondiali',
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
    'about.description1': 'Mediamatico appassionato nella creazione di esperienze visive autentiche. Il mio approccio olistico al design mi permette di sviluppare soluzioni creative che raccontano la tua storia in modo unico.',
    'about.description2': 'Specializzato in identità di brand e design di interfacce, accompagno i miei clienti nella creazione di esperienze memorabili che lasciano il segno e generano risultati concreti.',
    'about.skill1.title': 'Design Creativo',
    'about.skill1.desc': 'Identità visiva, branding, design stampa',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfacce utente, esperienza utente, prototipazione',
    'about.skill3.title': 'Sviluppo',
    'about.skill3.desc': 'Frontend, design responsive, ottimizzazione',
    'about.skill4.title': 'Strategia',
    'about.skill4.desc': 'Strategia di brand, marketing digitale, consulenza',

    // Portfolio Section
    'portfolio.subtitle': 'I miei Lavori',
    'portfolio.title1': 'Progetti',
    'portfolio.title2': 'Selezionati',
    'portfolio.description': 'Scopri alcuni dei miei progetti recenti, dall\'identità di brand alle interfacce digitali.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Services Section
    'services.subtitle': 'Servizi',
    'services.title': 'Cosa faccio',
    'services.description': 'Soluzioni creative complete per dare vita ai tuoi progetti con precisione svizzera e attenzione ai dettagli.',
    'services.startProject': 'Inizia un Progetto',

    'services.brandIdentity.title': 'Identità di Brand',
    'services.brandIdentity.desc': 'Creazione di identità visiva completa che riflette i tuoi valori e si distingue nel mercato.',
    'services.brandIdentity.feature1': 'Design logo e variazioni',
    'services.brandIdentity.feature2': 'Palette colori e tipografia',
    'services.brandIdentity.feature3': 'Linee guida del brand',
    'services.brandIdentity.feature4': 'Applicazioni stampa e digitali',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfacce utente intuitive ed estetiche che ottimizzano l\'esperienza utente e le conversioni.',
    'services.uiux.feature1': 'Ricerca utenti e personas',
    'services.uiux.feature2': 'Wireframe e prototipi',
    'services.uiux.feature3': 'Design interfaccia',
    'services.uiux.feature4': 'Test di usabilità',

    'services.webDev.title': 'Sviluppo Web',
    'services.webDev.desc': 'Siti web moderni, responsive e ottimizzati per un\'esperienza utente eccezionale.',
    'services.webDev.feature1': 'Sviluppo responsive',
    'services.webDev.feature2': 'Ottimizzazione prestazioni',
    'services.webDev.feature3': 'SEO e accessibilità',
    'services.webDev.feature4': 'Integrazione CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Applicazioni mobile native progettate per un\'esperienza utente ottimale su tutti i dispositivi.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Prototipi interattivi',
    'services.mobile.feature3': 'Ottimizzazione App Store',
    'services.mobile.feature4': 'Test utente',

    'services.creative.title': 'Direzione Creativa',
    'services.creative.desc': 'Strategia creativa globale per assicurare coerenza visiva su tutti i tuoi canali di comunicazione.',
    'services.creative.feature1': 'Strategia creativa',
    'services.creative.feature2': 'Art direction',
    'services.creative.feature3': 'Direzione fotografica',
    'services.creative.feature4': 'Creazione campagne',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animazioni dinamiche e motion graphics che danno vita ai tuoi contenuti e catturano il tuo pubblico.',
    'services.motion.feature1': 'Animazioni 2D/3D',
    'services.motion.feature2': 'Editing video',
    'services.motion.feature3': 'Effetti visivi',
    'services.motion.feature4': 'Animazioni interattive',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa dicono i Clienti',
    'testimonials.description': 'Scopri le esperienze dei clienti che mi hanno affidato i loro progetti creativi.',
    'testimonials.trustedBy': 'Si fidano di me',
    'testimonials.trustedByDesc': 'Aziende che hanno fiducia nella mia esperienza',

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
    'hero.greeting': 'Olá, eu sou Theo',
    'hero.title1': 'Soluções',
    'hero.title2': 'Criativas',
    'hero.title3': 'Especialista',
    'hero.description': 'Mediamático baseado na Suíça. Crio identidades visuais autênticas, interfaces de usuário e experiências digitais que contam sua história.',
    'hero.contactMe': 'Entre em Contato',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Anos de\nExperiência',
    'hero.projectsDelivered': 'Projetos\nEntregues',
    'hero.clientSatisfaction': 'Satisfação\ndo Cliente',
    'hero.clientsWorldwide': 'Clientes\nMundiais',
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
    'about.description1': 'Mediamático apaixonado por criar experiências visuais autênticas. Minha abordagem holística do design me permite desenvolver soluções criativas que contam sua história de forma única.',
    'about.description2': 'Especializado em identidade de marca e design de interface, acompanho meus clientes na criação de experiências memoráveis que marcam e geram resultados concretos.',
    'about.skill1.title': 'Design Criativo',
    'about.skill1.desc': 'Identidade visual, branding, design gráfico',
    'about.skill2.title': 'Design UI/UX',
    'about.skill2.desc': 'Interfaces de usuário, experiência do usuário, prototipagem',
    'about.skill3.title': 'Desenvolvimento',
    'about.skill3.desc': 'Frontend, design responsivo, otimização',
    'about.skill4.title': 'Estratégia',
    'about.skill4.desc': 'Estratégia de marca, marketing digital, consultoria',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Trabalhos',
    'portfolio.title1': 'Projetos',
    'portfolio.title2': 'Selecionados',
    'portfolio.description': 'Descubra alguns dos meus projetos recentes, desde identidade de marca até interfaces digitais.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Services Section
    'services.subtitle': 'Serviços',
    'services.title': 'O que eu faço',
    'services.description': 'Soluções criativas completas para dar vida aos seus projetos com precisão suíça e atenção aos detalhes.',
    'services.startProject': 'Iniciar um Projeto',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Criação de identidade visual completa que reflete seus valores e se destaca no mercado.',
    'services.brandIdentity.feature1': 'Design de logo e variações',
    'services.brandIdentity.feature2': 'Paleta de cores e tipografia',
    'services.brandIdentity.feature3': 'Manual da marca',
    'services.brandIdentity.feature4': 'Aplicações impressas e digitais',

    'services.uiux.title': 'Design UI/UX',
    'services.uiux.desc': 'Interfaces de usuário intuitivas e estéticas que otimizam a experiência do usuário e conversões.',
    'services.uiux.feature1': 'Pesquisa de usuários e personas',
    'services.uiux.feature2': 'Wireframes e protótipos',
    'services.uiux.feature3': 'Design de interface',
    'services.uiux.feature4': 'Testes de usabilidade',

    'services.webDev.title': 'Desenvolvimento Web',
    'services.webDev.desc': 'Sites modernos, responsivos e otimizados para uma experiência de usuário excepcional.',
    'services.webDev.feature1': 'Desenvolvimento responsivo',
    'services.webDev.feature2': 'Otimização de performance',
    'services.webDev.feature3': 'SEO e acessibilidade',
    'services.webDev.feature4': 'Integração CMS',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Aplicações móveis nativas projetadas para experiência de usuário otimizada em todos os dispositivos.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Protótipos interativos',
    'services.mobile.feature3': 'Otimização App Store',
    'services.mobile.feature4': 'Testes de usuário',

    'services.creative.title': 'Direção Criativa',
    'services.creative.desc': 'Estratégia criativa global para garantir consistência visual em todos os seus canais de comunicação.',
    'services.creative.feature1': 'Estratégia criativa',
    'services.creative.feature2': 'Direção de arte',
    'services.creative.feature3': 'Direção fotográfica',
    'services.creative.feature4': 'Criação de campanhas',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animações dinâmicas e motion graphics que dão vida ao seu conteúdo e cativam sua audiência.',
    'services.motion.feature1': 'Animações 2D/3D',
    'services.motion.feature2': 'Edição de vídeo',
    'services.motion.feature3': 'Efeitos visuais',
    'services.motion.feature4': 'Animações interativas',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que dizem os Clientes',
    'testimonials.description': 'Descubra as experiências de clientes que confiaram em mim para seus projetos criativos.',
    'testimonials.trustedBy': 'Confiam em mim',
    'testimonials.trustedByDesc': 'Empresas que confiaram na minha expertise',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos Trabalhar',
    'contact.title2': 'Juntos',
    'contact.description': 'Pronto para dar vida ao seu projeto? Vamos conversar sobre sua visão e ver como podemos realizá-la.',
    'contact.getInTouch': 'Vamos nos Conectar',
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
    'nav.work': 'Punimet',
    'nav.services': 'Shërbimet',
    'nav.contact': 'Kontakti',
    'nav.letsTalk': 'Le të flasim',

    // Hero Section
    'hero.subtitle': 'Zgjidhje Kreative',
    'hero.greeting': 'Përshëndetje, unë jam Theo',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'Kreative',
    'hero.title3': 'Specialist',
    'hero.description': 'Mediamatiçien i bazuar në Zvicër. Krijoj identitete vizuale autentike, ndërfaqe përdoruesish dhe përvojat dixhitale që tregojnë historinë tuaj.',
    'hero.contactMe': 'Më kontaktoni',
    'hero.watchDemo': 'Shiko Demo',
    'hero.yearsExperience': 'Vite\nPërvojë',
    'hero.projectsDelivered': 'Projekte\nDorëzuar',
    'hero.clientSatisfaction': 'Kënaqësia e\nKlientit',
    'hero.clientsWorldwide': 'Klientë\nBotërorë',
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
    'about.description1': 'Mediamatiçien i pasionuar për krijimin e përvojave vizuale autentike. Qasja ime holistike ndaj dizajnit më lejon të zhvilloj zgjidhje kreative që tregojnë historinë tuaj në mënyrë unike.',
    'about.description2': 'I specializuar në identitetin e markës dhe dizajnin e ndërfaqes, i ndihmoj klientët e mi në krijimin e përvojave të paharrueshme që lënë gjurmë dhe gjenerojnë rezultate konkrete.',
    'about.skill1.title': 'Dizajni Kreativ',
    'about.skill1.desc': 'Identiteti vizual, branding, dizajni grafik',
    'about.skill2.title': 'Dizajni UI/UX',
    'about.skill2.desc': 'Ndërfaqet e përdoruesit, përvoja e përdoruesit, prototipimi',
    'about.skill3.title': 'Zhvillimi',
    'about.skill3.desc': 'Frontend, dizajni responsive, optimizimi',
    'about.skill4.title': 'Strategjia',
    'about.skill4.desc': 'Strategjia e markës, marketingu dixhital, konsulenca',

    // Portfolio Section
    'portfolio.subtitle': 'Punimet e Mia',
    'portfolio.title1': 'Projekte',
    'portfolio.title2': 'të Zgjedhura',
    'portfolio.description': 'Zbuloni disa nga projektet e mia të fundit, nga identiteti i markës deri te ndërfaqet dixhitale.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Services Section
    'services.subtitle': 'Shërbimet',
    'services.title': 'Çfarë bëj',
    'services.description': 'Zgjidhje kreative të plota për t\'i dhënë jetë projekteve tuaja me precizionin zviceran dhe vëmendjen ndaj detajeve.',
    'services.startProject': 'Fillo një Projekt',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Krijimi i identitetit vizual të plotë që reflekton vlerat tuaja dhe dallon në treg.',
    'services.brandIdentity.feature1': 'Dizajni i logos dhe variacionet',
    'services.brandIdentity.feature2': 'Paleta e ngjyrave dhe tipografia',
    'services.brandIdentity.feature3': 'Udhëzimet e markës',
    'services.brandIdentity.feature4': 'Aplikacionet e shtypit dhe dixhitale',

    'services.uiux.title': 'Dizajni UI/UX',
    'services.uiux.desc': 'Ndërfaqe përdoruesi intuitive dhe estetike që optimizojnë përvojën e përdoruesit dhe konvertimet.',
    'services.uiux.feature1': 'Kërkimi i përdoruesve dhe personat',
    'services.uiux.feature2': 'Wireframes dhe prototipet',
    'services.uiux.feature3': 'Dizajni i ndërfaqes',
    'services.uiux.feature4': 'Testet e përdorshmërisë',

    'services.webDev.title': 'Zhvillimi Web',
    'services.webDev.desc': 'Faqe interneti moderne, responsive dhe të optimizuara për një përvojë të jashtëzakonshme përdoruesi.',
    'services.webDev.feature1': 'Zhvillimi responsive',
    'services.webDev.feature2': 'Optimizimi i performancës',
    'services.webDev.feature3': 'SEO dhe aksesueshmëria',
    'services.webDev.feature4': 'Integrimi CMS',

    'services.mobile.title': 'Dizajni Mobile',
    'services.mobile.desc': 'Aplikacione mobile native të dizajnuara për përvojë optimale përdoruesi në të gjitha pajisjet.',
    'services.mobile.feature1': 'Dizajni iOS dhe Android',
    'services.mobile.feature2': 'Prototipet interaktive',
    'services.mobile.feature3': 'Optimizimi i App Store',
    'services.mobile.feature4': 'Testet e përdoruesit',

    'services.creative.title': 'Drejtimi Kreativ',
    'services.creative.desc': 'Strategji kreative globale për të siguruar konsistencë vizuale në të gjitha kanalet tuaja të komunikimit.',
    'services.creative.feature1': 'Strategjia kreative',
    'services.creative.feature2': 'Drejtimi artistik',
    'services.creative.feature3': 'Drejtimi fotografik',
    'services.creative.feature4': 'Krijimi i fushatave',

    'services.motion.title': 'Motion Graphics',
    'services.motion.desc': 'Animacione dinamike dhe motion graphics që i japin jetë përmbajtjes suaj dhe tërheqin audiencën.',
    'services.motion.feature1': 'Animacionet 2D/3D',
    'services.motion.feature2': 'Editimi i videos',
    'services.motion.feature3': 'Efektet vizuale',
    'services.motion.feature4': 'Animacionet interaktive',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmitë',
    'testimonials.title': 'Çfarë thonë Klientët',
    'testimonials.description': 'Zbuloni përvojat e klientëve që më kanë besuar projektet e tyre kreative.',
    'testimonials.trustedBy': 'Më besojnë',
    'testimonials.trustedByDesc': 'Kompani që kanë besuar ekspertizën time',

    // Contact Section
    'contact.subtitle': 'Kontakti',
    'contact.title1': 'Le të Punojmë',
    'contact.title2': 'Së Bashku',
    'contact.description': 'Gati për t\'i dhënë jetë projektit tuaj? Le të diskutojmë vizionin tuaj dhe të shohim se si mund ta realizojmë.',
    'contact.getInTouch': 'Le të Lidhemi',
    'contact.getInTouchDesc': 'Jam gjithmonë i emocionuar për të diskutuar projekte të reja dhe mundësi kreative.',
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
    'footer.description': 'Specialist në zgjidhje kreative i bazuar në Zvicër. Krijoj përvojat vizuale autentike që tregojnë historinë tuaj.',
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

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('fr');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.split('-')[0] as Language;
    const supportedLanguages: Language[] = ['en', 'fr', 'es', 'ru', 'zh', 'ja', 'de', 'it', 'pt', 'sq'];
    const initialLanguage = savedLanguage || (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'fr');
    
    setLanguage(initialLanguage);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  const value: AppContextType = {
    theme,
    language,
    toggleTheme,
    setLanguage: handleSetLanguage,
    t
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}