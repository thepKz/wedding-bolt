import React from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="floating-hearts">
      {hearts.map((heart, index) => (
        <div
          key={heart}
          className="floating-heart text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;