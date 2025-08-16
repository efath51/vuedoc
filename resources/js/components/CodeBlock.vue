<template>
  <div class="relative w-full rounded-lg bg-zinc-900 text-sm font-mono">
    <Button
      @click="copyCode"
      variant="ghost"
      size="icon"
      class="absolute top-2 right-2 z-10 h-7 w-7 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"
    >
        <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    </Button>

    <div class="flex">
      <div class="flex-shrink-0 select-none p-4 text-right text-zinc-600">
        <div style="margin-bottom: .9px;" v-for="n in lineCount" :key="n">{{ n }}</div>
      </div>

      <pre class="flex-grow p-0 overflow-x-auto"><code class="hljs" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import highlight.js core and the desired language
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml' // For HTML
import css from 'highlight.js/lib/languages/css' // For CSS
import bash from 'highlight.js/lib/languages/bash' // For shell scripts

// Import a CSS theme for highlighting. More themes available on highlight.js website.
import 'highlight.js/styles/atom-one-dark.css'

// Import your shadcn-vue Button component
import { Button } from '@/components/ui/button'

// Register the languages you want to support
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml) // aliased to 'html'
hljs.registerLanguage('css', css)
hljs.registerLanguage('bash', bash)

// Define the component's props
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript', // Default language if none is provided
  },
})

// --- FIX ---
// NEW: A computed property to trim leading/trailing whitespace from the code prop.
// This is the main fix for the numbering issue.
const trimmedCode = computed(() => props.code.trim())

// A ref to track the "copied" state for user feedback
const copied = ref(false)

// UPDATED: A computed property to count the number of lines in the *trimmed* code
const lineCount = computed(() => {
  return trimmedCode.value.split('\n').length
})

// UPDATED: A computed property that highlights the *trimmed* code
const highlightedCode = computed(() => {
  if (hljs.getLanguage(props.language)) {
    // Use the trimmedCode computed property here
    return hljs.highlight(trimmedCode.value, {
      language: props.language,
      ignoreIllegals: true,
    }).value
  }
  // Return the trimmedCode if language is not supported
  return trimmedCode.value
})

// UPDATED: Function to copy the *trimmed* code to the clipboard
const copyCode = () => {
  // Use the trimmedCode computed property here
  navigator.clipboard.writeText(trimmedCode.value).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}
</script>

<style>
/* Optional: Customize the hljs background to match shadcn's dark theme perfectly */
.hljs {
  background: transparent !important;
  color: #e2e8f0; /* A light gray for default text */
}

/* Ensure line numbers and code lines have the same height for perfect alignment */
pre, .line-numbers {
  line-height: 1.5;
}
</style>
