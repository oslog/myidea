// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Intro from './components/Intro.vue'
// import Section from './components/Section.vue'
import Exhibit from './components/Exhibit.vue'

import './styles/custome.css'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'home-hero-before': () => h(Intro),
            // 'home-hero-after': () => h(Section),
            'home-features-after': () => h(Exhibit),
        })
    },
    // enhanceApp({ app, router, siteData }) {
    //     app.component('PhotoPreview', vue3PhotoPreview)
    // }
} satisfies Theme