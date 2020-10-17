/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import './choose-model.scss';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
// eslint-disable-next-line no-unused-vars
import { IProduct, IImage } from '../../../../consts/interfaces-for-request';
import { ApiUrl } from '../../../../consts/api';


import ProductPictures from './product-pictures/product-pictures';
import ProductPicturesMobile from './product-pictures/product-pictures-mobile';
import FeatureTable from './feature-table/feature-table';
import PriceTag from './price-tag/price-tag';
import PriceTagMobile from './price-tag/price-tag-mobile';

interface ChooseModelProps {
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
  catchSelect: Function;
}

export default ({ arrayOfProducts, currentProduct, catchSelect } : ChooseModelProps) => {
  const model: string = currentProduct.name;
  
  const [imageInfoList, setImageInfoList] = React.useState([] as IImage[]);
  
  React.useEffect(() => {
    axios.get(`${ApiUrl}/product/${currentProduct.id}/image`)
      .then((response) => {
        setImageInfoList(response.data as IImage[]);
      });
  }, [currentProduct.id]);
    
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          (
            <div className="choose-model mobile">
              <h2 className="product-title mobile">
                {` ${model}`}
              </h2>
              <ProductPicturesMobile imageInfoList={imageInfoList} />
              <FeatureTable />
              <PriceTagMobile arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
            </div>
          )
        }
        desktop={
          (
            <div className="choose-model desktop">
              <ProductPictures imageInfoList={imageInfoList} />
              <h2 className="product-title">
                {` ${model}`}
              </h2>
              <FeatureTable />
              <PriceTag arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
            </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
