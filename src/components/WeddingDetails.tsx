import React from 'react';
import { motion } from 'framer-motion';

interface WeddingDetailsProps {
  onNext: () => void;
  onBack: () => void;
}

const WeddingDetails: React.FC<WeddingDetailsProps> = ({ onNext, onBack }) => {
  const events = [
    {
      title: 'Lễ Thành Hôn',
      time: '10:00',
      location: 'Nhà thờ Đức Bà Sài Gòn',
      address: '01 Công xã Paris, Quận 1, TP.HCM',
      icon: '⛪',
    },
    {
      title: 'Tiệc Cưới',
      time: '18:00',
      location: 'Khách sạn Rex Sài Gòn',
      address: '141 Nguyễn Huệ, Quận 1, TP.HCM',
      icon: '🥂',
    },
  ];

  const timeline = [
    { time: '09:30', event: 'Đón khách tại nhà thờ' },
    { time: '10:00', event: 'Lễ thành hôn' },
    { time: '11:30', event: 'Chụp ảnh kỷ niệm' },
    { time: '17:30', event: 'Đón khách tại khách sạn' },
    { time: '18:00', event: 'Tiệc cưới' },
    { time: '21:00', event: 'Kết thúc chương trình' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen p-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-crimson gradient-text mb-4">
            Chi Tiết Lễ Cưới
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="glass-card p-8 hover-scale"
            >
              <div className="text-center">
                <div className="text-4xl mb-6">{event.icon}</div>
                <h3 className="text-2xl md:text-3xl font-crimson text-white mb-4">
                  {event.title}
                </h3>
                <div className="glass-card p-4 mb-6 bg-accent/10">
                  <div className="text-3xl font-crimson gradient-text">
                    {event.time}
                  </div>
                </div>
                <div className="text-lg text-white mb-2">
                  {event.location}
                </div>
                <div className="text-sm text-text-secondary">
                  {event.address}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-2xl font-crimson text-white text-center mb-8">
            Chương Trình Trong Ngày
          </h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-20 text-accent font-medium">
                  {item.time}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent mx-4"></div>
                <div className="text-text-secondary flex-2">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
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
            Xác nhận tham dự →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeddingDetails;