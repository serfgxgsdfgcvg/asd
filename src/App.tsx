import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import PersonalWebsite from './pages/PersonalWebsite';
import ThemeLanguageToggle from './components/ThemeLanguageToggle';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
          <ThemeLanguageToggle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<PersonalWebsite />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;