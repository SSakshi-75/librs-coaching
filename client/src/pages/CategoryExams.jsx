import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaArrowLeft, FaGraduationCap } from 'react-icons/fa';

const CategoryExams = () => {
  const { id } = useParams();
  const [expandedExam, setExpandedExam] = useState(null);

  // For now, we only have data for SSC.
  const sscExams = [
    { id: 1, title: 'SSC (CGL - TIER 1 & 2)', details: 'Detailed preparation for Combined Graduate Level Tier 1 and Tier 2 exams.' },
    { id: 2, title: 'CHSL (Combined Higher Secondary Level)', details: 'Comprehensive syllabus coverage for SSC CHSL.' },
    { id: 3, title: 'SSC MTS', details: 'SSC MTS', isList: true },
    { id: 4, title: 'SSC Pradhyapak', details: 'Information regarding the SSC Pradhyapak recruitment.' },
    { id: 5, title: 'Stenographer (Grades C and D)', details: 'Complete details and preparation strategy for the SSC Stenographer examination.' },
    { id: 6, title: 'SSC Common Entrance Test (CET)', details: 'Information about the upcoming SSC Common Entrance Test (CET) syllabus and pattern.' },
    { id: 7, title: 'SSC Translator', details: 'SSC Junior Hindi Translator', isList: true },
    { id: 8, title: 'SSC Sub Inspector (CPO)', details: 'Details about the SSC CPO examination for Sub Inspector posts in various central police organizations.' },
    { id: 9, title: 'SSC Constable (GD)', details: 'Information regarding the SSC General Duty Constable exam including physical and written test requirements.' },
    { id: 10, title: 'SSC Selection Post', details: 'A comprehensive guide to SSC Selection Post phase examinations and eligibility criteria.' },
    { id: 11, title: 'Bihar Staff Selection Commission (BSSC)', details: 'Details about the Bihar Staff Selection Commission exams, pattern, and dates.' },
    { id: 12, title: 'SSC Scientific Assistant', details: 'Information about the SSC Scientific Assistant examination in India Meteorological Department.' }
  ];

  const toggleExam = (examId) => {
    if (expandedExam === examId) {
      setExpandedExam(null);
    } else {
      setExpandedExam(examId);
    }
  };

  const isSSC = id && id.toLowerCase() === 'ssc';
  const displayExams = isSSC ? sscExams : [];
  const title = isSSC ? 'SSC Examinations' : `${id ? id.toUpperCase() : 'Category'} Exams`;

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-orange opacity-10 mix-blend-overlay blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/faculty" className="inline-flex items-center text-brand-orange hover:text-white transition-colors mb-6 font-medium">
            <FaArrowLeft className="mr-2" /> Back to Explore
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <FaGraduationCap className="text-4xl text-brand-orange" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">{title}</h1>
              <p className="text-blue-100 text-lg max-w-2xl">
                Explore our comprehensive preparation programs for {title}. Select an exam below to see more details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {displayExams.length > 0 ? (
          <div className="space-y-4">
            {displayExams.map((exam, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={exam.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-brand-orange/30 hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleExam(exam.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-brand-blue transition-colors">
                    {exam.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${expandedExam === exam.id ? 'bg-brand-orange text-white' : 'bg-orange-50 text-brand-orange group-hover:bg-orange-100'}`}>
                    {expandedExam === exam.id ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedExam === exam.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-50">
                        {exam.isList ? (
                          <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                            <li className="text-[15px]">{exam.details}</li>
                          </ul>
                        ) : (
                          <p className="text-[15px] leading-relaxed">{exam.details}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <FaGraduationCap className="mx-auto text-5xl text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">More Exams Coming Soon</h3>
            <p className="text-gray-500 max-w-md mx-auto">We are currently updating our syllabus and course materials for other categories. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryExams;
