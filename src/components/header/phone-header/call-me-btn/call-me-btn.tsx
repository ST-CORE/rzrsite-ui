import * as React from 'react';

interface CallMeBtnProps {
  clickHandler: any;
}

export default ({ clickHandler }: CallMeBtnProps) => (
  <button type="button" className="blue-square-button" onClick={clickHandler}>
    Позвоните мне!
  </button>
);
