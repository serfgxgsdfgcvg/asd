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
    'nav.work': 'Mes projets',
    'nav.services': 'Ce que je peux faire pour toi',
    'nav.contact': 'On discute ?',
    'nav.letsTalk': 'On en parle ?',

    // Hero Section
    'hero.subtitle': 'médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.\n\nSi t\'as besoin d\'un logo qui en jette, d\'un site qui fait pas fuir ou d\'une direction créative qui a du sens… t\'es au bon endroit.\n\n🎯 Créatif dans le fond, efficace dans la forme.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Logo (pro, pas sur Canva)',
    'hero.service2.title': 'Direction Créative',
    'hero.service2.desc': 'Vision globale du projet',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Interfaces simples et fluides',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animations et effets smooth',

    // About Section
    'about.subtitle': '🔁 Mon Parcours',
    'about.title1': 'Créer, bidouiller, apprendre…',
    'about.title2': 'depuis 2016',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 15 ans, la tête dans les pixels et les effets sonores.\nMinecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.\n\nDepuis, je bosse sur des projets concrets avec des gens motivés. Je fais en sorte que tout soit clair, fluide, pro — sans jamais oublier le petit truc en plus qui donne de la personnalité.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Suite complète maîtrisée',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Montage et étalonnage pro',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D et motion design',
    'about.skill4.title': '🧠 figma (je sais)',
    'about.skill4.desc': 'UI/UX et prototypage',

    // Portfolio Section
    'portfolio.subtitle': 'Mes projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent mon style et ma façon de bosser.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': '💼 Ce que je peux faire pour toi',
    'services.title': 'Mes services',
    'services.description': 'Des solutions créatives complètes pour donner vie à tes projets',
    'services.startProject': 'Démarrer un projet',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes propres',
    'services.uiux.feature3': 'Maquettes pixel-perfect',
    'services.uiux.feature4': 'Tests pour voir si tout tient',

    // Web Development
    'services.webDev.title': '🌐 Développement Web',
    'services.webDev.desc': 'Sites web qui marchent vraiment, pas des trucs qui plantent au premier clic.',
    'services.webDev.feature1': 'Sites responsive (ça marche sur mobile)',
    'services.webDev.feature2': 'Performance optimisée',
    'services.webDev.feature3': 'SEO intégré',
    'services.webDev.feature4': 'Maintenance incluse',

    // Mobile Design
    'services.mobile.title': '📱 Design Mobile',
    'services.mobile.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.mobile.feature1': 'Design iOS & Android',
    'services.mobile.feature2': 'Parcours utilisateur bien pensé',
    'services.mobile.feature3': 'Onboarding fluide',
    'services.mobile.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    // Creative Direction
    'services.creative.title': '🧭 Direction Créative',
    'services.creative.desc': 'T\'as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.creative.feature1': 'Direction artistique',
    'services.creative.feature2': 'Stratégie visuelle',
    'services.creative.feature3': 'Conseils stylés mais utiles',
    'services.creative.feature4': 'Vision globale du projet',

    // Motion Graphics
    'services.motion.title': '🎞 Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce qu\'ils disent de mon travail',
    'testimonials.description': 'Quelques retours de clients avec qui j\'ai eu le plaisir de bosser.',
    'testimonials.trustedBy': 'Ils m\'ont fait confiance',
    'testimonials.trustedByDesc': 'Des marques et entrepreneurs qui ont choisi mon expertise créative',

    // Contact Section
    'contact.subtitle': '📬 On discute ?',
    'contact.title1': 'Prêt à donner vie',
    'contact.title2': 'à ton projet ?',
    'contact.description': 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?\nÉcris-moi, je réponds vite (et toujours avec plaisir).',
    'contact.getInTouch': 'Parlons de tes idées',
    'contact.getInTouchDesc': 'Raconte-moi ton projet, tes objectifs, tes envies. On voit ensemble comment je peux t\'aider.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Réponse rapide garantie',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suis-moi',
    'contact.sendMessage': 'Envoie-moi un message',
    'contact.name': 'Ton nom',
    'contact.namePlaceholder': 'Comment tu t\'appelles ?',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'De quoi on parle ?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Parle-moi de ton projet, tes idées, tes besoins...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Solutions créatives polyvalentes basées en Suisse. Je transforme tes idées en réalisations visuelles qui marquent.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Développement web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'My Work',
    'nav.services': 'What I Can Do',
    'nav.contact': 'Let\'s Talk',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'mediamatician',
    'hero.greeting': 'Hey, I\'m Theo Blondel.',
    'hero.title1': 'Versatile',
    'hero.title2': 'creative',
    'hero.title3': 'solutions',
    'hero.description': 'I\'m a mediamatician in Switzerland, and I transform your ideas into clean, impactful, and really stylish visual projects.\n\nIf you need a killer logo, a website that doesn\'t suck, or creative direction that makes sense... you\'re in the right place.\n\n🎯 Creative at heart, efficient in form.',
    'hero.contactMe': 'Let\'s Talk',
    'hero.watchDemo': 'Watch Demo',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.clientSatisfaction': 'Client Satisfaction',
    'hero.clientsWorldwide': 'Clients Worldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Professional logos (not Canva)',
    'hero.service2.title': 'Creative Direction',
    'hero.service2.desc': 'Global project vision',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Simple and smooth interfaces',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animations and smooth effects',

    // About Section
    'about.subtitle': '🔁 My Journey',
    'about.title1': 'Create, tinker, learn…',
    'about.title2': 'since 2016',
    'about.description1': 'I started like many: with YouTube edits at 15, head deep in pixels and sound effects.\nMinecraft, Fortnite, Call of... I spent hours testing, tinkering, finding what works.',
    'about.description2': 'Then drawing came. Then mediamatique. And that\'s when I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people.\n\nSince then, I work on concrete projects with motivated people. I make sure everything is clear, smooth, professional — never forgetting that little extra something that gives personality.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Complete suite mastered',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Pro editing and grading',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D and motion design',
    'about.skill4.title': '🧠 figma (I know)',
    'about.skill4.desc': 'UI/UX and prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'My Projects',
    'portfolio.title1': 'Some stuff',
    'portfolio.title2': 'I loved making',
    'portfolio.description': 'A selection of projects that show my style and way of working.',
    'portfolio.viewAllBehance': 'View All on Behance',

    // Services Section
    'services.subtitle': '💼 What I Can Do For You',
    'services.title': 'My Services',
    'services.description': 'Complete creative solutions to bring your projects to life',
    'services.startProject': 'Start a Project',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Brand Identity',
    'services.brandIdentity.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'services.brandIdentity.feature1': 'Logo (pro, not Canva)',
    'services.brandIdentity.feature2': 'Clear brand guidelines',
    'services.brandIdentity.feature3': 'Coherent visual identity',
    'services.brandIdentity.feature4': 'Brand positioning that holds up',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Good design isn\'t just pretty. It has to work. I create simple, smooth, and pleasant interfaces to use (even for aunt Josie).',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Clean wireframes',
    'services.uiux.feature3': 'Pixel-perfect mockups',
    'services.uiux.feature4': 'Tests to see if everything holds',

    // Web Development
    'services.webDev.title': '🌐 Web Development',
    'services.webDev.desc': 'Websites that actually work, not stuff that crashes on first click.',
    'services.webDev.feature1': 'Responsive sites (works on mobile)',
    'services.webDev.feature2': 'Optimized performance',
    'services.webDev.feature3': 'Integrated SEO',
    'services.webDev.feature4': 'Maintenance included',

    // Mobile Design
    'services.mobile.title': '📱 Mobile Design',
    'services.mobile.desc': 'Your app deserves better than a default template. I make you a clear, intuitive interface that\'s pleasant to use on the subway.',
    'services.mobile.feature1': 'iOS & Android design',
    'services.mobile.feature2': 'Well-thought user journey',
    'services.mobile.feature3': 'Smooth onboarding',
    'services.mobile.feature4': 'Icons, menus, and all the little details that make the difference',

    // Creative Direction
    'services.creative.title': '🧭 Creative Direction',
    'services.creative.desc': 'You have the ideas, but want everything aligned, clean and coherent? I take the wheel, you give me the direction.',
    'services.creative.feature1': 'Art direction',
    'services.creative.feature2': 'Visual strategy',
    'services.creative.feature3': 'Stylish but useful advice',
    'services.creative.feature4': 'Global project vision',

    // Motion Graphics
    'services.motion.title': '🎞 Motion Design & Video',
    'services.motion.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',
    'services.motion.feature1': 'Stylish logo animations',
    'services.motion.feature2': 'Dynamic video editing',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations and smooth effects',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What they say about my work',
    'testimonials.description': 'Some feedback from clients I had the pleasure to work with.',
    'testimonials.trustedBy': 'They trusted me',
    'testimonials.trustedByDesc': 'Brands and entrepreneurs who chose my creative expertise',

    // Contact Section
    'contact.subtitle': '📬 Let\'s Talk',
    'contact.title1': 'Ready to bring',
    'contact.title2': 'your project to life?',
    'contact.description': 'Got an idea? Need visual help? Or just want to see if we click?\nDrop me a line, I respond fast (and always with pleasure).',
    'contact.getInTouch': 'Tell me about your ideas',
    'contact.getInTouchDesc': 'Tell me about your project, your goals, your desires. Let\'s see together how I can help you.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Quick response guaranteed',
    'contact.location': 'Location',
    'contact.followMe': 'Follow me',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Your name',
    'contact.namePlaceholder': 'What\'s your name?',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What are we talking about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project, ideas, needs...',
    'contact.sendBtn': 'Send message',

    // Footer
    'footer.description': 'Versatile creative solutions based in Switzerland. I transform your ideas into visual achievements that make a mark.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Web development',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.work': 'Mis Proyectos',
    'nav.services': 'Qué Puedo Hacer',
    'nav.contact': '¿Hablamos?',
    'nav.letsTalk': '¿Hablamos?',

    // Hero Section
    'hero.subtitle': 'mediamático',
    'hero.greeting': 'Ey, soy Theo Blondel.',
    'hero.title1': 'Soluciones',
    'hero.title2': 'creativas',
    'hero.title3': 'versátiles',
    'hero.description': 'Soy mediamático en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente con estilo.\n\nSi necesitas un logo que mole, una web que no apeste o dirección creativa que tenga sentido... estás en el lugar correcto.\n\n🎯 Creativo en el fondo, eficiente en la forma.',
    'hero.contactMe': '¿Hablamos?',
    'hero.watchDemo': 'Ver Demo',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.projectsDelivered': 'Proyectos Entregados',
    'hero.clientSatisfaction': 'Satisfacción del Cliente',
    'hero.clientsWorldwide': 'Clientes en el Mundo',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Logos profesionales (no Canva)',
    'hero.service2.title': 'Dirección Creativa',
    'hero.service2.desc': 'Visión global del proyecto',
    'hero.service3.title': 'Diseño UI/UX',
    'hero.service3.desc': 'Interfaces simples y fluidas',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animaciones y efectos suaves',

    // About Section
    'about.subtitle': '🔁 Mi Trayectoria',
    'about.title1': 'Crear, trastear, aprender…',
    'about.title2': 'desde 2016',
    'about.description1': 'Empecé como muchos: con ediciones de YouTube a los 15, metido en píxeles y efectos de sonido.\nMinecraft, Fortnite, Call of... Pasé horas probando, trasteando, buscando qué funciona.',
    'about.description2': 'Luego llegó el dibujo. Después, la mediamática. Y ahí lo pillé: quiero hacer esto. Crear. Diseñar. Dar vida a ideas visuales que hablen a la gente.\n\nDesde entonces, trabajo en proyectos concretos con gente motivada. Me aseguro de que todo sea claro, fluido, profesional — sin olvidar nunca ese toque extra que da personalidad.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Suite completa dominada',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Edición y corrección pro',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D y motion design',
    'about.skill4.title': '🧠 figma (lo sé)',
    'about.skill4.desc': 'UI/UX y prototipado',

    // Portfolio Section
    'portfolio.subtitle': 'Mis Proyectos',
    'portfolio.title1': 'Algunas cosas',
    'portfolio.title2': 'que me gustó hacer',
    'portfolio.description': 'Una selección de proyectos que muestran mi estilo y forma de trabajar.',
    'portfolio.viewAllBehance': 'Ver Todo en Behance',

    // Services Section
    'services.subtitle': '💼 Qué Puedo Hacer Por Ti',
    'services.title': 'Mis Servicios',
    'services.description': 'Soluciones creativas completas para dar vida a tus proyectos',
    'services.startProject': 'Empezar un Proyecto',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Identidad de Marca',
    'services.brandIdentity.desc': '¿Necesitas un logo que mole y una imagen que cuente quién eres? Te ayudo a construir una identidad real — no solo un logo rápido.',
    'services.brandIdentity.feature1': 'Logo (pro, no Canva)',
    'services.brandIdentity.feature2': 'Manual de marca claro',
    'services.brandIdentity.feature3': 'Identidad visual coherente',
    'services.brandIdentity.feature4': 'Posicionamiento de marca sólido',

    // UI/UX Design
    'services.uiux.title': '🧠 Diseño UI/UX',
    'services.uiux.desc': 'Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar (incluso para la tía Pepa).',
    'services.uiux.feature1': 'Investigación de usuario',
    'services.uiux.feature2': 'Wireframes limpios',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Tests para ver si todo funciona',

    // Web Development
    'services.webDev.title': '🌐 Desarrollo Web',
    'services.webDev.desc': 'Sitios web que realmente funcionan, no cosas que se rompen al primer clic.',
    'services.webDev.feature1': 'Sitios responsive (funciona en móvil)',
    'services.webDev.feature2': 'Rendimiento optimizado',
    'services.webDev.feature3': 'SEO integrado',
    'services.webDev.feature4': 'Mantenimiento incluido',

    // Mobile Design
    'services.mobile.title': '📱 Diseño Móvil',
    'services.mobile.desc': 'Tu app merece algo mejor que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.',
    'services.mobile.feature1': 'Diseño iOS y Android',
    'services.mobile.feature2': 'Recorrido de usuario bien pensado',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Iconos, menús y todos los detalles que marcan la diferencia',

    // Creative Direction
    'services.creative.title': '🧭 Dirección Creativa',
    'services.creative.desc': '¿Tienes las ideas pero quieres que todo esté alineado, limpio y coherente? Yo tomo el volante, tú me das la dirección.',
    'services.creative.feature1': 'Dirección artística',
    'services.creative.feature2': 'Estrategia visual',
    'services.creative.feature3': 'Consejos con estilo pero útiles',
    'services.creative.feature4': 'Visión global del proyecto',

    // Motion Graphics
    'services.motion.title': '🎞 Motion Design y Vídeo',
    'services.motion.desc': 'Contenido que se mueve bien. Edito, animo, doy ritmo a tu comunicación visual.',
    'services.motion.feature1': 'Animaciones de logos con estilo',
    'services.motion.feature2': 'Edición de vídeo dinámica',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animaciones y efectos suaves',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Lo que dicen de mi trabajo',
    'testimonials.description': 'Algunos comentarios de clientes con los que tuve el placer de trabajar.',
    'testimonials.trustedBy': 'Confiaron en mí',
    'testimonials.trustedByDesc': 'Marcas y emprendedores que eligieron mi experiencia creativa',

    // Contact Section
    'contact.subtitle': '📬 ¿Hablamos?',
    'contact.title1': '¿Listo para dar vida',
    'contact.title2': 'a tu proyecto?',
    'contact.description': '¿Tienes una idea? ¿Necesitas ayuda visual? ¿O solo quieres ver si conectamos?\nEscríbeme, respondo rápido (y siempre con gusto).',
    'contact.getInTouch': 'Cuéntame tus ideas',
    'contact.getInTouchDesc': 'Cuéntame sobre tu proyecto, tus objetivos, tus deseos. Veamos juntos cómo puedo ayudarte.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Respuesta rápida garantizada',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme',
    'contact.sendMessage': 'Envíame un mensaje',
    'contact.name': 'Tu nombre',
    'contact.namePlaceholder': '¿Cómo te llamas?',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿De qué hablamos?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto, ideas, necesidades...',
    'contact.sendBtn': 'Enviar mensaje',

    // Footer
    'footer.description': 'Soluciones creativas versátiles con base en Suiza. Transformo tus ideas en logros visuales que marcan.',
    'footer.quickLinks': 'Navegación',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  ru: {
    // Navigation
    'nav.about': 'Обо мне',
    'nav.work': 'Мои работы',
    'nav.services': 'Что я могу',
    'nav.contact': 'Поговорим?',
    'nav.letsTalk': 'Поговорим?',

    // Hero Section
    'hero.subtitle': 'медиаматик',
    'hero.greeting': 'Привет, я Тео Блондель.',
    'hero.title1': 'Универсальные',
    'hero.title2': 'креативные',
    'hero.title3': 'решения',
    'hero.description': 'Я медиаматик из Швейцарии, и я превращаю твои идеи в чистые, впечатляющие и действительно стильные визуальные проекты.\n\nЕсли тебе нужен крутой логотип, сайт, который не отстой, или креативное направление, которое имеет смысл... ты в правильном месте.\n\n🎯 Креативный по сути, эффективный по форме.',
    'hero.contactMe': 'Поговорим?',
    'hero.watchDemo': 'Смотреть демо',
    'hero.yearsExperience': 'Лет опыта',
    'hero.projectsDelivered': 'Проектов выполнено',
    'hero.clientSatisfaction': 'Удовлетворенность клиентов',
    'hero.clientsWorldwide': 'Клиентов по всему миру',
    'hero.service1.title': 'Фирменный стиль',
    'hero.service1.desc': 'Профессиональные логотипы (не Canva)',
    'hero.service2.title': 'Креативное направление',
    'hero.service2.desc': 'Глобальное видение проекта',
    'hero.service3.title': 'UI/UX дизайн',
    'hero.service3.desc': 'Простые и плавные интерфейсы',
    'hero.service4.title': 'Моушн дизайн',
    'hero.service4.desc': 'Анимации и плавные эффекты',

    // About Section
    'about.subtitle': '🔁 Мой путь',
    'about.title1': 'Создавать, экспериментировать, учиться…',
    'about.title2': 'с 2016 года',
    'about.description1': 'Я начал как многие: с монтажа YouTube в 15 лет, погрузившись в пиксели и звуковые эффекты.\nMinecraft, Fortnite, Call of... Я проводил часы, тестируя, экспериментируя, ища то, что работает.',
    'about.description2': 'Потом пришло рисование. Затем медиаматика. И тогда я понял: я хочу заниматься этим. Создавать. Проектировать. Воплощать визуальные идеи, которые говорят с людьми.\n\nС тех пор я работаю над конкретными проектами с мотивированными людьми. Я забочусь о том, чтобы все было ясно, плавно, профессионально — никогда не забывая о той маленькой изюминке, которая придает индивидуальность.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Полный пакет освоен',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Профессиональный монтаж и цветокоррекция',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D и моушн дизайн',
    'about.skill4.title': '🧠 figma (я знаю)',
    'about.skill4.desc': 'UI/UX и прототипирование',

    // Portfolio Section
    'portfolio.subtitle': 'Мои проекты',
    'portfolio.title1': 'Некоторые вещи,',
    'portfolio.title2': 'которые мне понравилось делать',
    'portfolio.description': 'Подборка проектов, которые показывают мой стиль и способ работы.',
    'portfolio.viewAllBehance': 'Смотреть все на Behance',

    // Services Section
    'services.subtitle': '💼 Что я могу для тебя сделать',
    'services.title': 'Мои услуги',
    'services.description': 'Комплексные креативные решения для воплощения твоих проектов в жизнь',
    'services.startProject': 'Начать проект',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Фирменный стиль',
    'services.brandIdentity.desc': 'Нужен логотип, который зацепит, и образ, который расскажет, кто ты? Я помогу построить настоящую идентичность — не просто быстрый логотип.',
    'services.brandIdentity.feature1': 'Логотип (профессиональный, не Canva)',
    'services.brandIdentity.feature2': 'Четкий брендбук',
    'services.brandIdentity.feature3': 'Последовательная визуальная идентичность',
    'services.brandIdentity.feature4': 'Позиционирование бренда, которое держится',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX дизайн',
    'services.uiux.desc': 'Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы (даже для тети Маши).',
    'services.uiux.feature1': 'Исследование пользователей',
    'services.uiux.feature2': 'Чистые wireframes',
    'services.uiux.feature3': 'Pixel-perfect макеты',
    'services.uiux.feature4': 'Тесты, чтобы проверить, что все работает',

    // Web Development
    'services.webDev.title': '🌐 Веб-разработка',
    'services.webDev.desc': 'Сайты, которые действительно работают, а не ломаются при первом клике.',
    'services.webDev.feature1': 'Адаптивные сайты (работают на мобильных)',
    'services.webDev.feature2': 'Оптимизированная производительность',
    'services.webDev.feature3': 'Встроенное SEO',
    'services.webDev.feature4': 'Обслуживание включено',

    // Mobile Design
    'services.mobile.title': '📱 Мобильный дизайн',
    'services.mobile.desc': 'Твое приложение заслуживает большего, чем стандартный шаблон. Я создам тебе четкий, интуитивный интерфейс, приятный в использовании в метро.',
    'services.mobile.feature1': 'Дизайн для iOS и Android',
    'services.mobile.feature2': 'Продуманный пользовательский путь',
    'services.mobile.feature3': 'Плавный onboarding',
    'services.mobile.feature4': 'Иконки, меню и все мелкие детали, которые делают разницу',

    // Creative Direction
    'services.creative.title': '🧭 Креативное направление',
    'services.creative.desc': 'У тебя есть идеи, но ты хочешь, чтобы все было выровнено, чисто и последовательно? Я беру руль, ты даешь направление.',
    'services.creative.feature1': 'Арт-направление',
    'services.creative.feature2': 'Визуальная стратегия',
    'services.creative.feature3': 'Стильные, но полезные советы',
    'services.creative.feature4': 'Глобальное видение проекта',

    // Motion Graphics
    'services.motion.title': '🎞 Моушн дизайн и видео',
    'services.motion.desc': 'Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм твоей визуальной коммуникации.',
    'services.motion.feature1': 'Стильные анимации логотипов',
    'services.motion.feature2': 'Динамичный видеомонтаж',
    'services.motion.feature3': 'Тизеры, трейлеры, reels, stories…',
    'services.motion.feature4': 'Микро-анимации и плавные эффекты',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что говорят о моей работе',
    'testimonials.description': 'Несколько отзывов от клиентов, с которыми мне было приятно работать.',
    'testimonials.trustedBy': 'Они мне доверились',
    'testimonials.trustedByDesc': 'Бренды и предприниматели, которые выбрали мою креативную экспертизу',

    // Contact Section
    'contact.subtitle': '📬 Поговорим?',
    'contact.title1': 'Готов воплотить',
    'contact.title2': 'твой проект в жизнь?',
    'contact.description': 'Есть идея? Нужна визуальная помощь? Или просто хочешь посмотреть, подходим ли мы друг другу?\nНапиши мне, я отвечаю быстро (и всегда с удовольствием).',
    'contact.getInTouch': 'Расскажи о своих идеях',
    'contact.getInTouchDesc': 'Расскажи о своем проекте, целях, желаниях. Посмотрим вместе, как я могу тебе помочь.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Быстрый ответ гарантирован',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайся',
    'contact.sendMessage': 'Отправь мне сообщение',
    'contact.name': 'Твое имя',
    'contact.namePlaceholder': 'Как тебя зовут?',
    'contact.emailPlaceholder': 'твой.email@пример.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'О чем говорим?',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажи о своем проекте, идеях, потребностях...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer
    'footer.description': 'Универсальные креативные решения из Швейцарии. Я превращаю твои идеи в визуальные достижения, которые оставляют след.',
    'footer.quickLinks': 'Навигация',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный стиль',
    'footer.uiuxDesign': 'UI/UX дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Моушн графика',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель'
  },

  zh: {
    // Navigation
    'nav.about': '关于我',
    'nav.work': '我的作品',
    'nav.services': '我能做什么',
    'nav.contact': '聊聊？',
    'nav.letsTalk': '聊聊？',

    // Hero Section
    'hero.subtitle': '媒体技术员',
    'hero.greeting': '嘿，我是Theo Blondel。',
    'hero.title1': '多元化',
    'hero.title2': '创意',
    'hero.title3': '解决方案',
    'hero.description': '我是瑞士的媒体技术员，我把你的想法转化为干净、有影响力、真正有风格的视觉项目。\n\n如果你需要一个杀手级的logo、一个不烂的网站或者有意义的创意指导...你来对地方了。\n\n🎯 内心创意，形式高效。',
    'hero.contactMe': '聊聊？',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年经验',
    'hero.projectsDelivered': '项目交付',
    'hero.clientSatisfaction': '客户满意度',
    'hero.clientsWorldwide': '全球客户',
    'hero.service1.title': '品牌标识',
    'hero.service1.desc': '专业logo（不是Canva）',
    'hero.service2.title': '创意指导',
    'hero.service2.desc': '项目全局视野',
    'hero.service3.title': 'UI/UX设计',
    'hero.service3.desc': '简单流畅的界面',
    'hero.service4.title': '动态设计',
    'hero.service4.desc': '动画和流畅效果',

    // About Section
    'about.subtitle': '🔁 我的历程',
    'about.title1': '创造、折腾、学习…',
    'about.title2': '自2016年',
    'about.description1': '我像很多人一样开始：15岁时制作YouTube编辑，沉浸在像素和音效中。\nMinecraft、Fortnite、Call of...我花了几个小时测试、折腾、寻找有效的方法。',
    'about.description2': '然后绘画来了。接着是媒体技术。那时我明白了：我想做这个。创造。设计。让视觉想法活起来，与人们对话。\n\n从那时起，我与有动力的人一起做具体项目。我确保一切都清晰、流畅、专业——永远不忘记那个给予个性的小细节。',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': '完整套件掌握',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': '专业编辑和调色',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D和动态设计',
    'about.skill4.title': '🧠 figma（我知道）',
    'about.skill4.desc': 'UI/UX和原型制作',

    // Portfolio Section
    'portfolio.subtitle': '我的项目',
    'portfolio.title1': '一些我',
    'portfolio.title2': '喜欢做的东西',
    'portfolio.description': '展示我的风格和工作方式的项目精选。',
    'portfolio.viewAllBehance': '在Behance查看全部',

    // Services Section
    'services.subtitle': '💼 我能为你做什么',
    'services.title': '我的服务',
    'services.description': '完整的创意解决方案，让你的项目活起来',
    'services.startProject': '开始项目',

    // Brand Identity
    'services.brandIdentity.title': '🧬 品牌标识',
    'services.brandIdentity.desc': '需要一个酷炫的logo和讲述你是谁的形象？我帮你建立真正的身份——不只是快速logo。',
    'services.brandIdentity.feature1': 'Logo（专业的，不是Canva）',
    'services.brandIdentity.feature2': '清晰的品牌指南',
    'services.brandIdentity.feature3': '连贯的视觉身份',
    'services.brandIdentity.feature4': '站得住脚的品牌定位',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX设计',
    'services.uiux.desc': '好设计不只是漂亮。它必须有效。我创造简单、流畅、使用愉快的界面（即使对阿姨也是）。',
    'services.uiux.feature1': '用户研究',
    'services.uiux.feature2': '干净的线框图',
    'services.uiux.feature3': '像素完美的模型',
    'services.uiux.feature4': '测试看是否一切都有效',

    // Web Development
    'services.webDev.title': '🌐 网页开发',
    'services.webDev.desc': '真正有效的网站，不是第一次点击就崩溃的东西。',
    'services.webDev.feature1': '响应式网站（在手机上有效）',
    'services.webDev.feature2': '优化性能',
    'services.webDev.feature3': '集成SEO',
    'services.webDev.feature4': '包含维护',

    // Mobile Design
    'services.mobile.title': '📱 移动设计',
    'services.mobile.desc': '你的应用值得比默认模板更好的东西。我为你制作清晰、直观、在地铁上使用愉快的界面。',
    'services.mobile.feature1': 'iOS和Android设计',
    'services.mobile.feature2': '深思熟虑的用户旅程',
    'services.mobile.feature3': '流畅的入门',
    'services.mobile.feature4': '图标、菜单和所有产生差异的小细节',

    // Creative Direction
    'services.creative.title': '🧭 创意指导',
    'services.creative.desc': '你有想法，但希望一切都对齐、干净、连贯？我掌舵，你给方向。',
    'services.creative.feature1': '艺术指导',
    'services.creative.feature2': '视觉策略',
    'services.creative.feature3': '时尚但有用的建议',
    'services.creative.feature4': '项目全局视野',

    // Motion Graphics
    'services.motion.title': '🎞 动态设计和视频',
    'services.motion.desc': '移动良好的内容。我编辑、动画，为你的视觉传播赋予节奏。',
    'services.motion.feature1': '时尚的logo动画',
    'services.motion.feature2': '动态视频编辑',
    'services.motion.feature3': '预告片、拖车、reels、stories…',
    'services.motion.feature4': '微动画和流畅效果',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '他们对我工作的评价',
    'testimonials.description': '一些我有幸合作的客户的反馈。',
    'testimonials.trustedBy': '他们信任我',
    'testimonials.trustedByDesc': '选择我创意专长的品牌和企业家',

    // Contact Section
    'contact.subtitle': '📬 聊聊？',
    'contact.title1': '准备让你的',
    'contact.title2': '项目活起来？',
    'contact.description': '有想法？需要视觉帮助？或者只是想看看我们是否合拍？\n给我写信，我回复很快（总是很高兴）。',
    'contact.getInTouch': '告诉我你的想法',
    'contact.getInTouchDesc': '告诉我你的项目、目标、愿望。让我们一起看看我如何帮助你。',
    'contact.email': '邮箱',
    'contact.emailDesc': '保证快速回复',
    'contact.location': '位置',
    'contact.followMe': '关注我',
    'contact.sendMessage': '给我发消息',
    'contact.name': '你的名字',
    'contact.namePlaceholder': '你叫什么名字？',
    'contact.emailPlaceholder': '你的.邮箱@例子.com',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '我们在谈什么？',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我你的项目、想法、需求...',
    'contact.sendBtn': '发送消息',

    // Footer
    'footer.description': '基于瑞士的多元化创意解决方案。我把你的想法转化为留下印记的视觉成就。',
    'footer.quickLinks': '导航',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌标识',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': '动态图形',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  ja: {
    // Navigation
    'nav.about': '私について',
    'nav.work': '私の作品',
    'nav.services': '私ができること',
    'nav.contact': '話そう？',
    'nav.letsTalk': '話そう？',

    // Hero Section
    'hero.subtitle': 'メディアマティシャン',
    'hero.greeting': 'やあ、僕はTheo Blondelです。',
    'hero.title1': '多様な',
    'hero.title2': 'クリエイティブ',
    'hero.title3': 'ソリューション',
    'hero.description': '僕はスイスのメディアマティシャンで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変換します。\n\nキラーロゴ、ダサくないウェブサイト、意味のあるクリエイティブディレクションが必要なら...正しい場所にいます。\n\n🎯 心はクリエイティブ、形は効率的。',
    'hero.contactMe': '話そう？',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の経験',
    'hero.projectsDelivered': 'プロジェクト納品',
    'hero.clientSatisfaction': 'クライアント満足度',
    'hero.clientsWorldwide': '世界のクライアント',
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': 'プロのロゴ（Canvaじゃない）',
    'hero.service2.title': 'クリエイティブディレクション',
    'hero.service2.desc': 'プロジェクトのグローバルビジョン',
    'hero.service3.title': 'UI/UXデザイン',
    'hero.service3.desc': 'シンプルでスムーズなインターフェース',
    'hero.service4.title': 'モーションデザイン',
    'hero.service4.desc': 'アニメーションとスムーズエフェクト',

    // About Section
    'about.subtitle': '🔁 私の旅',
    'about.title1': '作る、いじる、学ぶ…',
    'about.title2': '2016年から',
    'about.description1': '多くの人と同じように始めました：15歳でYouTube編集、ピクセルと音響効果に頭を突っ込んで。\nMinecraft、Fortnite、Call of...何が機能するかを見つけるために、テスト、いじり、何時間も費やしました。',
    'about.description2': 'それから絵が来ました。次にメディアマティック。そしてそこで理解しました：これをやりたい。作る。デザインする。人々に語りかけるビジュアルアイデアに命を吹き込む。\n\nそれ以来、やる気のある人々と具体的なプロジェクトに取り組んでいます。すべてが明確で、スムーズで、プロフェッショナルであることを確認します—個性を与える小さな特別なものを決して忘れません。',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': '完全スイートマスター',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'プロ編集とグレーディング',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3Dとモーションデザイン',
    'about.skill4.title': '🧠 figma（知ってる）',
    'about.skill4.desc': 'UI/UXとプロトタイピング',

    // Portfolio Section
    'portfolio.subtitle': '私のプロジェクト',
    'portfolio.title1': '作るのが',
    'portfolio.title2': '好きだったもの',
    'portfolio.description': '私のスタイルと働き方を示すプロジェクトの選択。',
    'portfolio.viewAllBehance': 'Behanceですべて見る',

    // Services Section
    'services.subtitle': '💼 あなたのためにできること',
    'services.title': '私のサービス',
    'services.description': 'あなたのプロジェクトに命を吹き込む完全なクリエイティブソリューション',
    'services.startProject': 'プロジェクトを始める',

    // Brand Identity
    'services.brandIdentity.title': '🧬 ブランドアイデンティティ',
    'services.brandIdentity.desc': 'かっこいいロゴとあなたが誰かを語るイメージが必要？本当のアイデンティティを構築するお手伝いをします—ただの急ごしらえのロゴではなく。',
    'services.brandIdentity.feature1': 'ロゴ（プロ、Canvaじゃない）',
    'services.brandIdentity.feature2': '明確なブランドガイドライン',
    'services.brandIdentity.feature3': '一貫したビジュアルアイデンティティ',
    'services.brandIdentity.feature4': '持続するブランドポジショニング',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UXデザイン',
    'services.uiux.desc': '良いデザインはただ美しいだけではありません。機能しなければなりません。シンプルで、スムーズで、使いやすいインターフェースを作ります（おばあちゃんでも）。',
    'services.uiux.feature1': 'ユーザーリサーチ',
    'services.uiux.feature2': 'クリーンなワイヤーフレーム',
    'services.uiux.feature3': 'ピクセルパーフェクトなモックアップ',
    'services.uiux.feature4': 'すべてが機能するかのテスト',

    // Web Development
    'services.webDev.title': '🌐 ウェブ開発',
    'services.webDev.desc': '実際に機能するウェブサイト、最初のクリックでクラッシュするものではありません。',
    'services.webDev.feature1': 'レスポンシブサイト（モバイルで機能）',
    'services.webDev.feature2': '最適化されたパフォーマンス',
    'services.webDev.feature3': '統合SEO',
    'services.webDev.feature4': 'メンテナンス含む',

    // Mobile Design
    'services.mobile.title': '📱 モバイルデザイン',
    'services.mobile.desc': 'あなたのアプリはデフォルトテンプレートより良いものに値します。地下鉄で使うのが楽しい、明確で直感的なインターフェースを作ります。',
    'services.mobile.feature1': 'iOSとAndroidデザイン',
    'services.mobile.feature2': 'よく考えられたユーザージャーニー',
    'services.mobile.feature3': 'スムーズなオンボーディング',
    'services.mobile.feature4': 'アイコン、メニュー、違いを作るすべての小さな詳細',

    // Creative Direction
    'services.creative.title': '🧭 クリエイティブディレクション',
    'services.creative.desc': 'アイデアはあるけど、すべてが整列し、クリーンで一貫していることを望む？私がハンドルを取り、あなたが方向を与えます。',
    'services.creative.feature1': 'アートディレクション',
    'services.creative.feature2': 'ビジュアル戦略',
    'services.creative.feature3': 'スタイリッシュだが有用なアドバイス',
    'services.creative.feature4': 'プロジェクトのグローバルビジョン',

    // Motion Graphics
    'services.motion.title': '🎞 モーションデザインとビデオ',
    'services.motion.desc': 'よく動くコンテンツ。編集し、アニメートし、あなたのビジュアルコミュニケーションにリズムを与えます。',
    'services.motion.feature1': 'スタイリッシュなロゴアニメーション',
    'services.motion.feature2': 'ダイナミックビデオ編集',
    'services.motion.feature3': 'ティーザー、トレーラー、リール、ストーリー…',
    'services.motion.feature4': 'マイクロアニメーションとスムーズエフェクト',

    // Testimonials Section
    'testimonials.subtitle': '証言',
    'testimonials.title': '私の仕事について彼らが言うこと',
    'testimonials.description': '一緒に働く喜びを持ったクライアントからのフィードバック。',
    'testimonials.trustedBy': '彼らは私を信頼した',
    'testimonials.trustedByDesc': '私のクリエイティブ専門知識を選んだブランドと起業家',

    // Contact Section
    'contact.subtitle': '📬 話そう？',
    'contact.title1': 'あなたのプロジェクトに',
    'contact.title2': '命を吹き込む準備はできた？',
    'contact.description': 'アイデアがある？ビジュアルヘルプが必要？それとも私たちがクリックするかどうか見たい？\n私に書いて、速く返事します（いつも喜んで）。',
    'contact.getInTouch': 'あなたのアイデアを教えて',
    'contact.getInTouchDesc': 'あなたのプロジェクト、目標、願望について教えてください。どのようにお手伝いできるか一緒に見てみましょう。',
    'contact.email': 'メール',
    'contact.emailDesc': '迅速な返信保証',
    'contact.location': '場所',
    'contact.followMe': 'フォローして',
    'contact.sendMessage': 'メッセージを送って',
    'contact.name': 'あなたの名前',
    'contact.namePlaceholder': 'お名前は？',
    'contact.emailPlaceholder': 'あなたの.メール@例.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': '何について話している？',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクト、アイデア、ニーズについて教えて...',
    'contact.sendBtn': 'メッセージを送る',

    // Footer
    'footer.description': 'スイスベースの多様なクリエイティブソリューション。あなたのアイデアを印を残すビジュアル成果に変換します。',
    'footer.quickLinks': 'ナビゲーション',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作られた',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.work': 'Meine Arbeit',
    'nav.services': 'Was ich kann',
    'nav.contact': 'Reden wir?',
    'nav.letsTalk': 'Reden wir?',

    // Hero Section
    'hero.subtitle': 'Mediamatiker',
    'hero.greeting': 'Hey, ich bin Theo Blondel.',
    'hero.title1': 'Vielseitige',
    'hero.title2': 'kreative',
    'hero.title3': 'Lösungen',
    'hero.description': 'Ich bin Mediamatiker in der Schweiz und verwandle deine Ideen in saubere, wirkungsvolle und wirklich stylische visuelle Projekte.\n\nWenn du ein Killer-Logo, eine Website die nicht nervt oder kreative Führung die Sinn macht brauchst... bist du am richtigen Ort.\n\n🎯 Kreativ im Herzen, effizient in der Form.',
    'hero.contactMe': 'Reden wir?',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsDelivered': 'Projekte geliefert',
    'hero.clientSatisfaction': 'Kundenzufriedenheit',
    'hero.clientsWorldwide': 'Kunden weltweit',
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Professionelle Logos (nicht Canva)',
    'hero.service2.title': 'Kreative Führung',
    'hero.service2.desc': 'Globale Projektvision',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Einfache und flüssige Interfaces',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animationen und flüssige Effekte',

    // About Section
    'about.subtitle': '🔁 Meine Reise',
    'about.title1': 'Erstellen, basteln, lernen…',
    'about.title2': 'seit 2016',
    'about.description1': 'Ich habe wie viele angefangen: mit YouTube-Edits mit 15, Kopf voller Pixel und Soundeffekte.\nMinecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, Herausfinden was funktioniert.',
    'about.description2': 'Dann kam das Zeichnen. Dann Mediamatik. Und da verstand ich: Das will ich machen. Erstellen. Gestalten. Visuelle Ideen zum Leben erwecken, die zu Menschen sprechen.\n\nSeitdem arbeite ich an konkreten Projekten mit motivierten Leuten. Ich sorge dafür, dass alles klar, flüssig, professionell ist — vergesse nie das kleine Extra, das Persönlichkeit verleiht.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Komplette Suite gemeistert',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Profi-Editing und Grading',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D und Motion Design',
    'about.skill4.title': '🧠 figma (ich weiß)',
    'about.skill4.desc': 'UI/UX und Prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Projekte',
    'portfolio.title1': 'Einige Sachen',
    'portfolio.title2': 'die ich gerne gemacht habe',
    'portfolio.description': 'Eine Auswahl von Projekten, die meinen Stil und meine Arbeitsweise zeigen.',
    'portfolio.viewAllBehance': 'Alles auf Behance ansehen',

    // Services Section
    'services.subtitle': '💼 Was ich für dich tun kann',
    'services.title': 'Meine Services',
    'services.description': 'Komplette kreative Lösungen um deine Projekte zum Leben zu erwecken',
    'services.startProject': 'Projekt starten',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Markenidentität',
    'services.brandIdentity.desc': 'Brauchst du ein Logo das rockt und ein Image das erzählt wer du bist? Ich helfe dir eine echte Identität aufzubauen — nicht nur ein schnelles Logo.',
    'services.brandIdentity.feature1': 'Logo (profi, nicht Canva)',
    'services.brandIdentity.feature2': 'Klare Markenrichtlinien',
    'services.brandIdentity.feature3': 'Kohärente visuelle Identität',
    'services.brandIdentity.feature4': 'Markenpositionierung die hält',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Gutes Design ist nicht nur hübsch. Es muss funktionieren. Ich erstelle einfache, flüssige und angenehm zu nutzende Interfaces (sogar für Tante Gerda).',
    'services.uiux.feature1': 'Nutzerforschung',
    'services.uiux.feature2': 'Saubere Wireframes',
    'services.uiux.feature3': 'Pixel-perfekte Mockups',
    'services.uiux.feature4': 'Tests ob alles funktioniert',

    // Web Development
    'services.webDev.title': '🌐 Webentwicklung',
    'services.webDev.desc': 'Websites die wirklich funktionieren, nicht Zeug das beim ersten Klick abstürzt.',
    'services.webDev.feature1': 'Responsive Sites (funktioniert auf Mobile)',
    'services.webDev.feature2': 'Optimierte Performance',
    'services.webDev.feature3': 'Integriertes SEO',
    'services.webDev.feature4': 'Wartung inklusive',

    // Mobile Design
    'services.mobile.title': '📱 Mobile Design',
    'services.mobile.desc': 'Deine App verdient besser als ein Standard-Template. Ich mache dir ein klares, intuitives Interface das angenehm in der U-Bahn zu nutzen ist.',
    'services.mobile.feature1': 'iOS & Android Design',
    'services.mobile.feature2': 'Durchdachte User Journey',
    'services.mobile.feature3': 'Flüssiges Onboarding',
    'services.mobile.feature4': 'Icons, Menüs und alle kleinen Details die den Unterschied machen',

    // Creative Direction
    'services.creative.title': '🧭 Kreative Führung',
    'services.creative.desc': 'Du hast die Ideen, aber willst dass alles ausgerichtet, sauber und kohärent ist? Ich übernehme das Steuer, du gibst die Richtung.',
    'services.creative.feature1': 'Art Direction',
    'services.creative.feature2': 'Visuelle Strategie',
    'services.creative.feature3': 'Stylische aber nützliche Ratschläge',
    'services.creative.feature4': 'Globale Projektvision',

    // Motion Graphics
    'services.motion.title': '🎞 Motion Design & Video',
    'services.motion.desc': 'Content der sich gut bewegt. Ich schneide, animiere, gebe deiner visuellen Kommunikation Rhythmus.',
    'services.motion.feature1': 'Stylische Logo-Animationen',
    'services.motion.feature2': 'Dynamischer Videoschnitt',
    'services.motion.feature3': 'Teaser, Trailer, Reels, Stories…',
    'services.motion.feature4': 'Mikro-Animationen und flüssige Effekte',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was sie über meine Arbeit sagen',
    'testimonials.description': 'Einige Rückmeldungen von Kunden mit denen ich das Vergnügen hatte zu arbeiten.',
    'testimonials.trustedBy': 'Sie vertrauten mir',
    'testimonials.trustedByDesc': 'Marken und Unternehmer die meine kreative Expertise wählten',

    // Contact Section
    'contact.subtitle': '📬 Reden wir?',
    'contact.title1': 'Bereit dein Projekt',
    'contact.title2': 'zum Leben zu erwecken?',
    'contact.description': 'Hast du eine Idee? Brauchst visuelle Hilfe? Oder willst einfach sehen ob wir klicken?\nSchreib mir, ich antworte schnell (und immer mit Vergnügen).',
    'contact.getInTouch': 'Erzähl mir deine Ideen',
    'contact.getInTouchDesc': 'Erzähl mir von deinem Projekt, deinen Zielen, deinen Wünschen. Lass uns zusammen sehen wie ich dir helfen kann.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Schnelle Antwort garantiert',
    'contact.location': 'Standort',
    'contact.followMe': 'Folge mir',
    'contact.sendMessage': 'Schick mir eine Nachricht',
    'contact.name': 'Dein Name',
    'contact.namePlaceholder': 'Wie heißt du?',
    'contact.emailPlaceholder': 'deine.email@beispiel.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Worüber reden wir?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzähl mir von deinem Projekt, Ideen, Bedürfnissen...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer
    'footer.description': 'Vielseitige kreative Lösungen aus der Schweiz. Ich verwandle deine Ideen in visuelle Errungenschaften die Eindruck hinterlassen.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.work': 'I miei lavori',
    'nav.services': 'Cosa posso fare',
    'nav.contact': 'Parliamone?',
    'nav.letsTalk': 'Parliamone?',

    // Hero Section
    'hero.subtitle': 'mediamatico',
    'hero.greeting': 'Ehi, sono Theo Blondel.',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'creative',
    'hero.title3': 'versatili',
    'hero.description': 'Sono un mediamatico in Svizzera, e trasformo le tue idee in progetti visivi puliti, d\'impatto e davvero stilosi.\n\nSe hai bisogno di un logo che spacca, un sito che non fa schifo o una direzione creativa che ha senso... sei nel posto giusto.\n\n🎯 Creativo nel cuore, efficiente nella forma.',
    'hero.contactMe': 'Parliamone?',
    'hero.watchDemo': 'Guarda la demo',
    'hero.yearsExperience': 'Anni di esperienza',
    'hero.projectsDelivered': 'Progetti consegnati',
    'hero.clientSatisfaction': 'Soddisfazione clienti',
    'hero.clientsWorldwide': 'Clienti nel mondo',
    'hero.service1.title': 'Identità di marca',
    'hero.service1.desc': 'Loghi professionali (non Canva)',
    'hero.service2.title': 'Direzione creativa',
    'hero.service2.desc': 'Visione globale del progetto',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Interfacce semplici e fluide',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animazioni ed effetti fluidi',

    // About Section
    'about.subtitle': '🔁 Il mio percorso',
    'about.title1': 'Creare, smanettare, imparare…',
    'about.title2': 'dal 2016',
    'about.description1': 'Ho iniziato come molti: con montaggi YouTube a 15 anni, testa piena di pixel ed effetti sonori.\nMinecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare cosa funziona.',
    'about.description2': 'Poi è arrivato il disegno. Poi la mediamatica. E lì ho capito: voglio fare questo. Creare. Progettare. Dare vita a idee visive che parlano alle persone.\n\nDa allora, lavoro su progetti concreti con persone motivate. Faccio in modo che tutto sia chiaro, fluido, professionale — senza mai dimenticare quel piccolo qualcosa in più che dà personalità.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Suite completa padroneggiata',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Editing e grading pro',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D e motion design',
    'about.skill4.title': '🧠 figma (lo so)',
    'about.skill4.desc': 'UI/UX e prototipazione',

    // Portfolio Section
    'portfolio.subtitle': 'I miei progetti',
    'portfolio.title1': 'Alcune cose',
    'portfolio.title2': 'che mi è piaciuto fare',
    'portfolio.description': 'Una selezione di progetti che mostrano il mio stile e modo di lavorare.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Services Section
    'services.subtitle': '💼 Cosa posso fare per te',
    'services.title': 'I miei servizi',
    'services.description': 'Soluzioni creative complete per dare vita ai tuoi progetti',
    'services.startProject': 'Inizia un progetto',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Identità di marca',
    'services.brandIdentity.desc': 'Hai bisogno di un logo che spacca e un\'immagine che racconta chi sei? Ti aiuto a costruire una vera identità — non solo un logo veloce.',
    'services.brandIdentity.feature1': 'Logo (professionale, non Canva)',
    'services.brandIdentity.feature2': 'Linee guida del brand chiare',
    'services.brandIdentity.feature3': 'Identità visiva coerente',
    'services.brandIdentity.feature4': 'Posizionamento del brand che regge',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare (anche per zia Pina).',
    'services.uiux.feature1': 'Ricerca utente',
    'services.uiux.feature2': 'Wireframe puliti',
    'services.uiux.feature3': 'Mockup pixel-perfect',
    'services.uiux.feature4': 'Test per vedere se tutto funziona',

    // Web Development
    'services.webDev.title': '🌐 Sviluppo web',
    'services.webDev.desc': 'Siti web che funzionano davvero, non roba che crasha al primo click.',
    'services.webDev.feature1': 'Siti responsive (funziona su mobile)',
    'services.webDev.feature2': 'Performance ottimizzate',
    'services.webDev.feature3': 'SEO integrato',
    'services.webDev.feature4': 'Manutenzione inclusa',

    // Mobile Design
    'services.mobile.title': '📱 Design mobile',
    'services.mobile.desc': 'La tua app merita meglio di un template di default. Ti faccio un\'interfaccia chiara, intuitiva e piacevole da usare in metro.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'User journey ben pensato',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Icone, menu e tutti i piccoli dettagli che fanno la differenza',

    // Creative Direction
    'services.creative.title': '🧭 Direzione creativa',
    'services.creative.desc': 'Hai le idee, ma vuoi che tutto sia allineato, pulito e coerente? Prendo il volante io, tu dai la direzione.',
    'services.creative.feature1': 'Art direction',
    'services.creative.feature2': 'Strategia visiva',
    'services.creative.feature3': 'Consigli stilosi ma utili',
    'services.creative.feature4': 'Visione globale del progetto',

    // Motion Graphics
    'services.motion.title': '🎞 Motion design e video',
    'services.motion.desc': 'Contenuti che si muovono bene. Monto, animo, do ritmo alla tua comunicazione visiva.',
    'services.motion.feature1': 'Animazioni di loghi stilose',
    'services.motion.feature2': 'Montaggi video dinamici',
    'services.motion.feature3': 'Teaser, trailer, reel, stories…',
    'services.motion.feature4': 'Micro-animazioni ed effetti fluidi',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa dicono del mio lavoro',
    'testimonials.description': 'Alcuni feedback da clienti con cui ho avuto il piacere di lavorare.',
    'testimonials.trustedBy': 'Si sono fidati di me',
    'testimonials.trustedByDesc': 'Brand e imprenditori che hanno scelto la mia expertise creativa',

    // Contact Section
    'contact.subtitle': '📬 Parliamone?',
    'contact.title1': 'Pronto a dare vita',
    'contact.title2': 'al tuo progetto?',
    'contact.description': 'Hai un\'idea? Hai bisogno di aiuto visivo? O vuoi solo vedere se andiamo d\'accordo?\nScrivimi, rispondo veloce (e sempre con piacere).',
    'contact.getInTouch': 'Raccontami le tue idee',
    'contact.getInTouchDesc': 'Raccontami del tuo progetto, i tuoi obiettivi, i tuoi desideri. Vediamo insieme come posso aiutarti.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Risposta veloce garantita',
    'contact.location': 'Posizione',
    'contact.followMe': 'Seguimi',
    'contact.sendMessage': 'Mandami un messaggio',
    'contact.name': 'Il tuo nome',
    'contact.namePlaceholder': 'Come ti chiami?',
    'contact.emailPlaceholder': 'tua.email@esempio.com',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Di cosa parliamo?',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Raccontami del tuo progetto, idee, bisogni...',
    'contact.sendBtn': 'Invia messaggio',

    // Footer
    'footer.description': 'Soluzioni creative versatili dalla Svizzera. Trasformo le tue idee in risultati visivi che lasciano il segno.',
    'footer.quickLinks': 'Navigazione',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di marca',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Sviluppo web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  pt: {
    // Navigation
    'nav.about': 'Sobre mim',
    'nav.work': 'Meus trabalhos',
    'nav.services': 'O que posso fazer',
    'nav.contact': 'Vamos conversar?',
    'nav.letsTalk': 'Vamos conversar?',

    // Hero Section
    'hero.subtitle': 'mediamático',
    'hero.greeting': 'Ei, eu sou o Theo Blondel.',
    'hero.title1': 'Soluções',
    'hero.title2': 'criativas',
    'hero.title3': 'versáteis',
    'hero.description': 'Sou mediamático na Suíça, e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos.\n\nSe você precisa de um logo que arrasa, um site que não é uma porcaria ou direção criativa que faz sentido... você está no lugar certo.\n\n🎯 Criativo no coração, eficiente na forma.',
    'hero.contactMe': 'Vamos conversar?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Anos de experiência',
    'hero.projectsDelivered': 'Projetos entregues',
    'hero.clientSatisfaction': 'Satisfação do cliente',
    'hero.clientsWorldwide': 'Clientes no mundo',
    'hero.service1.title': 'Identidade de marca',
    'hero.service1.desc': 'Logos profissionais (não Canva)',
    'hero.service2.title': 'Direção criativa',
    'hero.service2.desc': 'Visão global do projeto',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Interfaces simples e fluidas',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animações e efeitos suaves',

    // About Section
    'about.subtitle': '🔁 Minha jornada',
    'about.title1': 'Criar, mexer, aprender…',
    'about.title2': 'desde 2016',
    'about.description1': 'Comecei como muitos: com edições do YouTube aos 15 anos, cabeça cheia de pixels e efeitos sonoros.\nMinecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.',
    'about.description2': 'Depois veio o desenho. Depois a mediamática. E aí entendi: quero fazer isso. Criar. Projetar. Dar vida a ideias visuais que falam com as pessoas.\n\nDesde então, trabalho em projetos concretos com pessoas motivadas. Faço com que tudo seja claro, fluido, profissional — sem nunca esquecer aquele toque especial que dá personalidade.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Suíte completa dominada',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Edição e correção profissional',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D e motion design',
    'about.skill4.title': '🧠 figma (eu sei)',
    'about.skill4.desc': 'UI/UX e prototipagem',

    // Portfolio Section
    'portfolio.subtitle': 'Meus projetos',
    'portfolio.title1': 'Algumas coisas',
    'portfolio.title2': 'que gostei de fazer',
    'portfolio.description': 'Uma seleção de projetos que mostram meu estilo e forma de trabalhar.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Services Section
    'services.subtitle': '💼 O que posso fazer por você',
    'services.title': 'Meus serviços',
    'services.description': 'Soluções criativas completas para dar vida aos seus projetos',
    'services.startProject': 'Começar um projeto',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Identidade de marca',
    'services.brandIdentity.desc': 'Precisa de um logo que arrasa e uma imagem que conta quem você é? Te ajudo a construir uma identidade real — não só um logo rápido.',
    'services.brandIdentity.feature1': 'Logo (profissional, não Canva)',
    'services.brandIdentity.feature2': 'Manual da marca claro',
    'services.brandIdentity.feature3': 'Identidade visual coerente',
    'services.brandIdentity.feature4': 'Posicionamento de marca que sustenta',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Um bom design não é só bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar (até para a tia Maria).',
    'services.uiux.feature1': 'Pesquisa de usuário',
    'services.uiux.feature2': 'Wireframes limpos',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Testes para ver se tudo funciona',

    // Web Development
    'services.webDev.title': '🌐 Desenvolvimento web',
    'services.webDev.desc': 'Sites que realmente funcionam, não coisas que quebram no primeiro clique.',
    'services.webDev.feature1': 'Sites responsivos (funciona no celular)',
    'services.webDev.feature2': 'Performance otimizada',
    'services.webDev.feature3': 'SEO integrado',
    'services.webDev.feature4': 'Manutenção incluída',

    // Mobile Design
    'services.mobile.title': '📱 Design mobile',
    'services.mobile.desc': 'Seu app merece melhor que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Jornada do usuário bem pensada',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Ícones, menus e todos os pequenos detalhes que fazem a diferença',

    // Creative Direction
    'services.creative.title': '🧭 Direção criativa',
    'services.creative.desc': 'Você tem as ideias, mas quer que tudo esteja alinhado, limpo e coerente? Eu pego o volante, você dá a direção.',
    'services.creative.feature1': 'Direção de arte',
    'services.creative.feature2': 'Estratégia visual',
    'services.creative.feature3': 'Conselhos estilosos mas úteis',
    'services.creative.feature4': 'Visão global do projeto',

    // Motion Graphics
    'services.motion.title': '🎞 Motion design e vídeo',
    'services.motion.desc': 'Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.',
    'services.motion.feature1': 'Animações de logos estilosas',
    'services.motion.feature2': 'Edição de vídeo dinâmica',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animações e efeitos suaves',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que dizem do meu trabalho',
    'testimonials.description': 'Alguns feedbacks de clientes com quem tive o prazer de trabalhar.',
    'testimonials.trustedBy': 'Eles confiaram em mim',
    'testimonials.trustedByDesc': 'Marcas e empreendedores que escolheram minha expertise criativa',

    // Contact Section
    'contact.subtitle': '📬 Vamos conversar?',
    'contact.title1': 'Pronto para dar vida',
    'contact.title2': 'ao seu projeto?',
    'contact.description': 'Tem uma ideia? Precisa de ajuda visual? Ou só quer ver se a gente se entende?\nMe escreve, respondo rápido (e sempre com prazer).',
    'contact.getInTouch': 'Me conta suas ideias',
    'contact.getInTouchDesc': 'Me conta sobre seu projeto, seus objetivos, seus desejos. Vamos ver juntos como posso te ajudar.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Resposta rápida garantida',
    'contact.location': 'Localização',
    'contact.followMe': 'Me segue',
    'contact.sendMessage': 'Me manda uma mensagem',
    'contact.name': 'Seu nome',
    'contact.namePlaceholder': 'Como você se chama?',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Do que vamos falar?',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Me conta sobre seu projeto, ideias, necessidades...',
    'contact.sendBtn': 'Enviar mensagem',

    // Footer
    'footer.description': 'Soluções criativas versáteis da Suíça. Transformo suas ideias em conquistas visuais que marcam.',
    'footer.quickLinks': 'Navegação',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de marca',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Desenvolvimento web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel'
  },

  sq: {
    // Navigation
    'nav.about': 'Rreth meje',
    'nav.work': 'Punimet e mia',
    'nav.services': 'Çfarë mund të bëj',
    'nav.contact': 'Të flasim?',
    'nav.letsTalk': 'Të flasim?',

    // Hero Section
    'hero.subtitle': 'mediamatiçien',
    'hero.greeting': 'Hej, unë jam Theo Blondel.',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'kreative',
    'hero.title3': 'të shumëllojshme',
    'hero.description': 'Jam mediamatiçien në Zvicër, dhe i transformoj idetë e tua në projekte vizuale të pastra, me ndikim dhe vërtet me stil.\n\nNëse ke nevojë për një logo që bën përshtypje, një faqe interneti që nuk të mërzit ose drejtim kreativ që ka kuptim... je në vendin e duhur.\n\n🎯 Kreativ në zemër, efikas në formë.',
    'hero.contactMe': 'Të flasim?',
    'hero.watchDemo': 'Shiko demon',
    'hero.yearsExperience': 'Vite përvojë',
    'hero.projectsDelivered': 'Projekte të dorëzuara',
    'hero.clientSatisfaction': 'Kënaqësia e klientit',
    'hero.clientsWorldwide': 'Klientë në botë',
    'hero.service1.title': 'Identiteti i markës',
    'hero.service1.desc': 'Logo profesionale (jo Canva)',
    'hero.service2.title': 'Drejtimi kreativ',
    'hero.service2.desc': 'Vizioni global i projektit',
    'hero.service3.title': 'UI/UX Design',
    'hero.service3.desc': 'Ndërfaqe të thjeshta dhe të rrjedhshme',
    'hero.service4.title': 'Motion Design',
    'hero.service4.desc': 'Animacione dhe efekte të rrjedhshme',

    // About Section
    'about.subtitle': '🔁 Rrugëtimi im',
    'about.title1': 'Krijoj, eksperimentoj, mësoj…',
    'about.title2': 'që nga 2016',
    'about.description1': 'Fillova si shumë të tjerë: me montime YouTube në moshën 15 vjeç, kokën plot me pixel dhe efekte zanore.\nMinecraft, Fortnite, Call of... Kalova orë duke testuar, eksperimentuar, duke kërkuar atë që funksionon.',
    'about.description2': 'Pastaj erdhi vizatimi. Më pas mediamatiçien. Dhe atëherë e kuptova: dua ta bëj këtë. Të krijoj. Të projektoj. T\'u jap jetë ideve vizuale që flasin me njerëzit.\n\nQë atëherë, punoj në projekte konkrete me njerëz të motivuar. Sigurohem që gjithçka të jetë e qartë, e rrjedhshme, profesionale — pa harruar kurrë atë diçka të veçantë që jep personalitet.',
    'about.skill1.title': '🎯 adobe',
    'about.skill1.desc': 'Paketa e plotë e zotëruar',
    'about.skill2.title': '🧭 davinci resolve',
    'about.skill2.desc': 'Montim dhe gradim profesional',
    'about.skill3.title': '🎞 autodesk',
    'about.skill3.desc': '3D dhe motion design',
    'about.skill4.title': '🧠 figma (e di)',
    'about.skill4.desc': 'UI/UX dhe prototipim',

    // Portfolio Section
    'portfolio.subtitle': 'Projektet e mia',
    'portfolio.title1': 'Disa gjëra',
    'portfolio.title2': 'që më pëlqeu t\'i bëj',
    'portfolio.description': 'Një përzgjedhje projektesh që tregojnë stilin tim dhe mënyrën time të punës.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Services Section
    'services.subtitle': '💼 Çfarë mund të bëj për ty',
    'services.title': 'Shërbimet e mia',
    'services.description': 'Zgjidhje kreative të plota për t\'u dhënë jetë projekteve të tua',
    'services.startProject': 'Fillo një projekt',

    // Brand Identity
    'services.brandIdentity.title': '🧬 Identiteti i markës',
    'services.brandIdentity.desc': 'Ke nevojë për një logo që bën përshtypje dhe një imazh që tregon se kush je? Të ndihmoj të ndërtosh një identitet të vërtetë — jo vetëm një logo të shpejtë.',
    'services.brandIdentity.feature1': 'Logo (profesionale, jo Canva)',
    'services.brandIdentity.feature2': 'Udhëzime të qarta të markës',
    'services.brandIdentity.feature3': 'Identitet vizual i qëndrueshëm',
    'services.brandIdentity.feature4': 'Pozicionim marke që qëndron',

    // UI/UX Design
    'services.uiux.title': '🧠 UI/UX Design',
    'services.uiux.desc': 'Një dizajn i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur (edhe për tezen Fatme).',
    'services.uiux.feature1': 'Kërkimi i përdoruesit',
    'services.uiux.feature2': 'Wireframes të pastra',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Teste për të parë nëse gjithçka funksionon',

    // Web Development
    'services.webDev.title': '🌐 Zhvillimi web',
    'services.webDev.desc': 'Faqe interneti që funksionojnë vërtet, jo gjëra që prishen në klikimin e parë.',
    'services.webDev.feature1': 'Faqe responsive (funksionon në celular)',
    'services.webDev.feature2': 'Performance e optimizuar',
    'services.webDev.feature3': 'SEO i integruar',
    'services.webDev.feature4': 'Mirëmbajtja e përfshirë',

    // Mobile Design
    'services.mobile.title': '📱 Dizajni mobil',
    'services.mobile.desc': 'Aplikacioni yt meriton më shumë se një template i paracaktuar. Të bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t\'u përdorur në metro.',
    'services.mobile.feature1': 'Dizajn iOS dhe Android',
    'services.mobile.feature2': 'Rrugëtimi i përdoruesit i menduar mirë',
    'services.mobile.feature3': 'Onboarding i rrjedhshëm',
    'services.mobile.feature4': 'Ikona, menu dhe të gjitha detajet e vogla që bëjnë ndryshimin',

    // Creative Direction
    'services.creative.title': '🧭 Drejtimi kreativ',
    'services.creative.desc': 'Ke idetë, por do që gjithçka të jetë e rreshtuar, e pastër dhe e qëndrueshme? Unë marr timonin, ti jep drejtimin.',
    'services.creative.feature1': 'Drejtimi artistik',
    'services.creative.feature2': 'Strategjia vizuale',
    'services.creative.feature3': 'Këshilla me stil por të dobishme',
    'services.creative.feature4': 'Vizioni global i projektit',

    // Motion Graphics
    'services.motion.title': '🎞 Motion design dhe video',
    'services.motion.desc': 'Përmbajtje që lëviz mirë. Montoj, animoj, i jap ritëm komunikimit tënd vizual.',
    'services.motion.feature1': 'Animacione logo me stil',
    'services.motion.feature2': 'Montim video dinamik',
    'services.motion.feature3': 'Teaser, trailer, reel, stories…',
    'services.motion.feature4': 'Mikro-animacione dhe efekte të rrjedhshme',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmi',
    'testimonials.title': 'Çfarë thonë për punën time',
    'testimonials.description': 'Disa komente nga klientë me të cilët pata kënaqësinë të punoj.',
    'testimonials.trustedBy': 'Ata më besuan',
    'testimonials.trustedByDesc': 'Marka dhe sipërmarrës që zgjodhën ekspertizën time kreative',

    // Contact Section
    'contact.subtitle': '📬 Të flasim?',
    'contact.title1': 'Gati t\'i japësh jetë',
    'contact.title2': 'projektit tënd?',
    'contact.description': 'Ke një ide? Ke nevojë për ndihmë vizuale? Apo thjesht do të shohësh nëse përputhen?\nMë shkruaj, përgjigjem shpejt (dhe gjithmonë me kënaqësi).',
    'contact.getInTouch': 'Më trego idetë e tua',
    'contact.getInTouchDesc': 'Më trego për projektin tënd, objektivat e tua, dëshirat e tua. Le të shohim së bashku si mund të të ndihmoj.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Përgjigje e shpejtë e garantuar',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më ndiq',
    'contact.sendMessage': 'Më dërgo një mesazh',
    'contact.name': 'Emri yt',
    'contact.namePlaceholder': 'Si të quajnë?',
    'contact.emailPlaceholder': 'email.yt@shembull.com',
    'contact.subject': 'Tema',
    'contact.subjectPlaceholder': 'Për çfarë flasim?',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më trego për projektin tënd, idetë, nevojat...',
    'contact.sendBtn': 'Dërgo mesazhin',

    // Footer
    'footer.description': 'Zgjidhje kreative të shumëllojshme nga Zvicra. I transformoj idetë e tua në arritje vizuale që lënë gjurmë.',
    'footer.quickLinks': 'Navigimi',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i markës',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Zhvillimi web',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel'
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

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}