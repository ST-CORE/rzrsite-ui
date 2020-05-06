import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './footer-menu.scss';

export default () => (
  <div className="footer-menu">
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
);
