import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, theme } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLetsTalk = () => {
    scrollToSection('contact');
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <motion.img
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
              src={theme === 'dark' ? "/Groudp.png" : "/Mode_Isolation.png"}
              alt="Theo Blondel Logo"
              className="h-8 w-auto sm:h-10 object-contain"
            />
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { key: 'nav.about', href: 'about' },
              { key: 'nav.work', href: 'work' },
              { key: 'nav.services', href: 'services' },
              { key: 'nav.contact', href: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group font-medium text-sm lg:text-base"
              >
                {t(item.key)}
                <motion.span 
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-black dark:bg-white"
                />
              </motion.button>
            ))}
          </nav>

          <motion.button
            onClick={handleLetsTalk}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-black dark:bg-white text-white dark:text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group text-sm lg:text-base"
          >
            <span className="group-hover:mr-2 transition-all">{t('nav.letsTalk')}</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 overflow-hidden"
      >
        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
          {[
            { key: 'nav.about', href: 'about' },
            { key: 'nav.work', href: 'work' },
            { key: 'nav.services', href: 'services' },
            { key: 'nav.contact', href: 'contact' }
          ].map((item, index) => (
            <motion.button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 sm:py-3 font-medium transition-colors text-base sm:text-lg w-full text-left"
            >
              {t(item.key)}
            </motion.button>
          ))}
          <motion.button 
            onClick={handleLetsTalk}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 sm:py-4 rounded-full font-medium mt-4 sm:mt-6 transition-all text-base sm:text-lg"
          >
            {t('nav.letsTalk')}
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
}