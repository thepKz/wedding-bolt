import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import InvitationCard from './components/InvitationCard';
import WeddingDetails from './components/WeddingDetails';
import RSVPForm from './components/RSVPForm';
import PhotoGallery from './components/PhotoGallery';
import FloatingElements from './components/FloatingElements';

type Screen = 'welcome' | 'invitation' | 'details' | 'rsvp' | 'gallery' | 'thank-you';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen modern-bg relative overflow-hidden">
      <FloatingElements />
      
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
            onSubmit={() => handleScreenChange('thank-you')}
          />
        )}
        
        {currentScreen === 'gallery' && (
          <PhotoGallery 
            key="gallery"
            onBack={() => handleScreenChange('rsvp')}
          />
        )}
        
        {currentScreen === 'thank-you' && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <div className="text-center glass-card p-12 max-w-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="text-6xl mb-8"
              >
                ✨
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-crimson gradient-text mb-6">
                Cảm ơn bạn
              </h1>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Chúng tôi rất mong được chia sẻ ngày đặc biệt này cùng bạn
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScreenChange('welcome')}
                className="modern-button px-8 py-4 rounded-full font-medium"
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