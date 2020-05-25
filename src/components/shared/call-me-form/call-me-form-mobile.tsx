/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './call-me-form-mobile.scss';
import address from '../../../consts/api';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

export default () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (inputData: object) => {
    console.log(inputData);
    
    const data = {
      Template: 'CallMe',
      Variables: {
        Phone: inputData.tel,
      },
    };
    console.log(data);

    axios.post(`${address}/api/Email`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };
  
  return (
    <div className="call-me-form--background">
      <form
        name="callMeForm"
        className="call-me-form mobile"
        tabIndex={-1}
        role="dialog"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>
          Вам позвонить?
        </h2>
        <span>Оставьте свой номер и мы сами вам позвоним:</span>
        <div>
          <label htmlFor="tel">Телефон:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7 (999) 000 00 00" />
          <ButtonSubmit label="Позвоните мне!" className={buttonTypes.longCallmeButton} />
        </div>
      </form>
    </div>
  );
};
