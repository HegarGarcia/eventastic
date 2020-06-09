import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from '../components/PublicRoute';
import ContextProvider from '../context';

const HomePage = lazy(() => import('../pages/Home'));

const Router = () => (
  <BrowserRouter>
    <ContextProvider>
      <Suspense fallback="">
        <Switch>
          <PublicRoute to="/" component={HomePage} />
        </Switch>
      </Suspense>
    </ContextProvider>
  </BrowserRouter>
);

export default Router;
