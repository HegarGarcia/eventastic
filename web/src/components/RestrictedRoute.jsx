/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hook/auth';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? <Redirect to="" /> : <Component />}</Route>;
};

export default RestrictedRoute;
