import React, { Suspense, lazy, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Hero from '../components/Hero';

const Statistics = lazy(() => import('../components/Statistics'));
const PopularExams = lazy(() => import('../components/PopularExams'));
const Features = lazy(() => import('../components/Features'));
const News = lazy(() => import('../components/News'));
const ContactCTA = lazy(() => import('../components/ContactCTA'));

const Home = () => {
  const [loadHeavy, setLoadHeavy] = useState(false);

  return (
    <>
      <Hero />
      
      <VisibilitySensor partialVisibility onChange={(isVisible) => { if (isVisible) setLoadHeavy(true); }}>
        <div className="min-h-[10px]">
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
      </VisibilitySensor>
    </>
  );
};

export default Home;
