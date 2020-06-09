import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hook/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={user ? <Component /> : <Redirect to="/" />} />
  );
};

export default PrivateRoute;
