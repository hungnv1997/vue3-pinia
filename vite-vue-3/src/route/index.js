import { createWebHistory, createRouter } from "vue-router";

import main from "../layouts/main.vue";
import blank from "../layouts/blank.vue";
import Home from "../pages/Home.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/Home.vue"),
    // component: Home,
    meta: {
      layout: main,
    },
  },
  {
    path: "/login",
    name: "add",
    component: () => import("../pages/Login.vue"),
    meta: {
      layout: blank,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
