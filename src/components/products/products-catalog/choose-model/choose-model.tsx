/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import './choose-model.scss';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
// eslint-disable-next-line no-unused-vars
import { IProduct, IImage, IFeatureTable, IVideo} from '../../../../consts/interfaces-for-request';
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
  featureTable: IFeatureTable;
}

export default ({...props}: ChooseModelProps) => {  
  const model: string = props?.currentProduct?.name;

  const [imageInfoList, setImageInfoList] = React.useState([] as IImage[]);
  const [videoInfoList, setVideoInfoList] = React.useState([] as IVideo[]);

  React.useEffect(() => {
    axios.get(`${ApiUrl}/product/${props.currentProduct.id}/image`)
      .then((response) => {
        if (response.data != null && response.data !== "") setImageInfoList(response.data as IImage[]);
        else setImageInfoList([]);
      });
  }, [props.currentProduct.id]);
  
  React.useEffect(() => {
      axios.get(`${ApiUrl}/product/${props.currentProduct.id}/video`)
          .then((response) => {
              if (response.data != null && response.data !== "") setVideoInfoList(response.data as IVideo[]);
              else setVideoInfoList([]);
          });
  }, [props.currentProduct.id]);

  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          (
            <div key={'choose-model-mobile'} className="choose-model mobile">
              <h2 className="product-title mobile">
                {` ${model}`}
              </h2>
              <ProductPicturesMobile imageInfoList={imageInfoList}/>
              <FeatureTable currentProduct={props.currentProduct} featureTable={props.featureTable} />
              <PriceTagMobile arrayOfProducts={props.arrayOfProducts} currentProduct={props.currentProduct} catchSelect={props.catchSelect} />
            </div>
          )
        }
        desktop={
          (
            <div key={'choose-model-desktop'} className="choose-model desktop">
              <ProductPictures imageInfoList={imageInfoList} videoInfoList={videoInfoList}/>
              <h2 className="product-title">
                {` ${model}`}
              </h2>
              <FeatureTable currentProduct={props.currentProduct} featureTable={props.featureTable} />
              <PriceTag arrayOfProducts={props.arrayOfProducts} currentProduct={props.currentProduct} catchSelect={props.catchSelect} />
            </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
