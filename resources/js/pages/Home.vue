<script setup lang="ts">

import BoxesHover from "@/components/GSAP/BoxesHover.vue";
</script>

<script lang="ts">
import HomeLayout from "@/layouts/HomeLayout.vue";

export default {
  layout: HomeLayout,
};
</script>


<template>
    <div class="relative min-h-screen bg-black overflow-hidden">
    <!-- <BoxesHover /> -->
        <div class="relative z-10 flex flex-col items-center justify-center gap-4 text-white text-center pt-40">

            <h1 class="text-[clamp(2.5rem,5vw,4.5rem)] font-bold bg-gradient-to-r from-purple-500 via-green-200 to-green-700 bg-clip-text text-transparent m-0">
               Documentation of VUE
            </h1>
            <p class="text-[clamp(1rem,2vw,1.25rem)] max-w-[600px] text-neutral-400">
            Handling complex queries, boosting efficiency, and streamlining support, so your
            business scales faster with precision.
            </p>
        </div>
    </div>
</template>




<style scoped>

</style>
