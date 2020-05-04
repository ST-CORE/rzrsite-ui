import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './products.scss';
import ProductsNav from './products-nav/products-nav';
import ProductsNavMobile from './products-nav/products-nav-mobile';
import ChooseModel from './choose-model/choose-model';
import DecorLine from './decor-line/decor-line';
import ProductDescription from './product-description/product-description';
import ProductDescriptionMobile from './product-description/product-description-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="products mobile">
            <ProductsNavMobile />
            <ChooseModel />
            <ProductDescriptionMobile />
          </div>
        )
      }
      desktop={
        (
          <div className="products desktop">
            <ProductsNav />
            <div className="container-small">
              <ChooseModel />
              <DecorLine />
              <ProductDescription />
            </div>
          </div>
        )
      }
    />
  </ProvideMediaMatchers>
);
