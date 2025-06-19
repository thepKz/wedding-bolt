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
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
          className="mb-8"
        >
          <div className="text-9xl md:text-[12rem] animate-pulse-gold">
            💒
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-great-vibes text-gold mb-6 text-shadow-gold"
        >
          Wedding Invitation
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-dancing text-burgundy mb-4">
            Chúng tôi trân trọng mời bạn
          </p>
          <p className="text-lg md:text-xl font-montserrat text-navy opacity-80">
            Đến dự lễ cưới của chúng tôi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-12 py-4 bg-gradient-to-r from-gold via-rose-gold to-gold text-white font-semibold text-lg rounded-full shadow-lg hover-lift sparkle-effect"
          >
            Mở thiệp mời ✨
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center space-x-8 text-4xl"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌹
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            💕
          </motion.span>
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            🌹
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;