<script>
  import Icon from "@/components/icons/Icon.vue";
  export default {
    data() {
      return {
      }
    },
    components:{
      Icon
    }
  }
</script>

<template>
  <header id="navbar">
    <div className="flex justify-around pt-3 pb-3 font-roboto font-bold text-2xl items-center
        fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg">

      <div class="logo" className="ml-10 mr-auto">
        <a href="#about">
          <img src="@/assets/logoMrBigoudi.png" width="50" height="50" alt="logo MrBigoudi" />
        </a>
      </div>

      <nav className="flex justify-end gap-12 mr-24">
        <Icon name="Home" ref="#home" icon="home"/>
        <Icon name="About" ref="#about" icon="person"/>
        <Icon name="Projects" ref="#projects" icon="storage"/>
        <Icon name="Resume" ref="#resume" icon="description"/>
        <Icon name="Contact" ref="#contact" icon="mark_as_unread"/>
      </nav>
    
    </div>

  </header>
</template>