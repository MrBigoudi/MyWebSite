<script>
  import GithubIcon from '@/components/icons/linksIcon/GithubIcon.vue'
  import TwitterIcon from '@/components/icons/linksIcon/TwitterIcon.vue'
  import InstaIcon from '@/components/icons/linksIcon/InstaIcon.vue'
  import TwitchIcon from '@/components/icons/linksIcon/TwitchIcon.vue'
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
  <footer class="bottom-0 w-full flex justify-between items-center py-5 bg-black italic">

    <div class="ml-10">
      Designed and Developed <br class="md:hidden"/> by Yannis Kedadry
    </div>

    <div class="">
        Copyright &copy; 2023 <span class="not-italic">YK</span>
    </div>

    <nav class="flex items-center mr-10 gap-4">
      <a :href="github">
        <GithubIcon />
      </a>
      <a :href="twitter">
        <TwitterIcon />
      </a>
      <a :href="insta">
        <InstaIcon />
      </a>
      <a :href="twitch">
        <TwitchIcon />
      </a>
    </nav>

  </footer>
</template>