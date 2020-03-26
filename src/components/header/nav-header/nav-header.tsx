import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../shared/logo/logo';
import './nav-header.scss';

interface NavHeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: NavHeaderProps) => {
  let className: string = 'nav-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  return (
    <div className={className}>
      <Logo />
      <nav>
        <NavLink to="/products" activeClassName="selected">Продукция</NavLink>
        <NavLink to="/delivery" activeClassName="selected">Доставка</NavLink>
        <NavLink to="/about" activeClassName="selected">О компании</NavLink>
        <NavLink to="/contacts" activeClassName="selected">Контакты</NavLink>
      </nav>
      <div className="fixer" />
    </div>
  );
};
