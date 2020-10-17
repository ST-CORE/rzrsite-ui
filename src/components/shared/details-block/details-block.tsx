import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import Button from '../../shared/buttons/button';
import * as buttonTypes from '../../../consts/button-types';
import './details-block.scss';

interface DetailsBlock {
  children: JSX.Element,
  buttonLabel: string
}

export default ({ children, buttonLabel }: DetailsBlock) => {
  const [visibility, toggleBlock] = React.useState(false);

  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={(
          <div className="show-details-block mobile">
            <Button
              className={buttonTypes.showDetailsButtonMobile}
              label={buttonLabel}
              clickHandler={() => toggleBlock(!visibility)}
            />
            <div className={visibility ? 'details-block' : 'details-block hidden'}>
              {children}
            </div>
          </div>
        )}
        desktop={(
          <div className="show-details-block desktop">
            <Button
              className={buttonTypes.showDetailsButton}
              label={buttonLabel}
              clickHandler={() => toggleBlock(!visibility)}
            />
            <div className={visibility ? 'details-block' : 'details-block hidden'}>
              {children}
            </div>
          </div>
        )}
      />
    </ProvideMediaMatchers>
  );
};
