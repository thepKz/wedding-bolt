import React from 'react';
import { motion } from 'framer-motion';

interface WeddingDetailsProps {
  onNext: () => void;
  onBack: () => void;
}

const WeddingDetails: React.FC<WeddingDetailsProps> = ({ onNext, onBack }) => {
  const details = [
    {
      icon: '⛪',
      title: 'Lễ Thành Hôn',
      time: '10:00 AM',
      location: 'Nhà thờ Đức Bà Sài Gòn',
      address: '01 Công xã Paris, Quận 1, TP.HCM',
    },
    {
      icon: '🏛️',
      title: 'Tiệc Cưới',
      time: '6:00 PM',
      location: 'Khách sạn Rex Sài Gòn',
      address: '141 Nguyễn Huệ, Quận 1, TP.HCM',
    },
  ];

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-great-vibes text-gold mb-4 text-shadow-gold">
            Chi Tiết Lễ Cưới
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="glass-effect p-8 rounded-3xl golden-border hover-lift"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="text-6xl mb-4"
                >
                  {detail.icon}
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-dancing text-burgundy mb-4">
                  {detail.title}
                </h3>
                
                <div className="bg-gradient-to-r from-champagne to-blush p-4 rounded-xl mb-4">
                  <div className="text-3xl font-playfair font-bold text-gold">
                    {detail.time}
                  </div>
                </div>
                
                <div className="text-lg font-montserrat text-navy mb-2">
                  {detail.location}
                </div>
                
                <div className="text-sm text-deep-rose opacity-80">
                  {detail.address}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect p-8 rounded-3xl golden-border mb-8"
        >
          <h3 className="text-2xl font-dancing text-burgundy text-center mb-6">
            Chương Trình Trong Ngày
          </h3>
          
          <div className="space-y-4">
            {[
              { time: '9:30 AM', event: 'Đón khách tại nhà thờ' },
              { time: '10:00 AM', event: 'Lễ thành hôn' },
              { time: '11:30 AM', event: 'Chụp ảnh kỷ niệm' },
              { time: '5:30 PM', event: 'Đón khách tại khách sạn' },
              { time: '6:00 PM', event: 'Tiệc cưới' },
              { time: '9:00 PM', event: 'Kết thúc chương trình' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-20 text-gold font-semibold">
                  {item.time}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gold to-transparent"></div>
                <div className="text-navy">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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
            Xác nhận tham dự →
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeddingDetails;