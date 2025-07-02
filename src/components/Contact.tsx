import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Instagram, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Icône Behance personnalisée
const BehanceIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Veuillez entrer un email valide';
    }

    // Validation du sujet
    if (!formData.subject.trim()) {
      errors.subject = 'Le sujet est requis';
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Le sujet doit contenir au moins 5 caractères';
    }

    // Validation du message
    if (!formData.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Sujet: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `Message envoyé depuis theoblondel.ch`
    );
    
    const mailtoLink = `mailto:hello@theoblondel.ch?subject=${subject}&body=${body}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher le message de succès
    setSubmissionSuccess(true);
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Masquer le message de succès après 8 secondes
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Effacer l'erreur du champ modifié
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const hasErrors = Object.keys(formErrors).length > 0;
  const isFormValid = formData.name && formData.email && formData.subject && formData.message && !hasErrors;

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-black relative overflow-hidden">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info with enhanced interactions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-base sm:text-lg">
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
                  icon: MapPin, 
                  label: t('contact.location'), 
                  value: 'Vevey, Suisse', 
                  href: '#',
                  description: 'Basé dans la région lémanique'
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all group cursor-pointer border border-gray-100 dark:border-gray-800"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center group-hover:bg-gray-800 dark:group-hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <contact.icon className="w-5 h-5 sm:w-8 sm:h-8" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-1 uppercase tracking-wider font-medium">
                      {contact.label}
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-base sm:text-lg group-hover:text-black dark:group-hover:text-gray-100 transition-colors"
                    >
                      {contact.value}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{contact.description}</div>
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
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg sm:text-xl">{t('contact.followMe')}</h4>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { 
                    icon: Linkedin, 
                    href: 'https://www.linkedin.com/in/theo-blondel-6952432aa/', 
                    label: 'LinkedIn',
                    color: 'hover:bg-blue-600'
                  },
                  { 
                    icon: Instagram, 
                    href: 'https://www.instagram.com/theo.blondel/', 
                    label: 'Instagram',
                    color: 'hover:bg-pink-600'
                  },
                  { 
                    icon: BehanceIcon, 
                    href: 'https://www.behance.net/theoblondel', 
                    label: 'Behance',
                    color: 'hover:bg-blue-500'
                  },
                  { 
                    icon: Github, 
                    href: 'https://github.com/theoblondel', 
                    label: 'GitHub',
                    color: 'hover:bg-gray-700'
                  }
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
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl flex items-center justify-center hover:text-white transition-all shadow-md hover:shadow-lg ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">{t('contact.sendMessage')}</h3>
            
            {/* Success Message */}
            <AnimatePresence>
              {submissionSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-medium">Votre client email s'est ouvert !</p>
                    <p className="text-green-600 dark:text-green-400 text-sm">Envoyez le message depuis votre client email pour me contacter.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    {t('contact.name')} *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                      formErrors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white'
                    }`}
                    placeholder={t('contact.namePlaceholder')}
                  />
                  <AnimatePresence>
                    {formErrors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                      >
                        <AlertCircle size={14} />
                        {formErrors.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                      formErrors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white'
                    }`}
                    placeholder={t('contact.emailPlaceholder')}
                  />
                  <AnimatePresence>
                    {formErrors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                      >
                        <AlertCircle size={14} />
                        {formErrors.email}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                  {t('contact.subject')} *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    formErrors.subject 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white'
                  }`}
                  placeholder={t('contact.subjectPlaceholder')}
                />
                <AnimatePresence>
                  {formErrors.subject && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                    >
                      <AlertCircle size={14} />
                      {formErrors.subject}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                  {t('contact.message')} *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-xl focus:outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                    formErrors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white'
                  }`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                <AnimatePresence>
                  {formErrors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400 text-sm"
                    >
                      <AlertCircle size={14} />
                      {formErrors.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: isFormValid ? 1.02 : 1, y: isFormValid ? -2 : 0 }}
                whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                disabled={!isFormValid}
                className={`w-full py-3 sm:py-4 rounded-xl font-medium flex items-center justify-center gap-3 transition-all ${
                  isFormValid
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
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

            {/* Form validation summary */}
            <AnimatePresence>
              {hasErrors && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <div className="flex items-center gap-2 text-red-800 dark:text-red-200 text-sm">
                    <AlertCircle size={16} />
                    <span className="font-medium">Veuillez corriger les erreurs ci-dessus</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Info message */}
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
              <p>Le formulaire ouvrira votre client email par défaut</p>
              <p className="mt-1">Vous pouvez aussi m'écrire directement à hello@theoblondel.ch</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}