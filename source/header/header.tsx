import * as React from 'react';
import PhoneHeader from './phone-header';
import NavHeader from './nav-header';

const Header = () => (
  <div>
    <PhoneHeader />
    <NavHeader darkTheme={false} />
  </div>
);

export default Header;
