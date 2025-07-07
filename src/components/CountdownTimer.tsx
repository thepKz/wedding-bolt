import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  // Wedding date: June 15, 2025, 10:00 AM
  const weddingDate = new Date('2025-06-15T10:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsWeddingDay(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  if (isWeddingDay) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎉
          </motion.div>
          <h1 className="text-6xl font-serif text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Hôm Nay Là Ngày Cưới!
            </span>
          </h1>
          <p className="text-2xl text-gray-600">
            Chúng tôi chính thức trở thành vợ chồng! 💒💕
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 flex items-center justify-center py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <span className="text-3xl">⏰</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Đếm Ngược Đến Ngày Cưới
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chỉ còn một chút thời gian nữa thôi! Chúng tôi đang rất háo hức! 💖
          </p>
        </motion.div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Ngày', value: timeLeft.days, color: 'from-cyan-500 to-blue-500' },
            { label: 'Giờ', value: timeLeft.hours, color: 'from-blue-500 to-indigo-500' },
            { label: 'Phút', value: timeLeft.minutes, color: 'from-indigo-500 to-purple-500' },
            { label: 'Giây', value: timeLeft.seconds, color: 'from-purple-500 to-pink-500' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                key={item.value} // This will trigger re-animation when value changes
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <p className="text-gray-600 font-medium text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200/50 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-semibold text-lg mb-1">Ngày</h3>
              <p>Chủ Nhật</p>
              <p className="text-blue-600 font-medium">15 tháng 6, 2025</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🕙</div>
              <h3 className="font-semibold text-lg mb-1">Thời gian</h3>
              <p>Lễ cưới bắt đầu</p>
              <p className="text-blue-600 font-medium">10:00 AM</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🏰</div>
              <h3 className="font-semibold text-lg mb-1">Địa điểm</h3>
              <p>Nhà hàng tiệc cưới</p>
              <p className="text-blue-600 font-medium">Hạnh Phúc</p>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
            <span className="text-2xl">💫</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
          </div>
          
          <p className="text-gray-600 text-lg mb-6">
            Hãy đặt lịch nhắc nhở để không bỏ lỡ ngày đặc biệt này nhé! 📱
          </p>
          
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-300/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <span>📅</span>
              Thêm vào lịch
              <span>✨</span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CountdownTimer; 