import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiClock, FiBookOpen } from 'react-icons/fi';

const examData = {
  'ssc': {
    title: 'SSC Exams (CGL, CHSL, MTS, CPO)',
    description: 'Staff Selection Commission (SSC) conducts various exams for recruitment to various posts in ministries, departments, and organizations of the Government of India. Our comprehensive coaching covers syllabus, shortcuts, and time management strategies for Tier I, II, and III.',
    features: ['Detailed Mathematics Tricks', 'Comprehensive General Awareness', 'Reasoning Shortcut Methods', 'English Comprehension Practice']
  },
  'bank': {
    title: 'Bank Exams (IBPS, SBI, RBI)',
    description: 'Prepare for banking sector jobs including PO, Clerk, and Specialist Officer positions. We offer targeted preparation covering quantitative aptitude, reasoning ability, English language, and banking awareness.',
    features: ['High-level Data Interpretation', 'Banking & Financial Awareness', 'Computer Aptitude', 'Interview Preparation']
  },
  'railway': {
    title: 'Railway Recruitment Board (RRB)',
    description: 'RRB conducts exams for Technical and Non-Technical Popular Categories (NTPC), Group D, and ALP. Our specialized batches focus on the exact syllabus pattern with extensive practice on previous year questions.',
    features: ['General Science Special Classes', 'Technical Subject Guidance', 'Speed & Accuracy Building', 'Mock Tests on Latest Pattern']
  },
  'up-si': {
    title: 'UP Police Sub Inspector (UP-SI)',
    description: 'Focused preparation for Uttar Pradesh Police Sub Inspector recruitment. We cover the entire syllabus including General Hindi, Law & Constitution, General Knowledge, Numerical & Mental Ability, and Reasoning.',
    features: ['Special Focus on Mool Vidhi & Constitution', 'General Hindi Excellence', 'Physical Test Guidance', 'UP GK Coverage']
  },
  'upp': {
    title: 'UP Police Constable (UPP)',
    description: 'Join our dedicated batches for UP Police Constable. Our expert faculty ensures that every aspect of the written exam is covered thoroughly, maximizing your chances of selection.',
    features: ['Basic to Advanced Mathematics', 'Logical Reasoning', 'Complete General Awareness', 'Weekly Performance Tracking']
  },
  'ssc-gd': {
    title: 'SSC General Duty (GD) Constable',
    description: 'Prepare for SSC GD Constable exams for forces like BSF, CISF, CRPF, SSB, ITBP, AR, and SSF. We provide a structured approach to tackle the computer-based examination effectively.',
    features: ['Elementary Mathematics', 'General Intelligence & Reasoning', 'General Knowledge & Awareness', 'English/Hindi Selection Tips']
  },
  'up-tet': {
    title: 'Uttar Pradesh Teacher Eligibility Test (UP-TET)',
    description: 'Aspirants aiming for teaching jobs in Uttar Pradesh can rely on our UP-TET coaching. We cover both Paper I (Primary) and Paper II (Upper Primary) with specialized focus on Child Development and Pedagogy.',
    features: ['Child Development & Pedagogy (CDP)', 'Language Proficiency (Hindi & English/Sanskrit)', 'Environmental Studies', 'Mathematics & Science/Social Science']
  },
  'stet': {
    title: 'Super TET (STET)',
    description: 'After clearing TET, the Super TET is the final hurdle for teaching jobs in UP. Our course covers the extensive 14-subject syllabus to ensure you secure your teaching position.',
    features: ['Life Skills & Management', 'Information Technology', 'Current Affairs & GK', 'Teaching Methodology']
  },
  'prt': {
    title: 'Primary Teacher (PRT) Exams',
    description: 'Comprehensive preparation for PRT exams like KVS, DSSSB, and others. We build a strong foundation in core subjects and pedagogy to help you excel in the examination.',
    features: ['Core Subject Mastery', 'Educational Psychology', 'Language Skills Enhancement', 'Previous Year Paper Analysis']
  },
  'ctet': {
    title: 'Central Teacher Eligibility Test (CTET)',
    description: 'Clear the CTET with confidence. Our curriculum is strictly aligned with the CBSE syllabus for CTET, focusing on conceptual clarity and pedagogical understanding.',
    features: ['NCERT Based Preparation', 'Pedagogy of all Subjects', 'Bilingual Classes', 'Doubt Clearing Sessions']
  },
  'upsc': {
    title: 'UPSC Civil Services',
    description: 'Prepare for the prestigious UPSC Civil Services Examination with our comprehensive coaching program. We provide in-depth coverage of the vast syllabus, including Prelims and Mains strategy, answer writing practice, and current affairs analysis.',
    features: ['Comprehensive GS Coverage', 'Daily Current Affairs Analysis', 'Answer Writing Practice', 'Interview & Personality Development']
  }
};

const ExamDetails = () => {
  const { id } = useParams();
  const exam = examData[id] || {
    title: id.toUpperCase().replace('-', ' '),
    description: 'Detailed information for this examination will be updated soon. Please contact us for more information about the batches and syllabus.',
    features: ['Comprehensive Syllabus Coverage', 'Expert Faculty', 'Regular Mock Tests', 'Doubt Clearing Sessions']
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-brand-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/about" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6">
            <FiArrowLeft className="mr-2" /> Back to About
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="text-brand-orange">{exam.title}</span> Preparation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            {exam.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiBookOpen className="text-brand-blue mr-3" /> Course Highlights
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {exam.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <FiCheckCircle className="text-brand-orange mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-brand-blue">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why Choose Librs Coaching?</h3>
                <p className="text-gray-600 mb-4">
                  We provide updated study materials and mock tests strictly aligned with the latest syllabus. Our expert faculty ensures that every student gets individual attention.
                </p>
                <Link to="/contact" className="inline-block bg-brand-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors">
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <FiClock className="text-brand-blue mr-3" /> Daily 3-4 Hours Classes
                </li>
                <li className="flex items-center text-gray-600">
                  <FiCheckCircle className="text-brand-blue mr-3" /> Weekly Mock Tests
                </li>
                <li className="flex items-center text-gray-600">
                  <FiCheckCircle className="text-brand-blue mr-3" /> PDF Notes & Study Material
                </li>
                <li className="flex items-center text-gray-600">
                  <FiCheckCircle className="text-brand-blue mr-3" /> 24/7 Doubt Support
                </li>
              </ul>
            </div>

            <div className="bg-brand-orange text-white rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
              <p className="mb-6 opacity-90">Join the upcoming batch and start your journey towards success.</p>
              <Link to="/contact" className="block w-full bg-white text-brand-orange font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Book a Demo Class
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
