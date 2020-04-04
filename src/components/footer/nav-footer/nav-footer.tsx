import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-footer.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Button from '../../shared/button/button';
import Modal from '../../shared/modal/modal';
import CallMeForm from '../../shared/call-me-form/call-me-form';

export default () => {
  const [modalState, toggleModal] = React.useState(false);
  const switchModal = () => toggleModal(!modalState);
  
  return (
    <div className="nav-footer">
      <div className="container-small">
        <div className="contact-block">
          <PhoneNumber />
          <Button label="Заказать звонок!" clickHandler={switchModal} />
          
          <Modal modalState={modalState} closeModal={switchModal}>
            <CallMeForm />
          </Modal>
          
        </div>
        <div className="menu">
          <span>Продукция:</span>
          <NavLink to="/boilers" activeClassName="selected"><span className="underline">Котлы</span></NavLink>
          <NavLink to="/crushers" activeClassName="selected"><span className="underline">Дробилки</span></NavLink>
        </div>
        <div className="menu">
          <span>О компании:</span>
          <NavLink to="/delivery" activeClassName="selected"><span className="underline">Доставка</span></NavLink>
          <NavLink to="/contacts" activeClassName="selected"><span className="underline">Контакты</span></NavLink>
        </div>
      </div>
    </div>
  );
};
