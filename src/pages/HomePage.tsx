import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SEOHead from '../components/SEOHead';

// Lazy load components for better performance
const About = React.lazy(() => import('../components/About'));
const Portfolio = React.lazy(() => import('../components/Portfolio'));
const Process = React.lazy(() => import('../components/Process'));
const Services = React.lazy(() => import('../components/Services'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="py-32 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-gray-300 border-t-black dark:border-gray-600 dark:border-t-white rounded-full"
    />
  </div>
);

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <Header />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Process />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
}