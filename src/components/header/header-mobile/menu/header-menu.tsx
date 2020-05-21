import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-menu.scss';
import { MyContext } from '../../../shared/my-context';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../../../consts/for-categories-request';

export default () => (
  <nav className="header-menu">
    <ul className="first-level-menu">
      <li className="first-level-item complex-item">
        <NavLink to="/products" activeClassName="selected-category">
          Продукция
        </NavLink>
        <ul className="second-level-menu">
          <MyContext.Consumer>
            {(value: ICategory[]) => {
              const categoryLinks = value.map((item: ICategory) => (
                <li key={item.id}>
                  <NavLink to={`/products${item.path}`} activeClassName="selected">
                    {item.name}
                  </NavLink>
                </li>
              ));
              return categoryLinks;
            }}
          </MyContext.Consumer>
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
