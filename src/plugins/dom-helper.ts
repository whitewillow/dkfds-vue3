/* eslint-disable no-param-reassign */
import { App, Plugin, nextTick } from 'vue';

export default {
  install: (app: App) => {
    app.config.globalProperties.$domScrollToElement = async (elementId: string) => {
      await nextTick();
      const elmnt = document.getElementById(elementId);

      if (elmnt) {
        elmnt.scrollIntoView();
      }
    };

    app.config.globalProperties.$domScrollToTop = async () => {
      await nextTick();

      const elmnt = document.getElementById('main');
      if (elmnt) {
        elmnt.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      }
    };
  },
};