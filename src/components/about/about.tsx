import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import AboutUs from './about-us/about-us';
import './about.scss';
import AnyQuestions from '../shared/any-questions/any-questions';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile="render for mobile"
      // tablet={"tablet"} // mobile will be rendered for a "skipped" tablet - "pick value to the left"
      desktop={
        (
          <div className="about container-small">
            <AboutUs />
            <AnyQuestions />
          </div>
        )
      }
    />
  </ProvideMediaMatchers>

);
