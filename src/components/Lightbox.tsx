import React, { useEffect } from 'react';

interface LightboxProps {
  images: { src: string, alt: string }[];
  currentIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex: initialIndex, onClose }) => {
  const [index, setIndex] = React.useState(initialIndex);

  useEffect(() => {
    const handleEvents = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleEvents);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEvents);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, images.length]);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-2xl z-[9999] flex items-center justify-center cursor-zoom-out animate-[fadeIn_0.3s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={images[index].src} 
          alt={images[index].alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-[zoomIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-[-80px] text-white p-4 hover:bg-white/10 rounded-full transition-all hidden md:block"
            >
              <span className="material-symbols-outlined text-4xl text-on-primary">chevron_left</span>
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-[-80px] text-white p-4 hover:bg-white/10 rounded-full transition-all hidden md:block"
            >
              <span className="material-symbols-outlined text-4xl text-on-primary">chevron_right</span>
            </button>
          </>
        )}

        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="material-symbols-outlined text-3xl text-on-primary">close</span>
        </button>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase font-bold tracking-[0.3em]">
          {index + 1} / {images.length} — {images[index].alt}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
