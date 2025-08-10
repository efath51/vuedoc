<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/vue3';
import { AudioWaveform, BookOpen, Bot, Command, Frame, Map, PieChart, Settings2, SquareTerminal } from 'lucide-vue-next';
const page = usePage();
const name = page.props.name;
const quote = page.props.quote;

import NavMain from '@/components/NavMain.vue';
import NavProjects from '@/components/NavProjects.vue';
import TeamSwitcher from '@/components/TeamSwitcher.vue';

import AppLogoIcon from '@/components/AppLogoIcon.vue';

import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

const props = withDefaults(defineProps<SidebarProps>(), {
    collapsible: 'icon',
});

// This is sample data.
const data = {
    user: {
        name: name,
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Vue',
            logo: AppLogoIcon,
            plan: 'Documentation',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
        },
    ],
    navMain: [
        {
            title: 'Structure',
            url: '#',
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: 'Introduction',
                    url: route('docs.introduction'),
                },
                {
                    title: 'Dashboard',
                    url: route('dashboard'),
                    icon: Command,
                },
                {
                    title: 'home',
                    url: route('vue-doc'),
                    icon: Command,
                },
            ],
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <TeamSwitcher :teams="data.teams" />
        </SidebarHeader>
        <SidebarContent>
            <NavMain :items="data.navMain" title="Stracture" />
            <NavProjects :projects="data.projects" />
        </SidebarContent>
        <!-- <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter> -->
        <SidebarRail />
    </Sidebar>
</template>
