import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-50">
      <Header />
      <main className="pt-20" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div style={{ paddingTop: '60px' }}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;