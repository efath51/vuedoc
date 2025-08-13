<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
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

            <Link :href="route('home')" class="text-white hover:text-blue-950"> Home </Link>

            <Link :href="route('vue-doc')" class="text-white hover:text-blue-950"> Vue Doc </Link>

            <Link :href="route('login')" class="text-white hover:text-blue-950"> Log in </Link>

            <Link :href="route('register')" class="text-white hover:text-blue-950"> Register </Link>
        </nav>
    </header>
</template>
