<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import { getWeatherData } from "./components/api/weather.api";

export default defineComponent({
  async created() {
    // const [error , response] = window.navigator.geolocation.getCurrentPosition(locationSuccess, console.error);
    var response = window.navigator.geolocation.getCurrentPosition(locationSuccess, console.error);

    console.log(response);
  }
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

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
