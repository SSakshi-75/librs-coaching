import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BACKEND_URL } from '../config';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      toast.warning('Email must be a @gmail.com address');
      return;
    }

    if (password.length < 6) {
      toast.warning('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      toast.warning('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/admin/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email: email.toLowerCase(), password }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('New Admin created successfully!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        toast.error(data.message || 'Failed to create admin');
      }
    } catch (err) {
      toast.error('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-brand-blue mb-1">Create Admin</h2>
        <p className="text-gray-600">Register a new administrator for the portal.</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-xl">
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-shadow"
              autoComplete="off"
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
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-shadow"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-orange text-white px-6 py-3 rounded-xl hover:bg-brand-orange-hover transition font-semibold shadow-sm hover:shadow-md disabled:bg-orange-300"
          >
            {loading ? 'Creating...' : 'Create Admin Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
