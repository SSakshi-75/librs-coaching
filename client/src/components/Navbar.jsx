import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled || !isHomePage
    ? 'bg-white shadow-md py-3 text-gray-800'
    : 'bg-transparent py-5 text-white';

  const linkClass = (path) => {
    const isActive = location.pathname === path;
    const baseClass = "font-medium transition-colors ";
    if (isActive) {
      return baseClass + "text-brand-orange";
    }
    return baseClass + "hover:text-brand-orange";
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo-optimized.webp" alt="Librs Classes" width="48" height="48" className="h-12 w-12 rounded-full object-cover bg-white p-0.5" />
            <span className={`text-2xl font-bold tracking-tight ${isScrolled || !isHomePage ? 'text-brand-blue' : 'text-white'}`}>
              Librs <span className="text-brand-orange">Classes</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/about" className={linkClass('/about')}>About Us</Link>

            <Link to="/faculty" className={linkClass('/faculty')}>Faculty</Link>
            <Link to="/gallery" className={linkClass('/gallery')}>Gallery</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/admission"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg min-w-[150px] text-center"
            >
              Admission Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white text-gray-800 overflow-hidden shadow-xl transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-brand-light hover:text-brand-orange">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-brand-light hover:text-brand-orange">About Us</Link>
          <Link to="/faculty" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-brand-light hover:text-brand-orange">Faculty</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-brand-light hover:text-brand-orange">Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md font-medium hover:bg-brand-light hover:text-brand-orange">Contact</Link>
          <div className="pt-4 flex flex-col space-y-3 px-3">
            <Link
              to="/admission"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-orange text-white py-2 rounded-full font-medium hover:bg-brand-orange-hover transition shadow-md text-center block w-full"
            >
              Admission Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
