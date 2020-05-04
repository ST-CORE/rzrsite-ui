import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import FooterDisclaimer from './footer-disclaimer/footer-disclaimer';
import FooterDisclaimerMobile from './footer-disclaimer/footer-disclaimer-mobile';
import NavFooter from './nav-footer/nav-footer';
import NavFooterMobile from './nav-footer/nav-footer-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="footer">
            <NavFooterMobile />
            <FooterDisclaimerMobile />
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
