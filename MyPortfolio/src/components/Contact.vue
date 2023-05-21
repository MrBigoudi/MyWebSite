<script>
  import GithubIcon from '@/components/icons/GithubIcon.vue'
  import TwitterIcon from '@/components/icons/TwitterIcon.vue'
  import InstaIcon from '@/components/icons/InstaIcon.vue'
  import TwitchIcon from '@/components/icons/TwitchIcon.vue'
  export default {
    data() {
      return {
          github: "https://github.com/MrBigoudi",
          twitter: "https://twitter.com/MrBigoudi",
          insta: "https://www.instagram.com/mrbigoudi/",
          twitch: "https://www.twitch.tv/misterbigoudi",
      }
    },
    components: {
      GithubIcon,
      TwitterIcon,
      InstaIcon,
      TwitchIcon,
    }
  }
</script>

<template>
  <section id="contact">
    <div class="flex flex-col items-center mb-48 w-full">

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- section title -->
        <span class="text-light-coral font-bold">Contact</span> me
      </h1>

      <nav class="flex items-center justify-center w-full md:gap-32 gap-24"> <!-- links -->
        <a :href="github">
          <GithubIcon :dim="12"/>
        </a>
        <a :href="twitter">
          <TwitterIcon :dim="12"/>
        </a>
        <a :href="insta">
          <InstaIcon :dim="12"/>
        </a>
        <a :href="twitch">
          <TwitchIcon :dim="12"/>
        </a>
    </nav>
    </div>
  </section>
</template>