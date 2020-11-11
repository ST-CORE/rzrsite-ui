/* eslint-disable max-len */
import React from 'react';
import {
  useParams, useRouteMatch, Route, Switch, Redirect,
} from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './products.scss';
import axios from 'axios';
import { ApiUrl } from '../../consts/api';
// eslint-disable-next-line no-unused-vars
import { ICategory, IExtendedCategory, IProduct, IProdLine } from '../../consts/interfaces-for-request';

import ProductsNav from './products-nav/products-nav';
import ProductsNavMobile from './products-nav/products-nav-mobile';
import ProductsCatalog from './products-catalog/products-catalog';

interface ProductsProps {
  categories: ICategory[];
  liftCurrentProductAndPath: Function;
}

interface IProductParams {
  category?: string;
  line?: string;
  product?: string;
}

export default ({ categories, liftCurrentProductAndPath }: ProductsProps) => {  

  const params: IProductParams = useParams();
  const matchedCategory = categories.find((item) => {
    const examinedPath = item.path;
    const currentPath: string = params.category ? params.category : '';
    return examinedPath.includes(currentPath);
  });
  
  const [extendedCategory, changeExtendedCategory] = React.useState({} as IExtendedCategory);
  const [renderPermission, allowRender] = React.useState(false);

  React.useEffect(() => {
    allowRender(false);
    if (matchedCategory) {
      axios.get(`${ApiUrl}/category/${matchedCategory.id}`)
        .then((response) => {
          const result = response.data as IExtendedCategory;
          changeExtendedCategory(result);
          allowRender(true);
        });
    }
  }, [matchedCategory]);
     
  const liftCurrentProduct = (currentProdAndLine: [IProduct, IProdLine]) => {
    liftCurrentProductAndPath([...currentProdAndLine, extendedCategory]);
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          renderPermission && (
          <div className="products mobile">
            <ProductsNavMobile
              parentUrl={`/products/${params.category}`}
              prodlines={extendedCategory.productLines}
              categories={categories}
            />
            <ProductsCatalog prodlines={extendedCategory.productLines} liftCurrentProduct={liftCurrentProduct} />
          </div>
          )
        }
        desktop={
          renderPermission && (
          <div className="products desktop">
            <ProductsNav
              parentUrl={`/products/${params.category}`}
              extendedCategory={extendedCategory}
            />
            <ProductsCatalog prodlines={extendedCategory.productLines} liftCurrentProduct={liftCurrentProduct} />
          </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
