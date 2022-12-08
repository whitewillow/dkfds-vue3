import { RouteRecordRaw } from 'vue-router';

function loadBoblerView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/Boblere/${view}`);
}

const anbefalingerRoutes: Array<RouteRecordRaw> = [
  {
    path: '/boblere',
    name: 'boblere',
    redirect: { path: '/boblere/forside' },
    children: [
      {
        path: 'forside',
        name: 'bobler-forside',
        component: loadBoblerView('ForsideView.vue'),
      },
      {
        path: 'navigation',
        name: 'bobler-range',
        component: loadBoblerView('RangeView.vue'),
      },
    ],
  },
];

export default anbefalingerRoutes;
