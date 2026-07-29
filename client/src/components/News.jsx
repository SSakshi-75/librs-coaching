import React from 'react';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const newsData = [
  {
    type: 'Exam Notification',
    title: 'SSC CGL 2026 Notification Released',
    date: 'July 15, 2026',
    description: 'The Staff Selection Commission has released the official notification for CGL 2026. Check eligibility and important dates.',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    type: 'New Batch',
    title: 'UPSC Foundation Batch Starting',
    date: 'August 1, 2026',
    description: 'Admissions open for the new UPSC Civil Services Foundation batch. Limited seats available. Register today.',
    color: 'bg-green-100 text-green-700'
  },
  {
    type: 'Coaching Update',
    title: 'Free Mega Scholarship Test',
    date: 'August 10, 2026',
    description: 'Participate in our all-India mock test and stand a chance to win up to 100% scholarship on our premium courses.',
    color: 'bg-brand-orange/20 text-brand-orange'
  }
];

const News = () => {
  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
            Updates
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">Latest News & Announcements</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Stay updated with the latest exam notifications and coaching announcements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${news.color}`}>
                  {news.type}
                </span>
                <span className="flex items-center text-sm text-gray-500 font-medium">
                  <FiCalendar className="mr-1" /> {news.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{news.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
