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
  <a :href="icon" className="flex justify-evenly">
    <i class="material-icons">{{ icon }}</i>
    <p>{{ name }}</p>
  </a>
</template>