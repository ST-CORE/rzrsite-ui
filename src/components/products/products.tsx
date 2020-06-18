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
  
  const { path, url } = useRouteMatch();
  const redirectCategoryPath = (params.category === 'boilers') ? 'boilers/Fit-20-50' : 'crushers/DC-2';

  const liftCurrentProduct = (currentProdAndLine: [IProduct, IProdLine]) => {
    liftCurrentProductAndPath([...currentProdAndLine, url]);
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          renderPermission && (
          <div className="products mobile">
            <ProductsNavMobile
              parentUrl={url}
              prodlines={extendedCategory.productLines}
              categories={categories}
            />
            <Switch>
              <Route exact path={url}>
                <Redirect to={`/products/${redirectCategoryPath}`} />
              </Route>
              <Route path={[`${path}:line/:product`, `${path}:line`]}>
                <ProductsCatalog prodlines={extendedCategory.productLines} liftCurrentProduct={liftCurrentProduct} />
              </Route>
            </Switch>
          </div>
          )
        }
        desktop={
          renderPermission && (
          <div className="products desktop">
            <ProductsNav
              parentUrl={url}
              extendedCategory={extendedCategory}
            />
            <Switch>
              <Route exact path={path}>
                <Redirect to={`/products/${redirectCategoryPath}`} />
              </Route>
              <Route path={[`${path}:line/:product`, `${path}:line`]}>
                <ProductsCatalog prodlines={extendedCategory.productLines} liftCurrentProduct={liftCurrentProduct} />
              </Route>
            </Switch>
          </div>
          )
        }
      />
    </ProvideMediaMatchers>
  );
};
