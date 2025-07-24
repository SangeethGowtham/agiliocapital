import React, { Suspense, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SplineWorldProps {
  className?: string;
  asBackground?: boolean;
}

const SplineWorld: React.FC<SplineWorldProps> = ({ className = '', asBackground = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.35/build/spline-viewer.js';
    document.head.appendChild(script);

    script.onload = () => {
      // Script loaded, create spline viewer
      createSplineViewer();
    };

    script.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const createSplineViewer = () => {
    if (!containerRef.current) return;

    // Set a timeout to catch loading failures
    const loadingTimeout = setTimeout(() => {
      setHasError(true);
      setIsLoading(false);
    }, 10000); // 10 second timeout

    const splineViewer = document.createElement('spline-viewer');
    splineViewer.setAttribute('url', 'https://my.spline.design/worldplanet-H8seS5zFIrQvutU4UC6p7WlH/');
    splineViewer.setAttribute('loading-anim-type', 'spinner-small-dark');
    splineViewer.setAttribute('disable-zoom', 'true');
    splineViewer.setAttribute('camera-controls', 'orbit-only');
    
    // Apply styles directly
    splineViewer.style.width = '100%';
    splineViewer.style.height = '100%';
    splineViewer.style.background = 'transparent';
    splineViewer.style.border = 'none';
    splineViewer.style.outline = 'none';
    splineViewer.style.cursor = asBackground ? 'default' : 'grab';
    splineViewer.style.pointerEvents = asBackground ? 'none' : 'auto';

    // Handle loading and error events
    splineViewer.addEventListener('load', () => {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
      
      // Additional interaction controls
      const canvas = splineViewer.shadowRoot?.querySelector('canvas');
      if (canvas) {
        // Prevent zoom with mouse wheel
        canvas.addEventListener('wheel', (e) => {
          e.preventDefault();
          e.stopPropagation();
        }, { passive: false });
      }
    });

    splineViewer.addEventListener('error', () => {
      clearTimeout(loadingTimeout);
      setHasError(true);
      setIsLoading(false);
    });

    // Listen for specific Spline errors
    window.addEventListener('error', (event) => {
      if (event.message && event.message.includes('Data read, but end of buffer not reached')) {
        clearTimeout(loadingTimeout);
        setHasError(true);
        setIsLoading(false);
      }
    });
    // Handle cursor states
    splineViewer.addEventListener('mousedown', () => {
      splineViewer.style.cursor = 'grabbing';
    });

    splineViewer.addEventListener('mouseup', () => {
      splineViewer.style.cursor = 'grab';
    });

    splineViewer.addEventListener('mouseleave', () => {
      splineViewer.style.cursor = 'grab';
    });

    containerRef.current.appendChild(splineViewer);
  };

  const containerStyle = asBackground ? {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none' as const,
  } : {};

  // Fallback component for errors
  const FallbackPlanet = () => (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${asBackground ? 'opacity-30' : ''}`}>
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
    </div>
  );

  // Loading component
  const LoadingSpinner = () => (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-purple-300 font-inter text-sm">Loading...</p>
    </div>
  );

  return (
    <div 
      className={`spline-container ${className}`}
      style={containerStyle}
    >
      {/* Loading State */}
      {isLoading && (
        <div className={`absolute inset-0 z-10 ${asBackground ? 'opacity-50' : ''}`}>
          <LoadingSpinner />
        </div>
      )}

      {/* Error State or Fallback */}
      {hasError ? (
        <FallbackPlanet />
      ) : (
        <div 
          ref={containerRef}
          className={`w-full h-full ${asBackground ? 'opacity-80' : ''}`}
          style={{ background: 'transparent' }}
        />
      )}
    </div>
  );
};

export default SplineWorld;