import * as React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { CategoryContext } from '../shared/category-context';

import Delivery from '../delivery/delivery';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import About from '../about/about';
import Products from '../products/products';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../consts/interfaces-for-request';

export default () => {
  //console.log('Initializing routing..')
  return (
    <Switch>
      <Route exact path="/delivery">
        <Delivery key="deliveryPage" />
      </Route>
      <Route path={['/products/:category/:line/:product',
                    '/products/:category/:line', 
                    '/products/:category',
                    '/products/']}
        render={routeProps => (
            <CategoryContext.Consumer>
              {(value: ICategory[]) => (
                <Products key={"productDetailedPage"} categories={value} {...routeProps} />
              )}
            </CategoryContext.Consumer>
        )}
      />
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
