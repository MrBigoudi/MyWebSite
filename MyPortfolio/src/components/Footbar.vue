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
  <footer className="bottom-0 w-full flex justify-between items-center 
    py-5 bg-black italic">

    <div className="ml-10">
      Designed and Developed by Yannis Kedadry
    </div>

    <div className="">
        Copyright &copy; 2023 <span className="not-italic">YK</span>
    </div>

    <nav className="self-end flex items-center mr-10 gap-4">
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