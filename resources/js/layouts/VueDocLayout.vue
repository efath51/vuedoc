<script setup lang="ts">
import Navbar from '@/layouts/app/AppSidebarLayout.vue';
import { BreadcrumbItemType } from '@/types';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}


withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <Navbar :breadcrumbs="breadcrumbs">
      <slot />
    </Navbar>
</template>
