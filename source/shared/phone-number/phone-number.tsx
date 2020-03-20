import * as React from 'react';

interface PhoneNumberProps {
  place: string
}

const PhoneNumber = ({ place }: PhoneNumberProps) => {
  const className: string = `${place}_phone-number`;
  return (
    <span className={className}>8 800 000 00 00</span>
  );
};

export default PhoneNumber;
