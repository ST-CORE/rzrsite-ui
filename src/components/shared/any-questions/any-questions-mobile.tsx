import React from 'react';
import './any-questions-mobile.scss';
import PhoneNumber from '../phone-number/phone-number';
import Email from '../email/email';
import CallMeForm from '../call-me-form/call-me-form';

export default () => (
  <div className="any-questions mobile">
    <h2>Остались вопросы?</h2>
    <div className="any-question--call-me">
      <CallMeForm isMobile />
    </div>
    <div className="any-question--info">
      <p>
        Позвоните нам
        <br />
        <PhoneNumber />
      </p>
      <p>
        Пишите
        <br />
        <Email />
      </p>
    </div>
  </div>
);
