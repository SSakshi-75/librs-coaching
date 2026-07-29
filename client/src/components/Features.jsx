import React from 'react';
import { FiUsers, FiEdit3, FiMonitor, FiBookOpen, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featureData = [
  {
    icon: <FiUsers className="w-8 h-8 text-white" />,
    title: 'Expert Faculty',
    description: 'Learn from industry veterans and top educators with years of proven experience in competitive exams.',
    color: 'bg-blue-500',
    link: '/faculty'
  },
  {
    icon: <FiEdit3 className="w-8 h-8 text-white" />,
    title: 'Weekly Test Series',
    description: 'Regular mock tests designed exactly on the latest exam patterns to track your progress effectively.',
    color: 'bg-brand-orange',
    link: '/strategy'
  },
  {
    icon: <FiMonitor className="w-8 h-8 text-white" />,
    title: 'Smart Classrooms',
    description: 'Tech-enabled learning environments with interactive boards for a deeply engaging experience.',
    color: 'bg-green-500',
    link: '/gallery'
  },
  {
    icon: <FiBookOpen className="w-8 h-8 text-white" />,
    title: 'Updated Study Material',
    description: 'Comprehensive, meticulously researched study guides updated continuously to match syllabus changes.',
    color: 'bg-purple-500',
    link: '/strategy'
  },
  {
    icon: <FiMessageCircle className="w-8 h-8 text-white" />,
    title: 'Doubt Solving Sessions',
    description: 'Dedicated 1-on-1 sessions to clear conceptual roadblocks and ensure no student is left behind.',
    color: 'bg-red-500',
    link: '/contact'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-white" />,
    title: 'Career Guidance',
    description: 'Expert counseling to help you choose the right path and maintain motivation throughout your journey.',
    color: 'bg-teal-500',
    link: '/about'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
            Why Choose Us
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">The Librs Classes Advantage</h2>
          <p className="text-gray-600 text-lg leading-relaxed">We provide an ecosystem of excellence, ensuring you have every tool necessary to outshine the competition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <Link to={feature.link} key={index} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full cursor-pointer"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
