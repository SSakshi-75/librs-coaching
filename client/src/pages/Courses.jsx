import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiDollarSign } from 'react-icons/fi';

const courseData = [
  {
    title: 'SSC Preparation',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '6 Months',
    fees: '₹15,000',
    description: 'Comprehensive coverage for SSC CGL, CHSL, MTS, and CPO with advanced shortcuts and tricks.'
  },
  {
    title: 'Banking Exams',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '5 Months',
    fees: '₹12,000',
    description: 'Targeted coaching for IBPS PO, Clerk, SBI PO, and RBI Assistant with extensive mock interviews.'
  },
  {
    title: 'Railway RRB',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 Months',
    fees: '₹10,000',
    description: 'Specialized batches focusing on technical and non-technical RRB NTPC and Group D syllabus.'
  },
  {
    title: 'NDA / Defence',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '6 Months',
    fees: '₹18,000',
    description: 'Rigorous academic and physical guidance tailored specifically for National Defence Academy aspirants.'
  },
  {
    title: 'CUET Entrance',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 Months',
    fees: '₹8,000',
    description: 'Focused domain-specific and general aptitude classes to secure admission in top central universities.'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
            Our Programs
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight">Popular Courses</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Choose from our meticulously structured courses designed to guarantee your success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <FiClock className="mr-1 text-brand-orange" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FiDollarSign className="mr-1 text-brand-orange" />
                    <span>{course.fees}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm flex-grow mb-6">{course.description}</p>

                <button className="w-full py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
