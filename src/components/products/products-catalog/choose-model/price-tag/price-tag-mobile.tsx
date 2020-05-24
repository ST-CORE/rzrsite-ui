import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { IProduct } from '../../../../../consts/interfaces-for-request';

import './price-tag-mobile.scss';
import * as buttonClassName from '../../../../../consts/button-types';
import Button from '../../../../shared/buttons/button';
import Dropdown from '../../../../shared/dropdown/select';
import OrderForm from '../../../../shared/order-form/order-form-mobile';

// interface PriceTagParams {
//   category?: string;
//   line?: string;
//   product?: string;
// }

interface PriceTagProps {
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
}

export default ({ arrayOfProducts, currentProduct }: PriceTagProps) => {
  const [form, switchForm] = React.useState(false);
  
  // const params = useParams() as PriceTagParams;
  // const matchedProduct = arrayOfProducts.find((item) => {
  //   const currentPath = params.product ? params.product : '';
  //   const examinedPath = item.path;
  //   return examinedPath.includes(currentPath);
  // });
  // const initialProductId = matchedProduct ? matchedProduct.id : arrayOfProducts[0].id;
  const stock: string = (currentProduct.inStock) ? 'в наличии' : 'нет в наличии';
  const stockClassName: string = (currentProduct.inStock) ? 'stock in-stock' : 'stock not-in-stock';
  const arrayOfSelectData = arrayOfProducts.map((item) => ({ name: item.name, id: item.id }));
  console.log(arrayOfSelectData);
  
  const catchSelect = (value) => {
    console.log('выбрано значение', value);
  };
  
  return (
    <div className="price-tag--background">
      <div className="price-tag mobile">
        <Dropdown arrayForSelect={arrayOfSelectData} initialOptionId={currentProduct.id} parentValueHandler={catchSelect} />
        <div className="price-and-stock">
          <span className="price">
            {currentProduct.price}
          </span>
          <span className={stockClassName}>
            {stock}
          </span>
        </div>
        <Button label={form ? 'Скрыть форму' : 'Оставить заявку'} className={form ? buttonClassName.defaultMobile : buttonClassName.blueButton} clickHandler={() => switchForm(!form)} />
        <CSSTransition in={form} timeout={400} classNames="to-bottom-slider" unmountOnExit>
          <OrderForm />
        </CSSTransition>
      </div>
    </div>
  );
};
