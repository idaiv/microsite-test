import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import MagicBento from './MagicBento';

const CustomScrollStack = () => {
  // Background colors for each card
  const cardBackgrounds = ['#260C3F', '#310F50', '#39135E'];
  
  // Using the existing MagicBento grid from MainContainer as content for each ScrollStackItem
  const renderBentoGrid = () => (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Top Row - 3 Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={4}
          glowColor="114, 46, 209"
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Software Development Kit</h3>
          <p className="text-white/70 text-sm">SDK allows you to build custom React widgets that seamlessly integrate with native UI, elevating Pimcore to new heights of customization, brand differentiation.</p>
        </MagicBento>
        
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={4}
          glowColor="114, 46, 209"
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Accessibility</h3>
          <p className="text-white/70 text-sm">Now Pimcore Studio UI is more inclusive than ever before. With features ensuring a seamless experience for all users, aimed at.</p>
        </MagicBento>
        
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={4}
          glowColor="114, 46, 209"
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Theme it as you wish</h3>
          <p className="text-white/70 text-sm">Build your ideal themes via our Studio-based theme builder. Choose from professional presets or craft unique visual experiences that bring your brand identity to life using user-modifying layouts.</p>
        </MagicBento>
      </div>

      {/* Bottom Row - 2 Cards Centered */}
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={4}
          glowColor="114, 46, 209"
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Widget manager</h3>
          <p className="text-white/70 text-sm mb-4">Empowers you to embed custom React components into Studio UI pages:</p>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>• Get perfect eye-catching UX in line with native Studio UI</li>
            <li>• Extend the UI for custom behaviors and use cases</li>
          </ul>
        </MagicBento>
        
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={250}
          particleCount={4}
          glowColor="114, 46, 209"
          className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Performance Optimization</h3>
          <p className="text-white/70 text-sm">Lightning-fast rendering with optimized React components. Experience smooth interactions and instant feedback across all your Pimcore Studio workflows.</p>
        </MagicBento>
      </div>
    </div>
  );

  return (
    <section className="relative z-20">
      <ScrollStack
        className="relative"
        itemDistance={100}
        itemScale={0.02}
        itemStackDistance={40}
        stackPosition="50%"
        scaleEndPosition="40%"
        baseScale={0.92}
        rotationAmount={0}
        blurAmount={1.5}
        onStackComplete={() => console.log('Stack completed!')}
      >
        <ScrollStackItem itemClassName="rounded-3xl" style={{ backgroundColor: cardBackgrounds[0] }}>
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              For Customers
            </h2>
            {renderBentoGrid()}
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="rounded-3xl" style={{ backgroundColor: cardBackgrounds[1] }}>
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              For Developers
            </h2>
            {renderBentoGrid()}
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="rounded-3xl" style={{ backgroundColor: cardBackgrounds[2] }}>
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              For Teams
            </h2>
            {renderBentoGrid()}
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default CustomScrollStack;