/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import './call-me-form.scss';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: object) => console.log(data);
  
  return (
    <div className="call-me-form" tabIndex={-1} role="dialog">
      <form name="callMeForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>
          Вам позвонить?
        </h2>
        <span>Оставьте свой номер и мы сами вам позвоним</span>
        <div>
          <label htmlFor="tel">Телефон:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7-999-000-00-00" />
          {errors.tel && <span className="error">Введите номер телефона</span>}
          <ButtonSubmit label="Позвоните мне!" className={buttonTypes.longCallmeButton} />
        </div>
      </form>
    </div>
  );
};
