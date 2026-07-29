import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { BACKEND_URL } from '../config';

const AdminLayout = () => {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/api/admin/logout`, { method: 'POST', credentials: 'include' });
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = '/admin';
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col font-sans">
      <header className="bg-brand-blue text-white py-4 px-6 md:px-8 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link to="/admin/dashboard" className="flex items-center gap-1 hover:opacity-90 transition">
             <span className="text-2xl font-bold text-white">Librs</span>
             <span className="text-2xl font-bold text-brand-orange">Classes</span>
             <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs font-semibold uppercase tracking-wider">Admin</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/admin/register"
            className="text-white hover:text-brand-orange text-sm font-medium transition"
          >
            Create Admin
          </Link>
          <button 
            onClick={handleLogout}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2 rounded-full transition shadow-md font-medium text-sm"
          >
            Logout
          </button>
        </div>
      </header>
      
      <main className="flex-grow max-w-7xl w-full mx-auto p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
