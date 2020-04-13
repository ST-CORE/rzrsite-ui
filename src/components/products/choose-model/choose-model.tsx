/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './choose-model.scss';

import ProductPictures from './product-pictures/product-pictures';
import FeatureTable from './feature-table/feature-table';
import PriceTag from './price-tag/price-tag';

export default () => {
  const priceTagProps: object = {
    inStock: true,
    price: '54354',
  };
  const model: string = 'Fit 20';
  return (
    <div className="choose-model">
      <div className="container-small">
        <ProductPictures />
        <h2 className="product-title">
          Название может быть длинным и включать модель
          {` ${model}`}
        </h2>
        <FeatureTable />
        <PriceTag {...priceTagProps} />
      </div>
    </div>
  );
};
