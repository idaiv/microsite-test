import React from 'react';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center">
              <img src="/logo.svg" alt="Pimcore Logo" className="w-8 h-8" />
            </div>
          </div>
          
          <div className="text-white font-semibold text-lg leading-tight text-center">
            <div>Pimcore</div>
            <div>Studio UI</div>
          </div>
          
          <div className="text-white font-normal text-base">
            What's next?
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;