import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'appConstants';
import { Main } from 'pages';

const Routes = () => (
  <Switch>
    <Route path={routes.main.root} component={Main} exact />
    <Redirect to={routes.main.root} />
  </Switch>
);

export default Routes;
