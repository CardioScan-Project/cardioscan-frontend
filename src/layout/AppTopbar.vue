<script setup>
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { onMenuToggle } = useLayout();
const router = useRouter();

function logout() {
    localStorage.removeItem('token');
    router.push({ name: 'login' });
}
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <svg version="1.0" width="auto" height="auto" viewBox="0 0 411.000000 329.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,329.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path
                            d="M1280 2974 c-196 -42 -354 -127 -496 -269 -118 -117 -189 -237 -234
-397 -25 -86 -37 -284 -23 -370 8 -46 7 -58 -4 -63 -8 -3 -99 -5 -203 -5 -158
0 -191 -3 -204 -16 -27 -26 -24 -71 6 -96 18 -16 45 -18 238 -18 l217 0 18
-47 c38 -102 109 -206 219 -321 132 -136 887 -892 1012 -1012 80 -77 96 -88
162 -109 58 -19 85 -22 133 -17 129 13 123 8 720 605 496 497 665 675 698 739
12 22 14 22 226 22 202 0 216 1 235 20 26 26 26 64 0 90 -19 19 -33 20 -200
20 -99 0 -180 4 -180 8 0 5 10 44 21 88 18 65 22 107 22 234 0 178 -15 252
-81 393 -187 397 -661 619 -1087 508 -102 -27 -243 -97 -319 -158 -32 -27 -64
-52 -71 -57 -9 -7 -35 7 -87 46 -181 139 -356 199 -571 197 -56 0 -131 -7
-167 -15z m1546 -125 c274 -38 515 -210 634 -453 58 -119 74 -190 75 -331 0
-121 -10 -183 -47 -282 l-19 -53 -505 0 c-277 0 -504 3 -504 8 0 16 -51 540
-56 585 -5 34 -14 53 -32 67 -32 26 -45 25 -75 -2 -20 -18 -55 -124 -177 -523
-84 -275 -156 -507 -161 -515 -7 -13 -8 -13 -13 0 -3 8 -27 201 -54 427 -53
446 -55 453 -112 453 -15 0 -35 -9 -45 -20 -9 -10 -74 -173 -144 -361 -69
-189 -131 -344 -136 -346 -6 -2 -37 67 -69 152 -47 125 -66 161 -93 185 l-34
30 -282 0 c-155 0 -288 4 -295 8 -20 13 -35 137 -29 233 23 354 264 636 615
720 131 32 302 24 431 -20 119 -40 211 -94 300 -176 39 -36 80 -65 90 -65 11
0 55 31 99 69 100 86 194 142 295 176 128 43 218 52 343 34z m-507 -1022 c12
-141 25 -178 74 -207 31 -19 54 -20 510 -20 440 0 477 -1 477 -17 0 -25 -1146
-1169 -1196 -1193 -52 -26 -126 -25 -182 0 -32 15 -182 158 -566 542 -288 288
-547 550 -575 583 -48 54 -141 198 -141 217 0 5 111 7 247 6 l247 -3 93 -245
c52 -135 101 -251 110 -257 24 -18 60 -16 81 5 9 10 66 151 126 315 60 163
112 297 117 297 10 0 12 -15 69 -485 45 -376 51 -411 71 -427 12 -10 29 -18
39 -18 51 0 50 -5 345 964 15 48 30 84 35 80 4 -5 12 -67 19 -137z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <span>CardioScan</span>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>
            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button @click="logout" type="button" class="layout-topbar-action">
                        <i class="pi pi-sign-out"></i>
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
