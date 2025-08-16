<script setup lang="ts">
// const content = ref("<p>Hello world</p>");

function submitForm() {
    console.log('Submitted HTML:', content.value);
    // send via axios to Laravel backend
}

const data = {
    user: {
        name: name,
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Vue',

            plan: 'Documentation',
        },
        {
            name: 'Acme Corp.',

            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',

            plan: 'Free',
        },
    ],

    projects: [
        {
            name: 'Design Engineering',
            url: '#',
        },
        {
            name: 'Sales & Marketing',
            url: '#',
        },
        {
            name: 'Travel',
            url: '#',
        },
    ],
};

function GetDate() {
    let date = new Date();
    return date.toLocaleDateString();
}

import imdata, { bindDataVar } from '@/imdata'; // Importing data from another file
import Separator from '../ui/separator/Separator.vue';

const num = 6;

const location = 'Dhaka';
const weather = 'pc';

const redText = 'text-blue-300';
const bgDarkBlue = 'background-color: #2c3e8f55;';
const bgDarkGreen = 'background-color: #14341855;';
const weakDay = true;

const items = [1, 2, 3, 4, 5];

const quotes = [
    { message: 'The best way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
    { message: 'Success is not in what you have, but who you are.', author: 'Bo Bennett' },
    { message: 'Do not wait to strike till the iron is hot; but make it hot by striking.', author: 'William Butler Yeats' },
    { message: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
    { message: 'Act as if what you do makes a difference. It does.', author: 'William James' },
];

const tasks = [
    { name: 'Write documentation', status: 'completed' },
    { name: 'Design homepage', status: 'in-progress' },
    { name: 'Fix bugs', status: 'pending' },
    { name: 'Deploy to server', status: 'completed' },
    { name: 'Update dependencies', status: 'in-progress' },
];

function filterTask() {
    return tasks.filter((task) => 'completed' === task.status);
}
</script>

<template>
    <section>
        <h1 id="overview" class="mb-4 text-2xl font-bold">Data uses</h1>
        <p class="mb-6 text-stone-400">
            Uses normal data as a variable to display information dynamically. This is useful for rendering user profiles, lists, and other
            data-driven content.
        </p>
    </section>

    <section id="Binding_data_with_html" class="my-5">
        <small>here the output of "data.user.email "</small>
        <h2 id="resources" class="mb-2 text-xl font-semibold">{{ data.user.email }}</h2>
        <br />

        <h3 id="resources" class="mb-2 text-xl font-semibold">Call function in html tag</h3>
        <small>here the output of "function GetDate()"</small>
        <h2 id="resources" class="mb-2 text-xl font-semibold">{{ GetDate() }}</h2>
    </section>

    <Separator />
    <section id="dataFromAnotherFile" class="my-5">
        <h3 id="resources" class="mb-2 text-xl font-semibold text-green-300 underline">Data import</h3>

        <p class="mb-6">import imdata from '@/imdata'; Imoported daata from anotehr file " imdata "</p>

        <h4>
            Imoported daata from anotehr file <small class="text-xl font-semibold text-orange-400"> {{ imdata.data.title }}</small>
        </h4>
    </section>

    <section id="Binding_d" class="my-5">
        <h3 id="resources" class="mb-2 text-xl font-semibold text-green-300 underline">Binding data with html</h3>

        <p class="mb-6">Here shows how to bind data with html</p>
        <p class="mb-6">Attribute bind useing :title=""</p>

        <div class="image-gallery">
            <div class="image-card">
                <a :href="bindDataVar[0].link" target="_blank" rel="noopener">
                    <img :src="bindDataVar[0].src" alt="Mountain View" class="h-32 w-48 rounded object-cover" />
                    <div class="mt-2 text-center font-medium">{{ bindDataVar[0].name }}</div>
                </a>
            </div>
            <div class="image-card">
                <a :href="bindDataVar[1].link" target="_blank" rel="noopener">
                    <img :src="bindDataVar[1].src" alt="Forest Path" class="h-32 w-48 rounded object-cover" />
                    <div class="mt-2 text-center font-medium">Forest Path</div>
                </a>
            </div>
            <div class="image-card">
                <a :href="bindDataVar[2].link" target="_blank" rel="noopener">
                    <img :src="bindDataVar[2].src" alt="Lonely Tree" class="h-32 w-48 rounded object-cover" />
                    <div class="mt-2 text-center font-medium">{{ bindDataVar[2].name }}</div>
                </a>
            </div>

            <div class="image-card">
                <a :href="bindDataVar[2].link" target="_blank" rel="noopener">
                    <img v-bind="bindDataVar[2]" alt="Lonely Tree" class="h-32 w-48 rounded object-cover" />
                    <div class="mt-2 text-center font-medium">{{ bindDataVar[2].name }}</div>
                </a>
            </div>
        </div>
    </section>

    <section id="Binding" class="my-5">
        <h3 id="expressions_in_data_binding" class="mb-2 text-xl font-semibold text-green-300 underline">Script expressions in data binding</h3>

        <p class="mb-6">Expressions handling in data binding</p>

        <h2>{{ num }} * 4 = {{ num * 4 }}</h2>
        <h2>{{ num }} is {{ num % 2 == 0 ? 'Even' : 'Odd' }}</h2>
    </section>

    <section id="if-else-condition" class="my-10">
        <h3 id="" class="mb-2 text-xl font-semibold text-green-300 underline">if else</h3>

        <p class="mb-6">Showing weather using if-else</p>

        <div class="flex w-1/2 flex-col items-center justify-center space-y-4 bg-neutral-900">
            <h2 class="text-3xl">{{ location }}</h2>
            <h2 class="text-2xl" v-if="weather == 's'">Weather : Sunny</h2>
            <h2 class="text-2xl" v-else-if="weather == 'pc'">Weather : Partly cloud</h2>
            <h2 class="text-2xl" v-else-if="weather == 't'">Weather : Thunderstorm</h2>
            <h2 class="text-2xl" v-else-if="weather == 'r'">Weather : Rainy</h2>

            <div class="flex gap-6 rounded-xl bg-muted p-4">
                <div v-if="weather == 's'" class="flex flex-col items-center">
                    <span class="flex size-12 items-center justify-center rounded-full bg-blue-200 text-blue-700">
                        <!-- Sun Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="currentColor" />
                            <g stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                            </g>
                        </svg>
                    </span>
                    <span class="mt-2 text-sm font-semibold text-muted-foreground">Sunny</span>
                </div>
                <div v-if="weather == 'pc'" class="flex flex-col items-center">
                    <span class="flex size-12 items-center justify-center rounded-full bg-gray-300 text-gray-700">
                        <!-- Cloud Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <ellipse cx="12" cy="16" rx="7" ry="5" fill="currentColor" />
                            <ellipse cx="8" cy="14" rx="4" ry="3" fill="currentColor" />
                        </svg>
                    </span>
                    <span class="mt-2 text-sm font-semibold text-muted-foreground">Cloudy</span>
                </div>
                <div v-else-if="weather == 'r'" class="flex flex-col items-center">
                    <span class="flex size-12 items-center justify-center rounded-full bg-blue-300 text-blue-900">
                        <!-- Rain Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <ellipse cx="12" cy="14" rx="6" ry="4" fill="currentColor" />
                            <line x1="9" y1="18" x2="9" y2="21" stroke="currentColor" stroke-width="2" />
                            <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" stroke-width="2" />
                            <line x1="15" y1="18" x2="15" y2="21" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </span>
                    <span class="mt-2 text-sm font-semibold text-muted-foreground">Rainy</span>
                </div>
                <div v-else-if="weather == 't'" class="flex flex-col items-center">
                    <span class="flex size-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                        <!-- Thunder Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <polygon points="13,2 7,14 12,14 11,22 17,10 12,10" fill="currentColor" />
                        </svg>
                    </span>
                    <span class="mt-2 text-sm font-semibold text-muted-foreground">Thunder</span>
                </div>
            </div>
        </div>
    </section>

    <section id="class_style_binding" class="my-10">
        <h3 id="" class="mb-2 text-xl font-semibold text-green-300 underline">Class & Style Binding</h3>

        <p class="mb-6">Binding vue method in css in html class</p>
        <p class="mb-6" :class="redText">In this text color added by this [:class="redText"]</p>

        <Separator class="my-4 max-w-2/3" />
        <p class="mb-6">Use condition in a div using :style="..."</p>
        <pre class="my-4 w-auto overflow-x-auto rounded-lg bg-muted p-4 text-sm text-muted-foreground">
{ &lt;div class="w-1/3 h-10" :style="weakDay==true ? bgDarkBlue:bgDarkGreen "&gt;This is weekend&lt;/div&gt; }
            </pre
        >
        <div class="flex h-10 w-1/3 flex-col text-center" :style="weakDay == true ? bgDarkBlue : bgDarkGreen">This is weekend</div>
    </section>

    <section id="simple_loop" class="my-10">
        <div>
            <h3 id="" class="mb-2 text-xl font-semibold text-green-300 underline">Loop (v-for)</h3>

            <p class="mb-6">Simple loop for showing arrays data</p>
            <pre class="inline-block h-auto overflow-x-auto rounded-lg bg-black p-4 text-sm text-muted-foreground">
{ &lt;v-for="item in items" :key="item"&gt; }</pre
            >

            <div class="flex flex-wrap gap-4">
                <div class="mb-5 flex h-10 w-20 items-center justify-center rounded bg-muted text-muted-foreground" v-for="item in items" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>

        <div>
            <pre class="inline-block h-auto overflow-x-auto rounded-lg bg-muted p-4 text-sm text-muted-foreground">
{ &lt;v-for="n in 5" :key="n"&gt;}</pre
            >

            <div class="flex flex-wrap gap-4">
                <div class="mb-5 flex h-10 w-20 items-center justify-center rounded bg-muted text-muted-foreground" v-for="n in 5" :key="n">
                    {{ n }}
                </div>
            </div>
        </div>
        <Separator class="my-4 max-w-2/3" />
        <div>
            <h3 class="mb-2 text-xl font-semibold">Loop with index</h3>

            <pre class="inline-block h-auto overflow-x-auto rounded-lg bg-black p-4 text-sm text-muted-foreground">
{ &lt;v-for="(item ,index) in items" :key="item"&gt; }</pre
            >

            <div class="flex flex-wrap gap-4">
                <div
                    class="mb-5 flex h-10 w-20 items-center justify-center rounded bg-muted text-muted-foreground"
                    v-for="(item, index) in items"
                    :key="item"
                >
                    {{ item }} -index {{ index }}
                </div>
            </div>
        </div>
        <Separator class="my-4 max-w-2/3" />
        <div>
            <h3 class="mb-2 text-xl font-semibold">Loop for nested array</h3>
            <pre class="inline-block h-auto overflow-x-auto rounded-lg bg-stone-800 p-4 text-sm text-muted-foreground">
{ &lt; v-for="(quote, index) in quotes" // quote.message // quote.author&gt; }</pre
            >
            <div>
                <div class="mt-5 flex flex-wrap gap-4">
                    <div
                        v-for="(quote, index) in quotes"
                        :key="index"
                        class="inline-block h-auto max-w-xs min-w-[220px] rounded-lg bg-muted p-4 text-muted-foreground shadow transition hover:bg-muted/80"
                    >
                        <span class="mb-2 block text-base font-semibold">Quote {{ index + 1 }}</span>
                        <span class="mb-2 block italic">"{{ quote.message }}"</span>
                        <span class="block text-right text-sm text-muted-foreground">- {{ quote.author }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <Separator class="my-4 max-w-2/3" />

            <h3 class="mb-2 text-xl font-semibold">Filter object in a loop</h3>
            <pre class="inline-block h-auto overflow-x-auto rounded-lg bg-stone-800 p-4 text-sm text-muted-foreground">
{ &lt; v-for="task in filterTask()" :key="task.name&gt; }</pre
            >
            <br />
            <small>Showing completed tasks</small>
            <div class="mt-5 flex flex-wrap gap-4">
                <div
                    v-for="task in filterTask()"
                    :key="task.name"
                    class="inline-block h-auto max-w-xs min-w-[220px] rounded-lg bg-muted p-4 text-muted-foreground shadow transition hover:bg-muted/80"
                >
                    <span class="mb-2 block text-base font-semibold">{{ task.name }}</span>
                    <span class="block text-sm text-muted-foreground">Status: {{ task.status }}</span>
                </div>
            </div>
        </div>
    </section>

    <form @submit.prevent="submitForm" class="space-y-4">
        <!-- <CodeInput v-model="content" /> -->
        <!-- <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">
            Save
            </button> -->
    </form>
</template>

<style scoped>
.image-gallery {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.image-card {
    background: #14341855;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
}
</style>
