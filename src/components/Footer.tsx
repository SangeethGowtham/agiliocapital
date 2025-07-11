import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-50 text-dark-600 border-t border-primary-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex flex-col">
                <span className="text-lg font-bold animate-glow" style={{ color: '#221161' }}>Agilio Capital</span>
                <span className="text-sm -mt-1" style={{ color: '#221161' }}>Partners</span>
              </div>
            </div>
            <p className="text-dark-500 text-sm leading-relaxed">
              Premier investment banking services with expertise in seed funding, corporate finance, and strategic partnerships
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dark-500 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/seed-angel-funding" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Seed & Angel Funding
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-finance" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Corporate Finance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/loan-debt-syndication" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Loan & Debt Syndication
                </Link>
              </li>
              <li>
                <Link to="/services/structured-finance" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Structured Finance
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-partnerships" className="text-dark-500 hover:text-primary-400 transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link to="/services/cfo-services" className="text-dark-500 hover:text-primary-400 transition-colors">
                  CFO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-dark-500 text-sm">
                  14-1, BTS Main Road<br />
                  Wilson Garden<br />
                  Bangalore, Karnataka 560030
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <a 
                  href="mailto:agiliocap@gmail.com" 
                  className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
                >
                  agiliocap@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/t-m-durai-b913356/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm">
              © 2024 <span style={{ color: '#221161' }}>Agilio Capital Partners</span>. All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;