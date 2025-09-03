<!--顶部-->
<template>
    <div class="im-home">
        <div class="im-title">
            <h1 class="im-name">{{ data.name }}</h1>
            <h1 class="im-slogan">{{ data.slogan }}</h1>
            <h4 class="im-tagline">{{ data.description }}</h4>
        </div>
        <!-- <img src="/images/myidea.png" /> -->
        <div class="im-swiper">
            <swiper class="swiper" :modules="modules" :pagination="pagination" :autoplay="autoplay" :loop="true">
                <swiper-slide v-for="(img, index) in images" :key="index" class="slide">
                    <div class="im-zoom-container">
                        <img :src="`/images/${img}`" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script lang="ts" setup>
import data from '../../../data.json';
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination, Autoplay]
const images = ['myidea.png', 'mindmap.png']
const pagination = {
    clickable: true
}
const autoplay = {
    delay: 3000,
    disableOnInteraction: false
}

</script>
<style lang="scss" scoped>
.im-home {
    width: 100%;
    // display: grid;
    place-items: center;
    padding-top: 100px;
    padding-bottom: 150px;

    .im-title {
        display: grid;
        place-items: center;
        gap: 40px;

        h1 {
            font-size: 2.5em;
            font-weight: 800;
        }

        h4 {
            font-size: 1.1rem;
        }

        .im-name {
            color: #5eafff;
        }

        .im-slogan {
            color: black;
        }

        .im-tagline {
            color: #bcbcbc;
        }
    }

    .im-swiper {
        width: 100%;

        .im-zoom-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    img {
        max-width: 800px;
        width: 100%;
        height: auto;
    }
}

.dark {
    .im-home {
        .im-title {
            .im-slogan {
                color: white;
            }
        }
    }
}
</style>