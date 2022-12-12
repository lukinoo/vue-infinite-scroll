<script setup lang="ts">
import InfiniteScrollVue from "./components/InfiniteScroll/InfiniteScroll.vue";
import Loading from "./components/Loading/Loading.vue";
import { TMovies } from "./types";
import { useFetch } from "./hooks/useFetch";
import { onMounted, ref } from "vue";

const movies = ref<TMovies[] | null>([]);
const loading = ref<boolean>(true);

const API_URI = `https://omdbapi.com/?s=spider+man&apikey=${
  import.meta.env.VITE_API_KEY as string
}`;

const handleFetch = async () => {
  const { data, isLoading } = await useFetch<TMovies>(API_URI);

  movies.value = data.value;
  loading.value = isLoading.value;
};

onMounted(() => {
  handleFetch();
});
</script>

<template>
  <InfiniteScrollVue :loading="loading" :movies="movies" />
  <Loading v-if="loading" />
</template>

<style scoped></style>
