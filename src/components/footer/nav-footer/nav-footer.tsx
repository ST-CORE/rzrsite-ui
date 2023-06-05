import * as React from 'react';
import './nav-footer.scss';
import FooterMenu from './footer-menu/footer-menu';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Button from '../../shared/buttons/button';
import Modal from '../../shared/modal/modal';
import CallMeForm from '../../shared/call-me-form/call-me-form';

export default () => {
  const [modalState, toggleModal] = React.useState(false);
  const switchModal = () => toggleModal(!modalState);
  
  return (
    <div className="nav-footer desktop">
      <div className="container-small">
        <FooterMenu />
        <div className="contact-block">
          <PhoneNumber />
          <Button label="Заказать звонок!" clickHandler={switchModal} />
          
          <Modal overlay={true} modalState={modalState} closeModal={switchModal}>
            <CallMeForm isMobile={false} />
          </Modal>
          
        </div>
      </div>
    </div>
  );
};
