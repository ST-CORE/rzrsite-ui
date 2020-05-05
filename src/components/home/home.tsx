import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import Showcase from './showcase/showcase';
import LandingInfo from './landing-info/landing-info';
import LandingInfoMobile from './landing-info/landing-info-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={(
        <div className="home-mobile">
          <Showcase />
          <LandingInfoMobile />
        </div>
      )}
      desktop={(
        <div className="home">
          <Showcase />
          <LandingInfo />
        </div>
      )}
    />
  </ProvideMediaMatchers>
);
