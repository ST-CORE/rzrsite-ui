import * as React from 'react';
import Logo from '../../shared/logo/logo';
import './nav-header.scss';


interface NavHeaderProps {
  lightTheme: boolean
}

const NavHeader = ({ lightTheme }: NavHeaderProps) => {
  let className: string = 'nav-header';
  if (lightTheme) {
    className += ' light-theme';
  }
  return (
    <div className={className}>
      <Logo />
      <nav>
        <a href=" ">Продукция</a>
        <a href=" ">Доставка</a>
        <a href=" ">О компании</a>
        <a href=" ">Контакты</a>
      </nav>
      <div className="fixer" />
    </div>
  );
};

export default NavHeader;
