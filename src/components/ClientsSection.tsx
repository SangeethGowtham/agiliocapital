import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'MSM Microfinance', logo: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Unnatti Finserv', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Virutcham Microfinance', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Swara Fincare', logo: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'Shiksha Finance', logo: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800/50 via-blue-800/30 to-purple-800/50 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <p className="font-inter text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by leading financial institutions across the industry
          </p>
        </motion.div>

        {/* Sliding Logos Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-800 via-slate-800/50 to-transparent pointer-events-none z-10"></div>
          
          <motion.div 
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -100 * clients.length * 8]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ width: `${250 * duplicatedClients.length}px` }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-56 h-32 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-all duration-300 cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                }}
                style={{
                  filter: 'grayscale(100%)',
                }}
                onHoverStart={() => {
                  // Remove grayscale on hover
                }}
                onHoverEnd={() => {
                  // Add grayscale back
                }}
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center border border-white/10">
                    <span className="text-white font-bold text-xl">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white font-inter font-medium text-sm group-hover:text-blue-200 transition-colors">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-poppins font-bold text-blue-300 mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium font-inter">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;