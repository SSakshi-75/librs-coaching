import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';

const Statistics = lazy(() => import('../components/Statistics'));
const PopularExams = lazy(() => import('../components/PopularExams'));
const Features = lazy(() => import('../components/Features'));
const News = lazy(() => import('../components/News'));
const ContactCTA = lazy(() => import('../components/ContactCTA'));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-400">Loading section...</div>}>
        <Statistics />
        <PopularExams />
        <Features />
        <News />
        <ContactCTA />
      </Suspense>
    </>
  );
};

export default Home;
