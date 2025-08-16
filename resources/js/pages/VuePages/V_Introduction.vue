<script setup lang="ts">
import VueDocLayout from "@/layouts/VueDocLayout.vue"
import { Head } from "@inertiajs/vue3"

// Import components for Introduction page from IntroductionComp directory
import IntroContent from "@/components/VueDocComp/IntroContent.vue"
import IntroSidebar from "@/components/VueDocComp/IntroSidebar.vue"

defineOptions({
  layout: VueDocLayout
})
</script>

<template>
  <div>
    <Head title="Introduction" />

    <div class="flex w-full">
      <!-- Sidebar -->
      <IntroSidebar class="w-64 border-r bg-gray-50 dark:bg-gray-900" />

      <!-- Main Content -->
      <main class="flex-1 p-6 overflow-y-auto ">
        <IntroContent />
      </main>
    </div>
  </div>
</template>
