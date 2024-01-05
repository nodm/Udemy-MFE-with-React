import React from 'react';
import * as ReactDOM from 'react-dom';
import { createMemoryHistory,createBrowserHistory } from 'history';
import { App } from './App';

export const mount = (containerElement, { onSignIn, onNavigate, history, initialPath }) => {
  const routerHistory = history ?? createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    routerHistory.listen(onNavigate);
  }

  ReactDOM.render(<App history={routerHistory} onSignIn={onSignIn} />, containerElement);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = routerHistory.location;
      if (pathname !== nextPathname) {
        routerHistory.push(nextPathname);
      }
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const appRoot =  document.getElementById('auth-dev-root');

  if (appRoot) {
    mount(appRoot, { history: createBrowserHistory() });
  }
}
