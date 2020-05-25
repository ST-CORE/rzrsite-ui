import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './nav-footer-mobile.scss';
import FooterMenu from './footer-menu/footer-menu';
import PhoneNumber from '../../shared/phone-number/phone-number';
import * as buttonTypes from '../../../consts/button-types';
import Button from '../../shared/buttons/button';
import CallMeForm from '../../shared/call-me-form/call-me-form';

export default () => {
  const [form, switchForm] = React.useState(false);
  
  return (
    <div className="nav-footer mobile">
      <FooterMenu />
      <div className="contact-block">
        <PhoneNumber />
        <Button label={form ? 'Скрыть форму' : 'Заказать звонок!'} clickHandler={() => switchForm(!form)} className={buttonTypes.defaultMobile} />
      </div>
      <CSSTransition in={form} timeout={{ enter: 400, exit: 300 }} classNames="to-bottom-slider" unmountOnExit>
        <CallMeForm isMobile />
      </CSSTransition>
    </div>
  );
};
