import React from 'react';
import MagicBento from '../MagicBento';
import Aurora from '../Aurora'; // Add this import

const MainContainer = () => {
  return (
    <section className="relative px-3 max-[1100px]:px-6 py-12">
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 max-w-2xl min-[700px]:pl-5">
            Flexibility like never before
          </h2>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
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
            <h3 className="text-lg font-semibold text-white mb-2">Software Development Kit</h3>
            <p className="text-white/70 text-sm">SDK allows you to build custom React widgets that seamlessly integrate with native UI, elevating Pimcore to new heights of customization, brand differentiation.</p>
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
            <h3 className="text-lg font-semibold text-white mb-2">Accessibility</h3>
            <p className="text-white/70 text-sm">Now Pimcore Studio UI is more inclusive than ever before. With features ensuring a seamless experience for all users, aimed at.</p>
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
            <h3 className="text-lg font-semibold text-white mb-2">Theme it as you wish</h3>
            <p className="text-white/70 text-sm">Build your ideal themes via our Studio-based theme builder. Choose from professional presets or craft unique visual experiences that bring your brand identity to life using user-modifying layouts.</p>
          </MagicBento>
        </div>

        {/* Bottom Row - 4 Widget Manager Cards */}
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
            <h3 className="text-lg font-semibold text-white mb-2">Widget manager</h3>
            <p className="text-white/70 text-sm mb-4">Empowers you to embed custom React components into Studio UI pages:</p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Get perfect eye-catching UX in line with native Studio UI</li>
              <li>• Extend the UI for custom behaviors and use cases</li>
            </ul>
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
            <h3 className="text-lg font-semibold text-white mb-2">Theme it as you wish</h3>
            <p className="text-white/70 text-sm">Build your ideal themes via our Studio-based theme builder. Choose from professional presets or craft unique visual experiences that bring your brand identity to life using user-modifying layouts.</p>
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
            <h3 className="text-lg font-semibold text-white mb-2">Widget manager</h3>
            <p className="text-white/70 text-sm mb-4">Empowers you to embed custom React components into Studio UI pages:</p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Get perfect eye-catching UX in line with native Studio UI</li>
              <li>• Extend the UI for custom behaviors and use cases</li>
            </ul>
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
            <h3 className="text-lg font-semibold text-white mb-2">Widget manager</h3>
            <p className="text-white/70 text-sm">Tailwind CSS styling support for React modules. Get perfect eye-catching UX in line with native Studio UI for custom behaviors and use cases.</p>
          </MagicBento>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;