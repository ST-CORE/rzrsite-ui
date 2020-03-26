import * as React from 'react';
import './call-me-form.scss';
import Button from '../button/button';
import * as buttonTypes from '../../../consts/button-types';

export default () => (
  <div className="call-me-form" tabIndex={-1} role="dialog">
    <form action="" method="" name="callMeForm">
      <fieldset>
        <legend>
          Вам позвонить?
        </legend>
        <span>Оставьте своё имя и номер, и мы сами вам позвоним.</span>
        <div className="center">
          <label htmlFor="name"> Имя: </label>
          <input type="text" id="name" name="name" placeholder="Имя" />
          <label htmlFor="tel">Телефон:</label>
          <input type="tel" id="tel" name="tel" required placeholder="+7-999-000-00-00" />
          <Button label="Позвоните мне!" className={buttonTypes.longCallmeButton} clickHandler="" />
        </div>
      </fieldset>
    </form>
  </div>
);
