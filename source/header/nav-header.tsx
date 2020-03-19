import * as React from 'react';
import Logo from '../shared/logo';

interface HeaderProps {
  darkTheme: boolean
}

const NavHeader = ({ darkTheme }: HeaderProps) => {
  let className: string = 'my-nav-header container-fluid text-uppercase';
  if (darkTheme) {
    className += ' bg-dark';
  }
  return (
    <div className={className}>
      <nav className="nav">
        <Logo />
        <a className="nav-link" href=" ">Продукция</a>
        <a className="nav-link" href=" ">Доставка</a>
        <a className="nav-link" href=" ">О компании</a>
        <a className="nav-link" href=" ">Контакты</a>
      </nav>
    </div>
  );
};

export default NavHeader;
