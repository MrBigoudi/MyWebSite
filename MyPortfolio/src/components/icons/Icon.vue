<script>
  export default {
    props:{
      name: "",
      ref: "",
      icon: "",
    }
  }
</script>

<template>
  <a :href="icon" className="flex justify-evenly scroll-smooth transition ease-in-out duration-1000">
    <i class="material-icons">{{ icon }}</i>
    <p>{{ name }}</p>
  </a>
</template>