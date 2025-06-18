/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#642c62',
          700: '#5b2c87',
          800: '#4c1d95',
          900: '#3c1361',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        dark: {
          50: '#18181b',
          100: '#27272a',
          200: '#3f3f46',
          300: '#52525b',
          400: '#71717a',
          500: '#a1a1aa',
          600: '#d4d4d8',
          700: '#e4e4e7',
          800: '#f4f4f5',
          900: '#fafafa',
        },
        light: '#f5f7fa',
        linkedin: '#0077b5',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
        'typewriter': 'typewriter 4s steps(60) infinite',
        'counter': 'counter 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'candle': 'candle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
        counter: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 5px #642c62, 0 0 10px #642c62, 0 0 15px #642c62, 0 0 20px #642c62',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6',
            filter: 'brightness(1.2)'
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.2)',
          },
        },
        candle: {
          '0%, 100%': { 
            textShadow: '0 0 5px #642c62, 0 0 10px #8b5cf6, 0 0 15px #a78bfa',
            transform: 'scale(1)'
          },
          '25%': { 
            textShadow: '0 0 8px #642c62, 0 0 15px #8b5cf6, 0 0 25px #a78bfa',
            transform: 'scale(1.02)'
          },
          '50%': { 
            textShadow: '0 0 12px #642c62, 0 0 20px #8b5cf6, 0 0 35px #a78bfa',
            transform: 'scale(1.05)'
          },
          '75%': { 
            textShadow: '0 0 8px #642c62, 0 0 15px #8b5cf6, 0 0 25px #a78bfa',
            transform: 'scale(1.02)'
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1200px',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neumorphic': '20px 20px 60px #1a1a1a, -20px -20px 60px #2a2a2a',
        'neumorphic-inset': 'inset 20px 20px 60px #1a1a1a, inset -20px -20px 60px #2a2a2a',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
};