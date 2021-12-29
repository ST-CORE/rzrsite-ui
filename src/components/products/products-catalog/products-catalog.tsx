import React from 'react';
import { useParams } from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';

// eslint-disable-next-line no-unused-vars
import { IFeatureTable, IProdLine, IProduct, IProductLineDocument } from '../../../consts/interfaces-for-request';

import DecorLine from '../products-catalog/decor-line/decor-line';
import ChooseModel from './choose-model/choose-model';
import ProductDescription from './product-description/product-description';


interface ProductCatalogProps {
  prodLines: IProdLine[];
  currentProdLine: IProdLine;
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
  featureTable: IFeatureTable;
  documents: IProductLineDocument[];
  productSelectCallback: Function;
}

export default ({ prodLines, currentProdLine, arrayOfProducts, currentProduct, featureTable, documents, productSelectCallback }: ProductCatalogProps) => {  
  console.log('Loading products catalog...')

  const catchSelect = (value: string) => {
    const selectedProductIndex = arrayOfProducts.findIndex((item) => value === item.name);
    productSelectCallback(arrayOfProducts[selectedProductIndex]);
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
            <div key={'products-catalog-mobile-content'}>
                <ChooseModel featureTable={featureTable} arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
                <ProductDescription description={currentProdLine?.description} documents={documents} featureTable={featureTable} isMobile />
            </div>
        }
        desktop={
            <div key={'products-catalog-desktop-content'} className="container-small">
                <ChooseModel featureTable={featureTable} arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
                <DecorLine prodlines={prodLines} />
                <ProductDescription description={currentProdLine?.description} documents={documents} featureTable={featureTable} isMobile={false} />
            </div>
        }
      />
    </ProvideMediaMatchers>
  );
};
