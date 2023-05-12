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
  <section id="home" class="pt-24" :style="{ marginTop: navHeight }">

    <div class="flex md:flex-row flex-col-reverse justify-center md:gap-24 items-center w-full">


      <div class="flex flex-col items-start w-1/2 
         mt-24 md:mt-0">

        <div class="md:text-8xl text-6xl font-bold md:mb-7 mb-3">
          Who am <span class="text-light-coral">I</span> ?
        </div>

        <p class="md:text-6xl text-4xl mb-5">My name is <span class="text-light-coral font-bold">Yannis KEDADRY</span></p>

        <div class="md:text-3xl text-justify text-2xl">
          <p class="mb-2.5">I'm a student from the computer science department
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


      <div class="w-1/2 md:w-1/4 flex justify-center">
        <img src="@/assets/homeImage.png" class="h-auto w-100" alt="picture of myself" />
      </div>


    </div>

  </section>
</template>