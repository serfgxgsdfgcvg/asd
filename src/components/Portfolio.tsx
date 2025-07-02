import React from 'react';
import { ExternalLink, Eye, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const { t } = useApp();

  const behanceProjects = [
    {
      id: 1,
      title: 'ATHENIS',
      category: 'Brand Identity',
      year: '2024',
      description: 'Balance Between Tradition & Modernity - Complete brand identity system for a luxury hospitality brand. This project explores the intersection of classical Greek aesthetics with contemporary design principles.',
      tags: ['Brand Identity', 'Logo Design', 'Visual Identity', 'Strategy', 'Luxury', 'Hospitality'],
      behanceId: '220519773',
      thumbnail: '/Athenis.png'
    },
    {
      id: 2,
      title: 'BLONDEL',
      category: 'Personal Branding',
      year: '2024',
      description: 'Personal brand identity development with modern typography and clean aesthetic. A sophisticated approach to personal branding in the creative industry.',
      tags: ['Personal Brand', 'Typography', 'Logo Design', 'Visual Identity', 'Portfolio', 'Creative'],
      behanceId: '215415201',
      thumbnail: 'https://images.pexels.com/photos/5926390/pexels-photo-5926390.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      id: 3,
      title: 'LES OMBRES DU PARADIS',
      category: 'Editorial Design',
      year: '2023',
      description: 'Editorial design project combining storytelling with visual narrative. An exploration of shadows and light through typography and layout design.',
      tags: ['Editorial', 'Typography', 'Layout Design', 'Storytelling', 'Print Design', 'Art Direction'],
      behanceId: '199683469',
      thumbnail: 'https://images.pexels.com/photos/20415409/pexels-photo-20415409.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      id: 4,
      title: 'AUMY',
      category: 'Brand Identity',
      year: '2024',
      description: 'Modern brand identity for a contemporary lifestyle brand. Clean, minimalist approach with focus on user experience and brand consistency.',
      tags: ['Brand Identity', 'Minimalism', 'Logo Design', 'Brand Guidelines', 'Modern', 'Lifestyle'],
      behanceId: '215162609',
      thumbnail: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      id: 5,
      title: 'NEWWAVE',
      category: 'Digital Design',
      year: '2023',
      description: 'Digital design project exploring new wave aesthetics with modern technology. A fusion of retro-futuristic elements and contemporary design principles.',
      tags: ['Digital Design', 'Retro-Futuristic', 'UI Design', 'Visual Effects', 'Motion Graphics', 'Technology'],
      behanceId: '211972073',
      thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    },
    {
      id: 6,
      title: 'HOLZKERN',
      category: 'Product Design',
      year: '2024',
      description: 'Product design and branding for sustainable wooden accessories. Emphasis on natural materials and eco-friendly design philosophy.',
      tags: ['Product Design', 'Sustainability', 'Eco-Design', 'Natural Materials', 'Branding', 'Packaging'],
      behanceId: '216987243',
      thumbnail: 'https://images.pexels.com/photos/163064/pexels-photo-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    }
  ];

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

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {behanceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer project-card"
            >
              {/* Project Thumbnail */}
              <div className="relative overflow-hidden h-48 sm:h-64">
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay with button */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.a
                    href={`https://www.behance.net/gallery/${project.behanceId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm text-black rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg btn-hover-effect"
                    title="Voir sur Behance"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
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
                    className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-black dark:group-hover:text-gray-100 transition-colors line-clamp-1"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors text-sm sm:text-base line-clamp-2">
                    {project.description.split('.')[0]}.
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
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
                  {project.tags.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-500 px-2 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            className="inline-flex items-center gap-2 sm:gap-3 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all group text-sm sm:text-base btn-hover-effect"
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