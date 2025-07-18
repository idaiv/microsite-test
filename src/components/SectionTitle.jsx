import React from 'react';

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-semibold text-white mb-8 min-[700px]:pl-5 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;