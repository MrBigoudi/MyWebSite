<template>
    <div class="heatmap" className="pl-4 pr-4">
        <CalendarHeatmap :tooltip="false" :values="heatmapData" :end-date="heatmapEndDate" :range-color="heatmapColors" :max="heatmapMaxCount"/>
  </div>
</template>

<script>
    import CalendarHeatmap from './heatmap/CalendarHeatmap.vue';
    import { fetchHeatmapData } from './github.js'

    export default {
        name: 'GitHubHeatmap',
        components: {
            CalendarHeatmap
        },
        data() {
            return {
                heatmapData: [],
                heatmapEndDate: "",
                heatmapColors: ['#FFFFFF', '#C4C4C4', '#9f7b7a', '#bb7672', '#d47067', '#eb6a59', '#ff6347'],
                heatmapMaxCount: 6,
                username: "mrbigoudi",
            };
        },
        methods: {
            getNow: function() {
                const today = new Date();
                this.heatmapEndDate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            }
        },

        created(){
            this.getNow();
        },

        async mounted(){
            this.heatmapData = await fetchHeatmapData(this.username);
        }

    };
</script>