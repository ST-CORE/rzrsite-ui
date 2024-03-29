/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import TemplateDesktop from '../templates/template-desktop';
import TemplateMobile from '../templates/template-mobile';
import imgCrusherBig from '../../../../../images/showcase/crusher-transparent.png';
import imgCrusherSmall from '../../../../../images/showcase/crusher-transparent-mobile.png';
import CrusherAdvantages from './crusher-advantages';
import CrusherAdvantagesMobile from './crusher-advantages-mobile';
import { IProdLine } from '../../../../../consts/interfaces-for-request';


interface ICrusher {
  lines: IProdLine[];
}

export default ( {lines} : ICrusher) => {
  const crusherInfo = {
    imageAlt: 'Дробилка Резер ДС-2',
    bigTitle: 'Дробилки угля автоматические Rezer',
    productLines: lines,
  };
  
  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={(
          <TemplateMobile image={imgCrusherSmall} {...crusherInfo}>
            <CrusherAdvantagesMobile />
          </TemplateMobile>
        )}
        desktop={(
          <TemplateDesktop isBoiler={false} image={imgCrusherBig} {...crusherInfo}>
            <CrusherAdvantages />
          </TemplateDesktop>
        )}
      />
    </ProvideMediaMatchers>
  );
};
