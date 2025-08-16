<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Strike from "@tiptap/extension-strike";
interface Props {
  modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

// const editor = useEditor({
//   extensions: [StarterKit],
//   content: props.modelValue || "",
//   onUpdate: ({ editor }) => {
//     emit("update:modelValue", editor.getHTML());
//   },
// });

const editor = useEditor({
  extensions: [
    StarterKit,
    Link.configure({ openOnClick: false }),
    Strike
  ],
  content: props.modelValue || "",
  onUpdate: ({ editor }) => {
    emit("update:modelValue", editor.getHTML());
  },
});


function setLink() {
  const url = window.prompt('Enter URL');
  if (url === null) return;
  if (url === '') {
    editor?.chain().focus().unsetLink().run();
    return;
  }
  editor?.chain().focus().setLink({ href: url }).run();
}


</script>

<template>
  <div class="border rounded-md overflow-hidden bg-white dark:bg-gray-900">
    <!-- Toolbar -->
<div
  v-if="editor"
  class="flex flex-wrap gap-2 p-2 border-b bg-gray-50 dark:bg-gray-800"
>
  <!-- Text Styles -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleBold().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('bold') }"
  >Bold</button>

  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleItalic().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('italic') }"
  >Italic</button>

  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleStrike().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('strike') }"
  >Strike</button>

  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleCode().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('code') }"
  >Code</button>

  <!-- Headings -->
  <button
    v-for="n in [1,2,3]"
    :key="n"
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleHeading({ level: n }).run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('heading', { level: n }) }"
  >H{{ n }}</button>

  <!-- Lists -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleBulletList().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('bulletList') }"
  >• List</button>

  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleOrderedList().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('orderedList') }"
  >1. List</button>

  <!-- Blockquote -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleBlockquote().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('blockquote') }"
  >Quote</button>

  <!-- Code Block -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().toggleCodeBlock().run()"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('codeBlock') }"
  >Code Block</button>

  <!-- Horizontal Rule -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="editor.chain().focus().setHorizontalRule().run()"
  >HR</button>

  <!-- Link -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    @click="setLink"
    :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('link') }"
  >Link</button>

  <!-- Clear Formatting -->
  <button
    type="button"
    class="px-2 py-1 text-sm rounded bg-red-100 hover:bg-red-200 dark:hover:bg-red-800 dark:bg-red-900"
    @click="editor.chain().focus().unsetAllMarks().clearNodes().run()"
  >Clear</button>
</div>


    <!-- Editor -->
    <EditorContent
      v-if="editor"
      :editor="editor"
      class="p-4 prose dark:prose-invert min-h-[150px]"
    />
  </div>
</template>

<style scoped>
.prose {
  max-width: 100%;
}
</style>
