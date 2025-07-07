import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  speed: number;
  drift: number;
  opacity: number;
  type: 'normal' | 'glow' | 'sparkle' | 'pulse';
}

interface LoveOrb {
  id: number;
  x: number;
  y: number;
  collected: boolean;
  title: string;
  description: string;
  glowColor: string;
  content: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface MapSectionProps {
  onComplete: () => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onComplete }) => {
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const [loveOrbs, setLoveOrbs] = useState<LoveOrb[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [collectedCount, setCollectedCount] = useState<number>(0);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true);
  const [isCollecting, setIsCollecting] = useState<boolean>(false);
  const [currentHover, setCurrentHover] = useState<number | null>(null);
  const [galaxyRotation, setGalaxyRotation] = useState<number>(0);

  // Enhanced love orbs data - NO IMAGES, only text content
  const orbsData: Omit<LoveOrb, 'id' | 'x' | 'y' | 'collected'>[] = useMemo(() => [
    {
      title: 'FIRST SPARK',
      description: 'Tia lửa đầu tiên',
      content: 'COFFEE',
      glowColor: 'from-amber-400 to-orange-500'
    },
    {
      title: 'CINEMA NIGHT',
      description: 'Đêm điện ảnh',
      content: 'MOVIE',
      glowColor: 'from-purple-400 to-pink-500'
    },
    {
      title: 'HEART SYNC',
      description: 'Đồng điệu trái tim',
      content: 'LOVE',
      glowColor: 'from-rose-400 to-red-500'
    },
    {
      title: 'SKY JOURNEY',
      description: 'Hành trình trên không',
      content: 'TRAVEL',
      glowColor: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'GOLDEN PROMISE',
      description: 'Lời hứa vàng',
      content: 'RING',
      glowColor: 'from-yellow-400 to-amber-500'
    },
    {
      title: 'ETERNAL BOND',
      description: 'Kết nối vĩnh cửu',
      content: 'WEDDING',
      glowColor: 'from-violet-400 to-purple-500'
    }
  ], []);

  // Enhanced heart types and colors
  const heartTypes = ['💖', '💕', '💝', '💗', '💘', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜'];
  const heartColors = [
    'rgb(255, 182, 193)', 'rgb(255, 105, 180)', 'rgb(255, 20, 147)',
    'rgb(255, 69, 0)', 'rgb(255, 140, 0)', 'rgb(255, 215, 0)',
    'rgb(50, 205, 50)', 'rgb(0, 191, 255)', 'rgb(138, 43, 226)',
    'rgb(255, 0, 255)', 'rgb(220, 20, 60)', 'rgb(255, 99, 71)'
  ];

  // Initialize orbs with enhanced positioning in perfect circle
  useEffect(() => {
    const newOrbs = orbsData.map((data, index) => {
      const angle = (index * 60) * (Math.PI / 180); // 360/6 = 60 degrees apart
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.28;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      return {
        id: index + 1,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        collected: false,
        ...data
      };
    });
    setLoveOrbs(newOrbs);
  }, [orbsData]);

  // Enhanced floating hearts system
  const createFloatingHeart = useCallback(() => {
    const types: FloatingHeart['type'][] = ['normal', 'glow', 'sparkle', 'pulse'];
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 50,
      size: Math.random() * 30 + 20,
      rotation: Math.random() * 360,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      speed: Math.random() * 3 + 2,
      drift: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.7 + 0.3,
      type: types[Math.floor(Math.random() * types.length)]
    };
  }, []);

  // Enhanced particle system
  const createParticles = useCallback((x: number, y: number, count: number = 20) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: Math.random(),
        x: x + (Math.random() - 0.5) * 60,
        y: y + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15,
        life: 80,
        maxLife: 80,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
        size: Math.random() * 12 + 6
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Galaxy rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setGalaxyRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Enhanced floating hearts animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Add new hearts
      if (floatingHearts.length < 120) {
        setFloatingHearts(prev => [...prev, createFloatingHeart()]);
      }
      
      // Update existing hearts
      setFloatingHearts(prev => prev
        .map(heart => ({
          ...heart,
          y: heart.y - heart.speed,
          x: heart.x + heart.drift,
          rotation: heart.rotation + 2,
        }))
        .filter(heart => heart.y > -100 && heart.x > -100 && heart.x < window.innerWidth + 100)
      );
    }, 80);

    return () => clearInterval(interval);
  }, [createFloatingHeart, floatingHearts.length]);

  // Particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 1,
          vx: particle.vx * 0.98,
          vy: particle.vy * 0.98
        }))
        .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Enhanced orb collection
  const handleOrbClick = useCallback((orb: LoveOrb) => {
    if (orb.collected || isCollecting) return;
    
    setIsCollecting(true);
    createParticles(orb.x, orb.y, 30);
    
    setLoveOrbs(prev => 
      prev.map(o => 
        o.id === orb.id ? { ...o, collected: true } : o
      )
    );
    
    const newCount = collectedCount + 1;
    setCollectedCount(newCount);
    
    if (newCount >= orbsData.length) {
      setTimeout(() => {
        setGameCompleted(true);
        // Call onComplete instead of scroll
        setTimeout(() => {
          onComplete();
        }, 3000);
      }, 1000);
    }
    
    setTimeout(() => setIsCollecting(false), 500);
  }, [collectedCount, orbsData.length, createParticles, isCollecting, onComplete]);

  const resetGame = useCallback(() => {
    setLoveOrbs(prev => prev.map(o => ({ ...o, collected: false })));
    setCollectedCount(0);
    setGameCompleted(false);
    setParticles([]);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/20 to-pink-900/10" />
        <div className="absolute inset-0">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced floating hearts with different types */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map(heart => (
      <motion.div 
            key={heart.id}
            className={`absolute text-2xl ${
              heart.type === 'glow' ? 'filter drop-shadow-lg' :
              heart.type === 'sparkle' ? 'animate-ping' :
              heart.type === 'pulse' ? 'animate-pulse' : ''
            }`}
            style={{
              left: heart.x,
              top: heart.y,
              fontSize: heart.size,
              color: heart.color,
              opacity: heart.opacity,
              transform: `rotate(${heart.rotation}deg)`,
              filter: heart.type === 'glow' ? `drop-shadow(0 0 15px ${heart.color})` : 'none'
            }}
            animate={{
              scale: heart.type === 'pulse' ? [1, 1.3, 1] : 1,
              rotate: heart.rotation
            }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity },
              rotate: { duration: 3, ease: "linear", repeat: Infinity }
            }}
          >
            {heartTypes[Math.floor(Math.random() * heartTypes.length)]}
          </motion.div>
        ))}
      </div>

      {/* Particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life / particle.maxLife,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
          />
        ))}
      </div>

      {/* Main game content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        {/* Enhanced title with cosmic font */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-wider"
              style={{ fontFamily: 'Orbitron, "Space Mono", monospace' }}>
            ETERNAL LOVE
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-8 tracking-wide"
              style={{ fontFamily: 'Exo, "Rajdhani", sans-serif' }}>
            GALAXY
          </h2>
          <div className="flex items-center justify-center space-x-6 text-white/80">
            <span className="text-3xl animate-pulse">✨</span>
            <p className="text-xl md:text-2xl font-medium tracking-widest" style={{ fontFamily: 'Audiowide, monospace' }}>
              Thu thập năng lượng tình yêu
            </p>
            <span className="text-3xl animate-pulse">✨</span>
          </div>
        </motion.div>

        {/* Enhanced progress display */}
        <motion.div 
          className="mb-12 text-center"
          animate={{ rotate: galaxyRotation * 0.5 }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <div className="inline-flex items-center space-x-6 bg-black/40 backdrop-blur-lg rounded-full px-10 py-5 border border-purple-500/40">
            <span className="text-3xl md:text-4xl font-bold text-cyan-400" style={{ fontFamily: 'Orbitron, monospace' }}>
              {collectedCount}/{orbsData.length}
            </span>
            <span className="text-white/80 font-medium tracking-wide text-lg" style={{ fontFamily: 'Exo, sans-serif' }}>
              ORB ENERGY
            </span>
          </div>
        </motion.div>

        {/* Enhanced love orbs - NO IMAGES, pure text design */}
        <div className="relative w-full max-w-5xl mx-auto">
          {loveOrbs.map((orb, index) => (
              <motion.div 
              key={orb.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                orb.collected ? 'pointer-events-none' : 'hover:scale-110'
              }`}
              style={{
                left: orb.x,
                top: orb.y
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: orb.collected ? 0 : 1, 
                opacity: orb.collected ? 0 : 1,
                rotate: galaxyRotation + (index * 60)
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 120
              }}
              onClick={() => handleOrbClick(orb)}
              onHoverStart={() => setCurrentHover(orb.id)}
              onHoverEnd={() => setCurrentHover(null)}
            >
              {/* Enhanced orb circle - PURE TEXT, NO IMAGES */}
              <div className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl bg-gradient-to-br ${orb.glowColor} flex items-center justify-center`}>
                
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${orb.glowColor} opacity-60 animate-pulse`} />
                
                {/* Text content - NO ICONS */}
                <div className="relative z-10 text-center">
                  <div className="text-white font-black text-lg md:text-xl mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {orb.content}
                  </div>
                  <div className="text-white/90 font-bold text-xs md:text-sm" style={{ fontFamily: 'Exo, sans-serif' }}>
                    {orb.title}
                  </div>
                </div>

                {/* Pulse ring effect */}
              <motion.div 
                  className="absolute -inset-4 border-2 border-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
              </div>
              
              {/* Enhanced hover info */}
              <AnimatePresence>
                {currentHover === orb.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-purple-500/40 min-w-max"
                  >
                    <p className="text-white font-bold mb-1 text-lg" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {orb.title}
                    </p>
                    <p className="text-purple-300 text-sm" style={{ fontFamily: 'Exo, sans-serif' }}>
                      {orb.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
            </div>

        {/* Enhanced welcome modal */}
        <AnimatePresence>
          {showWelcomeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
              onClick={() => setShowWelcomeModal(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
                className="bg-gradient-to-br from-purple-900/95 to-black/95 backdrop-blur-xl rounded-3xl p-10 max-w-lg mx-auto border border-purple-500/40 text-center"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-8xl mb-6 animate-bounce">🌌</div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Orbitron, monospace' }}>
                  ETERNAL LOVE GALAXY
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed text-lg" style={{ fontFamily: 'Exo, sans-serif' }}>
                  Thu thập tất cả năng lượng tình yêu để mở khóa thiệp mời
                </p>
                <button
                  onClick={() => setShowWelcomeModal(false)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                  style={{ fontFamily: 'Audiowide, monospace' }}
                >
                  🚀 BẮT ĐẦU THU THẬP
                </button>
              </motion.div>
        </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced completion modal */}
        <AnimatePresence>
          {gameCompleted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.3, opacity: 0, rotate: -360 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.3, opacity: 0, rotate: 360 }}
                className="bg-gradient-to-br from-pink-900/95 to-purple-900/95 backdrop-blur-xl rounded-3xl p-12 max-w-2xl mx-auto border border-pink-500/40 text-center"
              >
                <div className="text-9xl mb-8 animate-bounce">🎉</div>
                <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
                    style={{ fontFamily: 'Orbitron, monospace' }}>
                  ENERGY COMPLETE!
                </h3>
                <p className="text-white/95 mb-8 text-xl leading-relaxed" style={{ fontFamily: 'Exo, sans-serif' }}>
                  Bạn đã thu thập đủ năng lượng tình yêu! Chuẩn bị chuyển đến thiệp mời...
                </p>
                <div className="text-3xl mb-6">💕 ⚡ 🌟 💖 ✨</div>
        <motion.div
                  className="text-white/80 text-lg"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontFamily: 'Audiowide, monospace' }}
                >
                  Đang chuyển trang...
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced reset button */}
        <motion.button
          onClick={resetGame}
          className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border border-cyan-400/40"
          style={{ fontFamily: 'Audiowide, monospace' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔄 RESET ENERGY
        </motion.button>
          </div>

      {/* Enhanced Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo:wght@400;600;700&family=Audiowide&family=Space+Mono:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default MapSection; 