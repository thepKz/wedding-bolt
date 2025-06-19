import React from 'react';
import { motion } from 'framer-motion';

interface InvitationCardProps {
  onNext: () => void;
  onBack: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onNext, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12 text-center hover-scale"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-crimson gradient-text mb-8">
              Lời Mời Cưới
            </h1>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-xl md:text-2xl font-light">
                Chúng tôi rất hân hạnh được mời bạn đến dự
              </p>
              <div className="text-3xl md:text-4xl font-crimson text-white">
                Lễ Thành Hôn
              </div>
              <p className="text-lg">
                của chúng tôi vào ngày đặc biệt này
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card p-8 mb-12 bg-gradient-to-r from-accent/10 to-accent-dark/10"
          >
            <div className="text-2xl font-crimson text-text-secondary mb-2">
              Chủ Nhật
            </div>
            <div className="text-6xl md:text-7xl font-crimson gradient-text mb-2">
              15
            </div>
            <div className="text-xl font-crimson text-text-secondary">
              Tháng 12, 2024
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="modern-button px-8 py-3 rounded-full font-medium"
            >
              ← Quay lại
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="accent-button px-8 py-3 rounded-full text-white font-medium"
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