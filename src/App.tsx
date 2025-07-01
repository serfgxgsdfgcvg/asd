import React from 'react';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeLanguageToggle from './components/ThemeLanguageToggle';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <ThemeLanguageToggle />
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;