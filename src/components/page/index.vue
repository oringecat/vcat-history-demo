<template>
    <div class="page">
        <div class="page-header" v-if="showBackButton">
            <button class="btn-back" type="button" @click="$router.go(-1)">返回</button>
        </div>
        <div class="page-container">
            <h3 class="page-title">{{title}}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-20
     */

    import { defineComponent, } from "vue";

    export default defineComponent({
        name: "CatPage",
        props: {
            title: String,
            showBackButton: {
                type: Boolean,
                default: () => (window.history.state.back ? true : false),
            },
        }
    });
</script>

<style lang="less">
    @import "./index.less";
</style>