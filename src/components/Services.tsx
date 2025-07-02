import React from 'react';
import { Palette, Smartphone, Globe, Camera, Brush, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Services() {
  const { t } = useApp();

  const services = [
    {
      icon: Brush,
      title: t('services.brandIdentity.title'),
      description: t('services.brandIdentity.desc'),
      features: [
        t('services.brandIdentity.feature1'),
        t('services.brandIdentity.feature2'),
        t('services.brandIdentity.feature3'),
        t('services.brandIdentity.feature4')
      ]
    },
    {
      icon: Palette,
      title: t('services.uiux.title'),
      description: t('services.uiux.desc'),
      features: [
        t('services.uiux.feature1'),
        t('services.uiux.feature2'),
        t('services.uiux.feature3'),
        t('services.uiux.feature4')
      ]
    },
    {
      icon: Globe,
      title: t('services.webDev.title'),
      description: t('services.webDev.desc'),
      features: [
        t('services.webDev.feature1'),
        t('services.webDev.feature2'),
        t('services.webDev.feature3'),
        t('services.webDev.feature4')
      ]
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.desc'),
      features: [
        t('services.mobile.feature1'),
        t('services.mobile.feature2'),
        t('services.mobile.feature3'),
        t('services.mobile.feature4')
      ]
    },
    {
      icon: Camera,
      title: t('services.creative.title'),
      description: t('services.creative.desc'),
      features: [
        t('services.creative.feature1'),
        t('services.creative.feature2'),
        t('services.creative.feature3'),
        t('services.creative.feature4')
      ]
    },
    {
      icon: Play,
      title: t('services.motion.title'),
      description: t('services.motion.desc'),
      features: [
        t('services.motion.feature1'),
        t('services.motion.feature2'),
        t('services.motion.feature3'),
        t('services.motion.feature4')
      ]
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
            <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">{t('services.subtitle')}</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white mb-6"
          >
            {t('services.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('services.description')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-800"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 dark:group-hover:bg-gray-200 transition-colors shadow-lg"
              >
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              
              <div className="mb-6">
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors"
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) + 0.7 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.3, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                      className="w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"
                    />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group text-sm sm:text-base"
          >
            <span className="group-hover:mr-2 transition-all">{t('services.startProject')}</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}