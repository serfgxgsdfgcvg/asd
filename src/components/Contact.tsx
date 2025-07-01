import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-black relative overflow-hidden">
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
            <span className="text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">{t('contact.subtitle')}</span>
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
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              {t('contact.title1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="block font-light italic"
            >
              {t('contact.title2')}
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('contact.description')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info with enhanced interactions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                {t('contact.getInTouchDesc')}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  label: t('contact.email'), 
                  value: 'hello@theoblondel.ch', 
                  href: 'mailto:hello@theoblondel.ch',
                  description: t('contact.emailDesc')
                },
                { 
                  icon: Phone, 
                  label: t('contact.phone'), 
                  value: '+41 76 123 45 67', 
                  href: 'tel:+41761234567',
                  description: t('contact.phoneDesc')
                },
                { 
                  icon: MapPin, 
                  label: t('contact.location'), 
                  value: 'Zurich, Switzerland', 
                  href: '#',
                  description: t('contact.locationDesc')
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
                  className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-gray-100 transition-colors"
                  >
                    <contact.icon className="w-8 h-8" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mb-1 uppercase tracking-wider font-medium">
                      {contact.label}
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-black dark:group-hover:text-gray-100 transition-colors"
                    >
                      {contact.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{contact.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-xl">{t('contact.followMe')}</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/in/theoblondel', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/theoblondel', label: 'GitHub' },
                  { icon: Instagram, href: 'https://instagram.com/theoblondel', label: 'Instagram' },
                  { icon: MessageCircle, href: 'https://twitter.com/theoblondel', label: 'Twitter' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form with enhanced field animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {t('contact.name')} *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-black dark:focus:border-white focus:outline-none transition-all text-gray-900 dark:text-white"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-black dark:focus:border-white focus:outline-none transition-all text-gray-900 dark:text-white"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('contact.subject')} *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-black dark:focus:border-white focus:outline-none transition-all text-gray-900 dark:text-white"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('contact.message')} *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-black dark:focus:border-white focus:outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </motion.div>
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all group"
              >
                {t('contact.sendBtn')}
                <motion.div
                  whileHover={{ x: 5, rotate: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}