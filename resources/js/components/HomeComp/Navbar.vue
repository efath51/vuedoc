<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { Link, usePage } from '@inertiajs/vue3';

const page = usePage();
const name = page.props.name;

defineProps<{
    title?: string;
    description?: string;
}>();
</script>
<template>
    <nav class="fixed top-0 left-0 z-50 w-full bg-black px-6 py-4 opacity-70 shadow-md">
        <div class="container mx-auto flex items-center justify-between">
            <Link :href="route('home')" class="flex items-center gap-2 self-center font-medium">
                <div class="flex h-9 w-9 items-center justify-center">
                    <AppLogoIcon class="size-9 fill-current text-indigo-600 dark:text-white" />
                </div>
                <h1 class="text-3xl font-bold text-indigo-600">{{ name }}</h1>
            </Link>

            <ul class="flex space-x-6 font-medium text-gray-600">
                <li><a href="#" class="hover:text-black">Home</a></li>
                <li><a href="#" class="hover:text-black">About</a></li>
                <li><a href="#" class="hover:text-black">Services</a></li>
                <li><a href="#" class="hover:text-black">Contact</a></li>
                <li>
                    <Link :href="route('vue-doc')" class="hover:text-blue-950 text-white"> Vue Doc </Link>
                </li>
                <li>
                    <Link :href="route('login')" class="hover:text-blue-950 text-white"> Log in </Link>
                </li>
                <li>
                    <Link :href="route('register')" class="hover:text-blue-950 text-white"> Register </Link>
                </li>
            </ul>
        </div>
    </nav>
</template>
