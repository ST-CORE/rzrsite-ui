import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-menu.scss';

export default () => (
  <nav className="header-menu">
    <ul className="first-level-menu">
      <li className="first-level-item complex-item">
        <NavLink to="/products" activeClassName="selected-category">
          Продукция
        </NavLink>
        <ul className="second-level-menu">
          <li>
            <NavLink to="/products/boilers" activeClassName="selected">
              Котлы
            </NavLink>
          </li>
          <li>
            <NavLink to="/products/crushers" activeClassName="selected">
              Дробилки
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="first-level-item">
        <NavLink to="/delivery" activeClassName="selected">
          Доставка
        </NavLink>
      </li>
      <li className="first-level-item">
        <NavLink to="/about" activeClassName="selected">
          О компании
        </NavLink>
      </li>
      <li className="first-level-item">
        <NavLink to="/contacts" activeClassName="selected">
          Контакты
        </NavLink>
      </li>
    </ul>
  </nav>
);
