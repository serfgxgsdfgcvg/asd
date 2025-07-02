import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderOpen, 
  Mail,
  Calendar,
  MapPin,
  Award,
  Star,
  Download,
  ExternalLink,
  ChevronRight,
  Palette,
  Smartphone,
  Globe,
  Camera,
  Brush,
  Target
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import SEOHead from './SEOHead';

type Section = 'intro' | 'experience' | 'education' | 'skills' | 'projects' | 'contact';

export default function InteractiveCV() {
  const { t } = useApp();
  const [activeSection, setActiveSection] = useState<Section>('intro');

  const sections = [
    { id: 'intro', icon: User, label: 'Introduction' },
    { id: 'experience', icon: Briefcase, label: 'Expérience' },
    { id: 'education', icon: GraduationCap, label: 'Formation' },
    { id: 'skills', icon: Code, label: 'Compétences' },
    { id: 'projects', icon: FolderOpen, label: 'Projets' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const experiences = [
    {
      title: 'Médiamaticien Senior',
      company: 'Studio Créatif Suisse',
      period: '2022 - Présent',
      location: 'Zurich, Suisse',
      description: 'Direction créative et développement d\'identités de marque pour des clients internationaux. Gestion d\'équipes créatives et supervision de projets complexes.',
      achievements: ['Augmentation de 40% du taux de conversion client', 'Gestion de 15+ projets simultanés', 'Formation de 8 designers juniors']
    },
    {
      title: 'Designer UI/UX',
      company: 'TechStart Innovation',
      period: '2020 - 2022',
      location: 'Genève, Suisse',
      description: 'Conception d\'interfaces utilisateur pour applications mobiles et web. Recherche utilisateur et tests d\'utilisabilité.',
      achievements: ['Redesign complet de l\'app mobile (4.8★ App Store)', 'Réduction de 60% du taux d\'abandon', 'Implémentation du design system']
    },
    {
      title: 'Designer Graphique',
      company: 'Agence Créative Vevey',
      period: '2018 - 2020',
      location: 'Vevey, Suisse',
      description: 'Création d\'identités visuelles, supports print et digitaux pour PME locales et startups.',
      achievements: ['50+ identités de marque créées', 'Prix du meilleur design local 2019', 'Développement portfolio client +200%']
    }
  ];

  const education = [
    {
      degree: 'CFC Médiamaticien',
      school: 'École Professionnelle de Lausanne',
      period: '2014 - 2018',
      description: 'Formation complète en médiamatique couvrant design graphique, développement web, audiovisuel et communication.',
      grade: 'Mention Très Bien (5.8/6)'
    },
    {
      degree: 'Certificat UI/UX Design',
      school: 'Google UX Design Professional',
      period: '2020',
      description: 'Certification professionnelle en design d\'expérience utilisateur et interface.',
      grade: 'Certifié avec distinction'
    }
  ];

  const skills = [
    {
      category: 'Design',
      icon: Palette,
      items: [
        { name: 'Adobe Creative Suite', level: 95 },
        { name: 'Figma', level: 92 },
        { name: 'Sketch', level: 88 },
        { name: 'Principle', level: 85 }
      ]
    },
    {
      category: 'Développement',
      icon: Code,
      items: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'WordPress', level: 88 }
      ]
    },
    {
      category: 'Audiovisuel',
      icon: Camera,
      items: [
        { name: 'After Effects', level: 92 },
        { name: 'Premiere Pro', level: 88 },
        { name: 'Cinema 4D', level: 75 },
        { name: 'DaVinci Resolve', level: 80 }
      ]
    }
  ];

  const projects = [
    {
      title: 'ATHENIS - Brand Identity',
      category: 'Branding',
      year: '2024',
      description: 'Identité complète pour une marque de luxe hôtelière, alliant tradition grecque et modernité.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://behance.net/gallery/220519773'
    },
    {
      title: 'FinTech Dashboard',
      category: 'UI/UX',
      year: '2024',
      description: 'Interface de trading avec visualisation de données en temps réel.',
      image: 'https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://behance.net/gallery/220519773'
    },
    {
      title: 'SoundWave Experience',
      category: 'UI/UX',
      year: '2024',
      description: 'Application audio immersive avec contrôles spatiaux 3D.',
      image: 'https://images.pexels.com/photos/20415409/pexels-photo-20415409.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://behance.net/gallery/220519773'
    }
  ];

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <motion.div
            key="intro"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <img 
                  src="/DSC00831.png" 
                  alt="Theo Blondel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Theo Blondel
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  Médiamaticien & Solutions Créatives <span className="font-bold">polyvalente</span>
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Zurich, Suisse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>5+ ans d'expérience</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">À propos de moi</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Médiamaticien passionné basé en Suisse, je combine créativité artistique et expertise technique 
                pour créer des expériences visuelles authentiques. Mon approche holistique du design me permet 
                de développer des solutions créatives qui racontent votre histoire de manière unique.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Spécialisé en identité de marque et design d'interface, j'accompagne mes clients dans la 
                création d'expériences mémorables qui marquent les esprits et génèrent des résultats concrets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { number: '220+', label: 'Projets réalisés' },
                { number: '50+', label: 'Clients satisfaits' },
                { number: '5+', label: 'Années d\'expérience' },
                { number: '99%', label: 'Satisfaction client' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center cursor-pointer shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            key="experience"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Expérience Professionnelle
            </motion.h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Réalisations clés :</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <Star size={12} className="text-black dark:text-white" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            key="education"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Formation & Certifications
            </motion.h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.3 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{edu.grade}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Formations continues</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Advanced Motion Graphics - School of Motion',
                  'Design Systems - Design+Code',
                  'Brand Strategy - Brand New School',
                  'Web Accessibility - W3C'
                ].map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <Award size={16} className="text-black dark:text-white" />
                    {course}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            key="skills"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Compétences Techniques
            </motion.h2>
            
            <div className="space-y-8">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + categoryIndex * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center"
                    >
                      <category.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="cursor-pointer"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.9 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                            className="bg-black dark:bg-white h-2 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Projets Sélectionnés
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer group shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-full text-xs">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      Voir le projet
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Restons en Contact
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Informations de Contact</h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: 'hello@theoblondel.ch', href: 'mailto:hello@theoblondel.ch' },
                      { icon: MapPin, label: 'Localisation', value: 'Zurich, Suisse', href: '#' },
                      { icon: Calendar, label: 'Disponibilité', value: 'Ouvert aux nouveaux projets', href: '#' }
                    ].map((contact, index) => (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center">
                          <contact.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</div>
                          <div className="text-gray-900 dark:text-white font-medium">{contact.value}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Télécharger mon CV</h3>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-3 transition-all"
                  >
                    <Download size={20} />
                    Télécharger CV (PDF)
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Envoyez-moi un message</h3>
                
                <form className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-all"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-all"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <textarea
                      placeholder="Votre message"
                      rows={4}
                      className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-black dark:focus:border-white focus:outline-none transition-all resize-none"
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 py-3 px-6 rounded-xl font-medium transition-all"
                  >
                    Envoyer le message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="CV Interactif - Theo Blondel | Médiamaticien Créatif"
        description="Découvrez mon parcours professionnel, mes compétences et mes réalisations. CV interactif de Theo Blondel, médiamaticien spécialisé en design et solutions créatives."
        url="https://theoblondel.ch/cv"
        type="profile"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Header */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 p-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Retour au portfolio</span>
              </motion.button>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              CV Interactif
            </motion.h1>
          </div>
        </motion.header>

        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 px-6 mb-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(section.id as Section)}
                  className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <section.icon size={16} />
                  <span className="hidden sm:inline">{section.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Content */}
        <main className="relative z-10 px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}