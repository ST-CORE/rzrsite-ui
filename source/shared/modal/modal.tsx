import * as React from 'react';
import Button from '../button/button';
import './modal.scss';


interface ModalProps {
  buttonLabel: string,
  buttonClassName?: string,
  children: JSX.Element
}

export default ({ buttonLabel, buttonClassName, children }: ModalProps) => {
  const [showModal, setState] = React.useState(false);
  const clickHandler = () => setState(!showModal);
  
  if (showModal) {
    return (
      <div>
        <div className="modal">
          <button type="button" className="close" aria-label="Close" onClick={clickHandler}>
            <span aria-hidden="true">&times;</span>
          </button>
                  
          <div className="modal-content">
            {children}
          </div>
        </div>
        <Button label={buttonLabel} buttonClassName={buttonClassName} clickHandler={clickHandler} />
      </div>
    );
  }
  
  return (
    <Button label={buttonLabel} buttonClassName={buttonClassName} clickHandler={clickHandler} />
  );
};
