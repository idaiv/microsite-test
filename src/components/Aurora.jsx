import React, { useEffect, useRef } from 'react';

const Aurora = ({ 
  colorStops = ["#7A3AD4", "#37D9F3", "#722ED1"], 
  blend = 1, 
  amplitude = 1.0, 
  speed = 0.65 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation function
    const animate = () => {
      timeRef.current += speed * 0.01;
      
      // Clear canvas with transparency for blending
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;

      // Create aurora waves
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        
        // Add color stops
        colorStops.forEach((color, index) => {
          gradient.addColorStop(index / (colorStops.length - 1), color);
        });

        ctx.fillStyle = gradient;
        ctx.globalAlpha = blend * 0.3;
        
        ctx.beginPath();
        
        // Create wave path
        for (let x = 0; x <= width; x += 5) {
          const y = height / 2 + 
            Math.sin((x * 0.003) + timeRef.current + (i * 2)) * amplitude * 100 +
            Math.sin((x * 0.005) + timeRef.current * 1.5 + (i * 3)) * amplitude * 50;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Complete the path
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        
        // Apply blur effect
        ctx.filter = `blur(${40 + i * 20}px)`;
        ctx.fill();
        ctx.filter = 'none';
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorStops, blend, amplitude, speed]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        opacity: 0.6,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default Aurora;