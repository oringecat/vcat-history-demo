<template>
    <cat-page class="page-a" title="这是页面A">
        <button class="btn btn-primary" type="button" @click="go">跳转到页面B</button>
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
        name: "PageA",
        components: {
            CatPage
        },
        setup() {
            const router = useRouter();

            const go = (): void => {
                router.push("/b");
            }

            return {
                go
            }
        }
    });
</script>