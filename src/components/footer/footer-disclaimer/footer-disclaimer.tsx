import * as React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';
import './footer-disclaimer.scss';

export default () => {
  const disclaimer = 'Rezer 2020 Все права защищены.';

  return (
    <ProvideMediaMatchers>
      <MediaMatcher
        mobile={(
          <div className="footer-disclaimer mobile">
            {disclaimer}
          </div>
        )}
        desktop={(
          <div className="footer-disclaimer desktop">
            <div className="container-small">
              {disclaimer}
            </div>
          </div>
        )}
      />
      
    </ProvideMediaMatchers>
  );
};
