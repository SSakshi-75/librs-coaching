import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-blue">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-8 border-white/10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-8 border-brand-orange/20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with Librs Classes. Enroll today and take the first step towards success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/faculty" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-orange-500/30 w-full sm:w-auto text-center inline-block">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300 w-full sm:w-auto text-center inline-block">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
