import * as React from 'react';
import './contact-info.scss';
import './contact-info-mobile.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import CallMeForm from '../../shared/call-me-form/call-me-form';
import CallMeFormMobile from '../../shared/call-me-form/call-me-form-mobile';
import Email from '../../shared/email/email';

interface ContactInfoProps {
  mobile: boolean
}

export default ({ mobile }: ContactInfoProps) => (
  <div className={mobile ? 'contact-info mobile' : 'contact-info desktop'}>
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
      <dd className="email">
        <Email />
      </dd>
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
    { mobile ? <CallMeFormMobile /> : <CallMeForm /> }
    
  </div>
);
