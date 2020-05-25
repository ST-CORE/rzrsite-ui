import React from 'react';
import './price-tag.scss';
import * as buttonClassName from '../../../../../consts/button-types';
// eslint-disable-next-line no-unused-vars
import { IProduct } from '../../../../../consts/interfaces-for-request';

import Button from '../../../../shared/buttons/button';
import Dropdown from '../../../../shared/dropdown/select';
import Modal from '../../../../shared/modal/modal';
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
    <div className="price-tag desktop">
      <Dropdown
        arrayForSelect={arrayOfSelectData}
        initialOptionId={currentProduct.id}
        parentValueHandler={catchSelect}
      />
      <span className="price">
        {currentProduct.price}
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
