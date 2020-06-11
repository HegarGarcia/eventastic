/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hook/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  // eslint-disable-next-line prettier/prettier
  const render = (props) => (user ? <Component {...props} /> : <Redirect to="/" />);

  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
