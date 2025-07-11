import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'Unnatti Finserv', logo: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Swara Fincare', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Virutcham Microfinance', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Sugmya Finance', logo: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'MSM Microfinance', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Janakalyan', logo: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Shiksha Finance', logo: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Dhanalakshmi', logo: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-dark-100/30 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-primary-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-primary-300 mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="font-inter text-xl text-dark-500 max-w-3xl mx-auto">
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
                className="flex-shrink-0 w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-primary-600/20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-primary-400 font-bold text-lg">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-primary-300 font-inter font-medium text-sm group-hover:text-primary-200 transition-colors">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark-50 to-transparent pointer-events-none"></div>
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
            { number: '25+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-dark-100/50 backdrop-blur-sm p-6 rounded-xl border border-primary-600/20">
              <div className="text-3xl font-poppins font-bold text-primary-400 mb-2">{stat.number}</div>
              <div className="text-dark-500 font-medium font-inter">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;