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
    <header className="glass fixed top-0 left-0 right-0 h-[var(--header-height)] z-[1000] flex items-center border-b border-outline-variant">
      <div className="container flex justify-between items-center w-full">
        <div 
          onClick={() => onNavigate('/')}
          className="cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-on-primary font-bold text-xl">Ω</span>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">
            OMEGATECH
          </span>
        </div>

        <nav className="flex items-center gap-10">
          <ul className="flex gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a 
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.path);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    currentPath === link.path 
                      ? 'text-primary' 
                      : 'text-on-surface-variant hover:text-primary opacity-80 hover:opacity-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 items-center border-l border-outline-variant pl-6">
            <button 
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
              className="bg-none text-on-surface text-[0.75rem] font-bold cursor-pointer uppercase opacity-60 hover:opacity-100 border border-outline-variant hover:border-primary px-2 py-1 rounded transition-all"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
            <button 
              onClick={toggleTheme}
              className="bg-surface-container w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer text-on-surface border border-outline-variant hover:border-primary hover:text-primary shadow-sm transition-all"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        <div>
          <button 
            className="bg-gradient-to-br from-primary to-primary-container px-5 py-2.5 rounded-lg text-on-primary font-bold text-sm hover:shadow-lg transition-all"
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
