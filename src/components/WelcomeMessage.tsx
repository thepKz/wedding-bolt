import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage: React.FC = () => {
  const [showResponse, setShowResponse] = useState(false);

  const handleResponseClick = () => {
    setShowResponse(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 font-comfortaa leading-relaxed"
        >
          Chào mừng em đến nơi sâu nhất trong tim anh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6 mb-12"
        >
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Nơi đây, mỗi nhịp đập đều thì thầm tên em
          </p>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Nơi đây, mỗi giây phút đều tràn ngập yêu thương dành cho em
          </p>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            Em có muốn ở lại đây, bên anh, mãi mãi không?
          </p>
        </motion.div>

        {!showResponse ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            onClick={handleResponseClick}
            className="response-button px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg"
          >
            Trả lời lời mời
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30"
          >
            <p className="text-xl text-white font-light mb-4">
              💕 Cảm ơn em đã bước vào tim anh 💕
            </p>
            <p className="text-white/90 font-light">
              Từ giây phút này, tim anh sẽ mãi thuộc về em
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default WelcomeMessage;