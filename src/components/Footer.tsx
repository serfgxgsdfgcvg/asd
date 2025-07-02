import React from 'react';
import { Heart, ArrowUp, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Footer() {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:col-span-2"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-bold text-xl"
              >
                T
              </motion.div>
              <span className="text-2xl font-bold">THEO BLONDEL</span>
            </motion.div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>hello@theoblondel.ch</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>+41 76 123 45 67</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-xl">{t('footer.quickLinks')}</h3>
            <div className="space-y-3">
              {[
                { key: 'nav.about', href: '#about' },
                { key: 'nav.work', href: '#work' },
                { key: 'nav.services', href: '#services' },
                { key: 'nav.contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-xl">{t('footer.services')}</h3>
            <div className="space-y-3">
              {[
                t('footer.brandIdentity'),
                t('footer.uiuxDesign'),
                t('footer.webDevelopment'),
                t('footer.motionGraphics')
              ].map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-700 dark:border-gray-800"
        >
          <div className="flex items-center gap-3 text-gray-300 mb-6 md:mb-0">
            <span>{t('footer.madeWith')}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.5, rotate: 15 }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>{t('footer.inSwitzerland')}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-300">{t('footer.allRights')}</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}