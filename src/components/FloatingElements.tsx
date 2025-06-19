import React from 'react';

const FloatingElements: React.FC = () => {
  const elements = [
    { emoji: '🌹', delay: 0 },
    { emoji: '💕', delay: 1 },
    { emoji: '✨', delay: 2 },
    { emoji: '🦋', delay: 3 },
    { emoji: '💐', delay: 4 },
    { emoji: '🌸', delay: 5 },
  ];

  return (
    <div className="floating-petals">
      {elements.map((element, index) => (
        <div
          key={index}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;