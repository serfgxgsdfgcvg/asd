import React, { useState } from 'react';
import { ExternalLink, Eye, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Portfolio() {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const behanceProjects = [
    {
      id: 1,
      title: 'SOUNDWAVE',
      category: 'Audio Experience',
      year: '2024',
      description: 'Designing an Immersive Audio Tech Experience with cutting-edge UI/UX',
      tags: ['UI/UX', 'Product Design', 'Audio Tech', 'Interactive'],
      behanceId: '220519773'
    },
    {
      id: 2,
      title: 'FINTECH DASHBOARD',
      category: 'Web Application',
      year: '2024',
      description: 'Modern financial dashboard with real-time analytics and data visualization',
      tags: ['Dashboard', 'Fintech', 'Data Viz', 'React'],
      behanceId: '220519773'
    },
    {
      id: 3,
      title: 'BRAND IDENTITY',
      category: 'Branding',
      year: '2023',
      description: 'Complete brand identity system for sustainable fashion startup',
      tags: ['Branding', 'Logo Design', 'Guidelines', 'Strategy'],
      behanceId: '220519773'
    },
    {
      id: 4,
      title: 'E-COMMERCE PLATFORM',
      category: 'Web Application',
      year: '2024',
      description: 'Modern e-commerce solution with AI-powered recommendations',
      tags: ['E-commerce', 'AI/ML', 'Next.js', 'Stripe'],
      behanceId: '220519773'
    },
    {
      id: 5,
      title: 'MOBILE BANKING APP',
      category: 'Mobile Design',
      year: '2023',
      description: 'Intuitive mobile banking interface with advanced security features',
      tags: ['Mobile Design', 'Banking', 'Security', 'UX'],
      behanceId: '220519773'
    },
    {
      id: 6,
      title: 'MOTION GRAPHICS REEL',
      category: 'Animation',
      year: '2024',
      description: 'Creative motion graphics showcase for brand campaigns',
      tags: ['Motion Graphics', 'Animation', 'After Effects', 'Cinema 4D'],
      behanceId: '220519773'
    }
  ];

  const categories = [
    { key: 'All', label: t('portfolio.category.all') },
    { key: 'Web Application', label: t('portfolio.category.webApp') },
    { key: 'Branding', label: t('portfolio.category.branding') },
    { key: 'Mobile Design', label: t('portfolio.category.mobile') },
    { key: 'Animation', label: t('portfolio.category.animation') },
    { key: 'Audio Experience', label: t('portfolio.category.audio') }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? behanceProjects 
    : behanceProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-6"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white sm:w-12"
            />
            <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm">{t('portfolio.subtitle')}</span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-black dark:bg-white sm:w-12"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              {t('portfolio.title1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block font-light italic"
            >
              {t('portfolio.title2')}
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('portfolio.description')}
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-xs sm:text-base ${
                selectedCategory === category.key
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Behance Embeds */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Behance Embed */}
                <div className="relative overflow-hidden h-48 sm:h-64">
                  
                  <iframe 
                    src={`https://www.behance.net/embed/project/${project.behanceId}?ilo0=1`}
                    height="316" 
                    width="100%" 
                    allowFullScreen 
                    loading="lazy" 
                    frameBorder="0" 
                    allow="clipboard-write" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay with buttons */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="flex gap-2 sm:gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Eye size={16} className="sm:w-5 sm:h-5" />
                      </motion.button>
                      <motion.a
                        href={`https://www.behance.net/gallery/${project.behanceId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Badges */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white/90 backdrop-blur-sm text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1"
                    >
                      <Calendar size={10} className="sm:w-3 sm:h-3" />
                      {project.year}
                    </motion.div>
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-black/80 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {project.category}
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <motion.h3 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-black dark:group-hover:text-gray-100 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                      >
                        <Tag size={8} className="sm:w-2.5 sm:h-2.5" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="https://behance.net/theoblondel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all group text-sm sm:text-base"
          >
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
            {t('portfolio.viewAllBehance')}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="group-hover:ml-1 transition-all"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}