<template>
  <div>test</div>
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
