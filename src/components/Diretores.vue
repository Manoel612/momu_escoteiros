<script setup>
    import {ref} from 'vue'
    const items = ref([
    {
        name: "Richardson",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        talk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et asperiores esse veniam velit quos modi vel sed nulla, odit at sint atque tempora! Unde consequuntur soluta quod nihil aliquam.",
        function: "chefe"
    },
    {
        name: "Random",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        talk: "não importa",
        function: "chefe"
    },
    {
        name: "Manoel",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        talk: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et asperiores esse veniam velit quos modi vel sed nulla, odit at sint atque tempora! Unde consequuntur soluta quod nihil aliquam.",
        function: "explorado"
    }
    ])
</script>

<template>
    <div class="bg-grey-lighten-4 d-flex justify-center  mt-16 pt-16 pb-16 pr-16 pl-16">
        <div class="d-flex justify-center flex-wrap ga-8">
            <div v-for="item in items" >
                <v-card class="width-card">
                    <div class="d-flex flex-no-wrap">
                        <v-avatar
                            class="ma-3 d-flex align-self-center"
                            size="125"
                            rounded="1"
                        >
                            <v-img :src="item.picture"></v-img>
                        </v-avatar>
        
                        <div>
                            <v-card-title class="text-h5">
                                {{ item.name }}
                            </v-card-title>
        
                            <v-card-subtitle>
                                {{ item.function }}
                            </v-card-subtitle>
        
                            <v-card-text class="pb-4">
                                <p> {{ item.talk }} </p>
                            </v-card-text>
                        </div>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>

<style scope>
    .width-card{
        width: 535px;
        height: 200px;
    }
    
   /*  @media screen and (max-width: 1150px) {
        .width-card{
            width: 70vw;
        }
    } */
    @media screen and (max-width: 650px) {
        .width-card{
            width: 90vw;
            height: calc(100% - 1vw);
        }
        
    }
</style>