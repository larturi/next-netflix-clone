import React from 'react';

const DisclaimerBanner: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-yellow-500 text-black text-center py-2 px-4 text-xs md:text-sm font-semibold">
      Portfolio Demo Project — This is NOT a real streaming service. Built for educational purposes only.
    </div>
  );
};

export default DisclaimerBanner;