import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './showcase-item.scss';

interface showcaseItemProps {
  exitHandler: () => void,
  children: JSX.Element,
  displayCondition: boolean
}

export default ({ exitHandler, children, displayCondition }: showcaseItemProps) => (
  <CSSTransition in={displayCondition} timeout={800} classNames="carousel" onExited={exitHandler} unmountOnExit>
    { children }
  </CSSTransition>
);
