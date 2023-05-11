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
    <div class="flex items-center w-full pl-72">
      <div class="flex flex-col items-start pr-72">
        <div class="text-8xl font-bold mb-7">
          Who am <span class="text-light-coral">I</span> ?
        </div>
        <div class="text-3xl text-justify">
          <p class="text-6xl mb-5">My name is <span class="text-light-coral font-bold">Yannis KEDADRY</span></p>
          <p class="mb-2.5">I'm a student from the computer science department<br/> 
            of the <strong class="text-dark-coral font-bold">École Normale Supérieure</strong> of Paris majoring<br/>
            in <strong class="text-dark-coral font-bold">Computer Graphics</strong>.</p>
          <p>Apart from programming I enjoy playing and streaming<br/>
            <strong class="text-dark-coral font-bold">video games</strong>, 
            doing a lot of <strong class="text-dark-coral font-bold">sport</strong> and, 
            as a <strong class="text-dark-coral font-bold">vegan</strong>, I<br/>
            especially love <strong class="text-dark-coral font-bold">nature</strong> and going outside for 
            <strong class="text-dark-coral font-bold">walks</strong></p>
        </div>
      </div>
      <div class="mr-72">
        <img src="@/assets/homeImage.png" width="300" height="300" alt="picture of myself" />
      </div>
    </div>
  </section>
</template>