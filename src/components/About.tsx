import React, { useState, useEffect } from 'react';
import { Palette, Zap, Target, Brush, ExternalLink, Brain, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import LazyImage from './LazyImage';

export default function About() {
  const { t } = useApp();
  const [isUglyMode, setIsUglyMode] = useState(false);
  const [showUglyPopup, setShowUglyPopup] = useState(false);

  const skills = [
    { icon: Brush, title: t('about.skill1.title'), desc: t('about.skill1.desc'), percentage: 95 },
    { icon: Palette, title: t('about.skill2.title'), desc: t('about.skill2.desc'), percentage: 90 },
    { icon: Zap, title: t('about.skill3.title'), desc: t('about.skill3.desc'), percentage: 88 },
    { icon: Target, title: t('about.skill4.title'), desc: t('about.skill4.desc'), percentage: 92 }
  ];

  const activateUglyMode = () => {
    setIsUglyMode(true);
    document.body.classList.add('powerpoint-ugly-mode');
    
    // Popup apparaît après 2 secondes
    setTimeout(() => {
      setShowUglyPopup(true);
    }, 2000);
  };

  const deactivateUglyMode = () => {
    setIsUglyMode(false);
    setShowUglyPopup(false);
    document.body.classList.remove('powerpoint-ugly-mode');
  };

  const goToBlackout = () => {
    document.body.innerHTML = `
      <div style='
        background: #000;
        color: #0f0;
        font-family: "Courier New", monospace;
        padding: 5rem;
        text-align: center;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        line-height: 1.8;
        position: relative;
        overflow: hidden;
      '>
        <div style='
          border: 2px solid #0f0; 
          padding: 2rem; 
          margin-bottom: 2rem; 
          animation: blink 1s infinite;
          text-shadow: 0 0 10px #0f0;
        '>
          ⚠️ GAME OVER ⚠️
        </div>
        <div style='margin-bottom: 2rem; text-shadow: 0 0 5px #0f0;'>
          Ton portfolio est devenu une plaquette PowerPoint de 2010.
        </div>
        <div style='font-size: 1rem; opacity: 0.7; animation: fadeInOut 2s infinite;'>
          Tu as choisi... mal.
        </div>
        <div style='
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          );
          pointer-events: none;
          animation: scanlines 0.1s linear infinite;
        '></div>
        <style>
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
          }
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.3; }
          }
          @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
          }
        </style>
      </div>
    `;
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="h-1 bg-black dark:bg-white sm:w-12"
                />
                <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm">{t('about.subtitle')}</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black dark:text-white text-center lg:text-left"
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block"
                >
                  {t('about.title1')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block font-light italic"
                >
                  {t('about.title2')}
                </motion.span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left"
              >
                {t('about.description1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left"
              >
                {t('about.description2')}
              </motion.p>
            </div>

            {/* Skills with progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-4 sm:space-y-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </motion.div>
                      <span className="font-semibold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors text-sm sm:text-base">{skill.title}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                      className="bg-black dark:bg-white h-1.5 sm:h-2 rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 1.5 + index * 0.1
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* About Buttons - Côte à côte */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center lg:justify-start pt-6"
            >
              <div className="about-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Bouton LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/theo-blondel-6952432aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="primary-button bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group text-sm sm:text-base flex-1 sm:flex-none"
                >
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                  En savoir plus sur moi
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </motion.a>

                {/* Bouton Mode Hideux */}
                <motion.button
                  onClick={activateUglyMode}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="ugly-mode-button border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group text-sm sm:text-base flex-1 sm:flex-none"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  À quoi je sers ?
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image with floating elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm sm:max-w-lg mx-auto">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer border-4 border-gray-100 dark:border-gray-800"
              >
                <LazyImage 
                  src="/theo1photo.png" 
                  alt="Theo Blondel Illustration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements - Responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl border border-gray-100 dark:border-gray-800 cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, rotate: -2 }}
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-black dark:bg-white text-white dark:text-black rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl cursor-pointer"
              >
                <motion.div
                  animate={{ x: [0, 8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="text-base sm:text-lg font-bold">220+</div>
                  <div className="text-xs opacity-80">Projects</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PowerPoint Mode Popup - SANS FLOU ni arrière-plan sombre */}
      <AnimatePresence>
        {showUglyPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ y: 100, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white dark:bg-gray-900 rounded-t-3xl p-8 max-w-2xl w-full shadow-2xl border-t-4 border-blue-500 pointer-events-auto"
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🤮
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
                  Alors, qu'est-ce que tu en penses ?
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  Tu viens de voir ce que j'aurais pu être si j'avais abandonné mon style pour du "corporate PowerPoint 2010" avec des animations lentes et des couleurs pas assorties.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={deactivateUglyMode}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all shadow-lg text-lg"
                  >
                    🔙 Revenir à mon vrai travail
                  </motion.button>
                  
                  <motion.button
                    onClick={goToBlackout}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all shadow-lg text-lg"
                  >
                    🪦 Restons sur ce magnifique site
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}