<script setup>
  import Navbar from "./components/Navbar.vue"
  import Home from "./components/Home.vue"
  import About from "./components/About.vue"
  import Projects from "./components/Projects.vue"
  import Resume from "./components/Resume.vue"
  import Contact from "./components/Contact.vue"
  import Footbar from "./components/Footbar.vue"
</script>

<template>
  <main className="h-screen text-white bg-cover bg-japanese-city">
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footbar />
  </main>
</template>