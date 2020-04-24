import * as React from 'react';
import './delivery.scss';
import PayAndDelivery from './pay-and-delivery/pay-and-delivery';
import Questions from './questions/questions';

export default () => (
  <div className="delivery-page container-small">
    <PayAndDelivery />
    <Questions />
  </div>
);
