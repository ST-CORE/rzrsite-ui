import React from 'react';
import AboutUs from './about-us/about-us';
import './about.scss';
import AnyQuestions from './any-questions/any-questions';

export default () => (
  <div className="about">
    <div className="container-small">
      <AboutUs />
      <AnyQuestions />
    </div>
  </div>
);
