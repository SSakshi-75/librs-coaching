import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Faculty = lazy(() => import('./pages/Faculty'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const ExamDetails = lazy(() => import('./pages/ExamDetails'));
const Strategy = lazy(() => import('./pages/Strategy'));
const Admission = lazy(() => import('./pages/Admission'));

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Admin Routes
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));
const AdminRegister = lazy(() => import('./admin/AdminRegister'));

// Layouts
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <FloatingContact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="font-sans text-gray-800 bg-white flex flex-col min-h-screen">
        <Suspense fallback={<div className="flex h-screen items-center justify-center text-xl text-gray-500 font-semibold">Loading...</div>}>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            
            {/* Protected Admin Panel Routes */}
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/register" element={<AdminRegister />} />
            </Route>

            {/* Main Website Routes */}
            <Route path="/*" element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faculty" element={<Faculty />} />
                  <Route path="/results" element={<SuccessStories />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/exam/:id" element={<ExamDetails />} />
                  <Route path="/strategy" element={<Strategy />} />
                  <Route path="/admission" element={<Admission />} />
                </Routes>
              </MainLayout>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
