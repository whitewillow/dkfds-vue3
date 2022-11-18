import { createApp } from "vue";
import dkfdsvue3 from "dkfds-vue3";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router).use(dkfdsvue3 as any);

app.mount("#app");
