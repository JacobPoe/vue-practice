import ForecastVue from "@/components/Forecast.vue";
import History from "@/components/History.vue";

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
      path: "/history",
      name: "history",
      component: History
    }
  ],
});

export default router;
