import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
  variant?: 'primary' | 'outline';
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        'px-10 py-4 rounded-full text-lg font-medium',
        {
          'elegant-button': variant === 'primary',
          'border-2 border-rose-gold text-graphite hover:bg-rose-gold hover:text-white transition-colors duration-300': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 