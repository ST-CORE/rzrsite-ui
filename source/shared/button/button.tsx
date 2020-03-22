import * as React from 'react';
import './button.scss';

interface ButtonProps {
  label: string,
  buttonClassName?: string,
  clickHandler: any
}

export default ({ label, buttonClassName, clickHandler }: ButtonProps) => (
  <button type="button" className={`default-button ${buttonClassName}`} onClick={clickHandler}>
    {label}
  </button>
);
