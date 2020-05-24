/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './choose-model.scss';
import {
  Switch, Route, Redirect, useParams,
} from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
// eslint-disable-next-line no-unused-vars
import { IProduct } from '../../../../consts/interfaces-for-request';

import ProductPictures from './product-pictures/product-pictures';
import ProductPicturesMobile from './product-pictures/product-pictures-mobile';
// import FeatureTable from './feature-table/feature-table';
// import PriceTag from './price-tag/price-tag';
import PriceTagMobile from './price-tag/price-tag-mobile';

interface ChooseModelProps {
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
}

export default ({ arrayOfProducts, currentProduct } : ChooseModelProps) => {
  const model: string = currentProduct.name;
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          (
            <div className="choose-model mobile">
              <h2 className="product-title mobile">
                {` ${model}`}
              </h2>
              <ProductPicturesMobile />
              {/* <FeatureTable /> */}
              {/* <PriceTagMobile arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} /> */}
            </div>
          )
        }
        desktop={
          (
            <div className="choose-model desktop">
              <ProductPictures />
              <h2 className="product-title">
                {` ${model}`}
              </h2>
              {/* <FeatureTable />
              <PriceTag {...priceTagProps} /> */}
            </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
