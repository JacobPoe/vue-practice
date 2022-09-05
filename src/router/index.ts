import { createRouter, createWebHistory } from "vue-router";
import Weather from "../components/Weather.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/weather"
    },
    {
      path: "/weather",
      name: "weather",
      component: Weather
    }
  ],
});

export default router;
