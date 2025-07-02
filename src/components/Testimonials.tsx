import React, { useCallback, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
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
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Theo a transformé complètement notre identité de marque. Son attention aux détails et sa vision créative ont dépassé nos attentes. Le nouveau design a considérablement amélioré notre présence sur le marché.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'TechStart Inc.',
      project: 'Refonte complète de l\'identité de marque',
      date: 'Décembre 2023'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, DesignCo',
      content: 'Travailler avec Theo a été un plaisir absolu. Il a livré un site web époustouflant qui non seulement a l\'air incroyable, mais fonctionne aussi exceptionnellement bien. L\'expérience utilisateur est fluide.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'DesignCo Studio',
      project: 'Développement site web & UX',
      date: 'Novembre 2023'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, InnovateLab',
      content: 'L\'approche créative et l\'expertise technique de Theo nous ont aidés à lancer une campagne digitale réussie. Les résultats parlent d\'eux-mêmes - 300% d\'augmentation de l\'engagement !',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'InnovateLab',
      project: 'Campagne digitale & Motion Graphics',
      date: 'Octobre 2023'
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Product Manager, StartupX',
      content: 'Theo a une capacité unique à comprendre nos besoins et à les traduire en solutions visuelles exceptionnelles. Son professionnalisme et sa créativité sont remarquables.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'StartupX',
      project: 'Interface mobile & Prototypage',
      date: 'Septembre 2023'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Creative Director, BrandForge',
      content: 'La collaboration avec Theo a été exceptionnelle. Il apporte une perspective fraîche et innovante à chaque projet. Ses compétences en design et en stratégie sont impressionnantes.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      company: 'BrandForge',
      project: 'Stratégie de marque & Guidelines',
      date: 'Août 2023'
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
          {/* Carousel Container */}
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
                      className="absolute -top-4 left-8 w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg"
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
                        <motion.img
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
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
                          <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Pagination Dots */}
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

        {/* Call to Action - Laisser un témoignage */}
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
            className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Vous avez travaillé avec moi ?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Votre retour d'expérience est précieux ! Partagez votre témoignage et aidez d'autres clients à découvrir la qualité de mes services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all group inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              Laisser un témoignage
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="group-hover:ml-1 transition-all"
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="mailto:hello@theoblondel.ch?subject=Témoignage%20client"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all inline-flex items-center justify-center gap-3"
            >
              Envoyer par email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}