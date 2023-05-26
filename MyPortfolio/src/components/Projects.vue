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

      <h1 class="md:text-6xl text-4xl text-center md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral font-bold">Ongoing</span> projects
      </h1>

      <div class="flex flex-row justify-center gap-0 w-full md:h-164 h-128 px-12"> <!-- list of projects -->
        <Project name="Game Engine" link="https://github.com/MrBigoudi/BigoudiEngine" desc="A game engine built from scratch" 
          image="" alter="preview of the game engine"
          class="bg-light-coral"/>
        <Project name="Volcanoe Simulation" link="https://github.com/MrBigoudi/VolcanicEruptionsSimulator" desc="A volcanic erruption simulator implemented in Unity" 
          image="/projects/projectVolcanoes.png" alter="preview of the volcanoe simulation"
          class="bg-dark-coral"/>
        <Project name="Operating System" link="https://git.eleves.ens.fr/rkimbrough/projet-os" desc="A simple os" 
          image="/projects/projectOs.png" alter="preview of the os running"
          class="bg-light-coral"/>
      </div>

    </div>



    <div class="flex flex-col items-center"> <!-- finished projects -->

      <h1 class="md:text-6xl text-4xl text-center md:mb-12 mb-16"> <!-- title of the container -->
        <span class="text-light-coral font-bold">Finished</span> projects
      </h1>

      <div class="flex flex-col"><!-- list of projects -->
        <div class="flex flex-row justify-center gap-0 w-full md:h-164 h-128 px-12"> 
          <Project name="Portfolio" link="https://github.com/MrBigoudi/MyWebSite" desc="My portfolio website" 
            image="/projects/projectWebSite.png" alter="preview of my portfolio"
            class="bg-light-coral"/>
          <Project name="Quad Mesh Simplifyer" link="https://github.com/MrBigoudi/AdaptiveQuadMesh" desc="A quad mesh simplifier" 
            image="/projects/projectQuadMesh.png" alter="preview of the quad mesh simplification"
            class="bg-dark-coral"/>
          <Project name="Ray Caster" link="https://github.com/MrBigoudi/RayCaster" desc="A basic fps ray caster" 
            image="/projects/projectRayCaster.png" alter="preview of the ray caster"
            class="bg-light-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full md:h-164 h-128 px-12"> 
          <Project name="TinyC Compiler" link="https://github.com/MrBigoudi/PetitCCompiler" desc="A c compiler built in OCaml" 
            image="/projects/projectCompiler.png" alter="preview of the compiler"
            class="bg-dark-coral"/>
          <Project name="Microprocessor" link="https://github.com/a-ananas/microprocessor" desc="A microprocessor simulation that goes from logic gates to a working clock" 
            image="/projects/projectMicroProc.png" alter="preview of the microprocessor"
            class="bg-light-coral"/>
          <Project name="Pygames" link="https://github.com/MrBigoudi/PyGames" desc="A serie of tiny games to learn PyGame" 
            image="/projects/projectPygames.png" alter="preview of one of the games"
            class="bg-dark-coral"/>
        </div>
        <div class="flex flex-row justify-center gap-0 w-full md:h-164 h-128 px-12"> 
          <Project name="Vector Images Comparator" link="https://github.com/MrBigoudi/CompareVgImages" desc="A tool built over the learnOcaml platform to correct exercices using images" 
            image="/projects/projectVgImages.png" alter="preview of the learnOcaml interface"
            class="bg-light-coral"/>
          <Project name="Birdy" link="https://github.com/MrBigoudi/Birdy" desc="The front and back ends of a twitter clone" 
            image="/projects/projectBirdy.png" alter="preview of the birdy web site"
            class="bg-dark-coral"/>
          <Project name="Wirelite" link="https://github.com/MrBigoudi/WireLite" desc="A network frame analyzer" 
            image="/projects/projectWireLite.png" alter="preview of the frame analyzer"
            class="bg-light-coral"/>
        </div>
      </div>

    </div>

  </section>
</template>