import React from 'react';
import Navigation from '../Navigation';

const HeaderSection = () => {
  return (
    <header className="relative min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center max-w-5xl leading-tight">
          Unlimited potential brought by Studio UI
        </h1>
      </div>
    </header>
  );
};

export default HeaderSection;