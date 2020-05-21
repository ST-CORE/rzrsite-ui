import React from 'react';
import { useParams, useRouteMatch, Route } from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './products.scss';
import axios from 'axios';
import ApiUrl from '../../consts/api';
// eslint-disable-next-line no-unused-vars
import { ICategory, IExtendedCategory, IProdLine } from '../../consts/for-categories-request';

import ProductsNav from './products-nav/products-nav';
import ProductsNavMobile from './products-nav/products-nav-mobile';
import ChooseModel from './choose-model/choose-model';
import DecorLine from './decor-line/decor-line';
import ProductDescription from './product-description/product-description';
import ProductDescriptionMobile from './product-description/product-description-mobile';

interface ProductsProps {
  categories: ICategory[];
}

interface ICategoryParams {
  category?: string;
}

export default ({ categories }: ProductsProps) => {
  const categoryParams: ICategoryParams = useParams();
  const matchedCategory = categories.find((item) => {
    const examinedPath = item.path;
    const currentPath: string = categoryParams.category ? categoryParams.category : '';
    return examinedPath.includes(currentPath);
  });
  
  const [prodlines, changeProdlines] = React.useState([] as IProdLine[]);

  React.useEffect(() => {
    if (matchedCategory) {
      axios.get(`${ApiUrl}/category/${matchedCategory.id}`)
        .then((response) => {
          const result = response.data as IExtendedCategory;
          const arrayOfProdlines = result.productLines;
          changeProdlines(arrayOfProdlines);
        });
    }
  }, [matchedCategory]);
  
  const { path, url } = useRouteMatch();
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
        (
          <div className="products mobile">
            <ProductsNavMobile parentUrl={url} prodlines={prodlines} categories={categories} />
            <Route path={`${path}/:line`}>
              <div>
                <ChooseModel />
                <ProductDescriptionMobile />
              </div>
            </Route>
          </div>
        )
      }
        desktop={
        (
          <div className="products desktop">
            <ProductsNav />
            <div className="container-small">
              <ChooseModel />
              <DecorLine />
              <ProductDescription />
            </div>
          </div>
        )
      }
      />
    </ProvideMediaMatchers>
  );
};
