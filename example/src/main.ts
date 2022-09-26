import { createApp } from 'vue';
import dkfdsvue3 from 'dkfds-vue3';
import App from './App.vue';
import router from './router';
import store from './store';

import FdsXtndNavItemRoute from './components/fds-xtnd-nav-item-route.vue';

const app = createApp(App);

app
  .use(store)
  .use(router)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .use(dkfdsvue3 as any)
  .component('fds-xtnd-nav-item-route', FdsXtndNavItemRoute)
  .mount('#app');
