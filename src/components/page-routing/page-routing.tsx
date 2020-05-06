import * as React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import Delivery from '../delivery/delivery';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import About from '../about/about';
import Products from '../products/products';

export default () => (
  <Switch>
    <Route exact path="/delivery">
      <Delivery />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <Route exact path="/contacts">
      <Contacts />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);
