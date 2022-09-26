import { RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}
function loadExtraView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/Anbefalinger/${view}`);
}

const anbefalingerRoutes: Array<RouteRecordRaw> = [
  {
    path: '/anbefalinger',
    name: 'anbefalinger',
    component: loadView('AnbefalingerView.vue'),
    redirect: { path: '/anbefalinger/forside' },
    children: [
      {
        path: 'forside',
        name: 'anbefalingerforside',
        component: loadExtraView('ForsideView.vue'),
      },
      {
        path: 'navigation',
        name: 'anbefalingernavigation',
        component: loadExtraView('NavigationView.vue'),
      },
    ],
  },
];

export default anbefalingerRoutes;
