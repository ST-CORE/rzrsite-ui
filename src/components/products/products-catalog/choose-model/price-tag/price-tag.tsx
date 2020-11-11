import React from 'react';
import './price-tag.scss';
import * as buttonClassName from '../../../../../consts/button-types';
// eslint-disable-next-line no-unused-vars
import { IProduct, ICategory } from '../../../../../consts/interfaces-for-request';
import { CategoryContext } from '../../../../shared/category-context';


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
  const inStock: string = (currentProduct.inStock) ? 'в наличии' : 'нет в наличии';
  const inStockClassName: string = (currentProduct.inStock) ? 'in-stock is-in-stock' : 'in-stock not-in-stock'; 
  const arrayOfSelectData = arrayOfProducts != null ? arrayOfProducts.map((item) => ({ name: item.name, id: item.id })): [];
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
      <span className={inStockClassName}>
        {inStock}
      </span>
      <Button label="Оставить заявку" className={buttonClassName.blueButton} clickHandler={() => switchForm(true)} />
      <Modal modalState={form} closeModal={() => switchForm(false)} overlay>
        <CategoryContext.Consumer>
          {(value: ICategory[]) => (
            <OrderForm
              categoryArray={value}
              currentProduct={currentProduct}
              isMobile={false}
            />
          )}
        </CategoryContext.Consumer>
      </Modal>
    </div>
  );
};
