import React from 'react';

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-white mb-12 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;