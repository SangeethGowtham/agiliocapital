import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '#',
      submenu: [
        { name: 'Seed & Angel Funding', href: '/services/seed-angel-funding' },
        { name: 'Private Equity & VC', href: '/services/corporate-finance' },
        { name: 'Debt Solutions', href: '/services/loan-debt-syndication' },
        { name: 'Structured Finance', href: '/services/structured-finance' },
        { name: 'Strategic Partnerships', href: '/services/strategic-partnerships' },
        { name: 'CFO Services', href: '/services/cfo-services' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-purple-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-purple p-2 rounded-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <motion.span 
              className="text-2xl font-bold font-poppins text-white text-shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Agilio Capital
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="text-gray-300 hover:text-white font-inter font-medium transition-colors duration-300 py-2">
                      {item.name}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-navy-800/95 backdrop-blur-md rounded-xl shadow-glow border border-purple-600/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/10 transition-colors duration-300 font-inter"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-300 hover:text-white font-inter font-medium transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-purple-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-purple-600/20"
          >
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <div className="text-gray-300 font-inter font-medium py-2 px-4">
                      {item.name}
                    </div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block text-gray-400 hover:text-white py-2 px-8 transition-colors duration-300 font-inter"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-gray-300 hover:text-white py-2 px-4 transition-colors duration-300 font-inter"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;