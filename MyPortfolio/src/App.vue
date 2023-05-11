<script>
  import Navbar from "@/components/Navbar.vue"
  import Home from "@/components/Home.vue"
  import About from "@/components/About.vue"
  import Projects from "@/components/Projects.vue"
  import Resume from "@/components/Resume.vue"
  import Contact from "@/components/Contact.vue"
  import Footbar from "@/components/Footbar.vue"

  export default{
    components:{
      Navbar,
      Home,
      About,
      Projects,
      Resume,
      Contact,
      Footbar
    },
    data() {
      return{
        navHeight: "0px",
      }
    },
    
    methods: {
      getNavBarHeight(){
        this.$nextTick(async () => {
        const height = document.getElementById('mainNavBar').offsetHeight;
        this.navHeight = `${height}px`;
        // console.log(`height changed: ${this.navHeight}`)
      });        
      }
    }
  }
</script>

<template>
  <main class="m-0 h-screen text-white bg-cover bg-japanese-city bg-fixed bg-center overflow-y-auto">
    <Navbar @update-height="getNavBarHeight" />
    <Home :nav-height="navHeight"/>
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footbar />
  </main>
</template>