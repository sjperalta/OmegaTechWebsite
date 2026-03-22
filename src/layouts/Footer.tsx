import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#131313] w-full py-12 px-8 text-white">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-black text-white mb-6 font-headline uppercase leading-none">
            OmegaTech
          </div>
          <p className="text-white/60 text-xs leading-relaxed max-w-xs">
            {t('footer.tagline')}
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <a href={`mailto:${t('footer.contact.email')}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-xs group">
              <span className="material-symbols-outlined text-lg opacity-70 group-hover:opacity-100 transition-opacity">mail</span>
              {t('footer.contact.email')}
            </a>
            <a href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-xs group">
              <span className="material-symbols-outlined text-lg opacity-70 group-hover:opacity-100 transition-opacity">call</span>
              {t('footer.contact.phone')}
            </a>
            <div className="flex items-center gap-3 text-white/70 text-xs">
              <span className="material-symbols-outlined text-lg opacity-70">location_on</span>
              {t('footer.location')}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.solutions')}</h2>
          <ul className="space-y-2 text-white/60 text-xs font-body">
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.arenago')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.fintera')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.securex')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.iot')}</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.company')}</h2>
          <ul className="space-y-2 text-white/60 text-xs font-body">
            <li><a className="hover:text-primary transition-colors" href="#">{t('nav.about')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('nav.services')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.careers')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.blog')}</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.legal')}</h2>
          <div className="flex flex-col gap-2 font-body text-xs tracking-wide text-white/60">
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.privacy')}</a>
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.terms')}</a>
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/60 text-[10px] tracking-widest font-label uppercase flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <span>© {new Date().getFullYear()} OmegaTech. {t('footer.rights')}</span>
          <span className="opacity-20 hidden md:inline-block">|</span>
          <a href="https://omegatech.dev" className="hover:text-primary transition-colors lowercase tracking-normal font-sans font-medium">omegatech.dev</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
