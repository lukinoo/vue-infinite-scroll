<script setup lang="ts">
import InfiniteScrollVue from "./components/InfiniteScroll/InfiniteScroll.vue";
import Loading from "./components/Loading/Loading.vue";
import { TMovies } from "./types";
import { useFetch } from "./hooks/useFetch";
import { onMounted, ref } from "vue";

const movies = ref<TMovies[] | null>(null);
const loading = ref<boolean>(true);

const API_URL = `https://omdbapi.com/?s=spider+man&page=1&apikey=${
  import.meta.env.VITE_API_KEY as string
}`;

onMounted(async () => {
  const { data, isLoading } = await useFetch<TMovies>(API_URL);

  movies.value = data.value;
  loading.value = isLoading.value;

  console.log(movies.value);
});
</script>

<template>
  <InfiniteScrollVue />
  <Loading v-if="loading" />
</template>

<style scoped></style>
