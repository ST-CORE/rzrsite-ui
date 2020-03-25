import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-footer.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Button from '../../shared/button/button';

export default () => (
  <div className="nav-footer">
    <div className="container">
      <div className="contact-block">
        <PhoneNumber />
        <Button label="Заказать звонок!" clickHandler="" />

      </div>
      <div className="menu">
        <span>Продукция:</span>
        <NavLink to="/products/boilers" activeClassName="selected"><span className="underline">Котлы</span></NavLink>
        <NavLink to="/products/crusher" activeClassName="selected"><span className="underline">Дробилки</span></NavLink>
      </div>
      <div className="menu">
        <span>О компании:</span>
        <NavLink to="/delivery" activeClassName="selected"><span className="underline">Доставка</span></NavLink>
        <NavLink to="/contacts" activeClassName="selected"><span className="underline">Контакты</span></NavLink>
      </div>
    </div>
  </div>
);
