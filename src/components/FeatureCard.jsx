import React from 'react';

const FeatureCard = ({ title, description, items, theme = 'dark', hasImage = false, imageSrc }) => {
  const bgColor = theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/10';
  const textColor = theme === 'dark' ? 'text-white' : 'text-white';
  
  return (
    <div className={`${bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/10`}>
      <h3 className={`text-2xl font-bold ${textColor} mb-4`}>{title}</h3>
      <p className={`${textColor}/80 mb-6`}>{description}</p>
      
      {items && (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className={`${textColor}/70 flex items-start`}>
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      {hasImage && imageSrc && (
        <div className="mt-6">
          <img src={imageSrc} alt={title} className="w-full rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;