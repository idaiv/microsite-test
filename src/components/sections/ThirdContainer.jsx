import React from 'react';
import SectionTitle from '../SectionTitle';
import MagicBento from '../MagicBento';

const ThirdContainer = () => {
  return (
    <section className="px-3 max-[1100px]:px-6 py-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>What's next?</SectionTitle>
        
        <div className="max-w-2xl">
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
            <h3 className="text-lg font-semibold text-white mb-4">
              Simpler Documents experience
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Build your native experience for uploading files, preview with the biggest third party editors and more.
            </p>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default ThirdContainer;