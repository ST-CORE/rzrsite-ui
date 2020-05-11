import * as React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import './email-mobile.scss';


export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={<a className="email mobile" href="mailto:Rezer@mail.ru">Rezer@mail.ru</a>}
      desktop={<span className="email desktop">Rezer@mail.ru</span>}
    />
  </ProvideMediaMatchers>
);
