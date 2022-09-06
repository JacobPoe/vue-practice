<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getWeatherData } from "@/components/api/weather.api";

export default defineComponent ({
    data() {
        return {
            apiKey: '',
            weather: ''
        }
    },
    async created() {
        const [error, weather] = await getWeatherData();

        if (error) {
            console.error(error);
        } else {
            this.weather = weather;
        }
    }
});

</script>

<template>

    <h1>{{ weather }}</h1>

</template>
