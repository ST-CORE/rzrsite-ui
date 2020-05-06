import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import PhoneHeader from './phone-header/phone-header';
import NavHeader from './nav-header/nav-header';
import HeaderMobile from './header-mobile/header-mobile';

interface HeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: HeaderProps) => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={<HeaderMobile lightTheme={lightTheme} />}
      desktop={(
        <header>
          <PhoneHeader lightTheme={lightTheme} />
          <NavHeader lightTheme={lightTheme} />
        </header>
      )}
    />
  </ProvideMediaMatchers>
);
