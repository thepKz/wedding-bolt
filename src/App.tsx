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
  <div className="w-full h-screen flex relative overflow-hidden bg-black mobile-stack">
    {/* Left side - Hero Image với professional composition */}
    <div className="w-1/2 h-full relative overflow-hidden mobile-full-width">
      <img 
        src="https://placehold.co/800x1080?text=Gothic+Romance&bg=1a1a1a&color=d4af37" 
        alt="Gothic Wedding Hero"
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay cho professional blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60"></div>
      
      {/* Decorative frame border */}
      <div className="absolute inset-4 border border-white/20 pointer-events-none mobile-hidden"></div>
    </div>

    {/* Right side - Content với perfect typography hierarchy */}
    <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black relative mobile-full-width">
      {/* Subtle particles cho ambiance */}
      <div className="absolute inset-0 pointer-events-none mobile-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-2 bg-amber-400/40 rounded-full floating-element pulse-on-hover"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: Math.random() * 4 + 's',
              animationDuration: '8s',
              animationName: 'gothic-candle-flicker',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-left max-w-md px-12 relative z-20 mobile-text-center mobile-padding"
      >
        {/* Typography hierarchy với professional fonts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-caption text-amber-400/60 mb-6"
        >
          Wedding Invitation
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-heading text-display gradient-gold mb-8"
        >
          GOTHIC
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-subtitle text-gray-300">
            Min & Vi
          </h2>
          
          <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
          
          <p className="font-accent text-body text-gray-400 leading-relaxed">
            A story of eternal love written in shadows and starlight
          </p>
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <div className="text-caption text-amber-400/50">
            Scroll to continue
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const Chapter1 = () => (
  <div className="w-full h-screen relative overflow-hidden">
    {/* Full-screen hero image */}
    <div className="absolute inset-0">
      <img 
        src="https://placehold.co/1920x1080?text=Our+Love+Story&bg=2d2d2d&color=ffffff" 
        alt="Our Story"
        className="w-full h-full object-cover"
      />
      {/* Professional dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Designer content card - positioned like magazine layout */}
    <div className="absolute bottom-20 left-20 right-20 md:right-auto md:w-96 chapter-card-mobile">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="interactive-card interactive-border bg-black/80 backdrop-blur-xl p-8 border border-white/10 mobile-padding"
      >
        {/* Chapter indicator */}
        <div className="text-caption text-amber-400/60 mb-4 hover-underline">
          Chapter One
        </div>

        <h1 className="font-heading text-hero gradient-gold mb-4 hover-glow">
          OUR STORY
        </h1>
        
        <div className="w-12 h-px bg-amber-400 mb-6"></div>
        
        <p className="font-accent text-body text-gray-300 leading-relaxed">
          How we met in the mystic shadows of a coffee shop, where destiny 
          intertwined our souls under candlelight. A moment that changed everything.
        </p>

        {/* Professional detail */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <span className="text-caption text-amber-400/80 magnetic-hover touch-target">Min & Vi</span>
        </div>
      </motion.div>
    </div>

    {/* Decorative corner elements */}
    <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 mobile-hidden"></div>
    <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 mobile-hidden"></div>
  </div>
);

const Chapter2 = () => (
  <div className="w-full h-screen relative overflow-hidden bg-black">
    {/* Grid layout - left content, right image */}
    <div className="h-full flex split-layout">
      {/* Left content panel */}
      <div className="w-2/5 h-full bg-gradient-to-br from-gray-900 to-black flex items-center mobile-full-width">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 
          }}
          className="px-16 py-20 mobile-padding mobile-text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5 
            }}
            className="text-caption text-purple-400/60 mb-6"
          >
            Chapter Two
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.7 
            }}
            className="font-heading text-display gradient-rose mb-8"
          >
            JOURNEY
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.2 
            }}
            className="w-20 h-px bg-purple-400 mb-8 origin-left"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.4 
            }}
            className="font-accent text-body-large text-gray-400 leading-relaxed mb-8 max-w-sm"
          >
            Every moment shared in moonlit adventures, building our eternal bond through time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.8 
            }}
            className="text-caption text-purple-400/80"
          >
            Together forever
          </motion.div>
        </motion.div>
      </div>

      {/* Right image panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3 
        }}
        className="w-3/5 h-full relative mobile-full-width"
      >
        <img 
          src="https://placehold.co/1200x1080?text=Love+Journey&bg=4a4a4a&color=dda0dd" 
          alt="Journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
        
        {/* Floating decorative element */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "8rem" }}
          transition={{ 
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 2 
          }}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 w-1 bg-purple-400/30 mobile-hidden"
        />
      </motion.div>
    </div>
  </div>
);

const Chapter3 = () => (
  <div className="w-full h-screen relative overflow-hidden">
    {/* Asymmetric composition */}
    <div className="absolute inset-0">
      <img 
        src="https://placehold.co/1920x1080?text=Sacred+Promise&bg=3a3a3a&color=87ceeb" 
        alt="Promise"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Content positioned asymmetrically */}
    <div className="absolute top-1/4 right-20 w-80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-right"
      >
        <div className="text-blue-400/60 text-xs tracking-[0.3em] uppercase mb-4">
          Chapter Three
        </div>

        <h1 
          className="text-4xl font-bold mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #87CEEB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PROMISE
        </h1>
        
        <div className="w-16 h-px bg-blue-400 ml-auto mb-6"></div>
        
        <p className="text-gray-300 leading-relaxed text-base">
          Together we promise to walk through shadows and light, bound by eternal love.
        </p>
      </motion.div>
    </div>

    {/* Geometric accent */}
    <div className="absolute bottom-20 left-20 w-24 h-24 border border-blue-400/30 rotate-45"></div>
  </div>
);

const Chapter4 = () => (
  <div className="w-full h-screen relative overflow-hidden">
    {/* Centered composition với sophisticated overlay */}
    <div className="absolute inset-0">
      <img 
        src="https://placehold.co/1920x1080?text=Wedding+Vows&bg=2a2a2a&color=ffd700" 
        alt="Wedding Vows"
        className="w-full h-full object-cover"
      />
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
    </div>

    {/* Centered content card với elegant framing */}
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2 
        }}
        className="text-center max-w-2xl px-8"
      >
        {/* Elegant frame border */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8 
          }}
          className="relative p-12 border border-amber-400/20"
        >
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-amber-400"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-amber-400"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-amber-400"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-amber-400"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.2 
            }}
            className="text-caption text-amber-400/60 mb-6"
          >
            Chapter Four
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.4 
            }}
            className="font-heading text-display gradient-gold mb-8"
          >
            VOWS
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 2 
            }}
            className="w-24 h-px bg-amber-400 mx-auto mb-8 origin-center"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 2.3 
            }}
            className="font-accent text-body-large text-gray-300 leading-relaxed"
          >
            Sacred words spoken under starlit skies, sealing our hearts for eternity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 2.8 
            }}
            className="mt-8 text-caption text-amber-400/80"
          >
            Min & Vi • Forever
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const EpilogueChapter = () => (
  <div className="w-full h-screen relative overflow-hidden bg-black">
    {/* Sophisticated composition - image với elegant text overlay */}
    <div className="h-full flex">
      {/* Image section với sophisticated overlay */}
      <div className="w-3/5 h-full relative">
        <img 
          src="https://placehold.co/1400x1080?text=Forever+Together&bg=1f1f1f&color=ffffff" 
          alt="Forever Together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/70"></div>
        
        {/* Elegant particle overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: Math.random() * 6 + 's',
                animationDuration: '12s',
                animationName: 'gothic-candle-flicker',
                animationIterationCount: 'infinite',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content section */}
      <div className="w-2/5 h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-center px-12"
        >
          <div className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8">
            Epilogue
          </div>

          <h1 className="text-5xl font-bold text-white mb-12 leading-none tracking-widest">
            FOREVER
          </h1>
          
          <p className="text-gray-400 leading-relaxed text-base mb-12 max-w-xs">
            Our love story continues into eternal darkness, where we shall dance forever in the moonlight.
          </p>

          {/* Elegant final ornament */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-white/20"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-12 h-px bg-white/20"></div>
          </div>

          <div className="mt-8 text-white/60 text-sm tracking-wide">
            The End
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default App;