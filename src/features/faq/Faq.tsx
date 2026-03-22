import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Faq: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
    { q: t('faq.q4.q'), a: t('faq.q4.a') },
    { q: t('faq.q5.q'), a: t('faq.q5.a') },
    { q: t('faq.q6.q'), a: t('faq.q6.a') },
    { q: t('faq.q7.q'), a: t('faq.q7.a') },
    { q: t('faq.q8.q'), a: t('faq.q8.a') },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>

      <main className="relative z-10 pt-40 pb-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-8 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-[fadeIn_1s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">FAQ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-[0.8] text-on-surface uppercase mb-8 [text-wrap:balance]">
            {t('faq.title')} <span className="text-primary">{t('faq.title.highlight')}</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed opacity-90 font-body font-light tracking-tight">
            {t('faq.subtitle', 'Todo lo que necesitas saber sobre nuestros productos y servicios.')}
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-6xl mx-auto px-8">
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`neo-bento-card overflow-hidden transition-all duration-500 cursor-pointer group ${
                  openIndex === i ? 'border-primary/30 bg-white/[0.06]' : 'hover:border-white/20'
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {/* Question Row */}
                <div className="flex justify-between items-center gap-6 p-8">
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === i ? 'bg-primary text-on-primary' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}>
                      <span className="material-symbols-outlined text-lg">
                        {openIndex === i ? 'remove' : 'add'}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-bold font-headline text-on-surface leading-tight tracking-tight transition-colors ${openIndex === i ? 'text-primary' : 'group-hover:text-primary'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`material-symbols-outlined text-primary/40 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`}>
                    expand_more
                  </span>
                </div>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8 ml-[60px]">
                    <div className="h-px bg-white/5 mb-6"></div>
                    <p className="text-on-surface-variant text-base leading-relaxed font-body font-light opacity-70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Faq;
