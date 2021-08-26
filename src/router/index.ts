import { createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { initRouter } from "vcat-history";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:catchAll(.*)",
        redirect: { name: "PageA" },
    },
    {
        path: "/",
        alias: "/a",
        name: "PageA",
        component: () => import("@/views/page-a.vue"),
    },
    {
        path: "/b",
        name: "PageB",
        component: () => import("@/views/page-b.vue"),
    },
    {
        path: "/c",
        name: "PageC",
        component: () => import("@/views/page-c.vue"),
    },
    {
        path: "/d",
        name: "PageD",
        component: () => import("@/views/page-d.vue"),
    },
]

const router = initRouter({
    history: createWebHashHistory(),
    routes
})

// 路由跳转之前调用
router.beforeEach((to, from, next) => {
    next();
});

export default router
