import {
    createRouter,
    createWebHistory
} from 'vue-router';
import {useAuthStore} from "@/stores/auth";
import DashboardView from '../views/pages/dashboard/Dashboard.vue'
import MasterView from '../views/layouts/Master.vue'
import AuthView from '../views/layouts/Auth.vue'
import LoginView from '../views/pages/auth/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AuthView,
            meta: {
                redirectIfAuth: true,
            },
            children: [
                {
                    path: 'auth/login',
                    name: 'login',
                    component: LoginView,
                }
            ]
        },
        {
            path: '/',
            component: MasterView,
            meta: {
                middleware: 'auth',
            },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: DashboardView,
                }
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.middleware == "auth") {
        if (authStore.isAuthenticated) {
            next();
        } else {
            next({name: "login"});
        }
    } else if (to.meta.redirectIfAuth) {
        if (authStore.isAuthenticated) {
            next({name: "dashboard"});
        } else {
            next();
        }
    }
});

export default router
