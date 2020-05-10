import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './footer-menu.scss';

export default () => (
  <div className="footer-menu">
    <p>
      <span>
        <Link to="/products">
          Продукция
        </Link>
        :
      </span>
      <NavLink to="/products/boilers" activeClassName="selected"><span className="underline">Котлы</span></NavLink>
      <NavLink to="/products/crushers" activeClassName="selected"><span className="underline">Дробилки</span></NavLink>
    </p>
    <p>
      <span>
        <Link to="/about">
          О компании
        </Link>
        :
      </span>
      <NavLink to="/delivery" activeClassName="selected"><span className="underline">Доставка</span></NavLink>
      <NavLink to="/contacts" activeClassName="selected"><span className="underline">Контакты</span></NavLink>
    </p>
  </div>
);
