<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<template>
  <section id="resume" class="flex flex-col justify-center items-center mb-48">
    <p className="text-6xl text-center md:mb-4 mb-8">
        My <strong className="text-light-coral font-bold">Resume</strong>
    </p>
    <p className="text-2xl text-center md:mb-8 mb-16">
      (Download the
      <a href="/pdfs/resume.pdf" download 
        class="text-dark-coral italic hover:text-light-coral hover:underline active:underline active:text-light-coral">
      pdf</a>
      version)
    </p>
    <img src="@/assets/resume.png" class="h-auto w-4/5 rounded-3xl" alt="my resume" />
  </section>
</template>