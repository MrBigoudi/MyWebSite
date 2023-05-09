<template>
    <div class="heatmap">
        <Vue3CalendarHeatmap :values="heatmapData" />
  </div>
</template>

<script>
    import Vue3CalendarHeatmap from 'vue3-calendar-heatmap';

    export default {
        name: 'GitHubHeatmap',
        components: {
            Vue3CalendarHeatmap
        },
        data() {
            return {
                heatmapData: [{ date: "2021-01-01", count: 0 }],
                heatmapColors: ['#3b1610', '#67271e', '#973a2c', '#ca4e39', '#ff6347'],
                username: "mrbigoudi",
            };
        }
    };
</script>