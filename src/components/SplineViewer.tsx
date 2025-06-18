import React, { useEffect, useRef } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ url, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let splineApp: any = null;

    const loadSpline = async () => {
      try {
        // Dynamically import Spline runtime
        const { Application } = await import('@splinetool/runtime');
        
        if (canvasRef.current) {
          splineApp = new Application(canvasRef.current);
          await splineApp.load(url);
          
          // Apply violet theme colors to the scene
          splineApp.addEventListener('start', () => {
            // You can customize the scene colors here if needed
            console.log('Spline scene loaded successfully');
          });
        }
      } catch (error) {
        console.error('Error loading Spline scene:', error);
      }
    };

    loadSpline();

    return () => {
      if (splineApp) {
        splineApp.dispose();
      }
    };
  }, [url]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-2xl"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default SplineViewer;