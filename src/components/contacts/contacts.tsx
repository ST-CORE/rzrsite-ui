import * as React from 'react';
import { ProvideMediaMatchers, MediaMatcher } from 'react-media-match';
import './contacts.scss';
import ContactInfo from './contact-info/contact-info';
import Map from '../shared/map/map';

export default () => (
  <ProvideMediaMatchers>
    <MediaMatcher
      mobile={(
        <div className="contacts mobile">
          <ContactInfo mobile />
          <div className="map-container">
            <Map />
          </div>
        </div>
      )}
      desktop={(
        <div className="contacts desktop">
          <Map />
          <ContactInfo mobile={false} />
        </div>
      )}
    />
  </ProvideMediaMatchers>
  
);
