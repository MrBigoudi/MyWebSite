<script>
  export default {
    props:{
      name: "",
      icon: ""
    }
  }
</script>

<template>
    <div className="border-4" >
        <i :class="icon"></i>
    </div>
</template>