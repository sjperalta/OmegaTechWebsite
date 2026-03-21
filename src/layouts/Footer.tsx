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
            <a href="mailto:info@omegatech.dev" className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors text-xs group">
              <span className="material-symbols-outlined text-lg opacity-50 group-hover:opacity-100 transition-opacity">mail</span>
              info@omegatech.dev
            </a>
            <a href="tel:+50499405708" className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors text-xs group">
              <span className="material-symbols-outlined text-lg opacity-50 group-hover:opacity-100 transition-opacity">call</span>
              +504 9940 5708
            </a>
            <div className="flex items-center gap-3 text-white/40 text-xs">
              <span className="material-symbols-outlined text-lg opacity-50">location_on</span>
              {t('footer.location')}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.solutions')}</h5>
          <ul className="space-y-2 text-white/60 text-xs font-body">
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.arenago')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.fintera')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.securex')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.solutions.iot')}</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.company')}</h5>
          <ul className="space-y-2 text-white/60 text-xs font-body">
            <li><a className="hover:text-primary transition-colors" href="#">{t('nav.about')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('nav.services')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.careers')}</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">{t('footer.blog')}</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="text-primary font-bold text-sm uppercase tracking-widest">{t('footer.legal')}</h5>
          <div className="flex flex-col gap-2 font-body text-xs tracking-wide text-white/60">
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.privacy')}</a>
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.terms')}</a>
            <a className="hover:text-primary underline-offset-4 hover:underline" href="#">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/30 text-[10px] tracking-widest font-label uppercase">
          © {new Date().getFullYear()} OmegaTech. {t('footer.rights')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
