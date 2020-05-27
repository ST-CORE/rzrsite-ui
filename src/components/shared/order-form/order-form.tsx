/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { getOrderData, ICategory, IProduct } from '../../../consts/interfaces-for-request';

import './order-form-mobile.scss';
import './order-form.scss';
import { ApiUrl } from '../../../consts/api';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

interface OrderFormMobileProps {
  isMobile: boolean;
  categoryArray: ICategory[];
  currentProduct: IProduct;
}

interface OrderFormParams {
  category: string;
  line: string;
  product: string;
}

export default ({ categoryArray, currentProduct, isMobile }: OrderFormMobileProps) => {
  const params = useParams() as OrderFormParams;
  const matchedCategoryIndex = categoryArray.findIndex((item: ICategory) => item.path.includes(params.category));
  
  const initialDataObj = {
    category: categoryArray[matchedCategoryIndex].name,
    model: currentProduct.name,
  };
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = handleSubmit(({ tel }) => {
    const data = getOrderData(tel, initialDataObj.category, initialDataObj.model);
    console.log(data);
    console.log(tel);

    axios.post(`${ApiUrl}/Email`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  });
  
  return (
    <div className={isMobile ? 'order-form mobile' : 'order-form desktop'} tabIndex={-1} role="dialog">
      <form onSubmit={onSubmit}>
        <h3>Вы выбрали:</h3>
        <p className="model">
          <span>
            Модель
            {' '}
            {initialDataObj.model}
          </span>
          <span>
            (
            {initialDataObj.category}
            )
          </span>
        </p>
        {isMobile
          ? (
            <p className="comment">
              Мы получим Вашу заявку на эту модель и перезвоним Вам, чтобы оформить заказ.
            </p>
          ) : (
            <p className="comment">
              Мы получим Вашу заявку на эту модель и
              <br />
              перезвоним Вам, чтобы оформить заказ.
            </p>
          )}
        <div className={isMobile ? 'input-and-button' : ''}>
          <label htmlFor="tel">Ваш номер телефона:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7 (999) 000 00 00" />
          <ButtonSubmit label="Позвоните мне!" className={buttonTypes.longCallmeButton} />
          {errors.tel && <p className="error">Введите номер телефона</p>}
        </div>
      </form>
    </div>
  );
};
