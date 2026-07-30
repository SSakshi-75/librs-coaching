import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[115vh] flex items-center pt-24 pb-32 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af]">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
                ★ Trusted by 5000+ Students
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Shape Your Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                Librs Classes
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Experience world-class education with expert faculty,
              comprehensive study materials, and a proven track record of
              outstanding results in competitive exams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/faculty"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-orange-500/30 text-center"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 text-center"
              >
                Apply for Admission
              </Link>
            </div>
          </div>

          {/* Right Image & Floating Cards */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main Illustration placeholder - Using a styled div or generated image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white">
              <img
                src="/logos/hero-optimized.webp"
                alt="Indian Students"
                width="800"
                height="600"
                className="w-full h-auto object-contain"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute left-2 top-2 lg:-left-12 lg:top-20 bg-white p-2 sm:p-4 rounded-xl shadow-xl flex items-center space-x-2 sm:space-x-3 border border-gray-100 scale-75 sm:scale-90 lg:scale-100 origin-top-left z-20"
            >
              <div className="bg-green-100 p-2 sm:p-3 rounded-full text-green-600">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase">
                  Success Rate
                </p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">
                  95%
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute right-2 bottom-16 lg:-right-8 lg:bottom-24 bg-white p-2 sm:p-4 rounded-xl shadow-xl flex items-center space-x-2 sm:space-x-3 border border-gray-100 scale-75 sm:scale-90 lg:scale-100 origin-bottom-right z-20"
            >
              <div className="bg-brand-blue/10 p-2 sm:p-3 rounded-full text-brand-blue">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase">
                  Expert Faculty
                </p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">
                  10+
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
