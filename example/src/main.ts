import { createApp } from 'vue';
import dkfdsvue3 from 'dkfds-vue3';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(dkfdsvue3 as any)

  .mount('#app');
