<script setup lang="ts">
import { reactive, ref } from 'vue';

import CodeBlock from '@/components/CodeBlock.vue';
import { countries } from '@/imdata';
const vm_color = ref('ex:#c678bb');

function updateColor(event: Event) {
    const target = event.target as HTMLInputElement;
    vm_color.value = target.value;
}

const vm_object = ref({
    name: 'John Doe',
    age: 30,
    email: 'j@g.com',
});

const vm_checked = ref(true);

const vm_radio = ref('option1');

const vm_objectHTML = `
const vm_object = ref({
    name: 'John Doe',
    age: 30,
    email: 'j@g.com',
});

 <p class="mb-2 text-lg font-semibold">Object :  {{ vm_object }}!</p>
 <input
    type="text" v-model="vm_object.name" placeholder="Change name"
/>
`;

const vm_object_looptHTML = `
<div v-for="(value, key, index) in vm_object" :key="key" class="mb-2">
    <span class="font-semibold">{{ key }}:</span>
    <input type="text" v-model="vm_object[key]" :placeholder="'Change ' + key"
    />
</div>
`;

const vm_nameHTML = `
const vm_color=ref('none'); //script setup
function updateColor(event: Event) {
    const target = event.target as HTMLInputElement;
    vm_color.value = target.value;
}

<div class="mt-5" :style="{ backgroundColor: vm_color }">
    <p class="mb-2 text-lg font-semibold">Chose color: {{ vm_color }}!</p>
    <input
        type="text" v-model="vm_color" placeholder="Enter your name"
        class="mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
    />
</div>
`;
</script>

<template>
    <div class="mb-52 bg-background ps-2 text-foreground">
        <section>
            <h1 class="mb-4 text-3xl font-bold">Two Way Data Binding</h1>
            <p class="mb-4 text-muted-foreground">
                Two-way data binding is a powerful feature in Vue.js that allows for automatic synchronization of data between the model and the view.
                This means that when the data in the model changes, the view updates automatically, and when the user interacts with the view (e.g.,
                through form inputs), the model is updated accordingly.
            </p>
        </section>

        <div class="my-5">
            <h1 class="mb-4 text-3xl font-bold">V-model</h1>
            <p class="mb-4 text-muted-foreground">
                The <code>v-model</code> directive is used to create two-way data bindings on form input, textarea, and select elements. It
                automatically picks the correct way to update the element based on the input type.
            </p>
        </div>
        <hr />
        <section class="mt-5">
            <h1 class="mb-1 text-2xl font-bold">Input Example</h1>
            <p class="mb-4 text-muted-foreground">
                The following example demonstrates how to use the <code>v-model</code> directive to bind a text input to a Vue instance property.
            </p>
            <div class="mt-5">
                <div
                    class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white"
                    :style="{ backgroundColor: vm_color }"
                >
                    <p class="mb-2 text-lg font-semibold">Chose color : {{ vm_color }}!</p>
                    <input
                        type="text"
                        v-model="vm_color"
                        placeholder="Example :#5321435"
                        class="mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <input type="color" v-model="vm_color" class="mt-2 h-8 w-16 rounded border border-neutral-700" />
                </div>

                <div class="mt-5">
                    <h3 class="mb-1 font-mono text-xl underline">code</h3>
                    <CodeBlock :code="vm_nameHTML" language="js" />
                </div>
            </div>
        </section>

        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Object binding</h1>
            <p class="mb-4 text-muted-foreground">
                You can also bind an object to the <code>v-model</code> directive. This allows you to create a two-way binding for multiple properties
                in a single input element.
            </p>

            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <p class="mb-2 text-lg font-semibold">Object : {{ vm_object }}!</p>
                    <input
                        type="text"
                        v-model="vm_object.name"
                        placeholder="Change name"
                        class="mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_objectHTML" language="js" />
                </div>
            </div>

            <hr class="mt-5" />
            <div class="mt-5">
                <p class="mb-0 text-lg font-semibold text-gray-500">Same thing using loop</p>
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <div v-for="(value, key, index) in vm_object" :key="key" class="mb-2">
                        <span class="font-semibold">{{ key }}:</span>
                        <input
                            type="text"
                            v-model="vm_object[key]"
                            :placeholder="'Change ' + key"
                            class="mt-2 w-64 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <p class="mb-2 text-lg font-semibold">Object : {{ vm_object }}!</p>
                </div>

                <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_object_looptHTML" language="html" />
                </div>
            </div>
        </section>

        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Check box</h1>
            <p class="mb-4 text-muted-foreground">
                You can also bind a checkbox to the <code>v-model</code> directive. This allows you to create a two-way binding for checkbox inputs.
            </p>
            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <p class="mb-2 text-lg font-semibold">Check : {{ vm_checked }}!</p>
                    <input
                        type="checkbox"
                        v-model="vm_checked"
                        placeholder="Change name"
                        class="mt-2 h-6 w-6 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                <!-- <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_objectHTML" language="js" />
                </div> -->
            </div>
        </section>

        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Radio button</h1>
            <p class="mb-4 text-muted-foreground">You can also bind a radio button to the <code>v-model</code>.</p>
            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <p class="mb-2 text-lg font-semibold">Check : {{ vm_radio }}!</p>
                    <input
                        type="radio"
                        name="options"
                        v-model="vm_radio"
                        :value="'option-1'"
                        class="mt-2 h-6 w-6 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />

                    <input
                        type="radio"
                        name="options"
                        v-model="vm_radio"
                        :value="'option-2'"
                        class="mt-2 h-6 w-6 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />

                    <input
                        type="radio"
                        name="options"
                        v-model="vm_radio"
                        :value="'option-3'"
                        class="mt-2 h-6 w-6 rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_radio_loopHTML" language="js" />
                </div>
            </div>

            <hr class="my-4" />

            <h1 class="mb-1 text-2xl font-bold">checkbox button array</h1>
            <p class="mb-4 text-muted-foreground">You can also bind a radio button to the <code>v-model</code>.</p>
            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <p class="mb-2 text-lg font-semibold">
                        Favorite colors :
                        <span v-if="favColor.length" class="text-blue-300">{{ favColor.join(', ') }}</span>
                        <span v-else class="text-gray-400">None selected</span>
                    </p>
                    <div class="flex gap-6">
                        <label class="flex cursor-pointer items-center">
                            <input type="checkbox" v-model="favColor" value="red" class="h-5 w-5 accent-red-500" />
                            <span class="ml-2 font-semibold text-red-400">Red</span>
                        </label>
                        <label class="flex cursor-pointer items-center">
                            <input type="checkbox" v-model="favColor" value="green" class="h-5 w-5 accent-green-500" />
                            <span class="ml-2 font-semibold text-green-400">Green</span>
                        </label>
                        <label class="flex cursor-pointer items-center">
                            <input type="checkbox" v-model="favColor" value="blue" class="h-5 w-5 accent-blue-500" />
                            <span class="ml-2 font-semibold text-blue-400">Blue</span>
                        </label>
                    </div>
                </div>

                <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_Checkbox_arrayHTML" language="js" />
                </div>
            </div>
        </section>

         <hr class="my-3 mt-10">
        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Quiz Box</h1>
            <p class="mb-4 text-muted-foreground">Select the capital of those counties.</p>
            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-3 text-white">
                    <p class="mb-2 text-lg font-semibold text-yellow-200">Total score {{ getScore() }}! (8)</p>

                    <div v-for="(item, index ) in saarcCountries" :key="index" class="mb-4 w-full">
                        <label class="mb-2 text-xl block font-semibold">what is the capital of {{ item.country }}?</label>
                        <div class="flex  gap-2 bg-slate-800 p-5 rounded-2xl">
                            <label
                                v-for="(country, idx) in saarcCountries"
                                :key="idx"
                                class="flex items-center text-sm text-gray-300"
                            >
                                <input
                                    type="radio"
                                    :value="country.capital"
                                    v-model="item.answer"
                                    :name="item.country"
                                    class="mr-2 accent-blue-500"
                                />
                                {{ country.capital }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_objectHTML" language="js" />
                </div> -->
            </div>
        </section>



         <hr class="mt-10">
        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Person details load and update (ex)</h1>

            <p class="mb-4 text-muted-foreground">Selected person is {{ persons }}</p>

            <div class="mt-5">
                <div class="my-3 flex flex-col items-center justify-center rounded-lg bg-neutral-900 p-6 text-white w-full max-w-md mx-auto">
                    <div class="mb-4 w-full">
                        <label for="person" class="block mb-2 text-lg font-semibold">Select Person:</label>
                        <select
                            name="person"
                            id="person"
                            v-model="activeIndex"
                            class="w-full rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                            <option :value="index" v-for="(item, index) in persons" :key="index">{{ item.name }}</option>
                        </select>
                    </div>


                    <div v-if="activeIndex !== undefined && persons[activeIndex]" class="w-full">
                        <label class="block mb-2 text-lg font-semibold">Edit Details:</label>
                        <div class="mb-2">
                            <input
                                type="text"
                                v-model="persons[activeIndex].name"
                                placeholder="Name"
                                class="w-full rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                type="number"
                                v-model="persons[activeIndex].age"
                                placeholder="Age"
                                class="w-full rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                        <div class="mb-2">
                            <input
                                type="email"
                                v-model="persons[activeIndex].email"
                                placeholder="Email"
                                class="w-full rounded border border-neutral-700 bg-neutral-800 p-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <!-- <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_objectHTML" language="js" />
                </div> -->
            </div>
        </section>


 <hr class="mt-10">
        <section class="mt-10">
            <h1 class="mb-1 text-2xl font-bold">Dynamic search</h1>

            <p class="mb-4 text-muted-foreground">Search : {{ search }}</p>

            <div class="mt-5">
            <div class="my-6 w-full max-w-md mx-auto">
                <!-- Search Bar -->
                <div class="mb-3">
                    <input
                    v-model="search"
                    type="text"
                    placeholder="Search country..."
                    class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <!-- Country List -->
                <div class="rounded-lg bg-neutral-900 p-4 text-white max-h-64 overflow-y-auto shadow-lg">
                    <ul class="divide-y divide-neutral-800">
                    <li
                        v-for="country in filteredCountries()"
                        :key="country.code"
                        class="cursor-pointer px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-blue-400 transition"
                    >
                        {{ country.name }}
                    </li>
                    </ul>
                </div>
                </div>


                <div class="mt-5">
                    <code>code</code>
                    <CodeBlock :code="vm_dynamic_search" language="js" />
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">

// function getRandomCapital(){
//     return saarcCountries[Math.floor(Math.random() * saarcCountries.length)].capital;
// }

const activeIndex=ref();

const search =ref('');

function filteredCountries(){
    return countries.filter(country=>{
        return country.name.toLowerCase().includes(search.value.toLowerCase())
    })
}

const persons =reactive([
  { name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
  { name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
  { name: "Charlie Lee", age: 22, email: "charlie.lee@example.com" },
  { name: "Diana Patel", age: 30, email: "diana.patel@example.com" },
  { name: "Ethan Brown", age: 25, email: "ethan.brown@example.com" }
]);

function getScore(){
    let score=0;
    saarcCountries.forEach(country=>{
        if(country.answer === country.capital){
            score++
        }
    })
    return score;
}


const saarcCountries = reactive( [
    { country: 'Afghanistan', capital: 'Kabul'},
    { country: 'Bangladesh', capital: 'Dhaka'},
    { country: 'Bhutan', capital: 'Thimphu'},
    { country: 'India', capital: 'New Delhi'},
    { country: 'Maldives', capital: 'Malé' },
    { country: 'Nepal', capital: 'Kathmandu'},
    { country: 'Pakistan', capital: 'Islamabad'},
    { country: 'Sri Lanka', capital: 'Kotte'},
]);

const favColor = ref([]);


const vm_dynamic_search = `
const search =ref('');

function filteredCountries(){
    return countries.filter(country=>{
        return country.name.toLowerCase().includes(search.value.toLowerCase())
    })
}

<input v-model="search"  type="text" />
<li v-for="country in filteredCountries()"
    :key="country.code"
    class="cursor-pointer px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-blue-400 transition"
>
    {{ country.name }}
</li>

`;


const vm_radio_loopHTML = `
    <p class="mb-2 text-lg font-semibold">Check : {{ vm_radio }}!</p>
    <input type="radio" name="options" v-model="vm_radio" :value="'option-1'" />
    <input type="radio" name="options" v-model="vm_radio" :value="'option-2'" />
    <input type="radio" name="options" v-model="vm_radio" :value="'option-3'" />

`;

const vm_Checkbox_arrayHTML = `
    <p class="mb-2 text-lg font-semibold">Check : {{ vm_radio }}!</p>

    <input type="checkbox" id="color" v-model="favColor" value="red"/>
    <input type="checkbox" id="color" v-model="favColor" value="blue"/>
    <input type="checkbox" id="color" v-model="favColor" value="green"/>
`;
</script>
<style scoped></style>
