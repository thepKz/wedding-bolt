import React from 'react';
import { motion } from 'framer-motion';

interface InvitationCardProps {
  onNext: () => void;
  onBack: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onNext, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 90 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="wedding-card p-12 rounded-3xl golden-border text-center"
        >
          {/* Ornamental Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="text-6xl ornament mb-4">❦</div>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-great-vibes text-burgundy mb-6">
              Minh & Hương
            </h1>
            
            <div className="text-2xl md:text-3xl font-dancing text-deep-rose mb-6">
              Trân trọng kính mời
            </div>
            
            <div className="text-lg md:text-xl font-montserrat text-navy mb-8 leading-relaxed">
              <p className="mb-4">
                Chúng tôi rất hân hạnh được mời bạn đến dự
              </p>
              <p className="text-2xl font-semibold text-burgundy mb-4">
                LỄ CƯỚI
              </p>
              <p>
                của chúng tôi vào ngày đặc biệt này
              </p>
            </div>

            <div className="bg-gradient-to-r from-champagne to-blush p-6 rounded-2xl mb-8">
              <div className="text-3xl md:text-4xl font-dancing text-burgundy mb-2">
                Chủ Nhật
              </div>
              <div className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-2">
                15
              </div>
              <div className="text-2xl md:text-3xl font-dancing text-burgundy">
                Tháng 12, 2024
              </div>
            </div>
          </motion.div>

          {/* Ornamental Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8"
          >
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
            <div className="text-6xl ornament">❦</div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              ← Quay lại
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="px-8 py-3 bg-gradient-to-r from-gold to-rose-gold text-white font-semibold rounded-full hover-lift"
            >
              Xem chi tiết →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InvitationCard;