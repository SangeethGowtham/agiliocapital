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
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
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
        light: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fafafa',
          500: '#f8f8f8',
          600: '#f5f5f5',
          700: '#f0f0f0',
          800: '#e8e8e8',
          900: '#e0e0e0',
        },
        dark: {
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
            textShadow: '0 0 5px #9333ea, 0 0 10px #9333ea, 0 0 15px #9333ea, 0 0 20px #9333ea',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 30px #9333ea, 0 0 40px #9333ea',
            filter: 'brightness(1.2)'
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.2)',
          },
        },
        candle: {
          '0%, 100%': { 
            textShadow: '0 0 5px #9333ea, 0 0 10px #9333ea, 0 0 15px #9333ea',
            transform: 'scale(1)'
          },
          '25%': { 
            textShadow: '0 0 8px #9333ea, 0 0 15px #9333ea, 0 0 25px #9333ea',
            transform: 'scale(1.02)'
          },
          '50%': { 
            textShadow: '0 0 12px #9333ea, 0 0 20px #9333ea, 0 0 35px #9333ea',
            transform: 'scale(1.05)'
          },
          '75%': { 
            textShadow: '0 0 8px #9333ea, 0 0 15px #9333ea, 0 0 25px #9333ea',
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
        'neumorphic': '0 8px 32px rgba(147, 51, 234, 0.12)',
        'neumorphic-inset': 'inset 0 2px 4px rgba(147, 51, 234, 0.06)',
        'glow': '0 0 20px rgba(147, 51, 234, 0.3)',
        'glow-lg': '0 0 40px rgba(147, 51, 234, 0.4)',
      },
    },
  },
  plugins: [],
};