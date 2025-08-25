<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";
import { usePage } from "@inertiajs/vue3";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-vue-next";
const page = usePage();
const name = page.props.name;
const quote = page.props.quote;

import NavMain from "@/components/NavMain.vue";
import NavProjects from "@/components/NavProjects.vue";
import TeamSwitcher from "@/components/TeamSwitcher.vue";

import AppLogoIcon from "@/components/AppLogoIcon.vue";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

// This is sample data.
const data = {
  user: {
    name: name,
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Vue",
      logo: AppLogoIcon,
      plan: "Documentation",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Structure",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "home",
          url: route("vue-doc"),
          icon: Command,
        },
        {
          title: "Introduction",
          url: route("docs.introduction"),
        },
        {
          title: "Code-Block",
          url: route("docs.code-blocks"),
        },
        {
          title: "Data uses",
          url: route("docs.data"),
          icon: Command,
        },
        {
          title: "Event & Reactivity",
          url: route("docs.event-reactivity"),
          icon: Command,
        },
        {
          title: "Event Modifier",
          url: route("docs.event-modifier"),
          icon: Command,
        },
        {
          title: "Lifecycle Hooks",
          url: route("docs.lifecycle-hooks"),
          icon: Command,
        },
        {
          title: "Two Way Data Binding",
          url: route("docs.two-way-data-binding"),
          icon: Command,
        },
         {
          title: "Component Model",
          url: route("docs.component-model"),
          icon: Command,
        },



      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Invoice",
          url: route("project.invoice"),
        },

      ],
    },
    {
      title: "Tools",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "WYSIWYG",
          url: route("tool.wysiwyg"),
        },

      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
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
