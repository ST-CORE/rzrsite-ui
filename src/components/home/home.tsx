import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import ShowcaseDesktop from './showcase/showcase';
import ShowcaseMobile from './showcase/showcase-mobile';
import LandingInfo from './landing-info/landing-info';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={(
        <div className="home-mobile">
          <ShowcaseMobile />
          <LandingInfo mobile />
        </div>
      )}
      desktop={(
        <div className="home">
          <ShowcaseDesktop />
          <LandingInfo mobile={false} />
        </div>
      )}
    />
  </ProvideMediaMatchers>
);
