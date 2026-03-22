import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
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

  const services = [
    {
      id: 'software',
      icon: 'code',
      title: t('services.software.title'),
      desc: t('services.software.desc'),
    },
    {
      id: 'consulting',
      icon: 'insights',
      title: t('services.consulting.title'),
      desc: t('services.consulting.desc'),
    },
    {
      id: 'outsourcing',
      icon: 'handshake',
      title: t('services.outsourcing.title'),
      desc: t('services.outsourcing.desc'),
    },
    {
      id: 'staff-augmentation',
      icon: 'group_add',
      title: t('services.staff-augmentation.title'),
      desc: t('services.staff-augmentation.desc'),
    },
    {
      id: 'uxui',
      icon: 'draw',
      title: t('services.uxui.title'),
      desc: t('services.uxui.desc'),
    },
    {
      id: 'mobile',
      icon: 'phone_iphone',
      title: t('services.mobile.title'),
      desc: t('services.mobile.desc'),
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

      <main className="relative z-10 pt-40 pb-20">
        <section className="max-w-6xl mx-auto px-8 mb-32">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('services.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.8] text-on-surface uppercase mb-12 [text-wrap:balance]">
              Digital <span className="text-primary">Ecosystems</span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed opacity-90 font-body font-light tracking-tight">
              {t('services.hero.desc')}
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="neo-bento-card p-12 group hover:scale-[1.02] transition-all duration-500 reveal cursor-pointer hover:bg-primary/5 h-full flex flex-col"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onNavigate('/contact')}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:text-on-primary transition-colors">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-black font-headline text-on-surface uppercase mb-4 leading-none group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm opacity-90 leading-relaxed font-body font-light flex-1">
                {service.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                  {t('services.cta.inquire')} <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action Bar */}
        <section className="max-w-6xl mx-auto px-8 py-40">
           <div className="neo-bento-card p-16 md:p-24 bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-12 reveal overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 max-w-xl text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase mb-6 leading-none">
                    {t('services.cta.title')}
                 </h2>
                 <p className="text-on-primary text-lg opacity-80 font-light">
                    {t('services.cta.desc')}
                 </p>
              </div>
              <button 
                onClick={() => onNavigate('/contact')}
                className="relative z-10 bg-on-primary text-primary px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                {t('services.cta.button')}
              </button>
           </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
