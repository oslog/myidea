<!--中间介绍部分-->
<template>
    <div class="im-features">
        <div v-for="(item, index) in data" :key="index"
            :class="['im-container im-pd150 vp-doc', { 'im-between': isBetween(item.layout) }]">
            <template v-if="item.layout === 'lr'">
                <div class="im-section">
                    <h2>{{ item.title }}</h2>
                    <div class="im-intro">{{ item.intro }}</div>
                </div>
                <div v-if="item.images.length > 0" class="im-swiper">
                    <swiper class="swiper" :modules="modules" :space-between="30" :centered-slides="true"
                        :navigation="false" :pagination="{
                            clickable: true
                        }" :autoplay="{
                            delay: 3500,
                            disableOnInteraction: false
                        }">
                        <swiper-slide v-for="(img, index) in item.images" :key="index" class="slide">
                            <img class="im-image" :src="`/images/${img}`" />
                        </swiper-slide>
                    </swiper>
                </div>
            </template>
            <template v-if="item.layout === 'rl'">
                <div v-if="item.images.length > 0" class="im-swiper">
                    <swiper class="swiper" :modules="modules" :space-between="30" :centered-slides="true"
                        :navigation="false" :pagination="{
                            clickable: true
                        }" :autoplay="{
                            delay: 4500,
                            disableOnInteraction: false
                        }">
                        <swiper-slide v-for="(img, index) in item.images" :key="index" class="slide">
                            <img class="im-image" :src="`/images/${img}`" />
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="im-section">
                    <h2>{{ item.title }}</h2>
                    <div class="im-intro">{{ item.intro }}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

const modules = [Pagination, Autoplay]

const data = [{
    layout: 'lr',   // 上下结构
    title: '多编辑模式',
    intro: '支持多种编辑模式，有专为小说作作而设计的所见即所得模式，也有为笔记而设计的 Markdown 模式以及分屏和预览模式。',
    images: [
        'editor-mode/wysiwyg.png',
        'editor-mode/preview.png',
        'editor-mode/markdown.png',
    ]
}, {
    layout: 'rl',    // 左右结构
    title: '思维导图',
    intro: '支持思维导图、逻辑结构图、组织结构图、目录结构图、时间轴、鱼骨图等多种结构以及50+主题。',
    images: [
        'mindmap/mindmap1.png',
        'mindmap/mindmap2.png',
        'mindmap/mindmap3.png',
        'mindmap/mindmap4.png',
        'mindmap/mindmap5.png',
        'mindmap/mindmap6.png',
    ]
}   ];

const isBetween = (layout: string) => {
    return layout === 'lr' || layout === 'rl';
}
</script>
<style lang="scss" scoped>
.vp-doc h2 {
    border-top: 0 !important;
    color: #5eafff !important;
}

.im-between {
    display: flex;
    justify-content: space-between;
}

.im-pd150 {
    padding-bottom: 150px;
}

.im-section {
    max-width: 35%;

    .im-intro {
        color: #414141;
        line-height: 30px;
        font-size: 16px;
    }
}

.im-swiper {
    max-width: 60%;

    .im-image {
        border-radius: 5px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, .72);
    }
}

.dark {
    .im-section {
        .im-intro {
            color: white;
        }
    }
}
</style>