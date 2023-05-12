<script>
  export default {
    data(){
      return {
      }
    },
    props:{
      name: "",
      link: "",
      icon: "",
      focusAuto: false,
    },
    mounted() {
        // console.log("Name prop:", this.name);
        // console.log("Icon prop:", this.icon);
        // console.log("Ref prop:", this.link);

        // autofocus
        if(this.focusAuto){
          // console.log("#" + this.name);
          const element = document.querySelector("#" + this.name);
          element.setAttribute('tabindex', '0');
          element.focus();
        }
    },
    methods: {
      goTo(){
        const targetElement = document.querySelector(this.link);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      },
    },
  }
</script>

<template>
  <a :id="name" :href="link" @click.prevent="goTo" class="flex justify-center scroll-smooth h-full items-center px-4 
    focus:outline-none active:bg-dark-coral focus:bg-dark-coral
    text-light-coral active:text-white focus:text-white">
    <i class="text-white material-icons">{{ icon }}</i>
    <p class="px-2">{{ name }}</p>
  </a>
</template>