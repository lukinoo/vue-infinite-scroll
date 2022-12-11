<script setup lang="ts">
import InfiniteScrollVue from "./components/InfiniteScroll/InfiniteScroll.vue";
import Loading from "./components/Loading/Loading.vue";
import { TMovies } from "./types";
import { useFetch } from "./hooks/useFetch";
import { onBeforeMount } from "vue";

const apikey = `https://omdbapi.com/?s=spider+man&page=1&apikey=${
  import.meta.env.VITE_API_KEY as string
}`;

// onBeforeMount(async () => {
//   const { data, isLoading } = await useFetch<TMovies>(x);
// });
</script>

<template>
  <InfiniteScrollVue />
  <!-- <Loading /> -->
</template>

<style scoped></style>
