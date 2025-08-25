<script setup lang="ts">
const props = defineProps(['person'])
</script>
<template>
    <div>
        <p>This is component input</p>
        <label for="name">Name</label>
        <input
            type="text"
            placeholder="Change name"
            v-model="person.name"
            class="ms-5 mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <br>

        <label for="name">Email</label>
        <input
            type="text"
            placeholder="Change name"
             v-model="person.email"
            class="ms-5 mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
        />
    </div>
</template>
