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
    'hero.greeting': 'Yo, I\'m Theo Blondel.',
    'hero.title1': 'Creative',
    'hero.title2': 'solutions',
    'hero.title3': 'versatile',
    'hero.description': 'I\'m a media designer in Switzerland, and I transform your ideas into clean, impactful, and really stylish visual projects.\nIf you need a killer logo, a site that doesn\'t suck, or creative direction that makes sense... you\'re in the right place.\n\n🎯 Creative at heart, efficient in form.',
    'hero.contactMe': 'Let\'s talk?',
    'hero.watchDemo': 'Watch demo',
    'hero.yearsExperience': 'Years\nExperience',
    'hero.projectsDelivered': 'Projects\nDelivered',
    'hero.clientSatisfaction': 'Client\nSatisfaction',
    'hero.clientsWorldwide': 'Clients\nWorldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Logos that pop and visual identity that tells your story',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces that work and look good (even for your aunt)',
    'hero.service3.title': 'Creative Direction',
    'hero.service3.desc': 'You have ideas, I make them coherent and stylish',
    'hero.service4.title': 'Motion & Video',
    'hero.service4.desc': 'Content that moves well and gives rhythm to your visual communication',

    // About Section
    'about.subtitle': 'My Journey',
    'about.title1': 'Create, tinker, learn...',
    'about.title2': 'since 2016',
    'about.description1': 'I started like many: with YouTube montages at 10, head in pixels and sound effects.\nMinecraft, Fortnite, Call of... I spent hours testing, tinkering, looking for what works.',
    'about.description2': 'Then drawing came. Then media design. And there, I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people.\n\nSince then, I work on concrete projects with motivated people. I make sure everything is clear, smooth, professional — without ever forgetting that little extra something that gives personality.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Complete mastery of the Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Professional video editing and color grading',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': '3D modeling and animation',
    'about.skill4.title': 'figma (I know) – 100%',
    'about.skill4.desc': 'Interface design and prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'My Projects',
    'portfolio.title1': 'Some stuff',
    'portfolio.title2': 'I loved making',
    'portfolio.description': 'A selection of projects that showcase my approach and style. Each project tells a unique story.',
    'portfolio.viewAllBehance': 'See all on Behance',

    // Services Section
    'services.subtitle': 'What I Do',
    'services.title': 'What I can do for you',
    'services.description': 'Concrete services to transform your ideas into impactful visual results.',
    'services.startProject': 'Start a project',

    'services.brandIdentity.title': '🧬 Brand Identity',
    'services.brandIdentity.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'services.brandIdentity.feature1': 'Logo (pro, not on Canva)',
    'services.brandIdentity.feature2': 'Clear graphic charter',
    'services.brandIdentity.feature3': 'Coherent visual identity',
    'services.brandIdentity.feature4': 'Brand positioning that holds up',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Good design isn\'t just pretty. It has to work. I create simple, smooth, and pleasant interfaces to use (even for aunt Josiane).',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Clean wireframes',
    'services.uiux.feature3': 'Pixel-perfect mockups',
    'services.uiux.feature4': 'Tests to see if everything holds',

    'services.webDev.title': '🌐 Web Development',
    'services.webDev.desc': 'Modern and responsive websites that work on all devices.',
    'services.webDev.feature1': 'Responsive design',
    'services.webDev.feature2': 'Performance optimization',
    'services.webDev.feature3': 'SEO integration',
    'services.webDev.feature4': 'Easy maintenance',

    'services.mobile.title': '📱 Mobile Design',
    'services.mobile.desc': 'Your app deserves better than a default template. I make you a clear, intuitive, and pleasant interface to use on the subway.',
    'services.mobile.feature1': 'iOS & Android design',
    'services.mobile.feature2': 'Well-thought user journey',
    'services.mobile.feature3': 'Smooth onboarding',
    'services.mobile.feature4': 'Icons, menus, and all the little details that make the difference',

    'services.creative.title': '🧭 Creative Direction',
    'services.creative.desc': 'You have ideas, but you want everything to be aligned, clean and coherent? I take the wheel, you give me the direction.',
    'services.creative.feature1': 'Artistic direction',
    'services.creative.feature2': 'Visual strategy',
    'services.creative.feature3': 'Stylish but useful advice',
    'services.creative.feature4': 'Global project vision',

    'services.motion.title': '🎞 Motion Design & Video',
    'services.motion.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',
    'services.motion.feature1': 'Stylish logo animations',
    'services.motion.feature2': 'Dynamic video editing',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations and smooth effects',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What clients say',
    'testimonials.description': 'Feedback from people who trusted me with their projects.',
    'testimonials.trustedBy': 'Trusted by',
    'testimonials.trustedByDesc': 'Companies and entrepreneurs who chose my services',

    // Contact Section
    'contact.subtitle': 'Get in Touch',
    'contact.title1': 'Let\'s discuss?',
    'contact.title2': '',
    'contact.description': 'You have an idea? Need visual help? Or just want to know if it could work between us?\nWrite to me, I respond quickly (and always with pleasure).',
    'contact.getInTouch': 'Contact Information',
    'contact.getInTouchDesc': 'Ready to start your project? Let\'s talk about your vision and see how we can make it happen.',
    'contact.email': 'Email',
    'contact.emailDesc': 'For all inquiries and collaborations',
    'contact.location': 'Location',
    'contact.followMe': 'Follow Me',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Your Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What\'s this about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.sendBtn': 'Send Message',

    // Footer
    'footer.description': 'Creative media designer based in Switzerland, specializing in brand identity and interface design.',
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
    'nav.letsTalk': 'On en parle ?',

    // Hero Section
    'hero.subtitle': 'Solutions Créatives',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.\nSi t\'as besoin d\'un logo qui en jette, d\'un site qui fait pas fuir ou d\'une direction créative qui a du sens… t\'es au bon endroit.\n\n🎯 Créatif dans le fond, efficace dans la forme.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années\nd\'expérience',
    'hero.projectsDelivered': 'Projets\nréalisés',
    'hero.clientSatisfaction': 'Satisfaction\nclient',
    'hero.clientsWorldwide': 'Clients\ndans le monde',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Des logos qui claquent et une identité visuelle qui raconte ton histoire',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Des interfaces qui fonctionnent et qui sont belles (même pour tata Josiane)',
    'hero.service3.title': 'Direction Créative',
    'hero.service3.desc': 'Tu as les idées, je les rends cohérentes et stylées',
    'hero.service4.title': 'Motion & Vidéo',
    'hero.service4.desc': 'Du contenu qui bouge bien et qui donne du rythme à ta com\' visuelle',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'Créer, bidouiller, apprendre…',
    'about.title2': 'depuis 2016',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 10 ans, la tête dans les pixels et les effets sonores.\nMinecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.\n\nDepuis, je bosse sur des projets concrets avec des gens motivés. Je fais en sorte que tout soit clair, fluide, pro — sans jamais oublier le petit truc en plus qui donne de la personnalité.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Maîtrise complète de la Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Montage vidéo et étalonnage professionnel',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': 'Modélisation et animation 3D',
    'about.skill4.title': 'figma (je sais) – 100%',
    'about.skill4.desc': 'Design d\'interface et prototypage',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Quelques trucs que',
    'portfolio.title2': 'j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent mon approche et mon style. Chaque projet raconte une histoire unique.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': 'Ce que je fais',
    'services.title': 'Ce que je peux faire pour toi',
    'services.description': 'Des services concrets pour transformer tes idées en résultats visuels impactants.',
    'services.startProject': 'Démarrer un projet',

    'services.brandIdentity.title': '🧬 Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes propres',
    'services.uiux.feature3': 'Maquettes pixel-perfect',
    'services.uiux.feature4': 'Tests pour voir si tout tient',

    'services.webDev.title': '🌐 Développement Web',
    'services.webDev.desc': 'Des sites modernes et responsives qui fonctionnent sur tous les appareils.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Optimisation des performances',
    'services.webDev.feature3': 'Intégration SEO',
    'services.webDev.feature4': 'Maintenance facile',

    'services.mobile.title': '📱 Design Mobile',
    'services.mobile.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.mobile.feature1': 'Design iOS & Android',
    'services.mobile.feature2': 'Parcours utilisateur bien pensé',
    'services.mobile.feature3': 'Onboarding fluide',
    'services.mobile.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    'services.creative.title': '🧭 Direction Créative',
    'services.creative.desc': 'T\'as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.creative.feature1': 'Direction artistique',
    'services.creative.feature2': 'Stratégie visuelle',
    'services.creative.feature3': 'Conseils stylés mais utiles',
    'services.creative.feature4': 'Vision globale du projet',

    'services.motion.title': '🎞 Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce qu\'en disent mes clients',
    'testimonials.description': 'Les retours de personnes qui m\'ont fait confiance pour leurs projets.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Des entreprises et entrepreneurs qui ont choisi mes services',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'On discute ?',
    'contact.title2': '',
    'contact.description': 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?\nÉcris-moi, je réponds vite (et toujours avec plaisir).',
    'contact.getInTouch': 'Informations de Contact',
    'contact.getInTouchDesc': 'Prêt à démarrer ton projet ? Parlons de ta vision et voyons comment nous pouvons la concrétiser.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Pour toutes demandes et collaborations',
    'contact.location': 'Localisation',
    'contact.followMe': 'Me Suivre',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Ton Nom',
    'contact.namePlaceholder': 'Entre ton nom',
    'contact.emailPlaceholder': 'Entre ton email',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'De quoi ça parle ?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parle-moi de ton projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Médiamaticien créatif basé en Suisse, spécialisé en identité de marque et design d\'interface.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'UI/UX Design',
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
    'nav.letsTalk': '¿Hablamos?',

    // Hero Section
    'hero.subtitle': 'Soluciones Creativas',
    'hero.greeting': 'Ey, soy Theo Blondel.',
    'hero.title1': 'Soluciones',
    'hero.title2': 'creativas',
    'hero.title3': 'versátiles',
    'hero.description': 'Soy diseñador multimedia en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente estilosos.\nSi necesitas un logo que mole, un sitio que no apeste o una dirección creativa que tenga sentido... estás en el lugar correcto.\n\n🎯 Creativo en el fondo, eficiente en la forma.',
    'hero.contactMe': '¿Hablamos?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Años de\nExperiencia',
    'hero.projectsDelivered': 'Proyectos\nEntregados',
    'hero.clientSatisfaction': 'Satisfacción\ndel Cliente',
    'hero.clientsWorldwide': 'Clientes\nen el Mundo',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Logos que molan y identidad visual que cuenta tu historia',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces que funcionan y se ven bien (incluso para tu tía)',
    'hero.service3.title': 'Dirección Creativa',
    'hero.service3.desc': 'Tienes las ideas, yo las hago coherentes y estilosas',
    'hero.service4.title': 'Motion y Video',
    'hero.service4.desc': 'Contenido que se mueve bien y da ritmo a tu comunicación visual',

    // About Section
    'about.subtitle': 'Mi Trayectoria',
    'about.title1': 'Crear, trastear, aprender...',
    'about.title2': 'desde 2016',
    'about.description1': 'Empecé como muchos: con montajes de YouTube a los 10 años, la cabeza en los píxeles y efectos de sonido.\nMinecraft, Fortnite, Call of... Pasé horas probando, trasteando, buscando lo que funciona.',
    'about.description2': 'Luego llegó el dibujo. Después, el diseño multimedia. Y ahí lo pillé: quiero hacer esto. Crear. Diseñar. Dar vida a ideas visuales que hablen a la gente.\n\nDesde entonces, trabajo en proyectos concretos con gente motivada. Me aseguro de que todo sea claro, fluido, profesional — sin olvidar nunca ese toque extra que da personalidad.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Dominio completo de Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Edición de video y corrección de color profesional',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': 'Modelado y animación 3D',
    'about.skill4.title': 'figma (lo sé) – 100%',
    'about.skill4.desc': 'Diseño de interfaces y prototipado',

    // Portfolio Section
    'portfolio.subtitle': 'Mis Proyectos',
    'portfolio.title1': 'Algunas cosas que',
    'portfolio.title2': 'me gustó hacer',
    'portfolio.description': 'Una selección de proyectos que muestran mi enfoque y estilo. Cada proyecto cuenta una historia única.',
    'portfolio.viewAllBehance': 'Ver todo en Behance',

    // Services Section
    'services.subtitle': 'Lo que hago',
    'services.title': 'Lo que puedo hacer por ti',
    'services.description': 'Servicios concretos para transformar tus ideas en resultados visuales impactantes.',
    'services.startProject': 'Empezar un proyecto',

    'services.brandIdentity.title': '🧬 Identidad de Marca',
    'services.brandIdentity.desc': '¿Necesitas un logo que mole y una imagen que cuente quién eres? Te ayudo a construir una identidad real — no solo un logo rápido.',
    'services.brandIdentity.feature1': 'Logo (profesional, no en Canva)',
    'services.brandIdentity.feature2': 'Manual gráfico claro',
    'services.brandIdentity.feature3': 'Identidad visual coherente',
    'services.brandIdentity.feature4': 'Posicionamiento de marca sólido',

    'services.uiux.title': '🧠 Diseño UI/UX',
    'services.uiux.desc': 'Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar (incluso para tu tía).',
    'services.uiux.feature1': 'Investigación de usuarios',
    'services.uiux.feature2': 'Wireframes limpios',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Pruebas para ver si todo funciona',

    'services.webDev.title': '🌐 Desarrollo Web',
    'services.webDev.desc': 'Sitios web modernos y responsivos que funcionan en todos los dispositivos.',
    'services.webDev.feature1': 'Diseño responsivo',
    'services.webDev.feature2': 'Optimización de rendimiento',
    'services.webDev.feature3': 'Integración SEO',
    'services.webDev.feature4': 'Mantenimiento fácil',

    'services.mobile.title': '📱 Diseño Mobile',
    'services.mobile.desc': 'Tu app merece algo mejor que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.',
    'services.mobile.feature1': 'Diseño iOS y Android',
    'services.mobile.feature2': 'Recorrido de usuario bien pensado',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Iconos, menús y todos los detalles que marcan la diferencia',

    'services.creative.title': '🧭 Dirección Creativa',
    'services.creative.desc': 'Tienes las ideas, pero quieres que todo esté alineado, limpio y coherente? Tomo el volante, tú me das la dirección.',
    'services.creative.feature1': 'Dirección artística',
    'services.creative.feature2': 'Estrategia visual',
    'services.creative.feature3': 'Consejos estilosos pero útiles',
    'services.creative.feature4': 'Visión global del proyecto',

    'services.motion.title': '🎞 Motion Design y Video',
    'services.motion.desc': 'Contenido que se mueve bien. Edito, animo, doy ritmo a tu comunicación visual.',
    'services.motion.feature1': 'Animaciones de logos estilosas',
    'services.motion.feature2': 'Montajes de video dinámicos',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animaciones y efectos suaves',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo que dicen mis clientes',
    'testimonials.description': 'Comentarios de personas que confiaron en mí para sus proyectos.',
    'testimonials.trustedBy': 'Confían en mí',
    'testimonials.trustedByDesc': 'Empresas y emprendedores que eligieron mis servicios',

    // Contact Section
    'contact.subtitle': 'Contacto',
    'contact.title1': '¿Hablamos?',
    'contact.title2': '',
    'contact.description': '¿Tienes una idea? ¿Necesitas ayuda visual? ¿O solo quieres saber si podríamos trabajar juntos?\nEscríbeme, respondo rápido (y siempre con gusto).',
    'contact.getInTouch': 'Información de Contacto',
    'contact.getInTouchDesc': '¿Listo para empezar tu proyecto? Hablemos de tu visión y veamos cómo podemos hacerla realidad.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Para todas las consultas y colaboraciones',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme',
    'contact.sendMessage': 'Enviar Mensaje',
    'contact.name': 'Tu Nombre',
    'contact.namePlaceholder': 'Introduce tu nombre',
    'contact.emailPlaceholder': 'Introduce tu email',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿De qué se trata?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.sendBtn': 'Enviar mensaje',

    // Footer
    'footer.description': 'Diseñador multimedia creativo con base en Suiza, especializado en identidad de marca y diseño de interfaces.',
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
    'nav.about': 'Обо мне',
    'nav.work': 'Работы',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.letsTalk': 'Поговорим?',

    // Hero Section
    'hero.subtitle': 'Креативные Решения',
    'hero.greeting': 'Привет, я Тео Блондель.',
    'hero.title1': 'Креативные',
    'hero.title2': 'решения',
    'hero.title3': 'универсальные',
    'hero.description': 'Я медиадизайнер из Швейцарии, и я превращаю твои идеи в чистые, впечатляющие и действительно стильные визуальные проекты.\nЕсли тебе нужен крутой логотип, сайт, который не отстой, или креативное направление, которое имеет смысл... ты в правильном месте.\n\n🎯 Креативный по сути, эффективный по форме.',
    'hero.contactMe': 'Поговорим?',
    'hero.watchDemo': 'Смотреть демо',
    'hero.yearsExperience': 'Лет\nОпыта',
    'hero.projectsDelivered': 'Проектов\nВыполнено',
    'hero.clientSatisfaction': 'Удовлетворенность\nКлиентов',
    'hero.clientsWorldwide': 'Клиентов\nПо Всему Миру',
    'hero.service1.title': 'Фирменный Стиль',
    'hero.service1.desc': 'Логотипы, которые цепляют, и визуальная идентичность, которая рассказывает твою историю',
    'hero.service2.title': 'UI/UX Дизайн',
    'hero.service2.desc': 'Интерфейсы, которые работают и выглядят хорошо (даже для твоей тети)',
    'hero.service3.title': 'Креативное Направление',
    'hero.service3.desc': 'У тебя есть идеи, я делаю их последовательными и стильными',
    'hero.service4.title': 'Моушн и Видео',
    'hero.service4.desc': 'Контент, который хорошо движется и задает ритм твоей визуальной коммуникации',

    // About Section
    'about.subtitle': 'Мой Путь',
    'about.title1': 'Создавать, возиться, учиться...',
    'about.title2': 'с 2016 года',
    'about.description1': 'Я начинал как многие: с монтажей YouTube в 10 лет, с головой в пикселях и звуковых эффектах.\nMinecraft, Fortnite, Call of... Я проводил часы, тестируя, возясь, ища то, что работает.',
    'about.description2': 'Потом пришло рисование. Затем медиадизайн. И тут я понял: я хочу заниматься этим. Создавать. Проектировать. Воплощать визуальные идеи, которые говорят с людьми.\n\nС тех пор я работаю над конкретными проектами с мотивированными людьми. Я забочусь о том, чтобы все было ясно, плавно, профессионально — никогда не забывая о той маленькой изюминке, которая придает индивидуальность.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Полное владение Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Профессиональный видеомонтаж и цветокоррекция',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': '3D моделирование и анимация',
    'about.skill4.title': 'figma (я знаю) – 100%',
    'about.skill4.desc': 'Дизайн интерфейсов и прототипирование',

    // Portfolio Section
    'portfolio.subtitle': 'Мои Проекты',
    'portfolio.title1': 'Некоторые вещи, которые',
    'portfolio.title2': 'мне понравилось делать',
    'portfolio.description': 'Подборка проектов, которые показывают мой подход и стиль. Каждый проект рассказывает уникальную историю.',
    'portfolio.viewAllBehance': 'Смотреть все на Behance',

    // Services Section
    'services.subtitle': 'Что я делаю',
    'services.title': 'Что я могу сделать для тебя',
    'services.description': 'Конкретные услуги для превращения твоих идей в впечатляющие визуальные результаты.',
    'services.startProject': 'Начать проект',

    'services.brandIdentity.title': '🧬 Фирменный Стиль',
    'services.brandIdentity.desc': 'Нужен логотип, который цепляет, и образ, который рассказывает, кто ты? Я помогу тебе построить настоящую идентичность — не просто быстрый логотип.',
    'services.brandIdentity.feature1': 'Логотип (профессиональный, не в Canva)',
    'services.brandIdentity.feature2': 'Четкий графический стандарт',
    'services.brandIdentity.feature3': 'Последовательная визуальная идентичность',
    'services.brandIdentity.feature4': 'Позиционирование бренда, которое работает',

    'services.uiux.title': '🧠 UI/UX Дизайн',
    'services.uiux.desc': 'Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы (даже для твоей тети).',
    'services.uiux.feature1': 'Исследование пользователей',
    'services.uiux.feature2': 'Чистые wireframes',
    'services.uiux.feature3': 'Pixel-perfect макеты',
    'services.uiux.feature4': 'Тесты, чтобы проверить, что все работает',

    'services.webDev.title': '🌐 Веб-разработка',
    'services.webDev.desc': 'Современные и адаптивные веб-сайты, которые работают на всех устройствах.',
    'services.webDev.feature1': 'Адаптивный дизайн',
    'services.webDev.feature2': 'Оптимизация производительности',
    'services.webDev.feature3': 'SEO интеграция',
    'services.webDev.feature4': 'Легкое обслуживание',

    'services.mobile.title': '📱 Мобильный Дизайн',
    'services.mobile.desc': 'Твое приложение заслуживает лучшего, чем стандартный шаблон. Я создам тебе четкий, интуитивный и приятный в использовании интерфейс в метро.',
    'services.mobile.feature1': 'Дизайн для iOS и Android',
    'services.mobile.feature2': 'Хорошо продуманный пользовательский путь',
    'services.mobile.feature3': 'Плавный onboarding',
    'services.mobile.feature4': 'Иконки, меню и все мелкие детали, которые делают разницу',

    'services.creative.title': '🧭 Креативное Направление',
    'services.creative.desc': 'У тебя есть идеи, но ты хочешь, чтобы все было выровнено, чисто и последовательно? Я беру руль, ты даешь направление.',
    'services.creative.feature1': 'Художественное направление',
    'services.creative.feature2': 'Визуальная стратегия',
    'services.creative.feature3': 'Стильные, но полезные советы',
    'services.creative.feature4': 'Глобальное видение проекта',

    'services.motion.title': '🎞 Моушн Дизайн и Видео',
    'services.motion.desc': 'Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм твоей визуальной коммуникации.',
    'services.motion.feature1': 'Стильные анимации логотипов',
    'services.motion.feature2': 'Динамичный видеомонтаж',
    'services.motion.feature3': 'Тизеры, трейлеры, reels, stories...',
    'services.motion.feature4': 'Микро-анимации и плавные эффекты',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что говорят мои клиенты',
    'testimonials.description': 'Отзывы людей, которые доверили мне свои проекты.',
    'testimonials.trustedBy': 'Мне доверяют',
    'testimonials.trustedByDesc': 'Компании и предприниматели, которые выбрали мои услуги',

    // Contact Section
    'contact.subtitle': 'Контакты',
    'contact.title1': 'Поговорим?',
    'contact.title2': '',
    'contact.description': 'У тебя есть идея? Нужна визуальная помощь? Или просто хочешь узнать, можем ли мы работать вместе?\nНапиши мне, я отвечаю быстро (и всегда с удовольствием).',
    'contact.getInTouch': 'Контактная Информация',
    'contact.getInTouchDesc': 'Готов начать свой проект? Давай поговорим о твоем видении и посмотрим, как мы можем его воплотить.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Для всех запросов и сотрудничества',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайся',
    'contact.sendMessage': 'Отправить Сообщение',
    'contact.name': 'Твое Имя',
    'contact.namePlaceholder': 'Введи свое имя',
    'contact.emailPlaceholder': 'Введи свой email',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'О чем речь?',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажи мне о своем проекте...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer
    'footer.description': 'Креативный медиадизайнер из Швейцарии, специализирующийся на фирменном стиле и дизайне интерфейсов.',
    'footer.quickLinks': 'Быстрые Ссылки',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный Стиль',
    'footer.uiuxDesign': 'UI/UX Дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн Графика',
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
    'nav.letsTalk': '聊聊？',

    // Hero Section
    'hero.subtitle': '创意解决方案',
    'hero.greeting': '嘿，我是Theo Blondel。',
    'hero.title1': '创意',
    'hero.title2': '解决方案',
    'hero.title3': '多样化',
    'hero.description': '我是瑞士的媒体设计师，我把你的想法转化为干净、有影响力、真正时尚的视觉项目。\n如果你需要一个很棒的logo、一个不糟糕的网站或有意义的创意指导...你来对地方了。\n\n🎯 内容创意，形式高效。',
    'hero.contactMe': '聊聊？',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年\n经验',
    'hero.projectsDelivered': '项目\n完成',
    'hero.clientSatisfaction': '客户\n满意度',
    'hero.clientsWorldwide': '全球\n客户',
    'hero.service1.title': '品牌标识',
    'hero.service1.desc': '出色的logo和讲述你故事的视觉标识',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '功能性强且美观的界面（连你阿姨都会用）',
    'hero.service3.title': '创意指导',
    'hero.service3.desc': '你有想法，我让它们连贯且时尚',
    'hero.service4.title': '动效和视频',
    'hero.service4.desc': '动感十足的内容，为你的视觉传播增添节奏',

    // About Section
    'about.subtitle': '我的历程',
    'about.title1': '创造、折腾、学习...',
    'about.title2': '自2016年',
    'about.description1': '我像很多人一样开始：10岁时制作YouTube剪辑，沉浸在像素和音效中。\nMinecraft、Fortnite、Call of...我花了几个小时测试、折腾、寻找有效的方法。',
    'about.description2': '然后绘画来了。接着是媒体设计。就在那时，我明白了：我想做这个。创造。设计。让视觉想法活起来，与人们对话。\n\n从那时起，我与有动力的人一起做具体的项目。我确保一切都清晰、流畅、专业——永远不忘记那个给予个性的小细节。',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': '完全掌握Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': '专业视频编辑和调色',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': '3D建模和动画',
    'about.skill4.title': 'figma（我知道）– 100%',
    'about.skill4.desc': '界面设计和原型制作',

    // Portfolio Section
    'portfolio.subtitle': '我的项目',
    'portfolio.title1': '一些我',
    'portfolio.title2': '喜欢做的东西',
    'portfolio.description': '展示我的方法和风格的项目精选。每个项目都讲述一个独特的故事。',
    'portfolio.viewAllBehance': '在Behance查看全部',

    // Services Section
    'services.subtitle': '我做什么',
    'services.title': '我能为你做什么',
    'services.description': '将你的想法转化为有影响力的视觉结果的具体服务。',
    'services.startProject': '开始项目',

    'services.brandIdentity.title': '🧬 品牌标识',
    'services.brandIdentity.desc': '需要一个很棒的logo和讲述你是谁的形象？我帮你建立真正的身份——不只是快速的logo。',
    'services.brandIdentity.feature1': 'Logo（专业的，不是Canva）',
    'services.brandIdentity.feature2': '清晰的图形标准',
    'services.brandIdentity.feature3': '连贯的视觉标识',
    'services.brandIdentity.feature4': '站得住脚的品牌定位',

    'services.uiux.title': '🧠 UI/UX设计',
    'services.uiux.desc': '好的设计不只是漂亮。它必须有效。我创建简单、流畅、使用愉快的界面（连你阿姨都能用）。',
    'services.uiux.feature1': '用户研究',
    'services.uiux.feature2': '干净的线框图',
    'services.uiux.feature3': '像素完美的模型',
    'services.uiux.feature4': '测试看是否一切都有效',

    'services.webDev.title': '🌐 网页开发',
    'services.webDev.desc': '在所有设备上都能工作的现代响应式网站。',
    'services.webDev.feature1': '响应式设计',
    'services.webDev.feature2': '性能优化',
    'services.webDev.feature3': 'SEO集成',
    'services.webDev.feature4': '易于维护',

    'services.mobile.title': '📱 移动设计',
    'services.mobile.desc': '你的应用值得比默认模板更好的东西。我为你制作清晰、直观、在地铁上使用愉快的界面。',
    'services.mobile.feature1': 'iOS和Android设计',
    'services.mobile.feature2': '深思熟虑的用户旅程',
    'services.mobile.feature3': '流畅的引导',
    'services.mobile.feature4': '图标、菜单和所有产生差异的小细节',

    'services.creative.title': '🧭 创意指导',
    'services.creative.desc': '你有想法，但你希望一切都对齐、干净、连贯？我来掌舵，你给我方向。',
    'services.creative.feature1': '艺术指导',
    'services.creative.feature2': '视觉策略',
    'services.creative.feature3': '时尚但有用的建议',
    'services.creative.feature4': '项目的全球视野',

    'services.motion.title': '🎞 动效设计和视频',
    'services.motion.desc': '动感十足的内容。我编辑、动画，为你的视觉传播增添节奏。',
    'services.motion.feature1': '时尚的logo动画',
    'services.motion.feature2': '动态视频编辑',
    'services.motion.feature3': '预告片、trailer、reels、stories...',
    'services.motion.feature4': '微动画和流畅效果',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '我的客户怎么说',
    'testimonials.description': '信任我做他们项目的人的反馈。',
    'testimonials.trustedBy': '他们信任我',
    'testimonials.trustedByDesc': '选择我服务的公司和企业家',

    // Contact Section
    'contact.subtitle': '联系',
    'contact.title1': '聊聊？',
    'contact.title2': '',
    'contact.description': '你有想法？需要视觉帮助？或者只是想知道我们是否能合作？\n写信给我，我回复很快（总是很乐意）。',
    'contact.getInTouch': '联系信息',
    'contact.getInTouchDesc': '准备开始你的项目？让我们谈谈你的愿景，看看我们如何实现它。',
    'contact.email': '邮箱',
    'contact.emailDesc': '所有询问和合作',
    'contact.location': '位置',
    'contact.followMe': '关注我',
    'contact.sendMessage': '发送消息',
    'contact.name': '你的姓名',
    'contact.namePlaceholder': '输入你的姓名',
    'contact.emailPlaceholder': '输入你的邮箱',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '这是关于什么的？',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我你的项目...',
    'contact.sendBtn': '发送消息',

    // Footer
    'footer.description': '瑞士创意媒体设计师，专门从事品牌标识和界面设计。',
    'footer.quickLinks': '快速链接',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌标识',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': '动效图形',
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
    'nav.letsTalk': '話しましょう？',

    // Hero Section
    'hero.subtitle': 'クリエイティブソリューション',
    'hero.greeting': 'やあ、僕はTheo Blondelです。',
    'hero.title1': 'クリエイティブ',
    'hero.title2': 'ソリューション',
    'hero.title3': '多様な',
    'hero.description': '僕はスイスのメディアデザイナーで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変えます。\nかっこいいロゴ、ダサくないサイト、意味のあるクリエイティブディレクションが必要なら...正しい場所にいます。\n\n🎯 本質的にクリエイティブ、形式的に効率的。',
    'hero.contactMe': '話しましょう？',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の\n経験',
    'hero.projectsDelivered': 'プロジェクト\n完了',
    'hero.clientSatisfaction': 'クライアント\n満足度',
    'hero.clientsWorldwide': '世界中の\nクライアント',
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': 'インパクトのあるロゴとあなたの物語を語るビジュアルアイデンティティ',
    'hero.service2.title': 'UI/UXデザイン',
    'hero.service2.desc': '機能的で美しいインターフェース（あなたの叔母さんでも使える）',
    'hero.service3.title': 'クリエイティブディレクション',
    'hero.service3.desc': 'あなたにはアイデアがある、僕がそれを一貫性があってスタイリッシュにします',
    'hero.service4.title': 'モーションとビデオ',
    'hero.service4.desc': 'よく動くコンテンツで、あなたのビジュアルコミュニケーションにリズムを与えます',

    // About Section
    'about.subtitle': '僕の歩み',
    'about.title1': '作る、いじる、学ぶ...',
    'about.title2': '2016年から',
    'about.description1': '僕は多くの人と同じように始めました：10歳でYouTubeの編集、ピクセルと音響効果に夢中でした。\nMinecraft、Fortnite、Call of...何時間もテストし、いじり、何が機能するかを探していました。',
    'about.description2': 'それから絵が来ました。次にメディアデザイン。そしてそこで理解しました：これをやりたい。作る。デザインする。人々に語りかけるビジュアルアイデアに命を吹き込む。\n\nそれ以来、やる気のある人々と具体的なプロジェクトに取り組んでいます。すべてが明確で、スムーズで、プロフェッショナルであることを確認します—個性を与える小さな特別なものを決して忘れることなく。',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Creative Suiteの完全な習得',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'プロフェッショナルなビデオ編集とカラーグレーディング',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': '3Dモデリングとアニメーション',
    'about.skill4.title': 'figma（知ってます）– 100%',
    'about.skill4.desc': 'インターフェースデザインとプロトタイピング',

    // Portfolio Section
    'portfolio.subtitle': '僕のプロジェクト',
    'portfolio.title1': '僕が',
    'portfolio.title2': '作るのが好きだったもの',
    'portfolio.description': '僕のアプローチとスタイルを示すプロジェクトの選択。各プロジェクトはユニークな物語を語ります。',
    'portfolio.viewAllBehance': 'Behanceですべて見る',

    // Services Section
    'services.subtitle': '僕がすること',
    'services.title': 'あなたのためにできること',
    'services.description': 'あなたのアイデアをインパクトのあるビジュアル結果に変える具体的なサービス。',
    'services.startProject': 'プロジェクトを始める',

    'services.brandIdentity.title': '🧬 ブランドアイデンティティ',
    'services.brandIdentity.desc': 'インパクトのあるロゴとあなたが誰であるかを語るイメージが必要？本当のアイデンティティを構築するお手伝いをします—ただの急ごしらえのロゴではなく。',
    'services.brandIdentity.feature1': 'ロゴ（プロ、Canvaではない）',
    'services.brandIdentity.feature2': '明確なグラフィック憲章',
    'services.brandIdentity.feature3': '一貫したビジュアルアイデンティティ',
    'services.brandIdentity.feature4': '持続するブランドポジショニング',

    'services.uiux.title': '🧠 UI/UXデザイン',
    'services.uiux.desc': '良いデザインは美しいだけではありません。機能しなければなりません。シンプルで、スムーズで、使いやすいインターフェースを作ります（叔母のジョジアンでも）。',
    'services.uiux.feature1': 'ユーザーリサーチ',
    'services.uiux.feature2': 'クリーンなワイヤーフレーム',
    'services.uiux.feature3': 'ピクセルパーフェクトなモックアップ',
    'services.uiux.feature4': 'すべてが機能するかのテスト',

    'services.webDev.title': '🌐 ウェブ開発',
    'services.webDev.desc': 'すべてのデバイスで動作するモダンでレスポンシブなウェブサイト。',
    'services.webDev.feature1': 'レスポンシブデザイン',
    'services.webDev.feature2': 'パフォーマンス最適化',
    'services.webDev.feature3': 'SEO統合',
    'services.webDev.feature4': '簡単なメンテナンス',

    'services.mobile.title': '📱 モバイルデザイン',
    'services.mobile.desc': 'あなたのアプリはデフォルトテンプレートより良いものに値します。地下鉄で使うのに明確で、直感的で、快適なインターフェースを作ります。',
    'services.mobile.feature1': 'iOSとAndroidデザイン',
    'services.mobile.feature2': 'よく考えられたユーザージャーニー',
    'services.mobile.feature3': 'スムーズなオンボーディング',
    'services.mobile.feature4': 'アイコン、メニュー、そして違いを作るすべての小さな詳細',

    'services.creative.title': '🧭 クリエイティブディレクション',
    'services.creative.desc': 'あなたにはアイデアがありますが、すべてが整列し、クリーンで一貫していることを望みますか？僕がハンドルを握り、あなたが方向を教えてください。',
    'services.creative.feature1': 'アーティスティックディレクション',
    'services.creative.feature2': 'ビジュアル戦略',
    'services.creative.feature3': 'スタイリッシュだが有用なアドバイス',
    'services.creative.feature4': 'プロジェクトのグローバルビジョン',

    'services.motion.title': '🎞 モーションデザインとビデオ',
    'services.motion.desc': 'よく動くコンテンツ。編集し、アニメートし、あなたのビジュアルコミュニケーションにリズムを与えます。',
    'services.motion.feature1': 'スタイリッシュなロゴアニメーション',
    'services.motion.feature2': 'ダイナミックなビデオ編集',
    'services.motion.feature3': 'ティーザー、トレーラー、リール、ストーリー...',
    'services.motion.feature4': 'マイクロアニメーションとスムーズエフェクト',

    // Testimonials Section
    'testimonials.subtitle': '推薦',
    'testimonials.title': 'クライアントの声',
    'testimonials.description': '僕のプロジェクトを信頼してくれた人々からのフィードバック。',
    'testimonials.trustedBy': '信頼されています',
    'testimonials.trustedByDesc': '僕のサービスを選んだ企業と起業家',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '話しましょう？',
    'contact.title2': '',
    'contact.description': 'アイデアがありますか？ビジュアルヘルプが必要ですか？それとも僕たちがうまくやっていけるかどうか知りたいだけですか？\n書いてください、すぐに返事します（いつも喜んで）。',
    'contact.getInTouch': '連絡先情報',
    'contact.getInTouchDesc': 'プロジェクトを始める準備はできていますか？あなたのビジョンについて話し、どのように実現できるか見てみましょう。',
    'contact.email': 'メール',
    'contact.emailDesc': 'すべてのお問い合わせとコラボレーション',
    'contact.location': '場所',
    'contact.followMe': 'フォローしてください',
    'contact.sendMessage': 'メッセージを送る',
    'contact.name': 'あなたの名前',
    'contact.namePlaceholder': '名前を入力してください',
    'contact.emailPlaceholder': 'メールを入力してください',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': '何についてですか？',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクトについて教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer
    'footer.description': 'スイスを拠点とするクリエイティブメディアデザイナー、ブランドアイデンティティとインターフェースデザインを専門としています。',
    'footer.quickLinks': 'クイックリンク',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作られました',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel. すべての権利予約。'
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.work': 'Arbeiten',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.letsTalk': 'Reden wir?',

    // Hero Section
    'hero.subtitle': 'Kreative Lösungen',
    'hero.greeting': 'Hey, ich bin Theo Blondel.',
    'hero.title1': 'Kreative',
    'hero.title2': 'Lösungen',
    'hero.title3': 'vielseitig',
    'hero.description': 'Ich bin Mediendesigner in der Schweiz und verwandle deine Ideen in saubere, wirkungsvolle und wirklich stylische visuelle Projekte.\nWenn du ein cooles Logo, eine Website, die nicht nervt, oder kreative Leitung brauchst, die Sinn macht... bist du am richtigen Ort.\n\n🎯 Kreativ im Kern, effizient in der Form.',
    'hero.contactMe': 'Reden wir?',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre\nErfahrung',
    'hero.projectsDelivered': 'Projekte\nAbgeschlossen',
    'hero.clientSatisfaction': 'Kunden-\nzufriedenheit',
    'hero.clientsWorldwide': 'Kunden\nWeltweit',
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Logos, die rocken, und visuelle Identität, die deine Geschichte erzählt',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces, die funktionieren und gut aussehen (sogar für deine Tante)',
    'hero.service3.title': 'Kreative Leitung',
    'hero.service3.desc': 'Du hast die Ideen, ich mache sie kohärent und stylisch',
    'hero.service4.title': 'Motion & Video',
    'hero.service4.desc': 'Content, der sich gut bewegt und deiner visuellen Kommunikation Rhythmus gibt',

    // About Section
    'about.subtitle': 'Mein Weg',
    'about.title1': 'Erstellen, basteln, lernen...',
    'about.title2': 'seit 2016',
    'about.description1': 'Ich habe wie viele angefangen: mit YouTube-Montagen mit 10, den Kopf voller Pixel und Soundeffekte.\nMinecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, Suchen nach dem, was funktioniert.',
    'about.description2': 'Dann kam das Zeichnen. Dann Mediendesign. Und da verstand ich: Das will ich machen. Erstellen. Gestalten. Visuelle Ideen zum Leben erwecken, die zu Menschen sprechen.\n\nSeitdem arbeite ich an konkreten Projekten mit motivierten Leuten. Ich sorge dafür, dass alles klar, flüssig, professionell ist — ohne je das kleine Extra zu vergessen, das Persönlichkeit verleiht.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Vollständige Beherrschung der Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Professionelle Videobearbeitung und Farbkorrektur',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': '3D-Modellierung und Animation',
    'about.skill4.title': 'figma (ich weiß) – 100%',
    'about.skill4.desc': 'Interface-Design und Prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Projekte',
    'portfolio.title1': 'Einige Sachen, die ich',
    'portfolio.title2': 'gerne gemacht habe',
    'portfolio.description': 'Eine Auswahl von Projekten, die meinen Ansatz und Stil zeigen. Jedes Projekt erzählt eine einzigartige Geschichte.',
    'portfolio.viewAllBehance': 'Alles auf Behance ansehen',

    // Services Section
    'services.subtitle': 'Was ich mache',
    'services.title': 'Was ich für dich tun kann',
    'services.description': 'Konkrete Dienstleistungen, um deine Ideen in wirkungsvolle visuelle Ergebnisse zu verwandeln.',
    'services.startProject': 'Projekt starten',

    'services.brandIdentity.title': '🧬 Markenidentität',
    'services.brandIdentity.desc': 'Brauchst du ein Logo, das rockt, und ein Image, das erzählt, wer du bist? Ich helfe dir, eine echte Identität aufzubauen — nicht nur ein schnelles Logo.',
    'services.brandIdentity.feature1': 'Logo (professionell, nicht auf Canva)',
    'services.brandIdentity.feature2': 'Klare Grafik-Charta',
    'services.brandIdentity.feature3': 'Kohärente visuelle Identität',
    'services.brandIdentity.feature4': 'Markenpositionierung, die hält',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Gutes Design ist nicht nur hübsch. Es muss funktionieren. Ich erstelle einfache, flüssige und angenehm zu nutzende Interfaces (sogar für Tante Josiane).',
    'services.uiux.feature1': 'Nutzerforschung',
    'services.uiux.feature2': 'Saubere Wireframes',
    'services.uiux.feature3': 'Pixel-perfekte Mockups',
    'services.uiux.feature4': 'Tests, um zu sehen, ob alles hält',

    'services.webDev.title': '🌐 Webentwicklung',
    'services.webDev.desc': 'Moderne und responsive Websites, die auf allen Geräten funktionieren.',
    'services.webDev.feature1': 'Responsive Design',
    'services.webDev.feature2': 'Performance-Optimierung',
    'services.webDev.feature3': 'SEO-Integration',
    'services.webDev.feature4': 'Einfache Wartung',

    'services.mobile.title': '📱 Mobile Design',
    'services.mobile.desc': 'Deine App verdient besser als ein Standard-Template. Ich mache dir ein klares, intuitives und angenehm zu nutzendes Interface in der U-Bahn.',
    'services.mobile.feature1': 'iOS & Android Design',
    'services.mobile.feature2': 'Durchdachte User Journey',
    'services.mobile.feature3': 'Flüssiges Onboarding',
    'services.mobile.feature4': 'Icons, Menüs und alle kleinen Details, die den Unterschied machen',

    'services.creative.title': '🧭 Kreative Leitung',
    'services.creative.desc': 'Du hast die Ideen, aber willst, dass alles ausgerichtet, sauber und kohärent ist? Ich übernehme das Steuer, du gibst mir die Richtung.',
    'services.creative.feature1': 'Künstlerische Leitung',
    'services.creative.feature2': 'Visuelle Strategie',
    'services.creative.feature3': 'Stylische aber nützliche Ratschläge',
    'services.creative.feature4': 'Globale Projektvision',

    'services.motion.title': '🎞 Motion Design & Video',
    'services.motion.desc': 'Content, der sich gut bewegt. Ich schneide, animiere, gebe deiner visuellen Kommunikation Rhythmus.',
    'services.motion.feature1': 'Stylische Logo-Animationen',
    'services.motion.feature2': 'Dynamische Video-Montagen',
    'services.motion.feature3': 'Teaser, Trailer, Reels, Stories...',
    'services.motion.feature4': 'Mikro-Animationen und sanfte Effekte',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was meine Kunden sagen',
    'testimonials.description': 'Feedback von Leuten, die mir ihre Projekte anvertraut haben.',
    'testimonials.trustedBy': 'Sie vertrauen mir',
    'testimonials.trustedByDesc': 'Unternehmen und Unternehmer, die meine Dienstleistungen gewählt haben',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Reden wir?',
    'contact.title2': '',
    'contact.description': 'Du hast eine Idee? Brauchst visuelle Hilfe? Oder willst einfach wissen, ob es zwischen uns klappen könnte?\nSchreib mir, ich antworte schnell (und immer gerne).',
    'contact.getInTouch': 'Kontaktinformationen',
    'contact.getInTouchDesc': 'Bereit, dein Projekt zu starten? Lass uns über deine Vision sprechen und sehen, wie wir sie umsetzen können.',
    'contact.email': 'E-Mail',
    'contact.emailDesc': 'Für alle Anfragen und Kooperationen',
    'contact.location': 'Standort',
    'contact.followMe': 'Folge mir',
    'contact.sendMessage': 'Nachricht senden',
    'contact.name': 'Dein Name',
    'contact.namePlaceholder': 'Gib deinen Namen ein',
    'contact.emailPlaceholder': 'Gib deine E-Mail ein',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Worum geht es?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzähl mir von deinem Projekt...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer
    'footer.description': 'Kreativer Mediendesigner aus der Schweiz, spezialisiert auf Markenidentität und Interface-Design.',
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
    'nav.letsTalk': 'Parliamone?',

    // Hero Section
    'hero.subtitle': 'Soluzioni Creative',
    'hero.greeting': 'Ehi, sono Theo Blondel.',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'creative',
    'hero.title3': 'versatili',
    'hero.description': 'Sono un media designer in Svizzera, e trasformo le tue idee in progetti visivi puliti, d\'impatto e davvero stilosi.\nSe hai bisogno di un logo che spacca, di un sito che non fa schifo o di una direzione creativa che ha senso... sei nel posto giusto.\n\n🎯 Creativo nel contenuto, efficiente nella forma.',
    'hero.contactMe': 'Parliamone?',
    'hero.watchDemo': 'Guarda demo',
    'hero.yearsExperience': 'Anni di\nEsperienza',
    'hero.projectsDelivered': 'Progetti\nConsegnati',
    'hero.clientSatisfaction': 'Soddisfazione\nClienti',
    'hero.clientsWorldwide': 'Clienti\nNel Mondo',
    'hero.service1.title': 'Identità di Brand',
    'hero.service1.desc': 'Loghi che spaccano e identità visiva che racconta la tua storia',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfacce che funzionano e sono belle (anche per tua zia)',
    'hero.service3.title': 'Direzione Creativa',
    'hero.service3.desc': 'Tu hai le idee, io le rendo coerenti e stilose',
    'hero.service4.title': 'Motion e Video',
    'hero.service4.desc': 'Contenuti che si muovono bene e danno ritmo alla tua comunicazione visiva',

    // About Section
    'about.subtitle': 'Il Mio Percorso',
    'about.title1': 'Creare, smanettare, imparare...',
    'about.title2': 'dal 2016',
    'about.description1': 'Ho iniziato come molti: con montaggi YouTube a 10 anni, la testa nei pixel e negli effetti sonori.\nMinecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare quello che funziona.',
    'about.description2': 'Poi è arrivato il disegno. Poi il media design. E lì ho capito: voglio fare questo. Creare. Progettare. Dare vita a idee visive che parlano alle persone.\n\nDa allora, lavoro su progetti concreti con persone motivate. Faccio in modo che tutto sia chiaro, fluido, professionale — senza mai dimenticare quel piccolo tocco in più che dà personalità.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Padronanza completa della Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Montaggio video e color grading professionale',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': 'Modellazione e animazione 3D',
    'about.skill4.title': 'figma (lo so) – 100%',
    'about.skill4.desc': 'Design di interfacce e prototipazione',

    // Portfolio Section
    'portfolio.subtitle': 'I Miei Progetti',
    'portfolio.title1': 'Alcune cose che',
    'portfolio.title2': 'mi è piaciuto fare',
    'portfolio.description': 'Una selezione di progetti che mostrano il mio approccio e stile. Ogni progetto racconta una storia unica.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Services Section
    'services.subtitle': 'Cosa faccio',
    'services.title': 'Cosa posso fare per te',
    'services.description': 'Servizi concreti per trasformare le tue idee in risultati visivi d\'impatto.',
    'services.startProject': 'Inizia un progetto',

    'services.brandIdentity.title': '🧬 Identità di Brand',
    'services.brandIdentity.desc': 'Hai bisogno di un logo che spacca e di un\'immagine che racconta chi sei? Ti aiuto a costruire una vera identità — non solo un logo fatto in fretta.',
    'services.brandIdentity.feature1': 'Logo (professionale, non su Canva)',
    'services.brandIdentity.feature2': 'Carta grafica chiara',
    'services.brandIdentity.feature3': 'Identità visiva coerente',
    'services.brandIdentity.feature4': 'Posizionamento di brand che regge',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare (anche per zia Giuseppina).',
    'services.uiux.feature1': 'Ricerca utenti',
    'services.uiux.feature2': 'Wireframe puliti',
    'services.uiux.feature3': 'Mockup pixel-perfect',
    'services.uiux.feature4': 'Test per vedere se tutto regge',

    'services.webDev.title': '🌐 Sviluppo Web',
    'services.webDev.desc': 'Siti web moderni e responsive che funzionano su tutti i dispositivi.',
    'services.webDev.feature1': 'Design responsive',
    'services.webDev.feature2': 'Ottimizzazione delle prestazioni',
    'services.webDev.feature3': 'Integrazione SEO',
    'services.webDev.feature4': 'Manutenzione facile',

    'services.mobile.title': '📱 Design Mobile',
    'services.mobile.desc': 'La tua app merita meglio di un template di default. Ti faccio un\'interfaccia chiara, intuitiva e piacevole da usare in metro.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'User journey ben pensato',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Icone, menu e tutti i piccoli dettagli che fanno la differenza',

    'services.creative.title': '🧭 Direzione Creativa',
    'services.creative.desc': 'Hai le idee, ma vuoi che tutto sia allineato, pulito e coerente? Prendo il volante, tu mi dai la direzione.',
    'services.creative.feature1': 'Direzione artistica',
    'services.creative.feature2': 'Strategia visiva',
    'services.creative.feature3': 'Consigli stilosi ma utili',
    'services.creative.feature4': 'Visione globale del progetto',

    'services.motion.title': '🎞 Motion Design e Video',
    'services.motion.desc': 'Contenuti che si muovono bene. Monto, animo, do ritmo alla tua comunicazione visiva.',
    'services.motion.feature1': 'Animazioni logo stilose',
    'services.motion.feature2': 'Montaggi video dinamici',
    'services.motion.feature3': 'Teaser, trailer, reel, stories...',
    'services.motion.feature4': 'Micro-animazioni ed effetti smooth',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa dicono i miei clienti',
    'testimonials.description': 'Feedback di persone che mi hanno affidato i loro progetti.',
    'testimonials.trustedBy': 'Si fidano di me',
    'testimonials.trustedByDesc': 'Aziende e imprenditori che hanno scelto i miei servizi',

    // Contact Section
    'contact.subtitle': 'Contatto',
    'contact.title1': 'Parliamone?',
    'contact.title2': '',
    'contact.description': 'Hai un\'idea? Hai bisogno di aiuto visivo? O vuoi solo sapere se potremmo andare d\'accordo?\nScrivimi, rispondo veloce (e sempre con piacere).',
    'contact.getInTouch': 'Informazioni di Contatto',
    'contact.getInTouchDesc': 'Pronto a iniziare il tuo progetto? Parliamo della tua visione e vediamo come possiamo realizzarla.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Per tutte le richieste e collaborazioni',
    'contact.location': 'Posizione',
    'contact.followMe': 'Seguimi',
    'contact.sendMessage': 'Invia Messaggio',
    'contact.name': 'Il Tuo Nome',
    'contact.namePlaceholder': 'Inserisci il tuo nome',
    'contact.emailPlaceholder': 'Inserisci la tua email',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Di cosa si tratta?',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Parlami del tuo progetto...',
    'contact.sendBtn': 'Invia messaggio',

    // Footer
    'footer.description': 'Media designer creativo con base in Svizzera, specializzato in identità di brand e design di interfacce.',
    'footer.quickLinks': 'Link Rapidi',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di Brand',
    'footer.uiuxDesign': 'UI/UX Design',
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
    'nav.letsTalk': 'Vamos conversar?',

    // Hero Section
    'hero.subtitle': 'Soluções Criativas',
    'hero.greeting': 'E aí, eu sou o Theo Blondel.',
    'hero.title1': 'Soluções',
    'hero.title2': 'criativas',
    'hero.title3': 'versáteis',
    'hero.description': 'Sou designer de mídia na Suíça, e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos.\nSe você precisa de um logo que arrasa, de um site que não é uma droga ou de uma direção criativa que faz sentido... você está no lugar certo.\n\n🎯 Criativo no conteúdo, eficiente na forma.',
    'hero.contactMe': 'Vamos conversar?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Anos de\nExperiência',
    'hero.projectsDelivered': 'Projetos\nEntregues',
    'hero.clientSatisfaction': 'Satisfação\ndo Cliente',
    'hero.clientsWorldwide': 'Clientes\nPelo Mundo',
    'hero.service1.title': 'Identidade de Marca',
    'hero.service1.desc': 'Logos que arrasam e identidade visual que conta sua história',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces que funcionam e são bonitas (até sua tia consegue usar)',
    'hero.service3.title': 'Direção Criativa',
    'hero.service3.desc': 'Você tem as ideias, eu as torno coerentes e estilosas',
    'hero.service4.title': 'Motion e Vídeo',
    'hero.service4.desc': 'Conteúdo que se move bem e dá ritmo à sua comunicação visual',

    // About Section
    'about.subtitle': 'Minha Jornada',
    'about.title1': 'Criar, mexer, aprender...',
    'about.title2': 'desde 2016',
    'about.description1': 'Comecei como muitos: com montagens do YouTube aos 10 anos, a cabeça nos pixels e efeitos sonoros.\nMinecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.',
    'about.description2': 'Depois veio o desenho. Em seguida, o design de mídia. E aí eu entendi: quero fazer isso. Criar. Projetar. Dar vida a ideias visuais que falam com as pessoas.\n\nDesde então, trabalho em projetos concretos com pessoas motivadas. Faço com que tudo seja claro, fluido, profissional — sem nunca esquecer aquele toque especial que dá personalidade.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Domínio completo da Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Edição de vídeo e correção de cor profissional',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': 'Modelagem e animação 3D',
    'about.skill4.title': 'figma (eu sei) – 100%',
    'about.skill4.desc': 'Design de interface e prototipagem',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Projetos',
    'portfolio.title1': 'Algumas coisas que',
    'portfolio.title2': 'eu curti fazer',
    'portfolio.description': 'Uma seleção de projetos que mostram minha abordagem e estilo. Cada projeto conta uma história única.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Services Section
    'services.subtitle': 'O que eu faço',
    'services.title': 'O que posso fazer por você',
    'services.description': 'Serviços concretos para transformar suas ideias em resultados visuais impactantes.',
    'services.startProject': 'Começar um projeto',

    'services.brandIdentity.title': '🧬 Identidade de Marca',
    'services.brandIdentity.desc': 'Precisa de um logo que arrasa e de uma imagem que conta quem você é? Te ajudo a construir uma identidade real — não só um logo feito às pressas.',
    'services.brandIdentity.feature1': 'Logo (profissional, não no Canva)',
    'services.brandIdentity.feature2': 'Manual gráfico claro',
    'services.brandIdentity.feature3': 'Identidade visual coerente',
    'services.brandIdentity.feature4': 'Posicionamento de marca que funciona',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Um bom design não é só bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar (até para a tia Josefina).',
    'services.uiux.feature1': 'Pesquisa de usuários',
    'services.uiux.feature2': 'Wireframes limpos',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Testes para ver se tudo funciona',

    'services.webDev.title': '🌐 Desenvolvimento Web',
    'services.webDev.desc': 'Sites modernos e responsivos que funcionam em todos os dispositivos.',
    'services.webDev.feature1': 'Design responsivo',
    'services.webDev.feature2': 'Otimização de performance',
    'services.webDev.feature3': 'Integração SEO',
    'services.webDev.feature4': 'Manutenção fácil',

    'services.mobile.title': '📱 Design Mobile',
    'services.mobile.desc': 'Seu app merece melhor que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Jornada do usuário bem pensada',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Ícones, menus e todos os pequenos detalhes que fazem a diferença',

    'services.creative.title': '🧭 Direção Criativa',
    'services.creative.desc': 'Você tem as ideias, mas quer que tudo esteja alinhado, limpo e coerente? Eu pego o volante, você me dá a direção.',
    'services.creative.feature1': 'Direção artística',
    'services.creative.feature2': 'Estratégia visual',
    'services.creative.feature3': 'Conselhos estilosos mas úteis',
    'services.creative.feature4': 'Visão global do projeto',

    'services.motion.title': '🎞 Motion Design e Vídeo',
    'services.motion.desc': 'Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.',
    'services.motion.feature1': 'Animações de logo estilosas',
    'services.motion.feature2': 'Montagens de vídeo dinâmicas',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animações e efeitos suaves',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que meus clientes dizem',
    'testimonials.description': 'Feedback de pessoas que confiaram em mim para seus projetos.',
    'testimonials.trustedBy': 'Eles confiam em mim',
    'testimonials.trustedByDesc': 'Empresas e empreendedores que escolheram meus serviços',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos conversar?',
    'contact.title2': '',
    'contact.description': 'Você tem uma ideia? Precisa de ajuda visual? Ou só quer saber se a gente pode trabalhar junto?\nMe escreve, respondo rápido (e sempre com prazer).',
    'contact.getInTouch': 'Informações de Contato',
    'contact.getInTouchDesc': 'Pronto para começar seu projeto? Vamos conversar sobre sua visão e ver como podemos realizá-la.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Para todas as consultas e colaborações',
    'contact.location': 'Localização',
    'contact.followMe': 'Me Siga',
    'contact.sendMessage': 'Enviar Mensagem',
    'contact.name': 'Seu Nome',
    'contact.namePlaceholder': 'Digite seu nome',
    'contact.emailPlaceholder': 'Digite seu email',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Sobre o que é?',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Me conte sobre seu projeto...',
    'contact.sendBtn': 'Enviar mensagem',

    // Footer
    'footer.description': 'Designer de mídia criativo baseado na Suíça, especializado em identidade de marca e design de interface.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de Marca',
    'footer.uiuxDesign': 'UI/UX Design',
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
    'nav.letsTalk': 'Le të flasim?',

    // Hero Section
    'hero.subtitle': 'Zgjidhje Kreative',
    'hero.greeting': 'Hej, unë jam Theo Blondel.',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'kreative',
    'hero.title3': 'të shumëllojshme',
    'hero.description': 'Jam një dizajner mediash në Zvicër, dhe i transformoj idetë tuaja në projekte vizuale të pastra, me ndikim dhe vërtet stiloze.\nNëse keni nevojë për një logo që shkëlqen, një sajt që nuk është i keq ose një drejtim kreativ që ka kuptim... jeni në vendin e duhur.\n\n🎯 Kreativ në thelb, efikas në formë.',
    'hero.contactMe': 'Le të flasim?',
    'hero.watchDemo': 'Shiko demon',
    'hero.yearsExperience': 'Vite\nPërvojë',
    'hero.projectsDelivered': 'Projekte\nTë përfunduara',
    'hero.clientSatisfaction': 'Kënaqësia e\nKlientëve',
    'hero.clientsWorldwide': 'Klientë\nNë botë',
    'hero.service1.title': 'Identiteti i Markës',
    'hero.service1.desc': 'Logo që shkëlqejnë dhe identitet vizual që tregon historinë tuaj',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Ndërfaqe që funksionojnë dhe duken mirë (edhe për tezen tuaj)',
    'hero.service3.title': 'Drejtimi Kreativ',
    'hero.service3.desc': 'Ju keni idetë, unë i bëj ato koherente dhe stiloze',
    'hero.service4.title': 'Motion dhe Video',
    'hero.service4.desc': 'Përmbajtje që lëviz mirë dhe i jep ritëm komunikimit tuaj vizual',

    // About Section
    'about.subtitle': 'Rruga ime',
    'about.title1': 'Krijoj, eksperimentoj, mësoj...',
    'about.title2': 'që nga 2016',
    'about.description1': 'Fillova si shumë të tjerë: me montazhe YouTube në moshën 10 vjeç, kokën në piksele dhe efekte zanore.\nMinecraft, Fortnite, Call of... Kalova orë duke testuar, eksperimentuar, duke kërkuar atë që funksionon.',
    'about.description2': 'Pastaj erdhi vizatimi. Më pas dizajni i mediave. Dhe atje e kuptova: dua ta bëj këtë. Të krijoj. Të dizajnoj. T\'u jap jetë ideve vizuale që u flasin njerëzve.\n\nQë atëherë, punoj në projekte konkrete me njerëz të motivuar. Sigurohem që gjithçka të jetë e qartë, e rrjedhshme, profesionale — pa harruar kurrë atë prekje të vogël shtesë që jep personalitet.',
    'about.skill1.title': 'adobe – 90%',
    'about.skill1.desc': 'Zotërim i plotë i Creative Suite',
    'about.skill2.title': 'davinci resolve – 90%',
    'about.skill2.desc': 'Montazh video dhe korrigjim ngjyrash profesional',
    'about.skill3.title': 'autodesk – 78%',
    'about.skill3.desc': 'Modelim dhe animacion 3D',
    'about.skill4.title': 'figma (e di) – 100%',
    'about.skill4.desc': 'Dizajn ndërfaqesh dhe prototipim',

    // Portfolio Section
    'portfolio.subtitle': 'Projektet e mia',
    'portfolio.title1': 'Disa gjëra që',
    'portfolio.title2': 'më pëlqeu t\'i bëj',
    'portfolio.description': 'Një përzgjedhje projektesh që tregojnë qasjen dhe stilin tim. Çdo projekt tregon një histori unike.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Services Section
    'services.subtitle': 'Çfarë bëj',
    'services.title': 'Çfarë mund të bëj për ju',
    'services.description': 'Shërbime konkrete për të transformuar idetë tuaja në rezultate vizuale me ndikim.',
    'services.startProject': 'Fillo një projekt',

    'services.brandIdentity.title': '🧬 Identiteti i Markës',
    'services.brandIdentity.desc': 'Keni nevojë për një logo që shkëlqen dhe një imazh që tregon se kush jeni? Ju ndihmoj të ndërtoni një identitet të vërtetë — jo vetëm një logo të shpejtë.',
    'services.brandIdentity.feature1': 'Logo (profesionale, jo në Canva)',
    'services.brandIdentity.feature2': 'Kartë grafike e qartë',
    'services.brandIdentity.feature3': 'Identitet vizual koherent',
    'services.brandIdentity.feature4': 'Pozicionim marke që qëndron',

    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Një dizajn i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur (edhe për tezen Josiane).',
    'services.uiux.feature1': 'Kërkimi i përdoruesve',
    'services.uiux.feature2': 'Wireframes të pastra',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Teste për të parë nëse gjithçka funksionon',

    'services.webDev.title': '🌐 Zhvillimi Web',
    'services.webDev.desc': 'Sajte moderne dhe responsive që funksionojnë në të gjitha pajisjet.',
    'services.webDev.feature1': 'Dizajn responsive',
    'services.webDev.feature2': 'Optimizim performance',
    'services.webDev.feature3': 'Integrim SEO',
    'services.webDev.feature4': 'Mirëmbajtje e lehtë',

    'services.mobile.title': '📱 Dizajni Mobile',
    'services.mobile.desc': 'Aplikacioni juaj meriton më shumë se një template i paracaktuar. Ju bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t\'u përdorur në metro.',
    'services.mobile.feature1': 'Dizajn iOS dhe Android',
    'services.mobile.feature2': 'Rrugëtim përdoruesi i menduar mirë',
    'services.mobile.feature3': 'Onboarding i rrjedhshëm',
    'services.mobile.feature4': 'Ikona, menu dhe të gjitha detajet e vogla që bëjnë ndryshimin',

    'services.creative.title': '🧭 Drejtimi Kreativ',
    'services.creative.desc': 'Keni idetë, por doni që gjithçka të jetë e rreshtuar, e pastër dhe koherente? Unë marr timonin, ju më jepni drejtimin.',
    'services.creative.feature1': 'Drejtim artistik',
    'services.creative.feature2': 'Strategji vizuale',
    'services.creative.feature3': 'Këshilla stiloze por të dobishme',
    'services.creative.feature4': 'Vizioni global i projektit',

    'services.motion.title': '🎞 Motion Design dhe Video',
    'services.motion.desc': 'Përmbajtje që lëviz mirë. Montoj, animoj, i jap ritëm komunikimit tuaj vizual.',
    'services.motion.feature1': 'Animacione logo stiloze',
    'services.motion.feature2': 'Montazhe video dinamike',
    'services.motion.feature3': 'Teaser, trailer, reel, stories...',
    'services.motion.feature4': 'Mikro-animacione dhe efekte të buta',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmi',
    'testimonials.title': 'Çfarë thonë klientët e mi',
    'testimonials.description': 'Komente nga njerëz që më besuan projektet e tyre.',
    'testimonials.trustedBy': 'Ata më besojnë',
    'testimonials.trustedByDesc': 'Kompani dhe sipërmarrës që zgjodhën shërbimet e mia',

    // Contact Section
    'contact.subtitle': 'Kontakti',
    'contact.title1': 'Le të flasim?',
    'contact.title2': '',
    'contact.description': 'Keni një ide? Keni nevojë për ndihmë vizuale? Apo thjesht doni të dini nëse mund të punojmë së bashku?\nMë shkruani, përgjigjem shpejt (dhe gjithmonë me kënaqësi).',
    'contact.getInTouch': 'Informacioni i Kontaktit',
    'contact.getInTouchDesc': 'Gati për të filluar projektin tuaj? Le të flasim për vizionin tuaj dhe të shohim si mund ta realizojmë.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Për të gjitha pyetjet dhe bashkëpunimet',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më ndiqni',
    'contact.sendMessage': 'Dërgo Mesazh',
    'contact.name': 'Emri juaj',
    'contact.namePlaceholder': 'Shkruani emrin tuaj',
    'contact.emailPlaceholder': 'Shkruani email-in tuaj',
    'contact.subject': 'Subjekti',
    'contact.subjectPlaceholder': 'Për çfarë bëhet fjalë?',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më tregoni për projektin tuaj...',
    'contact.sendBtn': 'Dërgo mesazhin',

    // Footer
    'footer.description': 'Dizajner kreativ mediash me bazë në Zvicër, i specializuar në identitetin e markës dhe dizajnin e ndërfaqeve.',
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i Markës',
    'footer.uiuxDesign': 'UI/UX Design',
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
      if (translations[browserLang]) {
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
    return translations[language]?.[key] || translations.fr[key] || key;
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
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}