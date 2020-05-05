import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import './nav-footer-mobile.scss';
import PhoneNumberMobile from '../../shared/phone-number/phone-number-mobile';
import * as buttonTypes from '../../../consts/button-types';
import Button from '../../shared/buttons/button';
import CallMeFormMobile from '../../shared/call-me-form/call-me-form-mobile';

export default () => {
  const [form, switchForm] = React.useState(false);
  
  return (
    <div className="nav-footer mobile">
      <div className="menu">
        <p>
          <span>Продукция:</span>
          <NavLink to="/boilers" activeClassName="selected"><span className="underline">Котлы</span></NavLink>
          <NavLink to="/crushers" activeClassName="selected"><span className="underline">Дробилки</span></NavLink>
        </p>
        <p>
          <span>О компании:</span>
          <NavLink to="/delivery" activeClassName="selected"><span className="underline">Доставка</span></NavLink>
          <NavLink to="/contacts" activeClassName="selected"><span className="underline">Контакты</span></NavLink>
        </p>
      </div>
      <div className="contact-block">
        <PhoneNumberMobile />
        <Button label={form ? 'Скрыть форму' : 'Заказать звонок!'} clickHandler={() => switchForm(!form)} className={buttonTypes.defaultMobile} />
      </div>
      <CSSTransition in={form} timeout={{ enter: 400, exit: 300 }} classNames="to-bottom-slider" unmountOnExit>
        <CallMeFormMobile />
      </CSSTransition>
    </div>
  );
};
