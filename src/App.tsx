import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import InteractiveCV from './components/InteractiveCV';
import ThemeLanguageToggle from './components/ThemeLanguageToggle';
import ErrorBoundary from './components/ErrorBoundary';
import { motion } from 'framer-motion';

// Loading component for route transitions
const RouteLoader = () => (
  <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white rounded-full"
    />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <ErrorBoundary>
          <Router>
            <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
              <ThemeLanguageToggle />
              <Suspense fallback={<RouteLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cv" element={<InteractiveCV />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </ErrorBoundary>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;