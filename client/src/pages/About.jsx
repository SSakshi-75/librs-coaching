import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiBookOpen, FiUsers, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-16">
      {/* Hero Section for About Page */}
      <div className="bg-brand-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Welcome to <span className="text-brand-orange">Librus Classes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Your ultimate destination for competitive exam preparation. We turn aspirations into achievements.
          </motion.p>
        </div>
      </div>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 border-l-4 border-brand-orange pl-5 py-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-2 tracking-tight">
                  Librus Classes
                </h2>
                <h3 className="text-lg sm:text-xl font-medium text-brand-orange/90">
                  Guiding you towards your dream government job
                </h3>
              </div>

              <p className="text-gray-600 text-base mb-4 leading-relaxed">
                <strong>Librus Classes</strong> is a premier competitive exam preparation institute. We offer specialized and result-oriented coaching for a wide range of exams including <strong>SSC, Bank, Railway, UP Police, and Teaching</strong> sectors.
              </p>

              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                By providing scientifically designed study materials, expert mentoring, and regular mock tests, we continuously evaluate and uplift student performance. Our mission is to empower aspirants with the right strategy to succeed in today's highly competitive exams.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-brand-orange inline-block pb-1">
                  Exams We Cover
                </h3>
                <p className="text-gray-600 mb-4">We offer specialized, comprehensive coaching for a wide range of competitive examinations:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['SSC', 'Bank', 'Railway', 'UP-SI', 'UPP', 'SSC GD', 'UP-TET', 'STET', 'PRT', 'CTET'].map((exam, i) => (
                    <Link
                      to={`/exam/${exam.toLowerCase().replace(/\s+/g, '-')}`}
                      key={i}
                      className="flex items-center text-gray-700 font-medium bg-gray-50 px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:border-brand-blue hover:text-brand-blue transition-colors cursor-pointer"
                    >
                      <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                      {exam}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:pl-10 mt-12 lg:-mt-48 flex flex-col items-center px-4 sm:px-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[380px]">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-0 hidden sm:block"></div>

                {/* Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 sm:border-8 border-white aspect-[4/5] bg-gray-100 group">
                  <img
                    src="/logos/director.jpg"
                    alt="Director"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 sm:top-8 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center space-x-2 sm:space-x-3 z-20 border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="bg-brand-orange text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl shadow-inner">
                    10+
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest">Years of</p>
                    <p className="text-gray-900 font-extrabold text-xs sm:text-sm">Excellence</p>
                  </div>
                </div>
              </div>

              {/* Director Name Outside */}
              <div className="mt-6 sm:mt-8 text-center relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Mr. Vinay Kumar Singh</h3>
                <p className="text-brand-orange font-bold uppercase tracking-widest text-xs sm:text-sm mt-1">Director</p>
              </div>
            </motion.div>

          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <Link to="/results" className="block bg-blue-50 p-6 rounded-2xl border-l-4 border-brand-blue shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transform duration-300">
              <FiAward className="text-brand-blue w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">Thousands of selections across various government sectors every year.</p>
            </Link>
            <Link to="/strategy" className="block bg-orange-50 p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transform duration-300">
              <FiBookOpen className="text-brand-orange w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Strategy</h3>
              <p className="text-gray-600 text-sm">Updated study materials and mock tests strictly aligned with the latest syllabus.</p>
            </Link>
            <Link to="/faculty" className="block bg-orange-50 p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transform duration-300">
              <FiUsers className="text-brand-orange w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600 text-sm">Learn from highly qualified educators with years of teaching experience.</p>
            </Link>
            <Link to="/contact" className="block bg-blue-50 p-6 rounded-2xl border-l-4 border-brand-blue shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transform duration-300">
              <FiTarget className="text-brand-blue w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Focused Approach</h3>
              <p className="text-gray-600 text-sm">Regular mock tests and personalized doubt sessions to track and improve progress.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
