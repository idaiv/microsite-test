import React from 'react';
import Aurora from './Aurora';
import HeaderSection from './sections/HeaderSection';
import StickyParallaxTabs from './StickyParallaxTabs/StickyParallaxTabs';
import MainContainer from './sections/MainContainer';
import SecondContainer from './sections/SecondContainer';
import ThirdContainer from './sections/ThirdContainer';

const Homepage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#14041F'}}>
      {/* Aurora Background Animation */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <Aurora
          colorStops={["#5717AD", "#37D9F3", "#722ED1"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.6}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeaderSection />
        <StickyParallaxTabs />
        <MainContainer />
        <SecondContainer />
        <ThirdContainer />
      </div>
    </div>
  );
};

export default Homepage;