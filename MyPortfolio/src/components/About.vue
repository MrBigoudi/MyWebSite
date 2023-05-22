<script>
  import GitHubHeatmap from '@/components/utils/heatmap/GitHubHeatmap.vue';
  import ProgrammingLanguageIcon from './icons/ProgrammingLanguageIcon.vue';

  export default {
    components: {
      GitHubHeatmap,
      ProgrammingLanguageIcon,
    },
    data() {
      return {
      };
    },
};
</script>

<template>
  <section id="about" class="flex flex-col items-center md:mb-128 mb-48">
    <div class="flex flex-col items-center justify-evenly">
      <p class="text-6xl md:mb-2.5 mb-16">
        Professional <strong class="text-light-coral font-bold">Skillset</strong>
      </p>
      <div class="md:text-12xl text-10xl flex flex-col items-center justify-evenly md:gap-8 md:p-8">
        <div class="flex md:flex-row flex-col items-center justify-evenly md:gap-16">
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="c" icon="devicon-c-plain" />
            <ProgrammingLanguageIcon name="c++" icon="devicon-cplusplus-plain" />
            <ProgrammingLanguageIcon name="c#" icon="devicon-csharp-plain" />
          </div>
          <div class="flex items-center justify-evenly md:gap-16 gap-32">
            <ProgrammingLanguageIcon name="python" icon="devicon-python-plain" />
            <ProgrammingLanguageIcon name="lua" icon="devicon-lua-plain" />
            <ProgrammingLanguageIcon name="ocaml" icon="devicon-ocaml-plain" />
          </div>
        </div>
        <div class="flex md:flex-row flex-col items-center justify-evenly md:gap-16">
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="html" icon="devicon-html5-plain" />
            <ProgrammingLanguageIcon name="css" icon="devicon-css3-plain" />
            <ProgrammingLanguageIcon name="javascript" icon="devicon-javascript-plain" />
          </div>
          <div class="flex items-center justify-evenly md:gap-16 gap-32">
            <ProgrammingLanguageIcon name="vuejs" icon="devicon-vuejs-plain" />
            <ProgrammingLanguageIcon name="react" icon="devicon-react-plain" />
            <ProgrammingLanguageIcon name="java" icon="devicon-java-plain" />
          </div>
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="tailwind css" icon="devicon-tailwindcss-plain" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-evenly md:mt-64 mt-48">
      <p class="text-6xl md:mb-2.5 mb-12">
        <strong class="text-light-coral font-bold">Tools</strong> I use
      </p>

      <div class="md:text-12xl text-10xl flex flex-col items-center justify-evenly md:gap-8 md:p-8">
        <div class="flex md:flex-row flex-col items-center justify-evenly md:gap-16">
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="linux" icon="devicon-linux-plain" />
          </div>
          <div class="flex items-center justify-evenly md:gap-16 gap-32">
            <ProgrammingLanguageIcon name="bash" icon="devicon-bash-plain" />
            <ProgrammingLanguageIcon name="vim" icon="devicon-vim-plain" />
            <ProgrammingLanguageIcon name="markdown" icon="devicon-markdown-plain" />
          </div>
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="latex" icon="devicon-latex-plain" />
            <ProgrammingLanguageIcon name="vscode" icon="devicon-vscode-plain" />
            <ProgrammingLanguageIcon name="github" icon="devicon-github-plain" />
          </div>
        </div>
        <div class="flex md:flex-row flex-col items-center justify-evenly md:gap-16">
          <div class="flex items-center justify-evenly md:gap-16 gap-32">
            <ProgrammingLanguageIcon name="blender" icon="devicon-blender-original" />
            <ProgrammingLanguageIcon name="unity" icon="devicon-unity-original" />
            <ProgrammingLanguageIcon name="godot" icon="devicon-godot-plain" />
          </div>
          <div class="flex items-center justify-evenly gap-16">
            <ProgrammingLanguageIcon name="opengl" icon="devicon-opengl-plain" />
            <ProgrammingLanguageIcon name="sdl" icon="devicon-sdl-plain" />
            <ProgrammingLanguageIcon name="qt" icon="devicon-qt-original" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:mt-64 mt-48 flex flex-col justify-evenly items-center">
      <p class="text-6xl text-center md:mb-24 mb-16 w-3/4">
        My <strong class="text-light-coral font-bold">Github</strong> Contributions
      </p>

      <div class="w-full md:px-32 px-8">
        <GitHubHeatmap />
      </div>

    </div>
  </section>
</template>