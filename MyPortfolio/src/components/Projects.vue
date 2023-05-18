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

    <div class="flex flex-col items-center"> <!-- ongoing project -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral">Ongoing</span> projects
      </h1>

      <div class="flex flex-row justify-evenly gap-5 w-full"> <!-- list of projects -->
        <Project name="engine" link="" desc="" image="" alter=""/>
        <Project name="volcanoes" link="" desc="" image="/src/assets/projects/projectVolcanoes.png" alter="preview of the volcanoe simulation"/>
        <Project name="myWebSite" link="" desc="" image="" alter=""/>
      </div>

    </div>



    <div class="flex flex-col items-center"> <!-- finished projects -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral">Finished</span> projects
      </h1>

      <div class="flex flex-row justify-evenly"> <!-- list of projects -->
        <Project name="quadmesh" link="" desc="" image="" alter=""/>
        <Project name="raycaster" link="" desc="" image="" alter=""/>
        <Project name="compiler" link="" desc="" image="" alter=""/>
        <Project name="microproc" link="" desc="" image="" alter=""/>
        <Project name="pygame" link="" desc="" image="" alter=""/>
        <Project name="comparevgimages" link="" desc="" image="" alter=""/>
        <Project name="birdy" link="" desc="" image="" alter=""/>
        <Project name="wirelite" link="" desc="" image="" alter=""/>
      </div>

    </div>

  </section>
</template>