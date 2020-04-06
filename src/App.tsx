import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PageRouting from './components/page-routing/page-routing';

export default () => (
  <Router>
    <Header lightTheme />
    <main className="main-content">
      <PageRouting />
    </main>
    <Footer />
  </Router>
);
