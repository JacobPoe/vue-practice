<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getWeatherForecast } from "@/components/api/weather.api";

export default defineComponent ({
    data() {
        return {
            forecast: ''
        }
    },
    async created() {
        const [error, forecast] = await getWeatherForecast();

        if (error) {
            console.error(error);
        } else {
            this.forecast = forecast;
        }
    }
});

</script>

<template>

    <h1>{{ forecast }}</h1>

</template>
