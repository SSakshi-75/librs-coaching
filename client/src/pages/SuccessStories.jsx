import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiStar, FiShield, FiX } from 'react-icons/fi';
import { GiCrossedSwords } from 'react-icons/gi';
import { FaAnchor } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero Section */}
      <section className="bg-brand-blue py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-orange text-white px-4 py-1 rounded-full font-semibold tracking-wider text-sm mb-6"
          >
            Our Pride & Joy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Proven <span className="text-brand-orange">Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We don't just teach, we build careers. Here is a glimpse of our proud achievers who are now serving the nation.
          </motion.p>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              From Classroom to the <span className="text-brand-blue">Armed Forces</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We are immensely proud to see our students achieve their dreams and don the prestigious uniforms of the <strong>Indian Army</strong> and the <strong>Indian Navy</strong>. Their hard work, combined with our rigorous training, has turned their aspirations into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Army Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCard({
                type: 'Army',
                image: '/logos/image copy.png',
                logo: '/logos/indian-army-logo-png_seeklogo-305118.png',
                title: 'Selected for Army',
                desc: 'Serving the nation with ultimate pride and valor. A true inspiration for upcoming defense aspirants.'
              })}
              className="relative bg-[#0f172a] rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-brand-orange/20 overflow-hidden group cursor-pointer h-[22rem] w-full transform transition-all duration-500 hover:-translate-y-2 border border-brand-orange/10"
            >
              <img
                src="/logos/image copy.png"
                alt="Selected in Indian Army"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1590240974868-b76b2cbaea7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; // Fallback
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <span className="text-white font-bold text-sm border border-white/50 px-5 py-2 rounded-full backdrop-blur-md bg-black/30 flex items-center gap-2">
                  View Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-center space-x-5 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-20 h-20 bg-white rounded-full p-3 shadow-xl shrink-0 border-[3px] border-brand-orange group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="/logos/indian-army-logo-png_seeklogo-305118.png"
                      alt="Indian Army Logo"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Indian Army</h3>
                    <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mt-1">Success Story</p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <p className="text-gray-300 text-lg leading-relaxed line-clamp-2 group-hover:line-clamp-none opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                    Serving the nation with ultimate pride and valor. A true inspiration for upcoming defense aspirants.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => setSelectedCard({
                type: 'Navy',
                image: '/logos/image copy 2.png',
                logo: '/logos/pngfind.com-navy-logo-png-22255.png',
                title: 'Selected for Navy',
                desc: 'Protecting our waters and representing excellence. Hard work and right strategy lead to such phenomenal success.'
              })}
              className="relative bg-[#0f172a] rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-brand-blue/20 overflow-hidden group cursor-pointer h-[22rem] w-full transform transition-all duration-500 hover:-translate-y-2 border border-brand-blue/10"
            >
              <img
                src="/logos/image copy 2.png"
                alt="Selected in Indian Navy"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1574510018898-8ecfb7d0ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; // Fallback
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <span className="text-white font-bold text-sm border border-white/50 px-5 py-2 rounded-full backdrop-blur-md bg-black/30 flex items-center gap-2">
                  View Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-center space-x-5 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-20 h-20 bg-white rounded-full p-3 shadow-xl shrink-0 border-[3px] border-brand-blue group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="/logos/pngfind.com-navy-logo-png-22255.png"
                      alt="Indian Navy Logo"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">Indian Navy</h3>
                    <p className="text-brand-blue font-bold uppercase tracking-widest text-sm mt-1">Success Story</p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <p className="text-gray-300 text-lg leading-relaxed line-clamp-2 group-hover:line-clamp-none opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                    Protecting our waters and representing excellence. Hard work and right strategy lead to such phenomenal success.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Motivation Banner */}
      <section className="bg-brand-orange py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <FiStar className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">You Could Be Next!</h2>
          <p className="text-orange-100 text-lg mb-8">
            With the right guidance and determination, no exam is too difficult. Start your preparation with Librs Classes today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-orange font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-800 transition-colors shadow-sm"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="h-96 w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1590240974868-b76b2cbaea7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; // Fallback
                  }}
                />
              </div>
              <div className="p-8 text-center relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <img
                      src={selectedCard.logo}
                      alt={`${selectedCard.type} Logo`}
                      loading="lazy"
                      decoding="async"
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedCard.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                    {selectedCard.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuccessStories;
