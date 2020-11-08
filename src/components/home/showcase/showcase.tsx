import * as React from 'react';
import axios from 'axios';
import { IProdLine } from '../../../consts/interfaces-for-request';
import { ApiUrl } from '../../../consts/api';
import Boiler from './views/boiler/boiler';
import Crusher from './views/crusher/crusher';
import ShowcaseCarousel from './showcase-carousel/showcase-carousel';
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

  const [boilerLines, setBoilerLines] = React.useState([] as IProdLine[]);
  React.useEffect(() => {   
    setBoilerLines([] as IProdLine[]); 
    axios.get(`${ApiUrl}/Category/1/ProductLine`)
      .then((response) => {         
        const result = response.data as IProdLine[];        
        setBoilerLines(result);       
      });
  }, [setBoilerLines]);

  const [crusherLines, setCrusherLines] = React.useState([] as IProdLine[]);
  React.useEffect(() => {   
    setCrusherLines([] as IProdLine[]);   
    axios.get(`${ApiUrl}/Category/2/ProductLine`)
      .then((response) => {         
        const result = response.data as IProdLine[];        
        setCrusherLines(result);       
      });
  }, [setCrusherLines]);

  const classLink = buttonClassName.showcaseLink;
  const classActiveLink = `${classLink} active`;
  const boilerButtonClass: string = machine === 'boiler' ? classActiveLink : classLink;
  const crusherButtonClass: string = machine === 'crusher' ? classActiveLink : classLink;
    
  return (
    <div className="showcase desktop">
      <div className="container-big showcase-carousel">
        <ShowcaseCarousel displayCondition={machine === 'boiler' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Boiler lines={boilerLines} />
        </ShowcaseCarousel>
        <ShowcaseCarousel displayCondition={machine === 'crusher' && !transitioning} exitHandler={() => setTransitioning(false)}>
          <Crusher lines={crusherLines} />
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
