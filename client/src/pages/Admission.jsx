import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border-t-8 border-brand-orange"
      >
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <FiPhoneCall className="text-brand-orange text-4xl animate-bounce" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4 tracking-tight">
          Admission Helpdesk
        </h1>
        
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          For admission related queries, batch timings, and fee structures, please contact our expert counselors on the number below:
        </p>

        <div className="bg-brand-blue text-white py-4 px-6 rounded-2xl shadow-lg mb-6 inline-block transform hover:scale-105 transition-transform duration-300">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-1">Call Us Now</p>
          <p className="text-3xl md:text-4xl font-black tracking-wider">+91 9451518751</p>
        </div>

        <div>
          <p className="text-gray-500 mb-6 text-sm">Our lines are open Monday to Saturday, 9:00 AM to 7:00 PM.</p>
          
          <Link to="/" className="inline-block border-2 border-gray-200 text-gray-600 hover:border-brand-blue hover:text-brand-blue font-bold px-6 py-2 rounded-full transition-colors duration-300 text-sm">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Admission;
