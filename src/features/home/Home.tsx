import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import logoFintera from '../../assets/products/fintera/fintera-logo-color.svg';
import logoSecureX from '../../assets/products/securex/logo_securex.svg';
import logoArenaGo from '../../assets/products/arena-go/logo-arenago.webp';
import logoMinikids from '../../assets/customers/minokids/minikids-logo.svg';
import logoServpro from '../../assets/customers/servpro/logo-servpro.webp';
import logoVanHeusen from '../../assets/customers/vanheusen/van-heusen-white.svg';
import logoFama from '../../assets/customers/fama/logo-fama.webp';
import Lightbox from '../../components/Lightbox';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Dynamic Spotlight Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.08), transparent 80%)`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
      <div className="absolute top-[20%] right-[10%] w-[15%] h-[15%] bg-primary/5 rounded-full blur-[80px] animate-bounce [animation-duration:15s]"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center justify-between">
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('home.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.85] text-on-surface uppercase mb-8 [text-wrap:balance]">
              {(() => {
                const title = t('home.hero.title');
                const highlight = i18n.language === 'es' ? 'conecta' : 'connects';
                const parts = title.split(highlight);
                if (parts.length < 2) return title;
                return (
                  <>
                    <span className="opacity-90">{parts[0]}</span>
                    <span className="text-primary inline-block hover:scale-105 transition-transform cursor-default text-glow">{highlight}</span>
                    <span className="opacity-90">{parts[1]}</span>
                  </>
                );
              })()}
            </h1>
            
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12 opacity-90 font-body font-light tracking-tight">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <button 
                onClick={() => onNavigate('/products')}
                className="group relative bg-primary text-slate-950 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 shadow-lg shadow-primary/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('home.hero.cta.products')}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => onNavigate('/services')}
                className="px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all text-on-surface active:scale-95"
              >
                {t('home.hero.cta.services')}
              </button>
            </div>

            <div className="mt-24 reveal">
              <div className="text-[10px] font-bold text-on-surface/30 tracking-[0.4em] uppercase mb-10 lg:text-left text-center">
                {t('home.trusted.tag')}
              </div>
              <div className="flex flex-wrap gap-x-14 gap-y-10 items-center justify-center lg:justify-start">
                <img src={logoMinikids} alt="Minikids Logo" width="138" height="28" className="h-7 w-auto transition-all grayscale hover:grayscale-0 opacity-40 hover:opacity-100" />
                <img src={logoServpro} alt="Servpro Logo" width="87" height="28" className="h-7 w-auto transition-all grayscale hover:grayscale-0 opacity-40 hover:opacity-100" />
                <img src={logoVanHeusen} alt="Van Heusen Logo" width="115" height="28" className="h-7 w-auto transition-all grayscale hover:grayscale-0 opacity-40 hover:opacity-100" />
                <img src={logoFama} alt="Fama Logo" width="107" height="28" className="h-7 w-auto transition-all grayscale hover:grayscale-0 opacity-40 hover:opacity-100" />
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[35%] flex items-center justify-center reveal">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
            <div className="neo-bento-card p-10 relative z-10 hover:scale-[1.05] transition-all duration-700 w-full group">
              <div className="flex justify-between items-start mb-16">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-on-primary text-4xl">analytics</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-1">{t('home.impact.label')}</div>
                  <div className="text-4xl font-black font-headline text-on-surface">98.4%</div>
                </div>
              </div>
              <h2 className="text-2xl font-black font-headline text-on-surface tracking-tight mb-4 uppercase group-hover:text-primary transition-colors">
                {t('home.hero.consulting.title')}
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 mb-10 font-body">
                {t('home.hero.consulting.desc')}
              </p>
              <div className="space-y-4">
                <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 animate-[shimmer_2s_infinite]"></div>
                </div>
                <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2 [animation-delay:0.5s] animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none animate-[fadeIn_1.5s_ease-out_0.8s_both]">
          <span className="text-[9px] font-bold text-primary/40 tracking-[0.4em] uppercase font-label">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5 backdrop-blur-sm">
            <div className="w-1 h-2.5 bg-primary rounded-full animate-scroll-dot"></div>
          </div>
          <span className="material-symbols-outlined text-primary/30 animate-fade-in-down" style={{fontSize:"16px", marginTop:"-4px"}}>keyboard_arrow_down</span>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-32 px-8 bg-surface/30 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
            <div className="max-w-2xl">
              <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">{t('home.philosophy.tag')}</div>
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface uppercase leading-[0.85]">
                {t('home.products.title')}
              </h2>
            </div>
            <p className="text-on-surface-variant text-lg max-w-xs opacity-80 leading-relaxed font-body font-light">
              {t('home.products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* ArenaGo - Primary Bento */}
            <div 
              className="md:col-span-8 neo-bento-card group flex flex-col cursor-pointer min-h-[450px] reveal" 
              onClick={() => onNavigate('/products')}
            >
              <div className="p-16 flex-1 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary text-4xl">arrow_outward</span>
                </div>
                <div className="flex justify-between items-start mb-10">
                  <img 
                    src={logoArenaGo} 
                    alt="ArenaGo Platform Logo" 
                    width="492" 
                    height="96" 
                    style={{ aspectRatio: '1311 / 256' }}
                    className="h-24 w-auto group-hover:scale-110 transition-transform duration-500" 
                  />
                  <span className="material-symbols-outlined text-primary/40 text-4xl">rocket_launch</span>
                </div>
                <p className="text-on-surface-variant text-xl opacity-80 leading-relaxed max-w-xl font-light">
                  {t('products.arenago.desc')}
                </p>
              </div>
            </div>

            {/* Side Column */}
            <div className="md:col-span-4 flex flex-col gap-8 reveal">
              {/* Fintera */}
              <div className="flex-1 neo-bento-card p-12 group cursor-pointer flex flex-col justify-center" onClick={() => onNavigate('/products')}>
                <div className="flex justify-between items-start mb-8">
                  <img src={logoFintera} alt="Fintera Logo" width="183" height="56" className="h-14 w-auto group-hover:scale-110 transition-transform" />
                  <span className="material-symbols-outlined text-primary/40 text-3xl">payments</span>
                </div>
                <p className="text-on-surface-variant text-sm opacity-80 leading-relaxed font-light">
                  {t('products.fintera.desc')}
                </p>
              </div>

              {/* SecureX */}
              <div className="flex-1 neo-bento-card p-12 group cursor-pointer flex flex-col justify-center" onClick={() => onNavigate('/products')}>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <img src={logoSecureX} alt="SecureX Security Solution Logo" width="56" height="56" className="h-14 w-auto group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-black font-headline text-on-surface uppercase tracking-tight">SecureX</span>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 text-3xl">security</span>
                </div>
                <p className="text-on-surface-variant text-sm opacity-80 leading-relaxed font-light">
                   {t('products.securex.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-40 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center reveal">
          <div>
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">{t('home.philosophy.tag')}</div>
            <h2 className="text-5xl md:text-8xl font-black font-headline tracking-tighter text-on-surface uppercase mb-10 leading-[0.85]">
              {t('home.philosophy.title')}
            </h2>
            <p className="text-on-surface-variant text-xl opacity-80 leading-relaxed font-light max-w-lg">
              {t('home.philosophy.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            <div className="p-10 neo-bento-card group flex flex-col h-full hover:bg-primary/5">
              <span className="material-symbols-outlined text-primary mb-8 text-5xl group-hover:scale-110 transition-transform">verified</span>
              <h3 className="text-2xl font-black font-headline text-on-surface uppercase mb-3">{t('home.values.quality.title')}</h3>
              <p className="text-on-surface-variant text-sm opacity-90 leading-relaxed flex-1 font-light">{t('home.values.quality.desc')}</p>
            </div>
            <div className="p-10 neo-bento-card group flex flex-col h-full hover:bg-primary/5">
              <span className="material-symbols-outlined text-primary mb-8 text-5xl group-hover:scale-110 transition-transform">bolt</span>
              <h3 className="text-2xl font-black font-headline text-on-surface uppercase mb-3">{t('home.values.agility.title')}</h3>
              <p className="text-on-surface-variant text-sm opacity-90 leading-relaxed flex-1 font-light">{t('home.values.agility.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto rounded-[64px] bg-primary p-16 md:p-32 text-center relative overflow-hidden group shadow-2xl shadow-primary/20 reveal">
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
          
          <h2 className="text-on-primary text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase mb-10 relative z-10 leading-[0.9] transition-transform group-hover:scale-[1.02]">
            {t('home.cta.title')}
          </h2>
          <p className="text-on-primary text-xl opacity-80 mb-16 max-w-2xl mx-auto relative z-10 font-light tracking-tight">
            {t('home.cta.subtitle')}
          </p>
          <button 
            onClick={() => onNavigate('/contact')}
            className="group relative bg-on-primary text-primary px-14 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-110 hover:shadow-2xl active:scale-95"
          >
            <span className="relative z-10">{t('home.cta.button')}</span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity"></div>
          </button>
        </div>
      </section>

        {selectedImage && (
          <Lightbox 
            images={[selectedImage]} 
            currentIndex={0} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
    </div>
  );
};

export default Home;
