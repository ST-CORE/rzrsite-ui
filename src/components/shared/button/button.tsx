import * as React from 'react';
import './button.scss';

interface ButtonProps {
  label: string,
  className?: string,
  clickHandler: any
}

export default ({ label, className, clickHandler }: ButtonProps) => (
  <button type="button" className={`default-button ${className}`} onClick={clickHandler}>
    {label}
  </button>
);
