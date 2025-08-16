<template>
<div class="bg-[#292D3E] rounded-lg overflow-hidden relative font-mono text-sm w-2/3">
  <div class="relative flex h-auto">
    <pre class="p-3 overflow-x-auto w-full"><code><div
        v-for="(line, index) in codeLines"
        :key="index"
        class="flex items-center h-6"
      >
        <span
          class="text-[#74798c] text-right pr-4 select-none"
          style="min-width: 2rem;"
        >
          {{ index + 1 }}
        </span>
        <span
          v-html="highlight(line)"
          class="py-1"
        ></span>
      </div></code></pre>

    <button
      @click="copyCode"
      class="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition"
      title="Copy to Clipboard"
    >
      📋
    </button>
  </div>
</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// Your code snippet as an array of lines
const codeLines = ref([
  "@include('vendor/autoload.php')",
  "@task('restart-queues')",
  "@include('vendor/autoload.php')",
  "@task('restart-queues')",
  " <p class=>",
           " Welcome to the Introduction section. This page will guide you through the basics","and help you get familiar with the documentation.",
"</p>",
  "@endtask"
])

// Simple highlight function
function highlight(line) {
  return line
    .replace(/@include|@task|@endtask/g, '<span style="color:#C792EA;">$&</span>')
    .replace(/'<([^']+>)'/g, '<span style="color:#C3E88D;">\'$1\'</span>')
    .replace(/# .*/g, '<span style="color:#BFC7D5;">$&</span>')
}

// Copy full code
function copyCode() {
  navigator.clipboard.writeText(codeLines.value.join('\n'))
}
</script>

<style scoped>
pre {
  background-color: #292D3E;
  color: #BFC7D5;
}
</style>
