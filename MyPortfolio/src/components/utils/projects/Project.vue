<script>
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
    }
</script>

<template>
    <div class="flex flex-col items-center justify-around px-0.5 py-5 
        border-white border-s-4 border-b-2 rounded-lg w-1/4 h-128 
        "> <!-- project container -->
        <div class="w-full h-auto px-1"> <!-- project image -->
            <img :src="image" :alt="alter" />
        </div>
        <div class="text-2xl font-bold"> <!-- project title -->
            {{ name }}
        </div>
        <div class=""> <!-- project description -->
            {{ desc }}
        </div>
        <div class=""> <!-- project links -->
            {{ link }}
        </div>
    </div>
</template>