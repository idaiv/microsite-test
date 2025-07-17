import React from 'react';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#FF6B6B"/>
            <path d="M15 15h10v10h-10z" fill="white"/>
          </svg>
          <span className="ml-3 text-white text-lg font-semibold">Studio</span>
        </div>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          What's new?
        </a>
      </div>
    </nav>
  );
};

export default Navigation;