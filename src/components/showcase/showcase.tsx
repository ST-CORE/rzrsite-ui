/* eslint-disable no-console */
import * as React from 'react';
import Boiler from './views/boiler';
import Crusher from './views/crusher';
import ShowcaseItem from './showcase-item/showcase-item';
import Button from '../shared/button/button';
import * as buttonClassName from '../../consts/button-types';
import './showcase.scss';

export default () => {
  const [machine, setMachine] = React.useState('crusher');
  const [transitioning, setTransitioning] = React.useState(false);
  // eslint-disable-next-line no-console
  
  return (
    <div className="showcase">
      <ShowcaseItem displayCondition={machine === 'boiler' && !transitioning} exitHandler={() => { setTransitioning(false); }}>
        <Boiler />
      </ShowcaseItem>
      <ShowcaseItem displayCondition={machine === 'crusher' && !transitioning} exitHandler={() => { setTransitioning(false); }}>
        <Crusher />
      </ShowcaseItem>
      <div className="showcase-menu">
        <Button label="Котлы отопления" clickHandler={() => { setMachine('boiler'); setTransitioning(true); }} className={buttonClassName.showcaseLink} />
        <Button label="Дробилки угля" clickHandler={() => { setMachine('crusher'); setTransitioning(true); }} className={buttonClassName.showcaseLink} />
      </div>
    </div>
  );
};
