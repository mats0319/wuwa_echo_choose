import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: "/manual",
                name: "manual",
                component: () => import("@/views/manual.vue"),
            },
            {
                path: "/echo-choose",
                name: "echoChoose",
                component: () => import("@/views/echo_choose.vue"),
            },
            {
                path: "/formula",
                name: "formula",
                component: () => import("@/views/formula.vue"),
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
