import React from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import teamImage from '../../assets/about-team.png';

const About: React.FC = () => {
  const { t } = useTranslation();
  useReveal();

  return (
    <div className="py-24 md:py-32">
      <div className="container max-w-[900px]">
        <header className="text-center mb-20 animate-slide-down">
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8">
            {t('about.title')} <span className="text-primary">{t('about.title.highlight')}</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed opacity-0 animate-fade-in [animation-delay:0.2s]">
            {t('about.subtitle')}
          </p>
        </header>

        <img 
          src={teamImage} 
          alt={t('about.team.title')} 
          className="reveal active rounded-[32px] w-full h-[400px] md:h-[600px] object-cover mb-20 filter brightness-110 shadow-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <div className="reveal active flex flex-col gap-6">
            <h3 className="text-2xl font-display font-medium text-on-surface border-b border-primary pb-3 inline-block self-start">{t('about.mission.title')}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {t('about.mission.desc')}
            </p>
          </div>
          <div className="reveal active flex flex-col gap-6">
            <h3 className="text-2xl font-display font-medium text-on-surface border-b border-primary pb-3 inline-block self-start">{t('about.vision.title')}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {t('about.vision.desc')}
            </p>
          </div>
        </div>

        <section className="bg-surface-low p-10 md:p-20 rounded-[32px] mb-20">
          <h2 className="text-4xl font-display font-medium text-center mb-16">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { t: t('about.values.v1.title'), d: t('about.values.v1.desc') },
              { t: t('about.values.v2.title'), d: t('about.values.v2.desc') },
              { t: t('about.values.v3.title'), d: t('about.values.v3.desc') },
              { t: t('about.values.v4.title'), d: t('about.values.v4.desc') }
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="text-primary text-xl font-display font-medium">{v.t}</h4>
                <p className="text-on-surface-variant leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-display font-medium text-center mb-16">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sergio Peralta', 
                role: t('about.team.founder.role'), 
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' 
              },
              { 
                name: 'Kesia Peralta', 
                role: t('about.team.cto.role'), 
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' 
              },
              { 
                name: 'Marco Rossi', 
                role: t('about.team.innov.role'), 
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' 
              }
            ].map((member, i) => (
              <div key={i} className="text-center p-10 bg-surface-container rounded-3xl border border-outline-variant hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-surface-high shadow-lg"
                />
                <h4 className="text-xl font-display font-medium mb-2">{member.name}</h4>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-3xl font-display font-medium mb-12">{t('about.clients.title')}</h2>
          <div className="flex justify-center gap-12 md:gap-20 items-center flex-wrap grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src="/src/assets/customers/minokids/minikids-logo.svg" alt="Minikids" className="h-10" />
            <img src="/src/assets/customers/servpro/servpro-logo.png" alt="Servpro" className="h-10" />
            <img src="/src/assets/customers/vanheusen/vanheusen-logo.svg" alt="Van Heusen" className="h-10" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-display font-medium mb-6">{t('about.trajectory.title')}</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-[700px] mx-auto">
            {t('about.trajectory.desc')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
