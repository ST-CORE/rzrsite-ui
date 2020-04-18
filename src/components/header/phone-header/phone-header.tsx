import * as React from 'react';
import PhoneNumber from '../../shared/phone-number/phone-number';
import CallMeButton from './call-me-btn/call-me-btn';
import './phone-header.scss';
import Modal from '../../shared/modal/modal';
import CallMeForm from '../../shared/call-me-form/call-me-form';

interface PhoneHeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: PhoneHeaderProps) => {
  const [modalState, toggleModal] = React.useState(false);
  const switchModal = () => toggleModal(!modalState);
  
  let className: string = 'phone-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  return (
    <div className={className}>
      <div className="container-big">
        <span>Есть вопросы? Звоните</span>
        <PhoneNumber />
        <CallMeButton clickHandler={switchModal} />
        
        <Modal overlay={false} modalState={modalState} closeModal={switchModal}>
          <CallMeForm />
        </Modal>
        
      </div>
    </div>
  );
};
