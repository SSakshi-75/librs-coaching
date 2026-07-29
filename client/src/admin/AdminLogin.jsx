import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        setShowSuccess(true);
        setTimeout(() => {
          navigate('/admin');
        }, 1500);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-blue relative overflow-hidden p-4">
      {/* Premium Success Notification Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -40, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-12 left-1/2 bg-white/95 backdrop-blur-sm border border-gray-100 px-5 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-4 z-50 min-w-[320px]"
          >
            <div className="bg-green-100 p-2.5 rounded-full flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p className="text-base font-bold text-gray-800">Login Successful</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Redirecting to dashboard...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-orange opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-3xl font-bold text-brand-blue">Librs</span>
            <span className="text-3xl font-bold text-brand-orange">Classes</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Admin Portal</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-shadow"
              autoComplete="off"
              name="admin-email-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-shadow"
              autoComplete="new-password"
              name="admin-password-field"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-orange text-white py-3 rounded-xl hover:bg-brand-orange-hover transition font-semibold text-lg shadow-md hover:shadow-lg mt-4"
          >
            Login to Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
