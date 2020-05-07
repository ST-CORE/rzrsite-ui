/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import TemplateDesktop from '../templates/template-desktop';
import TemplateMobile from '../templates/template-mobile';
import imgBoilerBig from '../../../../../images/showcase/boiler-transparent.png';
import imgBoilerSmall from '../../../../../images/showcase/boiler-transparent-mobile.png';
import BoilerAdvantages from './boiler-advantages';

export default () => {
  const boilerInfo = {
    imageAlt: 'Котел Резер Фит-40',
    bigTitle: 'Твердотопливные котлы Rezer',
    productLines: ['Линейка Fit', 'Линейка Maxi'],
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={(
          <TemplateMobile image={imgBoilerSmall} {...boilerInfo}>
            <BoilerAdvantages />
          </TemplateMobile>
        )}
        desktop={(
          <TemplateDesktop image={imgBoilerBig} {...boilerInfo}>
            <BoilerAdvantages />
          </TemplateDesktop>
        )}
      />
    </ProvideMediaMatchers>
  );
};
