import * as React from 'react';
// import { Swipeable } from 'react-swipeable';
import ShowcaseCarousel from './showcase-carousel/showcase-carousel';
import Boiler from './views/boiler/boiler';
import Crusher from './views/crusher/crusher';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';
import './showcase-mobile.scss';

export default () => {
  const [machine, setMachine] = React.useState('crusher');
  const [transitioning, setTransitioning] = React.useState(false);
  const switchShowcase = (showcaseName: string) => {
    setMachine(showcaseName);
    setTransitioning(true);
  };
  const classLink = buttonClassName.showcaseLink;
  const classActiveLink = `${classLink} active`;
  const boilerButtonClass: string = machine === 'boiler' ? classActiveLink : classLink;
  const crusherButtonClass: string = machine === 'crusher' ? classActiveLink : classLink;
    
  return (
    <div className="showcase mobile">
      <ShowcaseCarousel displayCondition={machine === 'crusher' && !transitioning} exitHandler={() => setTransitioning(false)}>
        <Crusher />
      </ShowcaseCarousel>
      <ShowcaseCarousel displayCondition={machine === 'boiler' && !transitioning} exitHandler={() => setTransitioning(false)}>
        <Boiler />
      </ShowcaseCarousel>
        
      <div className="showcase-menu">
        <Button label="Котлы отопления" clickHandler={() => switchShowcase('boiler')} className={boilerButtonClass} />
        <Button label="Дробилки угля" clickHandler={() => switchShowcase('crusher')} className={crusherButtonClass} />
      </div>
    </div>
  );
};
