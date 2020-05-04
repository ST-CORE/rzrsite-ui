import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import FooterDisclaimer from './footer-disclaimer/footer-disclaimer';
import NavFooter from './nav-footer/nav-footer';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile="footer mobile"
      desktop={
      (
        <div className="footer">
          <NavFooter />
          <FooterDisclaimer />
        </div>
      )
    }
    />
  </ProvideMediaMatchers>
);
