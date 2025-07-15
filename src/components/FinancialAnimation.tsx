import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FinancialAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for capital flow
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = canvas.offsetHeight + 10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = -Math.random() * 2 - 1;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? '#8B5CF6' : '#EC4899';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.002;

        if (this.y < -10 || this.opacity <= 0) {
          this.x = Math.random() * canvas.offsetWidth;
          this.y = canvas.offsetHeight + 10;
          this.opacity = Math.random() * 0.5 + 0.3;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.01;

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw animated chart lines
      drawAnimatedChart(time);

      animationId = requestAnimationFrame(animate);
    };

    const drawAnimatedChart = (time: number) => {
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      
      // Draw multiple animated lines representing financial growth
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = i === 0 ? '#8B5CF6' : i === 1 ? '#EC4899' : '#A855F7';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.offsetWidth; x += 5) {
          const y = centerY + 
            Math.sin((x * 0.01) + time + (i * 0.5)) * 30 +
            Math.sin((x * 0.005) + time * 0.5 + (i * 0.3)) * 20 -
            (x * 0.1); // Upward trend
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Canvas for particle effects and charts */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ width: '100%', height: '100%' }}
      />

      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        {/* Floating Coins */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`coin-${i}`}
            className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotateY: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
              ₹
            </div>
          </motion.div>
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute w-6 h-6 ${
              i % 3 === 0 ? 'bg-purple-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-indigo-500'
            } ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'} opacity-60`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              x: [-5, 5, -5],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* 3D Chart Bars */}
        <div className="absolute bottom-20 left-1/4 flex items-end space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`bar-${i}`}
              className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg shadow-lg"
              style={{
                width: '12px',
                transformStyle: 'preserve-3d',
              }}
              initial={{ height: '20px' }}
              animate={{
                height: [`${20 + (i * 10)}px`, `${40 + (i * 15)}px`, `${20 + (i * 10)}px`],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Floating Financial Symbols */}
        {['$', '€', '£', '¥'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-2xl font-bold text-purple-400 opacity-40"
            style={{
              left: `${25 + (i * 20)}%`,
              top: `${40 + (i * 5)}%`,
            }}
            animate={{
              y: [-15, -35, -15],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + (i * 0.4),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Growth Arrow */}
        <div className="absolute right-1/4 top-1/3">
          <motion.div
            animate={{
              y: [-10, -20, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              className="text-purple-400 opacity-60"
              style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }}
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
              style={{
                transformOrigin: `${50 + (i * 20)}px 0px`,
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8 + (i * 2),
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Financial Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`connection-${i}`}
              x1={`${20 + (i * 15)}%`}
              y1={`${30 + (i * 8)}%`}
              x2={`${40 + (i * 10)}%`}
              y2={`${50 + (i * 5)}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.5,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FinancialAnimation;