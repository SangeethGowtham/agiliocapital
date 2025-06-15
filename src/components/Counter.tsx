import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', className = '' }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCounter({ end, duration, isActive: isIntersecting });

  return (
    <motion.div
      ref={ref}
      className={`font-poppins font-bold ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isIntersecting ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default Counter;