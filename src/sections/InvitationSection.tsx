import { motion } from 'framer-motion';
import React from 'react';

const InvitationSection = () => {
  // Gothic animation variants with ethereal effects
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 60, filter: 'blur(10px)' },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants = {
    initial: { opacity: 0, scale: 0.8, filter: 'blur(15px)' },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden"
         style={{ 
           background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.4) 0%, rgba(0,0,0,0.98) 80%, #000000 100%)'
         }}>
      
      {/* Gothic Cathedral-like Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <div className="absolute top-24 left-24 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-80 h-80 bg-amber-800/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-yellow-900/8 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Gothic Candle-like Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-4 bg-amber-400/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 12px rgba(255, 193, 7, 0.9), 0 0 20px rgba(255, 215, 0, 0.5)',
              background: 'linear-gradient(180deg, #FFC107 0%, #FF8F00 50%, #D32F2F 100%)'
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 3, 1],
              boxShadow: [
                '0 0 12px rgba(255, 193, 7, 0.9)',
                '0 0 25px rgba(255, 193, 7, 1)',
                '0 0 12px rgba(255, 193, 7, 0.9)'
              ]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto px-12 text-center relative z-10"
      >
        {/* Gothic Chapter Header */}
        <motion.div variants={itemVariants} className="mb-20">
          <h1 
            className="text-6xl md:text-7xl xl:text-8xl font-bold mb-8 tracking-wide"
            style={{ 
              fontFamily: 'Cinzel, serif',
              background: 'linear-gradient(45deg, #FFC107 0%, #FF8F00 30%, #D32F2F 70%, #8B0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(255, 193, 7, 0.3)'
            }}
          >
            CHƯƠNG V
          </h1>
          <h2 
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-12"
            style={{ 
              fontFamily: 'Berkshire Swash, cursive',
              background: 'linear-gradient(45deg, #D32F2F 0%, #8B0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(211, 47, 47, 0.4)'
            }}
          >
            Đêm Trọng Đại
          </h2>
        </motion.div>

        {/* Gothic Wedding Invitation Card */}
        <motion.div 
          variants={titleVariants}
          className="bg-black/60 backdrop-blur-xl rounded-lg p-16 border-2 border-amber-700/60 shadow-2xl mb-16"
          style={{ 
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(139,69,19,0.15) 50%, rgba(0,0,0,0.9) 100%)',
            boxShadow: '0 0 40px rgba(139, 69, 19, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.05), 0 0 80px rgba(211, 47, 47, 0.2)',
            border: '2px solid transparent',
            borderImage: 'linear-gradient(45deg, rgba(255, 193, 7, 0.6), rgba(211, 47, 47, 0.6), rgba(255, 193, 7, 0.6)) 1'
          }}
        >
          {/* Gothic Couple Names */}
          <motion.div variants={itemVariants} className="mb-16">
            {/* Formal Gothic Invitation Header */}
            <motion.p 
              className="text-amber-300/90 font-bold text-2xl mb-8 tracking-[0.5em] uppercase"
              style={{ 
                fontFamily: 'Cinzel, serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(255, 193, 7, 0.3)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              THIỆP MỜI GOTHIC
            </motion.p>

            <motion.h3 
              className="text-5xl md:text-6xl font-bold mb-12"
              style={{ 
                fontFamily: 'Uncial Antiqua, cursive',
                background: 'linear-gradient(45deg, #FFC107 0%, #FF8F00 50%, #D32F2F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '4px 4px 8px rgba(0,0,0,0.9)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              Lễ Thành Hôn Gothic
            </motion.h3>

            {/* Couple Names with Gothic Style */}
            <motion.div
              className="space-y-6 mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <div className="text-7xl md:text-8xl xl:text-9xl font-bold leading-tight"
                   style={{ fontFamily: 'Cinzel, serif' }}>
                <div 
                  className="mb-4"
                  style={{ 
                    background: 'linear-gradient(45deg, #FFC107 0%, #FF8F00 50%, #D32F2F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '5px 5px 10px rgba(0,0,0,0.9)'
                  }}
                >
                  Bân Đô
                </div>
                
                {/* Gothic Separator */}
                <div className="flex items-center justify-center my-8">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-700/70 to-transparent"></div>
                  <div className="mx-8">
                    <motion.div 
                      className="w-8 h-8 border-2 border-amber-600 rotate-45 bg-gradient-to-br from-amber-400/20 to-red-600/20"
                      animate={{ rotate: [45, 405] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{ 
                        boxShadow: '0 0 15px rgba(255, 193, 7, 0.6), inset 0 0 10px rgba(255, 215, 0, 0.3)'
                      }}
                    />
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-700/70 to-transparent"></div>
                </div>
                
                <div 
                  style={{ 
                    background: 'linear-gradient(45deg, #D32F2F 0%, #8B0000 50%, #4A0000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '5px 5px 10px rgba(0,0,0,0.9)'
                  }}
                >
                  Tình Yêu
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Gothic Wedding Information */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Date & Time - Gothic Style */}
            <div className="bg-black/40 rounded-lg p-10 border border-amber-700/40"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(139,69,19,0.1) 100%)',
                   boxShadow: '0 0 20px rgba(139, 69, 19, 0.3), inset 0 0 15px rgba(255, 215, 0, 0.05)'
                 }}>
              <h3 
                className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 tracking-widest"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
                }}
              >
                THỜI KHẮC ĐỊNH MỆNH
              </h3>
              <div className="space-y-4 text-amber-100/90" style={{ fontFamily: 'Crimson Text, serif' }}>
                <p className="text-xl md:text-2xl font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Đêm Thứ Bảy Huyền Bí
                </p>
                <p className="text-3xl md:text-4xl font-bold" style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                  color: '#FFD700'
                }}>
                  15 tháng 6, 2025
                </p>
                <p className="text-lg md:text-xl text-red-200/80" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Lúc 20:00 - Giờ của bóng đêm
                </p>
              </div>
            </div>

            {/* Location - Gothic Style */}
            <div className="bg-black/40 rounded-lg p-10 border border-amber-700/40"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(139,69,19,0.1) 100%)',
                   boxShadow: '0 0 20px rgba(139, 69, 19, 0.3), inset 0 0 15px rgba(255, 215, 0, 0.05)'
                 }}>
              <h3 
                className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 tracking-widest"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
                }}
              >
                LÂU ĐÀI BÍ ẨN
              </h3>
              <div className="space-y-4 text-amber-100/90" style={{ fontFamily: 'Crimson Text, serif' }}>
                <p className="text-2xl md:text-3xl font-bold" style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                  color: '#FFD700'
                }}>
                  Gothic Manor
                </p>
                <p className="text-xl md:text-2xl font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Dinh Thự Hạnh Phúc
                </p>
                <p className="text-lg md:text-xl text-red-200/80" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  123 Đường Bóng Đêm, Thành phố Huyền Bí
                </p>
              </div>
            </div>
          </motion.div>

          {/* Gothic Poetic Message */}
          <motion.div variants={itemVariants} className="mb-12">
            <div 
              className="text-xl md:text-2xl leading-relaxed font-light italic space-y-6 text-amber-200/85"
              style={{ 
                fontFamily: 'Crimson Text, serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              <p>"Trong bóng đêm ma mị của lâu đài cổ kính,</p>
              <p>Dưới ánh sáng nến lung linh và huyền bí,</p>
              <p>Chúng tôi mời bạn đến chứng kiến</p>
              <p>chương cuối của câu chuyện tình yêu Gothic.</p>
              <p className="text-red-300/90 text-2xl font-bold" style={{ 
                fontFamily: 'Berkshire Swash, cursive',
                textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
              }}>
                Hãy cùng chúng tôi viết tiếp những dòng hạnh phúc vĩnh cửu trong bóng tối."
              </p>
            </div>
          </motion.div>

          {/* Gothic RSVP Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-red-900/30 via-amber-900/20 to-red-900/30 rounded-lg p-10 border-2 border-red-700/40"
                 style={{ 
                   boxShadow: '0 0 30px rgba(211, 47, 47, 0.4), inset 0 0 20px rgba(255, 215, 0, 0.1)'
                 }}>
              <h3 
                className="text-3xl md:text-4xl font-bold text-amber-200 mb-6 tracking-widest"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
                }}
              >
                TRIỆU HỒI LINH HỒN
              </h3>
              <div className="space-y-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                <p className="text-lg md:text-xl text-amber-100/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Vui lòng xác nhận sự hiện diện linh hồn của bạn trước ngày 1 tháng 6, 2025
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center">
                  <div className="bg-black/60 rounded-xl px-8 py-4 border-2 border-amber-700/50"
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(139,69,19,0.2) 100%)',
                         boxShadow: '0 0 15px rgba(255, 193, 7, 0.3)'
                       }}>
                    <p className="text-amber-200/70 text-sm font-bold tracking-wider">Ma Thuật Liên Lạc</p>
                    <p className="text-amber-100 font-bold text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      0123 456 789
                    </p>
                  </div>
                  <div className="bg-black/60 rounded-xl px-8 py-4 border-2 border-amber-700/50"
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(139,69,19,0.2) 100%)',
                         boxShadow: '0 0 15px rgba(255, 193, 7, 0.3)'
                       }}>
                    <p className="text-amber-200/70 text-sm font-bold tracking-wider">Hộp Thư Bí Ẩn</p>
                    <p className="text-amber-100 font-bold text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      gothic@wedding.dark
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Gothic Bottom Quote */}
        <motion.div variants={itemVariants}>
          <p 
            className="text-xl md:text-2xl text-red-200/70 font-light italic leading-relaxed"
            style={{ 
              fontFamily: 'Berkshire Swash, cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
            }}
          >
            "Tình yêu Gothic không chỉ là tìm thấy nhau trong ánh sáng,<br />
            mà là chọn ở bên nhau mãi mãi trong bóng đêm huyền bí."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvitationSection; 