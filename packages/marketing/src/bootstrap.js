import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

export const mount = (containerElement) => {
  ReactDOM.render(<App />, containerElement);
};

if (process.env.NODE_ENV === 'development') {
  const appRoot =  document.getElementById('marketing-dev-root');

  if (appRoot) {
    mount(appRoot);
  }
}
