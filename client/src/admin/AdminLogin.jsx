import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@gmail.com')) {
      toast.warning('Admin email must be a @gmail.com address');
      return;
    }
    if (password.length < 6) {
      toast.warning('Password must be at least 6 characters long');
      return;
    }
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
        toast.success('Login Successful! Redirecting...');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1500);
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error('Error connecting to server');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-blue relative overflow-hidden p-4">
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
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
