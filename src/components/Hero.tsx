import React, { useState } from 'react';
import { ArrowRight, Download, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import LazyImage from './LazyImage';

export default function Hero() {
  const { t } = useApp();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const openVideoModal = () => {
    setShowVideoModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-16 sm:pt-20">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-200 dark:bg-gray-800 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{ 
                y: [null, -100, -200],
                opacity: [0.3, 0.6, 0],
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 bg-black dark:bg-white sm:w-12"
                  />
                  <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm">{t('hero.subtitle')}</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 sm:space-y-4"
                >
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium">{t('hero.greeting')}</p>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black dark:text-white">
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="block"
                    >
                      {t('hero.title1')}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="block"
                    >
                      <span className="italic font-light">{t('hero.title2')}</span>{' '}
                      <span className="font-bold">{t('hero.title3')}</span>
                    </motion.span>
                  </h1>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  {t('hero.description')}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group justify-center text-sm sm:text-base"
                >
                  {t('hero.contactMe')}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.button>
                
                <motion.button
                  onClick={openVideoModal}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center gap-3 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group justify-center text-sm sm:text-base"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  {t('hero.watchDemo')}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right side - Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative">
                {/* Main image container */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto"
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800">
                    <LazyImage 
                      src="/theob.png" 
                      alt="Theo Blondel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating stats cards */}
                {[
                  { text: t('hero.yearsExperience'), value: '5+', position: 'top-right' },
                  { text: t('hero.projectsDelivered'), value: '220+', position: 'middle-left' },
                  { text: t('hero.clientSatisfaction'), value: '99%', position: 'bottom-right' },
                  { text: t('hero.clientsWorldwide'), value: '200', position: 'top-left' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`absolute bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg border border-gray-100 dark:border-gray-800 cursor-pointer ${
                      stat.position === 'top-right' ? 'top-8 -right-2 sm:top-12 sm:-right-4' :
                      stat.position === 'middle-left' ? 'top-1/2 -left-4 sm:-left-8' :
                      stat.position === 'bottom-right' ? 'bottom-4 -right-4 sm:bottom-8 sm:-right-8' :
                      stat.position === 'top-left' ? '-top-2 -left-2 sm:-top-4 sm:-left-4' :
                      'bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-4'
                    }`}
                  >
                    <motion.div
                      animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="text-center"
                    >
                      <div className="text-lg sm:text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight whitespace-nowrap">{stat.text}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services preview - Responsive grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-16 sm:pt-20 max-w-6xl mx-auto"
          >
            {[
              { titleKey: 'hero.service1.title', descKey: 'hero.service1.desc' },
              { titleKey: 'hero.service2.title', descKey: 'hero.service2.desc' },
              { titleKey: 'hero.service3.title', descKey: 'hero.service3.desc' },
              { titleKey: 'hero.service4.title', descKey: 'hero.service4.desc' }
            ].map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center space-y-2 sm:space-y-3 cursor-pointer group p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
              >
                <h3 className="font-bold text-black dark:text-white text-xs sm:text-sm uppercase tracking-wider group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {t(service.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Démo - Processus Créatif
                  </span>
                </div>
                
                <motion.button
                  onClick={closeVideoModal}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="Fermer"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Video Content */}
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  poster="/DSC00831.png"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  {/* Fallback pour navigateurs qui ne supportent pas la vidéo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white rounded-full mx-auto mb-4"
                      />
                      <p className="text-gray-600 dark:text-gray-400">Chargement de la vidéo...</p>
                    </div>
                  </div>
                </video>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                      theoblondel.ch
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                      Découvrez comment je transforme vos idées en réalisations concrètes
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href="#contact"
                      onClick={closeVideoModal}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-xl font-medium flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                    >
                      <ArrowRight size={18} />
                      Démarrer un projet
                    </motion.a>
                    <motion.button
                      onClick={closeVideoModal}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                    >
                      Fermer
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}