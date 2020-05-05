import React from 'react';
import { MediaMatcher, ProvideMediaMatchers } from 'react-media-match';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={(
        <iframe
          title="Test video"
          width="340"
          height="190"
          src="https://www.youtube.com/embed/D2kFOHWF4Zo"
          frameBorder="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      desktop={(
        <iframe
          title="Test video"
          width="426"
          height="240"
          src="https://www.youtube.com/embed/D2kFOHWF4Zo"
          frameBorder="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    />
  </ProvideMediaMatchers>
);
