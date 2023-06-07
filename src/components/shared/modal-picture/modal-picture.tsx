import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './modal-picture.scss';

interface ModalProps {
    modalState: boolean,
    children: JSX.Element,
    closeModal: any,
    overlay: boolean,
    description: string,
}

export default ({
                    modalState, children, closeModal, overlay, description
                }: ModalProps) => (
    <CSSTransition in={modalState} timeout={400} classNames="popUp" unmountOnExit>
        <div className={overlay ? 'overlay-picture' : ''}>
            <div className="modal-picture">
                <div className="modal-picture-header">
                    <button type="button" className="crosshair-area" aria-label="Close" onClick={closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="title">
                        {description}
                    </div>
                </div>
                <div className="modal-picture-content">
                    {children}
                </div>
                <div className="modal-picture-footer">
                    
                </div>
            </div>
        </div>
    </CSSTransition>
);