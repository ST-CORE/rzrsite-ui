import * as React from 'react';
import PhoneHeader from './phone-header/phone-header';
import NavHeader from './nav-header/nav-header';

interface HeaderProps {
  lightTheme: boolean
}

const Header = ({ lightTheme }: HeaderProps) => (
  <header>
    <PhoneHeader lightTheme={lightTheme} />
    <NavHeader lightTheme={lightTheme} />
  </header>
);

export default Header;
