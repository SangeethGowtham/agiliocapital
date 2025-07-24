import React, { Suspense, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SplineWorldProps {
  className?: string;
}

const SplineWorld: React.FC<SplineWorldProps> = ({ className = '' }) => {
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
    }, 15000); // 15 second timeout for better loading

    const splineViewer = document.createElement('spline-viewer');
    // Updated to use the new globe scene URL
    splineViewer.setAttribute('url', 'https://prod.spline.design/5F5tfZbS0cAiHyEa/scene.splinecode');
    splineViewer.setAttribute('loading-anim-type', 'spinner-small-dark');
    splineViewer.setAttribute('disable-zoom', 'true');
    splineViewer.setAttribute('camera-controls', 'orbit-only');
    
    // Apply styles directly for seamless integration
    splineViewer.style.width = '100%';
    splineViewer.style.height = '100%';
    splineViewer.style.background = 'transparent';
    splineViewer.style.border = 'none';
    splineViewer.style.outline = 'none';
    splineViewer.style.cursor = 'grab';

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

    // Listen for specific Spline errors including data corruption
    window.addEventListener('error', (event) => {
      if (event.message && (
        event.message.includes('Data read, but end of buffer not reached') ||
        event.message.includes('spline') ||
        event.message.includes('viewer')
      )) {
        clearTimeout(loadingTimeout);
        setHasError(true);
        setIsLoading(false);
      }
    });

    // Handle cursor states for better UX
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

  // Enhanced fallback component with purple globe design
  const FallbackGlobe = () => (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Main Globe */}
      <motion.div
        className="relative"
        style={{ width: '280px', height: '280px' }}
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Globe Base */}
        <div className="w-full h-full bg-gradient-to-br from-purple-500 via-purple-600 to-magenta-600 rounded-full shadow-glow-lg relative overflow-hidden">
          {/* Globe Surface Details */}
          <div className="absolute inset-4 bg-gradient-to-br from-purple-400/70 to-magenta-500/70 rounded-full"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-purple-300/50 to-magenta-400/50 rounded-full"></div>
          
          {/* Continent Outlines */}
          <div className="absolute top-1/4 left-1/3 w-8 h-6 bg-purple-300/30 rounded-lg transform rotate-12"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-8 bg-purple-300/30 rounded-lg transform -rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-10 h-4 bg-purple-300/30 rounded-lg transform rotate-45"></div>
          
          {/* Energy Lines */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-300/20"></div>
          <div className="absolute inset-2 rounded-full border border-purple-300/15"></div>
        </div>
        
        {/* Orbital Rings */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
          style={{ transform: 'scale(1.3) rotateX(75deg)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border border-magenta-400/20 rounded-full"
          style={{ transform: 'scale(1.5) rotateX(60deg)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
          style={{
            left: `${20 + (i * 6)}%`,
            top: `${30 + (i * 4)}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
        />
      ))}
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
      <p className="text-purple-300 font-inter text-sm">Loading 3D Globe...</p>
    </div>
  );

  return (
    <div className={`spline-container ${className}`}>
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <LoadingSpinner />
        </div>
      )}

      {/* Error State or Fallback */}
      {hasError ? (
        <FallbackGlobe />
      ) : (
        <div 
          ref={containerRef}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
      )}
    </div>
  );
};

export default SplineWorld;