import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
// import { Link, NavLink } from 'react-router-dom';
import Button from '../../shared/buttons/button';
import * as buttonTypes from '../../../consts/button-types';
import PhoneNumberMobile from '../../shared/phone-number/phone-number-mobile';
import Logo from '../../shared/logo/logo';
import './header-mobile.scss';
import CallMeFormMobile from '../../shared/call-me-form/call-me-form-mobile';
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
  
  return (
    <header className={className}>
      <button type="button" className="menu-button" aria-haspopup="true" onClick={() => switchContent('menu')}>
        <svg height="30" width="30">
          <line x1="2" y1="2" x2="23" y2="2" stroke="#30a2de" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="23" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="23" x2="23" y2="23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <Logo />
      <div className="button-and-phone">
        <Button label="Позвоните мне!" className={buttonTypes.blueSquareButtonMobile} clickHandler={() => switchContent('callmeform')} />
        <PhoneNumberMobile />
      </div>
      <div className="clearfix" />
      <CSSTransition in={popDown} timeout={400} mountOnEnter unmountOnExit onExit={() => changeContentKey('')}>
        <div className="container-menu-mobile">
          {
            (contentKey === 'menu') && <HeaderMenu />
          }
          {
          (contentKey === 'callmeform') && <CallMeFormMobile />
          }
        </div>
      </CSSTransition>
    </header>
  );
};
