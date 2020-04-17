import * as React from 'react';
import './call-me-btn.scss';

interface CallMeBtnProps {
  clickHandler: any;
}

export default ({ clickHandler }: CallMeBtnProps) => (
  <button type="button" className="blue-square-button" onClick={clickHandler}>
    Позвоните мне!
  </button>
);
