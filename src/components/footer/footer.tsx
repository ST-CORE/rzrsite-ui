import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import FooterDisclaimer from './footer-disclaimer/footer-disclaimer';
import NavFooter from './nav-footer/nav-footer';
import NavFooterMobile from './nav-footer/nav-footer-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="footer">
            <NavFooterMobile />
            <FooterDisclaimer />
          </div>
        )
      }
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
