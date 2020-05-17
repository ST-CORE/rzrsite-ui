import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../shared/logo/logo';
import './nav-header.scss';

interface DataItem {
  id: number;
  name: string;
  weight: 0;
  path: string;
}

interface NavHeaderProps {
  lightTheme: boolean,
  categoryInstances: Array<DataItem>
}

export default ({ lightTheme, categoryInstances }: NavHeaderProps) => {
  let className: string = 'desktop nav-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  
  const categoryLinks = categoryInstances.map((item: DataItem) => (
    <li key={item.id}>
      <NavLink to={item.path} activeClassName="selected-dashed">
        {item.name}
      </NavLink>
    </li>
  ));
  
  return (
    <div className={className}>
      <div className="container-big">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <nav>
          <ul className="big-menu">
            <li className="hoverable">
              <NavLink to="/products" activeClassName="selected-dashed">
                Продукция
              </NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="/products/boilers" activeClassName="selected-dashed">
                    Котлы отопления
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/crushers" activeClassName="selected-dashed">
                    Дробилки угля
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/delivery" activeClassName="selected">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">О компании</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" activeClassName="selected">Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <div className="fixer" />
      </div>
    </div>
  );
};
