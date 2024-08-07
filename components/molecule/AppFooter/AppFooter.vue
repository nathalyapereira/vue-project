<template>
  <footer class="bg-pink-500 text-white w-full fixed bottom-0">
    <div class="container mx-auto flex flex-wrap justify-between items-center p-4 ">
      <div class="text-sm flex-nowrap">
        &copy; 2024 Bela Todo Dia. Todos os direitos reservados.
      </div>
      <nav class="space-x-4">
        <a href="#" class="hover:text-gray-200">Privacidade</a>
        <a href="#" class="hover:text-gray-200">Termos</a>
        <a href="#" class="hover:text-gray-200">Contato</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
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
