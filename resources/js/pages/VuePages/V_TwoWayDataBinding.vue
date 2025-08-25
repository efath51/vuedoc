<script setup lang="ts">
import VueDocLayout from '@/layouts/VueDocLayout.vue';
import { Head } from '@inertiajs/vue3';

// Import components for Introduction page from IntroductionComp directory

import IntroSidebar from '@/components/VueDocComp/IntroSidebar.vue';

// import comp_lifecycle_hooks from '@/components/VueDocComp/comp_lifecycle_hooks.vue';
import comp_two_way_data_binding from '@/components/VueDocComp/comp_TwoWayDataBind.vue';

defineOptions({
    layout: VueDocLayout,
});
</script>

<template>
    <div>
        <Head title="Two Way Data Bind" />

        <div class="flex w-full">
            <main class="flex w-full flex-col gap-10 lg:flex-row">
                <div class="mx-auto w-full max-w-4xl min-w-0 mt-5">
                    <comp_two_way_data_binding/>
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
