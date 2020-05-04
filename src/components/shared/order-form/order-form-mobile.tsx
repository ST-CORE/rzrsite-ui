/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './order-form-mobile.scss';
import address from '../../../consts/api';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

export default () => {
  const myObj = {
    category: 'Котел',
    model: 'Fit 20-784',
  };
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (inputData: object) => {
    console.log(inputData);
    
    const data = {
      Template: 'AskForDetails',
      Variables: {
        Phone: inputData.tel,
        Category: myObj.category,
        Model: myObj.model,
      },
    };
    console.log(data);

    axios.post(`${address}/api/Email`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };
  
  return (
    <div className="order-form mobile" tabIndex={-1} role="dialog">
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
          Мы получим Вашу заявку на эту модель и перезвоним Вам, чтобы оформить заказ.
        </p>
        <div className="input-and-button">
          <label htmlFor="tel">Ваш номер телефона:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7 (999) 000 00 00" />
          <ButtonSubmit label="Позвоните мне!" className={buttonTypes.longCallmeButton} />
          {errors.tel && <p className="error">Введите номер телефона</p>}
        </div>
      </form>
    </div>
  );
};
