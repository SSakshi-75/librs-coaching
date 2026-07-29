import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';

// Array of images for the gallery
const images = [
  { src: '/logos/image.png' },
  { src: '/logos/gal1.jpeg' },
  { src: '/logos/gal2.jpeg' },
  { src: '/logos/gal5.jpeg' },
  { src: '/logos/gal6.jpeg' },
  { src: '/logos/gal3.jpeg' },
  { src: '/logos/gal4.jpeg' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-50 pt-20 pb-16">
      <div className="bg-brand-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Our <span className="text-brand-orange">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            A glimpse into our vibrant learning environment, dedicated students, and expert faculty in action.
          </motion.p>
        </div>
      </div>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Uniform Grid Layout for Same Size Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] border border-gray-100 overflow-hidden transition-all duration-300 h-80 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image completely fills the card using object-cover */}
                <img
                  src={img.src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Professional Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaSearchPlus className="text-white text-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt="Enlarged Gallery"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                />
                <button
                  className="absolute top-4 right-4 md:top-0 md:-right-12 text-white hover:text-gray-300 transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Gallery;
