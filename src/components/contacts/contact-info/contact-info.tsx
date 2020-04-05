import * as React from 'react';
import './contact-info.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import CallMeForm from '../../shared/call-me-form/call-me-form';

export default () => (
  <div className="contact-info">
    <div className="some-space" />
    <h1>Контакты</h1>
    <dl>
      <dt>
        Телефон:
      </dt>
      <dd>
        <PhoneNumber />
      </dd>
    </dl>
    <dl>
      <dt>
        E-mail:
      </dt>
      <dd className="email">Rezer@mail.ru</dd>
    </dl>
    <dl>
      <dt>
        Адрес:
      </dt>
      <dd className="address">
        Красноярск, п. Березовка,
        <br />
        ул. Щорса 8/14
      </dd>
    </dl>
      
    <CallMeForm />
  </div>
);
