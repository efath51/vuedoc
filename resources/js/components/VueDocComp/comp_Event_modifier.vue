<script setup lang="ts">
import { ref } from 'vue';
import Separator from '../ui/separator/Separator.vue';

const location = ref('Dahaka');

import CodeBlock from '@/components/CodeBlock.vue';
import { eventModifierHTML } from '@/imdata';

const eventExampleScript = `
const spaceCount = ref(0);
const message = ref('');

function spacePressed() {
    spaceCount.value++;
    message.value = \`Space pressed \${spaceCount.value} times\`;
}

function WhatPressed(event) {
    message.value = \`\${event.key}\`;
}

function ctrlRightPressed() {
    message.value = 'Ctrl + Right Click detected';
}

function DivClick() {
    message.value = 'Div clicked';
    // alert('Div clicked');
}
function ButtonClick() {
    message.value = 'Button clicked';
    // alert('Button clicked');
}
`;

const spaceCount = ref(0);
const message = ref('');

function spacePressed() {
    spaceCount.value++;
    message.value = `Space pressed ${spaceCount.value} times`;
}

function WhatPressed(event) {
    message.value = `${event.key}`;
}

function ctrlRightPressed() {
    message.value = 'Ctrl + Right Click detected';
}

function DivClick() {
    message.value = 'Div clicked';
    // alert('Div clicked');
}
function ButtonClick() {
    message.value = 'Button clicked';
    // alert('Button clicked');
}

const eventExampleHTML = `

<!-- the submit event will no longer reload the page -->
<form @submit.prevent>

    <!-- For capture the SPACE key -->
    <input @keyup.space="spacePressed()"/>

    <!-- Shows what key type in the input -->
    <input @keyup="WhatPressed($event)"

    <!-- ctrl+right-click -->
    <button @click.prevent.ctrl.right="ctrlRightPressed()">
        ctrl+right-click
    </button>

    <button @click="message = ''" >Clear message</button>

    <!-- Shows the message -->
    <h2>Output: {{ message }}</h2>

    <!-- by adding .stop its make the button workable one time -->
    <div @click="DivClick()" >
        <button @click.stop="ButtonClick()">Click Me</button>
    </div>
</form>
`;
</script>

<template>
    <div class="mb-52 bg-background ps-2 text-foreground">
        <section>
            <h1 class="mb-4 text-2xl font-bold">Event Modifier</h1>
            <p class="mb-4 text-muted-foreground">
                Event modifiers are special attributes that can be added to event listeners in Vue.js to modify the behavior of the event handling.
            </p>
            <p class="mb-4 text-muted-foreground">
                They allow you to control how events are handled, such as preventing default behavior, stopping propagation, and more.
            </p>
            <p class="mb-4 text-muted-foreground">In this example, we will explore the use of event modifiers in Vue.js.</p>
            <Separator class="my-4" />
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.prevent</code> modifier prevents the default action of the click event, which is to
                navigate to a link.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.stop</code> modifier stops the propagation of the click event, preventing it from
                bubbling up to parent elements.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.self</code> modifier ensures that the event is only triggered when the element itself
                is clicked, not when its children are clicked.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.capture</code> modifier captures the event during the capturing phase, allowing you to
                handle the event before it reaches the target element.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.once</code> modifier ensures that the event handler is only called once, even if the
                event is triggered multiple times.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.passive</code> modifier indicates that the event handler will not call
                <code>preventDefault()</code>, allowing the browser to optimize scrolling performance.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.native</code> modifier allows you to listen to native DOM events instead of Vue's
                synthetic events, which can be useful when you need to access the native event object directly.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.once.native</code> modifier combines the functionality of <code>@click.once</code> and
                <code>@click.native</code>, ensuring that the native event handler is only called once.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.self.native</code> modifier combines the functionality of <code>@click.self</code> and
                <code>@click.native</code>, ensuring that the native event handler is only triggered when the element itself is clicked, not when its
                children are clicked.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.stop.native</code> modifier combines the functionality of <code>@click.stop</code> and
                <code>@click.native</code>, ensuring that the native event handler stops the propagation of the click event, preventing it from
                bubbling up to parent elements.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.prevent.native</code> modifier combines the functionality of
                <code>@click.prevent</code> and <code>@click.native</code>, ensuring that the native event handler prevents the default action of the
                click event, which is to navigate to a link.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.capture.native</code> modifier combines the functionality of
                <code>@click.capture</code> and <code>@click.native</code>, ensuring that the native event handler captures the event during the
                capturing phase, allowing you to handle the event before it reaches the target element.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.passive.native</code> modifier combines the functionality of
                <code>@click.passive</code> and <code>@click.native</code>, indicating that the native event handler will not call
                <code>preventDefault()</code>, allowing the browser to optimize scrolling performance.
            </p>
            <p class="mb-4 text-muted-foreground">
                The <code class="text-muted-foreground">@click.once.passive</code> modifier combines the functionality of <code>@click.once</code> and
                <code>@click.passive</code>, ensuring that the event handler is only called once and will not call <code>preventDefault()</code>,
                allowing the browser to optimize scrolling performance.
            </p>
        </section>

        <section>
            <h2 class="mb-4 text-xl font-bold">Example</h2>
            <p class="mb-4 text-muted-foreground">
                Below is an example of how to use event modifiers in Vue.js. The code demonstrates various event modifiers applied to a button click
                event.
            </p>
            <div class="w-full max-w-2xl">
                <!-- <h2 class="mb-4 text-xl font-semibold text-foreground">JavaScript Example</h2> -->
                <CodeBlock :code="eventModifierHTML" language="javascript" />
            </div>
        </section>

        <section class="mx-auto my-8">
            <form @submit.prevent action="https://google.com/search">
                <div class="mb-6 rounded-lg bg-muted p-4 shadow">
                    <label class="mb-2 block text-sm font-medium text-muted-foreground">Space count</label>
                    <input
                        @keyup.space="spacePressed()"
                        type="text"
                        class="mb-4 w-full rounded border bg-background px-3 py-2 text-foreground"
                        placeholder="Enter first value"
                    />

                    <label class="mb-2 block text-sm font-medium text-muted-foreground">What press...</label>
                    <input
                        @keyup="WhatPressed($event)"
                        type="text"
                        class="mb-4 w-full rounded border bg-background px-3 py-2 text-foreground"
                        placeholder="Enter first value"
                    />

                    <div class="flex justify-between">
                        <button @click.prevent.ctrl.right="ctrlRightPressed()" class="rounded bg-primary px-4 py-2 font-semibold text-blue-300">
                            ctrl+right-click
                        </button>
                        <button @click="message = ''" class="rounded bg-primary px-4 py-2 font-semibold text-red-400">Clear message</button>
                    </div>
                    <h2 class="mt-4 text-xl font-semibold text-primary">Output: {{ message }}</h2>
                </div>
                <div @click="DivClick()" class="flex justify-center rounded-lg bg-muted p-4 shadow">
                    <button @click.stop="ButtonClick()" class="rounded bg-primary px-4 py-2 font-semibold text-blue-500">Click Me</button>
                </div>
            </form>

            <div class="mt-6 rounded-lg bg-muted p-4 shadow">
                <h2 class="mb-4 text-xl font-semibold text-foreground">Example code</h2>
                <p class="mb-4 text-muted-foreground">This example demonstrates how to use event modifiers in Vue.js.</p>
                <CodeBlock :code="eventExampleScript" language="javascript" />

                <p class="mt-4 text-muted-foreground">The HTML code for the example is as follows:</p>
                <CodeBlock :code="eventExampleHTML" language="html" />
            </div>
        </section>
    </div>
</template>

<style scoped></style>
