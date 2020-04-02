import * as React from 'react';
import './contacts.scss';
import PhoneNumber from '../shared/phone-number/phone-number';
import CallMeForm from '../shared/call-me-form/call-me-form';
import Map from './map';

export default () => (
  <div className="contacts">
    <div className="contact-info">
      <h1>Контакты</h1>
      <ul>
        <li>
          Телефон:
          <PhoneNumber />
        </li>
        <li>
          E-mail:
          <span>info@test.ru</span>
        </li>
        <li>
          Адрес:
          <span>АДРЕС АДРЕС</span>
        </li>
      </ul>
      <CallMeForm />
    </div>
    
    <Map />
    
  </div>
);
