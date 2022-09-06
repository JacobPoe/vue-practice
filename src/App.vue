<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import { getApiKey, getWeatherData } from "@/components/api/weather.api";

import Weather from "./components/Weather.vue";

export default defineComponent({
    components: { Weather }
});

</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <Weather />
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/forecast">Forecast</RouterLink>
        <RouterLink to="/stats">Statistical Data</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
