import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Button from '../../shared/buttons/button';
import * as buttonTypes from '../../../consts/button-types';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Logo from '../../shared/logo/logo';
import './header-mobile.scss';
import CallMeForm from '../../shared/call-me-form/call-me-form';
import HeaderMenu from './menu/header-menu';

interface HeaderMobileProps {
  lightTheme: boolean
}

export default ({ lightTheme }: HeaderMobileProps) => {
  let className: string = 'header-mobile';
  if (lightTheme) {
    className += ' light-theme';
  }
  
  const [contentKey, changeContentKey] = React.useState('');
  const [popDown, togglePopDown] = React.useState(false);
  
  const switchContent = (buttonKey: string) => {
    if (contentKey === buttonKey) {
      togglePopDown(false);
    } else {
      changeContentKey(buttonKey);
      togglePopDown(true);
    }
  };
  
  const lineColor = popDown ? '#30a2de' : '#ffffff';
  
  return (
    <header className={className}>
      <button type="button" className="menu-button" aria-haspopup="true" onClick={() => switchContent('menu')}>
        <svg height="30" width="30">
          <line x1="2" y1="2" x2="23" y2="2" stroke="#30a2de" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="23" y2="12" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="23" x2="23" y2="23" stroke={lineColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <div className="button-and-phone">
        <Button label="Позвоните мне!" className={buttonTypes.blueSquareButtonMobile} clickHandler={() => switchContent('callmeform')} />
        <PhoneNumber />
      </div>
      <div className="clearfix" />
      <CSSTransition in={popDown} timeout={400} mountOnEnter unmountOnExit onExit={() => changeContentKey('')}>
        <div className="container-menu-mobile">
          {
            (contentKey === 'menu') && <HeaderMenu />
          }
          {
          (contentKey === 'callmeform') && <CallMeForm isMobile />
          }
        </div>
      </CSSTransition>
    </header>
  );
};
