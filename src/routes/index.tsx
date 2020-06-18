import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../pages/Start';
import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Start} exact />
    <Route path="/LandingPage" component={LandingPage} />
  </Switch>
);

export default Routes;
