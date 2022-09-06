<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue';
    import { getWeatherStats } from "@/components/api/weather.api";
    
    export default defineComponent ({
        data() {
            return {
                stats: ''
            }
        },
        async created() {
            const [error, stats] = await getWeatherStats();
    
            if (error) {
                console.error(error);
            } else {
                this.stats = stats;
            }
        }
    });
    
    </script>
    
    <template>
    
        <h1>{{ stats }}</h1>
    
    </template>
    