import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import { ApiUrl } from '../../../consts/api';

// eslint-disable-next-line no-unused-vars
import { IProdLine, IProduct } from '../../../consts/interfaces-for-request';

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
    const currentPath: string = params.line ? params.line : '';
    console.log(examinedPath, 'examinedPath', currentPath, 'currentPath');
    return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
  });
  
  console.log(matchedLine, "matchedLine");
  
  const [arrayOfProducts, setArrayOfProducts] = React.useState([] as IProduct[]);
  const [renderPermission, allowRender] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState({} as IProduct);

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
    if (arrayOfProducts[0]) {
      const matchedProduct = arrayOfProducts.find((item) => {
        const currentPath = params.product ? params.product : '';
        const examinedPath = item.path;
        return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
      });
      if (matchedProduct) {
        setCurrentProduct(matchedProduct as IProduct);
      } else {
        setCurrentProduct(arrayOfProducts[0]);
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
            <ProductDescription isMobile />
          </div>
          )
        }
        desktop={
          renderPermission && (
          <div className="container-small">
            <ChooseModel arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} catchSelect={catchSelect} />
            <DecorLine prodlines={prodlines} />
            <ProductDescription isMobile={false} />
          </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
