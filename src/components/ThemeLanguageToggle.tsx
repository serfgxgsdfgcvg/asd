import React, { useState } from 'react';
import { Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

type Language = 'en' | 'fr' | 'es' | 'ru' | 'zh' | 'ja' | 'de' | 'it' | 'pt' | 'sq';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' }
];

export default function ThemeLanguageToggle() {
  const { theme, language, toggleTheme, setLanguage } = useApp();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {/* Language Dropdown - Drapeaux uniquement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className="flex items-center gap-2 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full px-3 py-2 sm:px-4 sm:py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all shadow-lg min-w-[80px] sm:min-w-[90px]"
        >
          <span className="text-lg sm:text-xl">{currentLanguage.flag}</span>
          <motion.div
            animate={{ rotate: isLanguageOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} className="sm:w-4 sm:h-4" />
          </motion.div>
        </motion.button>
        
        {/* Language Dropdown Menu - Interface améliorée */}
        <AnimatePresence>
          {isLanguageOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden min-w-[180px] sm:min-w-[200px]"
            >
              <div className="max-h-64 sm:max-h-80 overflow-y-auto">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      x: 5
                    }}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-4 text-left transition-all ${
                      language === lang.code 
                        ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-l-4 border-black dark:border-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{lang.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm sm:text-base">{lang.name}</div>
                      <div className="text-xs opacity-60">{lang.code.toUpperCase()}</div>
                    </div>
                    {language === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-black dark:bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all shadow-lg overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ y: 20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'light' ? <Moon size={18} className="sm:w-6 sm:h-6" /> : <Sun size={18} className="sm:w-6 sm:h-6" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  );
}