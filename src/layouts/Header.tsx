import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';
import logoOmegaTech from '../assets/logo-omegatech.webp';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { theme, toggleTheme } = useAppContext();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  // Close menu when navigating
  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500",
        isScrolled ? "w-[95%] max-w-5xl" : "w-full max-w-6xl px-4 md:px-8"
      )}>
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-3 items-center h-16 transition-all duration-500",
          isScrolled 
            ? "glass-panel rounded-full px-8 shadow-2xl shadow-primary/10 border-white/10" 
            : "border-b border-white/5 px-4 md:px-0"
        )}>
          {/* Logo - Left aligned */}
          <div
            onClick={() => handleNavigate('/')}
            className="flex items-center gap-2 cursor-pointer group justify-self-start z-50"
          >
            <img
              alt="OmegaTech Logo"
              width="100"
              height="36"
              className="h-8 md:h-9 w-auto transition-all group-hover:scale-110 group-hover:rotate-3"
              src={logoOmegaTech}
            />
            <span className="text-xl font-black tracking-tighter text-primary font-headline uppercase hidden lg:block">
              OmegaTech
            </span>
          </div>

          {/* Desktop Navigation - Center aligned */}
          <nav className="hidden md:flex justify-self-center gap-1 lg:gap-8 items-center font-headline tracking-tighter text-xs uppercase font-bold">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.path);
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
          <div className="flex items-center gap-2 md:gap-3 lg:gap-6 justify-self-end">
            <div className="hidden md:flex items-center gap-2">
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
              onClick={() => handleNavigate('/contact')}
            >
              {t('nav.cta')}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/5 border border-white/10 text-primary z-50",
                isMenuOpen ? "bg-white/10 rotate-90" : ""
              )}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[55] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
        
        <div className={cn(
          "absolute right-0 top-0 bottom-0 w-full max-w-[300px] bg-slate-950/50 flex flex-col pt-32 px-10 border-l border-white/5 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40 mb-2">Navigation</span>
            {navLinks.map((link, idx) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.path);
                }}
                className={cn(
                  "text-2xl font-black tracking-tighter uppercase transition-all flex items-center gap-4",
                  currentPath === link.path ? "text-primary" : "text-white/40 hover:text-white"
                )}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-[10px] opacity-20 font-mono">0{idx + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pb-20 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40">Configuration</span>
              <div className="flex gap-4">
                <button
                  onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white font-bold text-xs uppercase flex items-center justify-between"
                >
                  Language
                  <span className="text-primary">{i18n.language === 'es' ? 'ES' : 'EN'}</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/60"
                >
                  <span className="material-symbols-outlined text-xl">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
              </div>
            </div>

            <button
              className="w-full bg-primary text-slate-950 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all"
              onClick={() => handleNavigate('/contact')}
            >
              {t('nav.cta')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
