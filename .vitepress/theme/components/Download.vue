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
            <div class="im-remark">
                <div class="im-alert">
                    <b>因 MyIdea 尚未采购微软、苹果官方代码签名证书，因此软件安装过程中系统可能弹出安全风险提示。在此我们郑重承诺：</b>
                    <ol>
                        <li>用户的任何操作数据都保存在本地，不会被联网上传；</li>
                        <li>软件不包含任何广告、推广、数据收集等功能；</li>
                        <li>软件的安装包和更新包均经过我们团队的严格检查，确保不包含任何恶意代码；</li>
                        <li>我们欢迎用户对软件进行安全审计，并将结果公开以供监督；</li>
                        <li>如果您在安装或使用过程中遇到任何安全问题，请第一时间联系我们，我们将积极配合解决，并向用户通报情况；</li>
                    </ol>
                    感谢您的理解与支持，我们将持续努力为您提供安全、可靠的产品体验。
                </div>
                <div>
                    MacOS <b>打开软件时</b>可能提示“已损坏无法打开”的问题，只须在终端执行以下命令并按提示输入开机密码即可：<br />
                    <p><code>sudo xattr -rd com.apple.quarantine /Applications/MyIdea.app</code></p>
                </div>
                <div>
                    Windows <b>安装软件时</b>可能出现蓝色弹窗提示“运行此应用可能会使你的电脑处于危险之中“，点击“运行”即可。
                </div>
            </div>
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

.im-download-page b {
    color: black;
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

.im-remark {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    text-align: left;
    font-size: 14px;
    margin-bottom: 25px;
    background-color: #ffff9f;
    padding: 10px 20px;
    border: 1px dotted #a58701;
    border-radius: 6px;
    color: #626262;

}

.im-alert {
    color: black;
}

.im-alert ol {
    list-style: decimal !important;
    padding-left: 32px;
    margin: 0.8em 0
}
</style>