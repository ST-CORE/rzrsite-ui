import * as React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import Delivery from './delivery/delivery';
import Home from './home/home';
import Contacts from './contacts/contacts';

export default () => (
  <Switch>
    <Route exact path="/delivery">
      <Delivery />
    </Route>
    <Route exact path="/boilers">
      <div style={{ backgroundColor: '#2200ee', height: '300px' }}>BOILERS</div>
    </Route>
    <Route exact path="/crushers">
      <div style={{ backgroundColor: '#2200ee', height: '300px' }}>CRASHERS</div>
    </Route>
    <Route exact path="/contacts">
      <Contacts />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);
