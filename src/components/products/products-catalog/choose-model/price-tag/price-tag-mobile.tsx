import React from 'react';
import { CSSTransition } from 'react-transition-group';
// eslint-disable-next-line no-unused-vars
import { IProduct, ICategory } from '../../../../../consts/interfaces-for-request';
import { MyContext } from '../../../../shared/my-context';


import './price-tag-mobile.scss';
import * as buttonClassName from '../../../../../consts/button-types';
import Button from '../../../../shared/buttons/button';
import Dropdown from '../../../../shared/dropdown/select';
import OrderForm from '../../../../shared/order-form/order-form';

interface PriceTagProps {
  arrayOfProducts: IProduct[];
  currentProduct: IProduct;
  catchSelect: Function;
}

export default ({ arrayOfProducts, currentProduct, catchSelect }: PriceTagProps) => {
  const [form, switchForm] = React.useState(false);
  
  const stock: string = (currentProduct.inStock) ? 'в наличии' : 'нет в наличии';
  const stockClassName: string = (currentProduct.inStock) ? 'stock in-stock' : 'stock not-in-stock';
  const arrayOfSelectData = arrayOfProducts.map((item) => ({ name: item.name, id: item.id }));
  
  return (
    <div className="price-tag--background">
      <div className="price-tag mobile">
        <Dropdown
          arrayForSelect={arrayOfSelectData}
          initialOptionId={currentProduct.id}
          parentValueHandler={catchSelect}
        />
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
          <MyContext.Consumer>
            {(value: ICategory[]) => (
              <OrderForm
                categoryArray={value}
                currentProduct={currentProduct}
                isMobile
              />
            )}
          </MyContext.Consumer>
        </CSSTransition>
      </div>
    </div>
  );
};
