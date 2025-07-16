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
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-2xl border border-purple-600/30' 
          : 'bg-navy-950/70 backdrop-blur-lg border border-purple-600/20'
      }`}
      style={{ 
        height: '72px',
        borderRadius: '24px',
        boxShadow: isScrolled 
          ? '0 20px 40px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1)'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <motion.span 
                className="text-2xl font-bold font-poppins text-white text-shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Agilio Capital
              </motion.span>
              <motion.span 
                className="text-sm -mt-1 font-inter text-purple-400 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                Funds.Progrez^
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 relative ${
                isActiveLink('/') ? 'text-purple-400' : 'text-gray-200'
              }`}
            >
              Home
              {isActiveLink('/') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-magenta-400 rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            <Link
              to="/about"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 relative ${
                isActiveLink('/about') ? 'text-purple-400' : 'text-gray-200'
              }`}
            >
              About Us
              {isActiveLink('/about') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-magenta-400 rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center font-inter font-medium text-gray-200 hover:text-purple-400 transition-all duration-300 pb-1">
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4 ml-1" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-4 w-80 bg-navy-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-600/30 py-3 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1)'
                    }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={service.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={service.path}
                          className="block px-6 py-3 text-sm font-inter text-gray-200 hover:bg-purple-600/10 hover:text-purple-400 transition-all duration-300 relative group"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`font-inter font-medium transition-all duration-300 hover:text-purple-400 pb-1 relative ${
                isActiveLink('/contact') ? 'text-purple-400' : 'text-gray-200'
              }`}
            >
              Contact
              {isActiveLink('/contact') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-magenta-400 rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>

            {/* Get Started Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden text-gray-200 p-2 rounded-full bg-navy-800/50 backdrop-blur-sm border border-purple-600/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-navy-950/95 backdrop-blur-xl border border-purple-600/30 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
              }}
            >
              <div className="flex flex-col space-y-2 px-6 py-6">
                <Link
                  to="/"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                <div className="pl-4 border-l border-purple-600/30">
                  <div className="font-poppins text-purple-400 font-semibold mb-2 px-4">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 px-4 text-sm font-inter text-gray-300 hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-purple-600/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="font-inter text-gray-200 hover:text-purple-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-magenta-600 text-white px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 text-center mt-4 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                  }}
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