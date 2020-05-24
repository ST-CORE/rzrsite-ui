import * as React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { MyContext } from '../shared/my-context';

import Delivery from '../delivery/delivery';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import About from '../about/about';
import ProductsAbout from '../products-about/products-about';
import Products from '../products/products';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../consts/interfaces-for-request';

export default () => (
  <Switch>
    <Route exact path="/delivery">
      <Delivery />
    </Route>
    <Route exact path="/products">
      <ProductsAbout />
    </Route>
    <Route path={['/products/:category/', '/products/:category/:line', '/products/:category/:line/:product']}>
      <MyContext.Consumer>
        {(value: ICategory[]) => <Products categories={value} />}
      </MyContext.Consumer>
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
