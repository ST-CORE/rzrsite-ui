import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import RouteSwitcher from './components/route-switcher';

export default () => (
  <Router>
    <Header lightTheme />
    <RouteSwitcher />
    <Footer />
  </Router>
);
