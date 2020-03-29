import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import './showcase-item.scss';

interface showcaseItemProps {
  exitHandler?: (node: HTMLElement) => void,
  children: JSX.Element,
  displayCondition: boolean
}

export default ({ exitHandler, children, displayCondition }: showcaseItemProps) => (
  <CSSTransition in={displayCondition} timeout={10000} classNames="slider" onExited={exitHandler} unmountOnExit>
    { children }
  </CSSTransition>
);
