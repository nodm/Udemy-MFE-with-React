import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export const mount = (containerElement) => {
  const app = createApp(Dashboard);

  app.mount(containerElement);
};

if (process.env.NODE_ENV === 'development') {
  const appRoot =  document.getElementById('dashboard-dev-root');

  if (appRoot) {
    mount(appRoot);
  }
}
