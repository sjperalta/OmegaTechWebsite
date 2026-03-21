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
      title: t('services.list.iot.title'), 
      desc: t('services.list.iot.desc')
    },
    { 
      title: t('services.list.consulting.title'), 
      desc: t('services.list.consulting.desc')
    }
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-[120px]">
            <span className="text-primary font-bold tracking-[0.1em] text-xs uppercase">{t('services.tag')}</span>
            <h1 className="text-5xl md:text-6xl mt-5 mb-10 font-display font-medium tracking-tight">
              {t('services.title')} <span className="text-primary">{t('services.title.highlight')}</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              {t('services.subtitle')}
            </p>
            <div className="p-10 bg-surface-low rounded-3xl border border-outline-variant">
              <h3 className="text-xl md:text-2xl mb-4 font-display font-medium">{t('services.consulting.card.title')}</h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                {t('services.consulting.card.desc')}
              </p>
              <button 
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold hover:shadow-lg transition-all"
              >
                {t('services.consulting.card.button')}
              </button>
            </div>
          </div>

          <div className="grid gap-8">
            {servicesList.map((s, i) => (
              <div key={i} className="p-10 md:p-12 bg-surface-container rounded-3xl border border-outline-variant hover:border-primary hover:bg-surface-high transition-all cursor-pointer group"
                onClick={() => onNavigate('/contact')}
              >
                <div className="text-4xl md:text-5xl font-bold text-surface-highest mb-6 group-hover:text-primary/20 transition-colors">0{i + 1}</div>
                <h2 className="text-2xl md:text-3xl mb-6 font-display font-medium">{s.title}</h2>
                <p className="text-on-surface-variant text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
