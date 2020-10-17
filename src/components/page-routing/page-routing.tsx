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
import { ICategory, IProduct, IProdLine, IExtendedCategory } from '../../consts/interfaces-for-request';

export default () => {
  // const [permissionToRedirect, allowRedirect] = React.useState(false);
  const [currentProductPath, setProductPath] = React.useState('');
  const [currentProductLine, setProductLine] = React.useState('');
  const [currentCategoryPath, setCategoryPath] = React.useState('');
  const [currentRedirectPath, setRedirectPath] = React.useState('');
  const liftCurrentProductAndPath = (currentProdPath: [IProduct, IProdLine, IExtendedCategory]) => {
    const [currentProd, currentLine, currentCategory] = currentProdPath;
    setProductPath(currentProd.path);
    setProductLine(currentLine.path);
    setCategoryPath(currentCategory.path);
    const pathToRedirect = `${currentCategoryPath}${currentProductLine}${currentProductPath}`;
    setRedirectPath(pathToRedirect);
    // allowRedirect(true);
  };
  
  return (
    <Switch>
      <Route exact path="/delivery">
        <Delivery />
      </Route>
      <Route exact path="/products">
        <ProductsAbout />
      </Route>
      <Route path={['/products/:category/', '/products/:category/:line', '/products/:category/:line/:product']}>
        <CategoryContext.Consumer>
          {(value: ICategory[]) => (
            <Products categories={value} liftCurrentProductAndPath={liftCurrentProductAndPath} />
          )}
        </CategoryContext.Consumer>
      </Route>
      {/* <Route path={['/products/:category/', '/products/:category/:line', '/products/:category/:line/:product']}> */}
      {/*   <Redirect to={`${currentUrl}${currentProductPath}`} />
      </Route> */}
      {/* <Route path="/products/:category/:line/:product"> */}
      {/* <CategoryContext.Consumer>
          {() => {
            if (permissionToRedirect) { 
              return (
                <Route>
                  <Redirect to={pathToRedirect} />
                </Route>
              );
            }
          }}
        </CategoryContext.Consumer>
        <CategoryContext.Consumer>
          {(value: ICategory[]) => (
            <Route>
              <Products categories={value} liftCurrentProductAndPath={liftCurrentProductAndPath} />
            </Route>
          )}
        </CategoryContext.Consumer>
      </Route> */}
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
