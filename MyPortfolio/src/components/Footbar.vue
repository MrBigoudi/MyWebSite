<script>
export default {
  data() {
    return {
        github: "https://github.com/MrBigoudi",
        twitter: "https://twitter.com/home",
        insta: "https://www.instagram.com/mrbigoudi/",
        twitch: "https://www.twitch.tv/misterbigoudi",
    }
  }
}
</script>

<template>
  <header id="footbar">

    <div class="name">
      Made by me
    </div>

    <div class="copyrights">
        Copyrights
    </div>

    <nav>
      <a :href="github">
        Github logo
      </a>
      <a :href="twitter">
        Twitter logo
      </a>
      <a :href="insta">
        Insta logo
      </a>
      <a :href="twitch">
        Twitch logo
      </a>
    </nav>

  </header>
</template>