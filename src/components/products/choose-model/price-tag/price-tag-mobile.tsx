import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './price-tag-mobile.scss';
import * as buttonClassName from '../../../../consts/button-types';
import Button from '../../../shared/buttons/button';
import Dropdown from '../../../shared/dropdown/select';
import OrderForm from '../../../shared/order-form/order-form-mobile';

interface PriceTagProps {
  inStock: boolean;
  price: string;
}

export default ({ inStock, price }: PriceTagProps) => {
  const [form, switchForm] = React.useState(false);
  const stock: string = (inStock) ? 'в наличии' : 'нет в наличии';
  const stockClassName: string = (inStock) ? 'stock in-stock' : 'stock not-in-stock';
  return (
    <div className="price-tag--background">
      <div className="price-tag mobile">
        <Dropdown />
        <div className="price-and-stock">
          <span className="price">
            {price}
          </span>
          <span className={stockClassName}>
            {stock}
          </span>
        </div>
        <Button label={form ? 'Свернуть форму' : 'Оставить заявку'} className={form ? '' : buttonClassName.blueButton} clickHandler={() => switchForm(!form)} />
        <CSSTransition in={form} timeout={400} classNames="vertical-slider" unmountOnExit>
          <OrderForm />
        </CSSTransition>
      </div>
    </div>
  );
};
