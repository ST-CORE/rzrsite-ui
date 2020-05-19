import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../shared/logo/logo';
import './nav-header.scss';
import { ICategory } from '../../../consts/for-categories-request';

interface NavHeaderProps {
  lightTheme: boolean,
  categories: Array<ICategory>,
  renderPermission: boolean
}

export default ({ lightTheme, categories, renderPermission }: NavHeaderProps) => {
  let className: string = 'desktop nav-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  
  const categoryLinks = categories.map((item: ICategory) => (
    <li key={item.id}>
      <NavLink to={`/products${item.path}`} activeClassName="selected-dashed">
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
                {renderPermission && categoryLinks}
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
