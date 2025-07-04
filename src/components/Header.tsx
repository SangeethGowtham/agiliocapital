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
      setIsScrolled(window.scrollY > 50);
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={{ height: '80px' }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo with Enhanced Glow Animation */}
          <motion.div
            className="ml-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold font-poppins animate-candle"
                  style={{
                    background: 'linear-gradient(45deg, #642c62, #8b5cf6, #a78bfa)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))',
                  }}
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(139, 92, 246, 0.5)',
                      '0 0 15px rgba(139, 92, 246, 0.8)',
                      '0 0 5px rgba(139, 92, 246, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  Agilio Capital
                </motion.span>
                <motion.span 
                  className="text-sm text-primary-600 -mt-1 font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Funds Progrez
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Enhanced Styling */}
          <nav className="hidden desktop:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 relative ${
                  isActiveLink('/') ? 'text-primary-600 font-semibold border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
                style={{ fontSize: '16px' }}
              >
                Home
                {isActiveLink('/') && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 relative ${
                  isActiveLink('/about') ? 'text-primary-600 font-semibold border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
                style={{ fontSize: '16px' }}
              >
                About Us
                {isActiveLink('/about') && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            
            {/* Enhanced Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button 
                className="flex items-center font-inter text-gray-700 hover:text-primary-600 transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1" 
                style={{ fontSize: '16px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4 ml-1" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 py-2"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={service.path}
                          className="block px-4 py-3 text-sm font-inter text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300 rounded-md mx-2"
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 relative ${
                  isActiveLink('/contact') ? 'text-primary-600 font-semibold border-b-2 border-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
                style={{ fontSize: '16px' }}
              >
                Contact
                {isActiveLink('/contact') && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full font-inter font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="desktop:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="desktop:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="font-inter text-gray-700 hover:text-primary-600 transition-colors duration-300 block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="font-poppins text-gray-800 font-semibold mb-2">Services</div>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                    >
                      <Link
                        to={service.path}
                        className="block py-2 text-sm font-inter text-gray-600 hover:text-primary-600 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full font-inter font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 w-fit shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;