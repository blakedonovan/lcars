import { createRouter, createMemoryHistory } from "vue-router";
import BookingView from "../views/BookComparison.vue";

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "booking",
      component: BookingView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/test",
      name: "test",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TestView.vue"),
    },
  ],
});

export default router;
