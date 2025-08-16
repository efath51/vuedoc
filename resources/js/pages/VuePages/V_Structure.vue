<script setup lang="ts">
import VueDocLayout from '@/layouts/VueDocLayout.vue';
import { Head } from '@inertiajs/vue3';

import CodeBlock from '@/components/CodeBlock.vue';

const jsCode = `
function greet(name) {
  // A simple function to greet a user
  console.log(\`Hello, \${name}!\`);
}
greet('Vue Developer');
`;

const htmlCode = `
<div class="w-full max-w-2xl">
    <h2 class="mb-4 text-xl font-semibold text-foreground">HTML Example</h2>
    <CodeBlock :code="htmlCode" language="xml" />
</div>
`;

defineOptions({
    layout: VueDocLayout,
});
</script>

<template>
    <div>
        <Head title="Code-Blocks" />

        <div class="flex min-h-screen flex-col items-center justify-center space-y-8 bg-background p-8">
            <div class="w-full max-w-2xl">
                <h2 class="mb-4 text-xl font-semibold text-foreground">JavaScript Example</h2>
                <CodeBlock :code="jsCode" language="javascript" />
            </div>

            <div class="w-full max-w-2xl">
                <h2 class="mb-4 text-xl font-semibold text-foreground">HTML Example</h2>
                <CodeBlock :code="htmlCode" language="xml" />
            </div>
        </div>
         <CodeBlock :code="jsCode" language="javascript" />
    </div>
</template>
