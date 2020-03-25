import * as React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';

import Delivery from './delivery';
import Products from './products';

export default () => (
  <Router>
    <Header lightTheme={false} />
    
    <Switch>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/delivery">
        <Delivery />
      </Route>
      <Route path="/products/boilers">
        <div style={{ backgroundColor: '#2200ee', height: '300px' }}>BOILERS</div>
      </Route>
      <Route path="/products/crusher">
        <div style={{ backgroundColor: '#2200ee', height: '300px' }}>CRASHERS</div>
      </Route>
    </Switch>
    
    <Footer />
  </Router>
);
