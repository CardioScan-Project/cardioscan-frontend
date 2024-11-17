<script setup>
import router from '@/router';
import { ref } from 'vue';

async function login() {
    const data = {
        email: email.value,
        password: password.value,
        correo: ''
    };

    //const response = await fetch('https://cardioscan-eqhfheaac7b6fnfj.canadacentral-01.azurewebsites.net/api/general/login', {
    const response = await fetch('https://localhost:7076/api/general/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const result = await response.json();
        const token = result.token;
        localStorage.setItem('token', token);
        router.push({ name: 'dashboard' });
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
}

const email = ref('');
const password = ref('');
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bienvenido a CardioScan</div>
                        <span class="text-muted-color font-medium">Inicia sesión para continuar</span>
                    </div>

                    <div>
                        <label for="email" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Correo electrónico</label>
                        <InputText id="email" type="text" placeholder="Correo electrónico" class="w-full md:w-[30rem] mb-8" v-model="email" :style="{ borderColor: '#cbd5e1' }" />

                        <label for="password" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Contraseña</label>
                        <Password id="password" v-model="password" placeholder="Contraseña" :toggleMask="true" class="mb-4" fluid :feedback="false" :style="{ borderColor: '#cbd5e1' }"></Password>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: #38bdf8">¿Olvidaste tu contraseña?</span>
                        </div>
                        <div class="flex justify-center mt-4">
                            <Button @click="login" label="Iniciar Sesión" class="w-full" as="router-link" to="/" style="background-color: #38bdf8; color: #fff; border-color: #38bdf8; width: auto; padding: 0.5rem 1rem"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
