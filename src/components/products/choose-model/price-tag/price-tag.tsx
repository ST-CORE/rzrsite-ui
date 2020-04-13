import React from 'react';
import './price-tag.scss';
import * as buttonClassName from '../../../../consts/button-types';

import Button from '../../../shared/button/button';
import Dropdown from '../../../shared/dropdown/dropdown';

interface PriceTagProps {
  inStock: boolean;
  price: string;
}

export default ({ inStock, price }: PriceTagProps) => {
  const openForm = () => {};
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
      <Button label="Оставить заявку" className={buttonClassName.blueButton} clickHandler={openForm} />
    </div>
  );
};
