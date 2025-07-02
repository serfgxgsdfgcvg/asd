import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Portfolio() {
  const { t } = useApp();

  const behanceProjects = [
    {
      id: 1,
      title: 'ATHENIS',
      description: 'Balance Between Tradition & Modernity - Complete brand identity system for a luxury hospitality brand. This project explores the intersection of classical Greek aesthetics with contemporary design principles.',
      behanceLink: 'https://www.behance.net/gallery/220519773/Athenis-Balance-Between-Tradition-Modernity-Brand',
      thumbnail: '/Athenis copy.png'
    },
    {
      id: 2,
      title: 'BLONDEL',
      description: 'Personal brand identity development with modern typography and clean aesthetic. A sophisticated approach to personal branding in the creative industry.',
      behanceLink: 'https://www.behance.net/gallery/215415201/Blondel-Display-Font',
      thumbnail: '/Blondel.png'
    },
    {
      id: 3,
      title: 'LES OMBRES DU PARADIS',
      description: 'Editorial design project combining storytelling with visual narrative. An exploration of shadows and light through typography and layout design.',
      behanceLink: 'https://www.behance.net/gallery/199683469/Les-Ombres-Du-Paradis',
      thumbnail: '/ombreduparadis.webp'
    },
    {
      id: 4,
      title: 'AUMY',
      description: 'Modern brand identity for a contemporary lifestyle brand. Clean, minimalist approach with focus on user experience and brand consistency.',
      behanceLink: 'https://www.behance.net/gallery/215162609/Aumy-Redefining-Vegetarian-Fast-Food',
      thumbnail: '/Aumy.png'
    },
    {
      id: 5,
      title: 'NEWWAVE',
      description: 'Digital design project exploring new wave aesthetics with modern technology. A fusion of retro-futuristic elements and contemporary design principles.',
      behanceLink: 'https://www.behance.net/gallery/211972073/NewWave',
      thumbnail: '/NewWave.png'
    },
    {
      id: 6,
      title: 'HOLZKERN',
      description: 'Product design and branding for sustainable wooden accessories. Emphasis on natural materials and eco-friendly design philosophy.',
      behanceLink: 'https://www.behance.net/gallery/216987243/Holzkern-Studio-Photography',
      thumbnail: '/Holzkern.jpg'
    }
  ];

  const handleProjectClick = (behanceLink: string) => {
    window.open(behanceLink, '_blank');
  };

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
            <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm">{t('portfolio.subtitle')}</span>
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black dark:text-white mb-4 sm:mb-6"
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
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
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
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => handleProjectClick(project.behanceLink)}
              className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer project-card border border-gray-100 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 sm:h-80">
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay avec icône */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </motion.div>

                {/* Badge "Voir sur Behance" */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium text-center">
                    Voir sur Behance
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <motion.h3 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Indicateur de lien externe */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Cliquez pour voir le projet</span>
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
            className="inline-flex items-center gap-2 sm:gap-3 bg-black dark:bg-white text-white dark:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all group text-sm sm:text-base btn-hover-effect"
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