import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import DesktopHeader from './desktop-header/desktop-header';

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
      desktop={
        <DesktopHeader lightTheme={lightTheme} />
      }
    />
  </ProvideMediaMatchers>
  
);
