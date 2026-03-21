import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import { Home } from './features/home';
import { Products } from './features/products';
import { Services } from './features/services';
import { About } from './features/about';
import { Faq } from './features/faq';
import { Contact } from './features/contact';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
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
      <Layout currentPath={currentPath} onNavigate={handleNavigate}>
        {renderPage()}
      </Layout>
    </AppProvider>
  );
};

export default App;
