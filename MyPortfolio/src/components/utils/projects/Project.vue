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
        md:w-1/3 md:h-full w-4/5 h-96 pt-4 hover:font-bold hover:border-white border-2 border-transparent group
        "> <!-- project container -->
        <div class="w-full h-2/3 px-1"> <!-- project image -->
            <img :src="image?image:`/projects/projectDefault.png`" :alt="alter" />
        </div>

        <div class="flex flex-col items-center text-center h-full mb-4 mt-6">
             <div class="md:text-3xl md:group-hover:text-4xl font-bold mt-6
                        text-2xl group-hover:text-2xl"> <!-- project title -->
                {{ name }}
            </div>
            <div class="md:text-2xl mt-3 md:pb-8
                        text-lg"> <!-- project description -->
                {{ desc }}
            </div>
        </div>
    </a>
</template>