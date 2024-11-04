<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Patients',
        items: [
            { label: 'New Patient', icon: 'pi pi-fw pi-user-plus', to: '/newPatient' },
            { label: 'Patient List', icon: 'pi pi-fw pi-users', to: '/patientList' }
        ]
    },
    {
        label: 'Screening',
        items: [
            { label: 'Start Screening', icon: 'pi pi-fw pi-play', to: '/screening' },
            { label: 'Screening History', icon: 'pi pi-fw pi-history', to: '/screeningHistory' }
        ]
    },
    {
        label: 'User',
        items: [
            { label: 'My Profile', icon: 'pi pi-fw pi-user', to: '/profile' },
            { label: 'Change Password', icon: 'pi pi-fw pi-user-edit', to: '/changePassword' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
