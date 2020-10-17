import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './about.scss';
import AboutUs from './about-us/about-us';
import AnyQuestions from '../shared/any-questions/any-questions';
import AnyQuestionsMobile from '../shared/any-questions/any-questions-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="about mobile">
            <AboutUs />
            <AnyQuestionsMobile />
          </div>
        )
      }
      desktop={
        (
          <div className="about desktop container-small">
            <AboutUs />
            <AnyQuestions />
          </div>
        )
      }
    />
  </ProvideMediaMatchers>

);
