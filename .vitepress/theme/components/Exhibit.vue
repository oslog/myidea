<template>
    <div class="im-exhibit">
        <div class="im-blur"></div>
        <div style="transform: translateY(300px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-dark.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-light.png">
            </div>
        </div>

        <div style="transform: translateY(200px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-light.png ">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-dark.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-light.png">
            </div>
        </div>
        <div style="transform: translateY(100px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-dark.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-light.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/solarized-dark.png">
            </div>
        </div>
        <div class="im-exhibit-column">
            <img loading="lazy" class="im-exhibit-img" src="/images/solarized-light.png">
            <img loading="lazy" class="im-exhibit-img" src="/images/solarized-dark.png">
            <img loading="lazy" class="im-exhibit-img" src="/images/simple-light.png">
        </div>
        <div style="transform: translateY(100px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-dark.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-light.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/solarized-dark.png">
            </div>
        </div>
        <div style="transform: translateY(200px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-light.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/glass-dark.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/solarized-light.png">
            </div>
        </div>
        <div style="transform: translateY(300px);">
            <div class="im-exhibit-column">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-light.png">
                <img loading="lazy" class="im-exhibit-img" src="/images/simple-dark.png">
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.im-exhibit {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 18px;
    overflow: hidden;
    height: 50vh;
    margin-top: 150px;
}

.im-blur {
    z-index: 10;
    left: 0;
    bottom: 0;
    right: 0;
    top: 240px;
    position: absolute;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 82.4%)
}

.dark .im-blur {
    background: linear-gradient(rgba(24, 26, 27, 0) 0%, #181a1b 82.4%) !important;
}

.im-exhibit-column {
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: relative;
}

.im-exhibit-box {
    position: relative;
    background-color: oklch(98.5% 0 0);
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    margin-bottom: calc(0.25rem * 5);
}

.im-exhibit-img {
    border-radius: 6px;
    object-position: top;
    object-fit: contain;
    min-width: 300px;
    color: transparent;
    transition: filter 0.5s ease-in-out;
    filter: brightness(80%);
}

.im-exhibit-img:hover {
    filter: brightness(100%) !important;
}
</style>