import * as React from 'react';
// import Modal from './modal';
import Button from '../button/button';


interface ModalProps {
  label: string,
  buttonClassName?: string,
  children: JSX.Element
}

export default ({ children, label, buttonClassName }: ModalProps) => {
  const [showModal, setState] = React.useState(false);
  const clickHandler = () => {
    console.log(`first ${showModal}`);
    setState(!showModal);
    console.log(`second ${showModal}`);
  };
  
  const Modal: JSX.Element = (
    <div>
      <div className="modal">
        <button type="button" className="close" aria-label="Close" onClick={clickHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
                
        <div className="modal-content">
          {children}
        </div>
      </div>
      <Button label={label} buttonClassName={buttonClassName} clickHandler={clickHandler} />
    </div>
  );
  
  const onlyButton: JSX.Element = (
    <Button label={label} buttonClassName={buttonClassName} clickHandler={clickHandler} />
  );
  
  if (showModal) {
    return Modal;
  } else if (showModal === false){
    return onlyButton;
  }
};
