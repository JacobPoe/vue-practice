<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import { getApiKey, getWeatherData } from "@/components/api/weather.api";

import Weather from "./components/Weather.vue";

export default defineComponent({
    async created() {
        // const [error , response] = window.navigator.geolocation.getCurrentPosition(locationSuccess, console.error);
        var response = window.navigator.geolocation.getCurrentPosition(locationSuccess, console.error);
        console.log(response);
    },
    components: { Weather }
});

async function locationSuccess(pos: any) {
  var coords = pos.coords;

  return await getWeatherData(coords.latitude, coords.longitude);
}

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
        <RouterLink to="/history">History</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
