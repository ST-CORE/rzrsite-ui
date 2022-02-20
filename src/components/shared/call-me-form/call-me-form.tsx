/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getCallMeData } from '../../../consts/interfaces-for-request';
import './call-me-form.scss';
import './call-me-form-mobile.scss';
import { ApiUrl } from '../../../consts/api';
import ButtonSubmit from '../buttons/button-submit';
import * as buttonTypes from '../../../consts/button-types';

interface CallMeFormProps {
  isMobile: boolean;
}

export default ({ isMobile }: CallMeFormProps) => {
  const formAttribute = isMobile ? { tabIndex: -1, role: 'dialog', className: 'call-me-form mobile' }: {};
  const attributeParent = isMobile ? {} : { tabIndex: -1, role: 'dialog' };
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = handleSubmit(({ tel }) => {
    const data = getCallMeData(tel);
    //console.log(data);

    axios.post(`${ApiUrl}/Email`, data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  });
  
  return (
    <div className={isMobile ? 'call-me-form--background': 'call-me-form desktop'} {...attributeParent}>
      <form name="callMeForm" onSubmit={onSubmit} {...formAttribute}>
        <h2>
          Вам позвонить?
        </h2>
        <span>Оставьте свой номер и мы сами вам позвоним</span>
        <div>
          <label htmlFor="tel">Телефон:</label>
          <input type="tel" id="tel" name="tel" ref={register({ required: true })} placeholder="+7 (999) 000 00 00" />
          <ButtonSubmit label="Позвоните мне!" className={buttonTypes.longCallmeButton} />
          {errors.tel && <p className="error">Введите номер телефона</p>}
        </div>
      </form>
    </div>
  );
};
