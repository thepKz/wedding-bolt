import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import PhotoAlbum from './components/PhotoAlbum';
import WeddingStory from './components/WeddingStory';
import FloatingElements from './components/FloatingElements';

type Screen = 'welcome' | 'album' | 'story';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="elegant-bg">
      <FloatingElements />
      
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <WelcomeScreen 
            key="welcome"
            onEnterAlbum={() => handleScreenChange('album')}
            onViewStory={() => handleScreenChange('story')}
          />
        )}
        
        {currentScreen === 'album' && (
          <PhotoAlbum 
            key="album"
            onBack={() => handleScreenChange('welcome')}
            onViewStory={() => handleScreenChange('story')}
          />
        )}
        
        {currentScreen === 'story' && (
          <WeddingStory 
            key="story"
            onBack={() => handleScreenChange('welcome')}
            onViewAlbum={() => handleScreenChange('album')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;