import React, { Suspense, lazy, useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Hero from '../components/Hero';

const Statistics = lazy(() => import('../components/Statistics'));
const PopularExams = lazy(() => import('../components/PopularExams'));
const Features = lazy(() => import('../components/Features'));
const News = lazy(() => import('../components/News'));
const ContactCTA = lazy(() => import('../components/ContactCTA'));

const Home = () => {
  const [loadHeavy, setLoadHeavy] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  useEffect(() => {
    if (isInView) {
      setLoadHeavy(true);
    }
  }, [isInView]);

  return (
    <>
      <Hero />
      
      <div ref={ref} className="min-h-[10px]">
        {loadHeavy && (
          <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-400">Loading section...</div>}>
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
