<template>
    <aside class="sticky top-6 h-[calc(100vh-1.5rem)] pt-4">
        <!-- Desktop -->
        <div class="no-scrollbar hidden h-full overflow-auto pb-16 xl:block">
            <div class="space-y-2">
                <p class="font-medium">On This Page</p>
                <ul class="m-0 list-none">
                    <li v-for="item in toc" :key="item.id" class="mt-0 pt-2">
                        <a :href="'#' + item.id" class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground">
                            {{ item.label }}
                        </a>
                        <ul v-if="item.children" class="m-0 list-none pl-4">
                            <li v-for="child in item.children" :key="child.id" class="mt-0 pt-2">
                                <a
                                    :href="'#' + child.id"
                                    class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                                >
                                    {{ child.label }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Mobile -->
        <div class="mb-6 block xl:hidden">
            <div>
                <button
                    type="button"
                    @click="open = !open"
                    class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                    On This Page
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'rotate-180': open }" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <div v-show="open" class="mt-4 border-l pl-4 text-sm transition-all">
                    <ul class="m-0 list-none">
                        <li v-for="item in toc" :key="item.id" class="mt-0 pt-2">
                            <a :href="'#' + item.id" class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground">
                                {{ item.label }}
                            </a>
                            <ul v-if="item.children" class="m-0 list-none pl-4">
                                <li v-for="child in item.children" :key="child.id" class="mt-0 pt-2">
                                    <a
                                        :href="'#' + child.id"
                                        class="inline-block text-muted-foreground no-underline transition-colors hover:text-foreground"
                                    >
                                        {{ child.label }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

// Example TOC data
const toc = ref([
    { id: 'overview', label: 'Overview' },
    { id: 'dataFromAnotherFile', label: 'Data import' },
    { id: 'Binding_data_with_html', label: 'Data Bind' },
    { id: 'expressions_in_data_binding', label: 'Expressions in data binding' },

    {
        id: 'resources',
        label: 'Resources',
        children: [
            { id: 'custom-separator', label: 'Custom separator' },
            { id: 'dropdown', label: 'Data user' },
            { id: 'dataFromAnotherFile', label: 'Data import' },
        ],
    },
]);

const open = ref(false);
</script>
