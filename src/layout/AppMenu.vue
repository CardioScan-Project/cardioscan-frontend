<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Inicio',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Pacientes',
        items: [
            { label: 'Nueva Paciente', icon: 'pi pi-fw pi-user-plus', to: '/newPatient' },
            { label: 'Buscar Paciente', icon: 'pi pi-fw pi-users', to: '/searchPatient' }
        ]
    },
    {
        label: 'Screening',
        items: [{ label: 'Iniciar Screening', icon: 'pi pi-fw pi-play', to: '/screening' }]
    },
    {
        label: 'Usuario',
        items: [
            { label: 'Mi Perfil', icon: 'pi pi-fw pi-user', to: '/profile' },
            { label: 'Cambiar Contraseña', icon: 'pi pi-fw pi-user-edit', to: '/changePassword' }
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
