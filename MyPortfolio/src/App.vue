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
  <main class="flex flex-col m-0 h-screen text-white overflow-y-auto
        bg-japanese-city bg-cover bg-center bg-no-repeat">
    <Navbar @update-height="getNavBarHeight" />
    <Home :nav-height="navHeight"/>
    <About class="pt-16" />
    <Projects class="pt-16 md:mb-48 mb-32" />
    <Resume class="pt-16" />
    <Contact class="pt-16" />
    <Footbar />
  </main>
</template>