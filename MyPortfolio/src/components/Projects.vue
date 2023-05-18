<script>
  import Project from "@/components/utils/projects/Project.vue";

  export default {
    components:{
      Project,
    },
    data() {
      return {
      }
    }
  }
</script>

<template>
  <section id="projects" class="flex flex-col"> <!-- projects container -->

    <div class="flex flex-col items-center mb-32"> <!-- ongoing project -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral">Ongoing</span> projects
      </h1>

      <div class="flex flex-row justify-center gap-0 w-full px-12"> <!-- list of projects -->
        <Project name="engine" link="" desc="" 
          image="" alter=""
          class="bg-light-coral"/>
        <Project name="volcanoes" link="" desc="A volcanic erruption simulator implemented in Unity" 
          image="/src/assets/projects/projectVolcanoes.png" alter="preview of the volcanoe simulation"
          class="bg-dark-coral"/>
        <Project name="os" link="" desc="" 
          image="" alter=""
          class="bg-light-coral"/>
      </div>

    </div>



    <div class="flex flex-col items-center"> <!-- finished projects -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral">Finished</span> projects
      </h1>

      <div class="flex flex-col"><!-- list of projects -->
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="myWebSite" link="" desc="" 
            image="" alter=""
            class="bg-light-coral"/>
          <Project name="quadmesh" link="" desc="" 
            image="" alter=""
            class="bg-dark-coral"/>
          <Project name="raycaster" link="" desc="" 
            image="" alter=""
            class="bg-light-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="compiler" link="" desc="" 
            image="" alter=""
            class="bg-dark-coral"/>
          <Project name="microproc" link="" desc="" 
            image="" alter=""
            class="bg-light-coral"/>
          <Project name="pygame" link="" desc="" 
            image="" alter=""
            class="bg-dark-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="comparevgimages" link="" desc="" 
            image="" alter=""
            class="bg-light-coral"/>
          <Project name="birdy" link="" desc="" 
            image="" alter=""
            class="bg-dark-coral"/>
          <Project name="wirelite" link="" desc="" 
            image="" alter=""
            class="bg-light-coral"/>
        </div>
      </div>

    </div>

  </section>
</template>