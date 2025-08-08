<script setup lang="ts">
import VueDocLayout from "@/layouts/VueDocLayout.vue"
defineOptions({ layout: VueDocLayout }) // this is supported in Nuxt or some Vite-based setups
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Documentation Viewer</h1>
    <!-- Use your components -->
    <YourComponent />
  </div>
</template>


