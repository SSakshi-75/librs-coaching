import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingContact = () => {
  const phoneNumber = '+919451518751';
  const displayPhone = '+91 9451518751';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href={`https://wa.me/919451518751`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-800">
          WhatsApp
        </span>
      </a>

      <a
        href="tel:+919451518751"
        aria-label="Call us"
        className="group relative flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <FaPhoneAlt className="text-2xl" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-gray-800">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
