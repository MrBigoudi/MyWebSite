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
  <section id="projects" class="flex flex-col mb-32"> <!-- projects container -->

    <div class="flex flex-col items-center mb-32"> <!-- ongoing project -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral font-bold">Ongoing</span> projects
      </h1>

      <div class="flex flex-row justify-center gap-0 w-full px-12"> <!-- list of projects -->
        <Project name="engine" link="" desc="A game engine built from scratch" 
          image="/src/assets/projects/projectEngine.png" alter="preview of the game engine"
          class="bg-light-coral"/>
        <Project name="volcanoes" link="" desc="A volcanic erruption simulator implemented in Unity" 
          image="/src/assets/projects/projectVolcanoes.png" alter="preview of the volcanoe simulation"
          class="bg-dark-coral"/>
        <Project name="os" link="" desc="A simple os" 
          image="/src/assets/projects/projectOs.png" alter="preview of the os running"
          class="bg-light-coral"/>
      </div>

    </div>



    <div class="flex flex-col items-center"> <!-- finished projects -->

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral font-bold">Finished</span> projects
      </h1>

      <div class="flex flex-col"><!-- list of projects -->
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="myWebSite" link="" desc="My portfolio website" 
            image="/src/assets/projects/projectWebSite.png" alter="preview of my portfolio"
            class="bg-light-coral"/>
          <Project name="quadmesh" link="" desc="A quad mesh simplifier" 
            image="/src/assets/projects/projectQuadMesh.png" alter="preview of the quad mesh simplification"
            class="bg-dark-coral"/>
          <Project name="raycaster" link="" desc="A basic fps ray caster" 
            image="/src/assets/projects/projectRayCaster.png" alter="preview of the ray caster"
            class="bg-light-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="compiler" link="" desc="A c compiler built in OCaml" 
            image="/src/assets/projects/projectCompiler.png" alter="preview of the compiler"
            class="bg-dark-coral"/>
          <Project name="microproc" link="" desc="A microprocessor simulation that goes from logic gates to a working clock" 
            image="/src/assets/projects/projectMicroProc.png" alter="preview of the microprocessor"
            class="bg-light-coral"/>
          <Project name="pygame" link="" desc="A serie of tiny games to learn PyGame" 
            image="/src/assets/projects/projectPygames.png" alter="preview of one of the games"
            class="bg-dark-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full px-12"> 
          <Project name="comparevgimages" link="" desc="A tool built over the learnOcaml platform to correct exercices using images" 
            image="/src/assets/projects/projectVgImages.png" alter="preview of the learnOcaml interface"
            class="bg-light-coral"/>
          <Project name="birdy" link="" desc="The front and back ends of a twitter clone" 
            image="/src/assets/projects/projectBirdy.png" alter="preview of the birdy web site"
            class="bg-dark-coral"/>
          <Project name="wirelite" link="" desc="A network frame analyzer" 
            image="/src/assets/projects/projectWireLite.png" alter="preview of the frame analyzer"
            class="bg-light-coral"/>
        </div>
      </div>

    </div>

  </section>
</template>