import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  behanceId: string | null;
  projectTitle?: string;
}

export default function ProjectModal({ isOpen, onClose, behanceId, projectTitle }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen || !behanceId) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                {projectTitle && (
                  <span className="ml-4 font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {projectTitle}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <motion.a
                  href={`https://www.behance.net/gallery/${behanceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="Voir sur Behance"
                >
                  <ExternalLink size={18} />
                </motion.a>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="Fermer"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-grow w-full h-full bg-white dark:bg-gray-900">
              <iframe
                src={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
                height="100%"
                width="100%"
                allowFullScreen
                loading="lazy"
                frameBorder="0"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full rounded-b-2xl"
                title={`Projet Behance: ${projectTitle || 'Projet'}`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}