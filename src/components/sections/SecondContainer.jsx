import React from 'react';
import ConfigCard from '../ConfigCard';
import SectionTitle from '../SectionTitle';
import MagicBento from '../MagicBento';

const SecondContainer = () => {
  return (
    <section className="px-3 max-[1100px]:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Much more than a new UI</SectionTitle>
        
        {/* Top Row - Clutter-Free Design + Mercure Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Clutter-Free Design Card */}
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="114, 46, 209"
            className="backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Clutter-Free Design</h3>
              <p className="text-white/70 text-sm mb-6">
                Minimalist approach puts content first. A distraction-free interface allows you to focus on what matters most: creating and managing exceptional digital experiences.
              </p>
              
              {/* Visual mockup matching Figma */}
              <div className="mt-6 bg-slate-800/50 rounded-lg p-4 flex items-center justify-center h-24">
                <div className="flex gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="w-12 h-2 bg-blue-500/40 rounded"></div>
                    <div className="w-16 h-2 bg-white/20 rounded"></div>
                    <div className="w-10 h-2 bg-white/20 rounded"></div>
                  </div>
                  <div className="w-16 h-12 bg-white/10 rounded border border-white/20"></div>
                </div>
              </div>
            </div>
          </MagicBento>
          
          {/* Mercure + RTK Query Cards */}
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="114, 46, 209"
            className="backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Mercure + RTK Query</h4>
              <p className="text-white/70 text-sm">Real-time updates</p>
            </div>
          </MagicBento>
          
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="114, 46, 209"
            className="backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Mercure + RTK Query</h4>
              <p className="text-white/70 text-sm">Advanced queries</p>
            </div>
          </MagicBento>
        </div>
        
        {/* Bottom Row - Smooth configurations Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="114, 46, 209"
            className="backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Smooth configurations</h4>
              <p className="text-white/70 text-sm leading-relaxed">Build your configurations with simple, structured JSON files. These config files allow you to define your desired layout with the greatest flexibility and control.</p>
              
              <div className="mt-6 bg-slate-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <div className="w-full max-w-xs bg-slate-700/50 rounded p-2">
                  <div className="text-white/40 text-xs font-mono">{"{"}</div>
                  <div className="text-white/60 text-xs font-mono ml-2">"layout": "grid"</div>
                  <div className="text-white/40 text-xs font-mono">{"}"}</div>
                </div>
              </div>
            </div>
          </MagicBento>
          
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={350}
            particleCount={12}
            glowColor="114, 46, 209"
            className="backdrop-blur-md rounded-2xl p-6 transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Smooth configurations</h4>
              <p className="text-white/70 text-sm leading-relaxed">Quick and straightforward way to control your UI/UX experience with few lines of config files.</p>
              
              <div className="mt-6 bg-slate-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <div className="w-full max-w-xs bg-slate-700/50 rounded p-2">
                  <div className="text-white/40 text-xs font-mono">{"{"}</div>
                  <div className="text-white/60 text-xs font-mono ml-2">"theme": "dark"</div>
                  <div className="text-white/40 text-xs font-mono">{"}"}</div>
                </div>
              </div>
            </div>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default SecondContainer;