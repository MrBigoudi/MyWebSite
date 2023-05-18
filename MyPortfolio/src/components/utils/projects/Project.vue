<script>
    import GithubIcon from '@/components/icons/GithubIcon.vue'

    export default{
        data(){
            return {

            }
        },
        props:{
            name:  "",
            link: "",
            image: "",
            alter:"",
            desc:"",
        },
        components: {
            GithubIcon,
        }
    }
</script>

<template>
    <div class="flex flex-col items-center px-0.5
        w-1/3 h-full pt-4
        "> <!-- project container -->
        <div class="w-full h-2/3 px-1 "> <!-- project image -->
            <img :src="image?image:`/src/assets/projects/canvas.png`" :alt="alter" />
        </div>
        <div class="text-2xl font-bold mt-6"> <!-- project title -->
            {{ name }}
        </div>
        <div class="text-center mt-3"> <!-- project description -->
            {{ desc }}
        </div>
        <div class="mt-auto pb-4 flex items-center justify-evenly"> <!-- project links -->
            <a :href="link">
                <GithubIcon />
            </a>
        </div>
    </div>
</template>