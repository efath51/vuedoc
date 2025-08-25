<script setup lang="ts">
import { reactive, ref } from 'vue';

import CodeBlock from '../CodeBlock.vue';
import Comp_vModelTest from './comp_v-modelTest.vue';
import comp_personComponent from './comp_personComponent.vue';

const name = ref('khalid');
const email = ref('Khalid@g.com');

const person = reactive({
    name: 'jhon',
    email: 'jhon@d.com',
});
</script>

<template>
    <div class="mb-52 bg-background ps-2 text-foreground">
        <section>
            <h1 class="mb-4 text-3xl font-bold">Component Model</h1>
            <pre class="mb-4 text-muted-foreground">
যখন একটা কম্পোনেন্ট এর ভ্যারিএবেল কে অন্য় কম্পোনেন্ট থেকে রিয়াক্টিভ এর মতো ব্যাবহার করবো তখন কিছু ম্যাথড ইউস করতে হয়
->props = defineProps()
->modelValue
সেম ভাবে যদি এটাকে ওই কম্পোনেন্ট থেকেও আপডেট করতে চাই তাহলে emit করতে হবে
->emit = defineEmits()
</pre
            >

            <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                <p class="mb-2 text-lg font-semibold">This is main comp input</p>

                <div>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        placeholder="Change name"
                        v-model="name"
                        class="ms-5 mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                <div class="mt-5">
                    <Comp_vModelTest v-model="name" />
                    <Comp_vModelTest v-model="email" />
                </div>

                <p class="mt-5">name : {{ name }}</p>
                <p class="mt-5">email : {{ email }}</p>
            </div>

            <div>
                <CodeBlock :code="v_model_example" language="javascript" />
                <small class="text-muted">This is the component code</small>
                <CodeBlock :code="v_component_example" language="javascript" />
            </div>
        </section>

        <section class="mt-10">
            <h1 class="mb-4 text-2xl font-bold">Passing Objects</h1>
            <pre class="mb-4 text-muted-foreground">
যখন reactive objects পাস করবো তখন আর emit এর বিষয় লাগবে না
just v-model="object.name" আকারে ইউস করতে পারবো;
</pre>

            <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                <p class="mb-2 text-lg font-semibold">This is main comp input</p>

                <!-- <div>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        placeholder="Change name"
                        v-model="person.name"
                        class="ms-5 mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div> -->

                <div class="mt-5">
                    <comp_personComponent :person="person" />
                </div>

                <p class="mt-5">email : {{ person }}</p>
            </div>

            <div>
                <CodeBlock :code="object_pass_in_comp_example" language="javascript" />
                <small class="text-muted">This is the component code</small>
                <CodeBlock :code="object_receive_in_comp_example" language="javascript" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
const v_model_example = `
//this is from main component
const name = ref('khalid');
const email = ref('Khalid@g.com');

<div class="mt-5">
    <Comp_vModelTest v-model="name"/>
    <Comp_vModelTest v-model="email"/>
</div>

<p class="mt-5">name : {{ name }}</p>
<p class="mt-5">email : {{ email }}</p>
`;

const v_component_example = `
const props=defineProps([
    'label','modelValue'
]);
const emit = defineEmits(['update:modelValue'])

<template>
 <input
    type="text"
    placeholder="Change name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
 />
</template>
`;

const object_pass_in_comp_example = `
//this is from main component
const person = reactive({
    name: 'jhon',
    email: 'jhon@d.com',
});
<div class="mt-5">
    <comp_personComponent :person="person" />
</div>
`;

const object_receive_in_comp_example = `
const props = defineProps(['person'])

<label for="name">Name</label>
<input v-model="person.name"/>

<label for="email">Email</label>
<input v-model="person.email" />
`;

</script>
<style scoped></style>
