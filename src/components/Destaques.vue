<script setup>
    import {ref} from 'vue'

    import imag1 from "../assets/image.png"
    import imag2 from "../assets/image.png"
    import imag3 from "../assets/image.png"
    import imag4 from "../assets/image.png"
    
    const imageHeight = ref(170)

    const items = ref([
    {
        picture: imag1,
    },
    {
        picture: imag2,
    },
    {
        picture: imag3,
    },
    {
        picture: imag4,
    }
    ])

</script>

<template>
    <h1 class="text-center text-h1 font-weight-thin mt-12 mb-12">Destaques</h1>
    <div class="mt-6 d-flex justify-center">
        <div class=" d-flex ga-6 flex-wrap cont-size">
            <a v-for="item in items" >
                <div class="card-size">
                    <v-img :src="item.picture" cover></v-img>
                </div>
            </a>
        </div>
    </div>
</template>

<style scope>
    :root{
        --width-card: 539px;
        --width-contain: calc( var(--width-card) * 2 );
        --height-card: v-bind(imageHeight + "px");
        --height-contain: calc( var(--height-card) * 2 );
    }
    .card-size{
        height: var(--height-card);
        width: var(--width-card);
    }
    .cont-size{
        max-width: calc( var(--width-contain) + 24px);
        max-height: calc( var(--height-contain) + 24px);
    }
    a{
        display: block;
    }

    @media screen and (max-width: 1150px) {
        :root{
            --width-card: 45vw;
            --height-card: 14vw;
        }
    }
    @media screen and (max-width: 768px) {
        :root{
            --width-card: 90vw;
            --height-card: 29vw;
        }
        .text-h1{
            font-size: 70px !important;
        }
        .cont-size{
            width: 100%;
            max-height: none;
            justify-content: center;
        }
    }
</style>