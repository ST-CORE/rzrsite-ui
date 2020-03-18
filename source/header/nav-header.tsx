import * as React from 'react';
import Logo from '../shared/logo';

function NavHeader() {
  return (
    <div>
      <Logo />
      <nav>
        <ul>
          <li>Продукция</li>
          <li>Доставка</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavHeader;
