import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiYoutube, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Librs <span className="text-brand-orange">Classes</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students with quality education, expert guidance, and proven methodologies to achieve excellence in competitive exams and shape a bright future.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/librsclassesgorakhpur" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FiFacebook size={20} />
              </a>
              <a href="https://youtube.com/@LIBRSClasses" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FiYoutube size={20} />
              </a>
              <a href="https://www.instagram.com/librs.classes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com/LIBRSGORAKHPUR?t=3TgZlWctQ2ulHPO_etqhDg&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="hover:text-brand-orange transition-colors">Faculty</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-orange transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/exam/upp" className="hover:text-brand-orange transition-colors">UP Police</Link></li>
              <li><Link to="/exam/ssc" className="hover:text-brand-orange transition-colors">SSC Preparation</Link></li>
              <li><Link to="/exam/bank" className="hover:text-brand-orange transition-colors">Banking Exams</Link></li>
              <li><Link to="/exam/railway" className="hover:text-brand-orange transition-colors">Railway RRB</Link></li>
              <li><Link to="/exam/upsc" className="hover:text-brand-orange transition-colors">UPSC Civil Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-brand-orange" size={20} />
                <span>Civil Line, Opp Mp Inter Collage, Hari Om Nagar, Gorakhpur - 273001</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-brand-orange" size={20} />
                <span>+91 9451518751</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-brand-orange" size={20} />
                <span>info@librsclasses.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Librs Classes. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
