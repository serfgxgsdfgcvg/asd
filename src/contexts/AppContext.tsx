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
    'hero.subtitle': 'Médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Créatif dans le fond',
    'hero.service1.desc': 'efficace dans la forme',
    'hero.service2.title': 'Design qui claque',
    'hero.service2.desc': 'et qui fonctionne',
    'hero.service3.title': 'Projets sur mesure',
    'hero.service3.desc': 'adaptés à tes besoins',
    'hero.service4.title': 'Suivi personnalisé',
    'hero.service4.desc': 'du début à la fin',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'J\'ai commencé comme beaucoup',
    'about.title2': 'avec des montages YouTube à 15 ans',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 15 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Maîtrise complète de la suite Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montage et étalonnage vidéo pro',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modélisation et animation 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design d\'interface et prototypage',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent ce que je sais faire. Du logo qui claque au site qui cartonne.',
    'portfolio.viewAllBehance': 'Voir tous mes projets',

    // Services Section
    'services.subtitle': 'Mes Services',
    'services.title': 'Ce que je peux faire pour toi',
    'services.description': 'Des solutions créatives complètes pour donner vie à tes projets.',
    'services.startProject': 'Démarrer un projet',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    'services.uiux.title': 'Direction Créative',
    'services.uiux.desc': 'T\'as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.uiux.feature1': 'Direction artistique',
    'services.uiux.feature2': 'Stratégie visuelle',
    'services.uiux.feature3': 'Conseils stylés mais utiles',
    'services.uiux.feature4': 'Vision globale du projet',

    'services.webDev.title': 'UI/UX Design',
    'services.webDev.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser.',
    'services.webDev.feature1': 'Recherche utilisateur',
    'services.webDev.feature2': 'Wireframes propres',
    'services.webDev.feature3': 'Maquettes pixel-perfect',
    'services.webDev.feature4': 'Tests pour voir si tout tient',

    'services.mobile.title': 'Design Print',
    'services.mobile.desc': 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
    'services.mobile.feature1': 'Mise en page soignée',
    'services.mobile.feature2': 'Bon choix de typo (pas Comic Sans)',
    'services.mobile.feature3': 'Harmonies de couleurs au petit oignon',
    'services.mobile.feature4': 'Fichiers prêts pour l\'imprimeur',

    'services.creative.title': 'Design Mobile',
    'services.creative.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.creative.feature1': 'Design iOS & Android',
    'services.creative.feature2': 'Parcours utilisateur bien pensé',
    'services.creative.feature3': 'Onboarding fluide',
    'services.creative.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    'services.motion.title': 'Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'On discute ?',
    'contact.title2': '',
    'contact.description': 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'Écris-moi, je réponds vite (et toujours avec plaisir).',
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
    'contact.messagePlaceholder': 'Raconte-moi ton projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Médiamaticien passionné basé en Suisse. Je transforme tes idées en projets visuels qui marquent.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Développement web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',

    // Testimonials
    'testimonials.subtitle': 'Confiance',
    'testimonials.title': 'Ils me font confiance',
    'testimonials.description': 'Des partenaires qui croient en mon travail et reviennent pour de nouveaux projets.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Des entreprises qui ont choisi de travailler avec moi'
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.letsTalk': 'On en parle ?',

    // Hero Section
    'hero.subtitle': 'Médiamaticien',
    'hero.greeting': 'Yo, moi c\'est Theo Blondel.',
    'hero.title1': 'Solutions',
    'hero.title2': 'créatives',
    'hero.title3': 'polyvalentes',
    'hero.description': 'Je suis médiamaticien en Suisse, et je transforme tes idées en projets visuels propres, impactants, et vraiment stylés.',
    'hero.contactMe': 'On en parle ?',
    'hero.watchDemo': 'Voir la démo',
    'hero.yearsExperience': 'Années d\'expérience',
    'hero.projectsDelivered': 'Projets livrés',
    'hero.clientSatisfaction': 'Satisfaction client',
    'hero.clientsWorldwide': 'Clients dans le monde',
    'hero.service1.title': 'Créatif dans le fond',
    'hero.service1.desc': 'efficace dans la forme',
    'hero.service2.title': 'Design qui claque',
    'hero.service2.desc': 'et qui fonctionne',
    'hero.service3.title': 'Projets sur mesure',
    'hero.service3.desc': 'adaptés à tes besoins',
    'hero.service4.title': 'Suivi personnalisé',
    'hero.service4.desc': 'du début à la fin',

    // About Section
    'about.subtitle': 'Mon Parcours',
    'about.title1': 'J\'ai commencé comme beaucoup',
    'about.title2': 'avec des montages YouTube à 15 ans',
    'about.description1': 'J\'ai commencé comme beaucoup : avec des montages YouTube à 15 ans, la tête dans les pixels et les effets sonores. Minecraft, Fortnite, Call of... J\'ai passé des heures à tester, à bidouiller, à chercher ce qui marche.',
    'about.description2': 'Puis le dessin est arrivé. Ensuite, la médiamatique. Et là, j\'ai pigé : je veux faire ça. Créer. Concevoir. Donner vie à des idées visuelles qui parlent aux gens.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Maîtrise complète de la suite Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montage et étalonnage vidéo pro',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modélisation et animation 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design d\'interface et prototypage',

    // Portfolio Section
    'portfolio.subtitle': 'Mes Projets',
    'portfolio.title1': 'Quelques trucs',
    'portfolio.title2': 'que j\'ai kiffé faire',
    'portfolio.description': 'Une sélection de projets qui montrent ce que je sais faire. Du logo qui claque au site qui cartonne.',
    'portfolio.viewAllBehance': 'Voir tous mes projets',

    // Services Section
    'services.subtitle': 'Mes Services',
    'services.title': 'Ce que je peux faire pour toi',
    'services.description': 'Des solutions créatives complètes pour donner vie à tes projets.',
    'services.startProject': 'Démarrer un projet',

    'services.brandIdentity.title': 'Identité de Marque',
    'services.brandIdentity.desc': 'Besoin d\'un logo qui claque et d\'une image qui raconte qui tu es ? Je t\'aide à construire une vraie identité — pas juste un logo vite fait.',
    'services.brandIdentity.feature1': 'Logo (pro, pas sur Canva)',
    'services.brandIdentity.feature2': 'Charte graphique claire',
    'services.brandIdentity.feature3': 'Identité visuelle cohérente',
    'services.brandIdentity.feature4': 'Positionnement de marque qui tient la route',

    'services.uiux.title': 'Direction Créative',
    'services.uiux.desc': 'T\'as les idées, mais tu veux que tout soit aligné, clean et cohérent ? Je prends le volant, tu me donnes la direction.',
    'services.uiux.feature1': 'Direction artistique',
    'services.uiux.feature2': 'Stratégie visuelle',
    'services.uiux.feature3': 'Conseils stylés mais utiles',
    'services.uiux.feature4': 'Vision globale du projet',

    'services.webDev.title': 'UI/UX Design',
    'services.webDev.desc': 'Un bon design, c\'est pas juste joli. Faut que ça fonctionne. Je crée des interfaces simples, fluides et agréables à utiliser.',
    'services.webDev.feature1': 'Recherche utilisateur',
    'services.webDev.feature2': 'Wireframes propres',
    'services.webDev.feature3': 'Maquettes pixel-perfect',
    'services.webDev.feature4': 'Tests pour voir si tout tient',

    'services.mobile.title': 'Design Print',
    'services.mobile.desc': 'Des trucs qu\'on peut toucher. Flyers, cartes, affiches — tout ce qui se lit avec les yeux et les mains.',
    'services.mobile.feature1': 'Mise en page soignée',
    'services.mobile.feature2': 'Bon choix de typo (pas Comic Sans)',
    'services.mobile.feature3': 'Harmonies de couleurs au petit oignon',
    'services.mobile.feature4': 'Fichiers prêts pour l\'imprimeur',

    'services.creative.title': 'Design Mobile',
    'services.creative.desc': 'Ton app mérite mieux qu\'un template par défaut. Je te fais une interface claire, intuitive, et agréable à utiliser dans le métro.',
    'services.creative.feature1': 'Design iOS & Android',
    'services.creative.feature2': 'Parcours utilisateur bien pensé',
    'services.creative.feature3': 'Onboarding fluide',
    'services.creative.feature4': 'Icônes, menus, et tous les petits détails qui font la diff',

    'services.motion.title': 'Motion Design & Vidéo',
    'services.motion.desc': 'Du contenu qui bouge bien. Je monte, j\'anime, je donne du rythme à ta com\' visuelle.',
    'services.motion.feature1': 'Animation de logos stylés',
    'services.motion.feature2': 'Montages vidéos dynamiques',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animations et effets smooth',

    // Contact Section
    'contact.subtitle': 'Contact',
    'contact.title1': 'On discute ?',
    'contact.title2': '',
    'contact.description': 'T\'as une idée ? T\'as besoin d\'un coup de main visuel ? Ou juste envie de savoir si ça peut coller entre nous ?',
    'contact.getInTouch': 'Restons en contact',
    'contact.getInTouchDesc': 'Écris-moi, je réponds vite (et toujours avec plaisir).',
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
    'contact.messagePlaceholder': 'Raconte-moi ton projet...',
    'contact.sendBtn': 'Envoyer le message',

    // Footer
    'footer.description': 'Médiamaticien passionné basé en Suisse. Je transforme tes idées en projets visuels qui marquent.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Services',
    'footer.brandIdentity': 'Identité de marque',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Développement web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Fait avec',
    'footer.inSwitzerland': 'en Suisse',
    'footer.allRights': '© 2024 Theo Blondel. Tous droits réservés.',

    // Testimonials
    'testimonials.subtitle': 'Confiance',
    'testimonials.title': 'Ils me font confiance',
    'testimonials.description': 'Des partenaires qui croient en mon travail et reviennent pour de nouveaux projets.',
    'testimonials.trustedBy': 'Ils me font confiance',
    'testimonials.trustedByDesc': 'Des entreprises qui ont choisi de travailler avec moi'
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.work': 'Trabajo',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.letsTalk': 'Hablemos',

    // Hero Section
    'hero.subtitle': 'Médiamaticien',
    'hero.greeting': 'Hola, soy Theo Blondel.',
    'hero.title1': 'Soluciones',
    'hero.title2': 'creativas',
    'hero.title3': 'versátiles',
    'hero.description': 'Soy médiamaticien en Suiza, y transformo tus ideas en proyectos visuales limpios, impactantes y realmente elegantes.',
    'hero.contactMe': '¿Hablamos?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Años de experiencia',
    'hero.projectsDelivered': 'Proyectos entregados',
    'hero.clientSatisfaction': 'Satisfacción del cliente',
    'hero.clientsWorldwide': 'Clientes en el mundo',
    'hero.service1.title': 'Creativo en el fondo',
    'hero.service1.desc': 'eficaz en la forma',
    'hero.service2.title': 'Diseño que impacta',
    'hero.service2.desc': 'y que funciona',
    'hero.service3.title': 'Proyectos a medida',
    'hero.service3.desc': 'adaptados a tus necesidades',
    'hero.service4.title': 'Seguimiento personalizado',
    'hero.service4.desc': 'de principio a fin',

    // About Section
    'about.subtitle': 'Mi Trayectoria',
    'about.title1': 'Empecé como muchos',
    'about.title2': 'con montajes de YouTube a los 15 años',
    'about.description1': 'Empecé como muchos: con montajes de YouTube a los 15 años, la cabeza en los píxeles y los efectos de sonido. Minecraft, Fortnite, Call of... Pasé horas probando, trasteando, buscando lo que funciona.',
    'about.description2': 'Luego llegó el dibujo. Después, la mediamática. Y ahí lo entendí: quiero hacer esto. Crear. Concebir. Dar vida a ideas visuales que hablen a la gente.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Dominio completo de la suite Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Edición y corrección de color profesional',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelado y animación 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Diseño de interfaz y prototipado',

    // Portfolio Section
    'portfolio.subtitle': 'Mis Proyectos',
    'portfolio.title1': 'Algunas cosas',
    'portfolio.title2': 'que me gustó hacer',
    'portfolio.description': 'Una selección de proyectos que muestran lo que sé hacer. Del logo que impacta al sitio que triunfa.',
    'portfolio.viewAllBehance': 'Ver todos mis proyectos',

    // Services Section
    'services.subtitle': 'Mis Servicios',
    'services.title': 'Lo que puedo hacer por ti',
    'services.description': 'Soluciones creativas completas para dar vida a tus proyectos.',
    'services.startProject': 'Iniciar un proyecto',

    'services.brandIdentity.title': 'Identidad de Marca',
    'services.brandIdentity.desc': '¿Necesitas un logo que impacte y una imagen que cuente quién eres? Te ayudo a construir una verdadera identidad — no solo un logo hecho rápido.',
    'services.brandIdentity.feature1': 'Logo (profesional, no en Canva)',
    'services.brandIdentity.feature2': 'Manual de marca claro',
    'services.brandIdentity.feature3': 'Identidad visual coherente',
    'services.brandIdentity.feature4': 'Posicionamiento de marca sólido',

    'services.uiux.title': 'Dirección Creativa',
    'services.uiux.desc': 'Tienes las ideas, pero quieres que todo esté alineado, limpio y coherente? Tomo el volante, tú me das la dirección.',
    'services.uiux.feature1': 'Dirección artística',
    'services.uiux.feature2': 'Estrategia visual',
    'services.uiux.feature3': 'Consejos elegantes pero útiles',
    'services.uiux.feature4': 'Visión global del proyecto',

    'services.webDev.title': 'Diseño UI/UX',
    'services.webDev.desc': 'Un buen diseño no es solo bonito. Tiene que funcionar. Creo interfaces simples, fluidas y agradables de usar.',
    'services.webDev.feature1': 'Investigación de usuario',
    'services.webDev.feature2': 'Wireframes limpios',
    'services.webDev.feature3': 'Maquetas pixel-perfect',
    'services.webDev.feature4': 'Pruebas para ver si todo funciona',

    'services.mobile.title': 'Diseño Print',
    'services.mobile.desc': 'Cosas que se pueden tocar. Flyers, tarjetas, carteles — todo lo que se lee con los ojos y las manos.',
    'services.mobile.feature1': 'Maquetación cuidada',
    'services.mobile.feature2': 'Buena elección tipográfica',
    'services.mobile.feature3': 'Armonías de color perfectas',
    'services.mobile.feature4': 'Archivos listos para imprenta',

    'services.creative.title': 'Diseño Mobile',
    'services.creative.desc': 'Tu app merece más que una plantilla por defecto. Te hago una interfaz clara, intuitiva y agradable de usar en el metro.',
    'services.creative.feature1': 'Diseño iOS & Android',
    'services.creative.feature2': 'Recorrido de usuario bien pensado',
    'services.creative.feature3': 'Onboarding fluido',
    'services.creative.feature4': 'Iconos, menús y todos los pequeños detalles que marcan la diferencia',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Contenido que se mueve bien. Monto, animo, doy ritmo a tu comunicación visual.',
    'services.motion.feature1': 'Animación de logos elegantes',
    'services.motion.feature2': 'Montajes de video dinámicos',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animaciones y efectos suaves',

    // Contact Section
    'contact.subtitle': 'Contacto',
    'contact.title1': '¿Hablamos?',
    'contact.title2': '',
    'contact.description': '¿Tienes una idea? ¿Necesitas ayuda visual? ¿O solo quieres saber si podemos trabajar juntos?',
    'contact.getInTouch': 'Mantengámonos en contacto',
    'contact.getInTouchDesc': 'Escríbeme, respondo rápido (y siempre con gusto).',
    'contact.email': 'Email',
    'contact.emailDesc': 'Para todos tus proyectos creativos',
    'contact.location': 'Ubicación',
    'contact.followMe': 'Sígueme',
    'contact.sendMessage': 'Envíame un mensaje',
    'contact.name': 'Tu nombre',
    'contact.namePlaceholder': '¿Cómo te llamas?',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.subject': 'Asunto',
    'contact.subjectPlaceholder': '¿De qué quieres que hablemos?',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.sendBtn': 'Enviar mensaje',

    // Footer
    'footer.description': 'Médiamaticien apasionado con base en Suiza. Transformo tus ideas en proyectos visuales que marcan.',
    'footer.quickLinks': 'Navegación',
    'footer.services': 'Servicios',
    'footer.brandIdentity': 'Identidad de marca',
    'footer.uiuxDesign': 'Diseño UI/UX',
    'footer.webDevelopment': 'Desarrollo web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Hecho con',
    'footer.inSwitzerland': 'en Suiza',
    'footer.allRights': '© 2024 Theo Blondel. Todos los derechos reservados.',

    // Testimonials
    'testimonials.subtitle': 'Confianza',
    'testimonials.title': 'Confían en mí',
    'testimonials.description': 'Socios que creen en mi trabajo y vuelven para nuevos proyectos.',
    'testimonials.trustedBy': 'Confían en mí',
    'testimonials.trustedByDesc': 'Empresas que han elegido trabajar conmigo'
  },
  ru: {
    // Navigation
    'nav.about': 'О себе',
    'nav.work': 'Работы',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.letsTalk': 'Поговорим?',

    // Hero Section
    'hero.subtitle': 'Медиаматик',
    'hero.greeting': 'Привет, я Тео Блондель.',
    'hero.title1': 'Креативные',
    'hero.title2': 'решения',
    'hero.title3': 'универсальные',
    'hero.description': 'Я медиаматик из Швейцарии, и я превращаю твои идеи в чистые, впечатляющие и действительно стильные визуальные проекты.',
    'hero.contactMe': 'Поговорим?',
    'hero.watchDemo': 'Посмотреть демо',
    'hero.yearsExperience': 'Лет опыта',
    'hero.projectsDelivered': 'Проектов выполнено',
    'hero.clientSatisfaction': 'Удовлетворенность клиентов',
    'hero.clientsWorldwide': 'Клиентов по всему миру',
    'hero.service1.title': 'Креативный по сути',
    'hero.service1.desc': 'эффективный по форме',
    'hero.service2.title': 'Дизайн, который впечатляет',
    'hero.service2.desc': 'и который работает',
    'hero.service3.title': 'Проекты на заказ',
    'hero.service3.desc': 'адаптированные под твои нужды',
    'hero.service4.title': 'Персональное сопровождение',
    'hero.service4.desc': 'от начала до конца',

    // About Section
    'about.subtitle': 'Мой Путь',
    'about.title1': 'Я начинал как многие',
    'about.title2': 'с монтажа YouTube в 15 лет',
    'about.description1': 'Я начинал как многие: с монтажа YouTube в 15 лет, с головой в пикселях и звуковых эффектах. Minecraft, Fortnite, Call of... Я проводил часы, тестируя, экспериментируя, ища то, что работает.',
    'about.description2': 'Потом пришло рисование. Затем медиаматика. И тут я понял: я хочу заниматься этим. Создавать. Придумывать. Воплощать визуальные идеи, которые говорят с людьми.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Полное владение пакетом Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Профессиональный монтаж и цветокоррекция',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Моделирование и 3D анимация',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Дизайн интерфейсов и прототипирование',

    // Portfolio Section
    'portfolio.subtitle': 'Мои Проекты',
    'portfolio.title1': 'Несколько вещей',
    'portfolio.title2': 'которые мне понравилось делать',
    'portfolio.description': 'Подборка проектов, которые показывают, что я умею. От крутого логотипа до сайта, который покоряет.',
    'portfolio.viewAllBehance': 'Посмотреть все мои проекты',

    // Services Section
    'services.subtitle': 'Мои Услуги',
    'services.title': 'Что я могу сделать для тебя',
    'services.description': 'Полные креативные решения для воплощения твоих проектов.',
    'services.startProject': 'Начать проект',

    'services.brandIdentity.title': 'Фирменный Стиль',
    'services.brandIdentity.desc': 'Нужен логотип, который впечатляет, и образ, который рассказывает, кто ты? Я помогу построить настоящую идентичность — не просто быстро сделанный логотип.',
    'services.brandIdentity.feature1': 'Логотип (профессиональный, не в Canva)',
    'services.brandIdentity.feature2': 'Четкий брендбук',
    'services.brandIdentity.feature3': 'Последовательная визуальная идентичность',
    'services.brandIdentity.feature4': 'Позиционирование бренда, которое работает',

    'services.uiux.title': 'Креативное Направление',
    'services.uiux.desc': 'У тебя есть идеи, но ты хочешь, чтобы все было выровнено, чисто и последовательно? Я беру руль, ты даешь направление.',
    'services.uiux.feature1': 'Арт-директорство',
    'services.uiux.feature2': 'Визуальная стратегия',
    'services.uiux.feature3': 'Стильные, но полезные советы',
    'services.uiux.feature4': 'Глобальное видение проекта',

    'services.webDev.title': 'UI/UX Дизайн',
    'services.webDev.desc': 'Хороший дизайн — это не просто красиво. Он должен работать. Я создаю простые, плавные и приятные в использовании интерфейсы.',
    'services.webDev.feature1': 'Исследование пользователей',
    'services.webDev.feature2': 'Чистые wireframes',
    'services.webDev.feature3': 'Pixel-perfect макеты',
    'services.webDev.feature4': 'Тесты, чтобы убедиться, что все работает',

    'services.mobile.title': 'Печатный Дизайн',
    'services.mobile.desc': 'Вещи, которые можно потрогать. Флаеры, карточки, постеры — все, что читается глазами и руками.',
    'services.mobile.feature1': 'Аккуратная верстка',
    'services.mobile.feature2': 'Хороший выбор шрифтов',
    'services.mobile.feature3': 'Идеальные цветовые гармонии',
    'services.mobile.feature4': 'Файлы, готовые для печати',

    'services.creative.title': 'Мобильный Дизайн',
    'services.creative.desc': 'Твое приложение заслуживает большего, чем шаблон по умолчанию. Я сделаю четкий, интуитивный интерфейс, приятный для использования в метро.',
    'services.creative.feature1': 'Дизайн iOS & Android',
    'services.creative.feature2': 'Продуманный пользовательский путь',
    'services.creative.feature3': 'Плавный onboarding',
    'services.creative.feature4': 'Иконки, меню и все мелкие детали, которые делают разницу',

    'services.motion.title': 'Motion Design & Видео',
    'services.motion.desc': 'Контент, который хорошо движется. Я монтирую, анимирую, задаю ритм твоей визуальной коммуникации.',
    'services.motion.feature1': 'Анимация стильных логотипов',
    'services.motion.feature2': 'Динамичные видеомонтажи',
    'services.motion.feature3': 'Тизеры, трейлеры, reels, stories…',
    'services.motion.feature4': 'Микро-анимации и плавные эффекты',

    // Contact Section
    'contact.subtitle': 'Контакт',
    'contact.title1': 'Поговорим?',
    'contact.title2': '',
    'contact.description': 'У тебя есть идея? Нужна визуальная помощь? Или просто хочешь узнать, можем ли мы работать вместе?',
    'contact.getInTouch': 'Оставайтемся на связи',
    'contact.getInTouchDesc': 'Пиши мне, отвечаю быстро (и всегда с удовольствием).',
    'contact.email': 'Email',
    'contact.emailDesc': 'Для всех твоих креативных проектов',
    'contact.location': 'Местоположение',
    'contact.followMe': 'Подписывайся',
    'contact.sendMessage': 'Отправь мне сообщение',
    'contact.name': 'Твое имя',
    'contact.namePlaceholder': 'Как тебя зовут?',
    'contact.emailPlaceholder': 'tvoy.email@primer.com',
    'contact.subject': 'Тема',
    'contact.subjectPlaceholder': 'О чем хочешь поговорить?',
    'contact.message': 'Сообщение',
    'contact.messagePlaceholder': 'Расскажи о своем проекте...',
    'contact.sendBtn': 'Отправить сообщение',

    // Footer
    'footer.description': 'Увлеченный медиаматик из Швейцарии. Превращаю твои идеи в визуальные проекты, которые запоминаются.',
    'footer.quickLinks': 'Навигация',
    'footer.services': 'Услуги',
    'footer.brandIdentity': 'Фирменный стиль',
    'footer.uiuxDesign': 'UI/UX Дизайн',
    'footer.webDevelopment': 'Веб-разработка',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Сделано с',
    'footer.inSwitzerland': 'в Швейцарии',
    'footer.allRights': '© 2024 Тео Блондель. Все права защищены.',

    // Testimonials
    'testimonials.subtitle': 'Доверие',
    'testimonials.title': 'Они мне доверяют',
    'testimonials.description': 'Партнеры, которые верят в мою работу и возвращаются за новыми проектами.',
    'testimonials.trustedBy': 'Они мне доверяют',
    'testimonials.trustedByDesc': 'Компании, которые выбрали работать со мной'
  },
  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.work': '作品',
    'nav.services': '服务',
    'nav.contact': '联系',
    'nav.letsTalk': '聊聊？',

    // Hero Section
    'hero.subtitle': '媒体技术员',
    'hero.greeting': '嗨，我是Theo Blondel。',
    'hero.title1': '创意',
    'hero.title2': '解决方案',
    'hero.title3': '多元化',
    'hero.description': '我是瑞士的媒体技术员，将你的想法转化为干净、有影响力且真正时尚的视觉项目。',
    'hero.contactMe': '聊聊？',
    'hero.watchDemo': '查看演示',
    'hero.yearsExperience': '年经验',
    'hero.projectsDelivered': '项目交付',
    'hero.clientSatisfaction': '客户满意度',
    'hero.clientsWorldwide': '全球客户',
    'hero.service1.title': '本质上有创意',
    'hero.service1.desc': '形式上高效',
    'hero.service2.title': '令人印象深刻的设计',
    'hero.service2.desc': '并且有效',
    'hero.service3.title': '定制项目',
    'hero.service3.desc': '适应你的需求',
    'hero.service4.title': '个性化跟进',
    'hero.service4.desc': '从开始到结束',

    // About Section
    'about.subtitle': '我的历程',
    'about.title1': '我像很多人一样开始',
    'about.title2': '15岁时制作YouTube视频',
    'about.description1': '我像很多人一样开始：15岁时制作YouTube视频，沉浸在像素和音效中。Minecraft、Fortnite、Call of...我花了几个小时测试、摸索、寻找有效的方法。',
    'about.description2': '然后绘画来了。接着是媒体技术。那时我明白了：我想做这个。创造。构思。让视觉想法活起来，与人们对话。',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': '完全掌握Adobe套件',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': '专业视频编辑和调色',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': '建模和3D动画',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': '界面设计和原型制作',

    // Portfolio Section
    'portfolio.subtitle': '我的项目',
    'portfolio.title1': '一些东西',
    'portfolio.title2': '我喜欢做的',
    'portfolio.description': '展示我能做什么的项目选择。从令人印象深刻的标志到成功的网站。',
    'portfolio.viewAllBehance': '查看我所有的项目',

    // Services Section
    'services.subtitle': '我的服务',
    'services.title': '我能为你做什么',
    'services.description': '完整的创意解决方案，让你的项目活起来。',
    'services.startProject': '开始项目',

    'services.brandIdentity.title': '品牌标识',
    'services.brandIdentity.desc': '需要一个令人印象深刻的标志和一个讲述你是谁的形象？我帮你建立真正的身份——不只是快速制作的标志。',
    'services.brandIdentity.feature1': '标志（专业的，不是在Canva上）',
    'services.brandIdentity.feature2': '清晰的品牌指南',
    'services.brandIdentity.feature3': '一致的视觉身份',
    'services.brandIdentity.feature4': '有效的品牌定位',

    'services.uiux.title': '创意指导',
    'services.uiux.desc': '你有想法，但你希望一切都对齐、干净和一致？我来掌舵，你给方向。',
    'services.uiux.feature1': '艺术指导',
    'services.uiux.feature2': '视觉策略',
    'services.uiux.feature3': '时尚但有用的建议',
    'services.uiux.feature4': '项目的全球视野',

    'services.webDev.title': 'UI/UX设计',
    'services.webDev.desc': '好的设计不只是漂亮。它必须有效。我创建简单、流畅且使用愉快的界面。',
    'services.webDev.feature1': '用户研究',
    'services.webDev.feature2': '干净的线框图',
    'services.webDev.feature3': '像素完美的模型',
    'services.webDev.feature4': '测试以确保一切正常',

    'services.mobile.title': '印刷设计',
    'services.mobile.desc': '可以触摸的东西。传单、卡片、海报——所有用眼睛和手阅读的东西。',
    'services.mobile.feature1': '精心的排版',
    'services.mobile.feature2': '好的字体选择',
    'services.mobile.feature3': '完美的色彩和谐',
    'services.mobile.feature4': '准备好印刷的文件',

    'services.creative.title': '移动设计',
    'services.creative.desc': '你的应用值得比默认模板更好的。我为你制作清晰、直观且在地铁中使用愉快的界面。',
    'services.creative.feature1': 'iOS和Android设计',
    'services.creative.feature2': '深思熟虑的用户旅程',
    'services.creative.feature3': '流畅的入门',
    'services.creative.feature4': '图标、菜单和所有产生差异的小细节',

    'services.motion.title': 'Motion设计和视频',
    'services.motion.desc': '移动良好的内容。我编辑、动画，为你的视觉传播增添节奏。',
    'services.motion.feature1': '时尚标志动画',
    'services.motion.feature2': '动态视频编辑',
    'services.motion.feature3': '预告片、拖车、reels、stories…',
    'services.motion.feature4': '微动画和流畅效果',

    // Contact Section
    'contact.subtitle': '联系',
    'contact.title1': '聊聊？',
    'contact.title2': '',
    'contact.description': '你有想法？需要视觉帮助？或者只是想知道我们是否可以合作？',
    'contact.getInTouch': '保持联系',
    'contact.getInTouchDesc': '给我写信，我回复很快（总是很高兴）。',
    'contact.email': '邮箱',
    'contact.emailDesc': '为你所有的创意项目',
    'contact.location': '位置',
    'contact.followMe': '关注我',
    'contact.sendMessage': '给我发消息',
    'contact.name': '你的名字',
    'contact.namePlaceholder': '你叫什么名字？',
    'contact.emailPlaceholder': 'ni.de.email@example.com',
    'contact.subject': '主题',
    'contact.subjectPlaceholder': '你想谈什么？',
    'contact.message': '消息',
    'contact.messagePlaceholder': '告诉我你的项目...',
    'contact.sendBtn': '发送消息',

    // Footer
    'footer.description': '瑞士的热情媒体技术员。我将你的想法转化为令人难忘的视觉项目。',
    'footer.quickLinks': '导航',
    'footer.services': '服务',
    'footer.brandIdentity': '品牌标识',
    'footer.uiuxDesign': 'UI/UX设计',
    'footer.webDevelopment': '网页开发',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': '制作于',
    'footer.inSwitzerland': '瑞士',
    'footer.allRights': '© 2024 Theo Blondel. 保留所有权利。',

    // Testimonials
    'testimonials.subtitle': '信任',
    'testimonials.title': '他们信任我',
    'testimonials.description': '相信我的工作并回来做新项目的合作伙伴。',
    'testimonials.trustedBy': '他们信任我',
    'testimonials.trustedByDesc': '选择与我合作的公司'
  },
  ja: {
    // Navigation
    'nav.about': 'について',
    'nav.work': '作品',
    'nav.services': 'サービス',
    'nav.contact': 'お問い合わせ',
    'nav.letsTalk': '話しましょう',

    // Hero Section
    'hero.subtitle': 'メディアマティシャン',
    'hero.greeting': 'こんにちは、Theo Blondelです。',
    'hero.title1': 'クリエイティブ',
    'hero.title2': 'ソリューション',
    'hero.title3': '多様性',
    'hero.description': '私はスイスのメディアマティシャンで、あなたのアイデアをクリーンで印象的で本当にスタイリッシュなビジュアルプロジェクトに変換します。',
    'hero.contactMe': '話しましょう？',
    'hero.watchDemo': 'デモを見る',
    'hero.yearsExperience': '年の経験',
    'hero.projectsDelivered': 'プロジェクト納品',
    'hero.clientSatisfaction': '顧客満足度',
    'hero.clientsWorldwide': '世界中のクライアント',
    'hero.service1.title': '本質的にクリエイティブ',
    'hero.service1.desc': '形式的に効率的',
    'hero.service2.title': '印象的なデザイン',
    'hero.service2.desc': 'そして機能的',
    'hero.service3.title': 'カスタムプロジェクト',
    'hero.service3.desc': 'あなたのニーズに適応',
    'hero.service4.title': 'パーソナライズされたフォローアップ',
    'hero.service4.desc': '最初から最後まで',

    // About Section
    'about.subtitle': '私の歩み',
    'about.title1': '多くの人と同じように始めました',
    'about.title2': '15歳でYouTube編集から',
    'about.description1': '多くの人と同じように始めました：15歳でYouTube編集、ピクセルと音響効果に夢中でした。Minecraft、Fortnite、Call of...何時間もテストし、いじり回し、うまくいくものを探していました。',
    'about.description2': 'その後、描画が来ました。次に、メディアマティクス。そこで理解しました：これをやりたい。創造する。考案する。人々と話すビジュアルアイデアに命を吹き込む。',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Adobeスイートの完全な習得',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'プロフェッショナルビデオ編集とカラーグレーディング',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'モデリングと3Dアニメーション',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'インターフェースデザインとプロトタイピング',

    // Portfolio Section
    'portfolio.subtitle': '私のプロジェクト',
    'portfolio.title1': 'いくつかのもの',
    'portfolio.title2': '私が作るのを楽しんだ',
    'portfolio.description': '私ができることを示すプロジェクトの選択。印象的なロゴから成功するサイトまで。',
    'portfolio.viewAllBehance': '私のすべてのプロジェクトを見る',

    // Services Section
    'services.subtitle': '私のサービス',
    'services.title': 'あなたのためにできること',
    'services.description': 'あなたのプロジェクトに命を吹き込む完全なクリエイティブソリューション。',
    'services.startProject': 'プロジェクトを開始',

    'services.brandIdentity.title': 'ブランドアイデンティティ',
    'services.brandIdentity.desc': '印象的なロゴとあなたが誰であるかを語るイメージが必要ですか？本当のアイデンティティを構築するお手伝いをします — 急いで作ったロゴではありません。',
    'services.brandIdentity.feature1': 'ロゴ（プロフェッショナル、Canvaではない）',
    'services.brandIdentity.feature2': '明確なブランドガイドライン',
    'services.brandIdentity.feature3': '一貫したビジュアルアイデンティティ',
    'services.brandIdentity.feature4': '機能するブランドポジショニング',

    'services.uiux.title': 'クリエイティブディレクション',
    'services.uiux.desc': 'アイデアはあるが、すべてが整列し、クリーンで一貫していることを望みますか？私がハンドルを取り、あなたが方向を示します。',
    'services.uiux.feature1': 'アートディレクション',
    'services.uiux.feature2': 'ビジュアル戦略',
    'services.uiux.feature3': 'スタイリッシュだが有用なアドバイス',
    'services.uiux.feature4': 'プロジェクトのグローバルビジョン',

    'services.webDev.title': 'UI/UXデザイン',
    'services.webDev.desc': '良いデザインは美しいだけではありません。機能する必要があります。シンプルで流動的で使いやすいインターフェースを作成します。',
    'services.webDev.feature1': 'ユーザーリサーチ',
    'services.webDev.feature2': 'クリーンなワイヤーフレーム',
    'services.webDev.feature3': 'ピクセルパーフェクトなモックアップ',
    'services.webDev.feature4': 'すべてが機能することを確認するテスト',

    'services.mobile.title': 'プリントデザイン',
    'services.mobile.desc': '触れることができるもの。フライヤー、カード、ポスター — 目と手で読むすべてのもの。',
    'services.mobile.feature1': '丁寧なレイアウト',
    'services.mobile.feature2': '良いタイポグラフィの選択',
    'services.mobile.feature3': '完璧な色の調和',
    'services.mobile.feature4': '印刷準備完了ファイル',

    'services.creative.title': 'モバイルデザイン',
    'services.creative.desc': 'あなたのアプリはデフォルトテンプレート以上の価値があります。地下鉄で使うのが楽しい、明確で直感的なインターフェースを作ります。',
    'services.creative.feature1': 'iOS & Androidデザイン',
    'services.creative.feature2': 'よく考えられたユーザージャーニー',
    'services.creative.feature3': 'スムーズなオンボーディング',
    'services.creative.feature4': 'アイコン、メニュー、そして違いを生むすべての小さな詳細',

    'services.motion.title': 'モーションデザイン & ビデオ',
    'services.motion.desc': 'よく動くコンテンツ。編集し、アニメーションし、あなたのビジュアルコミュニケーションにリズムを与えます。',
    'services.motion.feature1': 'スタイリッシュなロゴアニメーション',
    'services.motion.feature2': 'ダイナミックなビデオ編集',
    'services.motion.feature3': 'ティーザー、トレーラー、リール、ストーリー…',
    'services.motion.feature4': 'マイクロアニメーションとスムーズエフェクト',

    // Contact Section
    'contact.subtitle': 'お問い合わせ',
    'contact.title1': '話しましょう？',
    'contact.title2': '',
    'contact.description': 'アイデアがありますか？ビジュアルヘルプが必要ですか？それとも私たちが一緒に働けるかどうか知りたいだけですか？',
    'contact.getInTouch': '連絡を取り合いましょう',
    'contact.getInTouchDesc': '私に書いてください、すぐに返信します（いつも喜んで）。',
    'contact.email': 'メール',
    'contact.emailDesc': 'あなたのすべてのクリエイティブプロジェクトのために',
    'contact.location': '場所',
    'contact.followMe': 'フォローしてください',
    'contact.sendMessage': 'メッセージを送る',
    'contact.name': 'あなたの名前',
    'contact.namePlaceholder': 'お名前は？',
    'contact.emailPlaceholder': 'anata.no.email@example.com',
    'contact.subject': '件名',
    'contact.subjectPlaceholder': '何について話したいですか？',
    'contact.message': 'メッセージ',
    'contact.messagePlaceholder': 'あなたのプロジェクトについて教えてください...',
    'contact.sendBtn': 'メッセージを送信',

    // Footer
    'footer.description': 'スイスを拠点とする情熱的なメディアマティシャン。あなたのアイデアを印象に残るビジュアルプロジェクトに変換します。',
    'footer.quickLinks': 'ナビゲーション',
    'footer.services': 'サービス',
    'footer.brandIdentity': 'ブランドアイデンティティ',
    'footer.uiuxDesign': 'UI/UXデザイン',
    'footer.webDevelopment': 'ウェブ開発',
    'footer.motionGraphics': 'モーショングラフィックス',
    'footer.madeWith': '作られた',
    'footer.inSwitzerland': 'スイスで',
    'footer.allRights': '© 2024 Theo Blondel. すべての権利予約。',

    // Testimonials
    'testimonials.subtitle': '信頼',
    'testimonials.title': '彼らは私を信頼しています',
    'testimonials.description': '私の仕事を信じ、新しいプロジェクトのために戻ってくるパートナー。',
    'testimonials.trustedBy': '彼らは私を信頼しています',
    'testimonials.trustedByDesc': '私と働くことを選んだ企業'
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.work': 'Arbeiten',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.letsTalk': 'Lass uns reden',

    // Hero Section
    'hero.subtitle': 'Mediamatiker',
    'hero.greeting': 'Hey, ich bin Theo Blondel.',
    'hero.title1': 'Kreative',
    'hero.title2': 'Lösungen',
    'hero.title3': 'vielseitig',
    'hero.description': 'Ich bin Mediamatiker in der Schweiz und verwandle deine Ideen in saubere, wirkungsvolle und wirklich stylische visuelle Projekte.',
    'hero.contactMe': 'Lass uns reden?',
    'hero.watchDemo': 'Demo ansehen',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsDelivered': 'Projekte geliefert',
    'hero.clientSatisfaction': 'Kundenzufriedenheit',
    'hero.clientsWorldwide': 'Kunden weltweit',
    'hero.service1.title': 'Kreativ im Kern',
    'hero.service1.desc': 'effizient in der Form',
    'hero.service2.title': 'Design, das beeindruckt',
    'hero.service2.desc': 'und funktioniert',
    'hero.service3.title': 'Maßgeschneiderte Projekte',
    'hero.service3.desc': 'an deine Bedürfnisse angepasst',
    'hero.service4.title': 'Persönliche Betreuung',
    'hero.service4.desc': 'von Anfang bis Ende',

    // About Section
    'about.subtitle': 'Mein Weg',
    'about.title1': 'Ich habe wie viele angefangen',
    'about.title2': 'mit YouTube-Montagen mit 15 Jahren',
    'about.description1': 'Ich habe wie viele angefangen: mit YouTube-Montagen mit 15 Jahren, den Kopf voller Pixel und Soundeffekte. Minecraft, Fortnite, Call of... Ich verbrachte Stunden mit Testen, Basteln, auf der Suche nach dem, was funktioniert.',
    'about.description2': 'Dann kam das Zeichnen. Danach die Mediamatik. Und da verstand ich: Das will ich machen. Erschaffen. Konzipieren. Visuelle Ideen zum Leben erwecken, die mit Menschen sprechen.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Vollständige Beherrschung der Adobe Suite',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Professionelle Videobearbeitung und Farbkorrektur',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modellierung und 3D-Animation',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Interface-Design und Prototyping',

    // Portfolio Section
    'portfolio.subtitle': 'Meine Projekte',
    'portfolio.title1': 'Einige Sachen',
    'portfolio.title2': 'die ich gerne gemacht habe',
    'portfolio.description': 'Eine Auswahl von Projekten, die zeigen, was ich kann. Vom beeindruckenden Logo bis zur erfolgreichen Website.',
    'portfolio.viewAllBehance': 'Alle meine Projekte ansehen',

    // Services Section
    'services.subtitle': 'Meine Dienstleistungen',
    'services.title': 'Was ich für dich tun kann',
    'services.description': 'Vollständige kreative Lösungen, um deine Projekte zum Leben zu erwecken.',
    'services.startProject': 'Projekt starten',

    'services.brandIdentity.title': 'Markenidentität',
    'services.brandIdentity.desc': 'Brauchst du ein Logo, das beeindruckt, und ein Image, das erzählt, wer du bist? Ich helfe dir, eine echte Identität aufzubauen — nicht nur ein schnell gemachtes Logo.',
    'services.brandIdentity.feature1': 'Logo (professionell, nicht auf Canva)',
    'services.brandIdentity.feature2': 'Klare Markenrichtlinien',
    'services.brandIdentity.feature3': 'Kohärente visuelle Identität',
    'services.brandIdentity.feature4': 'Markenpositionierung, die funktioniert',

    'services.uiux.title': 'Kreative Leitung',
    'services.uiux.desc': 'Du hast die Ideen, aber willst, dass alles ausgerichtet, sauber und kohärent ist? Ich übernehme das Steuer, du gibst die Richtung vor.',
    'services.uiux.feature1': 'Art Direction',
    'services.uiux.feature2': 'Visuelle Strategie',
    'services.uiux.feature3': 'Stylische aber nützliche Ratschläge',
    'services.uiux.feature4': 'Globale Vision des Projekts',

    'services.webDev.title': 'UI/UX Design',
    'services.webDev.desc': 'Gutes Design ist nicht nur schön. Es muss funktionieren. Ich erstelle einfache, fließende und angenehm zu nutzende Interfaces.',
    'services.webDev.feature1': 'Benutzerforschung',
    'services.webDev.feature2': 'Saubere Wireframes',
    'services.webDev.feature3': 'Pixel-perfekte Mockups',
    'services.webDev.feature4': 'Tests, um sicherzustellen, dass alles funktioniert',

    'services.mobile.title': 'Print Design',
    'services.mobile.desc': 'Sachen, die man anfassen kann. Flyer, Karten, Poster — alles, was mit Augen und Händen gelesen wird.',
    'services.mobile.feature1': 'Sorgfältiges Layout',
    'services.mobile.feature2': 'Gute Typografie-Wahl',
    'services.mobile.feature3': 'Perfekte Farbharmonien',
    'services.mobile.feature4': 'Druckfertige Dateien',

    'services.creative.title': 'Mobile Design',
    'services.creative.desc': 'Deine App verdient mehr als ein Standard-Template. Ich mache dir ein klares, intuitives Interface, das in der U-Bahn angenehm zu nutzen ist.',
    'services.creative.feature1': 'iOS & Android Design',
    'services.creative.feature2': 'Durchdachte User Journey',
    'services.creative.feature3': 'Fließendes Onboarding',
    'services.creative.feature4': 'Icons, Menüs und alle kleinen Details, die den Unterschied machen',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Content, der sich gut bewegt. Ich schneide, animiere, gebe deiner visuellen Kommunikation Rhythmus.',
    'services.motion.feature1': 'Stylische Logo-Animationen',
    'services.motion.feature2': 'Dynamische Video-Montagen',
    'services.motion.feature3': 'Teaser, Trailer, Reels, Stories…',
    'services.motion.feature4': 'Mikro-Animationen und sanfte Effekte',

    // Contact Section
    'contact.subtitle': 'Kontakt',
    'contact.title1': 'Lass uns reden?',
    'contact.title2': '',
    'contact.description': 'Du hast eine Idee? Brauchst visuelle Hilfe? Oder willst einfach wissen, ob wir zusammenarbeiten können?',
    'contact.getInTouch': 'Lass uns in Kontakt bleiben',
    'contact.getInTouchDesc': 'Schreib mir, ich antworte schnell (und immer gerne).',
    'contact.email': 'E-Mail',
    'contact.emailDesc': 'Für alle deine kreativen Projekte',
    'contact.location': 'Standort',
    'contact.followMe': 'Folge mir',
    'contact.sendMessage': 'Schick mir eine Nachricht',
    'contact.name': 'Dein Name',
    'contact.namePlaceholder': 'Wie heißt du?',
    'contact.emailPlaceholder': 'deine.email@beispiel.com',
    'contact.subject': 'Betreff',
    'contact.subjectPlaceholder': 'Worüber willst du reden?',
    'contact.message': 'Nachricht',
    'contact.messagePlaceholder': 'Erzähl mir von deinem Projekt...',
    'contact.sendBtn': 'Nachricht senden',

    // Footer
    'footer.description': 'Leidenschaftlicher Mediamatiker aus der Schweiz. Ich verwandle deine Ideen in visuelle Projekte, die im Gedächtnis bleiben.',
    'footer.quickLinks': 'Navigation',
    'footer.services': 'Dienstleistungen',
    'footer.brandIdentity': 'Markenidentität',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.motionGraphics': 'Motion Graphics',
    'footer.madeWith': 'Gemacht mit',
    'footer.inSwitzerland': 'in der Schweiz',
    'footer.allRights': '© 2024 Theo Blondel. Alle Rechte vorbehalten.',

    // Testimonials
    'testimonials.subtitle': 'Vertrauen',
    'testimonials.title': 'Sie vertrauen mir',
    'testimonials.description': 'Partner, die an meine Arbeit glauben und für neue Projekte zurückkommen.',
    'testimonials.trustedBy': 'Sie vertrauen mir',
    'testimonials.trustedByDesc': 'Unternehmen, die sich entschieden haben, mit mir zu arbeiten'
  },
  it: {
    // Navigation
    'nav.about': 'Chi sono',
    'nav.work': 'Lavori',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatto',
    'nav.letsTalk': 'Parliamone',

    // Hero Section
    'hero.subtitle': 'Mediamatico',
    'hero.greeting': 'Ciao, sono Theo Blondel.',
    'hero.title1': 'Soluzioni',
    'hero.title2': 'creative',
    'hero.title3': 'versatili',
    'hero.description': 'Sono un mediamatico in Svizzera, e trasformo le tue idee in progetti visivi puliti, d\'impatto e davvero stilosi.',
    'hero.contactMe': 'Parliamone?',
    'hero.watchDemo': 'Guarda la demo',
    'hero.yearsExperience': 'Anni di esperienza',
    'hero.projectsDelivered': 'Progetti consegnati',
    'hero.clientSatisfaction': 'Soddisfazione clienti',
    'hero.clientsWorldwide': 'Clienti nel mondo',
    'hero.service1.title': 'Creativo nel profondo',
    'hero.service1.desc': 'efficace nella forma',
    'hero.service2.title': 'Design che colpisce',
    'hero.service2.desc': 'e che funziona',
    'hero.service3.title': 'Progetti su misura',
    'hero.service3.desc': 'adattati alle tue esigenze',
    'hero.service4.title': 'Seguito personalizzato',
    'hero.service4.desc': 'dall\'inizio alla fine',

    // About Section
    'about.subtitle': 'Il Mio Percorso',
    'about.title1': 'Ho iniziato come molti',
    'about.title2': 'con montaggi YouTube a 15 anni',
    'about.description1': 'Ho iniziato come molti: con montaggi YouTube a 15 anni, la testa nei pixel e negli effetti sonori. Minecraft, Fortnite, Call of... Ho passato ore a testare, smanettare, cercare quello che funziona.',
    'about.description2': 'Poi è arrivato il disegno. Dopo, la mediamatica. E lì ho capito: voglio fare questo. Creare. Concepire. Dare vita a idee visive che parlano alle persone.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Padronanza completa della suite Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montaggio video e color correction professionale',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modellazione e animazione 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design di interfacce e prototipazione',

    // Portfolio Section
    'portfolio.subtitle': 'I Miei Progetti',
    'portfolio.title1': 'Alcune cose',
    'portfolio.title2': 'che mi è piaciuto fare',
    'portfolio.description': 'Una selezione di progetti che mostrano quello che so fare. Dal logo che colpisce al sito che spacca.',
    'portfolio.viewAllBehance': 'Vedi tutti i miei progetti',

    // Services Section
    'services.subtitle': 'I Miei Servizi',
    'services.title': 'Cosa posso fare per te',
    'services.description': 'Soluzioni creative complete per dare vita ai tuoi progetti.',
    'services.startProject': 'Inizia un progetto',

    'services.brandIdentity.title': 'Identità di Brand',
    'services.brandIdentity.desc': 'Hai bisogno di un logo che colpisce e di un\'immagine che racconta chi sei? Ti aiuto a costruire una vera identità — non solo un logo fatto in fretta.',
    'services.brandIdentity.feature1': 'Logo (professionale, non su Canva)',
    'services.brandIdentity.feature2': 'Linee guida del brand chiare',
    'services.brandIdentity.feature3': 'Identità visiva coerente',
    'services.brandIdentity.feature4': 'Posizionamento del brand che funziona',

    'services.uiux.title': 'Direzione Creativa',
    'services.uiux.desc': 'Hai le idee, ma vuoi che tutto sia allineato, pulito e coerente? Prendo il volante, tu mi dai la direzione.',
    'services.uiux.feature1': 'Direzione artistica',
    'services.uiux.feature2': 'Strategia visiva',
    'services.uiux.feature3': 'Consigli stilosi ma utili',
    'services.uiux.feature4': 'Visione globale del progetto',

    'services.webDev.title': 'UI/UX Design',
    'services.webDev.desc': 'Un buon design non è solo bello. Deve funzionare. Creo interfacce semplici, fluide e piacevoli da usare.',
    'services.webDev.feature1': 'Ricerca utente',
    'services.webDev.feature2': 'Wireframe puliti',
    'services.webDev.feature3': 'Mockup pixel-perfect',
    'services.webDev.feature4': 'Test per vedere se tutto funziona',

    'services.mobile.title': 'Design Print',
    'services.mobile.desc': 'Roba che si può toccare. Volantini, biglietti, poster — tutto quello che si legge con gli occhi e le mani.',
    'services.mobile.feature1': 'Impaginazione curata',
    'services.mobile.feature2': 'Buona scelta tipografica',
    'services.mobile.feature3': 'Armonie di colori perfette',
    'services.mobile.feature4': 'File pronti per la stampa',

    'services.creative.title': 'Design Mobile',
    'services.creative.desc': 'La tua app merita di più di un template di default. Ti faccio un\'interfaccia chiara, intuitiva e piacevole da usare in metro.',
    'services.creative.feature1': 'Design iOS & Android',
    'services.creative.feature2': 'Percorso utente ben pensato',
    'services.creative.feature3': 'Onboarding fluido',
    'services.creative.feature4': 'Icone, menu e tutti i piccoli dettagli che fanno la differenza',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Contenuto che si muove bene. Monto, animo, do ritmo alla tua comunicazione visiva.',
    'services.motion.feature1': 'Animazioni di loghi stilose',
    'services.motion.feature2': 'Montaggi video dinamici',
    'services.motion.feature3': 'Teaser, trailer, reel, stories…',
    'services.motion.feature4': 'Micro-animazioni ed effetti fluidi',

    // Contact Section
    'contact.subtitle': 'Contatto',
    'contact.title1': 'Parliamone?',
    'contact.title2': '',
    'contact.description': 'Hai un\'idea? Hai bisogno di aiuto visivo? O vuoi solo sapere se possiamo lavorare insieme?',
    'contact.getInTouch': 'Restiamo in contatto',
    'contact.getInTouchDesc': 'Scrivimi, rispondo veloce (e sempre con piacere).',
    'contact.email': 'Email',
    'contact.emailDesc': 'Per tutti i tuoi progetti creativi',
    'contact.location': 'Posizione',
    'contact.followMe': 'Seguimi',
    'contact.sendMessage': 'Mandami un messaggio',
    'contact.name': 'Il tuo nome',
    'contact.namePlaceholder': 'Come ti chiami?',
    'contact.emailPlaceholder': 'tua.email@esempio.com',
    'contact.subject': 'Oggetto',
    'contact.subjectPlaceholder': 'Di cosa vuoi che parliamo?',
    'contact.message': 'Messaggio',
    'contact.messagePlaceholder': 'Raccontami del tuo progetto...',
    'contact.sendBtn': 'Invia messaggio',

    // Footer
    'footer.description': 'Mediamatico appassionato con base in Svizzera. Trasformo le tue idee in progetti visivi che lasciano il segno.',
    'footer.quickLinks': 'Navigazione',
    'footer.services': 'Servizi',
    'footer.brandIdentity': 'Identità di brand',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Sviluppo web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Fatto con',
    'footer.inSwitzerland': 'in Svizzera',
    'footer.allRights': '© 2024 Theo Blondel. Tutti i diritti riservati.',

    // Testimonials
    'testimonials.subtitle': 'Fiducia',
    'testimonials.title': 'Si fidano di me',
    'testimonials.description': 'Partner che credono nel mio lavoro e tornano per nuovi progetti.',
    'testimonials.trustedBy': 'Si fidano di me',
    'testimonials.trustedByDesc': 'Aziende che hanno scelto di lavorare con me'
  },
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.work': 'Trabalhos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.letsTalk': 'Vamos conversar',

    // Hero Section
    'hero.subtitle': 'Mediamático',
    'hero.greeting': 'Oi, eu sou o Theo Blondel.',
    'hero.title1': 'Soluções',
    'hero.title2': 'criativas',
    'hero.title3': 'versáteis',
    'hero.description': 'Sou mediamático na Suíça, e transformo suas ideias em projetos visuais limpos, impactantes e realmente estilosos.',
    'hero.contactMe': 'Vamos conversar?',
    'hero.watchDemo': 'Ver demo',
    'hero.yearsExperience': 'Anos de experiência',
    'hero.projectsDelivered': 'Projetos entregues',
    'hero.clientSatisfaction': 'Satisfação do cliente',
    'hero.clientsWorldwide': 'Clientes no mundo',
    'hero.service1.title': 'Criativo no fundo',
    'hero.service1.desc': 'eficaz na forma',
    'hero.service2.title': 'Design que impressiona',
    'hero.service2.desc': 'e que funciona',
    'hero.service3.title': 'Projetos sob medida',
    'hero.service3.desc': 'adaptados às suas necessidades',
    'hero.service4.title': 'Acompanhamento personalizado',
    'hero.service4.desc': 'do início ao fim',

    // About Section
    'about.subtitle': 'Minha Trajetória',
    'about.title1': 'Comecei como muitos',
    'about.title2': 'com montagens do YouTube aos 15 anos',
    'about.description1': 'Comecei como muitos: com montagens do YouTube aos 15 anos, a cabeça nos pixels e efeitos sonoros. Minecraft, Fortnite, Call of... Passei horas testando, mexendo, procurando o que funciona.',
    'about.description2': 'Depois veio o desenho. Em seguida, a mediamática. E aí entendi: quero fazer isso. Criar. Conceber. Dar vida a ideias visuais que falam com as pessoas.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Domínio completo da suíte Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Edição de vídeo e correção de cor profissional',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelagem e animação 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Design de interface e prototipagem',

    // Portfolio Section
    'portfolio.subtitle': 'Meus Projetos',
    'portfolio.title1': 'Algumas coisas',
    'portfolio.title2': 'que gostei de fazer',
    'portfolio.description': 'Uma seleção de projetos que mostram o que sei fazer. Do logo que impressiona ao site que arrasa.',
    'portfolio.viewAllBehance': 'Ver todos os meus projetos',

    // Services Section
    'services.subtitle': 'Meus Serviços',
    'services.title': 'O que posso fazer por você',
    'services.description': 'Soluções criativas completas para dar vida aos seus projetos.',
    'services.startProject': 'Iniciar um projeto',

    'services.brandIdentity.title': 'Identidade de Marca',
    'services.brandIdentity.desc': 'Precisa de um logo que impressiona e de uma imagem que conta quem você é? Te ajudo a construir uma verdadeira identidade — não apenas um logo feito rapidamente.',
    'services.brandIdentity.feature1': 'Logo (profissional, não no Canva)',
    'services.brandIdentity.feature2': 'Manual da marca claro',
    'services.brandIdentity.feature3': 'Identidade visual coerente',
    'services.brandIdentity.feature4': 'Posicionamento de marca que funciona',

    'services.uiux.title': 'Direção Criativa',
    'services.uiux.desc': 'Você tem as ideias, mas quer que tudo esteja alinhado, limpo e coerente? Eu pego o volante, você me dá a direção.',
    'services.uiux.feature1': 'Direção de arte',
    'services.uiux.feature2': 'Estratégia visual',
    'services.uiux.feature3': 'Conselhos estilosos mas úteis',
    'services.uiux.feature4': 'Visão global do projeto',

    'services.webDev.title': 'UI/UX Design',
    'services.webDev.desc': 'Um bom design não é apenas bonito. Tem que funcionar. Crio interfaces simples, fluidas e agradáveis de usar.',
    'services.webDev.feature1': 'Pesquisa de usuário',
    'services.webDev.feature2': 'Wireframes limpos',
    'services.webDev.feature3': 'Mockups pixel-perfect',
    'services.webDev.feature4': 'Testes para ver se tudo funciona',

    'services.mobile.title': 'Design Print',
    'services.mobile.desc': 'Coisas que se pode tocar. Panfletos, cartões, cartazes — tudo que se lê com os olhos e as mãos.',
    'services.mobile.feature1': 'Diagramação cuidadosa',
    'services.mobile.feature2': 'Boa escolha tipográfica',
    'services.mobile.feature3': 'Harmonias de cores perfeitas',
    'services.mobile.feature4': 'Arquivos prontos para impressão',

    'services.creative.title': 'Design Mobile',
    'services.creative.desc': 'Seu app merece mais que um template padrão. Faço uma interface clara, intuitiva e agradável de usar no metrô.',
    'services.creative.feature1': 'Design iOS & Android',
    'services.creative.feature2': 'Jornada do usuário bem pensada',
    'services.creative.feature3': 'Onboarding fluido',
    'services.creative.feature4': 'Ícones, menus e todos os pequenos detalhes que fazem a diferença',

    'services.motion.title': 'Motion Design & Vídeo',
    'services.motion.desc': 'Conteúdo que se move bem. Edito, animo, dou ritmo à sua comunicação visual.',
    'services.motion.feature1': 'Animações de logos estilosas',
    'services.motion.feature2': 'Montagens de vídeo dinâmicas',
    'services.motion.feature3': 'Teasers, trailers, reels, stories…',
    'services.motion.feature4': 'Micro-animações e efeitos suaves',

    // Contact Section
    'contact.subtitle': 'Contato',
    'contact.title1': 'Vamos conversar?',
    'contact.title2': '',
    'contact.description': 'Você tem uma ideia? Precisa de ajuda visual? Ou só quer saber se podemos trabalhar juntos?',
    'contact.getInTouch': 'Vamos manter contato',
    'contact.getInTouchDesc': 'Me escreva, respondo rápido (e sempre com prazer).',
    'contact.email': 'Email',
    'contact.emailDesc': 'Para todos os seus projetos criativos',
    'contact.location': 'Localização',
    'contact.followMe': 'Me siga',
    'contact.sendMessage': 'Me mande uma mensagem',
    'contact.name': 'Seu nome',
    'contact.namePlaceholder': 'Como você se chama?',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Do que você quer que a gente converse?',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Me conte sobre seu projeto...',
    'contact.sendBtn': 'Enviar mensagem',

    // Footer
    'footer.description': 'Mediamático apaixonado baseado na Suíça. Transformo suas ideias em projetos visuais que marcam.',
    'footer.quickLinks': 'Navegação',
    'footer.services': 'Serviços',
    'footer.brandIdentity': 'Identidade de marca',
    'footer.uiuxDesign': 'UI/UX Design',
    'footer.webDevelopment': 'Desenvolvimento web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Feito com',
    'footer.inSwitzerland': 'na Suíça',
    'footer.allRights': '© 2024 Theo Blondel. Todos os direitos reservados.',

    // Testimonials
    'testimonials.subtitle': 'Confiança',
    'testimonials.title': 'Eles confiam em mim',
    'testimonials.description': 'Parceiros que acreditam no meu trabalho e voltam para novos projetos.',
    'testimonials.trustedBy': 'Eles confiam em mim',
    'testimonials.trustedByDesc': 'Empresas que escolheram trabalhar comigo'
  },
  sq: {
    // Navigation
    'nav.about': 'Rreth meje',
    'nav.work': 'Punët',
    'nav.services': 'Shërbimet',
    'nav.contact': 'Kontakti',
    'nav.letsTalk': 'Le të flasim',

    // Hero Section
    'hero.subtitle': 'Mediamatik',
    'hero.greeting': 'Përshëndetje, unë jam Theo Blondel.',
    'hero.title1': 'Zgjidhje',
    'hero.title2': 'kreative',
    'hero.title3': 'të shumëllojshme',
    'hero.description': 'Jam mediamatik në Zvicër, dhe i transformoj idetë tuaja në projekte vizuale të pastra, me ndikim dhe vërtet elegante.',
    'hero.contactMe': 'Le të flasim?',
    'hero.watchDemo': 'Shiko demon',
    'hero.yearsExperience': 'Vite përvojë',
    'hero.projectsDelivered': 'Projekte të dorëzuara',
    'hero.clientSatisfaction': 'Kënaqësia e klientit',
    'hero.clientsWorldwide': 'Klientë në botë',
    'hero.service1.title': 'Kreativ në thelb',
    'hero.service1.desc': 'efikas në formë',
    'hero.service2.title': 'Dizajn që bën përshtypje',
    'hero.service2.desc': 'dhe që funksionon',
    'hero.service3.title': 'Projekte të personalizuara',
    'hero.service3.desc': 'të përshtatura me nevojat tuaja',
    'hero.service4.title': 'Ndjekje e personalizuar',
    'hero.service4.desc': 'nga fillimi deri në fund',

    // About Section
    'about.subtitle': 'Rruga Ime',
    'about.title1': 'Fillova si shumë të tjerë',
    'about.title2': 'me montazhe YouTube në moshën 15 vjeç',
    'about.description1': 'Fillova si shumë të tjerë: me montazhe YouTube në moshën 15 vjeç, me kokën në piksele dhe efekte zanore. Minecraft, Fortnite, Call of... Kalova orë duke testuar, duke eksperimentuar, duke kërkuar atë që funksionon.',
    'about.description2': 'Pastaj erdhi vizatimi. Më pas, mediamatika. Dhe atëherë e kuptova: dua ta bëj këtë. Të krijoj. Të konceptoj. Të jap jetë ideve vizuale që flasin me njerëzit.',
    'about.skill1.title': 'Adobe Creative Suite',
    'about.skill1.desc': 'Zotërim i plotë i paketës Adobe',
    'about.skill2.title': 'DaVinci Resolve',
    'about.skill2.desc': 'Montim video dhe korrigjim ngjyrash profesional',
    'about.skill3.title': 'Autodesk',
    'about.skill3.desc': 'Modelim dhe animacion 3D',
    'about.skill4.title': 'Figma',
    'about.skill4.desc': 'Dizajn ndërfaqesh dhe prototipim',

    // Portfolio Section
    'portfolio.subtitle': 'Projektet e Mia',
    'portfolio.title1': 'Disa gjëra',
    'portfolio.title2': 'që më pëlqeu t\'i bëj',
    'portfolio.description': 'Një përzgjedhje projektesh që tregojnë atë që di të bëj. Nga logo që bën përshtypje te sajti që triumfon.',
    'portfolio.viewAllBehance': 'Shiko të gjitha projektet e mia',

    // Services Section
    'services.subtitle': 'Shërbimet e Mia',
    'services.title': 'Çfarë mund të bëj për ju',
    'services.description': 'Zgjidhje kreative të plota për t\'u dhënë jetë projekteve tuaja.',
    'services.startProject': 'Fillo një projekt',

    'services.brandIdentity.title': 'Identiteti i Markës',
    'services.brandIdentity.desc': 'Keni nevojë për një logo që bën përshtypje dhe një imazh që tregon se kush jeni? Ju ndihmoj të ndërtoni një identitet të vërtetë — jo vetëm një logo të bërë me nxitim.',
    'services.brandIdentity.feature1': 'Logo (profesional, jo në Canva)',
    'services.brandIdentity.feature2': 'Udhëzues marke të qartë',
    'services.brandIdentity.feature3': 'Identitet vizual i qëndrueshëm',
    'services.brandIdentity.feature4': 'Pozicionim marke që funksionon',

    'services.uiux.title': 'Drejtim Kreativ',
    'services.uiux.desc': 'Keni idetë, por doni që gjithçka të jetë e rreshtuar, e pastër dhe e qëndrueshme? Unë marr timonin, ju më jepni drejtimin.',
    'services.uiux.feature1': 'Drejtim artistik',
    'services.uiux.feature2': 'Strategji vizuale',
    'services.uiux.feature3': 'Këshilla elegante por të dobishme',
    'services.uiux.feature4': 'Vizioni global i projektit',

    'services.webDev.title': 'Dizajn UI/UX',
    'services.webDev.desc': 'Një dizajn i mirë nuk është vetëm i bukur. Duhet të funksionojë. Krijoj ndërfaqe të thjeshta, të rrjedhshme dhe të këndshme për t\'u përdorur.',
    'services.webDev.feature1': 'Kërkim përdoruesi',
    'services.webDev.feature2': 'Wireframes të pastra',
    'services.webDev.feature3': 'Mockups pixel-perfect',
    'services.webDev.feature4': 'Teste për të parë nëse gjithçka funksionon',

    'services.mobile.title': 'Dizajn Print',
    'services.mobile.desc': 'Gjëra që mund të prekësh. Fletushka, karta, postera — gjithçka që lexohet me sy dhe duar.',
    'services.mobile.feature1': 'Faqosje e kujdesshme',
    'services.mobile.feature2': 'Zgjedhje e mirë tipografike',
    'services.mobile.feature3': 'Harmoni ngjyrash të përsosura',
    'services.mobile.feature4': 'Skedarë gati për shtypje',

    'services.creative.title': 'Dizajn Mobile',
    'services.creative.desc': 'Aplikacioni juaj meriton më shumë se një template i paracaktuar. Ju bëj një ndërfaqe të qartë, intuitive dhe të këndshme për t\'u përdorur në metro.',
    'services.creative.feature1': 'Dizajn iOS & Android',
    'services.creative.feature2': 'Udhëtim përdoruesi i menduar mirë',
    'services.creative.feature3': 'Onboarding i rrjedhshëm',
    'services.creative.feature4': 'Ikona, menu dhe të gjitha detajet e vogla që bëjnë ndryshimin',

    'services.motion.title': 'Motion Design & Video',
    'services.motion.desc': 'Përmbajtje që lëviz mirë. Montoj, animoj, i jap ritëm komunikimit tuaj vizual.',
    'services.motion.feature1': 'Animacione logosh elegante',
    'services.motion.feature2': 'Montazhe video dinamike',
    'services.motion.feature3': 'Teaser, trailer, reel, stories…',
    'services.motion.feature4': 'Mikro-animacione dhe efekte të buta',

    // Contact Section
    'contact.subtitle': 'Kontakti',
    'contact.title1': 'Le të flasim?',
    'contact.title2': '',
    'contact.description': 'Keni një ide? Keni nevojë për ndihmë vizuale? Apo thjesht doni të dini nëse mund të punojmë së bashku?',
    'contact.getInTouch': 'Le të qëndrojmë në kontakt',
    'contact.getInTouchDesc': 'Më shkruani, përgjigjem shpejt (dhe gjithmonë me kënaqësi).',
    'contact.email': 'Email',
    'contact.emailDesc': 'Për të gjitha projektet tuaja kreative',
    'contact.location': 'Vendndodhja',
    'contact.followMe': 'Më ndiqni',
    'contact.sendMessage': 'Më dërgoni një mesazh',
    'contact.name': 'Emri juaj',
    'contact.namePlaceholder': 'Si quheni?',
    'contact.emailPlaceholder': 'email.juaj@shembull.com',
    'contact.subject': 'Tema',
    'contact.subjectPlaceholder': 'Për çfarë doni të flasim?',
    'contact.message': 'Mesazhi',
    'contact.messagePlaceholder': 'Më tregoni për projektin tuaj...',
    'contact.sendBtn': 'Dërgo mesazhin',

    // Footer
    'footer.description': 'Mediamatik i pasionuar me bazë në Zvicër. I transformoj idetë tuaja në projekte vizuale që lënë gjurmë.',
    'footer.quickLinks': 'Navigimi',
    'footer.services': 'Shërbimet',
    'footer.brandIdentity': 'Identiteti i markës',
    'footer.uiuxDesign': 'Dizajn UI/UX',
    'footer.webDevelopment': 'Zhvillim web',
    'footer.motionGraphics': 'Motion graphics',
    'footer.madeWith': 'Bërë me',
    'footer.inSwitzerland': 'në Zvicër',
    'footer.allRights': '© 2024 Theo Blondel. Të gjitha të drejtat e rezervuara.',

    // Testimonials
    'testimonials.subtitle': 'Besimi',
    'testimonials.title': 'Ata më besojnë',
    'testimonials.description': 'Partnerë që besojnë në punën time dhe kthehen për projekte të reja.',
    'testimonials.trustedBy': 'Ata më besojnë',
    'testimonials.trustedByDesc': 'Kompani që kanë zgjedhur të punojnë me mua'
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
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
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