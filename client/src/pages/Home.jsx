import React, { Suspense, lazy, useState, useEffect } from 'react';
import Hero from '../components/Hero';

const Statistics = lazy(() => import('../components/Statistics'));
const PopularExams = lazy(() => import('../components/PopularExams'));
const Features = lazy(() => import('../components/Features'));
const News = lazy(() => import('../components/News'));
const ContactCTA = lazy(() => import('../components/ContactCTA'));

const Home = () => {
  const [loadHeavy, setLoadHeavy] = useState(false);

  useEffect(() => {
    // Delay fetching and rendering of heavy below-the-fold components
    // so that the browser can focus 100% on painting the Hero (FCP/LCP)
    const timer = setTimeout(() => {
      setLoadHeavy(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      <div className="min-h-screen">
        {loadHeavy && (
          <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-400"></div>}>
            <Statistics />
            <PopularExams />
            <Features />
            <News />
            <ContactCTA />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Home;
