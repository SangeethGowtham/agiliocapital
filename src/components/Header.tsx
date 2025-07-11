import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'Seed & Angel Funding', path: '/services/seed-angel-funding' },
    { name: 'Corporate Finance & Debt Advisory', path: '/services/corporate-finance' },
    { name: 'Loan & Debt Syndication', path: '/services/loan-debt-syndication' },
    { name: 'Structured Finance', path: '/services/structured-finance' },
    { name: 'Strategic Partnerships', path: '/services/strategic-partnerships' },
    { name: 'CFO Services', path: '/services/cfo-services' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl border-b border-purple-600/20' 
          : 'bg-navy-950/80 backdrop-blur-lg'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold font-poppins text-white"
                whileHover={{ scale: 1.05 }}
              >
                Agilio Capital
              </motion.span>
              <motion.span 
                className="text-sm -mt-1 font-inter text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                Funds Progrez
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 ${
                isActiveLink('/') ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-200 hover:border-b-2 hover:border-purple-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 ${
                isActiveLink('/about') ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-200 hover:border-b-2 hover:border-purple-400'
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center font-inter font-medium text-gray-200 hover:text-purple-400 transition-all duration-300 pb-1">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-navy-900/95 backdrop-blur-md rounded-xl shadow-glow border border-purple-600/20 py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-6 py-3 text-sm font-inter text-gray-200 hover:bg-purple-600/10 hover:text-purple-400 transition-colors duration-300"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 ${
                isActiveLink('/contact') ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-200 hover:border-b-2 hover:border-purple-400'
              }`}
            >
              Contact
            </Link>

            {/* Get Started Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-purple text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-navy-950/95 backdrop-blur-md border-t border-purple-600/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col space-y-4 px-6 py-6">
                <Link
                  to="/"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <div className="pl-4">
                  <div className="font-poppins text-purple-400 font-semibold mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-sm font-inter text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  className="bg-gradient-purple text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 shadow-glow text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;