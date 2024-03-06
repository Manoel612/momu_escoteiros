<script setup>
    import {ref} from 'vue'
    const items = ref([
    {
        name: "Richardson",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        talk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et asperiores esse veniam velit quos modi vel sed nulla, odit at sint atque tempora! Unde consequuntur soluta quod nihil aliquam.",
        function: "chefe"
    }
    ])
    const icons = ref([
        {
            icon: 'mdi-facebook',
            link: "https://www.youtube.com/"
        },
        {
            icon: 'mdi-twitter',
            link: "https://www.youtube.com/"
        },
        {
            icon: 'mdi-linkedin',
            link: "https://www.youtube.com/"
        },
        {
            icon: 'mdi-instagram',
            link: "https://www.youtube.com/"
        }
    ])
      
</script>

<template>
    <v-footer class=" bg-green-lighten-5 d-flex flex-column ga-4 pt-4 pb-4">
        <div class=" d-flex justify-space-around w-100">
            <div>
                <h1 class="text-h6 text-grey-darken-2">Unidade de escoteira</h1>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
            </div>
            <div>
                <h1 class="text-h6 text-grey-darken-2">Unidade de escoteira</h1>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
                <a href="" class="text-body-2 text-grey-darken-2">Perguntas Frequentes</a>
            </div>
        </div>
        <div class="d-flex justify-center w-100">
            <a class="text-grey-darken-1" v-for="icon in icons" :href="icon.link" >
                <v-btn
                    :icon="icon.icon"
                    class="mx-4"
                    variant="text"
                ></v-btn>
            </a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </v-footer>
</template>

<style scope>
    a{
        text-decoration: none;
    }
</style>