import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Testimonials() {
  const { t } = useApp();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Theo transformed our brand identity completely. His attention to detail and creative vision exceeded our expectations. The new design has significantly improved our market presence.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DesignCo',
      content: 'Working with Theo was an absolute pleasure. He delivered a stunning website that not only looks amazing but also performs exceptionally well. The user experience is seamless.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'DesignCo Studio'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, InnovateLab',
      content: 'Theo\'s creative approach and technical expertise helped us launch a successful digital campaign. The results speak for themselves - 300% increase in engagement!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'InnovateLab'
    }
  ];

  const companies = [
    'Frame Blox', 'Supa Blox', 'Hype Blox', 'Ultra Blox', 'Ship Blox', 'Mega Blox'
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">{t('testimonials.subtitle')}</span>
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
            className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('testimonials.description')}
          </motion.p>
        </motion.div>

        {/* Trusted by section - Horizontal scrolling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 uppercase tracking-wider">{t('testimonials.trustedBy')}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{t('testimonials.trustedByDesc')}</p>
          
          {/* Horizontal scrolling companies */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * companies.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 whitespace-nowrap"
              style={{ width: `${companies.length * 200}px` }}
            >
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer min-w-[180px]"
                >
                  <span className="text-gray-500 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-gray-300 transition-colors">{company}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute -top-4 left-8 w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center"
              >
                <Quote className="w-6 h-6" />
              </motion.div>
              
              <div className="pt-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star className="w-5 h-5 text-gray-900 dark:text-white fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors"
                >
                  "{testimonial.content}"
                </motion.p>
                
                <div className="flex items-center gap-4">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <motion.h4 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-black dark:group-hover:text-gray-100 transition-colors"
                    >
                      {testimonial.name}
                    </motion.h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}