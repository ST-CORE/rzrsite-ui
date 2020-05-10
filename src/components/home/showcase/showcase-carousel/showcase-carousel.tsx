import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './showcase-carousel.scss';

interface showcaseCarouselProps {
  exitHandler: () => void,
  children: JSX.Element,
  displayCondition: boolean
}

export default ({ exitHandler, children, displayCondition }: showcaseCarouselProps) => (
  <CSSTransition in={displayCondition} timeout={800} classNames="carousel" onExited={exitHandler} mountOnEnter unmountOnExit>
    { children }
  </CSSTransition>
);
