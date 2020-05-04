import * as React from 'react';
import './button.scss';
import './button--mobile.scss';

interface ButtonProps {
  label: string,
  className?: string,
  clickHandler: any
}

export default ({ label, className, clickHandler }: ButtonProps) => {
  let buttonClassName: string = 'default-button';
  if (className) {
    buttonClassName = className;
  }
  return (
    <button type="button" className={buttonClassName} onClick={clickHandler}>
      {label}
    </button>
  );
};
