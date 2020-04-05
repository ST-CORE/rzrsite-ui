import * as React from 'react';
import Boiler from './views/boiler';
import Crusher from './views/crusher';
import ShowcaseItem from './showcase-item/showcase-item';
import Button from '../../shared/button/button';
import * as buttonClassName from '../../../consts/button-types';
import './showcase.scss';

export default () => {
  const [machine, setMachine] = React.useState('crusher');
  const [transitioning, setTransitioning] = React.useState(false);
  const switchShowcase = (showcaseName: string) => {
    setMachine(showcaseName);
    setTransitioning(true);
  };
  const classActiveLink = `${buttonClassName.showcaseLink} showcase-link-active`;
  const boilerButtonClass: string = machine === 'boiler' ? classActiveLink : buttonClassName.showcaseLink;
  const crusherButtonClass: string = machine === 'crusher' ? classActiveLink : buttonClassName.showcaseLink;
  
  return (
    <div className="showcase">
      <div className="container-big">
        <ShowcaseItem displayCondition={machine === 'boiler' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Boiler />
        </ShowcaseItem>
        <ShowcaseItem displayCondition={machine === 'crusher' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Crusher />
        </ShowcaseItem>
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
