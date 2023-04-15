import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

// Import your page components
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error404 from './pages/error-404';

function Markup() {
  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/form-login" element={<FormLogin />} />
        <Route path="/form-register" element={<FormRegister />} />
        <Route path="/form-forget-password" element={<FormForgetPassword />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="*" element={<Error404 />} /> {/* Catch-all route for 404 page */}
      </Routes>
  );
}

export default Markup;
