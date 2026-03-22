import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';

const Contact: React.FC = () => {
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

      <main className="relative z-10 pt-40 pb-20">
        <section className="max-w-6xl mx-auto px-8 mb-24">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{t('contact.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.8] text-on-surface uppercase mb-12 [text-wrap:balance]">
              {t('contact.title')} <br /> <span className="text-primary">{t('contact.title.highlight')}</span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed opacity-90 font-body font-light tracking-tight">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 reveal">
            <div className="neo-bento-card p-10 group hover:bg-primary/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary">mail</span>
                </div>
                <div>
                   <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{t('contact.info.email.label')}</div>
                   <a href="mailto:info@omegatech.dev" className="text-xl font-bold text-on-surface hover:text-primary transition-colors">info@omegatech.dev</a>
                </div>
              </div>
            </div>

            <div className="neo-bento-card p-10 group hover:bg-primary/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary">call</span>
                </div>
                <div>
                   <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{t('contact.info.call.label')}</div>
                   <a href="tel:+50499405708" className="text-xl font-bold text-on-surface hover:text-primary transition-colors">+504 9940-5708</a>
                </div>
              </div>
            </div>

            <div className="neo-bento-card p-10 group hover:bg-primary/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary">location_on</span>
                </div>
                <div>
                   <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{t('contact.info.office.label')}</div>
                   <p className="text-xl font-bold text-on-surface">{t('footer.location')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 reveal">
            <form className="neo-bento-card p-12 bg-white/5 backdrop-blur-3xl border-white/10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest ml-1">{t('contact.form.name.label')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact.form.name.placeholder')} 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:border-primary focus:bg-white/10 transition-all outline-none"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest ml-1">{t('contact.form.email.label')}</label>
                    <input 
                      type="email" 
                      placeholder={t('contact.form.email.placeholder')} 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:border-primary focus:bg-white/10 transition-all outline-none"
                    />
                 </div>
              </div>
              
              <div className="space-y-3">
                 <label className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest ml-1">{t('contact.form.message.label')}</label>
                 <textarea 
                   rows={6} 
                   placeholder={t('contact.form.message.placeholder')} 
                   className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:border-primary focus:bg-white/10 transition-all outline-none resize-none"
                 />
              </div>

              <button className="group relative w-full bg-primary text-on-primary py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs overflow-hidden transition-all hover:scale-[1.02] hover:shadow-glow-primary active:scale-[0.98]">
                 <span className="relative z-10 flex items-center justify-center gap-3">
                    {t('contact.form.button')}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">send</span>
                 </span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
