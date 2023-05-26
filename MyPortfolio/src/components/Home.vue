<script>
export default {
  data() {
    return {
    }
  },
  props:{
    navHeight: "0px",
  },
}
</script>

<template>
  <section id="home" class="md:pt-48 pt-24 md:mb-96 mb-48" :style="{ marginTop: navHeight }">

    <div class="flex md:flex-row flex-col-reverse justify-center md:gap-32 items-center w-full">


      <div class="flex flex-col items-start md:w-1/2 w-3/4 
         md:mt-24 mt-16 md:pr-12">

        <div class="md:text-8xl text-7xl font-bold md:mb-48 mb-16 self-center">
          Who am <span class="text-light-coral">I</span> ?
        </div>

        <p class="md:text-6xl text-5xl md:mb-24 mb-8 md:text-left text-center">
          My name is <span class="text-light-coral font-bold">Yannis KEDADRY</span>,
        </p>

        <div class="md:text-4xl text-3xl md:text-justify text-3xl">
          <p class="md:mb-12 mb-6">I'm a student from the computer science department
            of the <strong class="text-dark-coral font-bold">École Normale Supérieure</strong> of Paris majoring
            in <strong class="text-dark-coral font-bold">Computer Graphics</strong>.</p>
          <p>Apart from programming I enjoy playing and streaming
            <strong class="text-dark-coral font-bold">video games</strong>, 
            doing a lot of <strong class="text-dark-coral font-bold">sport</strong> and, 
            as a <strong class="text-dark-coral font-bold">vegan</strong>,
            especially love <strong class="text-dark-coral font-bold">nature</strong> and going outside for 
            <strong class="text-dark-coral font-bold">walks</strong></p>
        </div>

      </div>


      <div class="md:w-1/2 w-3/4 flex justify-center">
        <img src="@/assets/homeImage.png" class="h-auto md:w-100" alt="picture of myself" />
      </div>


    </div>

  </section>
</template>