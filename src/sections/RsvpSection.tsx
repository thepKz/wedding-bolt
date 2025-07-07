import { motion } from 'framer-motion';
import React, { useState } from 'react';

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    // Ở đây bạn có thể gửi data đến backend
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
        <motion.div
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-green-200/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl font-serif text-gray-800 mb-4">Cảm ơn bạn!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Chúng tôi đã nhận được phản hồi của bạn và rất mong được gặp bạn trong ngày đặc biệt này!
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                <span className="text-2xl">💚</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 py-20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <span className="text-3xl">📝</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Gửi Lời Chúc & RSVP
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi. 
            Hãy cho chúng tôi biết bạn có thể tham dự không nhé! 💕
          </p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-200/50 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Attendance */}
              <div>
                <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-2">
                  Bạn có thể tham dự không? *
                </label>
                <select
                  id="attendance"
                  name="attendance"
                  required
                  value={formData.attendance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                >
                  <option value="">Chọn phản hồi</option>
                  <option value="yes">Có, tôi sẽ tham dự 🎉</option>
                  <option value="no">Rất tiếc, tôi không thể tham dự 😢</option>
                </select>
              </div>

              {/* Number of guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Số người tham dự
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                  disabled={formData.attendance === 'no'}
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5+">5+ người</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Lời chúc cho cô dâu & chú rể
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 resize-none"
                placeholder="Gửi những lời chúc tốt đẹp nhất đến chúng tôi..."
              />
            </div>

            {/* Submit button */}
            <motion.div
              className="text-center pt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 text-lg"
              >
                <span className="flex items-center gap-3">
                  <span>📤</span>
                  Gửi RSVP
                  <span>💕</span>
                </span>
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            <span className="text-2xl">🌟</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </div>
          <p className="text-gray-600 mt-4">
            Cảm ơn bạn đã dành thời gian! Chúng tôi rất mong được gặp bạn! 🥰
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpSection; 