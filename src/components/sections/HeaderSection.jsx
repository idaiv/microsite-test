import React, { useRef, useEffect } from 'react';
import Navigation from '../Navigation';

const HeaderSection = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay failure
      });
    }
  }, []);
  
  return (
    <header className="relative min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-[1100px]:px-12 pb-2">
        <div className="w-full max-w-6xl aspect-video mb-12 lg:mt-32">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/videos/Screen Recording 2025-04-26 at 20.30.02.mov" type="video/quicktime" />
            <source src="/videos/Screen Recording 2025-04-26 at 20.30.02.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-center max-w-4xl leading-tight">
          Unlimited potential brought by Studio UI
        </h1>
      </div>
    </header>
  );
};

export default HeaderSection;