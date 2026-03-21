import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import Lightbox from '../../components/Lightbox';
import imgArenaGo from '../../assets/products/arena-go/home.png';
import imgFintera from '../../assets/products/fintera/home.png';
import imgSecureX from '../../assets/products/securex/home.png';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useReveal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      id: 'arenago',
      tag: 'Ticketing',
      title: 'Arena Go',
      tagline: t('products.arenago.tagline'),
      desc: t('products.arenago.desc'),
      features: (t('products.arenago.features', { returnObjects: true }) as string[]),
      image: imgArenaGo
    },
    {
      id: 'fintera',
      tag: 'Fintech',
      title: 'Fintera',
      tagline: t('products.fintera.tagline'),
      desc: t('products.fintera.desc'),
      features: (t('products.fintera.features', { returnObjects: true }) as string[]),
      image: imgFintera
    },
    {
      id: 'securex',
      tag: 'Security',
      title: 'SecureX',
      tagline: t('products.securex.tagline'),
      desc: t('products.securex.desc'),
      features: (t('products.securex.features', { returnObjects: true }) as string[]),
      image: imgSecureX
    }
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Dynamic Spotlight Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.05), transparent 80%)`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>

      <main className="relative z-10 pt-40 pb-20">
        <section className="max-w-6xl mx-auto px-8 mb-32">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('products.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.8] text-on-surface uppercase mb-12 [text-wrap:balance]">
              {(() => {
                const title = t('products.hero.title');
                const highlight = i18n.language === 'es' ? 'Transformación' : 'Transformation';
                const parts = title.split(highlight);
                if (parts.length < 2) return title;
                return (
                  <>
                    <span className="opacity-90">{parts[0]}</span>
                    <span className="text-primary">{highlight}</span>
                    <span className="opacity-90">{parts[1]}</span>
                  </>
                );
              })()}
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed opacity-60 font-body font-light tracking-tight">
              {t('products.hero.desc')}
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-8 space-y-40">
          {products.map((product, index) => (
            <div key={product.id} className="reveal">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">
                    {product.tag}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-6 text-on-surface">
                    {product.title}
                  </h2>
                  <p className="text-xl font-bold text-primary/80 mb-8 leading-tight">
                    {product.tagline}
                  </p>
                  <p className="text-on-surface-variant text-lg leading-relaxed opacity-70 mb-10 font-light">
                    {product.desc}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm text-on-surface/60 font-body tracking-tight leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate('/contact')}
                    className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-on-surface transition-colors"
                  >
                    {t('products.view_details')}
                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all"></span>
                  </button>
                </div>

                <div 
                  className={`relative group cursor-zoom-in ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                  onClick={() => setSelectedImage({ src: product.image, alt: product.title })}
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative neo-bento-card overflow-hidden aspect-video border-white/5 bg-white/[0.02]">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Support Section */}
        <section className="bg-surface/30 backdrop-blur-3xl border-y border-white/5 py-40 px-8 mt-40">
           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: 'support_agent', title: t('products.support.s1.title'), desc: t('products.support.s1.desc') },
                { icon: 'update', title: t('products.support.s2.title'), desc: t('products.support.s2.desc') },
                { icon: 'shield', title: t('products.support.s3.title'), desc: t('products.support.s3.desc') }
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left reveal">
                   <span className="material-symbols-outlined text-primary text-4xl mb-6">{item.icon}</span>
                   <h4 className="text-xl font-black font-headline text-on-surface uppercase mb-4">{item.title}</h4>
                   <p className="text-on-surface-variant text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {selectedImage && (
          <Lightbox 
            images={products.map(p => ({ src: p.image, alt: p.title }))}
            currentIndex={products.findIndex(p => p.image === selectedImage.src)}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </main>
    </div>
  );
};

export default Products;
