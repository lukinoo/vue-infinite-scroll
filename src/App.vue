<script setup lang="ts">
import InfiniteScrollVue from "./components/InfiniteScroll/InfiniteScroll.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { TCards } from "./types";

const cards = ref<Array<TCards> | null>([]);
const loading = ref<boolean>(true);
const offset = ref<number>(1);

const API_URI = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

const handleFetch = async () => {
  loading.value = true;
  fetch(API_URI + offset.value)
    .then((res) => res.json())
    .then((data) => {
      cards.value?.push(...data.results);
      loading.value = false;
      console.log(cards.value);
    })
    .catch((err) => {
      console.error(err);
      loading.value = false;
    });
};

const handleScroll = (e: Event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    document.documentElement as HTMLElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    offset.value += 1;
    handleFetch();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <InfiniteScrollVue :loading="loading" :cards="cards" />
</template>

<style scoped></style>
