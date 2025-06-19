import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import WelcomeScreen from './components/WelcomeScreen';
import InvitationCard from './components/InvitationCard';
import WeddingDetails from './components/WeddingDetails';
import RSVPForm from './components/RSVPForm';
import PhotoGallery from './components/PhotoGallery';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';

type Screen = 'welcome' | 'invitation' | 'details' | 'rsvp' | 'gallery' | 'celebration';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
    if (screen === 'celebration') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div className="min-h-screen luxury-bg relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#DC143C']}
        />
      )}
      
      <FloatingElements />
      <MusicPlayer />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <WelcomeScreen 
            key="welcome"
            onNext={() => handleScreenChange('invitation')} 
          />
        )}
        
        {currentScreen === 'invitation' && (
          <InvitationCard 
            key="invitation"
            onNext={() => handleScreenChange('details')}
            onBack={() => handleScreenChange('welcome')}
          />
        )}
        
        {currentScreen === 'details' && (
          <WeddingDetails 
            key="details"
            onNext={() => handleScreenChange('rsvp')}
            onBack={() => handleScreenChange('invitation')}
          />
        )}
        
        {currentScreen === 'rsvp' && (
          <RSVPForm 
            key="rsvp"
            onNext={() => handleScreenChange('gallery')}
            onBack={() => handleScreenChange('details')}
            onCelebrate={() => handleScreenChange('celebration')}
          />
        )}
        
        {currentScreen === 'gallery' && (
          <PhotoGallery 
            key="gallery"
            onBack={() => handleScreenChange('rsvp')}
          />
        )}
        
        {currentScreen === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="text-center glass-effect p-12 rounded-3xl golden-border max-w-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-8xl mb-6"
              >
                💍
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-great-vibes text-gold mb-6 text-shadow-gold">
                Cảm ơn bạn!
              </h1>
              <p className="text-xl text-burgundy font-montserrat mb-8">
                Chúng tôi rất mong được chia sẻ ngày đặc biệt này cùng bạn
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScreenChange('welcome')}
                className="px-8 py-4 bg-gradient-to-r from-gold to-rose-gold text-white font-semibold rounded-full hover-lift"
              >
                Quay lại trang chủ
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;