import React from 'react';
import Aurora from './Aurora';
import HeaderSection from './sections/HeaderSection';
import MainContainer from './sections/MainContainer';
import SecondContainer from './sections/SecondContainer';
import ThirdContainer from './sections/ThirdContainer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Aurora Background Animation */}
      <Aurora
        colorStops={["#7A3AD4", "#37D9F3", "#722ED1"]}
        blend={1}
        amplitude={1.0}
        speed={0.65}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeaderSection />
        <MainContainer />
        <SecondContainer />
        <ThirdContainer />
      </div>
    </div>
  );
};

export default Homepage;