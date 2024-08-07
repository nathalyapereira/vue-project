<template>
  <div class="bg-pink-50 text-pink-400 w-full shadow-md">
    <div class="container mx-auto flex flex-wrap justify-center items-center p-4">
      <div class="text-xl flex flex-nowrap items-center font-bold">
        <h1 class="whitespace-nowrap">Bem-vindo a Bela Todo Dia</h1>
        </div>
    </div>
  </div>

  <!-- <p>AppHeader</p>
  <div v-for="item in listItems" :key="item">
    {{ item }}
  </div> -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useItemsStore } from "~~/stores/items/items";

const nuxt = useNuxtApp();
const items = useItemsStore();

const listItems = computed(() => items.items);
onMounted(() => {
  console.log(listItems.value);
});
</script>

<style lang="scss" scoped></style>
