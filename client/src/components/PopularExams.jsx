import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaGraduationCap, FaRegCheckCircle } from 'react-icons/fa';

const popularExams = [
  'SSC',
  'Bank',
  'Railway',
  'UP-SI',
  'UPP',
  'SSC GD',
  'UP-TET',
  'STET',
  'PRT',
  'CTET'
];

const PopularExams = () => {
  return (
    <section className="py-20 relative bg-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
            Trending
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">Popular Exams</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Explore the most sought-after competitive exams and start your preparation journey with our expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {popularExams.map((exam, index) => (
            <Link
              to={`/exam/${exam.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              className="group relative bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient overlay */}
              {/* Removed to avoid color change on hover */}

              <div className="relative w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-md">
                {exam === 'UPP' || exam === 'UP-SI' ? (
                  <img src="/logos/clipart2189612.png" alt={exam} loading="lazy" decoding="async" className="w-10 h-10 object-contain transition-all duration-300" />
                ) : exam === 'SSC' || exam === 'SSC GD' ? (
                  <img src="/pngaaa.com-10279.png" alt={exam} loading="lazy" decoding="async" className="w-10 h-10 object-contain transition-all duration-300" />
                ) : exam === 'Bank' ? (
                  <img src="/logos/Bank-Logo-Background-PNG-Image.png" alt="Bank" loading="lazy" decoding="async" className="w-10 h-10 object-contain transition-all duration-300" />
                ) : exam === 'Railway' ? (
                  <img src="/logos/Railway.jpg" alt="Railway" loading="lazy" decoding="async" className="w-10 h-10 object-contain mix-blend-multiply transition-all duration-300 rounded-full" />
                ) : exam === 'UP-TET' ? (
                  <img src="/logos/uptet-admit-card.webp" alt="UP-TET" loading="lazy" decoding="async" className="w-10 h-10 object-contain mix-blend-multiply transition-all duration-300 rounded-full" />
                ) : exam === 'STET' ? (
                  <FaGraduationCap className="text-brand-blue text-3xl transition-colors duration-300 group-hover:scale-110 transform" />
                ) : exam === 'CTET' ? (
                  <img src="/logos/kindpng_2841053.png" alt="CTET" loading="lazy" decoding="async" className="w-10 h-10 object-contain mix-blend-multiply transition-all duration-300 rounded-full" />
                ) : exam === 'PRT' ? (
                  <FaBookOpen className="text-brand-blue text-2xl transition-colors duration-300 group-hover:scale-110 transform" />
                ) : (
                  <FaRegCheckCircle className="text-brand-blue text-2xl transition-colors duration-300 group-hover:scale-110 transform" />
                )}
              </div>

              <h3 className="text-[17px] font-extrabold text-slate-800 transition-colors duration-300 text-center w-full truncate relative z-10" title={exam}>
                {exam}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularExams;
