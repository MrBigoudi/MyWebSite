<script>
  export default {
    data(){
        return {}
    },
    props:{
      name: "",
      icon: "",
    },
    mounted() {
        // console.log("Name prop:", this.name);
        // console.log("Icon prop:", this.icon);
    },
    };
</script>

<template>
    <div>
        <i :class="icon" :title="name" class="inline-block"></i>
    </div>
</template>