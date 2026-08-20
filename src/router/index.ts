import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/Articles.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  // 使用 hash模式！！规避github pages history路由刷新404大坑，不用搞404.html兼容
  history: createWebHashHistory(),
  routes,
});

export default router;
