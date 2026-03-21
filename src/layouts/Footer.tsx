import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-low py-20 border-t border-outline-variant">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-primary rounded-md"></div>
              <span className="font-bold text-xl tracking-tight">OMEGATECH</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              {t('contact.info.legal.desc')}<br />
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-5 h-5 bg-surface-highest rounded-sm"></div>
              <div className="w-5 h-5 bg-surface-highest rounded-sm"></div>
              <div className="w-5 h-5 bg-surface-highest rounded-sm"></div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-6 text-base font-display">{t('footer.solutions')}</h4>
            <ul className="list-none p-0 grid gap-3">
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">ArenaGo</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">Fintera</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">SecureX</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">IoT Hub</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-base font-display">{t('footer.company')}</h4>
            <ul className="list-none p-0 grid gap-3">
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('nav.about')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('nav.services')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.press')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 text-base font-display">{t('footer.legal')}</h4>
            <ul className="list-none p-0 grid gap-3">
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.privacy')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.terms')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.security')}</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm">{t('footer.cookies')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
          <span>© 2026 {t('contact.info.legal.desc')} {t('footer.rights')}</span>
          <span>{t('footer.made_with')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
