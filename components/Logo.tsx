import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-4 lg:h-7' }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="40"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="46"
        fill="#E5094F"
        letterSpacing="-1"
      >
        CINE
      </text>
      <text
        x="112"
        y="40"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="46"
        fill="#FFFFFF"
        letterSpacing="-1"
      >
        BOX
      </text>
    </svg>
  );
};

export default Logo;