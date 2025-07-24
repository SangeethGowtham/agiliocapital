import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

interface SplineWorldProps {
  className?: string;
}

const SplineWorld: React.FC<SplineWorldProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Fallback component for errors or unsupported browsers
  const FallbackPlanet = () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-magenta-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-magenta-600/10 animate-pulse"></div>
      <motion.div
        className="w-48 h-48 bg-gradient-to-br from-purple-500 to-magenta-500 rounded-full shadow-glow-lg relative"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="absolute inset-4 bg-gradient-to-br from-purple-400 to-magenta-400 rounded-full opacity-70"></div>
        <div className="absolute inset-8 bg-gradient-to-br from-purple-300 to-magenta-300 rounded-full opacity-50"></div>
        
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
          style={{ transform: 'scale(1.3)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border border-magenta-400/20 rounded-full"
          style={{ transform: 'scale(1.5)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i * 5)}%`,
          }}
          animate={{
            y: [-20, -40, -20],
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
  );

  // Loading component
  const LoadingSpinner = () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-600/10 to-magenta-600/10 rounded-2xl flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-purple-300 font-inter text-sm">Loading Global Financial Network...</p>
    </div>
  );

  return (
    <div className={`spline-container relative ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <LoadingSpinner />
        </div>
      )}

      {/* Error State or Fallback */}
      {hasError ? (
        <FallbackPlanet />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/sQxrVJl4MtWx-tDN/scene.splinecode"
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '16px',
              }}
            />
          </div>
        </Suspense>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-magenta-600/20 rounded-2xl blur-xl"></div>
    </div>
  );
};

export default SplineWorld;