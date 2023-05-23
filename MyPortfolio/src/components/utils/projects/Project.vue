<script>
    import GithubIcon from '@/components/icons/linksIcon/GithubIcon.vue'

    export default{
        data(){
            return {

            }
        },
        props:{
            name: "",
            link: "",
            image:"",
            alter:"",
            desc: "",
        },
        components: {
            GithubIcon,
        }
    }
</script>

<template>
    <a :href="link" class="flex flex-col items-center px-0.5 text-center
        w-1/3 h-128 pt-4 hover:font-bold hover:border-white border-2 border-transparent group
        "> <!-- project container -->
        <div class="w-full h-2/3 px-1"> <!-- project image -->
            <img :src="image?image:`/src/assets/projects/projectDefault.png`" :alt="alter" />
        </div>

        <div class="flex flex-col items-center text-center h-full mb-4">
             <div class="text-3xl group-hover:text-4xl font-bold mt-6"> <!-- project title -->
                {{ name }}
            </div>
            <div class="text-2xl mt-3 pb-8"> <!-- project description -->
                {{ desc }}
            </div>
        </div>
    </a>
</template>