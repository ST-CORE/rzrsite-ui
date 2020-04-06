import React from 'react';
import './any-questions.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Email from '../../shared/email/email';
import CallMeForm from '../../shared/call-me-form/call-me-form';

export default () => (
  <div className="any-questions">
    <div className="any-question--info">
      <h2>Остались вопросы?</h2>
      <p>
        Звоните нам!
        <br />
        <PhoneNumber />
      </p>
      <p>
        Пишите
        <br />
        <Email />
      </p>
    </div>
    <div className="any-question--call-me">
      <CallMeForm />
    </div>
  </div>
);
