import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import { Home } from './features/home';
import { Products } from './features/products';
import { Services } from './features/services';
import { About } from './features/about';
import { Faq } from './features/faq';
import { Contact } from './features/contact';
import { AppProvider } from './context/AppContext';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const getHashPath = () => {
    const hash = window.location.hash.slice(1); // remove '#'
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState(getHashPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getHashPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <Home onNavigate={handleNavigate} />;
      case '/products':
        return <Products onNavigate={handleNavigate} />;
      case '/services':
        return <Services onNavigate={handleNavigate} />;
      case '/about':
        return <About />;
      case '/faq':
        return <Faq />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <AppProvider>
      <CustomCursor />
      <WhatsAppButton />
      <Layout currentPath={currentPath} onNavigate={handleNavigate}>
        {renderPage()}
      </Layout>
    </AppProvider>
  );
};

export default App;
