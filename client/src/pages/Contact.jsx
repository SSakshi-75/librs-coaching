import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id === 'name') {
      // Only alphabets and spaces
      value = value.replace(/[^a-zA-Z\s]/g, '');
      // First letter capital, rest small
      if (value.length > 0) {
        // Split by space to capitalize each word's first letter for better naming, or just the string.
        // The requirement "1st letter capital ho aur letter small 2nd s"
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      }
    } else if (id === 'email') {
      // Email strictly lower case
      value = value.toLowerCase().replace(/\s/g, '');
    } else if (id === 'phone') {
      // Only numbers, max 10 digits
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Custom Validations before API call
    if (formData.phone.length !== 10) {
      toast.warning('Phone number must be exactly 10 digits.');
      setLoading(false);
      return;
    }
    if (!formData.email.endsWith('.com')) {
      toast.warning('Email must end with .com');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-brand-orange font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
            Get In Touch
            <span className="w-12 h-[2px] bg-brand-orange/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight">Contact Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Have questions? We are here to help you. Reach out to us through any of the following channels.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange mr-4">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600">Plot No.3 S, Opp MP Inter Collage, Civil Line, Hari Om Nagar, Gorakhpur-273001, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange mr-4">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 94515 18751</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange mr-4">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">admissions@librsclasses.com</p>
                  <p className="text-gray-600">librsclasses@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-orange mr-4">
                  <FiClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Live Google Map */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative group">
              <iframe
                src="https://maps.google.com/maps?q=Civil%20Lines,%20Hari%20Om%20Nagar,%20Golghar,%20Gorakhpur,%20Uttar%20Pradesh%20273001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Librs Classes Location"
                className="absolute inset-0"
              ></iframe>
              {/* Direct Link Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MgYIAhBFGDkyBggDECMYJzINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDIGCAYQRRg8MgYIBxBFGD3SAQgyNTg2ajBqN6gCCLACAfEFwMgI50XblejxBcDICOdF25Xo&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWFDw6NkRJE5MeH5GbPhP_ra&daddr=Civil+Lines,+Hari+Om+Nagar,+Golghar,+Gorakhpur,+Uttar+Pradesh+273001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue hover:bg-brand-orange text-white font-bold py-2 px-4 rounded-lg shadow-[0_4px_14px_rgba(0,118,255,0.39)] transition-colors text-sm flex items-center"
                >
                  <FiMapPin className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and our counselor will contact you shortly.</p>

            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required autoComplete="off" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required autoComplete="off" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="9876543210" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required autoComplete="off" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Course Interested In *</label>
                <select id="course" value={formData.course} onChange={handleChange} required autoComplete="off" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                  <option value="">Select a Course</option>
                  <option value="ssc">SSC Preparation</option>
                  <option value="banking">Banking Exams</option>
                  <option value="railway">Railway RRB</option>
                  <option value="nda">NDA / Defence</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea id="message" value={formData.message} onChange={handleChange} required autoComplete="off" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none" placeholder="Your query here..."></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-brand-blue hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-900/20 flex justify-center items-center">
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Submit Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
