import React from 'react';
import { useTranslation } from 'react-i18next';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const servicesList = [
    { 
      title: t('services.list.platforms.title'), 
      desc: t('services.list.platforms.desc')
    },
    { 
      title: t('services.list.fintech.title'), 
      desc: t('services.list.fintech.desc')
    },
    { 
      title: t('services.list.security.title'), 
      desc: t('services.list.security.desc')
    },
    { 
      title: t('services.list.consulting.title'), 
      desc: t('services.list.consulting.desc')
    },
    { 
      title: t('services.list.staff.title'), 
      desc: t('services.list.staff.desc')
    }
  ];

  return (
    <div className="bg-surface min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-4 group cursor-default flex items-center gap-2">
              <div className="data-pulse"></div>
              {t('services.tag')}
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter text-on-surface uppercase leading-[0.9]">
              {t('services.title')} <br />
              <span className="text-primary">{t('services.title.highlight')}</span>
            </h1>
          </div>
          <p className="text-on-surface-variant text-base md:text-lg max-w-sm opacity-60 leading-relaxed font-body">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Consulting Service - Large Bento */}
          <div className="md:col-span-8 glass-card rounded-3xl p-12 hover:border-primary/30 transition-all group flex flex-col md:flex-row gap-12 items-center hover:shadow-primary/5 hover:shadow-2xl">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 font-label uppercase tracking-widest text-[10px] text-primary">
                Key Strategic Service
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-headline text-on-surface uppercase tracking-tight mb-6">
                {t('services.consulting.card.title')}
              </h2>
              <p className="text-on-surface-variant text-lg opacity-60 leading-relaxed mb-8">
                {t('services.consulting.card.desc')}
              </p>
              <button 
                onClick={() => onNavigate('/contact')}
                className="bg-primary text-on-primary px-8 py-3 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all flex items-center gap-2"
              >
                {t('services.consulting.card.button')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="flex-1 w-full h-64 md:h-full bg-surface-container-low rounded-2xl border border-outline-variant/10 relative overflow-hidden flex items-center justify-center p-8">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
               <span className="material-symbols-outlined text-primary text-[8rem] opacity-20">strategy</span>
               <div className="absolute bottom-4 left-4 flex gap-1">
                 {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>)}
               </div>
            </div>
          </div>

          {/* Side Column Services */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {servicesList.slice(0, 2).map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-10 hover:border-primary/30 transition-all group cursor-pointer h-full hover:shadow-primary/5 hover:shadow-2xl"
                onClick={() => onNavigate('/contact')}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-primary/20 text-4xl font-black font-headline leading-none">0{i+1}</span>
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
                    {i === 0 ? 'developer_mode' : 'account_balance'}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black font-headline text-on-surface uppercase mb-3 leading-tight">{s.title}</h3>
                <p className="text-on-surface-variant text-xs opacity-60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row Services */}
          {servicesList.slice(2, 5).map((s, i) => (
            <div key={i} className="md:col-span-4 glass-card rounded-2xl p-10 hover:border-primary/30 transition-all group cursor-pointer hover:shadow-primary/5 hover:shadow-2xl"
              onClick={() => onNavigate('/contact')}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-primary/20 text-4xl font-black font-headline leading-none">0{i+3}</span>
                <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
                  {i === 0 ? 'security' : i === 1 ? 'forum' : 'groups'}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black font-headline text-on-surface uppercase mb-3 leading-tight">{s.title}</h3>
              <p className="text-on-surface-variant text-xs opacity-60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
