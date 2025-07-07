import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900 text-white py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main content */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hearts decoration */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <span className="text-3xl">💕</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </div>

          {/* Thank you message */}
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Cảm Ơn Bạn
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Tình yêu không chỉ là hai người, mà là cả một cộng đồng những người thân yêu.
            Cảm ơn bạn đã là một phần trong câu chuyện tình yêu của chúng tôi! 💖
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Bride contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20">
            <div className="text-4xl mb-4">👰‍♀️</div>
            <h3 className="text-2xl font-serif mb-3 text-rose-300">Cô Dâu - Tình Yêu</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 0123 456 789</p>
              <p>✉️ tinhyeu@wedding.com</p>
            </div>
          </div>

          {/* Groom contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20">
            <div className="text-4xl mb-4">🤵‍♂️</div>
            <h3 className="text-2xl font-serif mb-3 text-blue-300">Chú Rể - Bân Đô</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 0987 654 321</p>
              <p>✉️ bando@wedding.com</p>
            </div>
          </div>
        </motion.div>

        {/* Wedding details reminder */}
        <motion.div
          className="bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-serif mb-4 text-rose-300">Nhắc Nhở Quan Trọng</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="text-2xl mb-2">📅</div>
              <p className="font-medium">Ngày</p>
              <p>Chủ Nhật, 15/6/2025</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <p className="font-medium">Thời gian</p>
              <p>10:00 AM</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className="font-medium">Địa điểm</p>
              <p>Nhà hàng Hạnh Phúc</p>
            </div>
          </div>
        </motion.div>

        {/* Social media & sharing */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-xl font-serif mb-4 text-gray-300">Chia Sẻ Niềm Vui</h3>
          <div className="flex justify-center gap-4">
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">📱</span>
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">💌</span>
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl">📷</span>
            </motion.button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Hashtag: #BanDoTinhYeu2025 #WeddingDay #LoveStory
          </p>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-2xl">🌟</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          
          <p className="text-gray-400 text-sm">
            "Tình yêu là hành trình đẹp nhất mà chúng ta có thể chia sẻ cùng nhau"
          </p>
          
          <div className="mt-6 text-xs text-gray-500">
            <p>© 2025 Bân Đô & Tình Yêu Wedding Invitation</p>
            <p>Made with 💖 for our special day</p>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 15 + 10}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            💝
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer; 