import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';

// eslint-disable-next-line no-unused-vars
import { IFeatureTable, IProdLine, IProduct, IProductLineDocument } from '../../../consts/interfaces-for-request';

import DecorLine from '../products-catalog/decor-line/decor-line';
import ChooseModel from './choose-model/choose-model';
import ProductDescription from './product-description/product-description';


interface ProductCatalogProps {
  documentDownloadUrl: String;
  prodLines: IProdLine[];
  currentProdLine: IProdLine;
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
  featureTable: IFeatureTable;
  documents: IProductLineDocument[];
  productSelectCallback: Function;
}

export default ({ ...props}: ProductCatalogProps) => {  
  //console.log('Loading products catalog...')
  const arrayOfProducts = props.arrayOfProducts;
  const productSelectCallback = props.productSelectCallback;

  const catchSelect = (value: string) => {
    const selectedProductIndex = arrayOfProducts.findIndex((item) => value === item.name);
    productSelectCallback(arrayOfProducts[selectedProductIndex]);
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
            <div key={'products-catalog-mobile-content'}>
                <ChooseModel {...props} catchSelect={catchSelect} />
                <ProductDescription {...props}  description={props.currentProdLine?.description}isMobile />
            </div>
        }
        desktop={
            <div key={'products-catalog-desktop-content'} className="container-small">
                <ChooseModel {...props} catchSelect={catchSelect} />
                <DecorLine {...props} />
                <ProductDescription {...props} description={props.currentProdLine?.description} isMobile={false} />
            </div>
        }
      />
    </ProvideMediaMatchers>
  );
};
