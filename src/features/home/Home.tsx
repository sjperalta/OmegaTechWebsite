import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import logoFintera from '../../assets/products/fintera/fintera-logo-color.svg';
import logoSecureX from '../../assets/products/securex/logo_securex.svg';
import logoArenaGo from '../../assets/products/arena-go/logo_arenago_transparent.png';
import screenArenaGo from '../../assets/products/arena-go/home.png';
import screenFintera from '../../assets/products/fintera/home.png';
import screenSecureX from '../../assets/products/securex/home.png';
import Lightbox from '../../components/Lightbox';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
  useReveal();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-surface py-24 md:py-40 relative overflow-hidden">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,400px)] gap-16 items-center max-w-[1200px]">
          <div>
            <h1 className="mb-8 text-[min(4.5rem,10vw)] tracking-tight leading-[1.1] animate-slide-up font-display font-medium text-on-surface">
              {(() => {
                const title = t('home.hero.title');
                const highlight = i18n.language === 'es' ? 'conecta' : 'connects';
                const parts = title.split(highlight);
                if (parts.length < 2) return title;
                return (
                  <>
                    {parts[0]}
                    <span className="text-primary inline-block mx-[0.1em]">{highlight}</span>
                    {parts[1]}
                  </>
                );
              })()}
            </h1>
            <p className="text-xl text-on-surface-variant mb-12 max-w-[600px] leading-relaxed opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_forwards]">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-5 mb-16 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_forwards]">
              <button 
                onClick={() => onNavigate('/products')}
                className="bg-gradient-to-br from-primary to-primary-container px-8 py-4 rounded-lg text-on-primary font-bold text-base hover:shadow-[0_0_30px_rgba(173,199,255,0.3)] transition-all hover:-translate-y-0.5" 
              >
                {t('home.hero.cta.products')}
              </button>
              <button 
                onClick={() => onNavigate('/services')}
                className="px-8 py-4 rounded-lg bg-surface-high text-on-surface border border-outline-variant font-semibold hover:-translate-y-0.5 transition-transform"
              >
                {t('home.hero.cta.services')}
              </button>
            </div>

            {/* Trusted By */}
            <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
              <p className="text-xs font-bold tracking-widest text-primary mb-6 uppercase">{t('home.trusted')}</p>
              <div className="flex gap-12 items-center grayscale brightness-150">
                <img src="/src/assets/customers/minikids/minikids-logo.svg" alt="Minikids" className="h-8 opacity-70" />
                <img src="/src/assets/customers/servpro/servpro-logo.png" alt="Servpro" className="h-8 opacity-70" />
                <img src="/src/assets/customers/vanheusen/vanheusen-logo.svg" alt="Van Heusen" className="h-8 opacity-70" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-container w-[400px] h-[400px] rounded-3xl opacity-20 blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-surface-container rounded-3xl border border-outline-variant p-10 relative z-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <div className="w-10 h-10 bg-primary rounded-full mb-6 drop-shadow-[0_0_10px_var(--primary)]"></div>
              <h3 className="text-2xl mb-4 font-display font-medium text-on-surface">{t('home.hero.consulting.title')}</h3>
              <p className="text-on-surface-variant text-[0.95rem] leading-relaxed">
                {t('home.hero.consulting.desc')}
              </p>
              <div className="grid gap-3 mt-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-2 bg-surface-high rounded-full opacity-50" style={{ width: `${100 - (i * 15)}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-low py-[120px]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20 items-center">
            <div className="animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0">
               <span className="uppercase tracking-[0.2em] text-sm text-primary font-bold">
                {t('home.philosophy.tag')}
              </span>
              <h2 className="mt-4 mb-8 text-5xl font-display font-medium tracking-tight text-on-surface">{t('home.philosophy.title')}</h2>
              <p className="text-on-surface-variant text-lg leading-[1.8]">
                {t('home.philosophy.desc')}
              </p>
            </div>
            <div className="grid gap-8">
              <div className="animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_forwards] opacity-0 p-8 bg-surface-container rounded-2xl border border-outline-variant">
                <h4 className="text-primary mb-3 font-display font-medium text-xl">{t('home.values.quality.title')}</h4>
                <p className="text-sm text-on-surface-variant">{t('home.values.quality.desc')}</p>
              </div>
              <div className="animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_forwards] opacity-0 p-8 bg-surface-container rounded-2xl border border-outline-variant">
                <h4 className="text-primary mb-3 font-display font-medium text-xl">{t('home.values.agility.title')}</h4>
                <p className="text-sm text-on-surface-variant">{t('home.values.agility.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-surface py-[120px]">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0 text-center mb-20">
             <h2 className="text-5xl font-display font-medium text-on-surface tracking-tight">{t('home.products.title')}</h2>
             <p className="text-on-surface-variant mt-4 text-base">{t('home.products.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
            {/* Product Cards with reveal */}
            {[
              { title: t('products.arenago.name'), desc: t('products.arenago.desc'), logo: logoArenaGo, screenshot: screenArenaGo, hideText: true },
              { title: t('products.fintera.name'), desc: t('products.fintera.desc'), logo: logoFintera, screenshot: screenFintera, hideText: true },
              { title: t('products.securex.name'), desc: t('products.securex.desc'), logo: logoSecureX, screenshot: screenSecureX, showTextWithLogo: true }
            ].map((feature, i) => (
              <div key={i} className={`animate-[slideUp_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.${i+1}s_forwards] opacity-0 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(173,199,255,0.2)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] p-14 bg-surface-container rounded-[32px] cursor-pointer border border-outline-variant flex flex-col min-h-[520px]`}
              onClick={() => onNavigate('/products')}
              >
                <div className="-mx-14 -mt-14 mb-10 rounded-t-[32px] overflow-hidden border-b border-outline-variant bg-[#2a2a2a] h-[240px] cursor-zoom-in group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: feature.screenshot, alt: feature.title });
                }}
                >
                  <img src={feature.screenshot} alt={feature.title} className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className={`mb-${feature.hideText || feature.showTextWithLogo ? '12' : '8'} h-12 flex items-center gap-3`}>
                  <img src={feature.logo} alt={feature.title} className="h-full max-w-[140px] object-contain" />
                  {feature.showTextWithLogo && (
                    <span className="text-[1.75rem] font-bold text-on-surface tracking-tight">{feature.title}</span>
                  )}
                </div>
                {!feature.hideText && !feature.showTextWithLogo && (
                  <h3 className="text-[2rem] mb-4 font-display font-medium text-on-surface tracking-tight">{feature.title}</h3>
                )}
                <p className="text-on-surface-variant text-[1.1rem] leading-[1.6] flex-1">{feature.desc}</p>
                <div className="mt-8 text-primary font-bold flex items-center gap-2">
                  {t('products.view_details').toUpperCase()}
                  <span className="text-[1.2rem]">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-low py-[120px] text-center">
        <div className="container mx-auto px-8 max-w-[1200px]">
          <div className="animate-[scaleIn_0.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards] opacity-0 bg-gradient-to-br from-primary to-primary-container p-20 rounded-[32px] text-on-primary relative overflow-hidden">
            <h2 className="text-on-primary mb-6 text-5xl font-display font-medium tracking-tight">{t('home.cta.title')}</h2>
            <p className="text-[1.2rem] mb-10 opacity-90 max-w-[600px] mx-auto leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <button 
              onClick={() => onNavigate('/contact')}
              className="px-10 py-4 rounded-lg bg-white text-on-primary font-bold text-base border-none cursor-pointer hover:-translate-y-0.5 transition-transform shadow-lg"
            >
              {t('home.cta.button')}
            </button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <Lightbox 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default Home;
