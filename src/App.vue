<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <keep-alive :exclude="excludePages">
                <component :is="Component" :key="$route.fullPath" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-20
     */

    import { defineComponent, computed } from "vue";
    import { state } from "vcat-history";

    export default defineComponent({
        name: "App",
        setup() {
            const transitionName = computed(() => state.transitionName);
            const excludePages = computed(() => state.excludePages);

            return {
                transitionName,
                excludePages,
            };
        },
    });
</script>

<style lang="less">
    html {
        height: 100%;
    }

    body {
        height: inherit;
        padding: 0;
        margin: 0;
    }

    .app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
        will-change: transform;
        transition: transform 300ms;
        position: fixed;
        pointer-events: none;
    }

    .slide-right-enter-from {
        z-index: 1;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        transition-delay: 35ms;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter-from {
        z-index: 1;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        transition-delay: 35ms;
        transform: translate3d(-100%, 0, 0);
    }
</style>