<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAppearance } from '@/composables/useAppearance';
import type { BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/vue3';
withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItemType[];
    }>(),
    {
        breadcrumbs: () => [],
    },
);
const { appearance, updateAppearance } = useAppearance();

import { Monitor, Moon, Sun } from 'lucide-vue-next';

const tabs = [
    { value: 'light', Icon: Sun, label: 'Light' },
    { value: 'dark', Icon: Moon, label: 'Dark' },

] as const;

</script>

<template>
    <header
        class="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
    >
        <!-- Left section -->
        <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <template v-if="breadcrumbs && breadcrumbs.length > 0">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </template>
        </div>



        <!-- Right section -->
        <nav class="flex items-center gap-4 pe-5">

            <div class="inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
                    <button
                        v-for="{ value, Icon } in tabs"
                        :key="value"
                        @click="updateAppearance(value)"
                        :class="[
                            'flex items-center rounded-md px-3.5 py-1.5 transition-colors',
                            appearance === value
                                ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                                : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                        ]"
                    >
                        <component :is="Icon" class="-ml-1 h-4 w-4" />

                    </button>
             </div>


            <Link :href="route('home')" class="text-white hover:text-blue-950"> Home </Link>

            <Link :href="route('vue-doc')" class="text-white hover:text-blue-950"> Vue Doc </Link>

            <Link :href="route('login')" class="text-white hover:text-blue-950"> Log in </Link>

            <Link :href="route('register')" class="text-white hover:text-blue-950"> Register </Link>
        </nav>
    </header>
</template>
