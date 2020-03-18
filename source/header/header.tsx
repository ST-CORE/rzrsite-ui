import * as React from 'react';
import SmallHeader from './call-me-header';
import NavHeader from './nav-header';

function Header() {
  return (
    <div>
      <SmallHeader />
      <NavHeader darkTheme={false} />
    </div>
  );
}

export default Header;
