import React from 'react';
import './price-tag.scss';
import * as buttonClassName from '../../../../consts/button-types';

import Button from '../../../shared/buttons/button';
import Dropdown from '../../../shared/dropdown/select';
import Modal from '../../../shared/modal/modal';
import OrderForm from '../../../shared/order-form/order-form';

interface PriceTagProps {
  inStock: boolean;
  price: string;
}

export default ({ inStock, price }: PriceTagProps) => {
  const [form, switchForm] = React.useState(false);
  const stock: string = (inStock) ? 'в наличии' : 'нет в наличии';
  const stockClassName: string = (inStock) ? 'stock in-stock' : 'stock not-in-stock';
  return (
    <div className="price-tag">
      <Dropdown />
      <span className="price">
        {price}
      </span>
      <span className={stockClassName}>
        {stock}
      </span>
      <Button label="Оставить заявку" className={buttonClassName.blueButton} clickHandler={() => switchForm(true)} />
      <Modal modalState={form} closeModal={() => switchForm(false)} overlay>
        <OrderForm />
      </Modal>
    </div>
  );
};
