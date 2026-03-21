import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../../hooks/useReveal';
import Lightbox from '../../components/Lightbox';
import logoFintera from '../../assets/products/fintera/fintera-logo-color.svg';
import logoSecureX from '../../assets/products/securex/logo_securex.svg';
import logoArenaGo from '../../assets/products/arena-go/logo_arenago_transparent.png';

// Arena Go Screens
import screenArenaGoHome from '../../assets/products/arena-go/home.png';
import screenArenaGoTickets from '../../assets/products/arena-go/tickets.png';
import screenArenaGoSubs from '../../assets/products/arena-go/subscriptions.png';
import screenArenaGoAccount from '../../assets/products/arena-go/create-account.png';

// Fintera Screens
import screenFinteraHome from '../../assets/products/fintera/home.png';
import screenFinteraAnalytics from '../../assets/products/fintera/analitycs.png';
import screenFinteraAudit from '../../assets/products/fintera/audit.png';
import screenFinteraContabilidad from '../../assets/products/fintera/contabilidad.png';
import screenFinteraContracts from '../../assets/products/fintera/contracts.png';

// SecureX Screens
import screenSecureXHome from '../../assets/products/securex/home.png';
import screenSecureXFinancial from '../../assets/products/securex/financial-analitycs.png';
import screenSecureXIncidents from '../../assets/products/securex/incidents.png';
import screenSecureXPatrol from '../../assets/products/securex/patrol.png';
import screenSecureXScan from '../../assets/products/securex/scan.png';

interface ProductsProps {
  onNavigate: (path: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);
  useReveal();

  const productsList = [
    { 
      name: t('products.arenago.name'), 
      price: t('products.arenago.price'),
      tag: 'TICKETING & EVENTS',
      desc: t('products.arenago.desc'),
      logo: logoArenaGo,
      mainScreen: screenArenaGoHome,
      hideText: true,
      gallery: [screenArenaGoTickets, screenArenaGoSubs, screenArenaGoAccount],
      features: [
        t('products.arenago.feature1'),
        t('products.arenago.feature2'),
        t('products.arenago.feature3')
      ]
    },
    { 
      name: t('products.fintera.name'), 
      price: t('products.fintera.price'),
      tag: 'FINTECH',
      desc: t('products.fintera.desc'),
      logo: logoFintera,
      mainScreen: screenFinteraHome,
      hideText: true,
      gallery: [screenFinteraAnalytics, screenFinteraAudit, screenFinteraContabilidad, screenFinteraContracts],
      features: [
        t('products.fintera.feature1'),
        t('products.fintera.feature2'),
        t('products.fintera.feature3')
      ]
    },
    { 
      name: t('products.securex.name'), 
      price: t('products.securex.price'),
      tag: 'SECURITY & MANAGEMENT',
      desc: t('products.securex.desc'),
      logo: logoSecureX,
      mainScreen: screenSecureXHome,
      showTextWithLogo: true,
      gallery: [screenSecureXFinancial, screenSecureXIncidents, screenSecureXPatrol, screenSecureXScan],
      features: [
        t('products.securex.feature1'),
        t('products.securex.feature2'),
        t('products.securex.feature3')
      ]
    }
  ];

  return (
    <div className="bg-surface py-20 lg:py-32">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <header className="mb-20 animate-slide-down">
          <h1 className="text-4xl md:text-[3.5rem] font-display font-medium text-on-surface mb-6 tracking-tight leading-tight">
            Our <span className="text-primary">Software Products</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-[700px] leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            {t('products.subtitle')}
          </p>
        </header>

        <div className="flex flex-col gap-[120px]">
          {productsList.map((p, i) => (
            <div 
              key={i} 
              className={`reveal animate-slide-up bg-surface-container-low rounded-[40px] border border-outline-variant p-8 md:p-20 flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-20 items-center min-h-[600px] shadow-sm`}
            >
              {/* Product Info */}
              <div className="flex-1 flex flex-col gap-8 w-full">
                <span className="text-primary text-sm font-bold tracking-widest uppercase">
                  {p.tag}
                </span>

                <div className="h-[60px] flex items-center gap-3">
                  <img src={p.logo} alt={p.name} className="h-full max-w-[180px] object-contain" />
                  {p.showTextWithLogo && (
                    <span className="text-3xl md:text-[2.5rem] font-bold text-on-surface tracking-tight whitespace-nowrap">{p.name}</span>
                  )}
                </div>

                {!p.hideText && !p.showTextWithLogo && (
                  <h3 className="text-3xl md:text-[2.5rem] font-display font-medium text-on-surface m-0 tracking-tight">{p.name}</h3>
                )}

                <p className="text-on-surface-variant text-lg leading-relaxed max-w-[600px]">
                  {p.desc}
                </p>

                {p.features && (
                  <ul className="m-0 p-0 list-none text-base text-on-surface-variant flex flex-col gap-4">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex gap-3 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-6 items-center mt-4">
                  <span className="text-xl md:text-2xl font-bold text-on-surface">{p.price}</span>
                  <button 
                    onClick={() => onNavigate('/contact')}
                    className="px-8 py-4 rounded-full bg-primary text-on-primary font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    {t('products.view_details')}
                  </button>
                </div>
              </div>

              {/* Product Visuals / Gallery */}
              <div className="flex-[1.2] flex flex-col gap-6 w-full">
                {/* Main Large Image */}
                <div 
                  className="rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-outline-variant bg-surface-high aspect-[16/10] cursor-zoom-in hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-500 group"
                  onClick={() => setSelectedImage({ src: p.mainScreen, alt: p.name })}
                >
                  <img src={p.mainScreen} alt={`${p.name} main interface`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Smaller Thumbnails Gallery */}
                {p.gallery && (
                  <div className="grid grid-cols-3 gap-4">
                    {p.gallery.map((img, idx) => (
                      <div 
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-outline-variant aspect-[16/10] bg-surface-high cursor-zoom-in hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group"
                        onClick={() => setSelectedImage({ src: img, alt: `${p.name} detail ${idx + 1}` })}
                      >
                        <img src={img} alt={`${p.name} detail ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default Products;
