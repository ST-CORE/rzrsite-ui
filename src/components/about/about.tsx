import React from 'react';
import AboutUs from './about-us/about-us';
import './about.scss';
import AnyQuestions from '../shared/any-questions/any-questions';

export default () => (
  <div className="about container-small">
    <AboutUs />
    <AnyQuestions />
  </div>
);
