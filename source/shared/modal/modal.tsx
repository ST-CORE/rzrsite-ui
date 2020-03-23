import * as React from 'react';

interface ModalProps {
  children: JSX.Element,
  showModal: number
}

export default ({ children, showModal }: ModalProps) : (JSX.Element | null) => {
  const [show, setShow] = React.useState(showModal);
  console.log(`before handle ${show}`);
  
  
  const clickHandler = () => {
    console.log(`after handle ${show}`);
    setShow(90);
  };
    
  let result: (JSX.Element | null);
  if (show) {
    result = (
      <div className="modal">
        <button type="button" className="close" aria-label="Close" onClick={clickHandler}>
          <span aria-hidden="true">&times;</span>
        </button>
                
        <div className="modal-content">
          {children}
        </div>
        
      </div>
    );
  } else result = null;
  return result;
};
