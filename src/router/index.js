import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
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
                }
            ]
        }
    ]
});

export default router;
