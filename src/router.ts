import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./pages/Home.vue") },
    { path: "/about", component: () => import("./pages/About.vue") },
    { path: "/work", component: () => import("./pages/Work.vue") },
    { path: "/blog", component: () => import("./pages/Blog.vue") },
  ],
})