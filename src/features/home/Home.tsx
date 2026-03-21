import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import logoFintera from '../../assets/products/fintera/fintera-logo-color.svg';
import logoSecureX from '../../assets/products/securex/logo_securex.svg';
import logoArenaGo from '../../assets/products/arena-go/logo_arenago_transparent.png';
import logoMinikids from '../../assets/customers/minokids/minikids-logo.svg';
import logoServpro from '../../assets/customers/servpro/servpro-logo.png';
import logoVanHeusen from '../../assets/customers/vanheusen/vanheusen-logo.svg';
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
      <section className="relative pt-24 pb-20 overflow-hidden hero-gradient">
        <div className="max-w-6xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center justify-between">
          <div className="z-10 w-full lg:w-[55%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 group cursor-default">
              <div className="data-pulse"></div>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('home.hero.consulting.title')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.9] text-on-surface uppercase mb-8">
              {(() => {
                const title = t('home.hero.title');
                const highlight = i18n.language === 'es' ? 'conecta' : 'connects';
                const parts = title.split(highlight);
                if (parts.length < 2) return title;
                return (
                  <>
                    {parts[0]}
                    <span className="text-primary">{highlight}</span>
                    {parts[1]}
                  </>
                );
              })()}
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 opacity-70 font-body">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('/products')}
                className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                {t('home.hero.cta.products')}
              </button>
              <button 
                onClick={() => onNavigate('/services')}
                className="px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm border border-outline-variant/30 hover:bg-surface-container transition-all"
              >
                {t('home.hero.cta.services')}
              </button>
            </div>

            <div className="mt-20">
              <div className="text-[10px] font-bold text-on-surface/30 tracking-[0.3em] uppercase mb-8 lg:text-left text-center">
                Trusted by global innovators
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-8 items-center opacity-100 dark:opacity-40 justify-center lg:justify-start transition-all duration-300">
                <img src={logoMinikids} alt="Minikids" className="h-6 w-auto dark:brightness-0 dark:invert" />
                <img src={logoServpro} alt="Servpro" className="h-6 w-auto dark:brightness-0 dark:invert" />
                <img src={logoVanHeusen} alt="Van Heusen" className="h-6 w-auto dark:brightness-0 dark:invert" />
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[40%] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="glass-card p-10 rounded-3xl relative z-10 hover:scale-[1.02] transition-transform duration-700 w-full shadow-2xl border-white/10">
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(173,199,255,0.4)]">
                   <span className="material-symbols-outlined text-on-primary text-3xl">analytics</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-1">Impact Score</div>
                  <div className="text-3xl font-black font-headline text-on-surface">98.4%</div>
                </div>
              </div>
              <h3 className="text-2xl font-black font-headline text-on-surface tracking-tight mb-4 uppercase">
                {t('home.hero.consulting.title')}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed opacity-60 mb-8 font-body">
                {t('home.hero.consulting.desc')}
              </p>
              <div className="space-y-4">
                <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 shadow-[0_0_8px_rgba(173,199,255,0.8)]"></div>
                </div>
                <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2 shadow-[0_0_8px_rgba(173,199,255,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-surface py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">{t('home.philosophy.tag')}</div>
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface uppercase leading-[0.9]">
                {t('home.products.title')}
              </h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs opacity-60 leading-relaxed font-body">
              {t('home.products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[600px]">
            {/* ArenaGo - Primary Bento */}
            <div className="md:col-span-8 glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all group flex flex-col cursor-pointer min-h-[400px]" onClick={() => onNavigate('/products')}>
              <div className="p-12 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-8">
                  <img src={logoArenaGo} alt="ArenaGo" className="h-20 w-auto" />
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">rocket_launch</span>
                </div>
                <p className="text-on-surface-variant text-lg opacity-60 leading-relaxed max-w-xl">
                  {t('products.arenago.desc')}
                </p>
              </div>
            </div>

            {/* Side Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Fintera */}
              <div className="flex-1 glass-card rounded-3xl p-10 hover:border-primary/30 transition-all group cursor-pointer flex flex-col justify-center" onClick={() => onNavigate('/products')}>
                <div className="flex justify-between items-start mb-6">
                  <img src={logoFintera} alt="Fintera" className="h-12 w-auto" />
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">payments</span>
                </div>
                <p className="text-on-surface-variant text-sm opacity-60 leading-relaxed">
                  {t('products.fintera.desc')}
                </p>
              </div>

              {/* SecureX */}
              <div className="flex-1 glass-card rounded-3xl p-10 hover:border-primary/30 transition-all group cursor-pointer flex flex-col justify-center" onClick={() => onNavigate('/products')}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <img src={logoSecureX} alt="SecureX" className="h-12 w-auto" />
                    <span className="text-xl md:text-2xl font-black font-headline text-on-surface uppercase tracking-tight">SecureX</span>
                  </div>
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">security</span>
                </div>
                <p className="text-on-surface-variant text-sm opacity-60 leading-relaxed">
                   {t('products.securex.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Simplified for premium feel */}
      <section className="bg-surface-container-lowest py-32 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">{t('home.philosophy.tag')}</div>
            <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface uppercase mb-8 leading-[0.9]">
              {t('home.philosophy.title')}
            </h2>
            <p className="text-on-surface-variant text-lg opacity-60 leading-relaxed">
              {t('home.philosophy.desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            <div className="p-8 glass-card rounded-2xl flex flex-col h-full">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">verified</span>
              <h4 className="text-xl md:text-2xl font-black font-headline text-on-surface uppercase mb-2">{t('home.values.quality.title')}</h4>
              <p className="text-on-surface-variant text-xs opacity-60 leading-relaxed flex-1">{t('home.values.quality.desc')}</p>
            </div>
            <div className="p-8 glass-card rounded-2xl flex flex-col h-full">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">bolt</span>
              <h4 className="text-xl md:text-2xl font-black font-headline text-on-surface uppercase mb-2">{t('home.values.agility.title')}</h4>
              <p className="text-on-surface-variant text-xs opacity-60 leading-relaxed flex-1">{t('home.values.agility.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-32 px-8 overflow-hidden relative">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-primary p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h2 className="text-on-primary text-5xl md:text-7xl font-black font-headline tracking-tighter uppercase mb-8 relative z-10 leading-[0.9]">
            {t('home.cta.title')}
          </h2>
          <p className="text-on-primary text-lg opacity-80 mb-12 max-w-xl mx-auto relative z-10">
            {t('home.cta.subtitle')}
          </p>
          <button 
            onClick={() => onNavigate('/contact')}
            className="bg-on-primary text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform relative z-10 shadow-2xl"
          >
            {t('home.cta.button')}
          </button>
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
