import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  Code2, 
  Palette, 
  Zap, 
  Mail,
  Github,
  Instagram,
  ExternalLink,
  ChevronDown,
  Play,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function PersonalWebsite() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Enhanced parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-50%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-10%']), springConfig);

  const projects = [
    {
      title: 'SlyPanel',
      subtitle: 'Full local web dashboard for automation',
      description: 'Complete automation dashboard built for privacy-first users. Local-only processing with advanced scheduling and system integration.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2024',
      tags: ['Dashboard', 'Automation', 'Privacy']
    },
    {
      title: 'HugoBoost',
      subtitle: 'Desktop cleaner with custom UI',
      description: 'Elegant desktop optimization tool with a focus on user experience and visual clarity. Built for power users who value aesthetics.',
      image: 'https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2023',
      tags: ['Desktop', 'UI/UX', 'Optimization']
    },
    {
      title: 'Kraft',
      subtitle: 'Offline-first productivity tools',
      description: 'Suite of productivity applications designed for offline work. Focus on simplicity, speed, and data ownership.',
      image: 'https://images.pexels.com/photos/20415409/pexels-photo-20415409.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2023',
      tags: ['Productivity', 'Offline', 'Tools']
    },
    {
      title: 'NSFW Terminal',
      subtitle: 'Terminal-style landing with secret access',
      description: 'Experimental interface design exploring unconventional navigation patterns and hidden user experiences.',
      image: 'https://images.pexels.com/photos/163064/pexels-photo-163064.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2022',
      tags: ['Experimental', 'Interface', 'NSFW']
    }
  ];

  const timeline = [
    { year: '2018', milestone: 'First edits & drawings' },
    { year: '2020', milestone: 'Branding / design focus' },
    { year: '2021', milestone: 'NSFW ecosystem / SlyClub' },
    { year: '2023', milestone: 'Privacy, tools, and desktop UI' },
    { year: '2025', milestone: 'Reinvention, refined style' }
  ];

  const philosophyQuotes = [
    "Design is not polish. It's translation.",
    "I like when tools don't betray the intention.",
    "Local, light, brutal."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section[data-section]');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Enhanced Fixed Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 border border-gray-800 hover:border-accent-500 btn-immersive"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </motion.button>
          </Link>
          
          {/* Enhanced Section Indicators */}
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSection === index 
                    ? 'bg-accent-500 w-8 glow-accent' 
                    : 'bg-gray-600 hover:bg-gray-400 w-2'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO SECTION - Enhanced Typography */}
      <section data-section="0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced background with parallax */}
        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        />
        
        {/* Enhanced floating elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-400/30 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{ 
                y: [null, -150, -300],
                opacity: [0.3, 0.7, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-8 sm:space-y-12"
          >
            {/* MASSIVE NAME with enhanced gradient */}
            <div className="space-y-4">
              <motion.h1 
                className="text-huge font-extralight leading-extra-tight tracking-ultra-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block text-gradient-primary"
                >
                  THÉO
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block text-gray-400"
                >
                  BLONDEL
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Enhanced subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide">
                Digital Designer & Creative Technologist
              </p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-lg sm:text-xl text-accent-400 italic max-w-2xl mx-auto font-light"
              >
                "Curious mind with a visual instinct."
              </motion.p>
            </motion.div>

            {/* Enhanced Circular Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex justify-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-600 hover:border-accent-500 transition-all portrait-enhanced glow-accent"
              >
                <img 
                  src="/DSC00831.png" 
                  alt="Théo Blondel"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-accent-400"
          >
            <span className="text-sm font-light tracking-widest">SCROLL</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION - Enhanced Typography */}
      <section data-section="1" className="min-h-screen flex items-center justify-center bg-immersive-light text-black relative section-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            <motion.h2 
              className="text-massive font-extralight leading-super-tight tracking-super-tight"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              ABOUT
            </motion.h2>
            
            <motion.div 
              className="space-y-8 sm:space-y-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-light text-gray-800 max-w-5xl mx-auto text-balance">
                I'm Théo, a{' '}
                <span className="font-medium text-black text-gradient-accent">Swiss-based designer</span>{' '}
                with a background shaped by curiosity more than convention.
              </p>
              
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light max-w-4xl mx-auto text-pretty"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                From illustration and motion to code and product thinking — I've always built things that reflect how I see the world.
              </motion.p>

              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-light max-w-3xl mx-auto text-pretty"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                I've explored both SFW and NSFW spaces, driven by the same core idea: clarity, control, and emotion. I don't follow trends — I follow questions.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION - Enhanced Quotes */}
      <section data-section="2" className="min-h-screen flex items-center justify-center bg-black text-white section-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-20 sm:space-y-32"
          >
            <motion.h2 
              className="text-massive font-extralight text-center leading-super-tight tracking-super-tight"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              HOW I THINK
            </motion.h2>
            
            <div className="space-y-16 sm:space-y-24">
              {philosophyQuotes.map((quote, index) => (
                <motion.div
                  key={quote}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="text-center cursor-pointer group"
                >
                  <blockquote className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-300 italic max-w-5xl mx-auto group-hover:text-accent-300 transition-all duration-500 text-balance">
                    "{quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - Enhanced Cards */}
      <section data-section="3" className="min-h-screen bg-immersive-light text-black py-20 section-transition">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 px-4 sm:px-6"
          >
            <h2 className="text-massive font-extralight text-black leading-super-tight tracking-super-tight">PROJECTS</h2>
          </motion.div>

          {/* Enhanced Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 px-4 sm:px-6" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer flex-shrink-0 w-80 sm:w-96 lg:w-[500px] h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gray-100 project-card"
                >
                  {/* Enhanced Project Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                    <motion.div
                      whileHover={{ y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light group-hover:text-accent-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-300 font-light">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-pretty">
                        {project.description}
                      </p>
                      
                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10 hover:bg-accent-500/20 hover:border-accent-400/30 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Year */}
                  <div className="absolute top-6 right-6 text-4xl sm:text-5xl font-extralight text-white/40 group-hover:text-accent-400/60 transition-colors">
                    {project.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION - Enhanced Visual */}
      <section data-section="4" className="min-h-screen flex items-center justify-center bg-black text-white section-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16 sm:space-y-20"
          >
            <motion.h2 
              className="text-massive font-extralight text-center leading-super-tight tracking-super-tight"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              TIMELINE
            </motion.h2>
            
            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: index % 2 === 0 ? 20 : -20 }}
                  className={`flex items-center gap-8 sm:gap-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`flex items-center gap-8 sm:gap-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-gray-600 hover:text-accent-400 transition-colors">
                      {item.year}
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.5 }}
                      className="w-4 h-4 bg-accent-500 rounded-full flex-shrink-0 glow-accent"
                    />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-light max-w-md text-pretty">
                      {item.milestone}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE SECTION - Enhanced Keywords */}
      <section data-section="5" className="min-h-screen flex items-center justify-center bg-immersive-light text-black section-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-20 sm:space-y-24"
          >
            <h2 className="text-massive font-extralight leading-super-tight tracking-super-tight">EXPERTISE</h2>
            
            {/* Enhanced massive words */}
            <div className="space-y-8 sm:space-y-12">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.2, duration: 1 }}
                whileHover={{ scale: 1.05, x: 20 }}
                className="group cursor-pointer"
              >
                <h3 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-9xl font-extralight group-hover:text-accent-500 transition-all duration-500 leading-none tracking-ultra-tight shimmer-effect">
                  DESIGN
                </h3>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.4, duration: 1 }}
                whileHover={{ scale: 1.05, x: -20 }}
                className="group cursor-pointer"
              >
                <h3 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-9xl font-extralight group-hover:text-premium-purple transition-all duration-500 leading-none tracking-ultra-tight shimmer-effect">
                  CODE
                </h3>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.6, duration: 1 }}
                whileHover={{ scale: 1.05, x: 20 }}
                className="group cursor-pointer"
              >
                <h3 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-9xl font-extralight group-hover:text-premium-pink transition-all duration-500 leading-none tracking-ultra-tight shimmer-effect">
                  BRANDING
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION - Enhanced Final Screen */}
      <section data-section="6" className="min-h-screen flex items-center justify-center bg-black text-white section-transition">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-16 sm:space-y-20"
          >
            <motion.h2 
              className="text-massive font-extralight leading-super-tight tracking-super-tight"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              CONTACT
            </motion.h2>
            
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-12"
            >
              {/* Enhanced Email */}
              <motion.a
                href="mailto:hello@theoblondel.ch"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light hover:text-accent-300 transition-all group btn-immersive"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={40} className="group-hover:scale-110 transition-transform sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                </motion.div>
                <span className="border-b border-transparent group-hover:border-accent-400 transition-all">
                  hello@theoblondel.ch
                </span>
              </motion.a>

              {/* Enhanced Social Links */}
              <motion.div 
                className="flex justify-center gap-12 sm:gap-16 pt-8"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="https://github.com/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -15, rotate: 5 }}
                  className="flex flex-col items-center gap-4 hover:text-accent-300 transition-all group btn-immersive"
                >
                  <Github size={32} className="sm:w-10 sm:h-10" />
                  <span className="text-xs font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GITHUB</span>
                </motion.a>
                
                <motion.a
                  href="https://behance.net/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -15, rotate: -5 }}
                  className="flex flex-col items-center gap-4 hover:text-accent-300 transition-all group btn-immersive"
                >
                  <ExternalLink size={32} className="sm:w-10 sm:h-10" />
                  <span className="text-xs font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">BEHANCE</span>
                </motion.a>
                
                <motion.a
                  href="https://discord.com/users/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -15, rotate: 5 }}
                  className="flex flex-col items-center gap-4 hover:text-accent-300 transition-all group btn-immersive"
                >
                  <Play size={32} className="sm:w-10 sm:h-10" />
                  <span className="text-xs font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">DISCORD</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="pt-16 text-sm text-gray-500 font-light tracking-widest"
            >
              © 2024 THÉO BLONDEL
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}