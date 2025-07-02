import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  Code, 
  Palette, 
  Video, 
  TrendingUp,
  Mail,
  Github,
  Instagram,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function PersonalWebsite() {
  const { theme } = useApp();
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  const projects = [
    {
      title: 'ATHENIS',
      description: 'Luxury hospitality brand with Greek heritage',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'FinTech Dashboard',
      description: 'Real-time trading interface',
      image: 'https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'SoundWave',
      description: 'Immersive audio experience',
      image: 'https://images.pexels.com/photos/20415409/pexels-photo-20415409.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'E-commerce Platform',
      description: 'AI-powered shopping experience',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Banking App',
      description: 'Secure mobile banking',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Motion Reel',
      description: '2D & 3D animation showcase',
      image: 'https://images.pexels.com/photos/163064/pexels-photo-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      color: 'from-red-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
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
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden">
      {/* Minimal Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full px-4 py-2 border border-gray-200 dark:border-gray-800"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-medium">Back</span>
            </motion.button>
          </Link>
          
          <motion.div 
            className="flex gap-1"
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
                    ? 'bg-gray-900 dark:bg-white' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section - Fullscreen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
        />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Huge Typography */}
            <motion.h1 
              style={{ y: textY }}
              className="text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] font-light leading-none tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                Théo
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block"
              >
                Blondel
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light">
                Digital designer & creative technologist
              </p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 italic max-w-2xl mx-auto"
              >
                "Curious mind with a visual instinct."
              </motion.p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="/DSC00831.png" 
                  alt="Théo Blondel"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Fullscreen */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-light mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              About
            </motion.h2>
            
            <motion.p 
              className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-light text-gray-700 dark:text-gray-300"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Swiss-based multimedia creator with{' '}
              <span className="font-medium text-gray-900 dark:text-white">7 years</span>{' '}
              of exploration in design, marketing and tech — across both{' '}
              <span className="font-medium text-gray-900 dark:text-white">SFW and NSFW</span>{' '}
              fields.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Horizontal Scroll */}
      <section className="min-h-screen flex items-center py-20 bg-white dark:bg-black">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-6"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light">Projects</h2>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="overflow-x-auto pb-8">
            <motion.div 
              className="flex gap-8 px-6 w-max"
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -20, scale: 1.02 }}
                  className="flex-shrink-0 w-80 sm:w-96 h-[500px] relative group cursor-pointer"
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <motion.h3 
                        className="text-3xl sm:text-4xl font-light mb-4"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Fullscreen */}
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light">Expertise</h2>
            
            {/* Oversized Keywords */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-6 group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code size={48} className="text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-light group-hover:text-blue-500 transition-colors">Design.</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">React, Tailwind, Figma</p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-6 group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette size={48} className="text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-light group-hover:text-purple-500 transition-colors">Code.</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript, React</p>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="space-y-6 group cursor-pointer"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp size={48} className="text-white" />
                </div>
                <h3 className="text-4xl sm:text-5xl font-light group-hover:text-green-500 transition-colors">Branding.</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">SEO, Strategy, No-code</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Final Screen */}
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light">Let's Connect</h2>
            
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <motion.a
                href="mailto:hello@theoblondel.ch"
                whileHover={{ scale: 1.05, y: -5 }}
                className="inline-flex items-center gap-4 text-2xl sm:text-3xl lg:text-4xl font-light hover:opacity-70 transition-all"
              >
                <Mail size={40} />
                hello@theoblondel.ch
              </motion.a>

              <div className="flex justify-center gap-12 pt-8">
                <motion.a
                  href="https://github.com/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex flex-col items-center gap-3 hover:opacity-70 transition-all"
                >
                  <Github size={32} />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://behance.net/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex flex-col items-center gap-3 hover:opacity-70 transition-all"
                >
                  <ExternalLink size={32} />
                  <span className="text-sm font-medium">Behance</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/theoblondel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex flex-col items-center gap-3 hover:opacity-70 transition-all"
                >
                  <Instagram size={32} />
                  <span className="text-sm font-medium">Instagram</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-16 text-sm opacity-50"
            >
              © 2024 Théo Blondel
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}