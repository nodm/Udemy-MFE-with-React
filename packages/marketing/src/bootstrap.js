import React from 'react';
import * as ReactDOM from 'react-dom';
import { createMemoryHistory,createBrowserHistory } from 'history';
import { App } from './App';

export const mount = (containerElement, { onNavigate, history = createMemoryHistory() }) => {
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, containerElement);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const appRoot =  document.getElementById('marketing-dev-root');

  if (appRoot) {
    mount(appRoot, { history: createBrowserHistory() });
  }
}
