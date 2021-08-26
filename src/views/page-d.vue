<template>
    <cat-page class="page-d" title="这是页面D" style="background-color:#bbb">
        <button class="btn btn-primary" type="button" @click="backHome()">跳转到首页</button>
    </cat-page>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-20
     */

    import { defineComponent, } from "vue";
    import CatPage from "@/components/page/index.vue"
    import mixin from "@/utils/mixin";

    export default defineComponent({
        name: "PageD",
        components: {
            CatPage
        },
        setup() {
            const { backHome } = mixin();

            return {
                backHome,
            };
        }
    });
</script>