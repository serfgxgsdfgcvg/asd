import React from 'react';
import { Palette, Zap, Target, Brush, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function About() {
  const { t } = useApp();

  const skills = [
    { icon: Brush, title: t('about.skill1.title'), desc: t('about.skill1.desc'), percentage: 95 },
    { icon: Palette, title: t('about.skill2.title'), desc: t('about.skill2.desc'), percentage: 90 },
    { icon: Zap, title: t('about.skill3.title'), desc: t('about.skill3.desc'), percentage: 88 },
    { icon: Target, title: t('about.skill4.title'), desc: t('about.skill4.desc'), percentage: 92 }
  ];

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
                <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm">{t('about.subtitle')}</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white text-center lg:text-left"
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
                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center lg:text-left"
              >
                {t('about.description1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center lg:text-left"
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
                      <span className="font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-gray-100 transition-colors text-sm sm:text-base">{skill.title}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                      className="bg-gray-900 dark:bg-white h-1.5 sm:h-2 rounded-full relative"
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

            {/* Call to Action Button - Updated to LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center lg:justify-start pt-6"
            >
              <motion.a
                href="https://www.linkedin.com/in/theo-blondel-6952432aa/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all group text-sm sm:text-base"
              >
                En savoir plus sur moi
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.a>
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
                className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                <img 
                  src="/Groudp.png" 
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
                  <div className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5, rotate: -2 }}
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl cursor-pointer"
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
    </section>
  );
}