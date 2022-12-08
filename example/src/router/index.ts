import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ekstraKomponenterRoutes from './ekstrakomponenterRoutes';
import komponenterRoutes from './KomponenterRoutes';
import anbefalingerRoutes from './AnbefalingerRoutes';
import boblereRoutes from './BoblereRoutes';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'forside' },
  },
  {
    path: '/forside',
    name: 'forside',
    component: loadView('ForsideView.vue'),
  },
  {
    path: '/anbefalinger',
    name: 'anbefalinger',
    component: loadView('AnbefalingerView.vue'),
  },
  ...komponenterRoutes,
  ...ekstraKomponenterRoutes,
  ...anbefalingerRoutes,
  ...boblereRoutes,
  {
    path: '/about',
    name: 'about',
    component: loadView('AboutView.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'forside' } },
];

const router = createRouter({
  history: createWebHashHistory(
    process.env.NODE_ENV === 'production' ? '/dkfds-vue3-example/' : '/',
  ),
  routes,
  scrollBehavior(to) {
    // , from, savedPosition
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
    return { top: 0 };
  },
});

const DEFAULT_TITLE = '';

router.beforeEach((to, from, next) => {
  document.title = `DKFDS-Vue3 ${to.meta?.title ?? DEFAULT_TITLE}`;
  next();
});

export default router;
