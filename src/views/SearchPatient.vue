<template>
    <div className="card">
        <div class="font-semibold text-xl mb-4">Buscar Paciente</div>
        <div class="inline-flex gap-4">
            <InputText type="text" placeholder="DNI de la paciente" :style="{ borderColor: '#cbd5e1' }" />
            <Button type="button" label="Buscar" style="background-color: #38bdf8; color: #fff; border-color: #38bdf8; width: auto; padding: 0.5rem 1rem" />
        </div>
    </div>
</template>
