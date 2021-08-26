<template>
    <cat-page class="page-b" title="这是页面B" style="background-color:#eee">
        <button class="btn btn-primary" type="button" @click="go">跳转到页面C</button>
    </cat-page>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-20
     */

    import { defineComponent, } from "vue";
    import { useRouter } from "vue-router";
    import CatPage from "@/components/page/index.vue"

    export default defineComponent({
        name: "PageB",
        components: {
            CatPage
        },
        setup() {
            const router = useRouter();

            const go = (): void => {
                router.replace("/c");
            }

            return {
                go
            }
        }
    });
</script>