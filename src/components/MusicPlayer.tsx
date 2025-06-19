import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you would control audio playback here
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed top-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="w-14 h-14 bg-gradient-to-r from-gold to-rose-gold rounded-full flex items-center justify-center text-white text-xl shadow-lg hover-lift"
      >
        {isPlaying ? '⏸️' : '🎵'}
      </motion.button>
      
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 right-0 glass-effect p-3 rounded-xl text-sm text-navy whitespace-nowrap"
        >
          🎶 Perfect - Ed Sheeran
        </motion.div>
      )}
    </motion.div>
  );
};

export default MusicPlayer;