import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'forside' },
  },
  {
    path: '/forside',
    name: 'forside',
    component: () => import(/* webpackChunkName: "forside" */ '../views/ForsideView.vue'),
  },
  {
    path: '/komponenter',
    name: 'komponenter',
    component: () => import(/* webpackChunkName: "komponenter" */ '../views/KomponenterView.vue'),
  },
  {
    path: '/ekstrakomponenter',
    name: 'xtrakomponenter',
    component: () => import(/* webpackChunkName: "xtrakomponenter" */ '../views/EkstraKomponenterView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
