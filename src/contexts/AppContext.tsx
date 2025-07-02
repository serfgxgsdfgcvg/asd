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
    'nav.about': 'Mon Parcours',
    'nav.work': 'Mes Projets',
    'nav.services': 'Ce que je fais',
    'nav.contact': 'On discute ?',
    'nav.letsTalk': 'On en parle ?',

    // Hero Section
    'hero.subtitle': 'médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés. Si t\'as besoin d\'un logo qui en jette, d\'un site qui fait pas fuir ou d\'une direction créative qui a du sens… t\'es au bon endroit.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Identité de Marque',
    'hero.service1.desc': 'Logo pro, charte graphique, identité visuelle cohérente',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces simples, fluides et agréables à utiliser',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Animations stylées, montages dynamiques, effets smooth',
    'hero.service4.title': 'Direction Créative',
    'hero.service4.desc': 'Vision globale, stratégie visuelle, conseils utiles',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'Créatif dans le fond,',
    'about.title2': 'efficace dans la forme',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 15 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens. Depuis, je bosse sur des projets concrets avec des gens motivés. Je fais en sorte que tout soit clair, fluide, pro — sans jamais oublier le petit truc en plus qui donne de la personnalité.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - les classiques maîtrisés',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Interface design et prototypage (je sais, tout le monde dit ça)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Montage vidéo et étalonnage pro',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animation et effets visuels',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui m\'ont marqué. Du logo qui claque au site qui cartonne, en passant par des animations qui donnent envie.',
    'portfolio.viewAllBehance': 'Voir tout sur Behance',

    // Services Section
    'services.subtitle': 'Ce que je peux faire pour toi',
    'services.title': 'Mes Services',
    'services.description': 'Que ce soit pour créer ton identité de marque, designer ton interface ou donner vie à tes idées en motion, je m\'adapte à tes besoins.',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser (même pour tata Josiane).',
    'services.uiux.feature1': 'Recherche utilisateur',
    'services.uiux.feature2': 'Wireframes propres',
    'services.uiux.feature3': 'Maquettes pixel-perfect',
    'services.uiux.feature4': 'Tests pour voir si tout tient',

    'services.webDev.title': 'Direction Créative',
    'services.webDev.desc': 'T\'as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.webDev.feature1': 'Direction artistique',
    'services.webDev.feature2': 'Stratégie visuelle',
    'services.webDev.feature3': 'Conseils stylés mais utiles',
    'services.webDev.feature4': 'Vision globale du projet',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.mobile.feature1': 'Design iOS & Android',
    'services.mobile.feature2': 'Parcours utilisateur bien pensé',
    'services.mobile.feature3': 'Onboarding fluide',
    'services.mobile.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    'services.creative.title': 'Design Print',
    'services.creative.desc': 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
    'services.creative.feature1': 'Mise en page soignée',
    'services.creative.feature2': 'Bon choix de typo (pas Comic Sans, t\'inquiète)',
    'services.creative.feature3': 'Harmonies de couleurs au petit oignon',
    'services.creative.feature4': 'Fichiers prêts pour l\'imprimeur',

    'services.motion.title': 'Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    'services.startProject': 'On lance un projet ?',

    // Testimonials Section
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce qu\'ils en pensent',
    'testimonials.description': 'Quelques retours de clients avec qui j\'ai eu le plaisir de bosser. Spoiler : ça s\'est bien passé.',
    'testimonials.trustedBy': 'Ils m\'ont fait confiance',
    'testimonials.trustedByDesc': 'Des startups aux grandes entreprises, on a créé ensemble des trucs qui marchent.',

    // Contact Section
    'contact.subtitle': 'On discute ?',
    'contact.title1': 'T\'as une idée ?',
    'contact.title2': 'Parlons-en !',
    'contact.description': 'T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ? Écris-moi, je réponds vite (et toujours avec plaisir).',
    'contact.getInTouch': 'Comment me joindre',
    'contact.getInTouchDesc': 'Que ce soit pour un projet, une question ou juste pour dire salut, n\'hésite pas à me contacter.',
    'contact.email': 'Email',
    'contact.emailDesc': 'La façon la plus rapide de me joindre',
    'contact.location': 'Localisation',
    'contact.followMe': 'Suis-moi',
    'contact.sendMessage': 'Envoie-moi un message',
    'contact.name': 'Ton nom',
    'contact.namePlaceholder': 'Comment tu t\'appelles ?',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'De quoi tu veux qu\'on parle ?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Raconte-moi ton projet, tes idées, tes envies...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer Section
    'footer.description': 'Médiamaticien basé en Suisse, je transforme tes idées en projets visuels qui claquent. Toujours partant pour de nouveaux défis créatifs.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de Marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Direction Créative',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.about': 'About Me',
    'nav.work': 'My Work',
    'nav.services': 'What I Do',
    'nav.contact': 'Let\'s Talk',
    'nav.letsTalk': 'Let\'s Talk',

    // Hero Section
    'hero.subtitle': 'mediamatician',
    'hero.greeting': 'Hey, I\'m Theo Blondel.',
    'hero.title1': 'Versatile',
    'hero.title2': 'creative solutions',
    'hero.description': 'I\'m a mediamatician in Switzerland, and I transform your ideas into clean, impactful, and really stylish visual projects. If you need a logo that rocks, a website that doesn\'t suck, or creative direction that makes sense... you\'re in the right place.',
    'hero.contactMe': 'Let\'s talk?',
    'hero.watchDemo': 'Watch demo',
    'hero.yearsExperience': 'Years of experience',
    'hero.projectsDelivered': 'Projects delivered',
    'hero.clientSatisfaction': 'Client satisfaction',
    'hero.clientsWorldwide': 'Clients worldwide',
    'hero.service1.title': 'Brand Identity',
    'hero.service1.desc': 'Professional logo, brand guidelines, cohesive visual identity',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Simple, smooth and pleasant interfaces to use',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Stylish animations, dynamic editing, smooth effects',
    'hero.service4.title': 'Creative Direction',
    'hero.service4.desc': 'Global vision, visual strategy, useful advice',

    // About Section
    'about.subtitle': 'My Journey',
    'about.title1': 'Creative at heart,',
    'about.title2': 'efficient in form',
    'about.description1': 'I started like many: with YouTube montages at 15, head in pixels and sound effects. Minecraft, Fortnite, Call of... I spent hours testing, tinkering, looking for what works.',
    'about.description2': 'Then drawing came. Then mediamatique. And there, I got it: I want to do this. Create. Design. Bring visual ideas to life that speak to people. Since then, I work on concrete projects with motivated people. I make sure everything is clear, smooth, professional — never forgetting that little extra something that gives personality.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - the mastered classics',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Interface design and prototyping (I know, everyone says that)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Professional video editing and color grading',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animation and visual effects',

    // Portfolio Section
    'portfolio.subtitle': 'My Projects',
    'portfolio.title1': 'Some stuff',
    'portfolio.title2': 'I loved making',
    'portfolio.description': 'A selection of projects that marked me. From the logo that rocks to the site that kills it, including animations that make you want more.',
    'portfolio.viewAllBehance': 'View all on Behance',

    // Services Section
    'services.subtitle': 'What I can do for you',
    'services.title': 'My Services',
    'services.description': 'Whether it\'s creating your brand identity, designing your interface or bringing your ideas to life in motion, I adapt to your needs.',

    'services.brandIdentity.title': 'Brand Identity',
    'services.brandIdentity.desc': 'Need a logo that rocks and an image that tells who you are? I help you build a real identity — not just a quick logo.',
    'services.brandIdentity.feature1': 'Logo (professional, not on Canva)',
    'services.brandIdentity.feature2': 'Clear brand guidelines',
    'services.brandIdentity.feature3': 'Cohesive visual identity',
    'services.brandIdentity.feature4': 'Brand positioning that holds up',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Good design isn\'t just pretty. It has to work. I create simple, smooth and pleasant interfaces to use (even for aunt Josiane).',
    'services.uiux.feature1': 'User research',
    'services.uiux.feature2': 'Clean wireframes',
    'services.uiux.feature3': 'Pixel-perfect mockups',
    'services.uiux.feature4': 'Tests to see if everything holds',

    'services.webDev.title': 'Creative Direction',
    'services.webDev.desc': 'You have the ideas, but you want everything to be aligned, clean and coherent? I take the wheel, you give me the direction.',
    'services.webDev.feature1': 'Art direction',
    'services.webDev.feature2': 'Visual strategy',
    'services.webDev.feature3': 'Stylish but useful advice',
    'services.webDev.feature4': 'Global project vision',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Your app deserves better than a default template. I make you a clear, intuitive interface, pleasant to use on the subway.',
    'services.mobile.feature1': 'iOS & Android design',
    'services.mobile.feature2': 'Well-thought user journey',
    'services.mobile.feature3': 'Smooth onboarding',
    'services.mobile.feature4': 'Icons, menus, and all the little details that make the difference',

    'services.creative.title': 'Print Design',
    'services.creative.desc': 'Stuff you can touch. Flyers, cards, posters — everything that\'s read with eyes and hands.',
    'services.creative.feature1': 'Careful layout',
    'services.creative.feature2': 'Good typography choice (not Comic Sans, don\'t worry)',
    'services.creative.feature3': 'Perfect color harmonies',
    'services.creative.feature4': 'Files ready for the printer',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Content that moves well. I edit, animate, give rhythm to your visual communication.',
    'services.motion.feature1': 'Stylish logo animations',
    'services.motion.feature2': 'Dynamic video editing',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animations and smooth effects',

    'services.startProject': 'Start a project?',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What they think',
    'testimonials.description': 'Some feedback from clients I had the pleasure to work with. Spoiler: it went well.',
    'testimonials.trustedBy': 'They trusted me',
    'testimonials.trustedByDesc': 'From startups to large companies, we created together stuff that works.',

    // Contact Section
    'contact.subtitle': 'Let\'s talk?',
    'contact.title1': 'Got an idea?',
    'contact.title2': 'Let\'s talk about it!',
    'contact.description': 'Need visual help? Or just want to know if we could work together? Write me, I answer quickly (and always with pleasure).',
    'contact.getInTouch': 'How to reach me',
    'contact.getInTouchDesc': 'Whether for a project, a question or just to say hi, don\'t hesitate to contact me.',
    'contact.email': 'Email',
    'contact.emailDesc': 'The fastest way to reach me',
    'contact.location': 'Location',
    'contact.followMe': 'Follow me',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Your name',
    'contact.namePlaceholder': 'What\'s your name?',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What do you want to talk about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project, your ideas, your desires...',
    'contact.sendBtn': 'Send message',

    // Footer Section
    'footer.description': 'Mediamatician based in Switzerland, I transform your ideas into visual projects that rock. Always up for new creative challenges.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Brand Identity',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Creative Direction',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Made with',
    'footer.inSwitzerland': 'in Switzerland',
    'footer.allRights': '© 2024 Theo Blondel. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.work': 'Mi Trabajo',
    'nav.services': 'Qué Hago',
    'nav.contact': '¿Hablamos?',
    'nav.letsTalk': '¿Hablamos?',

    // Hero Section
    'hero.subtitle': 'mediamático',
    'hero.greeting': 'Hola, soy Theo Blondel.',
    'hero.title1': 'Soluciones',
    'hero.title2': 'creativas versátiles',
    'hero.description': 'Soy mediamático en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente elegantes. Si necesitas un logo que impresione, un sitio que no espante o una dirección creativa que tenga sentido... estás en el lugar correcto.',
    'hero.contactMe': '¿Hablamos?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Años de experiencia',
    'hero.projectsDelivered': 'Proyectos entregados',
    'hero.clientSatisfaction': 'Satisfacción del cliente',
    'hero.clientsWorldwide': 'Clientes en el mundo',
    'hero.service1.title': 'Identidad de Marca',
    'hero.service1.desc': 'Logo profesional, manual de marca, identidad visual cohesiva',
    'hero.service2.title': 'Diseño UI/UX',
    'hero.service2.desc': 'Interfaces simples, fluidas y agradables de usar',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Animaciones elegantes, edición dinámica, efectos suaves',
    'hero.service4.title': 'Dirección Creativa',
    'hero.service4.desc': 'Visión global, estrategia visual, consejos útiles',

    // About Section
    'about.subtitle': 'Mi Trayectoria',
    'about.title1': 'Creativo en el fondo,',
    'about.title2': 'eficiente en la forma',
    'about.description1': 'Empecé como muchos: con montajes de YouTube a los 15 años, la cabeza en píxeles y efectos de sonido. Minecraft, Fortnite, Call of... Pasé horas probando, trasteando, buscando lo que funciona.',
    'about.description2': 'Luego llegó el dibujo. Después, la mediamática. Y ahí lo entendí: quiero hacer esto. Crear. Diseñar. Dar vida a ideas visuales que hablen a la gente. Desde entonces, trabajo en proyectos concretos con gente motivada. Me aseguro de que todo sea claro, fluido, profesional — sin olvidar nunca ese pequeño extra que da personalidad.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - los clásicos dominados',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Diseño de interfaces y prototipado (lo sé, todos dicen eso)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Edición de video profesional y corrección de color',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animación y efectos visuales',

    // Portfolio Section
    'portfolio.subtitle': 'Mis Proyectos',
    'portfolio.title1': 'Algunas cosas',
    'portfolio.title2': 'que me encantó hacer',
    'portfolio.description': 'Una selección de proyectos que me marcaron. Desde el logo que impresiona hasta el sitio que arrasa, pasando por animaciones que dan ganas de más.',
    'portfolio.viewAllBehance': 'Ver todo en Behance',

    // Services Section
    'services.subtitle': 'Qué puedo hacer por ti',
    'services.title': 'Mis Servicios',
    'services.description': 'Ya sea crear tu identidad de marca, diseñar tu interfaz o dar vida a tus ideas en movimiento, me adapto a tus necesidades.',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': '¿Necesitas un logo que impresione y una imagen que cuente quién eres? Te ayudo a construir una identidad real — no solo un logo rápido.',
    'services.brandIdentity.feature1': 'Logo (profesional, no en Canva)',
    'services.brandIdentity.feature2': 'Manual de marca claro',
    'services.brandIdentity.feature3': 'Identidad visual cohesiva',
    'services.brandIdentity.feature4': 'Posicionamiento de marca sólido',

    'services.uiux.title': 'Diseño UI/UX',
    'services.uiux.desc': 'Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar (incluso para la tía Josefina).',
    'services.uiux.feature1': 'Investigación de usuario',
    'services.uiux.feature2': 'Wireframes limpios',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Pruebas para ver si todo funciona',

    'services.webDev.title': 'Dirección Creativa',
    'services.webDev.desc': '¿Tienes las ideas, pero quieres que todo esté alineado, limpio y coherente? Yo tomo el volante, tú me das la dirección.',
    'services.webDev.feature1': 'Dirección artística',
    'services.webDev.feature2': 'Estrategia visual',
    'services.webDev.feature3': 'Consejos elegantes pero útiles',
    'services.webDev.feature4': 'Visión global del proyecto',

    'services.mobile.title': 'Diseño Móvil',
    'services.mobile.desc': 'Tu app merece algo mejor que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.',
    'services.mobile.feature1': 'Diseño iOS y Android',
    'services.mobile.feature2': 'Recorrido de usuario bien pensado',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Iconos, menús y todos los pequeños detalles que marcan la diferencia',

    'services.creative.title': 'Diseño Impreso',
    'services.creative.desc': 'Cosas que se pueden tocar. Flyers, tarjetas, carteles — todo lo que se lee con los ojos y las manos.',
    'services.creative.feature1': 'Maquetación cuidada',
    'services.creative.feature2': 'Buena elección tipográfica (no Comic Sans, tranquilo)',
    'services.creative.feature3': 'Armonías de color perfectas',
    'services.creative.feature4': 'Archivos listos para imprenta',

    'services.motion.title': 'Motion Design y Video',
    'services.motion.desc': 'Contenido que se mueve bien. Edito, animo, doy ritmo a tu comunicación visual.',
    'services.motion.feature1': 'Animaciones de logos elegantes',
    'services.motion.feature2': 'Edición de videos dinámica',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animaciones y efectos suaves',

    'services.startProject': '¿Empezamos un proyecto?',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonios',
    'testimonials.title': 'Qué piensan',
    'testimonials.description': 'Algunos comentarios de clientes con los que tuve el placer de trabajar. Spoiler: salió bien.',
    'testimonials.trustedBy': 'Confiaron en mí',
    'testimonials.trustedByDesc': 'Desde startups hasta grandes empresas, creamos juntos cosas que funcionan.',

    // Contact Section
    'contact.subtitle': '¿Hablamos?',
    'contact.title1': '¿Tienes una idea?',
    'contact.title2': '¡Hablemos de ello!',
    'contact.description': '¿Necesitas ayuda visual? ¿O solo quieres saber si podríamos trabajar juntos? Escríbeme, respondo rápido (y siempre con gusto).',
    'contact.getInTouch': 'Cómo contactarme',
    'contact.getInTouchDesc': 'Ya sea para un proyecto, una pregunta o solo para saludar, no dudes en contactarme.',
    'contact.email': 'Email',
    'contact.emailDesc': 'La forma más rápida de contactarme',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme',
    'contact.sendMessage': 'Envíame un mensaje',
    'contact.name': 'Tu nombre',
    'contact.namePlaceholder': '¿Cómo te llamas?',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿De qué quieres que hablemos?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto, tus ideas, tus deseos...',
    'contact.sendBtn': 'Enviar mensaje',

    // Footer Section
    'footer.description': 'Mediamático con base en Suiza, transformo tus ideas en proyectos visuales que impresionan. Siempre listo para nuevos desafíos creativos.',
    'footer.quickLinks': 'Navegación',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de Marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Dirección Creativa',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.',
  },
  ru: {
    // Navigation
    'nav.about': 'Обо мне',
    'nav.work': 'Мои работы',
    'nav.services': 'Что я делаю',
    'nav.contact': 'Поговорим?',
    'nav.letsTalk': 'Поговорим?',

    // Hero Section
    'hero.subtitle': 'медиаматик',
    'hero.greeting': 'Привет, я Тео Блондель.',
    'hero.title1': 'Универсальные',
    'hero.title2': 'креативные решения',
    'hero.description': 'Я медиаматик в Швейцарии, и я превращаю твои идеи в чистые, впечатляющие и действительно стильные визуальные проекты. Если тебе нужен логотип, который впечатляет, сайт, который не отпугивает, или креативное направление, которое имеет смысл... ты в правильном месте.',
    'hero.contactMe': 'Поговорим?',
    'hero.watchDemo': 'Посмотреть демо',
    'hero.yearsExperience': 'Лет опыта',
    'hero.projectsDelivered': 'Проектов выполнено',
    'hero.clientSatisfaction': 'Удовлетворенность клиентов',
    'hero.clientsWorldwide': 'Клиентов по всему миру',
    'hero.service1.title': 'Фирменный стиль',
    'hero.service1.desc': 'Профессиональный логотип, брендбук, целостная визуальная идентичность',
    'hero.service2.title': 'UI/UX дизайн',
    'hero.service2.desc': 'Простые, плавные и приятные в использовании интерфейсы',
    'hero.service3.title': 'Моушн дизайн',
    'hero.service3.desc': 'Стильная анимация, динамичный монтаж, плавные эффекты',
    'hero.service4.title': 'Креативное направление',
    'hero.service4.desc': 'Глобальное видение, визуальная стратегия, полезные советы',

    // About Section
    'about.subtitle': 'Мой путь',
    'about.title1': 'Креативный по сути,',
    'about.title2': 'эффективный по форме',
    'about.description1': 'Я начинал как многие: с монтажей YouTube в 15 лет, с головой в пикселях и звуковых эффектах. Minecraft, Fortnite, Call of... Я проводил часы, тестируя, экспериментируя, ища то, что работает.',
    'about.description2': 'Потом пришло рисование. Затем медиаматика. И тут я понял: я хочу заниматься этим. Создавать. Проектировать. Воплощать визуальные идеи, которые говорят с людьми. С тех пор я работаю над конкретными проектами с мотивированными людьми. Я забочусь о том, чтобы все было ясно, плавно, профессионально — никогда не забывая о той маленькой изюминке, которая придает индивидуальность.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - освоенная классика',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Дизайн интерфейсов и прототипирование (знаю, все так говорят)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Профессиональный видеомонтаж и цветокоррекция',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, анимация и визуальные эффекты',

    // Portfolio Section
    'portfolio.subtitle': 'Мои проекты',
    'portfolio.title1': 'Некоторые вещи,',
    'portfolio.title2': 'которые мне понравилось делать',
    'portfolio.description': 'Подборка проектов, которые меня впечатлили. От логотипа, который впечатляет, до сайта, который убивает, включая анимации, которые заставляют хотеть большего.',
    'portfolio.viewAllBehance': 'Посмотреть все на Behance',

    // Services Section
    'services.subtitle': 'Что я могу для тебя сделать',
    'services.title': 'Мои услуги',
    'services.description': 'Будь то создание твоей фирменной идентичности, дизайн интерфейса или воплощение твоих идей в движении, я адаптируюсь к твоим потребностям.',

    'services.brandIdentity.title': 'Фирменный стиль',
    'services.brandIdentity.desc': 'Нужен логотип, который впечатляет, и образ, который рассказывает, кто ты? Я помогу тебе построить настоящую идентичность — не просто быстрый логотип.',
    'services.brandIdentity.feature1': 'Логотип (профессиональный, не в Canva)',
    'services.brandIdentity.feature2': 'Четкий брендбук',
    'services.brandIdentity.feature3': 'Целостная визуальная идентичность',
    'services.brandIdentity.feature4': 'Позиционирование бренда, которое держится',

    'services.uiux.title': 'UI/UX дизайн',
    'services.uiux.desc': 'Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы (даже для тети Жозианы).',
    'services.uiux.feature1': 'Исследование пользователей',
    'services.uiux.feature2': 'Чистые wireframes',
    'services.uiux.feature3': 'Pixel-perfect макеты',
    'services.uiux.feature4': 'Тесты, чтобы увидеть, все ли работает',

    'services.webDev.title': 'Креативное направление',
    'services.webDev.desc': 'У тебя есть идеи, но ты хочешь, чтобы все было выровнено, чисто и последовательно? Я беру руль, ты даешь направление.',
    'services.webDev.feature1': 'Арт-направление',
    'services.webDev.feature2': 'Визуальная стратегия',
    'services.webDev.feature3': 'Стильные, но полезные советы',
    'services.webDev.feature4': 'Глобальное видение проекта',

    'services.mobile.title': 'Мобильный дизайн',
    'services.mobile.desc': 'Твое приложение заслуживает лучшего, чем шаблон по умолчанию. Я делаю тебе четкий, интуитивный интерфейс, приятный в использовании в метро.',
    'services.mobile.feature1': 'Дизайн для iOS и Android',
    'services.mobile.feature2': 'Продуманный пользовательский путь',
    'services.mobile.feature3': 'Плавный onboarding',
    'services.mobile.feature4': 'Иконки, меню и все мелкие детали, которые делают разницу',

    'services.creative.title': 'Печатный дизайн',
    'services.creative.desc': 'Вещи, которые можно потрогать. Флаеры, карточки, постеры — все, что читается глазами и руками.',
    'services.creative.feature1': 'Аккуратная верстка',
    'services.creative.feature2': 'Хороший выбор типографики (не Comic Sans, не волнуйся)',
    'services.creative.feature3': 'Идеальные цветовые гармонии',
    'services.creative.feature4': 'Файлы, готовые для печати',

    'services.motion.title': 'Моушн дизайн и видео',
    'services.motion.desc': 'Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм твоей визуальной коммуникации.',
    'services.motion.feature1': 'Стильная анимация логотипов',
    'services.motion.feature2': 'Динамичный видеомонтаж',
    'services.motion.feature3': 'Тизеры, трейлеры, reels, stories...',
    'services.motion.feature4': 'Микро-анимации и плавные эффекты',

    'services.startProject': 'Начнем проект?',

    // Testimonials Section
    'testimonials.subtitle': 'Отзывы',
    'testimonials.title': 'Что они думают',
    'testimonials.description': 'Несколько отзывов от клиентов, с которыми мне было приятно работать. Спойлер: все прошло хорошо.',
    'testimonials.trustedBy': 'Они мне доверились',
    'testimonials.trustedByDesc': 'От стартапов до крупных компаний, мы вместе создали вещи, которые работают.',

    // Contact Section
    'contact.subtitle': 'Поговорим?',
    'contact.title1': 'Есть идея?',
    'contact.title2': 'Давай поговорим об этом!',
    'contact.description': 'Нужна визуальная помощь? Или просто хочешь узнать, сможем ли мы работать вместе? Напиши мне, я отвечаю быстро (и всегда с удовольствием).',
    'contact.getInTouch': 'Как со мной связаться',
    'contact.getInTouchDesc': 'Будь то проект, вопрос или просто поздороваться, не стесняйся связаться со мной.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Самый быстрый способ связаться со мной',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайся',
    'contact.sendMessage': 'Отправь мне сообщение',
    'contact.name': 'Твое имя',
    'contact.namePlaceholder': 'Как тебя зовут?',
    'contact.emailPlaceholder': 'твой.email@пример.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'О чем ты хочешь поговорить?',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажи мне о своем проекте, идеях, желаниях...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer Section
    'footer.description': 'Медиаматик из Швейцарии, я превращаю твои идеи в визуальные проекты, которые впечатляют. Всегда готов к новым творческим вызовам.',
    'footer.quickLinks': 'Навигация',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный стиль',
    'footer.uiuxDesign': 'UI/UX дизайн',
    'footer.webDevelopment': 'Креативное направление',
    'footer.motionGraphics': 'Моушн дизайн',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель. Все права защищены.',
  },
  zh: {
    // Navigation
    'nav.about': '关于我',
    'nav.work': '我的作品',
    'nav.services': '我的服务',
    'nav.contact': '联系我',
    'nav.letsTalk': '聊聊吧',

    // Hero Section
    'hero.subtitle': '媒体技术专家',
    'hero.greeting': '嗨，我是Theo Blondel。',
    'hero.title1': '多元化',
    'hero.title2': '创意解决方案',
    'hero.description': '我是瑞士的媒体技术专家，将你的想法转化为干净、有影响力且真正时尚的视觉项目。如果你需要一个令人印象深刻的标志、一个不会让人逃跑的网站或有意义的创意指导...你来对地方了。',
    'hero.contactMe': '聊聊吧？',
    'hero.watchDemo': '观看演示',
    'hero.yearsExperience': '年经验',
    'hero.projectsDelivered': '完成项目',
    'hero.clientSatisfaction': '客户满意度',
    'hero.clientsWorldwide': '全球客户',
    'hero.service1.title': '品牌识别',
    'hero.service1.desc': '专业标志、品牌指南、统一视觉识别',
    'hero.service2.title': 'UI/UX设计',
    'hero.service2.desc': '简单、流畅且使用愉快的界面',
    'hero.service3.title': '动态设计',
    'hero.service3.desc': '时尚动画、动态编辑、流畅效果',
    'hero.service4.title': '创意指导',
    'hero.service4.desc': '全局视野、视觉策略、有用建议',

    // About Section
    'about.subtitle': '我的历程',
    'about.title1': '内心创意，',
    'about.title2': '形式高效',
    'about.description1': '我像许多人一样开始：15岁时制作YouTube剪辑，沉浸在像素和音效中。Minecraft、Fortnite、Call of...我花了几个小时测试、摸索、寻找有效的方法。',
    'about.description2': '然后绘画来了。接着是媒体技术。在那里，我明白了：我想做这个。创造。设计。让与人们对话的视觉想法变为现实。从那时起，我与有动力的人一起从事具体项目。我确保一切都清晰、流畅、专业——永远不忘记那个给予个性的小额外元素。',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop、Illustrator、InDesign - 掌握的经典',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': '界面设计和原型制作（我知道，每个人都这么说）',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': '专业视频编辑和调色',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D、动画和视觉效果',

    // Portfolio Section
    'portfolio.subtitle': '我的项目',
    'portfolio.title1': '一些我',
    'portfolio.title2': '喜欢制作的东西',
    'portfolio.description': '一些让我印象深刻的项目选择。从令人印象深刻的标志到杀手级网站，包括让人想要更多的动画。',
    'portfolio.viewAllBehance': '在Behance上查看全部',

    // Services Section
    'services.subtitle': '我能为你做什么',
    'services.title': '我的服务',
    'services.description': '无论是创建你的品牌识别、设计你的界面还是让你的想法在动态中活跃起来，我都会适应你的需求。',

    'services.brandIdentity.title': '品牌识别',
    'services.brandIdentity.desc': '需要一个令人印象深刻的标志和一个讲述你是谁的形象？我帮你建立真正的身份——不只是一个快速标志。',
    'services.brandIdentity.feature1': '标志（专业的，不是在Canva上）',
    'services.brandIdentity.feature2': '清晰的品牌指南',
    'services.brandIdentity.feature3': '统一的视觉识别',
    'services.brandIdentity.feature4': '站得住脚的品牌定位',

    'services.uiux.title': 'UI/UX设计',
    'services.uiux.desc': '好的设计不只是漂亮。它必须工作。我创建简单、流畅且使用愉快的界面（即使对约瑟芬阿姨也是如此）。',
    'services.uiux.feature1': '用户研究',
    'services.uiux.feature2': '干净的线框图',
    'services.uiux.feature3': '像素完美的模型',
    'services.uiux.feature4': '测试看看一切是否有效',

    'services.webDev.title': '创意指导',
    'services.webDev.desc': '你有想法，但你希望一切都对齐、干净和连贯？我掌舵，你给我方向。',
    'services.webDev.feature1': '艺术指导',
    'services.webDev.feature2': '视觉策略',
    'services.webDev.feature3': '时尚但有用的建议',
    'services.webDev.feature4': '项目的全局视野',

    'services.mobile.title': '移动设计',
    'services.mobile.desc': '你的应用程序值得比默认模板更好的东西。我为你制作一个清晰、直观的界面，在地铁里使用愉快。',
    'services.mobile.feature1': 'iOS和Android设计',
    'services.mobile.feature2': '深思熟虑的用户旅程',
    'services.mobile.feature3': '流畅的入门',
    'services.mobile.feature4': '图标、菜单和所有产生差异的小细节',

    'services.creative.title': '印刷设计',
    'services.creative.desc': '可以触摸的东西。传单、卡片、海报——所有用眼睛和手阅读的东西。',
    'services.creative.feature1': '精心布局',
    'services.creative.feature2': '好的字体选择（不是Comic Sans，别担心）',
    'services.creative.feature3': '完美的色彩和谐',
    'services.creative.feature4': '准备好打印的文件',

    'services.motion.title': '动态设计和视频',
    'services.motion.desc': '移动良好的内容。我编辑、动画，为你的视觉传播赋予节奏。',
    'services.motion.feature1': '时尚的标志动画',
    'services.motion.feature2': '动态视频编辑',
    'services.motion.feature3': '预告片、拖车、卷轴、故事...',
    'services.motion.feature4': '微动画和流畅效果',

    'services.startProject': '开始一个项目？',

    // Testimonials Section
    'testimonials.subtitle': '推荐',
    'testimonials.title': '他们的想法',
    'testimonials.description': '一些我有幸合作的客户的反馈。剧透：进展顺利。',
    'testimonials.trustedBy': '他们信任我',
    'testimonials.trustedByDesc': '从初创公司到大企业，我们一起创造了有效的东西。',

    // Contact Section
    'contact.subtitle': '聊聊吧？',
    'contact.title1': '有想法？',
    'contact.title2': '让我们谈谈吧！',
    'contact.description': '需要视觉帮助？或者只是想知道我们是否可以一起工作？写信给我，我回复很快（总是很高兴）。',
    'contact.getInTouch': '如何联系我',
    'contact.getInTouchDesc': '无论是项目、问题还是只是打招呼，请随时联系我。',
    'contact.email': '邮箱',
    'contact.emailDesc': '联系我最快的方式',
    'contact.location': '位置',
    'contact.followMe': '关注我',
    'contact.sendMessage': '给我发消息',
    'contact.name': '你的名字',
    'contact.namePlaceholder': '你叫什么名字？',
    'contact.emailPlaceholder': '你的.邮箱@例子.com',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '你想谈什么？',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我你的项目、想法、愿望...',
    'contact.sendBtn': '发送消息',

    // Footer Section
    'footer.description': '瑞士媒体技术专家，我将你的想法转化为令人印象深刻的视觉项目。总是准备迎接新的创意挑战。',
    'footer.quickLinks': '导航',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌识别',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '创意指导',
    'footer.motionGraphics': '动态设计',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 保留所有权利。',
  },
  ja: {
    // Navigation
    'nav.about': '私について',
    'nav.work': '私の作品',
    'nav.services': '私のサービス',
    'nav.contact': '話しましょう',
    'nav.letsTalk': '話しましょう',

    // Hero Section
    'hero.subtitle': 'メディアマティシャン',
    'hero.greeting': 'こんにちは、テオ・ブロンデルです。',
    'hero.title1': '多様な',
    'hero.title2': 'クリエイティブソリューション',
    'hero.description': '私はスイスのメディアマティシャンで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変換します。印象的なロゴ、逃げ出さないサイト、または意味のあるクリエイティブディレクションが必要なら...正しい場所にいます。',
    'hero.contactMe': '話しましょうか？',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の経験',
    'hero.projectsDelivered': '完了プロジェクト',
    'hero.clientSatisfaction': 'クライアント満足度',
    'hero.clientsWorldwide': '世界中のクライアント',
    'hero.service1.title': 'ブランドアイデンティティ',
    'hero.service1.desc': 'プロフェッショナルロゴ、ブランドガイドライン、統一されたビジュアルアイデンティティ',
    'hero.service2.title': 'UI/UXデザイン',
    'hero.service2.desc': 'シンプルで滑らかで使いやすいインターフェース',
    'hero.service3.title': 'モーションデザイン',
    'hero.service3.desc': 'スタイリッシュなアニメーション、ダイナミックな編集、滑らかな効果',
    'hero.service4.title': 'クリエイティブディレクション',
    'hero.service4.desc': 'グローバルビジョン、ビジュアル戦略、有用なアドバイス',

    // About Section
    'about.subtitle': '私の旅',
    'about.title1': '心はクリエイティブ、',
    'about.title2': '形は効率的',
    'about.description1': '私は多くの人と同じように始めました：15歳でYouTubeモンタージュ、ピクセルと音響効果に頭を突っ込んで。Minecraft、Fortnite、Call of...何が機能するかを探して、テスト、いじくり回し、何時間も費やしました。',
    'about.description2': 'それから絵が来ました。次にメディアマティック。そしてそこで、私は理解しました：これをやりたい。創造する。設計する。人々に語りかけるビジュアルアイデアに命を吹き込む。それ以来、私は意欲的な人々と具体的なプロジェクトに取り組んでいます。すべてが明確で、滑らかで、プロフェッショナルであることを確認します—個性を与える小さな追加要素を決して忘れません。',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop、Illustrator、InDesign - マスターされたクラシック',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'インターフェースデザインとプロトタイピング（知っています、みんなそう言います）',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'プロフェッショナルビデオ編集とカラーグレーディング',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D、アニメーション、ビジュアルエフェクト',

    // Portfolio Section
    'portfolio.subtitle': '私のプロジェクト',
    'portfolio.title1': 'いくつかの',
    'portfolio.title2': '作るのが好きだったもの',
    'portfolio.description': '私を印象づけたプロジェクトの選択。印象的なロゴからキラーサイトまで、もっと欲しくなるアニメーションを含む。',
    'portfolio.viewAllBehance': 'Behanceですべて見る',

    // Services Section
    'services.subtitle': 'あなたのためにできること',
    'services.title': '私のサービス',
    'services.description': 'あなたのブランドアイデンティティの作成、インターフェースのデザイン、またはあなたのアイデアをモーションで生き生きとさせることであれ、私はあなたのニーズに適応します。',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': '印象的なロゴとあなたが誰であるかを語る画像が必要ですか？私はあなたが本当のアイデンティティを構築するのを手伝います—ただの急いで作ったロゴではありません。',
    'services.brandIdentity.feature1': 'ロゴ（プロフェッショナル、Canvaではない）',
    'services.brandIdentity.feature2': '明確なブランドガイドライン',
    'services.brandIdentity.feature3': '統一されたビジュアルアイデンティティ',
    'services.brandIdentity.feature4': '持続するブランドポジショニング',

    'services.uiux.title': 'UI/UXデザイン',
    'services.uiux.desc': '良いデザインは単に美しいだけではありません。機能しなければなりません。私はシンプルで滑らかで使いやすいインターフェースを作成します（ジョジアンおばさんにとってさえも）。',
    'services.uiux.feature1': 'ユーザーリサーチ',
    'services.uiux.feature2': 'クリーンなワイヤーフレーム',
    'services.uiux.feature3': 'ピクセルパーフェクトなモックアップ',
    'services.uiux.feature4': 'すべてが機能するかどうかを確認するテスト',

    'services.webDev.title': 'クリエイティブディレクション',
    'services.webDev.desc': 'あなたはアイデアを持っていますが、すべてが整列し、クリーンで一貫していることを望みますか？私がハンドルを取り、あなたが方向を与えます。',
    'services.webDev.feature1': 'アートディレクション',
    'services.webDev.feature2': 'ビジュアル戦略',
    'services.webDev.feature3': 'スタイリッシュだが有用なアドバイス',
    'services.webDev.feature4': 'プロジェクトのグローバルビジョン',

    'services.mobile.title': 'モバイルデザイン',
    'services.mobile.desc': 'あなたのアプリはデフォルトテンプレートよりも良いものに値します。私はあなたに明確で直感的で、地下鉄で使うのが楽しいインターフェースを作ります。',
    'services.mobile.feature1': 'iOSとAndroidデザイン',
    'services.mobile.feature2': 'よく考えられたユーザージャーニー',
    'services.mobile.feature3': 'スムーズなオンボーディング',
    'services.mobile.feature4': 'アイコン、メニュー、そして違いを生むすべての小さな詳細',

    'services.creative.title': '印刷デザイン',
    'services.creative.desc': '触れることができるもの。フライヤー、カード、ポスター—目と手で読むすべてのもの。',
    'services.creative.feature1': '丁寧なレイアウト',
    'services.creative.feature2': '良いタイポグラフィの選択（Comic Sansではない、心配しないで）',
    'services.creative.feature3': '完璧な色の調和',
    'services.creative.feature4': '印刷業者向けの準備されたファイル',

    'services.motion.title': 'モーションデザインとビデオ',
    'services.motion.desc': 'よく動くコンテンツ。私は編集し、アニメートし、あなたのビジュアルコミュニケーションにリズムを与えます。',
    'services.motion.feature1': 'スタイリッシュなロゴアニメーション',
    'services.motion.feature2': 'ダイナミックなビデオ編集',
    'services.motion.feature3': 'ティーザー、トレーラー、リール、ストーリー...',
    'services.motion.feature4': 'マイクロアニメーションとスムーズエフェクト',

    'services.startProject': 'プロジェクトを始めますか？',

    // Testimonials Section
    'testimonials.subtitle': '推薦状',
    'testimonials.title': '彼らの考え',
    'testimonials.description': '一緒に働く喜びを持ったクライアントからのいくつかのフィードバック。ネタバレ：うまくいきました。',
    'testimonials.trustedBy': '彼らは私を信頼した',
    'testimonials.trustedByDesc': 'スタートアップから大企業まで、私たちは一緒に機能するものを作りました。',

    // Contact Section
    'contact.subtitle': '話しましょうか？',
    'contact.title1': 'アイデアがありますか？',
    'contact.title2': 'それについて話しましょう！',
    'contact.description': 'ビジュアルヘルプが必要ですか？または私たちが一緒に働けるかどうか知りたいだけですか？私に書いてください、私は速く答えます（そして常に喜んで）。',
    'contact.getInTouch': '私に連絡する方法',
    'contact.getInTouchDesc': 'プロジェクト、質問、または単に挨拶のためであれ、遠慮なく私に連絡してください。',
    'contact.email': 'メール',
    'contact.emailDesc': '私に連絡する最も速い方法',
    'contact.location': '場所',
    'contact.followMe': 'フォローして',
    'contact.sendMessage': 'メッセージを送って',
    'contact.name': 'あなたの名前',
    'contact.namePlaceholder': 'あなたの名前は何ですか？',
    'contact.emailPlaceholder': 'あなたの.メール@例.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': '何について話したいですか？',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクト、アイデア、願望について教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer Section
    'footer.description': 'スイスを拠点とするメディアマティシャン、私はあなたのアイデアを印象的なビジュアルプロジェクトに変換します。常に新しいクリエイティブチャレンジの準備ができています。',
    'footer.quickLinks': 'ナビゲーション',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'クリエイティブディレクション',
    'footer.motionGraphics': 'モーションデザイン',
    'footer.madeWith': '作られた',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 テオ・ブロンデル. すべての権利予約済み。',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.work': 'Meine Arbeit',
    'nav.services': 'Was ich mache',
    'nav.contact': 'Lass uns reden',
    'nav.letsTalk': 'Lass uns reden',

    // Hero Section
    'hero.subtitle': 'Mediamatiker',
    'hero.greeting': 'Hey, ich bin Theo Blondel.',
    'hero.title1': 'Vielseitige',
    'hero.title2': 'kreative Lösungen',
    'hero.description': 'Ich bin Mediamatiker in der Schweiz und verwandle deine Ideen in saubere, wirkungsvolle und wirklich stylische visuelle Projekte. Wenn du ein Logo brauchst, das rockt, eine Website, die nicht abschreckt, oder eine kreative Richtung, die Sinn macht... bist du am richtigen Ort.',
    'hero.contactMe': 'Lass uns reden?',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsDelivered': 'Projekte geliefert',
    'hero.clientSatisfaction': 'Kundenzufriedenheit',
    'hero.clientsWorldwide': 'Kunden weltweit',
    'hero.service1.title': 'Markenidentität',
    'hero.service1.desc': 'Professionelles Logo, Markenrichtlinien, kohärente visuelle Identität',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Einfache, flüssige und angenehm zu bedienende Schnittstellen',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Stylische Animationen, dynamische Bearbeitung, flüssige Effekte',
    'hero.service4.title': 'Kreative Leitung',
    'hero.service4.desc': 'Globale Vision, visuelle Strategie, nützliche Beratung',

    // About Section
    'about.subtitle': 'Meine Reise',
    'about.title1': 'Kreativ im Herzen,',
    'about.title2': 'effizient in der Form',
    'about.description1': 'Ich habe wie viele angefangen: mit YouTube-Montagen mit 15, den Kopf voller Pixel und Soundeffekte. Minecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, auf der Suche nach dem, was funktioniert.',
    'about.description2': 'Dann kam das Zeichnen. Dann die Mediamatik. Und da verstand ich: Das will ich machen. Erschaffen. Entwerfen. Visuelle Ideen zum Leben erwecken, die zu den Menschen sprechen. Seitdem arbeite ich an konkreten Projekten mit motivierten Menschen. Ich sorge dafür, dass alles klar, flüssig, professionell ist — ohne jemals das kleine Extra zu vergessen, das Persönlichkeit verleiht.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - die beherrschten Klassiker',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Interface-Design und Prototyping (ich weiß, das sagen alle)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Professionelle Videobearbeitung und Farbkorrektur',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, Animation und visuelle Effekte',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Projekte',
    'portfolio.title1': 'Einige Sachen,',
    'portfolio.title2': 'die ich gerne gemacht habe',
    'portfolio.description': 'Eine Auswahl von Projekten, die mich geprägt haben. Vom Logo, das rockt, bis zur Website, die killt, einschließlich Animationen, die Lust auf mehr machen.',
    'portfolio.viewAllBehance': 'Alles auf Behance ansehen',

    // Services Section
    'services.subtitle': 'Was ich für dich tun kann',
    'services.title': 'Meine Dienstleistungen',
    'services.description': 'Ob es darum geht, deine Markenidentität zu erstellen, dein Interface zu designen oder deine Ideen in Bewegung zum Leben zu erwecken, ich passe mich deinen Bedürfnissen an.',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Brauchst du ein Logo, das rockt, und ein Bild, das erzählt, wer du bist? Ich helfe dir, eine echte Identität aufzubauen — nicht nur ein schnelles Logo.',
    'services.brandIdentity.feature1': 'Logo (professionell, nicht auf Canva)',
    'services.brandIdentity.feature2': 'Klare Markenrichtlinien',
    'services.brandIdentity.feature3': 'Kohärente visuelle Identität',
    'services.brandIdentity.feature4': 'Markenpositionierung, die standhält',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Gutes Design ist nicht nur hübsch. Es muss funktionieren. Ich erstelle einfache, flüssige und angenehm zu bedienende Schnittstellen (sogar für Tante Josiane).',
    'services.uiux.feature1': 'Benutzerforschung',
    'services.uiux.feature2': 'Saubere Wireframes',
    'services.uiux.feature3': 'Pixel-perfekte Mockups',
    'services.uiux.feature4': 'Tests, um zu sehen, ob alles funktioniert',

    'services.webDev.title': 'Kreative Leitung',
    'services.webDev.desc': 'Du hast die Ideen, aber du willst, dass alles ausgerichtet, sauber und kohärent ist? Ich übernehme das Steuer, du gibst mir die Richtung.',
    'services.webDev.feature1': 'Art Direction',
    'services.webDev.feature2': 'Visuelle Strategie',
    'services.webDev.feature3': 'Stylische aber nützliche Beratung',
    'services.webDev.feature4': 'Globale Projektvision',

    'services.mobile.title': 'Mobile Design',
    'services.mobile.desc': 'Deine App verdient besser als ein Standard-Template. Ich mache dir eine klare, intuitive Schnittstelle, die in der U-Bahn angenehm zu bedienen ist.',
    'services.mobile.feature1': 'iOS & Android Design',
    'services.mobile.feature2': 'Durchdachte Benutzerreise',
    'services.mobile.feature3': 'Flüssiges Onboarding',
    'services.mobile.feature4': 'Icons, Menüs und all die kleinen Details, die den Unterschied machen',

    'services.creative.title': 'Print Design',
    'services.creative.desc': 'Sachen, die man anfassen kann. Flyer, Karten, Plakate — alles, was mit Augen und Händen gelesen wird.',
    'services.creative.feature1': 'Sorgfältiges Layout',
    'services.creative.feature2': 'Gute Typografie-Wahl (nicht Comic Sans, keine Sorge)',
    'services.creative.feature3': 'Perfekte Farbharmonien',
    'services.creative.feature4': 'Druckfertige Dateien',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Inhalte, die sich gut bewegen. Ich schneide, animiere, gebe deiner visuellen Kommunikation Rhythmus.',
    'services.motion.feature1': 'Stylische Logo-Animationen',
    'services.motion.feature2': 'Dynamische Videobearbeitung',
    'services.motion.feature3': 'Teaser, Trailer, Reels, Stories...',
    'services.motion.feature4': 'Mikro-Animationen und flüssige Effekte',

    'services.startProject': 'Ein Projekt starten?',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'Was sie denken',
    'testimonials.description': 'Einige Rückmeldungen von Kunden, mit denen ich das Vergnügen hatte zu arbeiten. Spoiler: Es lief gut.',
    'testimonials.trustedBy': 'Sie vertrauten mir',
    'testimonials.trustedByDesc': 'Von Startups bis zu großen Unternehmen, wir haben zusammen Sachen geschaffen, die funktionieren.',

    // Contact Section
    'contact.subtitle': 'Lass uns reden?',
    'contact.title1': 'Hast du eine Idee?',
    'contact.title2': 'Lass uns darüber sprechen!',
    'contact.description': 'Brauchst du visuelle Hilfe? Oder willst du nur wissen, ob wir zusammenarbeiten könnten? Schreib mir, ich antworte schnell (und immer gerne).',
    'contact.getInTouch': 'Wie du mich erreichst',
    'contact.getInTouchDesc': 'Ob für ein Projekt, eine Frage oder einfach nur zum Hallo sagen, zögere nicht, mich zu kontaktieren.',
    'contact.email': 'E-Mail',
    'contact.emailDesc': 'Der schnellste Weg, mich zu erreichen',
    'contact.location': 'Standort',
    'contact.followMe': 'Folge mir',
    'contact.sendMessage': 'Schick mir eine Nachricht',
    'contact.name': 'Dein Name',
    'contact.namePlaceholder': 'Wie heißt du?',
    'contact.emailPlaceholder': 'deine.email@beispiel.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Worüber willst du sprechen?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzähl mir von deinem Projekt, deinen Ideen, deinen Wünschen...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer Section
    'footer.description': 'Mediamatiker aus der Schweiz, ich verwandle deine Ideen in visuelle Projekte, die rocken. Immer bereit für neue kreative Herausforderungen.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Dienstleistungen',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Kreative Leitung',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel. Alle Rechte vorbehalten.',
  },
  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.work': 'Il mio lavoro',
    'nav.services': 'Cosa faccio',
    'nav.contact': 'Parliamone',
    'nav.letsTalk': 'Parliamone',

    // Hero Section
    'hero.subtitle': 'mediamatico',
    'hero.greeting': 'Ciao, sono Theo Blondel.',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'creative versatili',
    'hero.description': 'Sono un mediamatico in Svizzera, e trasformo le tue idee in progetti visivi puliti, d\'impatto e davvero stilosi. Se hai bisogno di un logo che spacca, di un sito che non fa scappare o di una direzione creativa che ha senso... sei nel posto giusto.',
    'hero.contactMe': 'Parliamone?',
    'hero.watchDemo': 'Guarda la demo',
    'hero.yearsExperience': 'Anni di esperienza',
    'hero.projectsDelivered': 'Progetti consegnati',
    'hero.clientSatisfaction': 'Soddisfazione clienti',
    'hero.clientsWorldwide': 'Clienti nel mondo',
    'hero.service1.title': 'Identità di Brand',
    'hero.service1.desc': 'Logo professionale, linee guida del brand, identità visiva coerente',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfacce semplici, fluide e piacevoli da usare',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Animazioni stilose, editing dinamico, effetti fluidi',
    'hero.service4.title': 'Direzione Creativa',
    'hero.service4.desc': 'Visione globale, strategia visiva, consigli utili',

    // About Section
    'about.subtitle': 'Il mio percorso',
    'about.title1': 'Creativo nel cuore,',
    'about.title2': 'efficiente nella forma',
    'about.description1': 'Ho iniziato come molti: con montaggi YouTube a 15 anni, la testa nei pixel e negli effetti sonori. Minecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare quello che funziona.',
    'about.description2': 'Poi è arrivato il disegno. Poi la mediamatica. E lì ho capito: voglio fare questo. Creare. Progettare. Dare vita a idee visive che parlano alle persone. Da allora, lavoro su progetti concreti con persone motivate. Faccio in modo che tutto sia chiaro, fluido, professionale — senza mai dimenticare quel piccolo extra che dà personalità.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - i classici padroneggiati',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Design di interfacce e prototipazione (lo so, lo dicono tutti)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Editing video professionale e color grading',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animazione ed effetti visivi',

    // Portfolio Section
    'portfolio.subtitle': 'I miei progetti',
    'portfolio.title1': 'Alcune cose',
    'portfolio.title2': 'che mi è piaciuto fare',
    'portfolio.description': 'Una selezione di progetti che mi hanno segnato. Dal logo che spacca al sito che sfonda, passando per animazioni che fanno venire voglia di più.',
    'portfolio.viewAllBehance': 'Vedi tutto su Behance',

    // Services Section
    'services.subtitle': 'Cosa posso fare per te',
    'services.title': 'I miei servizi',
    'services.description': 'Che si tratti di creare la tua identità di brand, progettare la tua interfaccia o dare vita alle tue idee in movimento, mi adatto alle tue esigenze.',

    'services.brandIdentity.title': 'Identità di Brand',
    'services.brandIdentity.desc': 'Hai bisogno di un logo che spacca e di un\'immagine che racconta chi sei? Ti aiuto a costruire una vera identità — non solo un logo fatto in fretta.',
    'services.brandIdentity.feature1': 'Logo (professionale, non su Canva)',
    'services.brandIdentity.feature2': 'Linee guida del brand chiare',
    'services.brandIdentity.feature3': 'Identità visiva coerente',
    'services.brandIdentity.feature4': 'Posizionamento del brand che regge',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare (anche per zia Giuseppina).',
    'services.uiux.feature1': 'Ricerca utente',
    'services.uiux.feature2': 'Wireframe puliti',
    'services.uiux.feature3': 'Mockup pixel-perfect',
    'services.uiux.feature4': 'Test per vedere se tutto regge',

    'services.webDev.title': 'Direzione Creativa',
    'services.webDev.desc': 'Hai le idee, ma vuoi che tutto sia allineato, pulito e coerente? Prendo io il volante, tu mi dai la direzione.',
    'services.webDev.feature1': 'Direzione artistica',
    'services.webDev.feature2': 'Strategia visiva',
    'services.webDev.feature3': 'Consigli stilosi ma utili',
    'services.webDev.feature4': 'Visione globale del progetto',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'La tua app merita meglio di un template di default. Ti faccio un\'interfaccia chiara, intuitiva e piacevole da usare in metro.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Percorso utente ben pensato',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Icone, menu e tutti i piccoli dettagli che fanno la differenza',

    'services.creative.title': 'Design Print',
    'services.creative.desc': 'Roba che si può toccare. Volantini, biglietti, manifesti — tutto quello che si legge con gli occhi e le mani.',
    'services.creative.feature1': 'Impaginazione curata',
    'services.creative.feature2': 'Buona scelta tipografica (non Comic Sans, tranquillo)',
    'services.creative.feature3': 'Armonie di colori perfette',
    'services.creative.feature4': 'File pronti per la stampa',

    'services.motion.title': 'Motion Design e Video',
    'services.motion.desc': 'Contenuti che si muovono bene. Monto, animo, do ritmo alla tua comunicazione visiva.',
    'services.motion.feature1': 'Animazioni di loghi stilose',
    'services.motion.feature2': 'Montaggi video dinamici',
    'services.motion.feature3': 'Teaser, trailer, reel, stories...',
    'services.motion.feature4': 'Micro-animazioni ed effetti fluidi',

    'services.startProject': 'Iniziamo un progetto?',

    // Testimonials Section
    'testimonials.subtitle': 'Testimonianze',
    'testimonials.title': 'Cosa ne pensano',
    'testimonials.description': 'Alcuni feedback di clienti con cui ho avuto il piacere di lavorare. Spoiler: è andata bene.',
    'testimonials.trustedBy': 'Si sono fidati di me',
    'testimonials.trustedByDesc': 'Dalle startup alle grandi aziende, abbiamo creato insieme roba che funziona.',

    // Contact Section
    'contact.subtitle': 'Parliamone?',
    'contact.title1': 'Hai un\'idea?',
    'contact.title2': 'Parliamone!',
    'contact.description': 'Hai bisogno di un aiuto visivo? O vuoi solo sapere se potremmo lavorare insieme? Scrivimi, rispondo veloce (e sempre con piacere).',
    'contact.getInTouch': 'Come contattarmi',
    'contact.getInTouchDesc': 'Che sia per un progetto, una domanda o solo per dire ciao, non esitare a contattarmi.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Il modo più veloce per raggiungermi',
    'contact.location': 'Posizione',
    'contact.followMe': 'Seguimi',
    'contact.sendMessage': 'Mandami un messaggio',
    'contact.name': 'Il tuo nome',
    'contact.namePlaceholder': 'Come ti chiami?',
    'contact.emailPlaceholder': 'tua.email@esempio.com',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Di cosa vuoi che parliamo?',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Raccontami del tuo progetto, delle tue idee, dei tuoi desideri...',
    'contact.sendBtn': 'Invia messaggio',

    // Footer Section
    'footer.description': 'Mediamatico con base in Svizzera, trasformo le tue idee in progetti visivi che spaccano. Sempre pronto per nuove sfide creative.',
    'footer.quickLinks': 'Navigazione',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di Brand',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Direzione Creativa',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel. Tutti i diritti riservati.',
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre mim',
    'nav.work': 'Meu trabalho',
    'nav.services': 'O que faço',
    'nav.contact': 'Vamos conversar',
    'nav.letsTalk': 'Vamos conversar',

    // Hero Section
    'hero.subtitle': 'mediamático',
    'hero.greeting': 'Oi, eu sou o Theo Blondel.',
    'hero.title1': 'Soluções',
    'hero.title2': 'criativas versáteis',
    'hero.description': 'Sou mediamático na Suíça, e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos. Se você precisa de um logo que arrasa, de um site que não espanta ou de uma direção criativa que faz sentido... você está no lugar certo.',
    'hero.contactMe': 'Vamos conversar?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Anos de experiência',
    'hero.projectsDelivered': 'Projetos entregues',
    'hero.clientSatisfaction': 'Satisfação do cliente',
    'hero.clientsWorldwide': 'Clientes no mundo',
    'hero.service1.title': 'Identidade de Marca',
    'hero.service1.desc': 'Logo profissional, manual da marca, identidade visual coesa',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Interfaces simples, fluidas e agradáveis de usar',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Animações estilosas, edição dinâmica, efeitos suaves',
    'hero.service4.title': 'Direção Criativa',
    'hero.service4.desc': 'Visão global, estratégia visual, conselhos úteis',

    // About Section
    'about.subtitle': 'Minha jornada',
    'about.title1': 'Criativo no coração,',
    'about.title2': 'eficiente na forma',
    'about.description1': 'Comecei como muitos: com montagens do YouTube aos 15 anos, a cabeça nos pixels e efeitos sonoros. Minecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.',
    'about.description2': 'Depois veio o desenho. Em seguida, a mediamática. E aí entendi: quero fazer isso. Criar. Projetar. Dar vida a ideias visuais que falam com as pessoas. Desde então, trabalho em projetos concretos com pessoas motivadas. Faço questão de que tudo seja claro, fluido, profissional — sem nunca esquecer aquele pequeno extra que dá personalidade.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - os clássicos dominados',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Design de interfaces e prototipagem (eu sei, todo mundo fala isso)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Edição de vídeo profissional e correção de cor',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animação e efeitos visuais',

    // Portfolio Section
    'portfolio.subtitle': 'Meus projetos',
    'portfolio.title1': 'Algumas coisas',
    'portfolio.title2': 'que adorei fazer',
    'portfolio.description': 'Uma seleção de projetos que me marcaram. Do logo que arrasa ao site que mata, passando por animações que dão vontade de mais.',
    'portfolio.viewAllBehance': 'Ver tudo no Behance',

    // Services Section
    'services.subtitle': 'O que posso fazer por você',
    'services.title': 'Meus serviços',
    'services.description': 'Seja criando sua identidade de marca, projetando sua interface ou dando vida às suas ideias em movimento, me adapto às suas necessidades.',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Precisa de um logo que arrasa e de uma imagem que conta quem você é? Te ajudo a construir uma identidade real — não só um logo feito às pressas.',
    'services.brandIdentity.feature1': 'Logo (profissional, não no Canva)',
    'services.brandIdentity.feature2': 'Manual da marca claro',
    'services.brandIdentity.feature3': 'Identidade visual coesa',
    'services.brandIdentity.feature4': 'Posicionamento de marca que se sustenta',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Um bom design não é só bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar (até para a tia Josefina).',
    'services.uiux.feature1': 'Pesquisa de usuário',
    'services.uiux.feature2': 'Wireframes limpos',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Testes para ver se tudo funciona',

    'services.webDev.title': 'Direção Criativa',
    'services.webDev.desc': 'Você tem as ideias, mas quer que tudo esteja alinhado, limpo e coerente? Eu pego o volante, você me dá a direção.',
    'services.webDev.feature1': 'Direção de arte',
    'services.webDev.feature2': 'Estratégia visual',
    'services.webDev.feature3': 'Conselhos estilosos mas úteis',
    'services.webDev.feature4': 'Visão global do projeto',

    'services.mobile.title': 'Design Mobile',
    'services.mobile.desc': 'Seu app merece coisa melhor que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.',
    'services.mobile.feature1': 'Design iOS e Android',
    'services.mobile.feature2': 'Jornada do usuário bem pensada',
    'services.mobile.feature3': 'Onboarding fluido',
    'services.mobile.feature4': 'Ícones, menus e todos os pequenos detalhes que fazem a diferença',

    'services.creative.title': 'Design Gráfico',
    'services.creative.desc': 'Coisas que dá para tocar. Panfletos, cartões, cartazes — tudo que se lê com os olhos e as mãos.',
    'services.creative.feature1': 'Diagramação cuidadosa',
    'services.creative.feature2': 'Boa escolha tipográfica (não Comic Sans, relaxa)',
    'services.creative.feature3': 'Harmonias de cores perfeitas',
    'services.creative.feature4': 'Arquivos prontos para a gráfica',

    'services.motion.title': 'Motion Design e Vídeo',
    'services.motion.desc': 'Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.',
    'services.motion.feature1': 'Animações de logos estilosas',
    'services.motion.feature2': 'Edições de vídeo dinâmicas',
    'services.motion.feature3': 'Teasers, trailers, reels, stories...',
    'services.motion.feature4': 'Micro-animações e efeitos suaves',

    'services.startProject': 'Vamos começar um projeto?',

    // Testimonials Section
    'testimonials.subtitle': 'Depoimentos',
    'testimonials.title': 'O que eles acham',
    'testimonials.description': 'Alguns feedbacks de clientes com quem tive o prazer de trabalhar. Spoiler: deu tudo certo.',
    'testimonials.trustedBy': 'Eles confiaram em mim',
    'testimonials.trustedByDesc': 'De startups a grandes empresas, criamos juntos coisas que funcionam.',

    // Contact Section
    'contact.subtitle': 'Vamos conversar?',
    'contact.title1': 'Tem uma ideia?',
    'contact.title2': 'Vamos conversar sobre ela!',
    'contact.description': 'Precisa de uma ajuda visual? Ou só quer saber se a gente pode trabalhar junto? Me escreve, respondo rápido (e sempre com prazer).',
    'contact.getInTouch': 'Como me encontrar',
    'contact.getInTouchDesc': 'Seja para um projeto, uma pergunta ou só para dizer oi, não hesite em me contatar.',
    'contact.email': 'Email',
    'contact.emailDesc': 'O jeito mais rápido de me encontrar',
    'contact.location': 'Localização',
    'contact.followMe': 'Me siga',
    'contact.sendMessage': 'Me manda uma mensagem',
    'contact.name': 'Seu nome',
    'contact.namePlaceholder': 'Como você se chama?',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Do que você quer conversar?',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Me conta sobre seu projeto, suas ideias, seus desejos...',
    'contact.sendBtn': 'Enviar mensagem',

    // Footer Section
    'footer.description': 'Mediamático baseado na Suíça, transformo suas ideias em projetos visuais que arrasam. Sempre pronto para novos desafios criativos.',
    'footer.quickLinks': 'Navegação',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de Marca',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Direção Criativa',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel. Todos os direitos reservados.',
  },
  sq: {
    // Navigation
    'nav.about': 'Rreth meje',
    'nav.work': 'Puna ime',
    'nav.services': 'Çfarë bëj',
    'nav.contact': 'Le të flasim',
    'nav.letsTalk': 'Le të flasim',

    // Hero Section
    'hero.subtitle': 'mediamatiçien',
    'hero.greeting': 'Përshëndetje, unë jam Theo Blondel.',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'kreative të shumëllojshme',
    'hero.description': 'Jam mediamatiçien në Zvicër, dhe i transformoj idetë tuaja në projekte vizuale të pastra, me ndikim dhe vërtet stiloze. Nëse keni nevojë për një logo që bën përshtypje, një sajt që nuk largon njerëzit ose një drejtim kreativ që ka kuptim... jeni në vendin e duhur.',
    'hero.contactMe': 'Le të flasim?',
    'hero.watchDemo': 'Shiko demon',
    'hero.yearsExperience': 'Vite përvojë',
    'hero.projectsDelivered': 'Projekte të dorëzuara',
    'hero.clientSatisfaction': 'Kënaqësia e klientit',
    'hero.clientsWorldwide': 'Klientë në botë',
    'hero.service1.title': 'Identiteti i Markës',
    'hero.service1.desc': 'Logo profesionale, udhëzime të markës, identitet vizual i qëndrueshëm',
    'hero.service2.title': 'UI/UX Design',
    'hero.service2.desc': 'Ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur',
    'hero.service3.title': 'Motion Design',
    'hero.service3.desc': 'Animacione stiloze, editim dinamik, efekte të rrjedhshme',
    'hero.service4.title': 'Drejtimi Kreativ',
    'hero.service4.desc': 'Vizioni global, strategjia vizuale, këshilla të dobishme',

    // About Section
    'about.subtitle': 'Rrugëtimi im',
    'about.title1': 'Kreativ në zemër,',
    'about.title2': 'efikas në formë',
    'about.description1': 'Fillova si shumë të tjerë: me montazhe YouTube në moshën 15 vjeç, kokën në piksel dhe efekte zanore. Minecraft, Fortnite, Call of... Kalova orë duke testuar, duke eksperimentuar, duke kërkuar atë që funksionon.',
    'about.description2': 'Pastaj erdhi vizatimi. Më pas mediamatikat. Dhe atje e kuptova: dua ta bëj këtë. Të krijoj. Të projektoj. T\'u jap jetë ideve vizuale që flasin me njerëzit. Që atëherë, punoj në projekte konkrete me njerëz të motivuar. Sigurohem që gjithçka të jetë e qartë, e rrjedhshme, profesionale — pa harruar kurrë atë element të vogël shtesë që jep personalitet.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Photoshop, Illustrator, InDesign - klasikët e zotëruar',
    'about.skill2.title': 'Figma',
    'about.skill2.desc': 'Dizajni i ndërfaqes dhe prototipimi (e di, të gjithë e thonë këtë)',
    'about.skill3.title': 'DaVinci Resolve',
    'about.skill3.desc': 'Editimi profesional i videos dhe korrigjimi i ngjyrave',
    'about.skill4.title': 'Autodesk',
    'about.skill4.desc': '3D, animacion dhe efekte vizuale',

    // Portfolio Section
    'portfolio.subtitle': 'Projektet e mia',
    'portfolio.title1': 'Disa gjëra',
    'portfolio.title2': 'që më pëlqeu t\'i bëj',
    'portfolio.description': 'Një përzgjedhje projektesh që më kanë shënuar. Nga logo që bën përshtypje te sajti që vret, duke përfshirë animacione që të bëjnë të dëshirosh më shumë.',
    'portfolio.viewAllBehance': 'Shiko të gjitha në Behance',

    // Services Section
    'services.subtitle': 'Çfarë mund të bëj për ju',
    'services.title': 'Shërbimet e mia',
    'services.description': 'Qoftë krijimi i identitetit tuaj të markës, dizajnimi i ndërfaqes tuaj ose dhënia e jetës ideve tuaja në lëvizje, unë përshtateм me nevojat tuaja.',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Keni nevojë për një logo që bën përshtypje dhe një imazh që tregon se kush jeni? Ju ndihmoj të ndërtoni një identitet të vërtetë — jo vetëm një logo të shpejtë.',
    'services.brandIdentity.feature1': 'Logo (profesionale, jo në Canva)',
    'services.brandIdentity.feature2': 'Udhëzime të qarta të markës',
    'services.brandIdentity.feature3': 'Identitet vizual i qëndrueshëm',
    'services.brandIdentity.feature4': 'Pozicionim marke që qëndron',

    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Një dizajn i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur (edhe për tezen Joziana).',
    'services.uiux.feature1': 'Kërkimi i përdoruesit',
    'services.uiux.feature2': 'Wireframes të pastra',
    'services.uiux.feature3': 'Mockups pixel-perfect',
    'services.uiux.feature4': 'Teste për të parë nëse gjithçka funksionon',

    'services.webDev.title': 'Drejtimi Kreativ',
    'services.webDev.desc': 'Keni idetë, por doni që gjithçka të jetë e rreshtuar, e pastër dhe e qëndrueshme? Unë marr timonin, ju më jepni drejtimin.',
    'services.webDev.feature1': 'Drejtimi artistik',
    'services.webDev.feature2': 'Strategjia vizuale',
    'services.webDev.feature3': 'Këshilla stiloze por të dobishme',
    'services.webDev.feature4': 'Vizioni global i projektit',

    'services.mobile.title': 'Dizajni Mobil',
    'services.mobile.desc': 'Aplikacioni juaj meriton më shumë se një template të paracaktuar. Ju bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t\'u përdorur në metro.',
    'services.mobile.feature1': 'Dizajn iOS dhe Android',
    'services.mobile.feature2': 'Rrugëtimi i përdoruesit i menduar mirë',
    'services.mobile.feature3': 'Onboarding i rrjedhshëm',
    'services.mobile.feature4': 'Ikona, menu dhe të gjitha detajet e vogla që bëjnë ndryshimin',

    'services.creative.title': 'Dizajni i Printimit',
    'services.creative.desc': 'Gjëra që mund t\'i prekësh. Fletushka, karta, postera — gjithçka që lexohet me sy dhe duar.',
    'services.creative.feature1': 'Faqosje e kujdesshme',
    'services.creative.feature2': 'Zgjedhje e mirë tipografike (jo Comic Sans, mos u shqetëso)',
    'services.creative.feature3': 'Harmoni ngjyrash të përsosura',
    'services.creative.feature4': 'Skedarë të gatshëm për shtypje',

    'services.motion.title': 'Motion Design dhe Video',
    'services.motion.desc': 'Përmbajtje që lëviz mirë. Editoj, animoj, i jap ritëm komunikimit tuaj vizual.',
    'services.motion.feature1': 'Animacione logosh stiloze',
    'services.motion.feature2': 'Editime videosh dinamike',
    'services.motion.feature3': 'Teaser, trailer, reel, stories...',
    'services.motion.feature4': 'Mikro-animacione dhe efekte të rrjedhshme',

    'services.startProject': 'Të fillojmë një projekt?',

    // Testimonials Section
    'testimonials.subtitle': 'Dëshmi',
    'testimonials.title': 'Çfarë mendojnë ata',
    'testimonials.description': 'Disa komente nga klientë me të cilët pata kënaqësinë të punoj. Spoiler: shkoi mirë.',
    'testimonials.trustedBy': 'Ata më besuan',
    'testimonials.trustedByDesc': 'Nga startup-et te kompanitë e mëdha, krijuam së bashku gjëra që funksionojnë.',

    // Contact Section
    'contact.subtitle': 'Le të flasim?',
    'contact.title1': 'Keni një ide?',
    'contact.title2': 'Le të flasim për të!',
    'contact.description': 'Keni nevojë për ndihmë vizuale? Ose thjesht doni të dini nëse mund të punojmë së bashku? Më shkruani, përgjigjem shpejt (dhe gjithmonë me kënaqësi).',
    'contact.getInTouch': 'Si të më kontaktoni',
    'contact.getInTouchDesc': 'Qoftë për një projekt, një pyetje ose thjesht për të thënë përshëndetje, mos hezitoni të më kontaktoni.',
    'contact.email': 'Email',
    'contact.emailDesc': 'Mënyra më e shpejtë për të më kontaktuar',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më ndiqni',
    'contact.sendMessage': 'Më dërgoni një mesazh',
    'contact.name': 'Emri juaj',
    'contact.namePlaceholder': 'Si quheni?',
    'contact.emailPlaceholder': 'email.juaj@shembull.com',
    'contact.subject': 'Tema',
    'contact.subjectPlaceholder': 'Për çfarë doni të flasim?',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më tregoni për projektin tuaj, idetë tuaja, dëshirat tuaja...',
    'contact.sendBtn': 'Dërgo mesazhin',

    // Footer Section
    'footer.description': 'Mediamatiçien me bazë në Zvicër, i transformoj idetë tuaja në projekte vizuale që bëjnë përshtypje. Gjithmonë gati për sfida të reja kreative.',
    'footer.quickLinks': 'Navigimi',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i Markës',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Drejtimi Kreativ',
    'footer.motionGraphics': 'Motion Design',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara.',
  }
};

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && Object.keys(translations).includes(saved)) return saved as Language;
      const browserLang = navigator.language.split('-')[0];
      return Object.keys(translations).includes(browserLang) ? browserLang as Language : 'fr';
    }
    return 'fr';
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

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