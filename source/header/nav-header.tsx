import * as React from 'react';
import Logo from '../shared/logo';

function NavHeader() {
  return (
    <div className="my-nav-header container-fluid text-uppercase">
      <nav className="nav">
        <Logo />
        <a className="nav-link" href=" ">Продукция</a>
        <a className="nav-link" href=" ">Доставка</a>
        <a className="nav-link" href=" ">О компании</a>
        <a className="nav-link" href=" ">Контакты</a>
      </nav>
    </div>
  );
}

export default NavHeader;
