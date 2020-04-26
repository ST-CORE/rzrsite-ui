import * as React from 'react';
import Boiler from './views/boiler';
import Crusher from './views/crusher';
import ShowcaseCarousel from './showcase-item/showcase-carousel';
import Button from '../../shared/buttons/button';
import * as buttonClassName from '../../../consts/button-types';
import './showcase.scss';

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
    <div className="showcase">
      <div className="container-big">
        <ShowcaseCarousel displayCondition={machine === 'boiler' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Boiler />
        </ShowcaseCarousel>
        <ShowcaseCarousel displayCondition={machine === 'crusher' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Crusher />
        </ShowcaseCarousel>
      </div>
      <div className="showcase-menu">
        <div className="container-big">
          <Button label="Котлы отопления" clickHandler={() => switchShowcase('boiler')} className={boilerButtonClass} />
          <Button label="Дробилки угля" clickHandler={() => switchShowcase('crusher')} className={crusherButtonClass} />
        </div>
      </div>
    </div>
  );
};
