import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import { ApiUrl } from '../../../consts/api';

// eslint-disable-next-line no-unused-vars
import { IFeatureTable, IProdLine, IProduct } from '../../../consts/interfaces-for-request';

import DecorLine from '../products-catalog/decor-line/decor-line';
import ChooseModel from './choose-model/choose-model';
import ProductDescription from './product-description/product-description';


interface ProductCatalogProps {
  prodlines: IProdLine[];
  liftCurrentProduct: Function;
}

interface IProdlineParams {
  category?: string;
  line?: string;
  product?: string;
}

export default ({ prodlines, liftCurrentProduct }: ProductCatalogProps) => {
  const params: IProdlineParams = useParams();
  const matchedLine = prodlines.find((item: IProdLine) => {
    const examinedPath = item.path;
    const defaultLine = prodlines[0];
    const currentPath: string = params.line ? params.line : defaultLine.path;
    console.log(examinedPath, 'examinedPath', currentPath, 'currentPath');
    return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
  });
  
  console.log(matchedLine, "matchedLine");
  
  const [arrayOfProducts, setArrayOfProducts] = React.useState([] as IProduct[]);
  const [renderPermission, allowRender] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState({} as IProduct);
  const [featureTable, setFeatureTable] = React.useState({} as IFeatureTable);

  React.useEffect(() => {
    allowRender(false);
    setArrayOfProducts([] as IProduct[]);
    axios.get(`${ApiUrl}/category/${matchedLine?.categoryId}/productLine/${matchedLine?.id}/product`)
      .then((response) => {
        const result = response.data as IProduct[];
        setArrayOfProducts(result);
        allowRender(true);
      });
  }, [matchedLine]);

  React.useEffect(() => {      
    axios.get(`${ApiUrl}/Category/${matchedLine?.categoryId}/getFeatureTable/${matchedLine?.id}`)
      .then((response) => {        
        const result = response.data as IFeatureTable;        
        setFeatureTable(result);       
      });
  }, [setFeatureTable]);
    
  React.useEffect(() => {
    if (arrayOfProducts[0]) {
      const matchedProduct = arrayOfProducts.find((item) => {
        const defaultProduct = arrayOfProducts[0];
        const currentPath = params.product ? params.product : defaultProduct.path;
        const examinedPath = item.path;
        return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
      });
      if (matchedProduct) {
        setCurrentProduct(matchedProduct as IProduct);
      }
    }
  }, [arrayOfProducts]);
  
  React.useEffect(() => {
    if (currentProduct.id && matchedLine) {
      liftCurrentProduct([currentProduct, matchedLine]);
    }
  }, [currentProduct, matchedLine]);
    
  const catchSelect = (value: string) => {
    const selectedProductIndex = arrayOfProducts.findIndex((item) => value === item.name);
    setCurrentProduct(arrayOfProducts[selectedProductIndex]);
    liftCurrentProduct([currentProduct, matchedLine]);
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          renderPermission && (
          <div>
            <ChooseModel arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
            <ProductDescription featureTable={featureTable} isMobile />
          </div>
          )
        }
        desktop={
          renderPermission && (
          <div className="container-small">
            <ChooseModel arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
            <DecorLine prodlines={prodlines} />
            <ProductDescription featureTable={featureTable} isMobile />
          </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
