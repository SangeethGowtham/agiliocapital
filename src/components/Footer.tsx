import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/WhatsApp_Image_2025-06-12_at_22.40.32_83de4719-removebg-preview (1).png" 
                alt="Agilio Capital Partners Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Agilio Capital</span>
                <span className="text-sm text-gray-300 -mt-1">Partners</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier investment banking services with expertise in seed funding, corporate finance, and strategic partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/seed-angel-funding" className="text-gray-300 hover:text-white transition-colors">
                  Seed & Angel Funding
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-finance" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Finance
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-300 hover:text-white transition-colors">
                  Deals & Transactions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/loan-debt-syndication" className="text-gray-300 hover:text-white transition-colors">
                  Loan & Debt Syndication
                </Link>
              </li>
              <li>
                <Link to="/services/structured-finance" className="text-gray-300 hover:text-white transition-colors">
                  Structured Finance
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-partnerships" className="text-gray-300 hover:text-white transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link to="/services/cfo-services" className="text-gray-300 hover:text-white transition-colors">
                  CFO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  14-1, BTS Main Road<br />
                  Wilson Garden<br />
                  Bangalore, Karnataka 560030
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:agiliocap@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  agiliocap@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/agilio-capital-partners" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Agilio Capital Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
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