<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getApiKey } from "@/components/api/weather.api";

export default defineComponent ({
    data() {
        return {
            apiKey: getApiKey(),
        }
    },
    async created() {
        const [error, key] = await getApiKey();

        if (error) {
            console.error(error);
        } else {
            this.apiKey = key;
        }
    }
});

onMounted(() => {
    console.log(`Your api key is: apiKey` + this.apiKey);
})

</script>

<template>

    <h1>{{ apiKey }}</h1>

</template>
