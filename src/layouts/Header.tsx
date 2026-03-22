import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';

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

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
      isScrolled ? "w-[95%] max-w-5xl" : "w-full max-w-6xl px-8"
    )}>
      <div className={cn(
        "grid grid-cols-3 items-center h-16 transition-all duration-500",
        isScrolled 
          ? "glass-panel rounded-full px-8 shadow-2xl shadow-primary/10 border-white/10" 
          : "border-b border-white/5"
      )}>
        {/* Logo - Left aligned */}
        <div
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 cursor-pointer group justify-self-start"
        >
          <img
            alt="OmegaTech Logo"
            width="100"
            height="36"
            className="h-9 w-auto transition-all group-hover:scale-110 group-hover:rotate-3"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHYIrve3MhUl_DDPSqpA0NmWZNRHY2SMrUNPesecnBAglK6Wyihwa5ZrjRpnSMwqCMyL2rk8LRE63o5yb3Sv5GoqZrHN-P5ldy_JpIWZRlmd2Gamkx4PM7gCDAcF8K8ovaxVXtju8vRZMU2Oi0ydSlCAIWRDFpqOOXql38TOmBfXLm-LQjwW2_FDdGcW6wkKAejQrTsuJn1VY1PZBVWD12JZ872xagUkKXm1QrpIy3BS5IjekU8wlstBsdx_yxYebTpVWUDnd0Pdc"
          />
          <span className="text-xl font-black tracking-tighter text-primary font-headline uppercase hidden lg:block">
            OmegaTech
          </span>
        </div>

        {/* Navigation - Center aligned */}
        <nav className="flex justify-self-center gap-1 lg:gap-8 items-center font-headline tracking-tighter text-[10px] lg:text-xs uppercase font-bold">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.path);
              }}
              className={cn(
                "px-3 py-1.5 rounded-full transition-all hover:text-primary",
                currentPath === link.path 
                  ? "text-primary bg-primary/10" 
                  : "text-on-surface/60"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions - Right aligned */}
        <div className="flex items-center gap-3 lg:gap-6 justify-self-end">
          <div className="flex items-center gap-2">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
              className="text-on-surface text-[10px] font-bold uppercase opacity-40 hover:opacity-100 transition-all w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface/40 hover:text-primary transition-all hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          <button
            className="hidden md:flex bg-primary text-slate-950 px-6 py-2 rounded-full font-black hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest h-9 items-center shadow-lg shadow-primary/20"
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
