import React, { useEffect, useState } from 'react';
import { FiEye, FiTrash2, FiSearch, FiX } from 'react-icons/fi';

import { toast } from 'react-toastify';
import { BACKEND_URL } from '../config';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Modal State
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [inquiryToDelete, setInquiryToDelete] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/inquiries`, {
        credentials: 'include'
      });
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch inquiries');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!inquiryToDelete) return;
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/inquiries/${inquiryToDelete}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setInquiries(inquiries.filter((inq) => inq._id !== inquiryToDelete));
        setIsDeleteModalOpen(false);
        setInquiryToDelete(null);
        toast.success('Inquiry deleted successfully!');
      } else {
        toast.error('Failed to delete inquiry');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error deleting inquiry');
    }
  };

  const openViewModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setIsViewModalOpen(true);
  };

  const openDeleteModal = (id) => {
    setInquiryToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Filtering
  const filteredInquiries = inquiries.filter(inq => {
    const term = searchTerm.toLowerCase();
    return (
      (inq.name && inq.name.toLowerCase().includes(term)) ||
      (inq.email && inq.email.toLowerCase().includes(term)) ||
      (inq.phone && inq.phone.toLowerCase().includes(term))
    );
  });

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredInquiries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredInquiries.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6 relative overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-brand-blue mb-1">Dashboard</h2>
          <p className="text-gray-600">Welcome to the Librs Classes Admin Portal.</p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-orange hover:shadow-md transition">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Total Inquiries</h3>
          <p className="text-3xl font-bold text-brand-blue">{inquiries.length}</p>
        </div>
      </div>
      
      {/* Inquiry Management */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="text-xl font-bold text-brand-blue">Inquiry Management</h3>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search by Name, Email, Mobile..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Name</th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Mobile Number</th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Email</th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Course</th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider">Date & Time</th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-sm uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
                      <p className="mt-4 text-gray-500 font-medium">Loading Inquiries...</p>
                    </div>
                  </td>
                </tr>
              ) : currentRecords.length > 0 ? (
                currentRecords.map((inq) => (
                  <tr key={inq._id} className="border-b border-gray-50 hover:bg-orange-50/30 transition-colors">
                    <td className="py-4 px-4 whitespace-nowrap">{inq.name}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{inq.phone}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{inq.email}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {inq.course}
                      </span>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {new Date(inq.createdAt).toLocaleDateString()} <span className="text-gray-400 text-xs">{new Date(inq.createdAt).toLocaleTimeString()}</span>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-center">
                      <div className="flex justify-center gap-3">
                        <button 
                          onClick={() => openViewModal(inq)}
                          className="text-brand-blue hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition"
                          title="View Details"
                        >
                          <FiEye size={18} />
                        </button>
                        <button 
                          onClick={() => openDeleteModal(inq._id)}
                          className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition"
                          title="Delete Inquiry"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    No inquiries found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 overflow-x-auto pb-2">
            <nav className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${currentPage === 1 ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${currentPage === index + 1 ? 'bg-brand-orange text-white border-brand-orange' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${currentPage === totalPages ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* View Details Modal */}
      {isViewModalOpen && selectedInquiry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-brand-blue text-white px-6 py-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">Inquiry Details</h3>
              <button onClick={() => setIsViewModalOpen(false)} className="text-white hover:text-gray-200 transition">
                <FiX size={24} />
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Name</p>
                  <p className="font-medium text-gray-900">{selectedInquiry.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Course Interested</p>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block">
                    {selectedInquiry.course}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Mobile Number</p>
                  <p className="font-medium text-gray-900">{selectedInquiry.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Email</p>
                  <p className="font-medium text-gray-900">{selectedInquiry.email}</p>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date & Time</p>
                  <p className="font-medium text-gray-900">
                    {new Date(selectedInquiry.createdAt).toLocaleDateString()} at {new Date(selectedInquiry.createdAt).toLocaleTimeString()}
                  </p>
                </div>
                <div className="col-span-1 sm:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Message</p>
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setIsViewModalOpen(false)}
                className="bg-brand-blue text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden p-6 text-center animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
              <FiTrash2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Inquiry?</h3>
            <p className="text-gray-500 mb-6">Are you sure you want to delete this inquiry? This action cannot be undone.</p>
            
            <div className="flex gap-3 justify-center">
              <button 
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setInquiryToDelete(null);
                }}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-medium transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl font-medium transition shadow-sm shadow-red-500/30"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
