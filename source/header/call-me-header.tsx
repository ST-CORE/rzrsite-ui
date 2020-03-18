import * as React from 'react';
import TelNumber from '../shared/tel-number';
import CallMeButton from '../shared/call-me-button';

function SmallHeader() {
  return (
    <div className=".container-fluid bg-dark text-white text-right">
      Есть вопросы? Звоните
      <TelNumber />
      <CallMeButton />
    </div>
  );
}

export default SmallHeader;
