import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute';
import RestrictedRoute from '../components/RestrictedRoute';
import ContextProvider from '../context';
import Layout from '../layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));

const Router = () => (
  <BrowserRouter>
    <ContextProvider>
      <Layout>
        <Suspense fallback="">
          <Switch>
            <RestrictedRoute path="/signin" exact component={SignInPage} />
            <RestrictedRoute path="/signup" exact component={SignUpPage} />
            <PublicRoute path="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </Layout>
    </ContextProvider>
  </BrowserRouter>
);

export default Router;
