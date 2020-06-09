import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hook/auth';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={user ? <Redirect to="" /> : <Component />} />
  );
};

export default RestrictedRoute;
