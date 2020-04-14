import React from 'react';
import './products.scss';
import ProductsNav from './products-nav/products-nav';
import ChooseModel from './choose-model/choose-model';
import ProductDescription from './product-description/product-description';

export default () => (
  <div className="products">
    <ProductsNav />
    <div className="container-small">
      <ChooseModel />
      <ProductDescription />
    </div>
  </div>
);
