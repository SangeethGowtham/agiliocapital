import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/seed-angel-funding" element={<ServicePage serviceType="seed-angel" />} />
          <Route path="/services/corporate-finance" element={<ServicePage serviceType="corporate-finance" />} />
          <Route path="/services/loan-debt-syndication" element={<ServicePage serviceType="loan-debt" />} />
          <Route path="/services/structured-finance" element={<ServicePage serviceType="structured-finance" />} />
          <Route path="/services/strategic-partnerships" element={<ServicePage serviceType="strategic-partnerships" />} />
          <Route path="/services/cfo-services" element={<ServicePage serviceType="cfo-services" />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;