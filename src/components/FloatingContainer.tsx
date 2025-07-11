import React from 'react';
import { motion } from 'framer-motion';

interface FloatingContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingContainer: React.FC<FloatingContainerProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div
      className={`
        relative bg-navy-800/60 backdrop-blur-md rounded-2xl px-8 py-6
        shadow-glow border border-purple-600/20 hover:border-purple-400/40
        transition-all duration-500 hover:shadow-glow-lg
        ${className}
      `}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingContainer;