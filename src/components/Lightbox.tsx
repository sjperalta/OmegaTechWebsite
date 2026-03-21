import React, { useEffect } from 'react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-black/90 backdrop-blur-[10px] z-[9999] flex items-center justify-center cursor-zoom-out animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-[zoomIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_24px_48px_rgba(0,0,0,0.5)] border border-white/10"
        />
        
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 bg-transparent border-none text-white text-3xl cursor-pointer p-2 flex items-center justify-center opacity-70 transition-opacity duration-200 hover:opacity-100"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
