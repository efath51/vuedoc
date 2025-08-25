<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import CodeBlock from '../CodeBlock.vue';

import { images } from '@/imdata';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const location = ref('Dahaka');

const status = ref([]);

onMounted(() => {
    status.value.push('onMounted: Component has been mounted');
});
onBeforeMount(() => {
    status.value.push('onBeforeMount: Component is about to be mounted');
});

const apiResponse = ref({});

onBeforeMount(() => {
    status.value.push('onBeforeMount: Calling API to fetch data');

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((data) => {
            apiResponse.value = data;
        })
        .catch((error) => {
            status.value.push('Error fetching data');
            console.error(error);
        });
});

onMounted(() => {
    status.value.push('onMounted: Component has been mounted');
});

const onUpdateScript = `
import { onUpdate } from 'vue';
const location = ref('Dahaka');

onUpdate(() => {
    console.log('Location updated:', location.value);
});
`;

let carouselInstance = null;

onMounted(() => {
    carouselInstance = new Flickity('#carousel');
});

onBeforeUnmount(() => {
    if (carouselInstance) {
        carouselInstance.destroy();
    }
});
</script>

<template>
    <div class="mb-52 bg-background ps-2 text-foreground">
        <section>
            <h1 class="mb-8 text-4xl font-bold">Event Modifier</h1>
            <p class="mb-4 text-muted-foreground">
                Event modifiers are special attributes that can be added to event listeners in Vue.js to modify the behavior of the event handling.
            </p>
        </section>

        <section>
            <h1 class="mb-4 text-2xl font-bold">OnMounted & onBeforeMount</h1>
            <p class="mb-4 text-muted-foreground">
                The <code>onMounted</code> and <code>onBeforeMount</code> lifecycle hooks are used to run code at specific points in the component's
                lifecycle.
            </p>
            <!-- <CodeBlock :code="eventModifierHTML" language="html" /> -->
            <p class="mt-4 text-muted-foreground">
                The <code>onMounted</code> hook is called after the component has been mounted to the DOM, while the <code>onBeforeMount</code> hook
                is called right before the component is mounted.
            </p>

            <hr />
            <div>
                <p class="mt-4">
                    {{ status }}
                </p>
            </div>

            <div class="mt-10">
                <p class="mt-4">
                    {{ apiResponse }}
                    {{ status }}
                </p>

                <!-- <div class="my-4 rounded bg-muted p-4 text-muted-foreground">
                    <div><strong>ID:</strong> {{ apiResponse.id }}</div>
                    <div><strong>Name:</strong> {{ apiResponse.name }}</div>
                    <div><strong>Username:</strong> {{ apiResponse.username }}</div>
                    <div><strong>Email:</strong> {{ apiResponse.email }}</div>
                    <div><strong>Address:</strong> {{ apiResponse.address.street }}, {{ apiResponse.address.city }}</div>
                    <div><strong>Phone:</strong> {{ apiResponse.phone }}</div>
                    <div><strong>Website:</strong> {{ apiResponse.website }}</div>
                    <div><strong>Company:</strong> {{ apiResponse.company.name }}</div>
                </div> -->
            </div>
        </section>

        <section class="mt-10">
            <div>
                <h1 class="mb-4 text-2xl font-bold">OnUpdate</h1>
                <p class="mb-4 text-muted-foreground">
                    কম্পোনেন্টের ডেটা আপডেট হলে <code>onUpdate</code> হুকটি ব্যবহার করা হয়। এটি ডেটা পরিবর্তনের পর কার্যকর হয় এবং নতুন মানের সাথে
                    কাজ করতে দেয়।

                    <br />
                    যেমন: একটা ভ্যারিবেল আছে <code>location =ref() </code>
                    <br />
                    এখন আমি যদি চাই সাইটের কোন একটা অংশে নতুন কিছু যোগ করতে, তাহলে আমি <code>onUpdate</code> হুক ব্যবহার করতে পারি।
                    <br />
                </p>
                <CodeBlock :code="onUpdateScript" language="javascript" />
            </div>
        </section>

        <section class="mt-10">
            <h1 class="mb-4 text-2xl font-bold">Carousel with hooks</h1>

            <div id="carousel" class="carousel ">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    :style="{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }"
                    class="carousel-cell h-60 w-60 rounded-lg"
                />
            </div>
        </section>
    </div>
</template>

<style scoped>
.carousel {
  width: 100%;
}

.carousel-cell {
  width: 360px;   /* same as w-40 */
  height: 360px;  /* same as h-40 */
  margin-right: 10px;
}
</style>
