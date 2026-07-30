import React, { useRef, useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { FiUsers, FiAward, FiBookOpen, FiClock } from 'react-icons/fi';

import _ReactCountUp from 'react-countup';
const ReactCountUp = _ReactCountUp.default || _ReactCountUp;

const CountUp = ({ end, isInView }) => {
  return isInView ? <ReactCountUp end={end} duration={2} useEasing={true} /> : <span>0</span>;
};

const StatsCard = ({ end, label, suffix = '+', icon: Icon, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/80 hover:shadow-2xl hover:shadow-gray-300/80 transform transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 overflow-hidden"
    >
      {/* Decorative gradient corner */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-yellow-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="flex flex-col items-center relative z-10 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:text-brand-orange transition-all duration-300">
          <Icon className="w-8 h-8" />
        </div>

        {/* Number */}
        <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">
          <CountUp end={end} isInView={isInView} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">{label}</p>
      </div>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section className="pb-20 pt-10 bg-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatsCard end={5000} label="Students Enrolled" icon={FiUsers} delay={0.1} />
          <StatsCard end={120} label="Selections This Year" icon={FiAward} delay={0.2} />
          <StatsCard end={10} label="Expert Teachers" icon={FiBookOpen} delay={0.3} />
          <StatsCard end={10} label="Years Experience" icon={FiClock} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
