import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ekstraKomponenterRoutes from "./ekstrakomponenterRoutes";
import komponenterRoutes from "./KomponenterRoutes";
import anbefalingerRoutes from "./AnbefalingerRoutes";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "forside" },
  },
  {
    path: "/forside",
    name: "forside",
    component: () => import("@/views/ForsideView.vue"),
  },
  {
    path: "/anbefalinger",
    name: "anbefalinger",
    component: () => import("@/views/AnbefalingerView.vue"),
  },
  ...komponenterRoutes,
  ...ekstraKomponenterRoutes,
  ...anbefalingerRoutes,
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "forside" } },
];

const router = createRouter({
  history: createWebHashHistory(
    process.env.NODE_ENV === "production" ? "/dkfds-vue3-example/" : "/"
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

const DEFAULT_TITLE = "";

router.beforeEach((to, from, next) => {
  document.title = `DKFDS-Vue3 ${to.meta?.title ?? DEFAULT_TITLE}`;
  next();
});

export default router;
