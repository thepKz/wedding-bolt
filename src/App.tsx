import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import InvitationSection from './sections/InvitationSection';

type ChapterType = 'prologue' | 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4' | 'chapter5' | 'epilogue';

const chapters = [
  { id: 'prologue', title: 'Lời Nguyền Đầu', subtitle: 'Trước khi bóng tối bao trùm...' },
  { id: 'chapter1', title: 'Chương I', subtitle: 'Gặp Gỡ Định Mệnh Trong Bóng Đêm' },
  { id: 'chapter2', title: 'Chương II', subtitle: 'Tình Yêu Nảy Nở Giữa Màn Đêm' },
  { id: 'chapter3', title: 'Chương III', subtitle: 'Hành Trình Cùng Nhau Trong Bóng Tối' },
  { id: 'chapter4', title: 'Chương IV', subtitle: 'Lời Thề Nguyện Vĩnh Cửu' },
  { id: 'chapter5', title: 'Chương V', subtitle: 'Đêm Trọng Đại' },
  { id: 'epilogue', title: 'Tương Lai', subtitle: 'Mãi mãi trong bóng đêm...' }
] as const;

function App() {
  const [currentChapter, setCurrentChapter] = useState<ChapterType>('prologue');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

  // Enhanced Gothic scroll-driven navigation
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 250; // Slower for more dramatic Gothic effect

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      const now = Date.now();
      if (now - lastScrollTime < scrollThreshold || isTransitioning) return;
      lastScrollTime = now;

      setIsTransitioning(true);
      const direction = event.deltaY > 0 ? 'down' : 'up';
      setScrollDirection(direction);

      const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
      
      if (direction === 'down' && currentIndex < chapters.length - 1) {
        setCurrentChapter(chapters[currentIndex + 1].id as ChapterType);
      } else if (direction === 'up' && currentIndex > 0) {
        setCurrentChapter(chapters[currentIndex - 1].id as ChapterType);
      }

      setTimeout(() => setIsTransitioning(false), 2500); // Longer Gothic transitions
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentChapter, isTransitioning]);

  // Enhanced Gothic chapter transitions with cemetery-like effects
  const chapterVariants = {
    initial: (direction: string) => ({
      opacity: 0,
      scale: 0.7,
      y: direction === 'down' ? 120 : -120,
      rotateX: direction === 'down' ? 30 : -30,
      filter: 'blur(15px) brightness(0.2) contrast(1.5)',
    }),
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px) brightness(1) contrast(1)',
    },
    out: (direction: string) => ({
      opacity: 0,
      scale: 1.3,
      y: direction === 'down' ? -120 : 120,
      rotateX: direction === 'down' ? -30 : 30,
      filter: 'blur(20px) brightness(0.1) contrast(2)',
    })
  };

  const chapterTransition = {
    type: "tween",
    ease: [0.19, 1, 0.22, 1], // Dramatic Gothic easing
    duration: 2.5
  };

  const renderChapterContent = () => {
    switch (currentChapter) {
      case 'prologue':
        return <PrologueChapter />;
      case 'chapter1':
        return <Chapter1 />;
      case 'chapter2':
        return <Chapter2 />;
      case 'chapter3':
        return <Chapter3 />;
      case 'chapter4':
        return <Chapter4 />;
      case 'chapter5':
        return <InvitationSection />;
      case 'epilogue':
        return <EpilogueChapter />;
      default:
        return <PrologueChapter />;
    }
  };

  const currentChapterInfo = chapters.find(ch => ch.id === currentChapter);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black gothic-no-select">
      {/* Enhanced Gothic Chapter Progress Indicator */}
      <div className="fixed top-8 left-8 z-50">
        <motion.div 
          className="bg-black/95 backdrop-blur-xl rounded-lg p-8 gothic-border gothic-shadow-deep"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h3 className="gothic-title text-amber-200 text-2xl mb-3 tracking-widest">
            {currentChapterInfo?.title}
          </h3>
          <p className="gothic-body text-amber-100/80 text-base mb-6 leading-relaxed italic">
            {currentChapterInfo?.subtitle}
          </p>
          <div className="flex space-x-3">
            {chapters.map((chapter, index) => {
              const isActive = chapter.id === currentChapter;
              const isCompleted = index < chapters.findIndex(ch => ch.id === currentChapter);
              
              return (
                <motion.div
                  key={chapter.id}
                  className={`w-4 h-4 transition-all duration-1000 ${
                    isActive 
                      ? 'bg-amber-400 gothic-shadow-gold scale-125 rounded-full' 
                      : isCompleted
                        ? 'bg-red-600/70 gothic-shadow-blood rounded-full'
                        : 'bg-gray-600/40 rounded-sm'
                  }`}
                  animate={{ 
                    scale: isActive ? 1.25 : 1,
                    rotate: isActive ? [0, 360] : 0,
                  }}
                  transition={{
                    scale: { duration: 0.5 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Gothic Scroll Hint */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="bg-black/95 backdrop-blur-xl rounded-full px-8 py-4 gothic-border gothic-shadow-gold"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="gothic-body text-amber-200/90 text-base font-medium tracking-wide">
            Cuộn để khám phá bóng tối...
          </p>
        </motion.div>
      </div>

      {/* Gothic Chapter Content with Enhanced Dramatic Transitions */}
      <AnimatePresence mode="wait" custom={scrollDirection}>
        <motion.div
          key={currentChapter}
          custom={scrollDirection}
          initial="initial"
          animate="in"
          exit="out"
          variants={chapterVariants}
          transition={chapterTransition}
          className="absolute inset-0 gothic-transform"
        >
          {renderChapterContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Enhanced Gothic Chapter Components with Advanced Dark Romance Aesthetics

const PrologueChapter = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-cathedral">
    {/* Enhanced Gothic cathedral-like background with layers */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      
      {/* Multiple Gothic ambient light sources */}
      <div className="absolute top-32 left-32 w-96 h-96 bg-amber-700/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-red-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-amber-600/8 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Gothic mist effects */}
      <div className="absolute top-20 left-0 w-full h-32 bg-gradient-to-b from-amber-900/5 to-transparent gothic-mist"></div>
      <div className="absolute bottom-20 left-0 w-full h-32 bg-gradient-to-t from-red-900/5 to-transparent gothic-mist" style={{ animationDelay: '5s' }}></div>
    </div>

    {/* Enhanced Gothic floating candle-like particles */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute gothic-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 6 + 4 + 'px',
            background: `linear-gradient(180deg, ${
              Math.random() > 0.5 ? '#FFC107' : '#FF8F00'
            } 0%, #D32F2F 50%, #8B0000 100%)`,
            borderRadius: '50%',
            animationDelay: Math.random() * 6 + 's',
            animationDuration: Math.random() * 4 + 3 + 's',
          }}
        />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 3, delay: 1, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 
        className="gothic-title gradient-gothic-gold text-8xl md:text-9xl xl:text-[12rem] font-bold mb-12 leading-tight"
        initial={{ opacity: 0, scale: 0.7, rotateX: 45 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 3.5, delay: 1.5, ease: "easeOut" }}
      >
        Câu Chuyện
      </motion.h1>
      
      <motion.h2 
        className="gothic-script gradient-gothic-blood text-6xl md:text-7xl xl:text-8xl font-bold mb-16"
        initial={{ opacity: 0, y: 80, rotateY: 30 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 3, delay: 2.5, ease: "easeOut" }}
      >
        Tình Yêu Gothic
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 3.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <p className="gothic-body text-2xl md:text-3xl text-amber-200/90 leading-relaxed font-light">
          Trong bóng đêm huyền bí, mỗi câu chuyện tình yêu
        </p>
        <p className="gothic-body text-xl md:text-2xl text-red-200/80 leading-relaxed font-light italic">
          đều có một khởi đầu đầy ma mị và quyến rũ.
        </p>
        <p className="gothic-body text-lg md:text-xl text-amber-100/70 leading-relaxed font-light">
          Đây là câu chuyện tình yêu Gothic của chúng tôi...
        </p>
      </motion.div>
    </motion.div>
  </div>
);

const Chapter1 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-crypt">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>
      <div className="absolute top-32 left-32 w-80 h-80 bg-red-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-amber-800/15 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 className="gothic-title gradient-gothic-gold text-7xl md:text-8xl xl:text-9xl font-bold mb-8 tracking-wide">
        CHƯƠNG I
      </motion.h1>
      
      <motion.h2 className="gothic-script gradient-gothic-blood text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
        Gặp Gỡ Định Mệnh Trong Bóng Đêm
      </motion.h2>
      
      <motion.div className="space-y-8 text-2xl md:text-3xl leading-relaxed font-light">
        <p className="gothic-body text-amber-200/90">Trong một quán cà phê cổ kính, âm u,</p>
        <p className="gothic-body text-red-200/80">Dưới ánh sáng nến mờ ảo và huyền bí,</p>
        <p className="gothic-body text-amber-100/80">Hai linh hồn đã tìm thấy nhau.</p>
        <p className="gothic-script italic text-red-300/90 text-3xl">
          Và định mệnh đã được viết trong bóng tối.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

const Chapter2 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-dungeon">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>
      <div className="absolute top-32 right-32 w-80 h-80 bg-red-800/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: -150, rotateX: 30 }}
      animate={{ opacity: 1, x: 0, rotateX: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 className="gothic-title gradient-gothic-gold text-7xl md:text-8xl xl:text-9xl font-bold mb-8 tracking-wide">
        CHƯƠNG II
      </motion.h1>
      
      <motion.h2 className="gothic-script gradient-gothic-blood text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
        Tình Yêu Nảy Nở Giữa Màn Đêm
      </motion.h2>
      
      <motion.div className="space-y-8 text-2xl md:text-3xl leading-relaxed font-light">
        <p className="gothic-body text-amber-200/90">Những buổi tối xem phim kinh dị cùng nhau,</p>
        <p className="gothic-body text-red-200/80">Những câu chuyện ma quái không bao giờ cạn.</p>
        <p className="gothic-body text-purple-200/80">Từng khoảnh khắc trở nên ma mị,</p>
        <p className="gothic-script italic text-red-300/90 text-3xl">
          Khi có em trong bóng tối bên anh.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

const Chapter3 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-dungeon">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>
      <div className="absolute top-32 left-32 w-80 h-80 bg-purple-900/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 150, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 className="gothic-title gradient-gothic-gold text-7xl md:text-8xl xl:text-9xl font-bold mb-8 tracking-wide">
        CHƯƠNG III
      </motion.h1>
      
      <motion.h2 className="gothic-script gradient-gothic-royal text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
        Hành Trình Cùng Nhau Trong Bóng Tối
      </motion.h2>
      
      <motion.div className="space-y-8 text-2xl md:text-3xl leading-relaxed font-light">
        <p className="gothic-body text-amber-200/90">Cùng nhau khám phá những lâu đài cổ,</p>
        <p className="gothic-body text-purple-200/80">Từng chuyến đi là một câu chuyện ma.</p>
        <p className="gothic-body text-indigo-200/80">Dù đi đâu, trong bóng đêm nào,</p>
        <p className="gothic-script italic text-purple-300/90 text-3xl">
          Chỉ cần có nhau trong bóng tối là đủ.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

const Chapter4 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-treasure">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>
      <div className="absolute top-32 right-32 w-80 h-80 bg-yellow-800/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 1.5, rotateZ: 15 }}
      animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 className="gothic-title gradient-gothic-gold text-7xl md:text-8xl xl:text-9xl font-bold mb-8 tracking-wide">
        CHƯƠNG IV
      </motion.h1>
      
      <motion.h2 className="gothic-script gradient-gothic-copper text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
        Lời Thề Nguyện Vĩnh Cửu
      </motion.h2>
      
      <motion.div className="space-y-8 text-2xl md:text-3xl leading-relaxed font-light">
        <p className="gothic-body text-amber-200/90">Một đêm trăng tròn, anh quỳ xuống,</p>
        <p className="gothic-body text-yellow-200/80">Với chiếc nhẫn vàng và linh hồn chân thành.</p>
        <p className="gothic-body text-amber-100/80">"Em có muốn cùng anh trong bóng đêm vĩnh cửu không?"</p>
        <p className="gothic-script italic text-yellow-300/90 text-3xl">
          Và em thì thầm "Mãi mãi trong bóng tối".
        </p>
      </motion.div>
    </motion.div>
  </div>
);

const EpilogueChapter = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden gothic-bg-mystic">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>
      <div className="absolute top-32 left-32 w-80 h-80 bg-violet-900/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ duration: 3.5, ease: "easeOut" }}
      className="text-center max-w-6xl px-12 relative z-10"
    >
      <motion.h1 className="gothic-title gradient-gothic-gold text-7xl md:text-8xl xl:text-9xl font-bold mb-8 tracking-wide">
        TƯƠNG LAI
      </motion.h1>
      
      <motion.h2 className="gothic-script gradient-gothic-ancient text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
        Mãi Mãi Trong Bóng Đêm
      </motion.h2>
      
      <motion.div className="space-y-8 text-2xl md:text-3xl leading-relaxed font-light">
        <p className="gothic-body text-amber-200/90">Câu chuyện Gothic chưa kết thúc,</p>
        <p className="gothic-body text-violet-200/80">Mà chỉ mới bắt đầu trong bóng tối.</p>
        <p className="gothic-body text-purple-200/80">Với tình yêu ma mị và hy vọng huyền bí,</p>
        <p className="gothic-script italic text-violet-300/90 text-3xl">
          Chúng tôi viết tiếp từng trang trong bóng đêm vĩnh cửu.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default App;