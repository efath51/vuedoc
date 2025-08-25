<script setup lang="ts">
import VueDocLayout from '@/layouts/VueDocLayout.vue';
import { Head } from '@inertiajs/vue3';
import comp_WYSIWYG from '@/components/NewComponent/comp_WYSIWYG.vue';
import { ref } from 'vue';

defineOptions({
    layout: VueDocLayout,
});


const tiptap = ref('<h3>Welcome!</h3><p>Start typing in the editor above. Your changes will appear live here.</p>');
</script>

<template>
    <div>
        <Head title="TIPTAP text editor" />

        <div class="flex w-full">
            <main class="mx-auto w-full mt-20 mb-20">
                 <comp_WYSIWYG v-model="tiptap"/>

                <div class="rounded-md border p-4 mt-10 mx-40">
                    <h3 class="mb-4 border-b pb-2 text-lg font-semibold">Live Preview</h3>
                    <div class="prose dark:prose-invert max-w-none" v-html="tiptap"></div>
                </div>
            </main>
        </div>
    </div>
</template>


