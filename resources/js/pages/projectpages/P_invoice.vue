<script setup lang="ts">
import VueDocLayout from '@/layouts/VueDocLayout.vue';
import { Head } from '@inertiajs/vue3';

// Import components for Introduction page from IntroductionComp directory

import IntroSidebar from '@/components/VueDocComp/IntroSidebar.vue';

// import comp_lifecycle_hooks from '@/components/VueDocComp/comp_lifecycle_hooks.vue';
import comp_two_way_data_binding from '@/components/VueDocComp/comp_TwoWayDataBind.vue';

import cmp_invoice from '@/components/ProjectComp/cmp_invoice.vue';

defineOptions({
    layout: VueDocLayout,
});
</script>

<template>
    <div>
        <Head title="Two Way Data Bind" />

        <div class="flex w-full">
            <main class="mx-auto w-full ">
                 <cmp_invoice/>


                <!-- <div class="hidden text-sm xl:block">
                    <div class="sticky top-0 h-screen w-64 border-l bg-background ps-4">
                        <IntroSidebar />
                    </div>
                </div> -->
            </main>
        </div>
    </div>
</template>
