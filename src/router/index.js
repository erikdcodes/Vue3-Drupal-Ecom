import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:category/:slug/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/:category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
