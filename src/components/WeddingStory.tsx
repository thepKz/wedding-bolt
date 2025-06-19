import React from 'react';
import { motion } from 'framer-motion';

interface WeddingStoryProps {
  onBack: () => void;
  onViewAlbum: () => void;
}

const WeddingStory: React.FC<WeddingStoryProps> = ({ onBack, onViewAlbum }) => {
  const storyMilestones = [
    {
      date: '15/03/2020',
      title: 'Lần đầu gặp nhau',
      description: 'Chúng tôi gặp nhau tại một quán cà phê nhỏ trong một buổi chiều mưa phùn. Ánh mắt đầu tiên đã khiến cả hai cảm thấy có điều gì đó đặc biệt.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      date: '20/05/2020',
      title: 'Buổi hẹn đầu tiên',
      description: 'Buổi hẹn đầu tiên tại công viên Tao Đàn. Chúng tôi đã trò chuyện suốt 4 tiếng mà không cảm thấy chán. Đó là lúc chúng tôi biết mình đã tìm thấy người đặc biệt.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      date: '14/02/2022',
      title: 'Ngày cầu hôn',
      description: 'Trong một buổi tối Valentine lãng mạn, anh đã quỳ gối cầu hôn em dưới ánh nến lung linh. Đó là khoảnh khắc đẹp nhất trong cuộc đời chúng tôi.',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      date: '15/12/2024',
      title: 'Ngày cưới',
      description: 'Hôm nay, chúng tôi chính thức trở thành vợ chồng. Cảm ơn tất cả mọi người đã đồng hành cùng chúng tôi trong hành trình tình yêu này.',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="section-padding pb-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-gradient mb-6">
            Câu Chuyện Tình Yêu
          </h1>
          <p className="text-lg text-pale-slate/80 max-w-2xl mx-auto leading-relaxed">
            Mỗi tình yêu đều có một câu chuyện riêng. Đây là câu chuyện của chúng tôi - 
            từ những ngày đầu gặp gỡ đến khi quyết định bước vào hôn nhân.
          </p>
          
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewAlbum}
              className="elegant-button px-6 py-3 rounded-full"
            >
              Xem Album
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="px-6 py-3 rounded-full border-2 border-dusty-pink text-pale-slate hover:bg-dusty-pink/10 transition-all duration-300"
            >
              ← Trang chủ
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Story Timeline */}
      <div className="section-padding pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {storyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="elegant-card rounded-3xl overflow-hidden hover-lift">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="glass-card p-8 rounded-3xl">
                    <div className="text-sm text-dusty-pink font-medium tracking-wider uppercase mb-3">
                      {milestone.date}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-playfair text-gradient mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-pale-slate/80 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="section-padding"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <div className="text-6xl text-dusty-pink/30 mb-6">"</div>
            <p className="text-xl md:text-2xl font-playfair text-gradient leading-relaxed mb-6">
              Tình yêu không chỉ là nhìn vào mắt nhau, mà là cùng nhau nhìn về một hướng
            </p>
            <div className="text-pale-slate/70 font-medium">
              - Minh & Hương -
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WeddingStory;