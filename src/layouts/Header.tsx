import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { theme, toggleTheme } = useAppContext();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.products'), path: '/products' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.faq'), path: '/faq' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-[#131313]/80 backdrop-blur-xl border-b border-outline-variant/10 dark:border-none">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-3 items-center h-16">
        {/* Logo - Left aligned */}
        <div
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 cursor-pointer group justify-self-start"
        >
          <img
            alt="OmegaTech Logo"
            className="h-10 w-auto transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHYIrve3MhUl_DDPSqpA0NmWZNRHY2SMrUNPesecnBAglK6Wyihwa5ZrjRpnSMwqCMyL2rk8LRE63o5yb3Sv5GoqZrHN-P5ldy_JpIWZRlmd2Gamkx4PM7gCDAcF8K8ovaxVXtju8vRZMU2Oi0ydSlCAIWRDFpqOOXql38TOmBfXLm-LQjwW2_FDdGcW6wkKAejQrTsuJn1VY1PZBVWD12JZ872xagUkKXm1QrpIy3BS5IjekU8wlstBsdx_yxYebTpVWUDnd0Pdc"
          />
          <span className="text-xl font-bold tracking-tighter text-primary font-headline uppercase">
            OmegaTech
          </span>
        </div>

        {/* Navigation - Center aligned */}
        <nav className="hidden md:flex justify-self-center gap-10 items-center font-headline tracking-tighter text-sm uppercase">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.path);
              }}
              className={`transition-colors whitespace-nowrap ${currentPath === link.path
                  ? 'text-primary border-b-2 border-primary dark:border-none pb-1'
                  : 'text-on-surface hover:text-primary'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions - Right aligned */}
        <div className="flex items-center gap-4 justify-self-end">
          <div className="flex gap-2 items-center border-l border-outline-variant/10 dark:border-transparent pl-4 mr-2">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
              className="text-on-surface text-[10px] font-bold uppercase opacity-60 hover:opacity-100 border border-outline-variant/20 px-2 py-0.5 rounded transition-all"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          <button
            className="bg-primary text-on-primary px-6 py-2 rounded font-medium hover:opacity-90 transition-all active:scale-95 text-sm uppercase tracking-wider h-10 flex items-center"
            onClick={() => onNavigate('/contact')}
          >
            {t('nav.cta')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
