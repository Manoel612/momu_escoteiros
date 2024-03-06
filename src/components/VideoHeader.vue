<script setup>
    import {ref} from 'vue'
    import carro1 from "../assets/carro1.mp4"
    const items = ref({
        video: carro1,
        h1: "Escotismo,",
        h2: "educação pra vida",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae deserunt soluta maiores",
    })
    const videoHeight = ref(75) // in vh
</script>

<template>
    <section class="home">
        <video muted loop autoplay class="bg-grey-lighten-4">
            <source :src="items.video"  type="video/mp4">
        </video>
        <div class="home-content">
            <div class="d-flex justify-center h-100 align-center text-light-green-lighten-5">
                <div>
                    <h1>
                        {{ items.h1 }}
                    </h1>
                    <span id="sub-text">{{ items.h2 }}</span>
                    <div class="w-100 justify-center d-flex">
                        <p class="text-justify w-75">{{ items.p }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: roboto, sans-serif;
    }

    .home {
        height: v-bind(videoHeight + "vh");
        position: relative;
    }
    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .home-content {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.493);
    }
    h1 {
        font-size: 70px;
        text-align: center;
    }
    #sub-text {
        font-size: 30px;
        text-align: center;
        margin-top: 0px;
        display: block;
    }
    p{
        margin-top: 18px;
        font-size: 25px;
        max-width: 900px;
    }

    .home-content button {
        display: block;
        font-size: clamp(14px, 1.5vw, 18px);
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        background: transparent;
        color: #fff;
        margin: 50px auto 0;
        padding: 12px 20px;
        cursor: pointer;
    }
</style>
