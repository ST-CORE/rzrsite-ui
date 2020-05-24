import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import ApiUrl from '../../../consts/api';

// eslint-disable-next-line no-unused-vars
import { IProdLine, IProduct, productLoading } from '../../../consts/interfaces-for-request';

// import DecorLine from '../products-catalog/decor-line/decor-line';
import ChooseModel from './choose-model/choose-model';
// import ProductDescription from './product-description/product-description';

interface ProductCatalogProps {
  prodlines: IProdLine[];
}

interface IProdlineParams {
  category?: string;
  line?: string;
  product?: string;
}

export default ({ prodlines }: ProductCatalogProps) => {
  const params: IProdlineParams = useParams();
  const matchedLine = prodlines.find((item: IProdLine) => {
    const examinedPath = item.path;
    const currentPath: string = params.line ? params.line : '';
    return examinedPath.includes(currentPath);
  });
  
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
    if (arrayOfProducts) {
      const matchedProduct = arrayOfProducts.find((item) => {
        const currentPath = params.product ? params.product : '';
        const examinedPath = item.path;
        return examinedPath.includes(currentPath);
      });
      if (matchedProduct) {
        setCurrentProduct(matchedProduct as IProduct);
      } else {
        setCurrentProduct(arrayOfProducts[0]);
      }
    }
  }, [arrayOfProducts]);
    
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          renderPermission && (
          <div>
            <ChooseModel arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} />
            {/* <ProductDescription isMobile /> */}
          </div>
          )
        }
        desktop={
          renderPermission && (
          <div className="container-small">
            <ChooseModel arrayOfProducts={arrayOfProducts} currentProduct={currentProduct} />
            {/* <DecorLine />
            <ProductDescription isMobile={false} /> */}
          </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
