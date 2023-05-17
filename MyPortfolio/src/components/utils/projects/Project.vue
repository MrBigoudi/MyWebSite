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
    <div class="flex flex-col items-center"> <!-- project container -->
        <div class="w-72 h-72"> <!-- project image -->
            <img :src="image" :alt="alter" />
        </div>
        <div class=""> <!-- project title -->
            {{ name }}
        </div>
        <div class=""> <!-- project description -->

        </div>
        <div class=""> <!-- project links -->

        </div>
    </div>
</template>