import * as React from 'react';
import PhoneNumber from '../shared/phone-number';
import CallMeButton from '../shared/call-me-button';

const PhoneHeader = () => (
  <div className=".container-fluid bg-dark text-white text-right">
    Есть вопросы? Звоните
    <PhoneNumber />
    <CallMeButton />
  </div>
);

export default PhoneHeader;
