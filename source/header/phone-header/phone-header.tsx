import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import PhoneNumber from '../../shared/phone-number/phone-number';
import CallMeButton from './call-me-btn/call-me-btn';
import './phone-header.scss';
import Modal from '../../shared/modal/modal';
import CallMeForm from '../../shared/call-me-form/call-me-form';

interface PhoneHeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: PhoneHeaderProps) => {
  const [modal, toggleModal] = React.useState(false);
  const switchModal = () => toggleModal(!modal);
  
  let className: string = 'phone-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  return (
    <div className={className}>
      <span>Есть вопросы? Звоните</span>
      <PhoneNumber />
      <CallMeButton clickHandler={switchModal} />
      
      <CSSTransition in={modal} timeout={{ enter: 400, exit: 150 }} classNames="popUp" unmountOnExit>
        <Modal closeModal={switchModal}>
          <CallMeForm />
        </Modal>
      </CSSTransition>
      
    </div>
  );
};
