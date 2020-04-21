/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import './order-form.scss';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

export default () => {
  const myObj = {
    category: 'Котел',
    model: 'Fit 20-784',
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: object) => console.log(data);
  
  return (
    <div className="order-form" tabIndex={-1} role="dialog">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Вы выбрали:</h3>
        <p className="model">
          <span>
            {myObj.category}
          </span>
          <span>
            {myObj.model}
          </span>
        </p>
        <p className="comment">
          Мы получим Вашу заявку на эту модель и
          <br />
          перезвоним Вам, чтобы оформить заказ.
        </p>
        <div>
          <label htmlFor="tel">Ваш номер телефона:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7-999-000-00-00" />
          {errors.tel && <span className="error">Введите номер телефона</span>}
          <ButtonSubmit label="Отправить заявку" className={buttonTypes.longCallmeButton} />
        </div>
      </form>
    </div>
  );
};
