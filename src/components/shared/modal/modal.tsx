import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './modal.scss';

interface ModalProps {
  modalState: boolean,
  children: JSX.Element,
  closeModal: any,
  overlay: boolean
}

export default ({
  modalState, children, closeModal, overlay,
}: ModalProps) => (
  <CSSTransition in={modalState} timeout={{ enter: 400, exit: 150 }} classNames="popUp" unmountOnExit>
    <div className={overlay ? 'overlay' : ''}>
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
    </div>
  </CSSTransition>

);
