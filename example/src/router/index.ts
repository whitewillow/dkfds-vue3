import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ekstraKomponenterRoutes from './ekstrakomponenterRoutes';
import komponenterRoutes from './KomponenterRoutes';

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
    path: '/komponenter',
    name: 'komponenter',
    component: loadView('KomponenterView.vue'),
  },
  {
    path: '/tips',
    name: 'tips',
    component: loadView('TipsView.vue'),
  },
  ...komponenterRoutes,
  ...ekstraKomponenterRoutes,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
