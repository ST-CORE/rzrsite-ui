import React from 'react';
import './order-form.scss';
import Button from '../button/button';
import * as buttonTypes from '../../../consts/button-types';

export default () => {
  const myObj = {
    category: 'Котел',
    model: 'Fit 20-784',
  };
  
  return (
    <div className="order-form" tabIndex={-1} role="dialog">
      <form action="" method="" name="orderForm">
        <fieldset>
          <legend>Отправить заявку</legend>
          <h3>Вы выбрали:</h3>
          <p>
            <span>
              {myObj.category}
            </span>
            <span>
              {myObj.model}
            </span>
          </p>
          <p>
            Мы получим Вашу заявку на эту модель и
            <br />
            перезвоним Вам, чтобы оформить заказ.
          </p>
          <div>
            <label htmlFor="tel">Ваш номер телефона:</label>
            <input type="tel" id="tel" name="tel" required placeholder="+7-999-000-00-00" />
            <Button label="Отправить заявку" className={buttonTypes.longCallmeButton} clickHandler="" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
