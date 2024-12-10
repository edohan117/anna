import Home from "@/pages/Home";
import Memo from "@/pages/Memo.vue";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/memo', component: Memo},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;