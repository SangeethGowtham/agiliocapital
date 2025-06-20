import React, { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ url, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let splineApp: any = null;

    const loadSpline = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        // Dynamically import Spline runtime
        const { Application } = await import('@splinetool/runtime');
        
        if (canvasRef.current) {
          splineApp = new Application(canvasRef.current);
          await splineApp.load(url);
          
          // Apply violet theme colors to the scene
          splineApp.addEventListener('start', () => {
            console.log('Spline scene loaded successfully');
            setIsLoading(false);
          });
        }
      } catch (error) {
        console.error('Error loading Spline scene:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadSpline();

    return () => {
      if (splineApp) {
        try {
          splineApp.dispose();
        } catch (error) {
          console.error('Error disposing Spline app:', error);
        }
      }
    };
  }, [url]);

  if (hasError) {
    return (
      <div className={`relative ${className} flex items-center justify-center bg-gradient-to-br from-primary-900/20 to-primary-800/30 rounded-2xl`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
            </svg>
          </div>
          <p className="text-primary-300 font-medium">3D Scene Loading</p>
          <p className="text-dark-500 text-sm mt-1">Interactive content will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900/20 to-primary-800/30 rounded-2xl z-10">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-primary-300 text-sm">Loading 3D Scene...</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default SplineViewer;