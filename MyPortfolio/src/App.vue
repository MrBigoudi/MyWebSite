<script setup>
  import Navbar from "./components/Navbar.vue"
  import Home from "./components/Home.vue"
  import About from "./components/About.vue"
  import Projects from "./components/Projects.vue"
  import Resume from "./components/Resume.vue"
  import Contact from "./components/Contact.vue"
</script>

<template>
  <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Resume />
    <Contact />
  </main>
</template>