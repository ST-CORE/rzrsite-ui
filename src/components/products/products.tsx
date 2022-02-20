/* eslint-disable max-len */
import React from 'react';
import {
  useParams
} from 'react-router-dom';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './products.scss';
import axios from 'axios';
import { ApiUrl } from '../../consts/api';
// eslint-disable-next-line no-unused-vars
import { ICategory, IExtendedCategory, IProduct, IProdLine, IFeatureTable, IProductLineDocument } from '../../consts/interfaces-for-request';

import ProductsNav from './products-nav/products-nav';
import ProductsNavMobile from './products-nav/products-nav-mobile';
import ProductsCatalog from './products-catalog/products-catalog';
import LoadingFallback from '../shared/loading-fallback/loading-fallback';

interface ProductsProps {
  categories: ICategory[];
  history: any;
}

interface IProductParams {
  category?: string;
  line?: string;
  product?: string;
}

export default ({ categories, history }: ProductsProps) => {  
  //console.log('Loading products element...')
  const params: IProductParams = useParams();
  const [extendedCategory, setExtendedCategory] = React.useState({} as IExtendedCategory);
  const [currentProdLine, setCurrentProdLine] = React.useState({} as IProdLine);
  const [arrayOfProducts, setArrayOfProducts] = React.useState([] as IProduct[])
  const [featureTable, setFeatureTable] = React.useState({} as IFeatureTable)
  const [documents, setDocuments] = React.useState([] as IProductLineDocument[])
  const [currentProduct, setCurrentProduct] = React.useState({} as IProduct);
  const [renderPermission, allowRender] = React.useState(false);

  const _currentCategory = categories.find((item) => {
    const examinedPath = item.path;
    const defaultCategory = categories[0];
    const currentPath: string = params.category ? params.category : defaultCategory.path;
    
    return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
  }) as ICategory;

  const getCurrentProdLine = (prodLines: IProdLine[]) => { 
    return prodLines.find((item: IProdLine) => {
      const examinedPath = item.path;
      const defaultLine = prodLines[0];
      const currentPath: string = params.line ? params.line : defaultLine.path;    
      
      return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
    }) as IProdLine;
  };

  const getCurrentProduct = (products: IProduct[]) => {
    return products.find((item: IProduct) => {
      const examinedPath = item.path;
      const defaultProduct = products[0];
      const currentPath: string = params.product ? params.product : defaultProduct.path;

      return examinedPath.toLowerCase().includes(currentPath.toLowerCase());
    }) as IProduct;
  };

  const productSelectCallback = (selectedProduct: IProduct) => {
    //console.log('callback received');
    setCurrentProduct(selectedProduct);
    history.push('/products'+_currentCategory.path+currentProdLine.path +selectedProduct.path);
  };

  const loadCategory = (matchedCategory: ICategory) => {
    //console.log('loading categories...');
    allowRender(false);
    axios.get(`${ApiUrl}/category/${matchedCategory.id}`)
        .then((response) => {
          let _currentCategory = response.data as IExtendedCategory;
          setExtendedCategory(_currentCategory);
          setCurrentProdLine(getCurrentProdLine(_currentCategory.productLines));
        })
  }

  const loadData = () => {
      //console.log('loading product data...')
      let apiEndpoints = [
        `${ApiUrl}/category/${currentProdLine?.categoryId}/productLine/${currentProdLine?.id}/product`,
        `${ApiUrl}/category/${currentProdLine?.categoryId}/getFeatureTable/${currentProdLine?.id}`,
        `${ApiUrl}/document/product-line/${currentProdLine?.id}`
      ] 
      
      axios.all(apiEndpoints.map((endpoint:string) => axios.get(endpoint)))
      .then(
        axios.spread(({data: productsResponse}, {data: featuresResponse}, {data: documentsResponse}) => {
          setArrayOfProducts(productsResponse as IProduct[]);
          setFeatureTable(featuresResponse as IFeatureTable);
          setDocuments(documentsResponse as IProductLineDocument[]);

          if (productsResponse[0]) {      
            let _currentProduct = getCurrentProduct(productsResponse);
            if (_currentProduct?.id != currentProduct?.id || !params?.product?.length) {
              setCurrentProduct(_currentProduct);
              history.push('/products'+_currentCategory.path+currentProdLine.path+_currentProduct.path);
            }
          }
        })
      )
      .then(() => {
        allowRender(true);
      });
  }

  React.useEffect(() => {
    if (_currentCategory?.id) {
        loadCategory(_currentCategory as ICategory)
      }
    },[_currentCategory]);

  React.useEffect(() => {
    if(currentProdLine?.id)
    {
      loadData();
    }
  }, [currentProdLine])

  React.useEffect(() => {
    if(extendedCategory?.productLines)
    {
      let _currentProdLine = getCurrentProdLine(extendedCategory.productLines);
      setCurrentProdLine(_currentProdLine);
    }
  }, [params.line])
    
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={
          <LoadingFallback isDataLoaded={renderPermission}>
            <div key={'products-mobile-content'} className="products mobile">
              <ProductsNavMobile
                parentUrl={`/products/${params.category}`}
                prodLines={extendedCategory.productLines}
                selectedLine={currentProdLine}
                categories={categories}
              />
              <ProductsCatalog prodLines={extendedCategory.productLines} 
                               documentDownloadUrl={currentProdLine.featuresPDFPath}
                               featureTable={featureTable} 
                               arrayOfProducts={arrayOfProducts} 
                               currentProduct={currentProduct} 
                               currentProdLine={currentProdLine} 
                               documents={documents}
                               productSelectCallback={productSelectCallback} />
            </div>
          </LoadingFallback>
        }
        desktop={
          <LoadingFallback isDataLoaded={renderPermission}>
            <div key={'products-desktop-content'} className="products desktop">
              <ProductsNav
                parentUrl={`/products/${params.category}`}
                currentProdLine={currentProdLine}
                extendedCategory={extendedCategory}
              />
              <ProductsCatalog  prodLines={extendedCategory.productLines}
                                featureTable={featureTable} 
                                documentDownloadUrl={currentProdLine.featuresPDFPath}
                                arrayOfProducts={arrayOfProducts} 
                                currentProduct={currentProduct} 
                                currentProdLine={currentProdLine} 
                                documents={documents} 
                                productSelectCallback={productSelectCallback} />
            </div>
          </LoadingFallback>
        }
      />
    </ProvideMediaMatchers>
  );
};
