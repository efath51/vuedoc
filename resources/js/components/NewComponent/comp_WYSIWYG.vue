<script setup lang="ts">
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import { Bold, Redo2, Undo2 } from 'lucide-vue-next';

interface Props {
    modelValue: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
    // Add the new extensions here
    extensions: [
        StarterKit,
        Underline,
        Strike,
        Link.configure({ openOnClick: false }),
        Placeholder.configure({
            placeholder: 'Start writing your masterpiece...',
        }),
    ],
    content: props.modelValue || '',
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML());
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
    <div class="mx-40 overflow-hidden rounded-md border bg-white dark:bg-neutral-900">
        <!-- Toolbar -->
        <div v-if="editor" class="flex flex-wrap gap-2 border-b bg-gray-50 p-2 dark:bg-gray-950">
            <!-- Text Styles -->
            <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('bold') }"
            >
                <Bold class="h-4 w-4" />
            </button>

            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('italic') }"
            >
                Italic
            </button>

            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleUnderline().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('Underline') }"
            >
                Underline
            </button>

            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('strike') }"
            >
                Strike
            </button>

            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleCode().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('code') }"
            >
                Code
            </button>

            <!-- Headings -->
            <button
                v-for="n in [1, 2, 3]"
                :key="n"
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleHeading({ level: n }).run()"
                :class="{
                    'bg-gray-300 dark:bg-gray-600': editor.isActive('heading', { level: n }),
                }"
            >
                H{{ n }}
            </button>

            <!-- Lists -->
            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('bulletList') }"
            >
                • List
            </button>

            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('orderedList') }"
            >
                1. List
            </button>

            <!-- Blockquote -->
            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('blockquote') }"
            >
                Quote
            </button>

            <!-- Code Block -->
            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('codeBlock') }"
            >
                Code Block
            </button>

            <!-- Horizontal Rule -->
            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="editor.chain().focus().setHorizontalRule().run()"
            >
                HR
            </button>

            <!-- Link -->
            <button
                type="button"
                class="rounded px-2 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="setLink"
                :class="{ 'bg-gray-300 dark:bg-gray-600': editor.isActive('link') }"
            >
                Link
            </button>

            <button
                type="button"
                @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().undo()"
                class="flex h-8 w-8 items-center justify-center rounded text-sm hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-gray-700"
            >
                <Undo2 class="h-4 w-4" />
            </button>

            <button
                type="button"
                @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().redo()"
                class="flex h-8 w-8 items-center justify-center rounded text-sm hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-gray-700"
            >
                <Redo2 class="h-4 w-4" />
            </button>

            <!-- Clear Formatting -->
            <button
                type="button"
                class="rounded bg-red-100 px-2 py-1 text-sm hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
                @click="editor.chain().focus().unsetAllMarks().clearNodes().run()"
            >
                Clear
            </button>
        </div>

        <!-- Editor -->
        <EditorContent
            v-if="editor"
            :editor="editor"
            class="prose min-h-[150px] max-w-full p-4 dark:prose-invert [&_.ProseMirror]:focus:outline-none"
        />
    </div>
</template>

<style scoped>
.prose {
    max-width: 100%;
}
</style>
<style>
.tiptap h1 {
    font-size: 32px;
    font-weight: bold;
}

.tiptap h2 {
    font-size: 24px;
    font-weight: bold;
}

.tiptap h3 {
    font-size: 18.79px;
    font-weight: bold;
}

.tiptap p {
    margin: 0;
}

.tiptap h1,
.tiptap h2,
.tiptap h3,
.tiptap h4,
.tiptap h5,
.tiptap h6 {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

/* Tiptap Placeholder Styles */
.tiptap p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
