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
  Play
} from 'lucide-react';

export default function PersonalWebsite() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-50%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '-10%']), springConfig);

  const projects = [
    {
      title: 'ATHENIS',
      subtitle: 'Luxury Brand Identity',
      description: 'Complete visual identity for a luxury hospitality brand, merging Greek heritage with contemporary design language.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2024',
      tags: ['Branding', 'Identity', 'Luxury']
    },
    {
      title: 'FINTECH',
      subtitle: 'Trading Dashboard',
      description: 'Real-time financial interface with advanced data visualization and seamless user experience for professional traders.',
      image: 'https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2024',
      tags: ['UI/UX', 'Fintech', 'Dashboard']
    },
    {
      title: 'SOUNDWAVE',
      subtitle: 'Audio Experience',
      description: 'Immersive audio platform with spatial controls and real-time visualization for next-generation music consumption.',
      image: 'https://images.pexels.com/photos/20415409/pexels-photo-20415409.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      year: '2024',
      tags: ['Audio', 'Interactive', '3D']
    }
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
      {/* Minimal Fixed Navigation */}
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
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/50 backdrop-blur-xl rounded-full px-4 py-2 border border-gray-800"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </motion.button>
          </Link>
          
          {/* Section Indicators */}
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSection === index 
                    ? 'bg-white w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* HERO SECTION - Massive Typography */}
      <section data-section="0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{ 
                y: [null, -100, -200],
                opacity: [0.2, 0.5, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
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
            {/* MASSIVE NAME */}
            <div className="space-y-4">
              <motion.h1 
                className="text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-[12rem] font-extralight leading-[0.8] tracking-tighter"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block"
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
            
            {/* Subtitle */}
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
                className="text-lg sm:text-xl text-gray-500 italic max-w-2xl mx-auto font-light"
              >
                "Curious mind with a visual instinct."
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm font-light tracking-wider">SCROLL</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION - Immersive Text */}
      <section data-section="1" className="min-h-screen flex items-center justify-center bg-white text-black relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            <motion.h2 
              className="text-[8vw] sm:text-[6vw] lg:text-[5vw] xl:text-8xl font-extralight leading-none"
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
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-light text-gray-800 max-w-5xl mx-auto">
                Swiss-based multimedia creator with{' '}
                <span className="font-medium text-black">7 years</span>{' '}
                of exploration in design, marketing and tech
              </p>
              
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light max-w-4xl mx-auto"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                — across both SFW and NSFW fields.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - Edge-to-edge visuals */}
      <section data-section="2" className="min-h-screen bg-black py-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 px-4 sm:px-6"
          >
            <h2 className="text-[8vw] sm:text-[6vw] lg:text-[5vw] xl:text-8xl font-extralight">PROJECTS</h2>
          </motion.div>

          {/* Large Project Cards */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                viewport={{ once: true }}
                className="relative h-screen group cursor-pointer overflow-hidden"
              >
                {/* Full-width background image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-700" />
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
                  <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 sm:space-y-8"
                  >
                    <div className="space-y-4">
                      <motion.h3 
                        className="text-[8vw] sm:text-[6vw] lg:text-[4vw] xl:text-7xl font-extralight leading-none"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <motion.p 
                      className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Year indicator */}
                <div className="absolute top-8 right-8 text-6xl sm:text-8xl font-extralight text-white/20">
                  {project.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION - Dramatic layout */}
      <section data-section="3" className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-20 sm:space-y-24"
          >
            <h2 className="text-[8vw] sm:text-[6vw] lg:text-[5vw] xl:text-8xl font-extralight">EXPERTISE</h2>
            
            {/* Three massive words */}
            <div className="space-y-12 sm:space-y-16">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.2, duration: 1 }}
                whileHover={{ scale: 1.05, x: 20 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-center gap-8 sm:gap-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] xl:text-9xl font-extralight group-hover:text-blue-500 transition-colors">
                    DESIGN
                  </h3>
                </div>
                <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-light">React, Tailwind, Figma</p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.4, duration: 1 }}
                whileHover={{ scale: 1.05, x: -20 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-center gap-8 sm:gap-12">
                  <h3 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] xl:text-9xl font-extralight group-hover:text-purple-500 transition-colors">
                    CODE
                  </h3>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Palette size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-light">HTML, CSS, JavaScript, React</p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.6, duration: 1 }}
                whileHover={{ scale: 1.05, x: 20 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center justify-center gap-8 sm:gap-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] xl:text-9xl font-extralight group-hover:text-green-500 transition-colors">
                    BRAND
                  </h3>
                </div>
                <p className="text-xl sm:text-2xl text-gray-600 mt-4 font-light">SEO, Strategy, No-code</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION - High contrast finale */}
      <section data-section="4" className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="space-y-16 sm:space-y-20"
          >
            <motion.h2 
              className="text-[8vw] sm:text-[6vw] lg:text-[5vw] xl:text-8xl font-extralight"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              LET'S CONNECT
            </motion.h2>
            
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-12"
            >
              {/* Email - Huge and clickable */}
              <motion.a
                href="mailto:hello@theoblondel.ch"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light hover:text-gray-300 transition-all group"
              >
                <Mail size={60} className="group-hover:scale-110 transition-transform sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                <span className="border-b border-transparent group-hover:border-white transition-all">
                  hello@theoblondel.ch
                </span>
              </motion.a>

              {/* Social Links */}
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
                  className="flex flex-col items-center gap-4 hover:text-gray-300 transition-all group"
                >
                  <Github size={40} className="sm:w-12 sm:h-12" />
                  <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GITHUB</span>
                </motion.a>
                
                <motion.a
                  href="https://behance.net/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -15, rotate: -5 }}
                  className="flex flex-col items-center gap-4 hover:text-gray-300 transition-all group"
                >
                  <ExternalLink size={40} className="sm:w-12 sm:h-12" />
                  <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">BEHANCE</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -15, rotate: 5 }}
                  className="flex flex-col items-center gap-4 hover:text-gray-300 transition-all group"
                >
                  <Instagram size={40} className="sm:w-12 sm:h-12" />
                  <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">INSTAGRAM</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Copyright */}
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