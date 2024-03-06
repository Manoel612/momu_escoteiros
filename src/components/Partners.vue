<script setup>
    import {ref} from 'vue'
    const items = ref([
    {
        name: "Richardson",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
    },
    {
        name: "Random",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    },
    {
        name: "Manoel",
        picture: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    }
    ])
</script>

<template>
    <div class="d-flex justify-space-around mt-6 bg-green-lighten-5 pt-6">
        <div v-for="item in items" >
            <div class="d-flex justify-center flex-column">
                <div class="d-flex justify-center">
                    <v-img
                        :src="item.picture"
                        :height="50"
                        :width="50"
                    ></v-img>
                </div>
                <p class="d-box">
                    {{ item.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scope>
</style>