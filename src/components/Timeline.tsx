import { motion } from 'framer-motion';


interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "Tháng 3, 2020",
    title: "Lần Đầu Gặp Nhau",
    description: "Chúng tôi gặp nhau tại một quán cà phê nhỏ ở quận 1. Đó là một buổi chiều mưa nhẹ, và có lẽ đó là lý do tại sao chúng tôi ở lại lâu hơn dự định...",
    icon: "☕",
    position: "left"
  },
  {
    id: 2,
    date: "Tháng 6, 2020",
    title: "Cuộc Hẹn Đầu Tiên",
    description: "Chuyến đi xem phim đầu tiên của chúng tôi. Anh đã rất lo lắng và đến sớm 30 phút, còn em thì đến muộn 15 phút và xin lỗi cả trăm lần.",
    icon: "🎬",
    position: "right"
  },
  {
    id: 3,
    date: "Tháng 12, 2020",
    title: "Chính Thức Yêu Nhau",
    description: "Đêm Giáng Sinh đặc biệt khi anh chính thức nói lời 'Anh yêu em'. Đó là món quà Giáng Sinh đẹp nhất mà em từng nhận được.",
    icon: "💕",
    position: "left"
  },
  {
    id: 4,
    date: "Tháng 8, 2022",
    title: "Chuyến Du Lịch Đầu Tiên",
    description: "Chuyến đi Đà Lạt của chúng tôi - nơi có những con đường hoa, không khí mát mẻ và biết bao kỷ niệm ngọt ngào. Chúng tôi đã hứa sẽ quay lại đây mỗi năm.",
    icon: "✈️",
    position: "right"
  },
  {
    id: 5,
    date: "Tháng 2, 2024",
    title: "Ngày Cầu Hôn",
    description: "Anh đã cầu hôn em tại nơi chúng ta gặp nhau lần đầu - quán cà phê nhỏ đó. Em đã khóc và nói 'Có' mà không cần suy nghĩ.",
    icon: "💍",
    position: "left"
  },
  {
    id: 6,
    date: "Tháng 6, 2025",
    title: "Ngày Cưới",
    description: "Hôm nay - ngày mà chúng tôi chính thức trở thành một gia đình. Cảm ơn tất cả những người đã đến chung vui cùng chúng tôi!",
    icon: "💒",
    position: "right"
  }
];

const Timeline = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-3xl">📖</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hành Trình Tình Yêu
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Từ những ngày đầu gặp gỡ đến ngày hôm nay - câu chuyện của chúng tôi 💕
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 rounded-full"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`flex items-center ${event.position === 'left' ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: event.position === 'left' ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${event.position === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50 relative">
                    {/* Arrow */}
                    <div className={`absolute top-8 ${event.position === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-4 h-4 bg-white border border-purple-200/50 rotate-45`}></div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 justify-center">
                        <span className="text-3xl">{event.icon}</span>
                        <div>
                          <p className="text-sm text-purple-600 font-medium">{event.date}</p>
                          <h3 className="text-xl font-serif text-gray-800">{event.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border border-purple-200/50">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <span className="text-2xl">🌟</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
            
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Và Câu Chuyện Tiếp Tục...</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hôm nay chỉ là khởi đầu cho một chương mới trong cuộc đời chúng tôi. 
              Cảm ơn bạn đã là một phần trong hành trình này! 💖
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
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

export default Timeline; 