import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute';
import RestrictedRoute from '../components/RestrictedRoute';
import ContextProvider from '../context';
import Layout from '../layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const SignInPage = lazy(() => import('../pages/SignIn'));

const Router = () => (
  <BrowserRouter>
    <ContextProvider>
      <Layout>
        <Suspense fallback="">
          <Switch>
            <RestrictedRoute to="/signin" exact component={SignInPage} />
            <PublicRoute to="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </Layout>
    </ContextProvider>
  </BrowserRouter>
);

export default Router;
