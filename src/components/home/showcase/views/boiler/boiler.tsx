/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import TemplateDesktop from '../templates/template-desktop';
import TemplateMobile from '../templates/template-mobile';
import imgBoilerBig from '../../../../../images/showcase/boiler-transparent.png';
import imgBoilerSmall from '../../../../../images/showcase/boiler-transparent-mobile.png';
import BoilerAdvantages from './boiler-advantages';
import { IProdLine } from '../../../../../consts/interfaces-for-request';

interface IBoiler {
  lines: IProdLine[];
}

export default ({lines} : IBoiler) => {
  const boilerInfo = {
    imageAlt: 'Котел Резер Фит-40',
    bigTitle: 'Твердотопливные котлы Rezer',
    productLines: lines,
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
          <TemplateDesktop isBoiler image={imgBoilerBig} {...boilerInfo}>
            <BoilerAdvantages />
          </TemplateDesktop>
        )}
      />
    </ProvideMediaMatchers>
  );
};
