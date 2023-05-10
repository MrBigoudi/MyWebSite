<script>
  import GitHubHeatmap from '@/components/utils/GitHubHeatmap.vue';
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
  <section id="about" className="flex flex-col items-center">
    <div className="flex flex-col items-center justify-evenly mt-64">
      <p className="text-4xl mb-2.5">
        Professional <strong className="text-dark-coral font-bold">Skillset</strong>
      </p>
      <div className="flex flex-col items-center justify-evenly gap-8 p-8">
        <div className="flex items-center justify-evenly gap-16">
          <ProgrammingLanguageIcon name="c" icon="devicon-c-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="c++" icon="devicon-cplusplus-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="c#" icon="devicon-csharp-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="python" icon="devicon-python-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="lua" icon="devicon-lua-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="ocaml" icon="devicon-ocaml-plain" className="text-8xl" />
        </div>
        <div className="flex items-center justify-evenly gap-16">
          <ProgrammingLanguageIcon name="html" icon="devicon-html5-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="css" icon="devicon-css3-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="javascript" icon="devicon-javascript-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="vuejs" icon="devicon-vuejs-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="react" icon="devicon-react-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="java" icon="devicon-java-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="tailwind css" icon="devicon-tailwindcss-plain" className="text-8xl" />
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-evenly mt-24">
      <p className="text-4xl mb-2.5">
        <strong className="text-dark-coral font-bold">Tools</strong> I use
      </p>
      <div className="flex flex-col items-center justify-evenly gap-8 p-8">
        <div className="flex items-center justify-evenly gap-16">
          <ProgrammingLanguageIcon name="linux" icon="devicon-linux-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="bash" icon="devicon-bash-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="vim" icon="devicon-vim-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="markdown" icon="devicon-markdown-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="latex" icon="devicon-latex-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="vscode" icon="devicon-vscode-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="github" icon="devicon-github-plain" className="text-8xl" />
        </div>
        <div className="flex items-center justify-evenly gap-16">
          <ProgrammingLanguageIcon name="blender" icon="devicon-blender-original" className="text-8xl" />
          <ProgrammingLanguageIcon name="unity" icon="devicon-unity-original" className="text-8xl" />
          <ProgrammingLanguageIcon name="godot" icon="devicon-godot-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="opengl" icon="devicon-opengl-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="sdl" icon="devicon-sdl-plain" className="text-8xl" />
          <ProgrammingLanguageIcon name="qt" icon="devicon-qt-original" className="text-8xl" />
        </div>
      </div>
    </div>

    <div className="w-3/4 mt-32 flex flex-col justify-evenly items-center">
      <p className="text-4xl mb-8">
        My <strong className="text-dark-coral font-bold">Github</strong> Contributions
      </p>
      <div className="w-full">
        <GitHubHeatmap />
      </div>
    </div>
  </section>
</template>