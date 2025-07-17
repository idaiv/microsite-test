import React from 'react';
import ConfigCard from '../ConfigCard';
import SectionTitle from '../SectionTitle';
import MagicBento from '../MagicBento';

const SecondContainer = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Much more than a new UI</SectionTitle>
        
        {/* Top Row - Clutter-Free Design + Mercure Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Clutter-Free Design Card */}
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="132, 0, 255"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Clutter-Free Design</h3>
            <p className="text-white/80 mb-6">
              Minimalist approach puts content first. A distraction-free interface allows you to focus on what matters most: creating and managing exceptional digital experiences.
            </p>
            
            {/* Visual mockup matching Figma */}
            <div className="mt-6 bg-slate-700/50 rounded-lg p-6 flex items-center justify-center h-32">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <div className="w-16 h-4 bg-blue-500/30 rounded"></div>
                  <div className="w-20 h-4 bg-white/20 rounded"></div>
                  <div className="w-14 h-4 bg-white/20 rounded"></div>
                </div>
                <div className="w-24 h-20 bg-white/10 rounded border border-white/20"></div>
              </div>
            </div>
          </MagicBento>
          
          {/* Mercure + RTK Query Cards */}
          <div className="grid grid-cols-2 gap-6">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Mercure + RTK Query</h4>
              <p className="text-white/70 text-sm">Real-time updates</p>
            </MagicBento>
            
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Mercure + RTK Query</h4>
              <p className="text-white/70 text-sm">Advanced queries</p>
            </MagicBento>
          </div>
        </div>
        
        {/* Bottom Row - Smooth configurations Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="132, 0, 255"
          >
            <h4 className="text-xl font-semibold text-white mb-3">Smooth configurations</h4>
            <p className="text-white/70 text-sm leading-relaxed">Build your configurations with simple, structured JSON files. These config files allow you to define your desired layout with the greatest flexibility and control.</p>
            
            <div className="mt-6 bg-slate-700/50 rounded-lg p-4 flex items-center justify-center h-32">
              <div className="flex gap-2">
                <div className="w-16 h-20 bg-blue-500/20 rounded border border-blue-500/50"></div>
                <div className="w-16 h-20 bg-purple-500/20 rounded border border-purple-500/50"></div>
                <div className="w-16 h-20 bg-pink-500/20 rounded border border-pink-500/50"></div>
              </div>
            </div>
          </MagicBento>
          
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="132, 0, 255"
          >
            <h4 className="text-xl font-semibold text-white mb-3">Smooth configurations</h4>
            <p className="text-white/70 text-sm leading-relaxed">Quick and straightforward way to control your UI/UX experience with few lines of config files.</p>
            
            <div className="mt-6 bg-slate-700/50 rounded-lg p-4 flex items-center justify-center h-32">
              <div className="flex gap-2">
                <div className="w-16 h-20 bg-blue-500/20 rounded border border-blue-500/50"></div>
                <div className="w-16 h-20 bg-purple-500/20 rounded border border-purple-500/50"></div>
                <div className="w-16 h-20 bg-pink-500/20 rounded border border-pink-500/50"></div>
              </div>
            </div>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default SecondContainer;