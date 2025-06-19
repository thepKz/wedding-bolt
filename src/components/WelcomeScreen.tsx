import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="mb-12"
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-accent to-accent-dark rounded-full flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                      fill="currentColor"/>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-crimson gradient-text mb-6 text-shadow">
            Minh & Hương
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-text-secondary font-light">
            Trân trọng kính mời
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="glass-card p-8 inline-block">
            <div className="text-4xl md:text-5xl font-crimson text-white mb-2">
              15
            </div>
            <div className="text-lg text-text-secondary">
              Tháng 12, 2024
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="accent-button px-12 py-4 rounded-full text-white font-medium text-lg"
          >
            Xem lời mời
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;