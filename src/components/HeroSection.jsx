import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
          Unlimited potential brought by Studio UI
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;