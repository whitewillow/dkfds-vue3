import { createApp } from 'vue';
import DomHelper from '@/plugins/dom-helper';
import App from './App.vue';
import dkfdsvue3 from './main_plugin';
import router from './router';

createApp(App).use(DomHelper).use(router).use(dkfdsvue3)
  .mount('#app');