import { RouteRecordRaw } from "vue-router";

const boblereRoutes: Array<RouteRecordRaw> = [
  {
    path: "/boblere",
    name: "boblere",
    component: () => import("@/views/BoblereView.vue"),
    redirect: { path: "/boblere/forside" },
    children: [
      {
        path: "forside",
        name: "boblere-forside",
        component: () => import("@/views/Boblere/ForsideView.vue"),
      },
      {
        path: "range",
        name: "boblere-range",
        component: () => import("@/views/Boblere/RangeView.vue"),
      },
    ],
  },
];

export default boblereRoutes;
