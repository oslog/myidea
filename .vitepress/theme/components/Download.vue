<template>
    <div class="im-download-page">
        <div class="im-title-bar">
            <img src="/images/logo.png" class="im-logo" />
            <div class="im-title">MyIdea</div>

            <div class="im-buttons">
                <a v-if="macSilicon" class="im-button im-macos" :href="macSilicon">MacOS 苹果芯片</a>
                <a v-if="macIntel" class="im-button im-macos" :href="macIntel">MacOS 英特尔芯片</a>
                <a v-if="winX86" class="im-button im-windows" :href="winX86">Windows x86_64</a>
                <a v-if="winArm" class="im-button im-windows" :href="winArm">Windows arm_64</a>
            </div>
            <div class="im-version"><span>最新版本: </span><span>v{{ version }}</span></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { version, macSilicon, macIntel, winX86, winArm } from '../../../data.json';

</script>
<style lang="css" scoped>
.im-download-page {
    width: 100%;
}

.im-title-bar {
    margin-top: 100px;
    display: grid;
    place-items: center;
    gap: 20px;
}

.im-logo {
    width: 200px;
    height: 200px;
    transition: transform 1s ease-in-out;
}

.im-logo:hover {
    transform: scale(1.15);
}

.im-title {
    font-size: 32px;
    font-weight: bold;
}

.im-buttons {
    margin-top: 40px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; */
}

.im-button {
    display: block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap;
    border-radius: 0.5rem;
    font-weight: 500;
    background-color: #5eafff;
    color: #fff;
    padding: 1rem 3rem 1rem 4.5rem;
    transition: background-color 0.3s ease-in-out;
    margin-bottom: 10px;
}

.im-button:hover {
    background-color: #90c8ff;
}

.im-windows,
.im-macos {
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: 40px center;
}

.im-macos {
    background-image: url(/images/apple.svg);
}

.im-windows {
    background-image: url(/images/windows.svg);
}

.im-version {
    color: #657b83;
}
</style>