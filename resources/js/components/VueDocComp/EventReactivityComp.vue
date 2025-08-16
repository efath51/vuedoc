<script setup lang="ts">
import { reactive, ref } from 'vue';
import Separator from '../ui/separator/Separator.vue';

const location = ref('Dahaka');

function buttonClicked(location1) {
    alert('Button clicked!' + location1);
}

function changeLocation(newlocation) {
    location.value = newlocation;
}

const locationObject = reactive({
    location: 'Dhaka',
    weather: 'Sunny',
});

function changeLocationObject(newLocation1) {
    locationObject.location = newLocation1;
    locationObject.weather = newLocation1 === 'dhaka' ? 'Sunny' : 'Rainy';
}

const accordionItems = ref(0);
const accordions = reactive([false, false, false, false]);

function toggleAccordion(index) {
    accordions[index] = !accordions[index];
}

import { accordionItemsLER } from '@/imdata';
import {images} from '@/imdata';

const activeImage = ref('https://images.pexels.com/photos/34950/pexels-photo.jpg');

function setImage(image) {
    activeImage.value = image.src;
}

// function toggleAccordion_LER(index) {
//     accordionItemsLER[index] = true;
// }
</script>

<template>
    <div class="bg-background ps-2 text-foreground mb-52">
        <section>
            <h1 class="mb-4 text-2xl font-bold">Event and Reactivity in Vue</h1>
            <p class="mb-4 text-gray-400">
                This section covers the basics of event handling and reactivity in Vue.js. You will learn how to create reactive data properties,
                handle events, and understand the reactivity system that Vue provides.
            </p>
            <p class="mb-4">
                Vue's reactivity system allows you to create dynamic applications that respond to user input and data changes. By using Vue's event
                handling capabilities, you can create interactive components that update in real-time as the underlying data changes.
            </p>
            <p class="mb-4">In this section, we will explore how to:</p>
            <ul class="mb-4 list-disc pl-5">
                <li>Create reactive data properties using the `ref` and `reactive` APIs</li>
                <li>Handle user events such as clicks and input changes</li>
                <li>Use computed properties to derive values from reactive data</li>
                <li>Understand the lifecycle of a Vue component and how it relates to reactivity</li>
                <li>Implement watchers to respond to changes in reactive data</li>
            </ul>
            <p class="mb-4">
                By the end of this section, you will have a solid understanding of how to work with events and reactivity in Vue.js, enabling you to
                build dynamic and responsive applications.
            </p>
            <p class="mb-4">Let's get started with the basics of reactivity!</p>
        </section>

        <section class="mt-8">
            <h2 class="mb-4 text-xl font-semibold">Key Concepts</h2>
            <ul class="mb-4 list-disc pl-5">
                <li>
                    <strong>Reactivity:</strong> Vue's reactivity system allows you to create data properties that automatically update the DOM when
                    their values change.
                </li>
                <li><strong>Events:</strong> Vue provides a simple way to handle user interactions through event listeners.</li>
                <li><strong>Computed Properties:</strong> These are derived properties that automatically update when their dependencies change.</li>
                <li><strong>Watchers:</strong> Watchers allow you to perform actions in response to changes in reactive data.</li>
            </ul>
        </section>

        <!-- Click events -->
        <section class="mt-10">
            <h2 class="mb-2 text-2xl font-semibold">Click events</h2>
            <Separator class="mb-4" />

            <p class="mb-4">
                This button uses the @click directive to handle click events. When clicked, it will trigger the
                <code class="underline">handleClick</code> method.
            </p>
            <div>
                <p class="my-4 text-gray-500">Click the buttons above to see the alert message.</p>

                <div class="flex space-x-4">
                    <button class="rounded bg-primary px-4 py-2 text-black" @click="buttonClicked('dhaka')">Dhaka</button>

                    <button class="rounded bg-primary px-4 py-2 text-black" @click="buttonClicked('chittagong')">Chittagong</button>
                </div>

                <h3 class="mt-5 text-2xl font-semibold">ref (for-const variable)</h3>
                <hr class="w-1/3" />

                <p class="my-4 text-gray-500">Showing & Changing the attribute to the html using (ref) & use it by location.value</p>
                <div class="mt-4">
                    <div class="flex space-x-4">
                        <button class="rounded bg-primary px-4 py-2 text-black" @click="changeLocation('dhaka')">Dhaka</button>

                        <button class="rounded bg-primary px-4 py-2 text-black" @click="changeLocation('chittagong')">Chittagong</button>
                    </div>

                    <p class="mt-4 text-gray-300">you have clicked on : {{ location }}</p>
                </div>

                <h3 class="mt-5 text-2xl font-semibold">reactive (for-objects)</h3>
                <hr class="w-1/3" />
                <p class="my-5">
                    To make a object reactive, you can use the <code class="underline">reactive</code> function from Vue. This allows you to create an
                    object that Vue will track for changes.
                </p>

                <div class="mt-4">
                    <div class="flex space-x-4">
                        <button class="rounded bg-blue-300 px-4 py-2 text-black" @click="changeLocationObject('dhaka')">Dhaka</button>

                        <button class="rounded bg-blue-300 px-4 py-2 text-black" @click="changeLocationObject('chittagong')">Chittagong</button>
                    </div>

                    <p class="mt-4 text-gray-300">you have clicked on : {{ locationObject.weather }}</p>
                </div>

                <div>
                    <p class="mt-4">Click the buttons above to see the alert message.</p>
                    <p class="mt-2 text-gray-500">
                        This is a simple demonstration of handling click events in Vue.js. You can replace the alert with any other logic you want to
                        execute when the button is clicked.
                    </p>
                </div>
            </div>
        </section>

        <!-- Accordion -->
        <section class="my-10">
            <h2 class="mb-2 text-2xl font-semibold">Accordion</h2>
            <Separator class="mb-4" />

            <p class="my-5">
                This accordion component demonstrates how to handle click events to toggle the visibility of content sections. Here we use a central
                index to check which accordion item is currently open. Clicking on an accordion header will update the index, showing or hiding the
                corresponding content.
                <code class="underline">:class="accordionItems == 0 ? '' : 'hidden'"</code> method.
            </p>

            <div class="mx-auto max-w-xl rounded-lg border bg-muted p-4 shadow-lg">
                <div class="mb-2">
                    <div
                        class="cursor-pointer rounded-t bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="accordionItems = 0"
                    >
                        Accordion 1
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" :class="accordionItems == 0 ? '' : 'hidden'">
                        Content for accordion 1.<br />
                        This accordion explains the basics of Vue reactivity and how data updates the UI.
                    </div>
                    <div
                        class="cursor-pointer bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="accordionItems = 1"
                    >
                        Accordion 2
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" :class="accordionItems == 1 ? '' : 'hidden'">
                        Content for accordion 2.<br />
                        Learn about event handling in Vue and how to respond to user actions.
                    </div>
                    <div
                        class="cursor-pointer bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="accordionItems = 2"
                    >
                        Accordion 3
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" :class="accordionItems == 2 ? '' : 'hidden'">
                        Content for accordion 3.<br />
                        Discover computed properties and how they help derive values from reactive data.
                    </div>
                    <div
                        class="cursor-pointer rounded-b bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="accordionItems = 3"
                    >
                        Accordion 4
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" :class="accordionItems == 3 ? '' : 'hidden'">
                        Content for accordion 4.<br />
                        Watchers let you run code in response to data changes in your Vue app.
                    </div>
                </div>
            </div>
        </section>

        <!-- Reactive Array -->
        <section class="my-10">
            <h2 class="mb-2 text-2xl font-semibold">Reactive Array</h2>
            <Separator class="mb-4" />

            <p class="my-5">
                The <code class="underline">toggleAccordion</code> function updates the array to show or hide each accordion item. When you click an
                accordion header, the corresponding value in the array changes, and the UI updates automatically to reflect the current state.
            </p>

            <div class="mx-auto max-w-xl rounded-lg border bg-muted p-4 shadow-lg">
                <div class="mb-2">
                    <div
                        class="cursor-pointer rounded-t bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="toggleAccordion(0)"
                    >
                        Accordion 1
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" v-show="accordions[0]">
                        Content for accordion 1.<br />
                        This accordion explains the basics of Vue reactivity and how data updates the UI.
                    </div>
                    <div
                        class="cursor-pointer bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="toggleAccordion(1)"
                    >
                        Accordion 2
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" v-show="accordions[1]">
                        Content for accordion 2.<br />
                        Learn about event handling in Vue and how to respond to user actions.
                    </div>
                    <div
                        class="cursor-pointer bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="toggleAccordion(2)"
                    >
                        Accordion 3
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" v-show="accordions[2]">
                        Content for accordion 3.<br />
                        Discover computed properties and how they help derive values from reactive data.
                    </div>
                    <div
                        class="cursor-pointer rounded-b bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                        @click="toggleAccordion(3)"
                    >
                        Accordion 4
                    </div>
                    <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" v-show="accordions[3]">
                        Content for accordion 4.<br />
                        Watchers let you run code in response to data changes in your Vue app.
                    </div>
                </div>
            </div>
        </section>

        <!-- Loop-Event-Reactivity -->
        <section class="my-10">
            <h2 class="mb-2 text-2xl font-semibold">Loop-Event-Reactivity</h2>
            <Separator class="mb-4" />

            <p class="my-5">
                This section demonstrates how to use Vue's reactivity system with loops and events. We will create an accordion component that allows
                users to expand and collapse sections dynamically.
            </p>

            <div class="mx-auto max-w-xl rounded-lg border bg-muted p-4 shadow-lg">
                <div class="mb-2">
                    <div class="mb-4" v-for="accordion in accordionItemsLER">
                        <div
                            class="cursor-pointer rounded-t bg-primary/10 px-4 py-3 font-semibold text-primary transition hover:bg-primary/20"
                            @click="accordion.isOpen = !accordion.isOpen"
                        >
                            {{ accordion.heading }}
                        </div>
                        <div class="rounded-b bg-background px-4 py-3 text-muted-foreground" v-show="accordion.isOpen">
                            {{ accordion.content }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Simple image carousel -->
        <section class="my-10">
            <h2 class="mb-2 text-2xl font-semibold">Simple image carousel</h2>
            <Separator class="mb-4" />

            <p class="my-5">
                This section demonstrates how to use Vue's reactivity system with loops and events. We will create an accordion component that allows
                users to expand and collapse sections dynamically.
            </p>

            <div class="mx-auto  rounded-lg border bg-muted p-4 shadow-lg">
                <div class="mb-2">
                   <div class="flex flex-wrap gap-4 justify-center">
                      <img v-for="(image,index) in images" :src="image.src" :key="index" class="h-40 w-40 rounded-lg cursor-pointer" @click="setImage(image)">
                   </div>

                   <div class="mt-10">
                       <p class="text-gray-500">Click on an image to see it in full size.</p>
                       <img class="cursor-pointer w-auto" :src="activeImage" alt="">
                   </div>
                </div>
            </div>
        </section>


 <!-- Event modifier -->
        <section class="mt-10">
            <h2 class="mb-2 text-2xl font-semibold">Event modifier</h2>
            <Separator class="mb-4" />

            <p class="mb-4">
                This button uses the @click directive to handle click events. When clicked, it will trigger the
                <code class="underline">handleClick</code> method.
            </p>

        </section>


    </div>
</template>

<style scoped></style>
