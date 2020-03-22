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
        <a href=" "><span className="underline-active">Продукция</span></a>
        <a href=" "><span className="underline-active">Доставка</span></a>
        <a href=" "><span className="underline-active">О компании</span></a>
        <a href=" "><span className="underline-active">Контакты</span></a>
      </nav>
      <div className="fixer" />
    </div>
  );
};

export default NavHeader;
