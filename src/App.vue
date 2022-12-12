<script setup lang="ts">
import InfiniteScrollVue from "./components/InfiniteScroll/InfiniteScroll.vue";
import { TMovies } from "./types";
import { onMounted, onUnmounted, ref } from "vue";

const movies = ref<TMovies[] | null>([]);
const loading = ref<boolean>(true);
const offset = ref<number>(1);

const API_URI = `https://omdbapi.com/?s=spider+man&apikey=${
  import.meta.env.VITE_API_KEY as string
}`;

const handleFetch = async () => {
  loading.value = true;
  fetch(API_URI + "&page=" + offset.value)
    .then((res) => res.json())
    .then((data) => {
      movies.value?.push(...data.Search);
      loading.value = false;
    })
    .catch((err) => {
      console.error(err);
      loading.value = false;
    });
};

const handleScroll = (e: Event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    document.documentElement as HTMLElement;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
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
  <InfiniteScrollVue :loading="loading" :movies="movies" />
  <!-- <Loading v-if="loading" /> -->
</template>

<style scoped></style>
