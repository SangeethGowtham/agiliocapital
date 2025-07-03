import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-50/95 backdrop-blur-md shadow-lg border-b border-primary-600/20' 
          : 'bg-dark-50/90 backdrop-blur-sm'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="ml-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span 
                  className="text-xl font-bold font-poppins"
                  style={{
                    background: 'linear-gradient(45deg, #642c62, #8b5cf6, #a78bfa)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Agilio Capital
                </span>
                <span className="text-sm text-primary-400 -mt-1 font-inter">
                  Funds Progrez
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden desktop:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 ${
                isActiveLink('/') ? 'text-primary-400 font-semibold border-b-2 border-primary-600' : 'text-dark-600 hover:text-primary-400'
              }`}
              style={{ fontSize: '16px' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 ${
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
              <button className="flex items-center font-inter text-dark-600 hover:text-primary-400 transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1" style={{ fontSize: '16px' }}>
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-dark-100/95 backdrop-blur-md rounded-lg shadow-xl border border-primary-600/20 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm font-inter text-dark-600 hover:bg-primary-600/10 hover:text-primary-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`font-inter transition-all duration-300 hover:border-b-2 hover:border-primary-600 pb-1 ${
                isActiveLink('/contact') ? 'text-primary-400 font-semibold border-b-2 border-primary-600' : 'text-dark-600 hover:text-primary-400'
              }`}
              style={{ fontSize: '16px' }}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-primary-700 transition-colors duration-300 shadow-glow hover:shadow-glow-lg"
            >
              Get Started
            </Link>
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
        {isMenuOpen && (
          <div className="desktop:hidden py-4 border-t border-primary-600/20 bg-dark-100/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
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
                className="bg-primary-600 text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-primary-700 transition-colors duration-300 w-fit shadow-glow"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;