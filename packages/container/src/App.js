import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Header } from './components/Header';
import { Progress } from './components/Progress';

const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

export const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);
  };

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={handleSignIn} />
            </Route>
            <Route path="/dashboard">
              {isSignedIn ? <DashboardApp /> : <Redirect to="/" />}
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};