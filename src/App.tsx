import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeartIcon from './components/HeartIcon';
import WelcomeMessage from './components/WelcomeMessage';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'opening' | 'welcome'>('landing');
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  const handleHeartClick = () => {
    setShowHeartAnimation(true);
    setCurrentStep('opening');
    
    // Transition to welcome screen after heart opening animation
    setTimeout(() => {
      setCurrentStep('welcome');
    }, 2500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {currentStep === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-white via-pastel-pink to-soft-coral flex flex-col items-center justify-center px-6"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <HeartIcon 
                  onClick={handleHeartClick}
                  animate={!showHeartAnimation}
                  showAnimation={showHeartAnimation}
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-600 font-light text-lg md:text-xl font-comfortaa"
              >
                Nhấn nhẹ để bước vào tim anh
              </motion.p>
            </div>
          </motion.div>
        )}

        {currentStep === 'opening' && (
          <motion.div
            key="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-white via-pastel-pink to-soft-coral flex items-center justify-center"
          >
            <HeartIcon 
              onClick={() => {}}
              animate={false}
              showAnimation={true}
              isOpening={true}
            />
          </motion.div>
        )}

        {currentStep === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-gentle-rose via-warm-pink to-soft-coral bokeh-bg relative"
          >
            <FloatingHearts />
            <WelcomeMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;