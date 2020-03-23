import * as React from 'react';
import './call-me-form.scss';

export default () => (
  <div className="call-me-form" tabIndex={-1} role="dialog">

    <form action="" method="" name="callMeForm">
      <fieldset>
        <legend>Как с вами связаться?</legend>
        <label htmlFor="name">
          Имя:
          <input type="text" id="name" name="name" required />
        </label>
        <label htmlFor="tel">
          Телефон:
          <input type="tel" id="tel" name="tel" required />
        </label>
        <button type="button">
          Позвоните мне
        </button>
      </fieldset>
    </form>
  </div>
);
