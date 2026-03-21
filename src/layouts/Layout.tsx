import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPath, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath={currentPath} onNavigate={onNavigate} />
      <main className="flex-1 mt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
