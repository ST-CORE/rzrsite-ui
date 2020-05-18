import React from 'react';
import { NavLink } from 'react-router-dom';
import './header-menu.scss';

interface DataItem {
  id: number;
  name: string;
  weight?: 0;
  path: string;
}

interface HeaderMenuProps {
  categories: Array<DataItem>
}

export default ({ categories }: HeaderMenuProps) => {
  const categoryLinks = categories.map((item: DataItem) => (
    <li key={item.id}>
      <NavLink to={`/products${item.path}`} activeClassName="selected">
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="header-menu">
      <ul className="first-level-menu">
        <li className="first-level-item complex-item">
          <NavLink to="/products" activeClassName="selected-category">
            Продукция
          </NavLink>
          <ul className="second-level-menu">
            {categoryLinks}
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
};
