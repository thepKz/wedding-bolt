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
    const scrollThreshold = 100; // Giảm từ 250ms xuống 100ms cho responsive hơn

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

      setTimeout(() => setIsTransitioning(false), 1200); // Giảm từ 2500ms xuống 1200ms
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentChapter, isTransitioning]);

  // Enhanced Gothic chapter transitions với cemetery-like effects
  const chapterVariants = {
    initial: (direction: string) => ({
      opacity: 0,
      scale: 0.9,
      y: direction === 'down' ? 60 : -60,
      filter: 'blur(8px)',
    }),
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    out: (direction: string) => ({
      opacity: 0,
      scale: 1.1,
      y: direction === 'down' ? -60 : 60,
      filter: 'blur(8px)',
    })
  };

  const chapterTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1], // Easing optimize cho speed
    duration: 1.2 // Giảm từ 2.5s xuống 1.2s
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
      {/* Subtle scroll indicator integrated into right edge */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-[50]">
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          {chapters.map((chapter, index) => {
            const isActive = chapter.id === currentChapter;
            return (
              <div
                key={chapter.id}
                className={`w-1 h-8 transition-all duration-500 ${
                  isActive ? 'bg-white/60' : 'bg-white/20'
                }`}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Gothic Chapter Content với z-index thấp hơn */}
      <AnimatePresence mode="wait" custom={scrollDirection}>
        <motion.div
          key={currentChapter}
          custom={scrollDirection}
          initial="initial"
          animate="in"
          exit="out"
          variants={chapterVariants}
          transition={chapterTransition}
          className="absolute inset-0 gothic-transform z-[10]"
        >
          {renderChapterContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Enhanced Gothic Chapter Components with Advanced Dark Romance Aesthetics

const PrologueChapter = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
    {/* Background image với overlay */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=1" 
        alt="Gothic Background"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    {/* Minimalist background với professional contrast */}
    <div className="absolute inset-0 z-[1]">
      {/* Single elegant light source */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-amber-500/10 rounded-full blur-3xl"></div>
    </div>

    {/* Reduced particles cho clean look */}
    <div className="absolute inset-0 pointer-events-none z-[2]">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: '2px',
            height: '6px',
            background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 100%)',
            borderRadius: '50%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: '4s',
            animationName: 'gothic-candle-flicker',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>

    {/* Professional minimalist content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      {/* Main title với high contrast */}
      <motion.h1 
        className="font-bold mb-16 leading-none tracking-tight"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
          filter: 'drop-shadow(0 4px 20px rgba(255, 215, 0, 0.3))'
        }}
      >
        GOTHIC
      </motion.h1>
      
      {/* Subtitle với elegant spacing */}
      <motion.h2 
        className="font-light mb-12 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          color: '#E5E5E5',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
          letterSpacing: '0.3em'
        }}
      >
        WEDDING INVITATION
      </motion.h2>
      
      {/* Single elegant call-to-action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p 
          className="font-medium mb-8"
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#C0C0C0',
            textShadow: '0 1px 5px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.1em'
          }}
        >
          Min & Vi
        </p>
        
        {/* Elegant scroll indicator */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-amber-400 to-transparent mx-auto opacity-60"></div>
      </motion.div>
    </motion.div>
  </div>
);

const Chapter1 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
    {/* Romantic background image */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=2" 
        alt="Our Story Background"
        className="w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    <div className="absolute inset-0 z-[1]">
      <div className="absolute top-1/2 left-1/3 w-[50rem] h-[50rem] bg-red-500/8 rounded-full blur-3xl"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      <motion.h1 
        className="font-bold mb-8 leading-none"
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          color: '#FFFFFF',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
          letterSpacing: '0.2em'
        }}
      >
        OUR STORY
      </motion.h1>
      
      <motion.p 
        className="font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: '#B0B0B0',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.1em',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        How we met in the mystic shadows of a coffee shop, 
        where destiny intertwined our souls under candlelight.
      </motion.p>
    </motion.div>
  </div>
);

const Chapter2 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
    {/* Journey background image */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=3" 
        alt="Journey Background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/75"></div>
    </div>

    <div className="absolute inset-0 z-[1]">
      <div className="absolute top-1/2 right-1/3 w-[50rem] h-[50rem] bg-purple-500/6 rounded-full blur-3xl"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      <motion.h1 
        className="font-bold mb-8 leading-none"
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #DDA0DD 50%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(221, 160, 221, 0.4)',
          letterSpacing: '0.2em'
        }}
      >
        JOURNEY
      </motion.h1>
      
      <motion.p 
        className="font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: '#B0B0B0',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.1em',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        Every moment shared in moonlit adventures,
        building our eternal bond through time.
      </motion.p>
    </motion.div>
  </div>
);

const Chapter3 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/10 to-black">
    {/* Promise background image */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=4" 
        alt="Promise Background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/75"></div>
    </div>

    <div className="absolute inset-0 z-[1]">
      <div className="absolute bottom-1/3 left-1/2 w-[50rem] h-[50rem] bg-blue-500/6 rounded-full blur-3xl"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      <motion.h1 
        className="font-bold mb-8 leading-none"
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #87CEEB 50%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(135, 206, 235, 0.4)',
          letterSpacing: '0.2em'
        }}
      >
        PROMISE
      </motion.h1>
      
      <motion.p 
        className="font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: '#B0B0B0',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.1em',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        Together we promise to walk through shadows and light,
        bound by eternal love.
      </motion.p>
    </motion.div>
  </div>
);

const Chapter4 = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-amber-900/15 to-black">
    {/* Vows background image */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=5" 
        alt="Vows Background"
        className="w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>

    <div className="absolute inset-0 z-[1]">
      <div className="absolute top-1/4 right-1/4 w-[50rem] h-[50rem] bg-amber-500/8 rounded-full blur-3xl"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      <motion.h1 
        className="font-bold mb-8 leading-none"
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFD700 50%, #FFFFFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
          letterSpacing: '0.2em'
        }}
      >
        VOWS
      </motion.h1>
      
      <motion.p 
        className="font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: '#B0B0B0',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.1em',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        Sacred words spoken under starlit skies,
        sealing our hearts for eternity.
      </motion.p>
    </motion.div>
  </div>
);

const EpilogueChapter = () => (
  <div className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-800 to-black">
    {/* Forever background image */}
    <div className="absolute inset-0 z-[0]">
      <img 
        src="https://picsum.photos/1920/1080?random=6" 
        alt="Forever Background"
        className="w-full h-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-black/80"></div>
    </div>

    <div className="absolute inset-0 z-[1]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-white/5 rounded-full blur-3xl"></div>
    </div>

    {/* Minimal elegant particles */}
    <div className="absolute inset-0 pointer-events-none z-[2]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            width: '1px',
            height: '4px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #C0C0C0 100%)',
            borderRadius: '50%',
            animationDelay: Math.random() * 4 + 's',
            animationDuration: '6s',
            animationName: 'gothic-candle-flicker',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-center max-w-4xl px-8 relative z-[20]"
    >
      <motion.h1 
        className="font-bold mb-12 leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          color: '#FFFFFF',
          textShadow: '0 0 50px rgba(255, 255, 255, 0.6)',
          letterSpacing: '0.3em'
        }}
      >
        FOREVER
      </motion.h1>
      
      <motion.p 
        className="font-light leading-relaxed mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: '#C0C0C0',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.1em',
          maxWidth: '600px',
          margin: '0 auto 4rem'
        }}
      >
        Our love story continues into eternal darkness,
        where we shall dance forever in the moonlight.
      </motion.p>

      {/* Elegant final ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="flex justify-center"
      >
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full mx-4 -mt-1.5"></div>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      </motion.div>
    </motion.div>
  </div>
);

export default App;