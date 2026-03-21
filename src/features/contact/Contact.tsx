import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  useReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="py-24 md:py-32 flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-12 md:p-16 bg-surface-container rounded-[32px] border border-outline-variant max-w-[500px] animate-scale-in">
          <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-8 flex items-center justify-center text-on-primary text-3xl shadow-lg">✓</div>
          <h2 className="text-3xl font-display font-medium mb-4">{t('contact.success.title')}</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            {t('contact.success.desc')}
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-8 py-3 bg-transparent border border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
          >
            {t('contact.success.button')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 md:py-32">
      <div className="container animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="reveal active">
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8 animate-slide-down">
              {t('contact.title')} <span className="text-primary">{t('contact.title.highlight')}</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 opacity-0 animate-fade-in [animation-delay:0.2s]">
              {t('contact.subtitle')}
            </p>
            
            <div className="grid gap-10">
              <div className="reveal active flex flex-col gap-3">
                <h4 className="text-primary text-sm font-bold tracking-widest uppercase">{t('contact.info.legal')}</h4>
                <p className="text-on-surface-variant text-lg">{t('contact.info.legal.desc')}</p>
              </div>
              <div className="reveal active flex flex-col gap-3">
                <h4 className="text-primary text-sm font-bold tracking-widest uppercase">{t('contact.info.hq')}</h4>
                <p className="text-on-surface-variant text-lg whitespace-pre-line">{t('contact.info.hq.desc')}</p>
              </div>
              <div className="reveal active flex flex-col gap-3">
                <h4 className="text-primary text-sm font-bold tracking-widest uppercase">{t('contact.info.direct')}</h4>
                <p className="text-on-surface-variant text-lg whitespace-pre-line">{t('contact.info.direct.desc')}</p>
              </div>
            </div>
          </div>

          <div className={`reveal active p-10 md:p-16 bg-surface-container rounded-[32px] border border-outline-variant relative transition-all duration-500 shadow-xl ${
            status === 'loading' ? 'opacity-70 blur-[1px]' : 'opacity-100'
          }`}>
            <h3 className="text-2xl font-display font-medium mb-8 text-on-surface">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[0.7rem] text-primary font-bold tracking-[0.2em] uppercase">{t('contact.form.name.label')}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t('contact.form.name.placeholder')} 
                    className="bg-transparent border-0 border-b border-outline-variant py-3 text-on-surface text-lg outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[0.7rem] text-primary font-bold tracking-[0.2em] uppercase">{t('contact.form.email.label')}</label>
                  <input 
                    required
                    type="email" 
                    placeholder={t('contact.form.email.placeholder')} 
                    className="bg-transparent border-0 border-b border-outline-variant py-3 text-on-surface text-lg outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[0.7rem] text-primary font-bold tracking-[0.2em] uppercase">{t('contact.form.message.label')}</label>
                  <textarea 
                    required
                    placeholder={t('contact.form.message.placeholder')} 
                    rows={4}
                    className="bg-transparent border-0 border-b border-outline-variant py-3 text-on-surface text-lg outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="mt-6 py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg hover:shadow-primary/20 hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? t('contact.form.button.sending') : t('contact.form.button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
