import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface Message {
  id: number;
  type: 'client' | 'you';
  content: string;
  timestamp?: string;
  hasAttachment?: boolean;
  attachmentName?: string;
  attachmentUrl?: string;
}

export default function FakeChat() {
  const { t } = useApp();
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const messages: Message[] = [
    {
      id: 1,
      type: 'client',
      content: '👤 Salut Théo ! J\'ai besoin d\'un logo pour ma marque "NOIRBRUME". Un style streetwear, sobre et poétique.',
      timestamp: '14:32'
    },
    {
      id: 2,
      type: 'you',
      content: '🙋 Trop stylé comme nom ! Je vois déjà un logo typographique minimal avec une ambiance brumeuse. Je t\'envoie une première idée ce soir !',
      timestamp: '14:35'
    },
    {
      id: 3,
      type: 'client',
      content: '👤 J\'ai trop hâte de voir ça 😍',
      timestamp: '14:36'
    },
    {
      id: 4,
      type: 'you',
      content: '🙋 Voilà un premier concept avec croquis et direction graphique.',
      timestamp: '19:42',
      hasAttachment: true,
      attachmentName: 'NOIRBRUME_Concept_1.pdf',
      attachmentUrl: '#'
    },
    {
      id: 5,
      type: 'client',
      content: '👤 WAW. C\'est exactement ce que je voulais ! On part sur ça 💯',
      timestamp: '19:45'
    },
    {
      id: 6,
      type: 'you',
      content: '🙋 Parfait ! Voici le design final en couleur et en noir & blanc.',
      timestamp: '20:15',
      hasAttachment: true,
      attachmentName: 'NOIRBRUME_Final_Package.zip',
      attachmentUrl: '#'
    },
    {
      id: 7,
      type: 'client',
      content: '👤 Incroyable ! Merci pour ton style et ta réactivité 🙏',
      timestamp: '20:18'
    },
    {
      id: 8,
      type: 'you',
      content: '🙋 Et voilà le dossier complet avec tous les formats :<br/>📦 Logo vectoriel (AI, SVG, PDF)<br/>🖼️ Versions PNG haute résolution<br/>📋 Guide d\'utilisation',
      timestamp: '20:20',
      hasAttachment: true,
      attachmentName: 'NOIRBRUME_Complete_Brand_Kit.zip',
      attachmentUrl: '#'
    }
  ];

  useEffect(() => {
    const showMessages = async () => {
      for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, i === 0 ? 500 : 2000));
        
        if (i < messages.length - 1) {
          setIsTyping(true);
          await new Promise(resolve => setTimeout(resolve, 1500));
          setIsTyping(false);
        }
        
        setVisibleMessages(prev => [...prev, messages[i].id]);
      }
    };

    showMessages();
  }, []);

  const messageVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  const typingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <section id="fake-chat" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">
              Projet Fictif
            </span>
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
            Création de logo "NOIRBRUME"
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Une conversation réaliste pour découvrir mon processus créatif, de A à Z.
          </motion.p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Chat Header */}
          <div className="bg-white dark:bg-gray-800 rounded-t-2xl border-b border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">Client - NOIRBRUME</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">En ligne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-white dark:bg-gray-800 rounded-b-2xl p-4 sm:p-6 min-h-[600px] max-h-[700px] overflow-y-auto">
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  visibleMessages.includes(message.id) && (
                    <motion.div
                      key={message.id}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex ${message.type === 'you' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] sm:max-w-[70%] ${
                        message.type === 'client' 
                          ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white' 
                          : 'bg-black dark:bg-white text-white dark:text-black'
                      } rounded-2xl px-4 py-3 shadow-sm`}>
                        <div 
                          className="text-sm sm:text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: message.content }}
                        />
                        
                        {message.hasAttachment && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-3 p-3 bg-white/10 dark:bg-black/10 rounded-xl border border-white/20 dark:border-black/20"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white/20 dark:bg-black/20 rounded-lg flex items-center justify-center">
                                <Download className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{message.attachmentName}</p>
                                <p className="text-xs opacity-70">Fichier joint</p>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-xs px-3 py-1 bg-white/20 dark:bg-black/20 rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
                              >
                                Télécharger
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                        
                        <div className={`text-xs mt-2 opacity-70 ${
                          message.type === 'you' ? 'text-right' : 'text-left'
                        }`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-3 max-w-[200px]">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Théo écrit...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4"
            >
              Envie de voir plus de projets ?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            >
              Découvrez mes réalisations complètes et mon portfolio sur Behance.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#work"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg group"
              >
                Voir mes projets
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="https://behance.net/theoblondel"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group"
              >
                <ExternalLink className="w-4 h-4" />
                Portfolio Behance
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}