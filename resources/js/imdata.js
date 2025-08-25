import { reactive } from "vue";

const imdata = {
  data: {
    title: "Using Data in Vue",
    description: "Learn how to use data in Vue components effectively.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "This section provides an overview of how to use data in Vue components."
      },
      {
        id: "dataFromAnotherFile",
        title: "Data Import",
        content: "Learn how to import data from another file into your Vue component."
      },
      {
        id: "resources",
        title: "Resources",
        content: "Here are some resources to help you understand data usage in Vue."
      }
    ]
  },
  methods: {
    getData() {
      // This method can be used to fetch or manipulate data as needed
      return this.data;
    }
  }
};


const bindDataVar = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    name: "Mountain View",
    link: "https://unsplash.com/photos/1506744038136-46273834b3fb"
  },
  {
    src: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    name: "Forest Path",
    link: "https://www.pexels.com/photo/forest-path-34950/"
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    name: "Lonely Tree",
    link: "https://pixabay.com/photos/tree-sunset-clouds-sky-736885/"
  }
];

const accordionItemsLER = reactive([
  {
    heading: "Accordion 1",
    content: "This accordion explains the basics of Vue reactivity and how data updates the UI.",
    isOpen: true
  },
  {
    heading: "Accordion 2",
    content: "Learn about event handling in Vue and how to respond to user actions.",
    isOpen: false
  },
  {
    heading: "Accordion 3",
    content: "Discover computed properties and how they help derive values from reactive data.",
    isOpen: false
  },
  {
    heading: "Accordion 4",
    content: "Watchers let you run code in response to data changes in your Vue app.",
    isOpen: false
  }
]);


const images = [
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    title: "Mountain Lake"
  },
  {
    src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    title: "Forest Road"
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    title: "Sunny Beach"
  },
  {
    src: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    title: "City Night"
  }
];


const eventModifierHTML = `
<!-- the click events propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>`
;


const countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BD", name: "Bangladesh" },
  { code: "BE", name: "Belgium" },
  { code: "BR", name: "Brazil" },
  { code: "BG", name: "Bulgaria" },
  { code: "CA", name: "Canada" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "CU", name: "Cuba" },
  { code: "DK", name: "Denmark" },
  { code: "EG", name: "Egypt" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "GR", name: "Greece" },
  { code: "HK", name: "Hong Kong" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KR", name: "South Korea" },
  { code: "KW", name: "Kuwait" },
  { code: "LB", name: "Lebanon" },
  { code: "LY", name: "Libya" },
  { code: "LU", name: "Luxembourg" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "MX", name: "Mexico" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russia" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SG", name: "Singapore" },
  { code: "ZA", name: "South Africa" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TH", name: "Thailand" },
  { code: "TR", name: "Turkey" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Yemen" },
  { code: "ZW", name: "Zimbabwe" }
];



export default imdata ;

export { bindDataVar , accordionItemsLER ,images ,eventModifierHTML,countries };
