import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Seed & Angel Funding', href: '/services/seed-angel-funding' },
    { name: 'Private Equity & VC', href: '/services/corporate-finance' },
    { name: 'Debt Solutions', href: '/services/loan-debt-syndication' },
    { name: 'CFO Services', href: '/services/cfo-services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className="bg-navy-950 border-t border-purple-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-purple p-2 rounded-xl shadow-glow">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins text-white">
                Agilio Capital
              </span>
            </Link>
            <p className="text-gray-400 font-inter leading-relaxed mb-6">
              Your trusted partner in navigating complex financial landscapes and achieving strategic business objectives.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/t-m-durai-b913356/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-poppins font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-purple-400 font-inter transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-purple-400 font-inter transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-poppins font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 font-inter">
                  <p>14-1, BTS Main Road</p>
                  <p>Wilson Garden</p>
                  <p>Bangalore, Karnataka 560030</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:agiliocap@gmail.com"
                  className="text-gray-400 hover:text-purple-400 font-inter transition-colors duration-300"
                >
                  agiliocap@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-600/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm">
              © {currentYear} Agilio Capital. All rights reserved.
            </p>
            <p className="text-gray-500 font-inter text-sm mt-4 md:mt-0">
              Investment Banking & Financial Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;