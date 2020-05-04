import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import PhoneHeader from './phone-header/phone-header';
import NavHeader from './nav-header/nav-header';

interface HeaderProps {
  lightTheme: boolean
}

export default ({ lightTheme }: HeaderProps) => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <header>
            Menu Logo Phone
          </header>
        )
      }
      desktop={(
        <header>
          <PhoneHeader lightTheme={lightTheme} />
          <NavHeader lightTheme={lightTheme} />
        </header>
      )}
    />
  </ProvideMediaMatchers>
);
