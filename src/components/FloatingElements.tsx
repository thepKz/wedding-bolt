import React from 'react';

const FloatingElements: React.FC = () => {
  const elements = [
    { symbol: '✦', size: '12px', left: '10%', top: '20%', delay: '0s' },
    { symbol: '✧', size: '8px', left: '85%', top: '15%', delay: '2s' },
    { symbol: '✦', size: '10px', left: '15%', top: '70%', delay: '4s' },
    { symbol: '✧', size: '14px', left: '80%', top: '75%', delay: '6s' },
    { symbol: '✦', size: '6px', left: '50%', top: '10%', delay: '8s' },
    { symbol: '✧', size: '16px', left: '5%', top: '50%', delay: '10s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className="floating-element text-white/20"
          style={{
            left: element.left,
            top: element.top,
            fontSize: element.size,
            animationDelay: element.delay,
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;