<template>
  <header class="bg-pink-500 text-white w-full shadow-md">
    <div
      id="header-wrapper"
      class="container mx-auto flex flex-wrap justify-between items-center p-4"
    >
      <div class="text-xl flex flex-nowrap items-center font-bold">
        <img
          id="header-avatar"
          src="/assets/img/logo.png"
          alt="Avatar"
          class="w-12 h-12 rounded-full mr-2 bg-slate-100 border-2 border-pink-600"
        />
        <h1 class="whitespace-nowrap">Bela Todo Dia</h1>
      </div>
      <nav class="space-x-4">
        <a href="/" class="hover:text-gray-200">Home</a>
        <div class="dropdown relative inline-block">
          <button @click="showOptions(1)" class="hover:text-gray-200">
            Maquiagem
          </button>
          <div
            v-if="optionsHeader === 1"
            class="dropdown-content left-0 absolute overflow-auto m-1 rounded bg-pink-600"
          >
            <a
              v-for="optionTitle in options[1].optionToSelect"
              class="block m-1 p-2 right-0 left-0 whitespace-nowrap rounded dark:hover:bg-pink-700"
              @click="goToCategory(optionTitle.link)"
              >{{ optionTitle.title }}</a
            >
          </div>
        </div>
        <div class="dropdown relative inline-block">
          <button @click="showOptions(2)" class="hover:text-gray-200">
            Skin Care
          </button>
          <div
            v-if="optionsHeader === 2"
            class="dropdown-content left-0 absolute overflow-auto m-1 rounded bg-pink-600"
          >
            <a
              v-for="optionTitle in options[2].optionToSelect"
              class="block m-1 p-2 whitespace-nowrap rounded dark:hover:bg-pink-700"
              >{{ optionTitle.title }}</a
            >
          </div>
        </div>
        <div class="dropdown relative inline-block">
          <button @click="showOptions(3)" class="hover:text-gray-200">
            Cabelo
          </button>
          <div
            v-if="optionsHeader === 3"
            class="dropdown-content left-0 absolute overflow-auto m-1 rounded bg-pink-600"
          >
            <a
              v-for="optionTitle in options[3].optionToSelect"
              class="block m-1 p-2 whitespace-nowrap rounded dark:hover:bg-pink-700"
              >{{ optionTitle.title }}</a
            >
          </div>
        </div>
        <div class="dropdown relative inline-block">
          <button @click="showOptions(4)" class="hover:text-gray-200">
            Acessorios
          </button>
          <div
            v-if="optionsHeader === 4"
            class="dropdown-content right-0 absolute overflow-auto m-1 rounded bg-pink-600"
          >
            <a
              v-for="optionTitle in options[4].optionToSelect"
              class="block m-1 p-2 whitespace-nowrap rounded dark:hover:bg-pink-700"
              >{{ optionTitle.title }}</a
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- <p>AppHeader</p>
  <div v-for="item in listItems" :key="item">
    {{ item }}
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { IOptionHeader } from "~/model/Header";
import { useItemsStore } from "~~/stores/items/items";

const nuxt = useNuxtApp();
const router = useRouter();
const items = useItemsStore();

// Data
const optionsHeader = ref(0);
const options = ref([{}] as IOptionHeader[]);

const listItems = computed(() => items.items);

// Method
const showOptions = (index: number) => {
  if (optionsHeader.value === index) {
    optionsHeader.value = 0;
    return;
  }
  optionsHeader.value = index;
};

const goToCategory = (category: string) => {
  router.replace(`${category}`);
};

const setOptions = async () => {
  options.value = [
    {
      option: "Home",
    },
    {
      option: "Maquiagem",
      optionToSelect: [
        {
          link: "maquiagem-olhos",
          title: "Maquiagem para os Olhos",
        },
        {
          link: "maquiagem-rosto",
          title: "Maquiagem para o Rosto",
        },
        {
          link: "maquiagem-labio",
          title: "Maquiagem para a Lábios",
        },
        {
          link: "pinceis",
          title: "Pincéis",
        },
      ],
    },
    {
      option: "Skin Care",
      optionToSelect: [
        {
          link: "cuidados-pele",
          title: "Cuidados com a Pele",
        },
        {
          link: "cuidados-corpo",
          title: "Cuidados com O Corpo",
        },
      ],
    },
    {
      option: "Cabelos",
      optionToSelect: [
        {
          link: "tratamento",
          title: "Tratamento",
        },
        {
          link: "kits-cabelos",
          title: "Kits para Cabelos",
        },
      ],
    },
    {
      option: "Acessórios",
      optionToSelect: [
        {
          link: "acessorios-cabelos",
          title: "Acessórios para Cabelos",
        },
        {
          link: "brincos",
          title: "Brincos",
        },
        {
          link: "anéis-pulseiras",
          title: "Anéis e Pulseiras",
        },
        {
          link: "colares",
          title: "Colares",
        },
        ,
        {
          link: "oculos",
          title: "Oculos",
        },
        {
          link: "chapéus",
          title: "Chapéus",
        },
      ],
    },
  ];
};

onMounted(async () => {
  await setOptions();
  console.log(listItems.value);
});
</script>

<style lang="scss" scoped></style>
