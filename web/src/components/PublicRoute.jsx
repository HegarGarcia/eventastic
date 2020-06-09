import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Route {...rest}>
    <Component />
  </Route>
);

export default PublicRoute;
