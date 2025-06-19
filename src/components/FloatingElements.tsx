import React from 'react';

const FloatingElements: React.FC = () => {
  const elements = [
    { symbol: '✦', size: '16px', left: '5%', top: '15%', delay: '0s' },
    { symbol: '❋', size: '12px', left: '90%', top: '20%', delay: '2s' },
    { symbol: '✦', size: '14px', left: '10%', top: '60%', delay: '4s' },
    { symbol: '❋', size: '18px', left: '85%', top: '70%', delay: '6s' },
    { symbol: '✦', size: '10px', left: '50%', top: '10%', delay: '8s' },
    { symbol: '❋', size: '20px', left: '3%', top: '80%', delay: '10s' },
    { symbol: '✦', size: '8px', left: '95%', top: '50%', delay: '12s' },
    { symbol: '❋', size: '16px', left: '15%', top: '30%', delay: '14s' },
  ];

  return (
    <div className="floating-elements">
      {elements.map((element, index) => (
        <div
          key={index}
          className="floating-element"
          style={{
            left: element.left,
            top: element.top,
            fontSize: element.size,
            animationDelay: element.delay,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;