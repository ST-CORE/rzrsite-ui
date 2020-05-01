import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './delivery.scss';
import PayAndDelivery from './pay-and-delivery/pay-and-delivery';
import PayAndDeliveryMobile from './pay-and-delivery/pay-and-delivery-mobile';
import Questions from './questions/questions';
import QuestionsMobile from './questions/questions-mobile';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={
        (
          <div className="delivery-page mobile">
            <PayAndDeliveryMobile />
            <QuestionsMobile />
          </div>
        )
      }
      desktop={
        (
          <div className="delivery-page desktop container-small">
            <PayAndDelivery />
            <Questions />
          </div>
        )
      }
    />
  </ProvideMediaMatchers>
);
