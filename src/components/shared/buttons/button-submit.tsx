import * as React from 'react';
import './button.scss';
import './button--mobile.scss';


interface ButtonSubmitProps {
  label: string,
  className?: string,
}

export default ({ label, className }: ButtonSubmitProps) => {
  let buttonClassName: string = 'default-button';
  if (className) {
    buttonClassName = className;
  }
  return (
    <button type="submit" className={buttonClassName}>
      {label}
    </button>
  );
};
