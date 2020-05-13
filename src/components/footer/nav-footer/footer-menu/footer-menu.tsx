import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './footer-menu.scss';

export default () => (
  <div className="footer-menu">
    <p>
      <NavLink to="/products" className="bold-link" activeClassName="bold-selected">
        Продукция:
      </NavLink>
      
      <NavLink to="/products/boilers" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Котлы</span></NavLink>
      <NavLink to="/products/crushers" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Дробилки</span></NavLink>
    </p>
    <p>
      
      <NavLink to="/about" className="bold-link" activeClassName="bold-selected">
        О компании:
      </NavLink>
      
      <NavLink to="/delivery" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Доставка</span></NavLink>
      <NavLink to="/contacts" className="underlined-link" activeClassName="underlined-selected"><span className="underline">Контакты</span></NavLink>
    </p>
  </div>
);
