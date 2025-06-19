import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface HeartIconProps {
  onClick: () => void;
  animate: boolean;
  showAnimation: boolean;
  isOpening?: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({ onClick, animate, showAnimation, isOpening = false }) => {
  const heartRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (showAnimation && pathRef.current) {
      // Heart opening animation using GSAP
      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      });

      if (isOpening) {
        // Scale up and fade out for transition effect
        gsap.to(heartRef.current, {
          scale: 3,
          opacity: 0,
          duration: 1.5,
          delay: 1.5,
          ease: "power2.inOut",
        });
      }
    }
  }, [showAnimation, isOpening]);

  return (
    <motion.div
      className="cursor-pointer select-none"
      whileHover={animate ? { scale: 1.1 } : {}}
      whileTap={animate ? { scale: 0.95 } : {}}
      onClick={onClick}
    >
      <svg
        ref={heartRef}
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        className={animate ? "animate-pulse-gentle" : ""}
      >
        <path
          ref={pathRef}
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke="#f9a8d4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};

export default HeartIcon;