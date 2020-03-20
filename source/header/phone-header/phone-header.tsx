import * as React from 'react';
import PhoneNumber from '../../shared/phone-number/phone-number';
import CallMeButton from './call-me-btn/call-me-btn';
import './phone-header.scss';

interface PhoneHeaderProps {
  lightTheme: boolean
}

const PhoneHeader = ({ lightTheme }: PhoneHeaderProps) => {
  let className: string = 'phone-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  return (
    <div className={className}>
      <span>Есть вопросы? Звоните</span>
      <PhoneNumber />
      <CallMeButton />
    </div>
  );
};

export default PhoneHeader;
