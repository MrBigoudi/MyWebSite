<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
    <section id="home" className="pt-72">
      <div className="flex items-center w-full pl-72">
        <div className="flex flex-col items-start pr-72">
          <div className="text-8xl font-bold mb-7">
            Who am <span className="text-light-coral">I</span> ?
          </div>
          <div className="text-3xl text-justify">
            <p className="text-6xl mb-5">My name is <span className="text-light-coral font-bold">Yannis KEDADRY</span></p>
            <p className="mb-2.5">I'm a student from the computer science department<br/> 
              of the <strong className="text-dark-coral font-bold">École Normale Supérieure</strong> of Paris majoring<br/>
              in <strong className="text-dark-coral font-bold">Computer Graphics</strong>.</p>
            <p>Apart from programming I enjoy playing and streaming<br/>
              <strong className="text-dark-coral font-bold">video games</strong>, 
              doing a lot of <strong className="text-dark-coral font-bold">sport</strong> and, 
              as a <strong className="text-dark-coral font-bold">vegan</strong>, I<br/>
              especially love <strong className="text-dark-coral font-bold">nature</strong> and going outside for 
              <strong className="text-dark-coral font-bold">walks</strong></p>
          </div>
        </div>
        <div className="mr-72">
          <img src="@/assets/homeImage.png" width="300" height="300" alt="picture of myself" />
        </div>
      </div>
    </section>
  </template>