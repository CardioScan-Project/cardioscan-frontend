import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token != null;
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            path: '/auth/forgotPassword',
            name: 'forgotPassword',
            component: () => import('@/views/auth/ForgotPassword.vue')
        },
        {
            path: '/',
            component: AppLayout,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/newPatient',
                    name: 'newPatient',
                    component: () => import('@/views/NewPatient.vue')
                },
                {
                    path: '/searchPatient',
                    name: 'searchPatient',
                    component: () => import('@/views/SearchPatient.vue')
                },
                {
                    path: '/screening',
                    name: 'screening',
                    component: () => import('@/views/Screening.vue')
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('@/views/Profile.vue')
                },
                {
                    path: '/changePassword',
                    name: 'changePassword',
                    component: () => import('@/views/ChangePassword.vue')
                },
                {
                    path: '/:pathMatch(.*)*',
                    component: () => import('@/views/Dashboard.vue')
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated()) {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router;
