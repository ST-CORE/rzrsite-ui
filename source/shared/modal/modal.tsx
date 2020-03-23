import * as React from 'react';
import './modal.scss';

interface ModalProps {
  children: JSX.Element,
  closeModal: any
}

export default ({ children, closeModal }: ModalProps) => (
  <div className="modal">
    <div className="modal-header">
      <button type="button" className="close" aria-label="Close" onClick={closeModal}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
            
    <div className="modal-content">
      {children}
    </div>
  </div>
);
