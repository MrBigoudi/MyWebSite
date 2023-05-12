<script>
  import Icon from "@/components/icons/Icon.vue";

  export default {
    data() {
      return {
        showMenu: false,
      }
    },
    components:{
      Icon
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
        this.toogleUpdateSize();
        // console.log('show menu event emmited');
      },
      toogleUpdateSize(){
        this.$emit('updateHeight')
      }
    }
  }
</script>

<template>
  <header id="mainNavBar" class="flex flex-col md:flex-row items-center md:h-16
    font-roboto font-bold text-2xl 
    fixed top-0 left-0 right-0 z-50 
    backdrop-filter backdrop-blur-lg">
    
    <div class="ml-10 text-dark-coral font-bold italic hidden md:block mr-4">
      <a href="#home" @click="toogleUpdateSize" class="scroll-smooth transition ease-in-out duration-1000">
        Yannis.K
      </a>
    </div>

    <nav class="hidden md:flex md:flex-row justify-end gap-0 mr-0 h-full w-full">
      <Icon @click="toogleUpdateSize" name="Home" link="#home" icon="home" class="ml-auto" focusAuto="true"/>
      <Icon @click="toogleUpdateSize" name="About" link="#about" icon="person"/>
      <Icon @click="toogleUpdateSize" name="Projects" link="#projects" icon="storage"/>
      <Icon @click="toogleUpdateSize" name="Resume" link="#resume" icon="description"/>
      <Icon @click="toogleUpdateSize" name="Contact" link="#contact" icon="mark_as_unread"/>
    </nav>

    <button @click="toggleMenu()" class="md:hidden ml-auto mr-4 h-full text-center text-dark-coral
      flex justify-end scroll-smooth h-full items-center px-4 focus:outline-none" >
      <i class="material-icons text-6xl">menu</i>
    </button>

    <nav v-if="showMenu" class="md:hidden flex flex-col justify-evenly items-center gap-3 w-full 
      text-center z-1 backdrop-filter backdrop-blur-lg">
      <Icon @click="toogleUpdateSize" name="Home" link="#home" icon="home" 
        class="w-full px-0"/>
      <Icon @click="toogleUpdateSize" name="About" link="#about" icon="person"
        class="w-full px-0"/>
      <Icon @click="toogleUpdateSize" name="Projects" link="#projects" icon="storage"
        class="w-full px-0"/>
      <Icon @click="toogleUpdateSize" name="Resume" link="#resume" icon="description"
        class="w-full px-0"/>
      <Icon @click="toogleUpdateSize" name="Contact" link="#contact" icon="mark_as_unread"
        class="w-full px-0"/>
    </nav>

  </header>
</template>