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
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-dark-100/90 backdrop-blur-xl shadow-2xl border border-primary-600/30' 
          : 'bg-dark-100/70 backdrop-blur-lg border border-primary-600/20'
      } rounded-2xl hover:backdrop-blur-xl hover:bg-dark-100/95`}
      style={{ height: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <motion.span 
                className="text-xl font-bold font-poppins animate-candle"
                style={{ color: '#221161' }}
              >
                Agilio Capital
              </motion.span>
              <motion.span 
                className="text-sm -mt-1 font-inter"
                style={{ color: '#221161' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                Funds Progrez
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden desktop:flex items-center space-x-10">
            <Link
              to="/"
              className={`font-inter transition-all duration-300 ease-in-out hover:border-b-2 hover:border-primary-600 pb-1 ${
                isActiveLink('/') ? 'text-primary-400 font-semibold border-b-2 border-primary-600' : 'text-dark-600 hover:text-primary-400'
              }`}
              style={{ fontSize: '16px' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-inter transition-all duration-300 ease-in-out hover:border-b-2 hover:border-primary-600 pb-1 ${
                isActiveLink('/about') ? 'text-primary-400 font-semibold border-b-2 border-primary-600' : 'text-dark-600 hover:text-primary-400'
              }`}
              style={{ fontSize: '16px' }}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center font-inter text-dark-600 hover:text-primary-400 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-primary-600 pb-1" style={{ fontSize: '16px' }}>
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-72 bg-dark-100/95 backdrop-blur-md rounded-lg shadow-xl border border-primary-600/20 py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm font-inter text-dark-600 hover:bg-primary-600/10 hover:text-primary-400 transition-colors duration-300"
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
              className={`font-inter transition-all duration-300 ease-in-out hover:border-b-2 hover:border-primary-600 pb-1 ${
                isActiveLink('/contact') ? 'text-primary-400 font-semibold border-b-2 border-primary-600' : 'text-dark-600 hover:text-primary-400'
              }`}
              style={{ fontSize: '16px' }}
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
                className="px-6 py-2 rounded-full font-poppins font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#221161' }}
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="desktop:hidden text-dark-600"
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
              className="desktop:hidden py-4 border-t border-primary-600/20 bg-dark-100/95 backdrop-blur-md rounded-b-2xl mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col space-y-4 px-4">
                <Link
                  to="/"
                  className="font-inter text-dark-600 hover:text-primary-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="font-inter text-dark-600 hover:text-primary-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <div className="pl-4">
                  <div className="font-poppins text-dark-700 font-semibold mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-sm font-inter text-dark-500 hover:text-primary-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="font-inter text-dark-600 hover:text-primary-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-full font-poppins font-semibold text-white transition-all duration-300 shadow-lg text-center"
                  style={{ backgroundColor: '#221161' }}
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