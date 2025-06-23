import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-700">Funds Progrez^</span>
                <span className="text-sm text-primary-600 -mt-1">Investment Management</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premier investment management services with expertise in fund management, portfolio optimization, and strategic financial advisory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/seed-angel-funding" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Seed & Angel Funding
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-finance" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Private Equity & VC
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Investment Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-700">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/loan-debt-syndication" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Debt Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/structured-finance" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Structured Finance
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-partnerships" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link to="/services/cfo-services" className="text-gray-600 hover:text-primary-600 transition-colors">
                  CFO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-700">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  14-1, BTS Main Road<br />
                  Wilson Garden<br />
                  Bangalore, Karnataka 560030
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a 
                  href="mailto:agiliocap@gmail.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  agiliocap@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/t-m-durai-b913356/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Funds Progrez^. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
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