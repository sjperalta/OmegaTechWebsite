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
    <div className="pt-24 pb-24 md:pb-32 bg-surface">
      <div className="container mx-auto px-8 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-display font-medium mb-16 tracking-tight">
          {t('faq.title')} <span className="text-primary">{t('faq.title.highlight')}</span>
        </h1>
        
        <div className="grid gap-5">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 cursor-pointer transition-all duration-300 border ${
                openIndex === i 
                  ? 'bg-surface-container border-outline-variant shadow-lg' 
                  : 'bg-transparent border-transparent hover:bg-surface-low'
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xl font-display font-medium text-on-surface m-0 leading-tight">{faq.q}</h3>
                <span className={`text-primary text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-on-surface-variant leading-relaxed text-base">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
