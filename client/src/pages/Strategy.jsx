import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Strategy = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-orange text-white px-4 py-1 rounded-full font-semibold tracking-wider text-sm mb-6 shadow-md"
          >
            Librs Coaching Methodology
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Our <span className="text-brand-orange">Smart Strategy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Success in competitive exams isn't just about hard work—it's about working smart. Discover how our scientifically designed curriculum and targeted approach ensure your victory.
          </motion.p>
        </div>
      </section>

      {/* Pillars of Strategy */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Four Pillars of Our Strategy</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We leave nothing to chance. Our entire ecosystem is built to maximize your potential and score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pillar 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-b-4 border-brand-orange transition-all duration-300"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiBookOpen className="text-brand-orange text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Updated Study Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Our R&D team continuously updates our study materials to reflect the latest examination trends, question patterns, and syllabus changes. You study exactly what matters.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-b-4 border-brand-blue transition-all duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiTarget className="text-brand-blue text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strict Syllabus Alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                No time wasted on irrelevant topics. Our curriculum is laser-focused on the exact syllabus of your target exam, ensuring optimal utilization of your preparation time.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-b-4 border-green-500 transition-all duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiTrendingUp className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Mock Tests</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the real exam before the actual day. Our AI-driven mock test platform simulates the exact exam environment, providing detailed analytics on your speed and accuracy.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] border-b-4 border-purple-500 transition-all duration-300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FiCheckCircle className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Doubt Solving</h3>
              <p className="text-gray-600 leading-relaxed">
                A doubt delayed is a concept lost. Get instant access to expert faculty for one-on-one doubt clearing sessions, ensuring your foundational concepts are crystal clear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Smart Way of Learning?</h2>
          <p className="text-gray-200 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of successful candidates who trusted our strategy and achieved their dream government jobs.
          </p>
          <Link to="/contact" className="inline-block bg-brand-orange text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_25px_rgba(249,115,22,0.4)] hover:bg-orange-600 hover:shadow-[0_15px_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1">
            Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
