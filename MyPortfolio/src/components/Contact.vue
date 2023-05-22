<script>
  import GithubIconBig from '@/components/icons/linksIcon/GithubIconBig.vue'
  import TwitterIconBig from '@/components/icons/linksIcon/TwitterIconBig.vue'
  import InstaIconBig from '@/components/icons/linksIcon/InstaIconBig.vue'
  import TwitchIconBig from '@/components/icons/linksIcon/TwitchIconBig.vue'
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
      GithubIconBig,
      TwitterIconBig,
      InstaIconBig,
      TwitchIconBig,
    }
  }
</script>

<template>
  <section id="contact">
    <div class="flex flex-col items-center mb-48 w-full">

      <h1 class="text-6xl md:mb-12 mb-16"> <!-- section title -->
        <span class="text-light-coral font-bold">Contact</span> me
      </h1>

      <nav class="flex md:flex-row flex-col items-center justify-center w-full md:gap-0 gap-12"> <!-- links -->

        <div class="flex items-center md:w-1/2 w-full md:justify-end justify-center md:gap-8 md:pr-24">

          <a :href="github" 
            class="group hover:text-dark-coral w-2/5">
            <div class="flex items-center gap-4 md:justify-end justify-center">
              <GithubIconBig />
              <h2 class="text-3xl text-light-coral group-hover:text-dark-coral group-hover:font-bold">Github</h2>
            </div>
          </a>

          <a :href="twitter" 
            class="group hover:text-dark-coral w-2/5">
            <div class="flex items-center gap-4 md:justify-end justify-center">
              <TwitterIconBig />
              <h2 class="text-3xl text-light-coral group-hover:text-dark-coral group-hover:font-bold">Twitter</h2>
            </div>
          </a>
          
        </div>

        <div class="flex items-center md:w-1/2 w-full md:justify-start justify-center md:gap-8 md:pl-24">

          <a :href="insta" 
            class="group hover:text-dark-coral w-2/5">
            <div class="flex items-center gap-4 md:justify-start justify-center">
              <InstaIconBig />
              <h2 class="text-3xl text-light-coral group-hover:text-dark-coral group-hover:font-bold">Instagram</h2>
            </div>
          </a>

          <a :href="twitch" 
            class="group hover:text-dark-coral w-2/5">
            <div class="flex items-center gap-4 md:justify-start justify-center">
              <TwitchIconBig />
              <h2 class="text-3xl text-light-coral group-hover:text-dark-coral group-hover:font-bold">Twitch</h2>
            </div>
          </a>

        </div>
      </nav>
    </div>
  </section>
</template>