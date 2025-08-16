<script setup lang="ts">
import VueDocLayout from '@/layouts/VueDocLayout.vue';
import { Head } from '@inertiajs/vue3';

// Import components for Introduction page from IntroductionComp directory
import DataCompo from '@/components/VueDocComp/DataComp.vue';
import IntroSidebar from '@/components/VueDocComp/IntroSidebar.vue';

defineOptions({
    layout: VueDocLayout,
});
</script>

<template>
    <div>
        <Head title="Introduction" />

        <div class="flex w-full">
            <main class="flex w-full flex-col gap-10 lg:flex-row">
                <div class="mx-auto w-full max-w-4xl min-w-0 mt-5">
                    <DataCompo />
                </div>

                <div class="hidden text-sm xl:block">
                    <div class="sticky top-0 h-screen w-64 border-l bg-background ps-4">
                        <IntroSidebar />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
