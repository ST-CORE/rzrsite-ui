import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PageRouting from './components/page-routing';

export default () => (
  <Router>
    <Header lightTheme />
    <PageRouting />
    <Footer />
  </Router>
);
