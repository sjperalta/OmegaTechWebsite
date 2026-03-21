import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.classList.contains('cursor-pointer')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Outer Ring */}
      <div 
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 border-2 border-primary/30 rounded-full transition-all duration-300 ease-out",
          isHovering ? "w-16 h-16 border-primary bg-primary/5" : "w-10 h-10",
          isClicking ? "scale-75 opacity-50" : "scale-100 opacity-100"
        )}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      
      {/* Inner Dot */}
      <div 
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full transition-all duration-150",
          isHovering ? "w-2 h-2" : "w-1.5 h-1.5",
          isClicking ? "scale-150" : "scale-100"
        )}
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full blur-xl transition-all duration-500",
          isHovering ? "w-24 h-24 opacity-100" : "w-0 h-0 opacity-0"
        )}
        style={{ left: mousePos.x, top: mousePos.y }}
      />
    </div>
  );
};

export default CustomCursor;
