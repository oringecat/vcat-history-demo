<template>
    <cat-page class="page-c" title="这是页面C" style="background-color:#ccc">
        <input class="input" type="text" placeholder="请输入文字" v-model="inputValue" />
        <button class="btn btn-primary" type="button" @click="go">跳转到页面D</button>
    </cat-page>
</template>

<script lang="ts">
    /*!
     * ©teamwei.com
     * author: teamwei
     * date: 2021-08-20
     */

    import { defineComponent,ref } from "vue";
    import { useRouter } from "vue-router";
    import CatPage from "@/components/page/index.vue"

    export default defineComponent({
        name: "PageC",
        components: {
            CatPage
        },
        setup() {
            const router = useRouter();
            const inputValue = ref();

            const go = (): void => {
                router.push("/d");
            }

            return {
                inputValue,
                go
            }
        }
    });
</script>