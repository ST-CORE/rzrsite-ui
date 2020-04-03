import * as React from 'react';
import './contacts.scss';
import ContactInfo from './contact-info/contact-info';
import Map from '../shared/map/map';

export default () => (
  <div className="contacts">
    <Map />
    <ContactInfo />
  </div>
  
);
