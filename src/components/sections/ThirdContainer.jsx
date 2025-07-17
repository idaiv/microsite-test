import React from 'react';
import SectionTitle from '../SectionTitle';
import MagicBento from '../MagicBento';

const ThirdContainer = () => {
  return (
    <section className="px-6 py-24 pb-32">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>What's next?</SectionTitle>
        
        <div className="max-w-2xl">
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
            <h3 className="text-2xl font-bold text-white mb-4">
              Simpler Documents experience
            </h3>
            <p className="text-white/80 leading-relaxed">
              Build your native experience for uploading files, preview with the biggest third party editors and more.
            </p>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default ThirdContainer;