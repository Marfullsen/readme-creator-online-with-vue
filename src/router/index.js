import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Output from '/src/pages/Output.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/output',
        name: 'Output',
        component: Output,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router