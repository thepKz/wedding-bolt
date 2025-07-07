import { useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import FloatingElements from './components/FloatingElements';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import Footer from './components/ui/Footer';
import FullscreenButton from './components/ui/FullscreenButton';
import InvitationSection from './sections/InvitationSection';
import MapSection from './sections/MapSection';
import RsvpSection from './sections/RsvpSection';

function App() {
  // Auto fullscreen functionality
  useEffect(() => {
    const handleFullscreen = async () => {
      try {
        // Check if fullscreen is supported
        if (document.documentElement.requestFullscreen) {
          // Add click listener to trigger fullscreen on first user interaction
          const triggerFullscreen = async () => {
            try {
              if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                console.log('Fullscreen activated');
              }
            } catch (error) {
              console.log('Fullscreen not allowed or failed:', error);
            }
          };

          // Auto-trigger on first click/touch anywhere
          document.addEventListener('click', triggerFullscreen, { once: true });
          document.addEventListener('touchstart', triggerFullscreen, { once: true });
          
          // Also try to trigger on page load (may not work due to browser policies)
          if (document.readyState === 'complete') {
            setTimeout(triggerFullscreen, 1000);
          }
        }
      } catch (error) {
        console.log('Fullscreen API not supported:', error);
      }
    };

    handleFullscreen();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-x-hidden">
      <FloatingElements />
      
      <main className="relative z-10">
        <InvitationSection />
        <CountdownTimer />
        <Timeline />
        <PhotoGallery />
        <RsvpSection />
        <MapSection onComplete={() => {
          console.log('Map section completed');
        }} />
      </main>
      
      <Footer />
      <FullscreenButton />
    </div>
  );
}

export default App;