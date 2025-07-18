import React from 'react';
import Navigation from '../Navigation';

const HeaderSection = () => {
  return (
    <header className="relative min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-6 max-[1100px]:px-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white text-center max-w-4xl leading-tight">
          Unlimited potential brought by Studio UI
        </h1>
      </div>
    </header>
  );
};

export default HeaderSection;