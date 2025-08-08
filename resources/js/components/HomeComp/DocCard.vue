<script setup>
defineProps({
    title: String,
    link: String,
});
</script>

<template>
   <a :href="link" class="block p-4 border rounded hover:bg-gray-100 transition">
    <h2 class="text-lg font-semibold">{{ title }}</h2>
  </a>
</template>

