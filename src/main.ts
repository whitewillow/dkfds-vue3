import { createApp } from 'vue';
import App from './App.vue';
import dkfdsvue3 from './main_plugin';

import router from './router';

createApp(App).use(router).use(dkfdsvue3).mount('#app');