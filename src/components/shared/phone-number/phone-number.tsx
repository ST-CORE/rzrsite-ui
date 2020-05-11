import * as React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import './phone-number-mobile.scss';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={<a className="phone-number mobile" href="tel:+79050886688">+7 905 088 66 88</a>}
      desktop={<span className="phone-number desktop">+7 905 088 66 88</span>}
    />
  </ProvideMediaMatchers>
);
