import * as React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { CategoryContext } from '../shared/category-context';

import Delivery from '../delivery/delivery';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import About from '../about/about';
import ProductsAbout from '../products-about/products-about';
import Products from '../products/products';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../consts/interfaces-for-request';

export default () => {
  console.log('Initializing routing..')
  return (
    <Switch>
      <Route exact path="/delivery">
        <Delivery key="deliveryPage" />
      </Route>
      <Route exact path="/products">
        <ProductsAbout key="aboutPage" />
      </Route>
      <Route path={['/products/:category/:line/:product', 
                    '/products/:category/:line', 
                    '/products/:category']}>
        <CategoryContext.Consumer>
          {(value: ICategory[]) => (
            <Products key={"productDetailedPage"} categories={value} />
          )}
        </CategoryContext.Consumer>
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
};
