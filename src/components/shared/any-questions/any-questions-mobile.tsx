import React from 'react';
import './any-questions-mobile.scss';
import PhoneNumberMobile from '../phone-number/phone-number-mobile';
import EmailMobile from '../email/email-mobile';
import CallMeFormMobile from '../call-me-form/call-me-form-mobile';

export default () => (
  <div className="any-questions mobile">
    <h2>Остались вопросы?</h2>
    <div className="any-question--call-me">
      <CallMeFormMobile />
    </div>
    <div className="any-question--info">
      <p>
        Позвоните нам
        <br />
        <PhoneNumberMobile />
      </p>
      <p>
        Пишите
        <br />
        <EmailMobile />
      </p>
    </div>
  </div>
);
