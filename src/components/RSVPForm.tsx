import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RSVPFormProps {
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ onNext, onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.attendance) {
      onSubmit();
    }
  };

  const attendanceOptions = [
    { value: 'both', label: 'Tham dự cả hai buổi', icon: '✨' },
    { value: 'ceremony', label: 'Chỉ tham dự lễ thành hôn', icon: '⛪' },
    { value: 'reception', label: 'Chỉ tham dự tiệc cưới', icon: '🥂' },
    { value: 'no', label: 'Rất tiếc không thể tham dự', icon: '💔' },
  ];

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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-crimson gradient-text mb-4">
            Xác Nhận Tham Dự
          </h1>
          <p className="text-lg text-text-secondary">
            Vui lòng cho chúng tôi biết bạn có thể tham dự không
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          <div>
            <label className="block text-white font-medium mb-3">
              Họ và tên *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 rounded-xl form-input text-white placeholder-text-muted"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-3">
              Số lượng khách
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full p-4 rounded-xl form-input text-white"
            >
              <option value="1">1 người</option>
              <option value="2">2 người</option>
              <option value="3">3 người</option>
              <option value="4">4 người</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-3">
              Tham dự *
            </label>
            <div className="space-y-3">
              {attendanceOptions.map((option) => (
                <motion.label
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 rounded-xl form-input cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={formData.attendance === option.value}
                    onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                    className="mr-4 accent-accent"
                  />
                  <span className="text-xl mr-3">{option.icon}</span>
                  <span className="text-white">{option.label}</span>
                </motion.label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-3">
              Lời chúc (tùy chọn)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full p-4 rounded-xl form-input text-white placeholder-text-muted resize-none"
              placeholder="Gửi lời chúc đến cô dâu chú rể..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="modern-button px-8 py-3 rounded-full font-medium"
            >
              ← Quay lại
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 accent-button px-8 py-3 rounded-full text-white font-medium"
            >
              Gửi xác nhận
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default RSVPForm;