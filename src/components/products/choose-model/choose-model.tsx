/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './choose-model.scss';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import ProductPictures from './product-pictures/product-pictures';
import ProductPicturesMobile from './product-pictures/product-pictures-mobile';
import FeatureTable from './feature-table/feature-table';
import PriceTag from './price-tag/price-tag';
import PriceTagMobile from './price-tag/price-tag-mobile';

export default () => {
  const priceTagProps: object = {
    inStock: true,
    price: '54 354 руб',
  };
  const model: string = 'Fit 20';
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          (
            <div className="choose-model mobile">
              <h2 className="product-title mobile">
                Название может быть длинным и включать модель
                {` ${model}`}
              </h2>
              <ProductPicturesMobile />
              <FeatureTable />
              <PriceTagMobile {...priceTagProps} />
            </div>
          )
        }
        desktop={
          (
            <div className="choose-model desktop">
              <ProductPictures />
              <h2 className="product-title">
                Название может быть длинным и включать модель
                {` ${model}`}
              </h2>
              <FeatureTable />
              <PriceTag {...priceTagProps} />
            </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
