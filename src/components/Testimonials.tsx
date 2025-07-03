import React, { useCallback, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useApp } from '../contexts/AppContext';

export default function Testimonials() {
  const { t } = useApp();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      content: t('testimonial1.content'),
      rating: 5,
      company: t('testimonial1.company'),
      project: t('testimonial1.project'),
      date: t('testimonial1.date')
    },
    {
      id: 2,
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      content: t('testimonial2.content'),
      rating: 5,
      company: t('testimonial2.company'),
      project: t('testimonial2.project'),
      date: t('testimonial2.date')
    },
    {
      id: 3,
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      content: t('testimonial3.content'),
      rating: 5,
      company: t('testimonial3.company'),
      project: t('testimonial3.project'),
      date: t('testimonial3.date')
    },
    {
      id: 4,
      name: t('testimonial4.name'),
      role: t('testimonial4.role'),
      content: t('testimonial4.content'),
      rating: 5,
      company: t('testimonial4.company'),
      project: t('testimonial4.project'),
      date: t('testimonial4.date')
    },
    {
      id: 5,
      name: t('testimonial5.name'),
      role: t('testimonial5.role'),
      content: t('testimonial5.content'),
      rating: 5,
      company: t('testimonial5.company'),
      project: t('testimonial5.project'),
      date: t('testimonial5.date')
    },
    {
      id: 6,
      name: t('testimonial6.name'),
      role: t('testimonial6.role'),
      content: t('testimonial6.content'),
      rating: 5,
      company: t('testimonial6.company'),
      project: t('testimonial6.project'),
      date: t('testimonial6.date')
    },
    {
      id: 7,
      name: t('testimonial7.name'),
      role: t('testimonial7.role'),
      content: t('testimonial7.content'),
      rating: 5,
      company: t('testimonial7.company'),
      project: t('testimonial7.project'),
      date: t('testimonial7.date')
    }
  ];

  const companies = [
    'Frame Blox', 'Supa Blox', 'Hype Blox', 'Ultra Blox', 'Ship Blox', 'Mega Blox'
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Fonction pour générer un avatar par défaut basé sur les initiales
  const getDefaultAvatar = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-yellow-500', 'bg-red-500', 'bg-teal-500'
    ];
    const colorIndex = name.length % colors.length;
    
    return (
      <div className={`w-16 h-16 ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
        {initials}
      </div>
    );
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
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

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer h-full mx-2"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="absolute -top-4 left-8 w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Quote className="w-6 h-6" />
                    </motion.div>

                    <div className="pt-8">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 15 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <motion.p
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors text-sm sm:text-base"
                      >
                        "{testimonial.content}"
                      </motion.p>

                      {/* Project Info */}
                      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Projet: {testimonial.project}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {testimonial.date}
                        </div>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {getDefaultAvatar(testimonial.name)}
                        </motion.div>
                        <div>
                          <motion.h4
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-black dark:group-hover:text-gray-100 transition-colors"
                          >
                            {testimonial.name}
                          </motion.h4>
                          {testimonial.role && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                              {testimonial.role}
                            </p>
                          )}
                          {testimonial.company && (
                            <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">
                              {testimonial.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollTo(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-black dark:bg-white scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={scrollNext}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Google Review Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Star className="w-8 h-8 fill-current" />
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tu as travaillé avec moi ?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Ton avis compte énormément ! Partage ton expérience sur Google Reviews et aide d'autres clients à découvrir la qualité de mes services créatifs.
          </p>

          <motion.a
            href="https://g.page/r/CXN7nnxPn82qEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-green-600 transition-all shadow-lg group"
          >
            <Star size={20} className="fill-current" />
            Laisser un avis sur Google
            <motion.div
              whileHover={{ x: 5, rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink size={18} />
            </motion.div>
          </motion.a>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span>Ton avis nous aide à grandir</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}