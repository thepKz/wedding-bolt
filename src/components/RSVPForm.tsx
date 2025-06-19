import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RSVPFormProps {
  onNext: () => void;
  onBack: () => void;
  onCelebrate: () => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ onNext, onBack, onCelebrate }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.attendance) {
      onCelebrate();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-great-vibes text-gold mb-4 text-shadow-gold">
            Xác Nhận Tham Dự
          </h1>
          <p className="text-lg text-navy font-montserrat">
            Vui lòng cho chúng tôi biết bạn có thể tham dự không
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="glass-effect p-8 rounded-3xl golden-border space-y-6"
        >
          <div>
            <label className="block text-burgundy font-semibold mb-2">
              Họ và tên *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-xl border-2 border-champagne focus:border-gold outline-none transition-colors bg-white/80"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div>
            <label className="block text-burgundy font-semibold mb-2">
              Số lượng khách
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full p-4 rounded-xl border-2 border-champagne focus:border-gold outline-none transition-colors bg-white/80"
            >
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="4">4 người</option>
            </select>
          </div>

          <div>
            <label className="block text-burgundy font-semibold mb-2">
              Tham dự *
            </label>
            <div className="space-y-3">
              {[
                { value: 'both', label: '✨ Tham dự cả hai buổi', icon: '💒🍽️' },
                { value: 'ceremony', label: '⛪ Chỉ tham dự lễ thành hôn', icon: '💒' },
                { value: 'reception', label: '🍽️ Chỉ tham dự tiệc cưới', icon: '🍽️' },
                { value: 'no', label: '😢 Rất tiếc không thể tham dự', icon: '💔' },
              ].map((option) => (
                <motion.label
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 rounded-xl border-2 border-champagne hover:border-gold cursor-pointer transition-colors bg-white/60"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={formData.attendance === option.value}
                    onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                    className="mr-4"
                  />
                  <span className="text-2xl mr-3">{option.icon}</span>
                  <span className="text-navy font-medium">{option.label}</span>
                </motion.label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-burgundy font-semibold mb-2">
              Lời chúc (tùy chọn)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-4 rounded-xl border-2 border-champagne focus:border-gold outline-none transition-colors bg-white/80 resize-none"
              placeholder="Gửi lời chúc đến cô dâu chú rể..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              ← Quay lại
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-8 py-3 bg-gradient-to-r from-gold to-rose-gold text-white font-semibold rounded-full hover-lift sparkle-effect"
            >
              Gửi xác nhận 💕
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default RSVPForm;