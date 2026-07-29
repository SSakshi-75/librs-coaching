import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/inquiries', {
          credentials: 'include'
        });
        if (res.ok) {
          const data = await res.json();
          setInquiries(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-1">Dashboard</h2>
          <p className="text-gray-600">Welcome to the Librs Classes Admin Portal.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-orange hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Total Inquiries</h3>
          <p className="text-3xl font-bold text-brand-blue">{inquiries.length}</p>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
        <h3 className="text-xl font-bold text-brand-blue mb-4">Quick Actions</h3>
        <div className="flex gap-4">
          <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-xl transition shadow text-sm font-medium">
            View Inquiries
          </button>
          <button className="bg-brand-light text-brand-blue border border-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3 rounded-xl transition shadow-sm text-sm font-medium">
            Manage Content
          </button>
        </div>
      </div>

      {/* Real Data Table */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
        <h3 className="text-xl font-bold text-brand-blue mb-4">Recent Inquiries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Phone</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length > 0 ? (
                inquiries.map((inq) => (
                  <tr key={inq._id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-3 px-4">{inq.name}</td>
                    <td className="py-3 px-4">{inq.email}</td>
                    <td className="py-3 px-4">{inq.phone}</td>
                    <td className="py-3 px-4">{new Date(inq.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">No inquiries found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
