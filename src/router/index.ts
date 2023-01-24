import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";
import {useAuthStore} from "@/stores/auth";
import {useConfigStore} from "@/stores/config";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: () => import("@/layouts/main-layout/MainLayout.vue"),
        meta: {
            middleware: "auth",
        },
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("@/views/Dashboard.vue"),
                meta: {
                    pageTitle: "Yönetim Paneli",
                    breadcrumbs: ["Yönetim Paneli"],
                },
            },
        ],
    },

    {
        path: "/",
        component: () => import("@/layouts/AuthLayout.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () =>
                    import("@/views/auth/Login.vue"),
                meta: {
                    pageTitle: "Giriş Yap",
                    redirectIfLoggedIn: true,
                },
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () =>
                    import("@/views/auth/SignUp.vue"),
                meta: {
                    pageTitle: "Sign Up",
                },
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () =>
                    import("@/views/auth/PasswordReset.vue"),
                meta: {
                    pageTitle: "Password reset",
                },
            },
        ],
    },
    {
        path: "/",
        component: () => import("@/layouts/SystemLayout.vue"),
        children: [
            {
                // the 404 route, when none of the above matches
                path: "/404",
                name: "404",
                component: () => import("@/views/core/Error404.vue"),
                meta: {
                    pageTitle: "Error 404",
                },
            },
            {
                path: "/500",
                name: "500",
                component: () => import("@/views/core/Error500.vue"),
                meta: {
                    pageTitle: "Error 500",
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const configStore = useConfigStore();

    document.title = `${to.meta.pageTitle}`;

    configStore.resetLayoutConfig();

    if (to.meta.middleware == "auth") {
        if (authStore.isAuthenticated) {
            next();
        } else {
            next({name: "login"});
        }
    } else if (to.meta.redirectIfLoggedIn) {
        if (authStore.isAuthenticated) {
            next({name: "dashboard"});
        } else {
            next();
        }
    } else {
        next();
    }

    // Scroll page to top on every route change
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

export default router;
