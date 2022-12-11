import { RouteRecordRaw } from "vue-router";

const anbefalingerRoutes: Array<RouteRecordRaw> = [
  {
    path: "/anbefalinger",
    name: "anbefalinger",
    component: () => import("@/views/AnbefalingerView.vue"),
    redirect: { path: "/anbefalinger/forside" },
    children: [
      {
        path: "forside",
        name: "anbefalingerforside",
        component: () => import("@/views/Anbefalinger/ForsideView.vue"),
      },
      {
        path: "navigation",
        name: "anbefalingernavigation",
        component: () => import("@/views/Anbefalinger/NavigationView.vue"),
      },
    ],
  },
];

export default anbefalingerRoutes;
