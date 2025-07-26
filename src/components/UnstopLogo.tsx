import React from 'react';

const UnstopLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <img 
      src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/logos/unstop_logo_new.svg"
      alt="Unstop Logo"
      className={className}
      onError={(e) => {
        // Fallback to text if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.createElement('span');
        fallback.textContent = 'Unstop';
        fallback.className = 'text-cyan-400 font-bold text-xl';
        target.parentNode?.appendChild(fallback);
      }}
    />
  );
};

export default UnstopLogo;