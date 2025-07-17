import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MagicBento = ({
  children,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255",
  className = ""
}) => {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const starsRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    if (enableStars) {
      createStars();
    }

    // Set up event listeners
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Tilt effect
      if (enableTilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(container, {
          duration: 0.3,
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          ease: "power2.out"
        });
      }

      // Magnetism effect
      if (enableMagnetism) {
        const strength = 0.3;
        const deltaX = (x - rect.width / 2) * strength;
        const deltaY = (y - rect.height / 2) * strength;
        
        gsap.to(container, {
          duration: 0.4,
          x: deltaX,
          y: deltaY,
          ease: "power2.out"
        });
      }

      // Spotlight effect
      if (enableSpotlight && spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          duration: 0.3,
          left: x - spotlightRadius / 2,
          top: y - spotlightRadius / 2,
          ease: "power2.out"
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      
      if (enableBorderGlow) {
        gsap.to(container, {
          duration: 0.3,
          boxShadow: `0 0 30px rgba(${glowColor}, 0.3), 0 0 60px rgba(${glowColor}, 0.2)`,
          ease: "power2.out"
        });
      }

      // Animate stars
      if (enableStars) {
        starsRef.current.forEach((star, index) => {
          gsap.to(star, {
            duration: 0.5,
            scale: 1.2,
            opacity: 0.8,
            delay: index * 0.1,
            ease: "power2.out"
          });
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      
      // Reset tilt and magnetism
      gsap.to(container, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
        ease: "power2.out"
      });

      // Reset stars
      if (enableStars) {
        starsRef.current.forEach((star) => {
          gsap.to(star, {
            duration: 0.3,
            scale: 1,
            opacity: 0.4,
            ease: "power2.out"
          });
        });
      }
    };

    const handleClick = (e) => {
      if (clickEffect) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0px';
        ripple.style.height = '0px';
        ripple.style.background = `rgba(${glowColor}, 0.3)`;
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '10';
        
        container.appendChild(ripple);
        
        gsap.to(ripple, {
          duration: 0.6,
          width: '200px',
          height: '200px',
          opacity: 0,
          ease: "power2.out",
          onComplete: () => {
            container.removeChild(ripple);
          }
        });

        // Scale effect
        gsap.to(container, {
          duration: 0.1,
          scale: 0.98,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
    };
  }, [enableTilt, enableMagnetism, enableStars, enableSpotlight, enableBorderGlow, clickEffect, spotlightRadius, glowColor]);

  const createStars = () => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing stars
    starsRef.current.forEach(star => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    });
    starsRef.current = [];

    // Create new stars
    for (let i = 0; i < particleCount; i++) {
      const star = document.createElement('div');
      star.className = 'magic-star';
      star.style.position = 'absolute';
      star.style.width = '2px';
      star.style.height = '2px';
      star.style.background = `rgba(${glowColor}, 0.4)`;
      star.style.borderRadius = '50%';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '1';
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      container.appendChild(star);
      starsRef.current.push(star);

      // Animate star
      gsap.to(star, {
        duration: 2 + Math.random() * 3,
        opacity: 0.1,
        scale: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight Effect */}
      {enableSpotlight && (
        <div
          ref={spotlightRef}
          className="absolute pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            width: `${spotlightRadius}px`,
            height: `${spotlightRadius}px`,
            background: `radial-gradient(circle, rgba(${glowColor}, 0.1) 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: 2,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>

      {/* Text Auto Hide Effect */}
      {textAutoHide && (
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: isHovered ? 'transparent' : 'rgba(15, 23, 42, 0.1)',
            opacity: isHovered ? 0 : 1
          }}
        />
      )}
    </div>
  );
};

export default MagicBento;