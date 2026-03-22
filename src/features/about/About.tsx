import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import logoMinikids from '../../assets/customers/minokids/minikids-logo.svg';
import logoServpro from '../../assets/customers/servpro/logo-servpro.webp';
import logoVanHeusen from '../../assets/customers/vanheusen/van-heusen-white.svg';
import logoFama from '../../assets/customers/fama/logo-fama.webp';
import imgSergio from '../../assets/people/sergio-peralta-ceo.png';
import imgKesia from '../../assets/people/kesia-peralta-qa-manager.png';

const About: React.FC = () => {
  const { t } = useTranslation();
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
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.05), transparent 80%)`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>

      <main className="relative z-10 pt-40 pb-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-8 mb-40">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('about.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.8] text-on-surface uppercase mb-16 [text-wrap:balance]">
              {t('about.hero.title')}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed opacity-90 font-body font-light tracking-tight mb-12">
                  {t('about.hero.desc')}
                </p>
                <div className="flex flex-wrap gap-8 items-center opacity-40">
                   <div className="flex flex-col">
                      <span className="text-2xl font-black font-headline text-on-surface uppercase leading-none mb-1">{t('about.stats.years.value')}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">{t('about.stats.years.label')}</span>
                   </div>
                   <div className="w-px h-10 bg-on-surface/20"></div>
                   <div className="flex flex-col">
                      <span className="text-2xl font-black font-headline text-on-surface uppercase leading-none mb-1">{t('about.stats.partners.value')}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">{t('about.stats.partners.label')}</span>
                   </div>
                   <div className="w-px h-10 bg-on-surface/20"></div>
                   <div className="flex flex-col">
                      <span className="text-2xl font-black font-headline text-on-surface uppercase leading-none mb-1">{t('about.stats.startups.value')}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">{t('about.stats.startups.label')}</span>
                   </div>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <div className="neo-bento-card p-12 group hover:scale-[1.02] transition-transform duration-500 bg-white/5 backdrop-blur-3xl border-white/10">
                  <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-8">{t('about.mission.badge')}</div>
                  <h3 className="text-3xl font-black font-headline text-on-surface uppercase mb-6 leading-none group-hover:text-primary transition-colors">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-on-surface-variant text-sm opacity-90 leading-relaxed font-body font-light">
                    {t('about.mission.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Values */}
        <section className="relative py-40 px-8 bg-surface/30 backdrop-blur-3xl border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
              <div className="max-w-2xl">
                <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">{t('about.values.title')}</div>
                <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface uppercase leading-[0.85]">
                  Our <span className="text-glow">{t('about.values.highlight')}</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'verified', title: t('about.values.v1.title'), desc: t('about.values.v1.desc') },
                { icon: 'bolt', title: t('about.values.v2.title'), desc: t('about.values.v2.desc') },
                { icon: 'group', title: t('about.values.v3.title'), desc: t('about.values.v3.desc') }
              ].map((val, i) => (
                <div key={i} className="neo-bento-card p-12 group hover:bg-primary/5 reveal">
                  <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">{val.icon}</span>
                  <h3 className="text-2xl font-black font-headline text-on-surface uppercase mb-4 leading-none">{val.title}</h3>
                  <p className="text-on-surface-variant text-sm opacity-90 leading-relaxed font-light">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]"></span>
              {t('about.team.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-surface uppercase mb-6 leading-[0.9]">
              {t('about.team.title')}
              <span className="text-primary italic pr-2">{t('about.team.title.highlight')}</span>
            </h2>
            <p className="text-on-surface-variant text-lg opacity-90 leading-relaxed font-light">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {/* Sergio Peralta */}
            <div className="neo-bento-card group overflow-hidden relative border-primary/10 hover:border-primary/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col h-full">
                <div className="relative h-96 w-full overflow-hidden bg-surface-container-low border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 w-full h-[101%] pointer-events-none"></div>
                  <img src={imgSergio} alt={t('about.team.sergio.name')} className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-10 relative z-20 -mt-16">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 bg-surface border border-white/10 px-4 py-2 rounded-sm shadow-xl backdrop-blur-md">
                    {t('about.team.sergio.role')}
                  </div>
                  <h3 className="text-3xl font-black font-headline text-on-surface uppercase tracking-tight mb-4">{t('about.team.sergio.name')}</h3>
                  <p className="text-on-surface-variant text-sm opacity-80 leading-relaxed font-light">
                    {t('about.team.sergio.bio')}
                  </p>
                </div>
              </div>
            </div>

            {/* Kesia Peralta */}
            <div className="neo-bento-card group overflow-hidden relative border-primary/10 hover:border-primary/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col h-full">
                <div className="relative h-96 w-full overflow-hidden bg-surface-container-low border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 w-full h-[101%] pointer-events-none"></div>
                  <img src={imgKesia} alt={t('about.team.kesia.name')} className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-10 relative z-20 -mt-16">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 bg-surface border border-white/10 px-4 py-2 rounded-sm shadow-xl backdrop-blur-md">
                    {t('about.team.kesia.role')}
                  </div>
                  <h3 className="text-3xl font-black font-headline text-on-surface uppercase tracking-tight mb-4">{t('about.team.kesia.name')}</h3>
                  <p className="text-on-surface-variant text-sm opacity-80 leading-relaxed font-light">
                    {t('about.team.kesia.bio')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="max-w-6xl mx-auto px-8 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center reveal">
            <div>
              <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">{t('about.presence.tag')}</div>
              <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-on-surface uppercase mb-10 leading-[0.85]">
                {t('about.presence.title')}
              </h2>
              <p className="text-on-surface-variant text-lg opacity-90 leading-relaxed font-light max-w-lg">
                {t('about.presence.desc')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="neo-bento-card p-4 relative z-10 aspect-video flex items-center justify-center overflow-hidden group">
                 <div className="text-on-surface/10 text-9xl font-black uppercase text-center select-none group-hover:scale-110 transition-transform duration-1000">{t('about.presence.global')}</div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-9xl animate-spin-slow">public</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-surface py-32 reveal">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-on-surface/30 text-[10px] font-bold tracking-[0.5em] uppercase mb-20">
              {t('about.clients.tag')}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-16">
              {[logoMinikids, logoServpro, logoVanHeusen, logoFama].map((logo, i) => (
                <img 
                  key={i} 
                  src={logo} 
                  width="150"
                  height="40"
                  className="h-10 w-auto transition-all grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110" 
                  alt="Partner Logo" 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
