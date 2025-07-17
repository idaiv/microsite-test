import React from 'react';

const ConfigCard = ({ title, description, hasVisual = false }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      
      {hasVisual && (
        <div className="mt-6 bg-slate-700/50 rounded-lg p-4 flex items-center justify-center h-32">
          <div className="flex gap-2">
            <div className="w-16 h-20 bg-blue-500/20 rounded border border-blue-500/50"></div>
            <div className="w-16 h-20 bg-purple-500/20 rounded border border-purple-500/50"></div>
            <div className="w-16 h-20 bg-pink-500/20 rounded border border-pink-500/50"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigCard;