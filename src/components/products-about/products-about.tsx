import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './products-about.scss';
import OurProducts from './our-products/our-products';
import AnyQuestions from '../shared/any-questions/any-questions';
import AnyQuestionsMobile from '../shared/any-questions/any-questions-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="products-about mobile">
            <OurProducts />
            <AnyQuestionsMobile />
          </div>
        )
      }
      desktop={
        (
          <div className="products-about desktop container-small">
            <OurProducts />
            <AnyQuestions />
          </div>
        )
      }
    />
  </ProvideMediaMatchers>
);
