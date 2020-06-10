import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute';
import ContextProvider from '../context';
import Layout from '../layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));

const Router = () => (
  <BrowserRouter>
    <ContextProvider>
      <Layout>
        <Suspense fallback="">
          <Switch>
            <PublicRoute to="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Layout>
    </ContextProvider>
  </BrowserRouter>
);

export default Router;
