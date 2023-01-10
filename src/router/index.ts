import {createRouter, createWebHistory} from 'vue-router'
import DashboardView from '../views/pages/dashboard/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
    ]
})


export default router
