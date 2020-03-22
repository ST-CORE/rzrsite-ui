import * as React from 'react';
import './button.scss';

interface ButtonProps {
  buttonText: string,
  buttonClassName?: string,
  clickHandler: any
}

export default ({ buttonText, buttonClassName, clickHandler }: ButtonProps) => (
  <button type="button" className={`default-button ${buttonClassName}`} onClick={clickHandler}>
    {buttonText}
  </button>
);
