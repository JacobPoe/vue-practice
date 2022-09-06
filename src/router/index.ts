import ForecastVue from "@/components/Forecast.vue";
import Stats from "@/components/Stats.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/forecast"
    },
    {
      path: "/forecast",
      name: "forecast",
      component: ForecastVue
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats
    }
  ],
});

export default router;
