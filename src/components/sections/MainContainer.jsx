import React from 'react';
import FeatureCard from '../FeatureCard';
import MagicBento from '../MagicBento';

const MainContainer = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 max-w-2xl">
            Flexibility like never before
          </h2>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            <h3 className="text-2xl font-bold text-white mb-4">Software Development Kit</h3>
            <p className="text-white/80">SDK allows you to build custom React widgets that seamlessly integrate with native UI, elevating Pimcore to new heights of customization, brand differentiation.</p>
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
            <h3 className="text-2xl font-bold text-white mb-4">Accessibility</h3>
            <p className="text-white/80">Now Pimcore Studio UI is more inclusive than ever before. With features ensuring a seamless experience for all users, aimed at.</p>
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
            <h3 className="text-2xl font-bold text-white mb-4">Theme it as you wish</h3>
            <p className="text-white/80">Build your ideal themes via our Studio-based theme builder. Choose from professional presets or craft unique visual experiences that bring your brand identity to life using user-modifying layouts.</p>
          </MagicBento>
        </div>

        {/* Bottom Row - 4 Widget Manager Cards */}
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
            <h3 className="text-2xl font-bold text-white mb-4">Widget manager</h3>
            <p className="text-white/80 mb-4">Empowers you to embed custom React components into Studio UI pages:</p>
            <ul className="space-y-2 text-white/70">
              <li>• Get perfect eye-catching UX in line with native Studio UI</li>
              <li>• Extend the UI for custom behaviors and use cases</li>
            </ul>
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
            <h3 className="text-2xl font-bold text-white mb-4">Widget manager</h3>
            <p className="text-white/80">Tailwind CSS styling support for React modules. Get perfect eye-catching UX in line with native Studio UI for custom behaviors and use cases.</p>
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
            <h3 className="text-2xl font-bold text-white mb-4">Widget manager</h3>
            <p className="text-white/80 mb-4">Empowers you to embed custom React components into Studio UI pages:</p>
            <ul className="space-y-2 text-white/70">
              <li>• Get perfect eye-catching UX in line with native Studio UI</li>
              <li>• Extend the UI for custom behaviors and use cases</li>
            </ul>
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
            <h3 className="text-2xl font-bold text-white mb-4">Widget manager</h3>
            <p className="text-white/80">Tailwind CSS styling support for React modules. Get perfect eye-catching UX in line with native Studio UI for custom behaviors and use cases.</p>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;