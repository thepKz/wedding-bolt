import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onEnterAlbum: () => void;
  onViewStory: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnterAlbum, onViewStory }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dusty-pink to-champagne rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-dusty-pink to-champagne rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-ivory">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                        fill="currentColor"/>
                </svg>
              </div>
            </motion.div>
          </div>

          <h1 className="hero-text font-playfair text-gradient mb-6">
            Minh & Hương
          </h1>
          
          <div className="elegant-divider max-w-xs mx-auto"></div>
          
          <p className="subtitle-text text-pale-slate font-light mb-4">
            Wedding Album
          </p>
          
          <p className="text-lg text-pale-slate/80 font-light max-w-2xl mx-auto leading-relaxed">
            Chúng tôi muốn chia sẻ những khoảnh khắc đẹp nhất trong hành trình yêu thương của chúng tôi
          </p>
        </motion.div>

        {/* Date Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-8 rounded-3xl mb-12 inline-block"
        >
          <div className="text-sm text-pale-slate/70 font-medium tracking-wider uppercase mb-2">
            Save the Date
          </div>
          <div className="text-4xl font-playfair text-gradient mb-2">
            15.12.2024
          </div>
          <div className="text-pale-slate/80">
            Sài Gòn, Việt Nam
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnterAlbum}
            className="elegant-button px-10 py-4 rounded-full text-lg font-medium"
          >
            Xem Album Ảnh
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewStory}
            className="px-10 py-4 rounded-full text-lg font-medium border-2 border-dusty-pink text-pale-slate hover:bg-dusty-pink/10 transition-all duration-300"
          >
            Câu Chuyện Tình Yêu
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;