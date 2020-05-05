import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import imageLogoBig from '../../../images/Logo-w200.png';
import imageLogoSmall from '../../../images/Logo-w140.png';

const Logo = () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={<img className="logo" src={imageLogoSmall} alt="Логотип Rezer" />}
      desktop={<img className="logo" src={imageLogoBig} alt="Логотип Rezer" />}
    />
  </ProvideMediaMatchers>
);

export default Logo;
