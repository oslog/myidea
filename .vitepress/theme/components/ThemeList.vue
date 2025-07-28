<template>
    <div class="im-features">
        <div class="im-container vp-doc">
            <h2>主题</h2>
            <div v-if="themes?.length" id="gallery" class="im-items">
                <div v-for="item in themes" class="im-item">
                    <a :key="item.key" :href="item.src" target="_blank" rel="noreferrer" class="im-link"
                        :data-pswp-width="item.width" :data-pswp-height="item.height" :data-file-url="item.file">
                        <img :src="item.src" />
                        <div class="pswp-caption-content">
                            <div class="im-title">{{ item.title }}</div>
                            <div class="im-desc">{{ item.description }}</div>
                        </div>
                        <div class="badge">{{ item.title }}</div>
                    </a>
                </div>
            </div>
            <div v-else>正在建设中...</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { themes } from '../../../data.json';
import { onMounted, ref } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

onMounted(() => {
    if (!themes?.length) return;

    const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
        showHideAnimationType: 'zoom',
        closeOnVerticalDrag: false,
        paddingFn: (viewportSize) => {
            return {
                top: 30, bottom: 30, left: 70, right: 70
            }
        }
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        type: 'auto',
    });

    // 下载图标
    lightbox.on('uiRegister', function () {
        lightbox.pswp!.ui!.registerElement({
            name: 'download-button',
            order: 8,
            isButton: true,
            tagName: 'a',

            // SVG with outline
            html: {
                isCustomSVG: true,
                inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
                outlineID: 'pswp__icn-download'
            },

            onInit: (el: any, pswp: any) => {
                el.setAttribute('download', '');
                el.setAttribute('target', '_blank');
                el.setAttribute('rel', 'noopener');

                pswp.on('change', () => {
                    el.href = pswp.currSlide.data.element.dataset.fileUrl;
                });
            }
        });
    });

    let firstElWithBadge: HTMLElement | undefined;
    let lastElWithBadge: HTMLElement | undefined;
    // Gallery is starting to open
    lightbox.on('afterInit', () => {
        firstElWithBadge = lightbox.pswp!.currSlide!.data.element;
        hideBadge(firstElWithBadge);
    });

    // Gallery is starting to close
    lightbox.on('close', () => {
        lastElWithBadge = lightbox.pswp!.currSlide!.data.element;
        if (lastElWithBadge !== firstElWithBadge) {
            showBadge(firstElWithBadge);
            hideBadge(lastElWithBadge);
        }
    });

    // Gallery is closed
    lightbox.on('destroy', () => {
        showBadge(lastElWithBadge);
    });

    lightbox.init();
});

const hideBadge = (el: HTMLElement | undefined) => {
    if (!el) return;
    const badgeEl = el.querySelector('.badge');
    if (badgeEl) {
        badgeEl.classList.add('badge--hidden');
    }
};
function showBadge(el: HTMLElement | undefined) {
    if (!el) return;
    const badgeEl = el.querySelector('.badge');
    if (badgeEl) {
        badgeEl.classList.remove('badge--hidden');
    }
}

</script>
<style lang="scss" scoped>
h2 {
    margin: 48px 0;
    border-top: 0;
    border-bottom: 1px solid var(--vp-c-divider);
    padding-top: 0;
}

.im-items {
    margin-bottom: 28px;
    gap: 20px;
    margin: 0 35px;
}


.im-link {
    position: relative;
    display: inline-block;

    img {
        border-radius: 6px;
        width: 200px;
        cursor: pointer;
        transition: filter 0.5s ease-in-out;
        filter: brightness(60%);
    }

    &:hover {
        img {
            filter: brightness(100%);
        }
    }

    .badge {
        position: absolute;
        bottom: 5px;
        right: 5px;
        padding: 6px 10px;
        color: #FFF;
        background: rgba(255, 255, 255, 0.15);
        transition: opacity 100ms linear;
        font-size: 14px;
        font-weight: normal;
        border-radius: 4px;
        font-weight: bold;
    }

    .badge--hidden {
        opacity: 0;
    }
}

.im-title {
    font-weight: bold;
    font-size: 2.5em;
    padding-bottom: 30px;
}

.im-desc {
    line-height: 28px;
}
</style>