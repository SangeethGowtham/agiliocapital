import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  const clients = [
    { 
      name: 'Swara Fincare', 
      initials: 'SF',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Virutcham Microfinance', 
      initials: 'VM',
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Sugmya Finance', 
      initials: 'SF',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      name: 'MSM Microfinance', 
      initials: 'MM',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Janakalyan', 
      initials: 'JK',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Unnatti Finserv', 
      initials: 'UF',
      color: 'from-teal-500 to-teal-600'
    },
    { 
      name: 'Shiksha Finance', 
      initials: 'SF',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      name: 'Dhanalakshmi', 
      initials: 'DL',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-magenta-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            We're proud to partner with innovative companies across the financial services sector
          </p>
        </motion.div>

        {/* Sliding Logos Container */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-12"
            animate={{
              x: [0, -100 * clients.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: `${200 * duplicatedClients.length}px` }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-navy-800/60 backdrop-blur-sm rounded-2xl border border-purple-600/20 flex flex-col items-center justify-center group hover:bg-navy-700/60 hover:border-purple-400/40 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center p-4">
                  {/* Professional Logo Placeholder */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl font-poppins">
                      {client.initials}
                    </span>
                  </div>
                  <span className="text-white font-inter font-medium text-sm group-hover:text-purple-200 transition-colors leading-tight">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-navy-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-navy-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Stats below clients */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: '8+', label: 'Active Clients' },
            { number: '₹1000Cr+', label: 'Funds Mobilized' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-600/20 hover:border-purple-400/30 transition-all duration-300">
              <div className="text-3xl font-poppins font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium font-inter">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;