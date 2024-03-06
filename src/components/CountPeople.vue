<script setup>
    import {ref} from 'vue'
    import img1 from "../assets/scout.png"
    import img2 from "../assets/scout.png"

    const items = ref([
        {
            count: "101",
            image: "https://www.escoteiros.org.br/wp-content/themes/escoteiros-theme/img/icons/home/40.png"
        },
        {
            count: "100",
            image: "https://www.escoteiros.org.br/wp-content/themes/escoteiros-theme/img/icons/home/41.png"
        }
    ])

    const sizeImg = ref(190)
</script>

<template>
    <section class="d-flex justify-center w-100 ga-8 mt-12">
        <div>
                <v-img
                :width="sizeImg"
                :src="items[0].image"
                ></v-img>
                <h1 class="text-center text-h4 font-weight-bold">{{ items[0].count }}</h1>
                <p class="text-center mt-4">jovens atendidos</p>
            </div>
            <div>
                <v-img
                :width="sizeImg"
                :src="items[1].image"
                ></v-img>
                <h1 class="text-center text-h4 font-weight-bold">{{ items[1].count }}</h1>
                <p class="text-center mt-4">voluntarios</p>
        </div>
    </section>
</template>

<style scoped>

</style>