import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PageRouting from './components/page-routing/page-routing';

export default () => {
  const location = useLocation();
  let theme: boolean = false;
  if (location.pathname === '/') {
    theme = true;
  }
  
  return (
    <div>
      <Header lightTheme={theme} />
      <main className="main-content">
        <PageRouting />
      </main>
      <Footer />
    </div>
  );
};
